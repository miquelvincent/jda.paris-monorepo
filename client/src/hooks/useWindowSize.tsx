import { useState, useEffect } from "react"

function useWindowSize() {
  const isClient = typeof window === "object"

  function getSize(): { width: number; height: number} {
    const width = isClient ? window.innerWidth : undefined
    const height = isClient ? window.innerHeight : undefined
    return {
      width,
      height
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  //@ts-ignore
  useEffect( () => {
    if (!isClient) return false
    function handleResize() {
      setWindowSize(getSize())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export { useWindowSize }
