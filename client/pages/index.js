import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
	return (
		<div>
			<Head>
				<title>CodesWear</title>
				<meta name="description" content="Codeswear - ecommerce for nerds" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar/>
			<div>
				<Image src='/home.jpg' alt='' width={1366} height={100} />
			</div>
			<Footer/>
		</div>
	)
}

// tailwind suggestions show ctrl+space

/*
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon={faEnvelope} />
*/