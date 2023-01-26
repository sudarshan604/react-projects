import Head from "next/head"
import Header from "./Header"
import styles from  "../styles/Layout.module.css"
import Footer from "./Footer"
function Layout({title,keywords,description,children}) {
  
  return (<div>
       <Head>
          <title>{title}</title>
      <meta name='description' content={description}/>
  <meta  name="keywords" content={keywords} />
       </Head>
 <Header/>
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
