import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Register from '../components/Register'
import Promotion from '../components/Promotion'
import Promote from '../components/Promote'
import Footer from '../components/Footer'
import Articles from '../components/Articles'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Test Betworlds888 | พนันออนไลน์ คาสิโน</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300&display=swap" rel="stylesheet"/>
        
      </Head>
      <div className="mx-auto bg-[url('/image/bg2.png')] bg-contain bg-fixed min-h-screen h-full">
          <div className='flex flex-col min-h-full gap-8'>
            <Header/>
            <Carousel/>
            <Register/>
            <Promote/>
            <Promotion/>
            <Articles/>
            <Footer/>
          </div>
      </div>
      </React.Fragment>
  )
}
export default Home
