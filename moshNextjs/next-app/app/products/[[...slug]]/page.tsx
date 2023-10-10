import React from 'react'

interface Props{
    params:{slug:string[]};
    searchParams:{sortOrder:string}
}

const AllProduct = ({params:{slug},searchParams:{sortOrder}}:Props) => {
  return (
    <div>AllProduct {slug}{sortOrder}</div>
  )
}

export default AllProduct