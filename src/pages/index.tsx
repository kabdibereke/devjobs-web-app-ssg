
import Header from '@/components/Header/Header'
import JobCard from '@/components/JobCard/JobCard'
import Jobs from '@/components/Jobs/Jobs'
import SearchPanel from '@/components/SearchPanel/SearchPanel'
import { IJobs, jobsProps } from '@/interface/interface';
import { GetStaticProps } from 'next';

export const getStaticProps:GetStaticProps = async () => {
	const res = await fetch("https://64281ee346fd35eb7c4bfc31.mockapi.io/dev");
	const data = await res.json();

	return {
		props: {
			jobs: data,
		},
	};
	
};



export default function Home({jobs}:jobsProps) {
 
  return (
    <>
      <Header/>
      <SearchPanel/>
      <Jobs jobs={jobs}/>
    </>
  )
}
