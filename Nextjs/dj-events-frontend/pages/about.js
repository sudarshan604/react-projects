import Layout from '@/components/Layout'
import Link from 'next/link'

function about() {
  return (
    <Layout title="about DJ Event">
     <h1> about</h1>
         <p>this is a about page </p>
        <Link href="/">Home</Link>
      </Layout>
  )
}

export default about