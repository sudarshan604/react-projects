import styles from './Banner.module.css'
const Banner=(props)=>{
     return<div>
       <h1 className={styles.title}>
           <span className={styles.title1}> Coffee</span> 
           <span  className={styles.title2}> Connoisseur</span>
       </h1>
        <p className={styles.subtitle}>Discover a local coffee shop</p>
     <div className={styles.buttonWrapper}>     
        <button className={styles.button} onClick={props.handleClick}>{
        props.buttontext}</button>
     </div> 
     
 </div>
}

export default Banner