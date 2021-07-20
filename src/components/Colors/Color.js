
import { Component } from 'react';
import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';
import Reset from './Reset';
import Result from './Result';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      fontSize: 12
    };
  }

  showColor(color) {
    console.log(this.props.color);
    return {
      backgroundColor : color
    };
  }

  onSetColor = (params) => {
    this.setState({
      color: params
    });
  }

  onChangeSize = (value) => {
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  }

  onSettingDefault = (value) => {
    if(value) {
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
  }
    render() {
      return (
        <div>
            <div className="container mt-50">
                <div className="row">
                  <ColorPicker color = { this.state.color }
                               onReceiveColor = { this.onSetColor } />
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <SizeSetting fontSize={ this.state.fontSize }
                               onChangeSize={ this.onChangeSize }/>
                  <Reset onSettingDefault={ this.onSettingDefault } />
                  </div>
                </div>
              </div>
              <div className="row">
              <Result color= { this.state.color } 
                      fontSize={ this.state.fontSize }/>
              </div>
        </div>
      );
    }
}

export default Color;