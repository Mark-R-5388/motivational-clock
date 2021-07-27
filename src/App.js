import React from 'react'
import Clock from './Clock.js'
import Quote from './Quote.js'

import './App.css'
import Particles from 'react-tsparticles'

function App() {
  return (
    <div className='app-outer-container'>
      <Particles
        id='tsparticles'
        options={{
          background: {
            color: {
              value: 'rgb(3, 142, 160)',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.7,
                size: 10,
              },
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 150,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'square',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className='app-inner-container'>
        <header>
          <h1>Know the time and get moving!</h1>
        </header>

        <Clock />

        <Quote />
      </div>
    </div>
  )
}

export default App
