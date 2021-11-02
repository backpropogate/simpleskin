import Link from 'next/link'
import Image from 'next/image'
import {formatter} from '../utils/helpers'

const ProductCard = ({ product }) => {
    const { handle, title } = product.node
    const {altText, originalSrc } = product.node.images.edges[0].node
    const price = product.node.priceRange.minVariantPrice.amount
    return (
       <Link
       href={`/products/${handle}`}
       >
       <a className="group">
           <div className= "w-full bg-gray-200 rounded-3xl overflow-hidden">
               <div className="relative group-hover:opacity-75 h-72 ">
                   <Image
                   src={originalSrc}
                   alt={altText}
                   layout="fill"
                   objectFit="cover"
                   />
               </div>
           </div>
           <div className=" flex flex-col justify-center">
           <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
           
           <p className="mt-1 text-sm text-gray-700">{formatter.format(price)}</p>
           <button className="bg-black rounded-lg text-white px-2 py-6 hover:bg-gray-800 my-6"> Add To Cart</button>
           </div>
       </a>

      </Link>
    )
}

export default ProductCard
