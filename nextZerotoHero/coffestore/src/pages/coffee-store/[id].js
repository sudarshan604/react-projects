import { useRouter } from 'next/router'
import CoffeeStoreData from '../../data/coffee-store.json'
import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/coffee-store.module.css'
import Image from 'next/image'
import cls from 'classnames'
import { fetchCoffeStore } from 'lib/coffee-store'
import { StoreContext } from '../_app'
import { isEmpty } from 'utils'

export async function getStaticProps(staticProps)
{
 const params=staticProps.params
 const CoffeeStore=await fetchCoffeStore()

 const findCoffeeStore=CoffeeStore.find(coffeeStore=>{
  return coffeeStore.id.toString()===params.id})
  
 return{
  props:{
     CoffeeStore:findCoffeeStore ? findCoffeeStore:{}
    }
   }
}

export async function getStaticPaths()
{
  const CoffeeStore=await fetchCoffeStore()
 
  const paths=CoffeeStore.map((coffestore)=>{
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

const CoffeeStore = (initialProps) => {
  const handleUpVoteButton=()=>{
  
  }
 const router=useRouter()
if(router.isFallback)
{
   return <p>loading...</p>
}

const id=router.query.id;

const [coffeeStore,setCoffeeStore ]=useState(initialProps.CoffeeStore)

const {
   state:{
    coffeeStores
   }
}=useContext(StoreContext)

useEffect(()=>{
  if(isEmpty(initialProps.CoffeeStore)){
    if(coffeeStores.length > 0){
      const findCoffeeStore=coffeeStores.find(coffeeStore=>{
        return coffeeStore.id.toString()===id})   
       setCoffeeStore(findCoffeeStore)
      }
  } 
},[id])

const {location,address,imgUrl,formatted_address,name}=coffeeStore


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
      
      <Image      src={imgUrl ||'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80' }
 
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
          <p className={styles.text}>{formatted_address}</p>
         </div>
        <div className={styles.iconWrapper}>
            <Image src="" width="24" height="24"/>
          <p className={styles.text}>1</p>
         </div>
        <p>{formatted_address}</p>
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