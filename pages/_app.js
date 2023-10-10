import '../styles/global.css';

const Header = () => {
    return (
        <h1 style={{ color: 'red' }}>Header</h1>
    )
}
const Footer = () => {
    return (
        <h1 style={{ color: 'red' }}>Footer</h1>
    )
}
// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }) {
    // console.log(Component.render, '----', pageProps);
    // console.log(Component.getTitle(), '----', pageProps);
    if (Component.render) {
        return (
            Component.render()
        )
    } else
        return (
            <>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </>
        )
}