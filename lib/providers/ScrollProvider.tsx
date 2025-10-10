'use client';
import { ReactLenis, useLenis } from 'lenis/react'
type Props = {
    children: React.ReactNode
}
export default function ScrollProvider({ children }: Props) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root options={{
        smoothWheel : true,
        lerp : 0.2,
        wheelMultiplier : .75,
    }} >
        {children}
    </ReactLenis>
  )
}