import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({allPostsData}) {
  // console.log('typeof allPostsData', typeof allPostsData)
  // console.log('Array.isArray(allPostsData)', Array.isArray(allPostsData))
  // console.log('allPostsData', allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title }) => (
               <li className={utilStyles.listItem} key={id}>
               <Link href="/posts/[id]" as={`/posts/${id}`}>
                 <a>{title}</a>
               </Link>
               <br />
               <small className={utilStyles.lightText}>
                 <Date dateString={date} />
               </small>
             </li>
          ))} */}
        </ul>
      </section>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log('allPostsData',allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

// FETCHING FROM API EXAMPLE
// import fetch from 'node-fetch'

// export async function getSortedPostsData() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   const res = await fetch('..')
//   return res.json()
// }

// QUERY DATABASE DIRECTLY
// import someDatabaseSDK from 'someDatabaseSDK'

// const databaseClient = someDatabaseSDK.createClient(...)

// export async function getSortedPostsData() {
//   // Instead of the file system,
//   // fetch post data from a database
//   return databaseClient.query('SELECT posts...')
// }

// SERVER-SIDE RENDERING
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

// REACT HOOK FOR DATA FETCHING
// import useSWR from 'swr'

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

