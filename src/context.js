import React, { Component } from 'react'
import Client from './contentful';
import {Card,Button,Jumbotron} from 'react-bootstrap'
import { Link,withRouter } from 'react-router-dom';

 class context extends Component {

    constructor() {

        super();
        this.sortingasc=this.sortingasc.bind(this);
        this.sortingdesc=this.sortingdesc.bind(this);
        this.defaultstatechange=this.defaultstatechange.bind(this);
        this.handleClick= this.handleClick.bind(this);
        if(JSON.parse(localStorage.getItem('cart'))===null){
        localStorage.setItem('cart',JSON.stringify([])) 
       }
            this.state = {
                cart:JSON.parse(localStorage.getItem('cart')),
                cont:null,
                products:[]
        };
      }

      componentDidMount() {

        const contype=this.props.ctype;
        this.setState({cont:contype})

        Client.getEntries(
            {
                content_type: contype            
            }
        ).then((response) => {
            this.setState({products: response.items})
        })
       
          
      }

      sortingasc(){
        
        const contype=this.state.cont
        
        Client.getEntries(
            {content_type: contype,
                order: 'fields.price'
            }
        ).then((response) => {
            this.setState({products: response.items})
        })
        
      }


      sortingdesc(){

        
        const contype=this.state.cont
        Client.getEntries(
            {content_type: contype,
                order: '-fields.price'
            }
        ).then((response) => {
            this.setState({products: response.items})
        })
      

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

      
      defaultstatechange(){
        const contype=this.state.cont
        
        Client.getEntries(
            {
                content_type: contype    
            }
        ).then((response) => {
            this.setState({products: response.items})
        })
          
      }

    render() {
        console.log(this.state.cart)
        localStorage.setItem('cart',JSON.stringify(this.state.cart))
        console.log(JSON.parse(localStorage.getItem('cart')))
        return (
            <div>
            {this.state.cont !=="trendingproduct"?
                <Jumbotron style={{textAlign:"center", paddingTop:"2rem", paddingBottom:'2rem'}}>
                <Button  onClick={this.sortingasc}>Sort Price LOW to HIGH</Button>{" "} 
                <Button onClick={this.sortingdesc}>Sort Price HIGH to LOW</Button><br/>
                <Button style={{marginTop:'0.5rem'}} variant="light"  onClick={this.defaultstatechange} >clear filters</Button>
                </Jumbotron>
            :<></>
        }
                <section className="services">
    
                <div className="services-center">

            {this.state.products.map((product,index) =>{
                
                return <article key={index} className="service">
                     
                        <Card style={{textAlign:'left'}}>
                        <Link to={`/product/${product.sys.id}`}> 
                            <Card.Img   variant="top" src={product.fields.image.fields.file.url} />
                            <Card.Body>
                            <Card.Title>{product.fields.name}</Card.Title>
                            <Card.Text style={{textAlign:'left',marginLeft:'0px'}}>
                            ₹{product.fields.price}

                            </Card.Text>

                            
                                <Card.Img align="right" style={{ width:'100px',height:'30px'}} src={product.fields.star.fields.file.url} />
                                </Card.Body>
                        </Link>
                                <Card.Footer  style={{cursor:'pointer'}}>
                                <small className="text-muted" 
                                 data-param={JSON.stringify([{"id":product.sys.id,"name":product.fields.name,"price":product.fields.price,"img":product.fields.image.fields.file.url,"qty":1}])} onClick={this.handleClick}>
                                    
                                Add To Cart <b>+</b></small>
                                </Card.Footer>
                            

                        </Card>
                 
             </article>
                })}
              </div> 
              </section>    

            </div>
        )
    }
}

export default withRouter(context)