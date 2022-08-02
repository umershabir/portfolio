import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import CodeBlock from '../../components/CodeBlock'
import Image from 'next/image'
// post page
export default function PostPage({ frontmatter, content }) {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  return (
    <div
      className='w-full pt-6 md:pt-10 '
      style={{ background: theme.bg, color: theme.clr }}
    >
      <div className='container blog-container'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <Image
              src={frontmatter.cover_image}
              alt='blog-image'
              width={500}
              height={250}
            />
            <h1>{frontmatter.title}</h1>
            <small>{frontmatter.date}</small>
            <small>{frontmatter.tags}</small>
          </div>
          <ReactMarkdown components={CodeBlock}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
