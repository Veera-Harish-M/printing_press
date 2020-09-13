import React from 'react'
import Hero from '../components/Hero'


function error() {
    return (
        <div>
           <Hero hero="errorHero">
               <div style={{color:'white',textAlign:'center'}} > 
           <h1 style={{fontSize:'10rem'}}>404</h1>
           <h2 style={{fontSize:'3rem'}} > Page Not found</h2>
           </div>
           </Hero>
        </div>
    )
}

export default error
