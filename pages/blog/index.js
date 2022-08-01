import Head from 'next/head'
import BlogPosts from '../../components/Blogs/BlogPosts'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// blog page
export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blogs</title>
        <link rel='icon' href='/favicon.png' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
          integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <div className='flex flex-col'>
        <BlogPosts posts={posts} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdwonmeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdwonmeta)
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
