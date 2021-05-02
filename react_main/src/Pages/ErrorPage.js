import React from 'react'
import Banner from '../component/Banner';
import Hero from '../component/Hero';
import {Link} from 'react-router-dom';
export default function ErrorPage()
{
    return(
       <Hero>
           <Banner title="Error" subtitle="Not any available page">
               <Link to="/" className="btn-primary">
                   Home
               </Link>
           </Banner>
       </Hero>
    )
}