"use client"
import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const beam1Ref = useRef<HTMLDivElement>(null)
    const beam2Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        const beam1 = beam1Ref.current
        const beam2 = beam2Ref.current
        if (!section || !beam1 || !beam2) return

        let frame: number

        const handleMouseMove = (e: MouseEvent) => {
            const rect = section.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(() => {
                beam1.style.transform = `translate(${x - 150}px, ${y - 400}px) rotate(25deg)`
                beam2.style.transform = `translate(${x - 350}px, ${y - 300}px) rotate(-15deg)`
            })
        }

        const handleScroll = () => {
            const offset = window.scrollY
            beam1.style.opacity = String(Math.max(0.15, 0.6 - offset / 300))
            beam2.style.opacity = String(Math.max(0.1, 0.5 - offset / 300))
        }

        section.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            section.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('scroll', handleScroll)
            cancelAnimationFrame(frame)
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-ink text-white">
            {/* Light beams */}
            <div
                ref={beam1Ref}
                className="pointer-events-none absolute top-0 left-0 h-[500px] w-[200px] rounded-full bg-accent/30 blur-[100px] transition-transform duration-500 ease-out"
            ></div>
            <div
                ref={beam2Ref}
                className="pointer-events-none absolute top-0 left-0 h-[400px] w-[150px] rounded-full bg-cyan-400/20 blur-[90px] transition-transform duration-700 ease-out"
            ></div>

            <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "48px 48px"
                }}>
            </div>
            <div className="relative max-w-6xl mx-auto px-6 py-15">
                <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
                    I Design it <br/>
                    I Code it <br/>
                    <span className="text-accent">I bring it to life.</span>
                </h1>

                <p className="max-w-xl text-muted mb-10 text-lg">
                    Software Engineering student at the University of Technology, Mauritius, currently interning at MetaBox Technology in Port Louis. I turn interfaces into fast, polished web experiences with React and Next.js.
                </p>

                <div className="flex flex-wrap gap-4 mb-16">
                    <a href="#projects"
                       className="bg-accent text-ink font-medium px-5 py-3 rounded-lg hover:bg-accent-deep transition-colors">
                        See Projects
                    </a>
                    <a href="#contact"
                       className="border border-white/15 px-5 py-3 rounded-lg hover:border-white/30 transition-colors">
                        Contact Me
                    </a>
                    <a href="/cv.pdf"
                       className="border border-white/15 px-5 py-3 rounded-lg hover:border-white/30 transition-colors">
                        Download my CV
                    </a>
                </div>

                <div className="flex flex-wrap gap-10">
                    <div>
                        <div className="font-heading text-3xl font-semibold">6+</div>
                        <div className="text-sm text-muted">Skills & Technologies</div>
                    </div>
                    <div>
                        <div className="font-heading text-3xl font-semibold">3</div>
                        <div className="text-sm text-muted">Completed Projects</div>
                    </div>
                    <div>
                        <div className="font-heading text-3xl font-semibold">2026</div>
                        <div className="text-sm text-muted">Intern in progress</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;