import React from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from "@/components/HeroHeader"

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-32 md:pt-48">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <a
                                        href="#link"
                                        className="hover:bg-green-100 dark:hover:border-t-green-300 bg-green-50 group mx-auto flex w-fit items-center gap-2 md:gap-4 rounded-full border border-green-200 p-0.5 md:p-1 pl-2 md:pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-green-300 dark:shadow-zinc-950">
                                        <span className="text-green-800 text-xs md:text-sm">Renewable Energy Solutions</span>
                                        <span className="dark:border-green-300 block h-3 md:h-4 w-0.5 border-l bg-green-200 dark:bg-green-400"></span>

                                        <div className="bg-green-100 group-hover:bg-green-200 size-5 md:size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-4 max-w-5xl text-4xl md:text-5xl lg:mt-8 xl:text-6xl">
                                    Sustainable Solar Energy Solutions<br />For Sustainable Future
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                  Leading manufacturers of high-efficiency solar panels, delivering clean and <br/> renewable energy solutions tailored for residential, commercial, and industrial needs.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            size="lg"
                                            className="rounded-xl px-5 text-base"
                                            asChild>
                                            <a href="https://wa.me/9828215566" target="_blank" rel="noopener noreferrer">
                                                <span className="text-nowrap">Contact Us</span>
                                            </a>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                                
                                {/* Image under CTA */}
                                <div className="mt-4 flex justify-center">
                                    <img
                                        src="/solarhero.png"
                                        alt="Solar energy illustration"
                                        className="max-w-4xl w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}
