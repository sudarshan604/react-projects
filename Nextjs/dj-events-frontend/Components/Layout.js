import Head from "next/head"
import Header from "./Header"
import {useRouter} from 'next/router'
import styles from  "@/styles/Layout.module.css"
import Footer from "./Footer"
import ShowCase from "./ShowCase"
function Layout({title,keywords,description,children}) {
  
  const router=useRouter()
  console.log(router.pathname)
  return (<>
       <Head>
          <title>{title}</title>
      <meta name='description' content={description}/>
  <meta  name="keywords" content={keywords} />
     </Head> 
      {router.pathname !== "/404" && <Header />}
    {router.pathname==='/'&& <ShowCase/>}
 <div className={styles.container}>
    {children}
 </div>
          {router.pathname !== '/register' && <Footer />}
         
         </>
  )
}

export default Layout
