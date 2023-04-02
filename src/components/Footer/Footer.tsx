import React from 'react'
import styles from './Footer.module.scss'
import Button from '@/UI/Button/Button'
import { useRouter } from 'next/router'
import { jobsProp, jobsProps } from '@/interface/interface'
import { motion } from 'framer-motion'


const Footer = ({jobs}:jobsProp) => {
    const router = useRouter()
  return (
    <motion.footer className={styles.footer}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}>
        <div className="container">
            <div className={styles.wrapper}>
             <div className={styles.text_wrapper}>
                <h3>{jobs.position}</h3>
                <p>{jobs.company}</p>
             </div>
             <Button onClick={()=>router.push(jobs.website)}>Apply Now</Button>
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer