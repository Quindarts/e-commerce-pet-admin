import React from 'react'
import { Box, Table, Typography } from '@mui/material'
import Button from '../../Components/ui/Button/Button'
import SearchTable from '../../Components/ui/Search/SearchTable'

// const rows = [
//     {
//         id: '1',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
//     {
//         id: '2',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
//     {
//         id: '3',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
//     {
//         id: '4',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
//     {
//         id: '5',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
//     {
//         id: '6',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
//     {
//         id: '7',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
//     {
//         id: '8',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
//     {
//         id: '9',
//         code: 'P10001',
//         detail: {
//             name: 'Light Airpod',
//             img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
//             desc: 'Amazon lins',
//         },
//         price: '$450',
//         cost: '$432',
//         producer: 'Apple',
//         category: 'Air pod',
//         extra: '20%',
//         edit: <Box></Box>,
//         priority: 1,
//     },
// ]
// const columns = [
//     {
//         field: 'detail',
//         headerName: 'Product',
//         flex: 2,
//         renderCell: (params) => (
//             <Box className="flex gap-3">
//                 <img className="h-[50px] w-[50px]" src={params.formattedValue.img} alt="" />
//                 <Box>
//                     <Typography className="text-[14px] font-bold text-gray-600">
//                         {params.formattedValue.name}
//                     </Typography>
//                     <Typography variant="h10" className="font-500 text-gray-[#5f748d]">
//                         {params.formattedValue.desc}
//                     </Typography>
//                 </Box>
//             </Box>
//         ),
//     },
//     {
//         field: 'date',
//         headerName: 'Date',
//         flex: 1,
//     },
//     {
//         field: 'category',
//         headerName: 'Category',
//         flex: 1,

//         renderCell: (params) => (
//             <Box className="font-500 rounded-3xl bg-[#f6f6f8] px-5 py-1">{params.formattedValue}</Box>
//         ),
//     },
//     {
//         field: 'brand',
//         headerName: 'Brand',
//         flex: 1,
//     },

//     {
//         field: 'price',
//         headerName: 'Price',
//         flex: 1,
//     },
//     {
//         field: 'status',
//         headerName: 'Status',

//         flex: 1,
//         renderCell: (params) => <Box className="font-500 px-7 py-1">{params.row.status}</Box>,
//     },
// ]

const ProductPage = () => {
    return (
        <Box>
            {/* <Box className="flex items-center justify-between">
                <Typography variant="h4" gutterBottom>
                    Products
                </Typography>
                <Button variant="contained" color="primary">
                    Active
                </Button>
                <Button variant="contained" color="secondary">
                    Draft
                </Button>
                <Button variant="contained" color="success">
                    Assembly
                </Button>
                <Button variant="contained" color="error">
                    + Add Product
                </Button>
            </Box>
            <SearchTable data={rows} columns={columns} />
            <Table label="Popular Products" className="h-80 w-auto" columns={columns} rows={rows} /> */}
        </Box>
    )
}

export default ProductPage
