import RouterButton from '@/components/RouterButton';
import Link from 'next/link'
import { getCurrentTime } from '../../lib'
export default function Page(props: any) {
    console.log('props');
    return (
        <div>
            <h1>我是List页面</h1>
            <RouterButton />
            <h1>{props.nowTime}</h1>
            <ul>
                {
                    props.list.map((item: any, index: number) => {
                        return (
                            <li key={index}>
                                <Link href={`/list/${item.id}`}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export async function getStaticProps() {
    console.log('static props');
    const nowTime = getCurrentTime()
    const response = await fetch('https://dummyjson.com/products')
    const reply = await response.json()
    return ({
        props: {
            nowTime,
            list: reply.products
        }
    })
}