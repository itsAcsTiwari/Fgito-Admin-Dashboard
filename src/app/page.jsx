import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 class="text-3xl font-bold underline">
        Hello world! this is the tailwind css here
      </h1>
    </main>
  )
}
