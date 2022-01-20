import Link from 'next/link'
import { useContext } from 'react'
import { cartContext } from '../context/shopContext'
import MiniCart from './miniCard'
import Image from 'next/dist/client/image'

export default function Nav() {
    const {cart, cartOpen, setCartOpen} = useContext(cartContext)
    
    let cartQuantity = 0
    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    })
    return (
        <header className= "border-b sticky top-0 z-20 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
                <Link href="/" passHref>
                    <a className="cursor-pointer">
                        <span className="text-lg pt-1 font-bold flex justify-center">
                           <img className=' w-28 sm:w-60' src="/logo.png" alt="" />
                        </span>
                    </a>
                </Link>
                <a className=" flex gap-2 text-md font-bold cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
                >
                   <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25001 19.5556C9.09378 19.5556 9.77779 18.8715 9.77779 18.0278C9.77779 17.184 9.09378 16.5 8.25001 16.5C7.40624 16.5 6.72223 17.184 6.72223 18.0278C6.72223 18.8715 7.40624 19.5556 8.25001 19.5556Z" fill="black"/>
<path d="M16.1945 19.5556C17.0382 19.5556 17.7222 18.8715 17.7222 18.0278C17.7222 17.184 17.0382 16.5 16.1945 16.5C15.3507 16.5 14.6667 17.184 14.6667 18.0278C14.6667 18.8715 15.3507 19.5556 16.1945 19.5556Z" fill="black"/>
<path d="M20.2278 3.905C20.1709 3.83104 20.0978 3.77111 20.0141 3.7298C19.9304 3.68849 19.8384 3.66689 19.745 3.66667H5.62836L5.35336 2.79278C5.32315 2.69895 5.27069 2.61381 5.20046 2.54465C5.13023 2.47548 5.04431 2.42433 4.95003 2.39555L2.44447 1.62555C2.36743 1.60188 2.28648 1.59361 2.20624 1.60122C2.126 1.60883 2.04805 1.63217 1.97683 1.66991C1.833 1.74612 1.72534 1.87635 1.67753 2.03194C1.62971 2.18754 1.64567 2.35575 1.72188 2.49958C1.79809 2.64341 1.92832 2.75107 2.08392 2.79889L4.2778 3.47111L7.07669 12.3139L6.08058 13.1328L6.00114 13.2122C5.7548 13.4975 5.61523 13.8594 5.60631 14.2362C5.5974 14.613 5.71968 14.9812 5.95225 15.2778C6.11881 15.4803 6.33047 15.6411 6.57029 15.7472C6.81011 15.8533 7.07143 15.9018 7.33336 15.8889H17.5328C17.6949 15.8889 17.8503 15.8245 17.9649 15.7099C18.0795 15.5953 18.1439 15.4399 18.1439 15.2778C18.1439 15.1157 18.0795 14.9603 17.9649 14.8457C17.8503 14.731 17.6949 14.6667 17.5328 14.6667H7.23558C7.16521 14.6643 7.09665 14.6437 7.03652 14.6071C6.97639 14.5705 6.92672 14.5189 6.89232 14.4575C6.85791 14.3961 6.83994 14.3268 6.84012 14.2564C6.8403 14.186 6.85864 14.1168 6.89336 14.0556L8.36614 12.8333H17.7956C17.9352 12.8374 18.072 12.7935 18.1832 12.709C18.2943 12.6245 18.3732 12.5045 18.4067 12.3689L20.3623 4.42444C20.3808 4.33334 20.3784 4.23919 20.3551 4.14918C20.3318 4.05916 20.2883 3.97565 20.2278 3.905Z" fill="black"/>
</svg> ({cartQuantity})
                </a>
                <MiniCart cart={cart} />
            </div>
            
        </header>
    )
}

