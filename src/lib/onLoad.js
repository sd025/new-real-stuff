'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

gsap.registerPlugin(useGSAP)

export default function ResetAnimation() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/about') {
      const mainElement = document.getElementById('main')
      const headerElement = document.getElementById('header')
      
      if (mainElement && headerElement) {
        mainElement.style.paddingTop = headerElement.offsetHeight + 'px'
      }
    }
  }, [pathname])

  useGSAP(
    () => {
      gsap.set('#main', { autoAlpha: 1 })
    },
    { dependencies: [pathname] },
  )
}
