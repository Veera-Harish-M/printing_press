import React, { Component } from 'react'
import  {Jumbotron,CardDeck, Col,Row,Image,Button} from 'react-bootstrap'
import client from './contentful'
import Context from './context'
import {Link} from 'react-router-dom'

 class singleproduct extends Component {
    constructor()
    {
        super()
        if(JSON.parse(localStorage.getItem('cart'))===undefined){
        
        this.state={
            cart:[],
            productname:null,
            productprice:null,
            producturl:null,
            productstar:null,
            productdescription:null,
            productid:null
        }
      }else{
        
        this.state={
          cart:JSON.parse(localStorage.getItem('cart')),
          productname:null,
          productprice:null,
          producturl:null,
          productstar:null,
          productdescription:null,        
          productid:null
        }
        }
      this.handleClick= this.handleClick.bind(this); 
    }


    handleClick(e) {
      const { param } = e.target.dataset;
      console.log(JSON.parse(param)[0].id);
      console.log(this.state.cart)
      const res=this.state.cart.find((prod => prod.id === JSON.parse(param)[0].id.toString()))
      const index =this.state.cart.indexOf(res);
      if(index===-1){
          this.setState({ cart: this.state.cart.concat(JSON.parse(param)) })
      }else{
          console.log(res.qty)
          res.qty=res.qty+1;
          const st=this.state.cart;
          st[index]=res;
          this.setState({cart: st})
          console.log(index);
      }
      alert("Product Added To cart")  
    }

    componentDidMount(){
        const params  = this.props.match.params.slug
       
        client.getEntry(params)
        .then( (entry)=> {
            console.log(entry.fields)
            this.setState({
                productname: entry.fields.name,
                productprice:entry.fields.price,
                producturl:entry.fields.image.fields.file.url,
                productstar:entry.fields.star.fields.file.url,
                productdescription:entry.fields.description,
                productid:entry.sys.id
              })
            
        })
    }
    
    

    render() {
      localStorage.setItem('cart',JSON.stringify(this.state.cart))  
      return (
        
            <div style={{padding:'3rem'}}>
    <Row>
        <Col md={2}>
        </Col>
        <Col md={4}>
          < Image src={this.state.producturl}/>
        </Col>
        <Col md={4}>
          <div>
            <h2>{this.state.productname}</h2>
            <p style={{paddingTop:'2rem',paddingBottom:'1rem'}}>
            {this.state.productdescription}
            </p>
            <br />
            <h6 style={{paddingRight:'1rem'}}>Price:</h6>
            <h4>₹{this.state.productprice}</h4>
            <Row style={ {color: 'white'}} >
              <Col md={12}>
              < Image width="140px" height="40px" src={this.state.productstar}/>

              </Col>
            </Row>
            <br />
            <Button variant="danger"><small data-param={JSON.stringify([{"id":this.state.productid,"name":this.state.productname,"price":this.state.productprice,"img":this.state.producturl,"qty":1}])} onClick={this.handleClick}>
                                 Add to cart</small></Button>
            <br /><br />
            <Link to="/payment"><Button variant="primary">Buy now</Button></Link>
          </div>
        </Col>
      </Row>


      <Jumbotron style={{background:'white'}}>
      
            
            <Row> 
                <Col md={3}></Col>
                <Col md={6}>
            <div className="Trending">
            <span><h1 className="hTrending">You'll Like</h1></span>
          </div>

          <div className="TRENDING">
            <span><h6 className="h6Trending"><b>YOU MAY LIKE</b></h6></span>
          </div>
            </Col>
            <Col md={3}></Col>
            </Row>
        <Row>
        <Col md={1}></Col>
        <Col md={10}>
            <CardDeck >
                
                <Context ctype="trendingproduct"/>  
            
            </CardDeck>
        </Col>
        <Col md={1}></Col>
        </Row>




            <Row style={{paddingBottom:'3rem'}}>  
                <Col md={3}></Col>
                <Col md={6}>
            <div className="Trending">
            <span><h1 className="hTrending">Category</h1></span>
          </div>

          <div className="TRENDING">
            <span><h6 className="h6Trending"><b>SHOP BY CATEGORY</b></h6></span>
          </div>
            </Col>
            <Col md={3}></Col>
            </Row>
<div style={{textAlign:'center'}}>
            <Button variant="primary"><Link style={{color:'white'}} to={'/category/printproducts'}>Calender</Link></Button>{' '}
            <Button variant="dark"><Link style={{color:'white'}} to={'/category/invitation'}>Weading Cards</Link></Button>{' '}
            <Button variant="success"><Link style={{color:'white'}} to={'/category/visitingcard'}>Visiting Card</Link></Button>{' '}
            <Button variant="warning"><Link style={{color:'white'}} to={'/category/gifts'}>Gifts Cards</Link></Button>{' '}
            <Button variant="danger"><Link style={{color:'white'}} to={'/category/banner'}>Banners</Link></Button>{' '}
            <Button variant="info"><Link style={{color:'white'}} to={'/category/diary'}>Diary</Link></Button>{' '}
            </div>
            </Jumbotron>
            
            </div>
        )
    }
}


export default singleproduct;