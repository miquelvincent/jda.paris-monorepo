interface Article {
    node: {
      id: number
      strapiId: string
      image: {
        childImageSharp: {
          fixed: FixedObject
          fluid: FluidObject
        }
      }
      category: {
        name: string
      }
      title: string
      content: string
    }
  }