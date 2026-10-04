'use client'

import { useEffect, useRef } from 'react'
import { createScope, createTimeline, stagger } from 'animejs'
import './asl-loader.css'

export function ASLMark({ className = '', title }) {
  return (
    <svg
      viewBox="0 0 52 48"
      className={className}
      fill="none"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
    >
      <path className="asl-stroke asl-a" pathLength="1" d="M5 38L18 8L27 31H15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      <path className="asl-stroke asl-s" pathLength="1" d="M27 12H42L29 24L43 37H25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      <path className="asl-stroke asl-l" pathLength="1" d="M43 9V38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      <path className="asl-stroke asl-base" pathLength="1" d="M5 43H43" stroke="var(--asl-burgundy, #812b45)" strokeWidth="2.2" />
    </svg>
  )
}

export function ASLLogo({ className = '' }) {
  return (
    <span className={`asl-logo-lockup ${className}`}>
      <ASLMark className="asl-logo-mark" />
      <span>ASL</span>
    </span>
  )
}

export function ASLLoader({
  onComplete = () => {},
  playOncePerSession = true,
  storageKey = 'asl-intro-seen',
}) {
  const root = useRef(null)
  const scope = useRef(null)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    const seen = playOncePerSession && sessionStorage.getItem(storageKey) === '1'
    if (seen) {
      onCompleteRef.current()
      return undefined
    }

    scope.current = createScope({ root }).add(() => {
      createTimeline({
        defaults: { ease: 'out(4)' },
        onComplete: () => {
          if (playOncePerSession) sessionStorage.setItem(storageKey, '1')
          onCompleteRef.current()
        },
      })
        .add('.asl-loader-mark .asl-stroke', {
          opacity: [0, 1],
          x: (_, index) => [index % 2 ? 46 : -54, 0],
          y: (_, index) => [index === 1 ? -34 : 28, 0],
          rotate: (_, index) => [index % 2 ? 7 : -8, 0],
          duration: 950,
          delay: stagger(130),
        })
        .add('.asl-loader-mark .asl-stroke', {
          strokeDashoffset: [1, 0],
          duration: 1050,
          delay: stagger(90),
        }, '-=800')
        .add('.asl-loader-word', {
          opacity: [0, 1],
          letterSpacing: ['0.55em', '0.24em'],
          duration: 700,
        }, '-=430')
        .add('.asl-loader-signal', {
          scaleX: [0, 1],
          opacity: [0, 1],
          duration: 700,
        }, '-=600')
        .add('.asl-loader-lockup', {
          scale: [1, 0.78],
          y: [0, -12],
          duration: 620,
        }, '+=260')
        .add(root.current, {
          opacity: [1, 0],
          duration: 650,
          ease: 'inOut(3)',
        }, '-=260')
    })

    return () => scope.current?.revert()
  }, [playOncePerSession, storageKey])

  return (
    <div ref={root} className="asl-brand-loader" aria-hidden="true">
      <div className="asl-loader-backdrop" />
      <div className="asl-loader-lockup">
        <ASLMark className="asl-loader-mark" />
        <span className="asl-loader-word">ASL</span>
        <i className="asl-loader-signal" />
      </div>
    </div>
  )
}
