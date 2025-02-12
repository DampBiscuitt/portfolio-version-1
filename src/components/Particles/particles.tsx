'use client'

import React, { FunctionComponent, useCallback } from 'react'
import ReactParticles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { useWindowSize } from 'usehooks-ts'

export const Particles: FunctionComponent = () => {
  const windowSize = useWindowSize()

  const handleParticlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <ReactParticles
      init={handleParticlesInit}
      options={{
        background: {
          color: {
            value: '#354C61'
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse'
            }
          }
        },
        particles: {
          links: {
            enable: true
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: (windowSize.width * windowSize.height) / 13824
          },
          opacity: {
            value: 0.7
          },
          size: {
            value: 1
          }
        }
      }}
    />
  )
}