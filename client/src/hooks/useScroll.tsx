import { useState, useEffect } from "react"
import {useWindowSize} from "./useWindowSize"

function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const windowHeight = useWindowSize().height
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect())
  const [scrollY, setScrollY] = useState(window.scrollY)
  const [scrollX, setScrollX] = useState(bodyOffset.left)
  const [scrollYBottom, setScrollYBottom] = useState(windowHeight)
  const [scrollDirection, setScrollDirection] = useState()


  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(window.scrollY)
    setScrollYBottom(Math.abs(bodyOffset.y)+windowHeight)
    setScrollX(bodyOffset.left)
    // @ts-ignore
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollYBottom,
    scrollDirection
  }
}

export { useScroll }