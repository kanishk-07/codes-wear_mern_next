import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Navbar = () => {

    const ref = useRef();
    const toggleCart = () => {
        if(ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    return (
        <div className='text-gray-100 body-font bg-gray-900 flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-md'>
            <div className='logo mx-10'>
                <Link href={'/'}><Image src={'/logo.webp'} width={200} height={40} alt="" /></Link>
            </div>
            <div className='nav'>
                <ul className='flex items-center space-x-4'>
                    <Link href={'/tshirts'}><li>Tshirts</li> </Link>
                    <Link href={'/mugs'}><li>Mugs</li> </Link>
                    <Link href={'/hoodies'}><li>Hoodies</li> </Link>
                    <Link href={'/stickers'}><li>Stickers</li> </Link>
                </ul>
            </div>
            <div onClick={toggleCart} className='cart absolute right-0 mx-10 md:top-4 sm:top-7 cursor-pointer'>
                <AiOutlineShoppingCart className='text-xl md:text-2xl sm:text-2xl'/>
            </div>
            <div ref={ref} className="w-72 h-full sidebar absolute top-0 right-0 bg-gray-900 py-8 px-8 transform transition-transform translate-x-full">
                <h2 className='font-bold text-center'>Cart</h2>
                <span onClick={toggleCart} className='absolute top-3 right-3'><AiFillCloseCircle className='md:text-xl sm:text-2xl cursor-pointer text-pink-500'/></span>
                <ol className='list-decimal'>
                    <li className='my-5'>
                        <div className='item flex'>
                            <div className='w-2/3 font-semibold'>SAKasd asdad asdas das asd asdas dadada</div>
                            <div className='flex items-center justify-center w-1/3'><AiOutlineMinusCircle className='px-1 text-2xl text-pink-500'/>1<AiOutlinePlusCircle className='px-1 text-2xl text-pink-500'/></div>
                        </div>
                    </li>
                    <li className='my-5'>
                        <div className='item flex'>
                            <div className='w-2/3 font-semibold'>SAKasd asdad asdas das asd asdas dadada</div>
                            <div className='flex items-center justify-center w-1/3'><AiOutlineMinusCircle className='px-1 text-2xl text-pink-500'/>1<AiOutlinePlusCircle className='px-1 text-2xl text-pink-500'/></div>
                        </div>
                    </li><li className='my-5'>
                        <div className='item flex'>
                            <div className='w-2/3 font-semibold'>SAKasd asdad asdas das asd asdas dadada</div>
                            <div className='flex items-center justify-center w-1/3'><AiOutlineMinusCircle className='px-1 text-2xl text-pink-500'/>1<AiOutlinePlusCircle className='px-1 text-2xl text-pink-500'/></div>
                        </div>
                    </li><li className='my-5'>
                        <div className='item flex'>
                            <div className='w-2/3 font-semibold'>SAKasd asdad asdas das asd asdas dadada</div>
                            <div className='flex items-center justify-center w-1/3'><AiOutlineMinusCircle className='px-1 text-2xl text-pink-500'/>1<AiOutlinePlusCircle className='px-1 text-2xl text-pink-500'/></div>
                        </div>
                    </li><li className='my-5'>
                        <div className='item flex'>
                            <div className='w-2/3 font-semibold'>SAKasd asdad asdas das asd asdas dadada</div>
                            <div className='flex items-center justify-center w-1/3'><AiOutlineMinusCircle className='px-1 text-2xl text-pink-500'/>1<AiOutlinePlusCircle className='px-1 text-2xl text-pink-500'/></div>
                        </div>
                    </li><li className='my-5'>
                        <div className='item flex'>
                            <div className='w-2/3 font-semibold'>SAKasd asdad asdas das asd asdas dadada</div>
                            <div className='flex items-center justify-center w-1/3'><AiOutlineMinusCircle className='px-1 text-2xl text-pink-500'/>1<AiOutlinePlusCircle className='px-1 text-2xl text-pink-500'/></div>
                        </div>
                    </li>
                </ol>
                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-md">Checkout <BsFillBagCheckFill className='text-pink m-1'/></button>
            </div>
        </div>
    )
}

export default Navbar