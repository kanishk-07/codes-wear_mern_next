import React from 'react'
import Image from 'next/Image'

const Order = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CodesWear.com</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #4927429</h1>
                        <p className="leading-relaxed mb-4">Your Order Has Been Successfully Placed</p>
                        <div class="flex mb-4">
                            <a class="flex-grow py-2 text-lg px-1">Product</a>
                            <a class="flex-grow py-2 text-lg px-1">Quantity</a>
                            <a class="flex-grow py-2 text-lg px-1">Price</a>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the Code (XL/Blue)</span>
                            <span className="ml-auto text-gray-900">1</span>
                            <span className="ml-auto text-gray-900">₹499</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the Code (XL/Red)</span>
                            <span className="ml-auto text-gray-900">3</span>
                            <span className="ml-auto text-gray-900">₹499</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the Code (XL/Black)</span>
                            <span className="ml-auto text-gray-900">5</span>
                            <span className="ml-auto text-gray-900">₹499</span>
                        </div>
                        <div className="flex flex-col mt-4">
                            <h1 className="float-right title-font ml-auto font-medium text-2xl text-gray-900">₹580.00</h1>
                            <span className='mt-4'><button className="float-right text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button></span>
                        </div>
                    </div>
                    <Image alt="ecommerce" width={400} height={400} className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                </div>
            </div>
        </section>
    )
}

export default Order