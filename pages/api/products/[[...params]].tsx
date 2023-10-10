import { NextApiRequest, NextApiResponse } from 'next'
import mock from './mock.json'

const productsList = [...mock.products]

type Data = {
    total: number,
    products: any[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req.body, 'body');
    switch (req.method) {
        case 'DELETE':
            {
                console.log('我是delete请求');
                const index = productsList.findIndex((item: any) => (item.id === req.body.id))
                if (index >= 0) productsList.splice(index, 1)
            }
            break;
        case 'POST':
            {
                console.log('我是POST请求');
                productsList.push(req.body)
            }
            break;
        case 'PUT':
            {
                console.log('我是PUT请求');
                const index = productsList.findIndex((item: any) => (item.id === req.body.id))
                if (index >= 0) productsList.splice(index, 1, req.body)
            }
            break;
        default:
            break;
    }
    // const response = await fetch('https://dummyjson.com/products')
    // const reply = await response.json()
    res.status(200).json({
        total: productsList.length,
        products: productsList
        // products: reply.products
    })
}
