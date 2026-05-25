"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-5 h-5" /> // Prevent layout shift
    }

    const toggleTheme = (e: React.MouseEvent) => {
        const nextTheme = theme === "dark" ? "light" : "dark"
        
        if (!document.startViewTransition) {
            setTheme(nextTheme)
            return
        }

        const x = e.clientX ?? window.innerWidth / 2
        const y = e.clientY ?? window.innerHeight / 2
        
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        )
        
        const transition = document.startViewTransition(() => {
            // Manually toggle the class to ensure synchronous DOM update for the snapshot
            // because next-themes `setTheme` updates React state which is asynchronous
            if (nextTheme === "dark") {
                document.documentElement.classList.add("dark")
                document.documentElement.classList.remove("light")
            } else {
                document.documentElement.classList.add("light")
                document.documentElement.classList.remove("dark")
            }
            // Also update the next-themes state
            setTheme(nextTheme)
        })

        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`
                    ]
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)"
                }
            )
        })
    }

    return (
        <button
            onClick={toggleTheme}
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
        >
            <div className="relative w-4 h-4">
                <Sun className="absolute inset-0 w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute inset-0 w-full h-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
