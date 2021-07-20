
import { Component } from 'react';

class Reset extends Component {
    onResetDefault = () =>{
        this.props.onSettingDefault(true);
    }
    render() {
      return (
        <div>
            <button type="button" class="btn btn-primary" onClick= {this.onResetDefault}>reset</button> 
        </div>
      );
    }
}

export default Reset;
