import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const Dynamic = () => {
  const router=useRouter()
  const query=router.query
  console.log(query)
    return (
    <div>
        <Head>
           <title>{query.dynamic}</title>
        </Head>  
    </div>
  )
}

export default Dynamic