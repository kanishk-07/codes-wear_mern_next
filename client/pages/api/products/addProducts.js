import Product from '../../../database/models/Product'
import connectDB from '../../../database/connector'

const handler = async (req, res) => {
    try {
        if (req.method === 'POST') {
            const products = req.body
            for(let i=0; i<products.length; i++) {
                const product = new Product(products[i])
                await product.save() 
            }
            return res.status(200).json({ success: true, message: 'Products Created' })
        } else {
            return res.status(400).json({ success: false, message: 'Bad Request' })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}
export default connectDB(handler)