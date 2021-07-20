
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component{

  constructor(props) {
    super(props);
    this.state = {  
      id: '',
      name: '',
      status: false                        
    }
  }

  componentWillMount() {
    if(this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      });
      console.log('status ' + this.props.itemEditing.status);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      });
    } else if (!nextProps.itemEditing) {
      this.setState({
        id: '',
        name: '',
        status: false
      });
    }
  }
  onChange = (event) => {
    var target= event.target;
    var name = target.name;
    var value = target.value;
    if(name =='status') {
      value = target.value == 1 ? true : false;
    }
    console.log('status ' + target.value);
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    //this.props.onSubmit(this.state );
    this.props.onSaveTask(this.state);

  }

  onClear = (event) => {
    event.preventDefault();
    this.props.onClear();
  }

    render() {
      if (!this.props.isDisplayForm) return null;
      return (
        <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">{ !this.state.id ? 'Thêm công việc' :'Cập nhật Công Việc'}</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={!this.onSubmit ? this.onClear : this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" 
                     className="form-control"
                     name="name"
                     value={this.state.name}
                     onChange={this.onChange} />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control"
                    name="status"
                    value={this.state.status === true ? 1 : 0 }
                    onChange={this.onChange}>
              <option value={1} >Kích Hoạt</option>
              <option value={0} >Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
              <button type="submit" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
      isDisplayForm : state.isDisplayForm,
      itemEditing : state.ItemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask : (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm : () => {
      dispatch(actions.closeForm());
    },
    onOpenForm : () => {
      dispatch(actions.openForm());
    },
    onClear : () => {
      dispatch(actions.Clear());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskForm);