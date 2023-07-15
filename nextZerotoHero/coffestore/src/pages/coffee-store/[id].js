import { useRouter } from 'next/router'
import CoffeeStoreData from '../../data/coffee-store.json'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/coffee-store.module.css'
import Image from 'next/image'
import cls from 'classnames'

export function getStaticProps(staticProps)
{
 const params=staticProps.params
 return{
  props:{
     CoffeeStore:CoffeeStoreData.find(coffeeStore=>{
      return coffeeStore.id.toString()===params.id
     })
    }
   }
}

export function getStaticPaths()
{
  const paths=CoffeeStoreData.map((coffestore)=>{
   return {
       params:{
       id:coffestore.id.toString()}
    }
  })
  return {
    // paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    paths,
    fallback: true,
  };
   
}

const CoffeeStore = (props) => {
  const handleUpVoteButton=()=>{
  
  }
 const router=useRouter()
if(router.isFallback)
{
   return <p>loading...</p>
}
const {address,name,neighbourhood,imgUrl}=props.CoffeeStore


 return (<div className={styles.layout}>
        <Head>
          <title>{name}</title>
        </Head>
    <div className={styles.col1}>
    <div className={styles.backToHomeLink}>
      <Link href="/" scroll={true}>
          back Home
      </Link>
    </div>
       <div className={styles.nameWrapper}>
       <p className={styles.name}>{name}</p>
    </div>
      
      <Image src={imgUrl} 
        width={600}
        height={100}
        className={styles.storeImg}
        alt={name}
       />
    </div>

      <div className={cls( 'glass',styles.col2)}>
         <div className={styles.iconWrapper}>
            <Image src="" width="24" height="24"/>
          <p className={styles.text}>{address}</p>
         </div>
         <div className={styles.iconWrapper}>
            <Image src="" width="24" height="24"/>
          <p className={styles.text}>{neighbourhood}</p>
         </div>
        <div className={styles.iconWrapper}>
            <Image src="" width="24" height="24"/>
          <p className={styles.text}>1</p>
         </div>
        <p>{neighbourhood}</p>
       </div>
      <button className={styles.upvoteButton}
       onClick={handleUpVoteButton}
      > 
        Up Vote
      </button>
  </div>
  )
}

export default CoffeeStore