import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
  return (
    <div className={styles.description}>
      <Link href="/">
        <p>
          GENDER DIVERSITY IN TECH:&nbsp;
          <code className={styles.code}>POWER UP THOSE SKILLS</code>
        </p>
      </Link>
      <div>
        <a
          href="https://codethedream.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/code-the-dream.svg"
            alt="Code the Dream Logo"
            className={styles.ctdLogo}
            width={148.36}
            height={31.29}
            priority
          />
        </a>
      </div>
    </div>
  );
}
 
export default Navbar;