import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import CodeBlock from '../../components/CodeBlock'
// post page
export default function PostPage({ content }) {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  return (
    <div
      className='w-full'
      style={{ background: theme.bg, color: theme.clr, paddingTop: 70 }}
    >
      <div className='container mx-auto'>
        <div style={{ width: 800, margin: '0 auto' }}>
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
