'use client'

import { useIntersectionObserver } from 'hooks'

const Marquee = ({
  children,
  repeat = 2,
  duration = 5,
  offset = 0,
  $inverted = false,
  animationStart = true,
  style,
  ...props
}) => {
  const [setIntersectionRef, intersection] = useIntersectionObserver()

  return (
    <div
      ref={setIntersectionRef}
      {...props}
      className={
        `relative flex items-center overflow-x-clip whitespace-nowrap` +
        `marquee ` +
        `${$inverted && 'inverted'}${
          intersection?.isIntersecting && ' running'
        }`
      }
      style={{
        '--duration': duration + 's',
        '--offset': (offset % 100) + '%',
        '--animation-status':
          intersection?.isIntersecting && animationStart ? 'running' : 'paused',
      }}
    >
      {new Array(repeat).fill(children).map((_, i) => (
        <div key={i} className="flex items-center whitespace-nowrap w-fit shrink-0 will-change-transform">
          {children}
        </div>
      ))}
    </div>
  )
}

export default Marquee
