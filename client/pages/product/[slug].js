import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    //console.log(router)
    const { slug } = router.query
    const { foo } = router.query
    return <p>Post: {slug} {foo}</p>
}

export default Post

// http://localhost:3000/product/heyfucker?foo=bar
// all after product/ is called as slug
// heyfucker will have slug with name as the name of the file [slug]