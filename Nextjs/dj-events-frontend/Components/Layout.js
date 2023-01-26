import Head from "next/head"
import Header from "./Header"
import {useRouter} from 'next/router'
import styles from  "@/styles/Layout.module.css"
import Footer from "./Footer"
import ShowCase from "./ShowCase"
function Layout({title,keywords,description,children}) {
  
  const router=useRouter()
  return (<div>
       <Head>
          <title>{title}</title>
      <meta name='description' content={description}/>
  <meta  name="keywords" content={keywords} />
       </Head>
 <Header/>
{router.pathname==='/'&& <ShowCase/>}
 <div className={styles.container}>
    {children}
 </div>
  <Footer/>
     </div>
  )
}

export default Layout
Layout.defaultProps={
  title:"Dj Events | Find the hottest parties",
  description:"Find the latest Dj and other musical events",
  keywords:"music,dj,edm.events",  
}
