import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderComponent from '@/components/HeaderComponent'
import NavComponent from '@/components/NavComponent'
import ResultsComponent from '@/components/ResultsComponent'
import { navLinks } from '../../utiles/requests'
const inter = Inter({ subsets: ['latin'] })

export default function Home(results: any) {
  return (
    <div className="">
       <HeaderComponent/>
        <NavComponent/>
        <ResultsComponent results={results}/>
    </div>
   
  )
}

export async function getServerSideProps(context: { query: { genre: any } }){
  const genre=context.query.genre;
  console.log(genre);
  const request =await fetch(`https://api.themoviedb.org/3${navLinks[genre]?.url 
}`
).then((res)=>res.json());
return {
  props:{
    results:request.results || null,
  }
}
}
