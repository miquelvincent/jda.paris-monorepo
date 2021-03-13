export  const handleOpacity = (position:number) => {
    let opacity = 0
    opacity = (position + 100) / 100
    return opacity > 1 ? 1 : opacity < 0 ? 0 : opacity
  }
