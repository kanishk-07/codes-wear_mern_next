import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
	return (
		<div>
			<Head>
				<title>CodesWear</title>
				<meta name="description" content="Codeswear - ecommerce for nerds" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <div className='bg-green-500'>
				<p>Hello</p>
			</div> */}
			<div className='bg-red'></div>

			
		</div>
	)
}
/*
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon={faEnvelope} />
*/