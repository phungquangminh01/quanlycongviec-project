
import { Component } from 'react';

class Item extends Component {
  
  constructor(props) {
      super(props);
      this.onAddToCart = this.onAddToCart.bind(this);
  }  
  onAddToCart() {
      console.log(this.props.children);
  }
  onAddToCart2 = () => {
    console.log('arrow on card');
}
  render() {
    return (
        <div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img alt={ this.props.name } src={ this.props.img }></img>
                    <div className="caption">
                        <h3>
                            { this.props.children }
                        </h3>
                        <p>
                            { this.props.price } VNĐ
                        </p>
                        <p>
                           <button type="button" 
                                   className="btn btn-default"
                                   onClick={this.onAddToCart2}
                                   >
                                       Mua Hàng
                           </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export default Item;