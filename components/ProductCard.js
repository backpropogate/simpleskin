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
           <div className='flex items-center gap-2'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#E3FAC4" />
                            <circle className=' animate-pulse' cx="6" cy="6" r="3" fill="#5FB40E" />
                        </svg>
                        <h2 className='convert-green font-semibold'>In Stock Now</h2>

                    </div>
               <div className="relative group-hover:opacity-75 h-72 ">
                   <Image
                   src={originalSrc}
                   alt={altText}
                   layout="fill"
                   objectFit="cover"
                   />
               </div>
           </div>
           
           
           <p className="mt-1 text-sm text-gray-700">{formatter.format(price)}</p>
           
           
       </a>

      </Link>
    )
}

export default ProductCard
