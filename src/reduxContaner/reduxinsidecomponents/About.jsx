import React from 'react'
import { useSelector } from 'react-redux'

function About() {
    const ab=useSelector(state=>state.about_page);
  return (
    <div>
        <h1>hello i m about page {ab}</h1>
    </div>
  )
}

export default About