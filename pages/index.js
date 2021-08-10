import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { StoreList } from '../lib/storeList'

export default function Home({store}) {
  return (
    <StoreList stores={store} />
  )
}


export async function getStaticProps(context) {
  //const res = await fetch(`https://.../data`)
  var fs = require('fs')
  const store = JSON.parse(fs.readFileSync('data/store.json', 'utf8'));
  console.log(store)
  return {
    props: { store }
  }
}

//export async function getServerSideProps() {
//  // Fetch data from external API
//  var fs = require('fs')
//  const store = JSON.parse(fs.readFileSync('data/store.json', 'utf8'));
//  console.log(store)
//  return {
//    props: { store }
//  }
//}
