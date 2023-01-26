import Link from "next/link"
import {BsFillExclamationTriangleFill} from "react-icons/bs"
import Layout from "@/components/Layout"
import { FaExclamationTriangle } from 'react-icons/fa';

import styles from  "../styles/404.module.css"

export default function NotFoundPage() {
  return (<Layout>
        <div className={styles.error}>
          <h1><FaExclamationTriangle className={styles.icon}/>404</h1>
        <h4>Sorry,there is nothing here</h4>
          <Link href="/">Go Back Home</Link>
        </div>


  </Layout>
  ) 
}

