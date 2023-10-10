import RouterButton from "@/components/RouterButton"
import { getCurrentTime } from "@/lib"

export default function index(props: any) {
    return (
        <div>
            <h1>Cart List Page</h1>
            <h2>当前时间为{props.nowTime}</h2>
            <RouterButton />
            <ul>
                {
                    props.data.map((item: any, index: number) => {
                        return (
                            <li key={index}>{item.body}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export async function getStaticPaths() {
    return {
        //按需生成
        paths: [
            { params: { listId: '1' } },
            { params: { listId: '2' } },
        ],
        fallback: false,
    }
}
export async function getStaticProps(context: any) {
    const nowTime = getCurrentTime()
    const response = await fetch(`https://dummyjson.com/comments/`)
    const reply = await response.json()
    return ({
        props: {
            nowTime,
            data: reply.comments.filter((i: any) => i.id <= 2)
        },
        revalidate: 6000,
    })
}