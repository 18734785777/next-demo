import Link from 'next/link'
export default function Index() {
    return (
        <main>
            <h1>Index Page</h1>
            <ul>
                <li><Link href="/list" >List</Link></li>
                <li><Link href="/about" >About</Link></li>
                <li><Link href="/products" >Products</Link></li>
            </ul>
        </main>
    )
}
Index.getTitle = function () {
    return {
        title: 'title of Index page'
    }
}
Index.rendera = function () {
    return (
        <h1>我是getTitle函数</h1>
    )
}


export function getStaticProps() {
    return ({
        props: {
            pageName: 'Index page'
        }
    })
}

