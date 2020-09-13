import React, { Component } from 'react'
import Context from './context'
import Hero from './components/Hero'
import Banner from './components/Banner'


export default class ProductDisplay extends Component {
    
    render() {
        return (
            <div>
            < Hero hero="productsHero">
                <Banner title="RANI PRINTERS" subtitle="--- THE RIGHT PARTNER YOUR PRINTING NEEDS ---"></Banner>
            </Hero>

                <Context ctype={this.props.match.params.group}/>                
            </div>
        )
    }
}


