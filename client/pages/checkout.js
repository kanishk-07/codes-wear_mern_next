import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { MdOutlinePayments } from 'react-icons/md'

const Checkout = (props) => {

    const { cart, addToCart, clearCart, removeFromCart, subTotal } = props

    return (
        <div className='container m-auto'>
            <h1 className='my-9 font-bold text-center text-3xl'>Checkout</h1>
            <h2 className='font-bold text-xl'>1. Delivery Details</h2>
            <div className='mx-auto mb-8 flex'>
                <div className="px-6 w-1/2">
                    <div className="my-4 mt-6">
                        <label htmlFor="name" className="leading-7 text-gray-900">Name</label>
                        <input type="name" placeholder='Name' id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="email" className="leading-7 text-gray-900">Email</label>
                        <input type="email" placeholder='email@example.com' id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="phone" className="leading-7 text-gray-900">Phone Number</label>
                        <input type="tel" placeholder='XXXXXXXXXX' id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="my-4 hidden">
                        <label htmlFor="phone" className="leading-7 text-gray-900">Phone Number</label>
                        <input type="tel" placeholder='XXXXXXXXXX' id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="px-6 w-1/2">
                    <div className="my-4 mt-6">
                        <label htmlFor="addressLin1" className="leading-7 text-gray-900">Address Line 1</label>
                        <input type="text" placeholder='Address Line 1' id="addressLin1" name="addressLin1" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="city" className="leading-7 text-gray-900">City</label>
                        <input type="text" placeholder='City' id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="state" className="leading-7 text-gray-900">State</label>
                        <input type="text" placeholder='State' id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="pincode" className="leading-7 text-gray-900">Pincode</label>
                        <input type="pincode" placeholder='Pincode' id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <h2 className='font-bold text-xl'>2. Review Cart</h2>
            <div className="bg-gray-100 py-8 px-8 m-4">
                <h2 className='font-bold text-center text-white'>Cart</h2>
                <ol className='list-decimal inline'>
                    {Object.keys(cart).length===0 && <div className='mt-5 text-center'>Cart is Empty! Add a few items to chackout</div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={cart[k]} className='my-3'>
                            <div className='item flex'>
                                <div className='font-semibold'>{cart[k].name}</div>
                                <div className='flex items-center justify-center w-1/3'><AiOutlineMinusCircle onClick={() => {removeFromCart(k, 1)}} className='px-1 text-2xl text-pink-700'/>{cart[k].qty}<AiOutlinePlusCircle onClick={() => {addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='px-1 text-2xl text-pink-700' /></div>
                            </div>
                        </li>
                    })}
                </ol>
            </div>
            <span className='block text-center'><button disabled className='mt-8 mb-6 font-bold cursor-default'>Total Amount - ₹{subTotal}</button></span>
            <span className='block text-center m-6 mb-12'><button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-md">Proceed To Payment<MdOutlinePayments className='text-pink mx-2 mt-1' /></button></span>
        </div>
    )
}

export default Checkout