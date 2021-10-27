import Head from 'next/head'
import {getProductsInCollection} from '../lib/shopify'

export default function Home({products}) {
  console.log(products)
  return (
    <>
    <h1 className="text-3xl">Hello there</h1>
    </>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: {products}, // will be passed to the page component as props
  }
}
