'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = ({ data }) => {
  const sectionEl = useRef(null)
  const headerData = data?.hero_header

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 0.5 } })

      tl.from(gsap.utils.toArray('.anim-word'), {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.02,
      })
        .from(
          '.anim-button',
          {
            scale: 0,
            duration: 1,
          },
          0.5,
        )
        .from(
          '.anim-video',
          {
            yPercent: 10,
            opacity: 0,
            duration: 1,
          },
          0.75,
        )
    },
    { dependencies: [sectionEl], scope: sectionEl },
  )

  return (
    <section id="hero" ref={sectionEl} className="relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-h1 xl:text-h1-xl mb-4">
            {headerData?.title}
          </h1>
          <p className="text-p xl:text-p-xl mb-6">
            {headerData?.description}
          </p>
        </div>

        <div className="w-full aspect-video rounded-[10px] anim-video">
          <div className="w-full h-full bg-gray-200 rounded-[10px]">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Hero Media
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
