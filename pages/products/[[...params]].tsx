import RouterButton from "@/components/RouterButton"
import { getCurrentTime } from "@/lib"
import Image from "next/image"
export default function Page(props: any) {
    const myLoader = ({ src }: any) => {
        return `${src}`
    }
    return (
        <div>
            <h1>Products页面</h1>
            <h2>{props.nowTime}</h2>
            <RouterButton />
            <ul className="ulll">
                {
                    props.list.map((item: any, index: number) => {
                        return (
                            <li className="liii" key={index} style={{ width: '500px', border: '2px solid #ddd', margin: '10px auto', borderRadius: '8px' }}>
                                <div className="box1">
                                    <h3 style={{ color: 'blue' }}>{item.brand}</h3>
                                    <h2>{item.title}</h2>
                                    <span>
                                        {item.description}
                                    </span>
                                    <span className="img_box">
                                        {item.images.map((img: string, ind: number) => {
                                            return (
                                                <Image key={ind} loader={myLoader} width={40} height={50} src={img} alt="Picture of the author" />
                                            )
                                        })}
                                    </span>
                                </div>
                                <div className="price">
                                    {item.price}
                                    <span>
                                        ({item.discountPercentage})
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
}
export async function getServerSideProps(context: any) {
    const nowTime = getCurrentTime()
    console.log('server side', nowTime);
    const { req, res, params, query, ...rest } = context
    console.log({ params, query, rest });
    const response = await fetch('https://dummyjson.com/products')
    // const response = await fetch('http://localhost:3000/api/products')
    const reply = await response.json()
    // console.log('cookie', req.headers.cookie);
    // res.setHeader('Set-Cookie', 'token=xxxxxx')
    return ({
        props: {
            nowTime,
            list: reply.products
        }
    })
}