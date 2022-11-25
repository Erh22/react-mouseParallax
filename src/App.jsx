import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { useState } from 'react'
import character_f2e from './assets/img/character_f2e.gif'
import character_team from './assets/img/character_team.gif'
import character_ui from './assets/img/character_ui.gif'

function App() {

  return (
    <div className="main">
      <section className='section01'>
        <div className='container'>
          <MouseParallaxContainer containerStyle={{display:'flex',overflow:'visible',width:'100%',justifyContent:'center',alignItems:'flex-end',height:'100vh',zIndex:'2'}}>
            <MouseParallaxChild factorX={0.1} factorY={0} style={{width:'300px',display:'flex'}}>
              <img src={character_f2e} alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.1} factorY={0} style={{width:'300px',display:'flex',zIndex:'2'}}>
              <img src={character_ui} alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.1} factorY={0} style={{width:'300px',display:'flex'}}>
              <img src={character_team} alt="" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <div className="road"></div>
        </div>
      </section>
    </div>
  )
}

export default App
