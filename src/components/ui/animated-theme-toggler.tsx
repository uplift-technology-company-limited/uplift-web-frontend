"use client"

import { useCallback, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "onClick"> {
  duration?: number
  onAfterToggle?: () => void
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  onAfterToggle,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isDark = theme === "dark"

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    // Check if View Transition API is supported
    if (!document.startViewTransition) {
      // Fallback for browsers that don't support View Transition API
      setTheme(isDark ? "light" : "dark")
      onAfterToggle?.()
      return
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark")
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )

    onAfterToggle?.()
  }, [isDark, setTheme, duration, onAfterToggle])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
