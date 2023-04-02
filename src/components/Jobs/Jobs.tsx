import React, { useEffect, useState } from 'react'
import styles from './Jobs.module.scss'
import JobCard from '../JobCard/JobCard'

import { IJobs, jobsProps } from '@/interface/interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { motion } from 'framer-motion';




const Jobs = ({jobs}:jobsProps) => {
  const {filterLocation,filterTitle,check} = useSelector((item:RootState)=> item.filter)
  const [list,setList] =useState<IJobs[]>(jobs)
  useEffect(()=> {
   const newArr= jobs.filter(item=> {
      if(filterLocation=='') {
        return item
      }else {
        return item.location.toLowerCase().includes(filterLocation.toLowerCase())
      }
    }).filter(item=> {
      if(filterTitle=='') {
        return item
      }else {
        return item.position.toLowerCase().includes(filterTitle.toLowerCase())
      }
    }).filter(item=> {
      if(check==false) {
        return item
      }else {
        return item.contract.toLowerCase().includes('full time')
      }
    })
    setList(newArr)
  },[filterLocation,filterTitle,check])

  return (
    <motion.section className={styles.section}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}>
        <div className="container">
            <div className={styles.wrapper}>
                { jobs.filter(item=> {
                  if(filterLocation=='') {
                    return item
                  }else {
                    return item.location.toLowerCase().includes(filterLocation.toLowerCase())
                  }
                }).filter(item=> {
                  if(filterTitle=='') {
                    return item
                  }else {
                    return item.position.toLowerCase().includes(filterTitle.toLowerCase())
                  }
                }).filter(item=> {
                  if(check==false) {
                    return item
                  }else {
                    return item.contract.toLowerCase().includes('full time')
                  }
                }).map((item,index)=> {
                  return <JobCard key={index} item={item} />
              })}
              
             {list.length==0 && <p className={styles.not_result}>Not Result...</p>}
                
            </div>
        </div>
    </motion.section>
  )
}

export default Jobs

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
