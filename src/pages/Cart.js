import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import {GoTrashcan} from 'react-icons/go'

export default class Cart extends Component {
  constructor(){
    super()
    if(JSON.parse(localStorage.getItem('cart'))===null){
      localStorage.setItem('cart',JSON.stringify([])) 
     }

    this.state={
      total:0,
      cartItem:JSON.parse(localStorage.getItem('cart'))
    }
    this.handleClick= this.handleClick.bind(this);
  }
  componentDidMount(){
    console.log( JSON.parse(localStorage.getItem('cart')))

  }

  handleClick=(e,param)=> {
    e.preventDefault();
    console.log(param.index)
    const copyArray = Object.assign([],this.state.cartItem);
    copyArray.splice(param.index,1)
    this.setState({
      cartItem: copyArray
    })
    window.location.reload(false);

}

  render() {
    localStorage.setItem('cart',JSON.stringify(this.state.cartItem))
    console.log(this.state.cartItem)
    return (
      <div>

        {this.state.cartItem.map((detail,index)=>{
          return <div>
            
            <Row style={{margin:'1rem',padding:'1rem'}}>         
                        
                <Col md={2}>
                  <img src={detail.img} alt="" width={70} className="img-fluid rounded shadow-sm" />
                        
                </Col>
                <Col style={{textAlign:'left',margin:'auto'}} md={6}>
                <h5 ><p className="text-dark d-inline-block">{detail.name}</p></h5>
                </Col>
                      <Col style={{textAlign:'left',margin:'auto'}} className="align-middle"><strong>{detail.price}</strong></Col>
                      <Col style={{textAlign:'left',margin:'auto'}} className="align-middle"><strong>{detail.qty}</strong></Col>
                      <Col  style={{textAlign:'left',margin:'auto'}} className="align-middle"><p  onClick={(e)=> this.handleClick(e,{index})} ><GoTrashcan style={{margin:'auto',textAlign:'center'}} size="20"/></p>
                      </Col>
                      
            </Row>
           <hr style={{margin:'0px 3rem 0px 3rem'}}/>

        </div>    
        
      }
      
      )
        }


      </div>
    )
  }
}
