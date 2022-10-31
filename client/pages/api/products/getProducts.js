import Product from '../../../database/models/Product'
import connectDB from '../../../database/connector'

const handler = async (req, res) => {
    try {
    const products = await Product.find()
    res.status(200).json({ success: true, result: products })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}
export default connectDB(handler)