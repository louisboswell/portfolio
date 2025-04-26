import { useRouter } from "next/router"

export default function Post () {
    const router = useRouter()

    return (
        <a>Post: {router.query.slug}</a>
    );
}