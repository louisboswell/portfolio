import { useRouter } from "next/router"

export default function Project () {
    const router = useRouter()

    return (
        <a>Project: {router.query.slug}</a>
    );
}