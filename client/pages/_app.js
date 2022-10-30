import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

	const [cart, setCart] = useState({})
	const [subTotal, setSubTotal] = useState(0)

	useEffect(() => {
		loadCart()
	}, [])

	const loadCart = async () => {
		try {
			if (localStorage.getItem("cart")) {
				const savedCart = await JSON.parse(localStorage.getItem("cart"))
				setCart(savedCart)
				let subT = 0, keys = Object.keys(savedCart)
				for (let i = 0; i < keys.length; i++) {
					subT += savedCart[keys[i]].price * savedCart[keys[i]].qty
				}
				setSubTotal(subT)
			}
		} catch (err) {
			console.error(err)
			localStorage.clear()
		}
	}

	const saveCart = (myCart) => {
		localStorage.setItem("cart", JSON.stringify(myCart))
		let subT = 0, keys = Object.keys(myCart)
		for (let i = 0; i < keys.length; i++) {
			subT += myCart[keys[i]].price * myCart[keys[i]].qty
		}
		setSubTotal(subT)
	}

	const addToCart = (itemCode, qty, price, name, size, variant) => {
		let newCart = cart
		if (itemCode in cart) {
			newCart[itemCode].qty = cart[itemCode].qty + qty
		} else {
			newCart[itemCode] = { qty: 1, price, name, size, variant }
		}
		setCart(newCart)
		saveCart(newCart)
	}
	const removeFromCart = (itemCode, qty) => {
		let newCart = cart
		if (itemCode in cart) {
			newCart[itemCode].qty = cart[itemCode].qty - qty
		}
		if (newCart[itemCode].qty <= 0) {
			delete newCart[itemCode]
		}
		setCart(newCart)
		saveCart(newCart)
	}
	const clearCart = () => {
		setCart({})
		saveCart({})
	}

	return <>
		<Navbar cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} />
		<Component cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />
		<Footer />
	</>
}

export default MyApp
