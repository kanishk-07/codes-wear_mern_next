import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '../database/models/Product'
import mongoose from 'mongoose'

const Tshirts = ({products}) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                    {products.map((product) => {
                        return <div key={product._id} className="lg:w-1/5 md:w-1/2 p-5 w-full shadow-lg mx-7 my-3">
                            <Link href={`/product/${product.slug}`}>
                                <div className="block relative rounded overflow-hidden">
                                    <Image alt="ecommerce" className="object-cover object-center w-full h-full block" width={400} height={400} src={product.img} />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.title}</h2>
                                    <h3 className="text-gray-900 title-font text-lg font-medium">{product.desc}</h3>
                                    <p className="mt-1">₹{product.price}</p>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        mongoose.connect(process.env.MONGODB_DEV_URL)
    }
    const products = await Product.find({ category: "T-Shirts" })
    return {
        props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
    }
}

export default Tshirts