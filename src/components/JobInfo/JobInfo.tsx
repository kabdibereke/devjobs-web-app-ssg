import React from 'react'
import styles from './JobInfo.module.scss'
import Button from '@/UI/Button/Button'
import { jobsProp, jobsProps } from '@/interface/interface'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'


const JobInfo = ({jobs}:jobsProp) => {
    const router = useRouter()
  return (
    <div className="container">
        <motion.div className={styles.wrapper}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}>
            <div className={styles.header}>
                <div className={styles.header_info}>
                    <div className={styles.first}>
                        <p className={styles.createdAt}>{jobs.postedAt}</p>
                        <span className={styles.dot}></span>
                        <p className={styles.contract}>{jobs.contract}</p>
                    </div>
                    <h1 className={styles.position}>{jobs.position}</h1>
                    <p className={styles.country}>{jobs.location}</p>
                </div>
                <Button onClick={()=>router.push(jobs.website)}>Apply Now</Button>
            </div>
            <p className={styles.descr}>
            {jobs.description}
            </p>
            <div className={styles.requirements}>
                <h2 className={styles.title}>
                Requirements
                </h2>
                <p className={styles.descr}>{jobs.requirements.content}</p>
                <ul className={styles.list}>
                    {jobs.requirements.items.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                   
                </ul>
            </div>
            <div className={styles.requirements}>
                <h2 className={styles.title}>
                What You Will Do
                </h2>
                <p className={styles.descr}>{jobs.role.content}</p>
                <ol className={styles.list_number}>
                     {jobs.role.items.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ol>
            </div>
        </motion.div>
    </div>
  )
}

export default JobInfo