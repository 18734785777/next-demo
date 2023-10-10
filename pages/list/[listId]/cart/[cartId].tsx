import RouterButton from '@/components/RouterButton'
import { getCurrentTime } from '@/lib'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function Details() {
    const router = useRouter()
    const pid = router.query.listId
    const cid = router.query.cartId
    const [nowTime, setNowTime] = useState('')
    useEffect(() => {
        setNowTime(getCurrentTime())
    }, [])
    return (
        <div>
            <h2>现在时间：{nowTime}</h2>
            <h1>我是详情页面{pid}--{cid}</h1>
            <RouterButton />
        </div>
    )
}
