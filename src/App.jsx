import React from 'react'
import logo from './logo.svg'
import Profile from './components/Profile'
import SocialLinks from "./components/SocialLinks"
import './App.css'
import Information from './components/Information'
import About from './components/About'
import Photo from './components/Photo'
import Pic from "./images/photo.png"

function App() {
  

  return (
    <main className="pt-page pt-page-current" data-id="home">
      <div className="section-inner start-page-content">
        <div className="page-header">
          <div className="row">
            <Photo src={Pic}/>

            <div className="col-sm-8 col-md-8 col-lg-8">
              <Profile name="Hamed Farahani" job="Web Designer" major="Frontend-developer"/>
              <SocialLinks/>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="row">
            <About/>
            <Information/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
