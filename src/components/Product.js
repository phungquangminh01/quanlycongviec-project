
import React, { Component } from 'react';
import Item from './Item';

class Product extends Component{

    constructor(props) {
      super(props);
      //this.onAddProduct = this.onAddProduct.bind(this);
      this.state = {
        products : [
          {
            id: 1,
            name: 'I Phone 7',
            price: 15000000,
            img: 'https://thegioiso.vn/wp-content/uploads/2021/05/iphone-12-purple-select-2021-1.png',
            status: true
          },
          {
            id: 2,
            name: 'I Phone 8',
            price: 15000000,
            img: 'https://thegioiso.vn/wp-content/uploads/2021/05/iphone-12-purple-select-2021-1.png',
            status: true
          },
          {
            id: 3,
            name: 'I Phone 9',
            price: 15000000,
            img: 'https://thegioiso.vn/wp-content/uploads/2021/05/iphone-12-purple-select-2021-1.png',
            status: true
          },
          {
            id: 4,
            name: 'I Phone 10',
            price: 15000000,
            img: 'https://thegioiso.vn/wp-content/uploads/2021/05/iphone-12-purple-select-2021-1.png',
            status: true
          }
        ],
        isActive : true,

        txtName: 'da',
        txtPassword: '',
        txtDesc: '',
        sltGender: 1,
        rdLang: 'vi',
        chkbStatus: true
      };
      this.onHandleChange = this.onHandleChange.bind(this);
      this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
// mount unmount
    onClick() {
      console.log('this is minh');
    }
    onClick2(text) {
      console.log(text);
    }

    onAddProduct = () => {
      console.log(this.refs.name.value);
    }

    onSetState = () => {
        this.setState({
          isActive: !this.state.isActive
        })
    }


    // On change
    onHandleChange(event) {
      var target = event.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value
      });
    }

    onHandleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
    }
    render() {
        var elements = this.state.products.map((product, index) => {
            if(product.status) {
                return <Item
                        key={ index }
                        price={ product.price }
                        img={ product.img }
                        >
                            { product.name }
                        </Item>
            }
            return elements = '';
        });
      return (
          <div className="container">
              <div className="row">
                <div className="row">
                  <div className="col-xs- col-sm- col-md- col-lg-">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                          <h3 className="panel-title">Thêm Sản Phẩm</h3>
                        </div>
                        <div className="panel-body">
                          {/* <div className="form-group">
                            <label>Tên Sản Phẩm</label>
                            <input type="text" className="form-control" ref="name" />
                          </div>
                          <button type="submit" className="btn btn-primary" onClick={ this.onAddProduct }>
                              Lưu
                          </button> */}

                         
                         <form onSubmit={ this.onHandleSubmit }>
                           <legend>Form title</legend>
                         
                           <div className="form-group">
                             <label>Name:</label>
                             <input type="text" 
                                    className="form-control" 
                                    name="txtName"
                                    onChange={ this.onHandleChange }
                                    value={this.state.txtName} />
                           </div>
                           <div className="form-group">
                             <label>Password:</label>
                             <input type="password" 
                                    className="form-control" 
                                    name="txtPassword"
                                    onChange={ this.onHandleChange }
                                    value={this.state.txtPassword} />
                           </div>
                           <div className="form-group">
                             <label>Mô tả:</label>
                             <textarea name="" 
                                       id="input"
                                       className="form-control" 
                                       rows="3"
                                       name="txtDesc" 
                                       onChange={ this.onHandleChange }
                                       value={this.state.txtDesc}>
                                       </textarea>
                           </div>
                           
                           <label>Giới tính</label>
                           <select name="sltGender"
                                   className="form-control"
                                   value={this.state.sltGender}
                                   onChange={ this.onHandleChange }>
                             <option value={0}>Nử</option>
                             <option value={1} >Nam</option>
                           </select>
                           <br/>

                           <label>Ngôn ngữ</label>
                           <div className="radio">
                             <label>
                               <input type="radio" 
                                      name="rdLang"
                                      value="en"
                                      onChange={ this.onHandleChange }
                                      checked={ this.state.rdLang === 'en' }
                                       />
                               English
                             </label>
                           </div>
                           <div className="radio">
                             <label>
                               <input type="radio" 
                                      name="rdLang" 
                                      value="vi" 
                                      onChange={ this.onHandleChange }
                                      checked={ this.state.rdLang === 'vi'}/>
                               VietNam
                             </label>
                           </div>
                           
                           <div className="checkbox">
                             <label>
                               <input type="checkbox" 
                                      name="chkbStatus"
                                      value={true}
                                      onChange={ this.onHandleChange }
                                      checked={ this.state.chkbStatus === true} />
                               Trạng thái
                             </label>
                           </div>
                           
                           <button type="submit" className="btn btn-primary">Submit</button>
                           <button type="reset" className="btn btn-default">Xóa trăng</button>       
                         </form>
                         
                        </div>
                    </div>
                    
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên Sản Phẩm</th>
                          <th>Giá</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>IPhone 6</td>
                          <td>
                            <span className="label label-success">15.000.000</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button type="button" className="btn btn-warning" onClick={this.onSetState}>
                      Active : {this.state.isActive === true ? '1' : '0' }
                    </button>
                  </div>
                </div>
                
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      { elements }
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <button type="button" 
                              className="btn btn-warning"
                              onClick={ this.onClick }>
                        Click
                      </button>  
                      <button type="button" 
                              className="btn btn-warning"
                              onClick={() => { this.onClick2('abc')} }>
                        Click 2
                      </button>      
                  </div>
              </div>
          </div>
      );
    }
}

export default Product;