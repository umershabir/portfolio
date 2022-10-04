import { useSelector } from 'react-redux'
import Link from 'next/link'
export default function BlogPosts({ posts }) {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  return (
    <>
      <div
        className='w-full pt-6 md:pt-9 md:p-5'
        style={{ background: theme.bg, color: theme.clr }}
      >
        <div className='container mx-auto flex flex-col px-4 md:px-0 pt-4 mt-5'>
          <div className='intro-sect flex flex-col items-center md:items-start my-5'>
            <h1 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>
              Blog ✍️
            </h1>
            <p className=' text-base md:my-2 md:w-1/2 md:text-xl'>
              {`I share anything that may help others, technologies I'm using and
              cool things I've made.`}
            </p>
            <div className='flex gap-x-2 text-2xl'>
              <a
                href='https://www.linkedin.com/in/umer-shabir-4a8545100/'
                target='blank'
              >
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='https://github.com/umershabir' target='blank'>
                <i className='fab fa-github'></i>
              </a>
              <a href='mailto:muhammadumershabir@gmail.com'>
                <i className='fa-solid fa-envelope'></i>
              </a>
              <a href=''>
                <i className='fa-brands fa-skype'></i>
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            {posts.map((item, index) => (
              <div key={index}>
                <Link href={`/blog/${item.slug}`}>
                  <div className='flex flex-col my-4 hover:cursor-pointer'>
                    <h3 className='text-base lg:text-2xl md:my-2 md:w-1/2 flex items-center font-medium'>
                      {item.frontmatter.title}
                    </h3>
                    <p className='text-gray-500'>
                      {item.frontmatter.date} - {item.frontmatter.tags}
                    </p>
                    <p className='text-base md:my-2  font-light md:w-1/2'>
                      {item.frontmatter.description}
                    </p>

                    <a className='underline'>Read more</a>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
