export default function Footer() {
  return (
    <>
      <footer className='w-full md:p-5 p-2'>
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center'>
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
            <a href='mail:muhammadumershabir@gmail.com'>
              muhammadumershabir@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
