import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'

const Navbar = (props) => {

    const { cart, addToCart, clearCart, removeFromCart, subTotal } = props

    const ref = useRef();
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    return (
        <div className='text-gray-100 body-font bg-gray-800 flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-md sticky top-0 z-10'>
            <div className='logo mx-10'>
                <Link href={'/'}><Image src={'/logo.webp'} width={256} height={48} alt="" /></Link>
            </div>
            <div className='nav'>
                <ul className='flex items-center space-x-4'>
                    <Link href={'/tshirts'}><li>Tshirts</li> </Link>
                    <Link href={'/mugs'}><li>Mugs</li> </Link>
                    <Link href={'/hoodies'}><li>Hoodies</li> </Link>
                    <Link href={'/stickers'}><li>Stickers</li> </Link>
                </ul>
            </div>
            <div className='cart absolute right-0 mx-10 md:top-4 sm:top-7 cursor-pointer flex'>
                <Link href={'/signin'}><MdAccountCircle className='text-xl mx-6 md:text-2xl sm:text-2xl'/></Link>
                {Object.keys(cart).length > 0 ? <span className="bg-pink-500 absolute justify-center items-center text-xs font-semibold -top-2 -right-2 px-1 rounded-lg">{Object.keys(cart).length}</span> : ''}
                <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-2xl sm:text-2xl' />
            </div>
            <div ref={ref} className="w-72 h-[100vh] absolute top-0 right-0 bg-gray-800 py-8 px-8 transform transition-transform translate-x-full">
                <h2 className='font-bold text-center mt-6'>Cart</h2>
                <span onClick={toggleCart} className='absolute top-3 right-3'><AiFillCloseCircle className='md:text-xl sm:text-2xl cursor-pointer text-pink-500' /></span>
                <ol className='list-decimal'>
                    {Object.keys(cart).length === 0 && <div className='mt-5 text-center'>Cart is Empty! Add a few items to chackout</div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={cart[k]} className='my-5'>
                            <div className='item flex'>
                                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                                <div className='flex items-center justify-center w-1/3'><AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1) }} className='px-1 text-2xl text-pink-700' />{cart[k].qty}<AiOutlinePlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='px-1 text-2xl text-pink-700' /></div>
                            </div>
                        </li>
                    })}
                </ol>
                <span className='block text-center'><button disabled className='mt-8 mb-6 font-bold cursor-default'>Total Amount - ₹{subTotal}</button></span>
                {Object.keys(cart).length !== 0 && <Link href={'/checkout'}><button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-md">Checkout <BsFillBagCheckFill className='text-pink m-1' /></button></Link>}
                {Object.keys(cart).length !== 0 && <button onClick={clearCart} className="flex mx-auto mt-10 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-md">Clear Cart</button>}
            </div>
        </div>
    )
}

export default Navbar