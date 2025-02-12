"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useCallback, useMemo } from "react"
import { createNoise3D } from "simplex-noise"
import { motion } from "framer-motion"

interface VortexProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  particleCount?: number
  baseHue?: number
  baseSpeed?: number
  rangeSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
  slowdownFactor?: number
}

export const Vortex = (props: VortexProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particleCount = props.particleCount || 900
  const particlePropCount = 9
  const particlePropsLength = particleCount * particlePropCount
  const baseTTL = 70
  const rangeTTL = 200
  const baseSpeed = props.baseSpeed || 0.0
  const rangeSpeed = props.rangeSpeed || 1
  const baseRadius = props.baseRadius || 1
  const rangeRadius = props.rangeRadius || 2
  const baseHue = props.baseHue || 220
  const rangeHue = 100
  const noiseSteps = 3
  const xOff = 0.00125
  const yOff = 0.00125
  const zOffSlowdown = 0.0005 * (props.slowdownFactor || 1)
  const backgroundColor = props.backgroundColor || "#000000"
  let tick = 0
  const noise3D = createNoise3D()
  let particleProps = new Float32Array(particlePropsLength)
  const center = useMemo(() => [0, 0] as [number, number], [])

  const TAU: number = 2 * Math.PI
  const rand = (n: number): number => n * Math.random()
  const randRange = (n: number): number => n - rand(2 * n)
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m
    return Math.abs(((t + hm) % m) - hm) / hm
  }
  const lerp = (n1: number, n2: number, speed: number): number => (1 - speed) * n1 + speed * n2

  const resize = useCallback((canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window
    canvas.width = innerWidth
    canvas.height = innerHeight
    center[0] = 0.5 * canvas.width
    center[1] = 0.5 * canvas.height
  }, [center])

  const initParticles = () => {
    tick = 0
    particleProps = new Float32Array(particlePropsLength)

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i)
    }
  }

  const initParticle = (i: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const x = rand(canvas.width)
    const y = rand(canvas.height)
    const vx = randRange(rangeSpeed)
    const vy = randRange(rangeSpeed)
    const life = 0
    const ttl = baseTTL + rand(rangeTTL)
    const speed = baseSpeed + rand(rangeSpeed)
    const radius = baseRadius + rand(rangeRadius)
    const hue = baseHue + rand(rangeHue)

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
  }

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawParticles(ctx)
    renderGlow(canvas, ctx)
    renderToScreen(canvas, ctx)
    window.requestAnimationFrame(() => draw(canvas, ctx))
  }

  const setup = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    resize(canvas)
    initParticles()
    draw(canvas, ctx)
  }, [resize, draw, initParticles])

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx)
    }
  }

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i

    const x = particleProps[i]
    const y = particleProps[i2]
    const n = noise3D(x * xOff, y * yOff, tick * zOffSlowdown) * noiseSteps * TAU
    const vx = lerp(particleProps[i3], Math.cos(n), 0.5)
    const vy = lerp(particleProps[i4], Math.sin(n), 0.5)
    const life = particleProps[i5]
    const ttl = particleProps[i6]
    const speed = particleProps[i7] * (props.slowdownFactor || 1)
    const x2 = x + vx * speed
    const y2 = y + vy * speed
    const radius = particleProps[i8]
    const hue = particleProps[i9]

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx)

    particleProps[i] = x2
    particleProps[i2] = y2
    particleProps[i3] = vx
    particleProps[i4] = vy
    particleProps[i5] = life + 1
    
    if (checkBounds(x, y, canvas) || life > ttl) {
      initParticle(i)
    }
  }

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.save()
    ctx.lineCap = "round"
    ctx.lineWidth = radius
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0
  }

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save()
    ctx.filter = "blur(8px) brightness(200%)"
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()

    ctx.save()
    ctx.filter = "blur(4px) brightness(200%)"
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()
  }

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save()
    ctx.globalCompositeOperation = "source-over"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()
  }

  useEffect(() => {
    setup()
    const handleResize = () => {
      const canvas = canvasRef.current
      if (canvas) {
        resize(canvas)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [setup, resize])

  return (
    <div className={cn("relative h-full w-full bg-neutral-950", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>{props.children}</div>
    </div>
  )
}

