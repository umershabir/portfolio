import styles from '../styles/Home.module.css'
import Image from 'next/image'
import terfort from '../sources/images/terafort.jpg'
export default function ProfessionalStory() {
  console.log(terfort)
  return (
    <>
      <section className={styles.professionalstory}>
        <div className={styles.professionalinner}>
          <div className='history'>
            <span className='history-image'>
              <Image
                src={terfort.src}
                width={200}
                height={200}
                alt='company-image'
                className='h-dt-img'
              />
            </span>
            <div className='history-detail'>
              <p>2009 - 2014</p>
              <h5>Master of Science</h5>
              <p>
                I graduated with a master of science in computer science. Lots
                of this knowledge can be applied for more complex problems in
                client-server architectures.
              </p>
            </div>
          </div>
        </div>
        <style jsx='true'>{`
          .professional-story {
            background: #fff;
          }
          .history {
            display: flex;
            flex-direction: row-reverse;
          }
          .history-image {
            width: 50%;
          }
          .history-detail {
            width: 50%;
            display: flex;
            flex-direction: column;
            text-align: right;
          }
          .h-dt-img {
            border-radius: 50px;
            border: 1px solid #000;
          }
        `}</style>
      </section>
    </>
  )
}
