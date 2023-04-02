import React from 'react'
import styles from './JobCard.module.scss'
import Image from 'next/image'
import { IJobs } from '@/interface/interface'
import { useRouter } from 'next/router'
interface JobCardProps {
  item :IJobs
}
const JobCard = ({item}:JobCardProps) => {
  const router =useRouter()
  return (
    <div className={styles.wrapper} onClick={()=>router.push(`/${item.id}`)}>
        <Image src={item.logo} alt='logo' width={50} height={50} className={styles.img}/>
        <div className={styles.first}>
            <p className={styles.createdAt}>{item.postedAt}</p>
            <span className={styles.dot}></span>
            <p className={styles.contract}>{item.contract}</p>
        </div>
        <h1 className={styles.position}>{item.position}</h1>
        <p className={styles.company}>{item.company}</p>
        <p className={styles.country}>{item.location}</p>
    </div>
  )
}

export default JobCard