import React from 'react'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import HeroUnderline from '../soical/SocialHeader'
import Headliner from '../CardHeadliner'
import ShowCard from '../Resturants/ShowCards'
import Footer from '../footer/Footer'
import Copyright from '../copyright/Copyright'

export default function LandingPage() {
    return (
        <div>
            <Header />
            <Hero />
            <HeroUnderline />
            <Headliner />
            <ShowCard />
            <Footer />
            <Copyright/>
        </div>
    )
}
