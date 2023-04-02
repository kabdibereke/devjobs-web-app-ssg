import Header from '@/components/Header/Header'
import JobInfo from '@/components/JobInfo/JobInfo'
import JobSite from '@/components/JobSite/JobSite'
import React from 'react'
import { GetStaticPaths,GetStaticProps } from "next";
import { ParsedUrlQuery } from 'querystring'
import { IJobs, jobsProp, jobsProps } from '@/interface/interface';
import Footer from '@/components/Footer/Footer';
type Props = {}

export const getStaticPaths:GetStaticPaths = async () => {
const res = await fetch("https://devjobs-web-app-ssg-yzd2.vercel.app");
const data = await res.json();

const paths = data.map((items:IJobs) => {
  return {
    params: { id:items.id.toString() },
  };
});

return {
  paths,
  fallback: false,
};
};
export const getStaticProps:GetStaticProps = async (context) => {
	const {id} = context.params as ParsedUrlQuery;
	const res = await fetch(`https://devjobs-web-app-ssg-yzd2.vercel.app/${id}`);
	const data = await res.json();

	return {
		props: { jobs: data },
	};
};



const JobInfoPage = ({jobs}:jobsProp) => {

  return (
    <>
    <Header/>
    <JobSite jobs={jobs}/>
    <JobInfo jobs={jobs}/>
    <Footer jobs={jobs}/>
    </>
  )
}

export default JobInfoPage