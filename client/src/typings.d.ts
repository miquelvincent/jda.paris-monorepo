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

      title: string
      content: string
    }
  }