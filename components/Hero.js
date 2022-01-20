import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className=' flex flex-col sm:flex-row justify-evenly items-center p-8'>
            
            <div className='sm:px-10 flex flex-col gap-5 sm:justify-evenly '>
                <h1 className=' text-3xl sm:text-6xl font-bold'>Simple Skincare</h1>
                <p className='sm:text-2xl max-w-md '>Skincare should not be complicated<br/> so we made it simple</p>
                <div className='flex gap-3'>
                    <Link  href="/#products">
                    <a className='sm:text-2xl bg-black text-white px-6 py-3 rounded'>Shop Now &rarr;</a>
                    </Link>
                    <Link href="/#products">
                    <a  className= ' sm:text-2xl bg-none text-black px-6 py-3 rounded border-2 border-black'>New arrivals</a>
                    </Link>
                </div>
            </div>
            <div className='sm:w-1/2 sm:px-10'>
                <img src="/skin.png" alt="" />
            </div>
            
        </div>
    )
}

export default Hero
