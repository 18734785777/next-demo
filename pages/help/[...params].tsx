import { useRouter } from "next/router"

export default function Page() {
    const router = useRouter()
    const params = router.query.params
    console.log(params);
    return (
        <div>
            <h1>help Page--{params}</h1>
        </div>
    )
}
