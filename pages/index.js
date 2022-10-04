// dependencies
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import WorkingHistory from '../components/WorkingHistory'
import JobHistory from '../components/JobHistory'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import LatestBlogs from '../components/Blogs/LatestBlogs'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Umer Shabir</title>
      </Head>
      <div className='flex flex-col'>
        <HeroSection />
        <JobHistory />
        <Services />
        <WorkingHistory />
        <LatestBlogs posts={posts} />
      </div>
    </div>
  )
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}
