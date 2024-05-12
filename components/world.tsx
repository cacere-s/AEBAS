'use client'

import { useCobe } from '@/hooks/useWorld'

export const World = () => {
  const { refCanvas } = useCobe()
  return (
    <>
      <canvas
        className='animate-fade-up animate-delay-[1500ms] animate-duration-[2000ms]'
        ref={refCanvas}
        style={{ width: 400, height: 400, maxWidth: '100%', aspectRatio: 1 }}
      />
    </>
  )
}
