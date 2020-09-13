import React from 'react'
import {Image,Col,Row,CardDeck,Jumbotron,Button} from 'react-bootstrap'
import Thank from './images/thanks.jpg'
import Context from '../context'
import {Link} from 'react-router-dom'

function Thanks() {
    return (
        <div style={{textAlign:'center',backgroundColor:'#a79db5'}}>
            <Image height="400px" src={Thank} alt="Thanks for Purchasing"/><br/>
            <Button style={{ borderRadius: '0rem'}} block size="lg" variant="danger"><Link style={{color:'white',fontSize:'1rem'}} to="/">Continue Shopping</Link></Button>
            <Jumbotron>
            
                <Row> 
                    <Col md={3}></Col>
                    <Col md={6}>
                <div className="Trending">
	            	<span><h1 className="hTrending">You May Like</h1></span>
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

                <Button variant="primary"><Link style={{color:'white'}} to={'/category/printproducts'}>Calender</Link></Button>{' '}
                <Button variant="dark"><Link style={{color:'white'}} to={'/category/invitation'}>Weading Cards</Link></Button>{' '}
                <Button variant="success"><Link style={{color:'white'}} to={'/category/visitingcard'}>Visiting Card</Link></Button>{' '}
                <Button variant="warning"><Link style={{color:'white'}} to={'/category/gifts'}>Gifts Cards</Link></Button>{' '}
                <Button variant="danger"><Link style={{color:'white'}} to={'/category/banner'}>Banners</Link></Button>{' '}
                <Button variant="info"><Link style={{color:'white'}} to={'/category/diary'}>Diary</Link></Button>{' '}
                </Jumbotron>
               

        </div>

    )
}

export default Thanks
