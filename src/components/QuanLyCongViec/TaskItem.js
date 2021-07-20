
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component{
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.tasks.id);
  }

  onDelete = () => {
    this.props.onDeleteTask(this.props.tasks.id);
    this.props.onCloseForm();
  }

  onEditItem = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.tasks);
  }
    render() {
        var { tasks, index } = this.props;
      return (
                    <tr>
                      <td>{ index + 1 }</td>
                      <td>{ tasks.name }</td>
                      <td className="text-center">
                        <span className={tasks.status === true ? 'label label-danger' : 'label label-success'}
                              onClick={this.onUpdateStatus}>
                          {tasks.status === true ? 'kích hoạt' : 'chưa kích hoạt'}
                        </span>
                      </td>
                      <td className="text-center">
                        <button type="button" 
                                className="btn btn-warning"
                                onClick={this.onEditItem}>
                          <span className="fa fa-pencil mr-5" />Sửa
                        </button>
                        &nbsp;
                        <button type="button" 
                                className="btn btn-danger"
                                onClick={this.onDelete}  >
                          <span className="fa fa-trash mr-5" />Xóa
                        </button>
                      </td>
                    </tr>
      );
    }
}

const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus : (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteTask : (id) => {
      dispatch(actions.deleteTask(id))
    },
    onCloseForm : () => {
      dispatch(actions.closeForm());
    },
    onOpenForm : () => {
      dispatch(actions.openForm());
    },
    onEditTask : (task) => {
      dispatch(actions.editTask(task));
    },
    onClear : () => {
      dispatch(actions.Clear());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskItem);