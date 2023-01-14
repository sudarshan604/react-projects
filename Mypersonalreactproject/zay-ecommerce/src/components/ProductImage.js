import React from 'react'
import { useState } from 'react'

export default function ProductImage({images=[]}) {
  
  const [image,setImage]=useState(images)
  const [index,setIndex]=useState()

  
console.log(image)
  return (
    <div>
 <img src={image==''?null:image[0].thumbnails.large.url
} alt="image" />
</div>
  )
}
