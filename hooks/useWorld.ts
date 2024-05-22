'use client'
import createGlobe from 'cobe'
import { MutableRefObject, useEffect, useRef } from 'react'

export function useCobe () {
  const refCanvas: MutableRefObject<any> = useRef()

  useEffect(() => {
    let phi = 0

    const globe = createGlobe(refCanvas.current, {
      devicePixelRatio: 2,
      width: 850,
      height: 850,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1,
      mapSamples: 16000,
      mapBrightness: 4,
      baseColor: [1, 1, 1],
      markerColor: [0, 0, 0],
      glowColor: [0.2, 0.2, 0.25],
      markers: [
        // longitude latitude
        { location: [6.25184, -75.56359], size: 0.07 },
        { location: [57.78, -122.412], size: 0.07 },
        { location: [52.52, 13.405], size: 0.07 },
        { location: [35.676, 139.65], size: 0.07 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.003
      }
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return { refCanvas }
}
