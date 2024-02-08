// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
// import Bio from 'src/pages/qcomps/bios.js'
import Todo from "src/pages/qcomps/todos.js";



export default function Home() {
  return (
    <div className={styles.main}>
        <Todo />
    </div>
  )
}
