import Head from 'next/head'
import {getProductsInCollection} from '../lib/shopify'
import ProductList from '../components/ProductList'
import Hero from '../components/Hero'

export default function Home({products}) {
  
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
    <ProductList products={products}/>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: {products}, // will be passed to the page component as props
  }
}
