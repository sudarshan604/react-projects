import React from 'react'

interface Props{
    param:{id:number}
}

const UserDetailPage = ({param:{id}}:Props) => {
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage