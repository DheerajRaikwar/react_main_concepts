import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
export default function Home() {
    return (
    <Hero>
        <Banner title="Travel Cities" subtitle="Ghoomo firo aish karo">
        <Link to="/Cities" className="btn-primary">Bhopal City</Link>
        </Banner>
    </Hero>

        )    
}
