import RouterButton from "@/components/RouterButton"
import { getCurrentTime } from "@/lib"
import { useRouter } from "next/router"
export default function Page(props: any) {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <h1>加载中.....</h1>
        )
    }
    else
        return (
            <div>
                <h2>现在时间：{props.nowTime}</h2>
                <h1>我是detail页面{props.id}</h1>
                <RouterButton />
                <p>
                    {props.list.body}
                </p>
            </div>
        )
}

export async function getStaticPaths() {
    const response = await fetch(`https://dummyjson.com/posts/`)
    const reply = await response.json()
    return {
        //按需生成
        paths: [
            { params: { listId: '1' } },
            { params: { listId: '2' } },
        ],
        // paths: reply.posts.map((p: any) => ({ params: { listId: String(p.id) } })),
        // fallback: 'blocking',//不会返回404 next有预取功能 预生成页面 进入某个页面会预先检测是否可能需要的页面进行预生成(按需生成)这并不是服务端渲染SSR而是SSG(服务端生成) 
        // fallback: false,//如果访问的路由 网站没有静态页 会返回404
        fallback: true, //页面有第二选择 可以做加载中...的操作 给用户提示
    }
}
export async function getStaticProps(context: any) {
    // console.log(context);
    const nowTime = getCurrentTime()
    const id = context.params.listId
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const reply = await response.json()
    return ({
        props: {
            nowTime,
            list: reply
        }
    })
}