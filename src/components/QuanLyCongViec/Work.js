
import { Component } from 'react';
import  TaskForm  from './TaskForm';
import Controls from './Controls';
import TaskList from './TaskList';

import { findIndex } from 'lodash';

import { connect } from 'react-redux';
import * as actions from './../actions/index';


class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: [],
        taskEditing: null,
        sortBy: 'name',
        sortValue: 1
      }
  }

  componentWillMount() {
      if(localStorage && localStorage.getItem('tasks')) {
          var tasks = JSON.parse(localStorage.getItem('tasks'));
          this.setState({
              tasks: tasks
          })
      }
  }
  


  onToggleForm = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== ''){
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    
    this.props.onClearTask({
        id : '',
        name: '',
        status: false
    });
  }


  onGenerateData = () =>  {
    var tasks = [
        {
            id: this.generateID(),
            name: 'MInh',
            status: true
        },
        {
            id: this.generateID(),
            name: 'Tuan',
            status: false
        },
        {
            id: this.generateID(),
            name: 'Nhat',
            status: false
        }
    ]
    this.setState({
        tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing : taskEditing,
      isDisplayForm : true
    });
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
        sortBy: sortBy,
        sortValue: sortValue
    });
  }
  render() {
      var { isDisplayForm } = this.props;
      var { tasks,
            sortBy,
            sortValue } = this.state; // tasks = this.state.tasks

    return (
        <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <TaskForm /> 
          </div>
          <div className={ isDisplayForm ?  'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" 
                    className='btn btn-primary'
                    onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5" />
                Thêm Công Việc
            </button>
            
            <button type="button" 
                    className="btn btn-danger ml-5"
                    onClick={this.onGenerateData}>Generate Date</button>
            
             <Controls />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} 
                          onUpdate={this.onUpdate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        )
    }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm : () => {
      dispatch(actions.toggleForm())
    },
    onClearTask : (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm : () => {
      dispatch(actions.openForm());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Work);