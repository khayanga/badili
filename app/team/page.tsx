
import CoreValues from '@/components/CoreValues'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <main>
        <Navbar/>
        <CoreValues/>
        <Team/>
        <Footer/>
    </main>
  )
}

export default page