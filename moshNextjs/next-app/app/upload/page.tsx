'use client'
import React, { useState } from 'react'
import { CldUploadWidget,CldImage } from 'next-cloudinary'
interface CloudinaryType{
    public_id:string
}
const page = () => {
   const[publicId,setPublicId] =useState('')
  return (
    <>
     {
        publicId &&
         <CldImage src={publicId} width={300} height={400} alt='name'/>
     }

    <CldUploadWidget uploadPreset='stguzsxp'
    onUpload={(result,widget)=>{
       if(result.event!=='success') return
        const info=result.info as CloudinaryType
       setPublicId(info.public_id)
    }}
    options={{
        sources:['local'],
        multiple:false,
        maxFiles:4
    }}
    >
       {({open})=> <button onClick={()=>open()} >upload</button>}
    </CldUploadWidget>
    </>
  )
}

export default page