import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Cards = () => {
  return (
    <div className={styles.grid}>
      <span className={styles.card}>
        <h2 className={inter.className}>
          Podcast <span>&darr;</span>
        </h2>
        <ul className={inter.className}>
          <a href="https://tunein.com/podcasts/Technology-Podcasts/Tech-Forward-p1185941/" target="_blank" rel="noopener noreferrer"><li>&#x25E6; Tech Forward&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></a>
          <a href="https://tunein.com/podcasts/Technology-Podcasts/Diversity-in-Tech-with-Joanna-Udo-p1305118/" target="_blank" rel="noopener noreferrer"><li>&#x25E6; Diversity in Tech</li></a>
        </ul>
      </span>

      <span className={styles.card}>
        <h2 className={inter.className}>
          Videos <span>&darr;</span>
        </h2>
        <ul className={inter.className}>
          <a href="https://www.youtube.com/watch?v=oNdc5ZCuhjQ" target="_blank" rel="noopener noreferrer"><li>&#x25E6; Where did they go? </li></a>
          <a href="https://www.youtube.com/watch?v=uvA3KvZNOvg" target="_blank" rel="noopener noreferrer"><li>&#x25E6; The ups and downs</li></a>
        </ul>
      </span>

      <span className={styles.card}>
        <h2 className={inter.className}>
          Q&A Form <span>&darr;</span>
        </h2>
        <ul className={inter.className}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIOTU6Av-1TkBKyyiuuvdMV_ZLYCYfNy_dzZ-XmNMJP_hsKw/viewform?embedded=true" target="_blank" rel="noopener noreferrer"><li>Use this form to submit your questions</li></a>
        </ul>
      </span>

      <span className={styles.card2}>
        <Link href="/workshop">
          <h2 className={inter.className}>
            Workshop <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          Interactive tool for workshop reflections and resource sharing
          </p>
        </Link>
      </span>
  </div>
  );
}
 
export default Cards;