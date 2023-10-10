import { useRouter } from "next/router"

const RouterButton = () => {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => { router.back() }}>back</button>
            <button onClick={() => { router.push('/list') }}>goList</button>
        </div>
    )
}

export default RouterButton
