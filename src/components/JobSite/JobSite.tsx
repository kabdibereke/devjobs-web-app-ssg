import React from 'react'
import styles from './JobSite.module.scss'
import Image from 'next/image'
import Button from '@/UI/Button/Button'
import { jobsProp, jobsProps } from '@/interface/interface'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'


const JobSite = ({jobs}:jobsProp) => {
  const router =  useRouter()
  
  return (
    <div className="container">
            <motion.div className={styles.wrapper}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}>
                <Image src={jobs.logo} alt='logo' width={140} height={143} className={styles.img}/>
                <div className={styles.info}>
                   <div className={styles.text_wrapper}>
                         <p className={styles.company}>{jobs.company}</p>
                        <p className={styles.link}>{jobs.website}</p>
                   </div>
                    <Button onClick={()=>router.push(jobs.website)}>Company Site</Button>
                </div>
            </motion.div>
    </div>
  )
}

export default JobSite