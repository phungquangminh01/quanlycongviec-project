
import { Component } from 'react';

class Result extends Component {
    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize : this.props.fontSize
        };
    }
    render() {
      
    console.log('render app');
      return (
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
                  <div id="content" style={ this.setStyle() }>
                    Nội dung setting
                  </div>
                </div>
          
      );
    }
}

export default Result;
