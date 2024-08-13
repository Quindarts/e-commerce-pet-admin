import React from 'react'
import {Autocomplete as CustomAutocomplete } from '@mui/material'


function Autocomplete(props) {
    const { ...rest } = props
    return <CustomAutocomplete {...rest}></CustomAutocomplete>
}

export default Autocomplete

// import React, { useState, useEffect } from 'react'
// import Textfield from '../Textfield/Textfield'
// import Autocomplete from '@mui/material/Autocomplete'
// import CircularProgress from '@mui/material/CircularProgress'

// function sleep(duration) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, duration)
//     })
// }

// export default function Asynchronous() {
//     const [open, setOpen] = React.useState(false)
//     const [options, setOptions] = React.useState([])
//     const loading = open && options.length === 0
//     const [attributes, setAttributes] = useState([])
//     const [loadings, setLoadings] = useState(false)

//     const fetchAttributes = async () => {
//         setLoadings(true)
//         try {
//             const response = await fetch(
//                 'https://e-commerce-pet-server-quindarts.vercel.app/attributeProducts?limit=100&offset=1',
//             )
//             const json = await response.json()
//             setAttributes(json.list.map((attribute) => ({ ...attribute, id: attribute._id })))
//         } catch (error) {
//             console.error('Failed to fetch attributes:', error)
//         } finally {
//             setLoadings(false)
//         }
//     }
//     useEffect(() => {
//         fetchAttributes()
//     }, [])
//     React.useEffect(() => {
//         let active = true

//         if (!loading) {
//             return undefined
//         }

//         ;(async () => {
//             await sleep(1e3) // For demo purposes.

//             if (active) {
//                 setOptions([...attributes])
//             }
//         })()

//         return () => {
//             active = false
//         }
//     }, [loading])

//     React.useEffect(() => {
//         if (!open) {
//             setOptions([])
//         }
//     }, [open])

//     return (
//         <Autocomplete
//             id="asynchronous-demo"
//             // sx={{ width: 300 }}
//             open={open}
//             onOpen={() => {
//                 setOpen(true)
//             }}
//             onClose={() => {
//                 setOpen(false)
//             }}
//             isOptionEqualToValue={(option, value) => option.name === value.name}
//             getOptionLabel={(option) => option.name}
//             options={options}
//             loading={loading}
//             renderInput={(params) => (
//                 <Textfield
//                     {...params}
//                     label="Main attribute name"
//                     InputProps={{
//                         ...params.InputProps,
//                         endAdornment: (
//                             <React.Fragment>
//                                 {loading ? <CircularProgress color="inherit" size={20} /> : null}
//                                 {params.InputProps.endAdornment}
//                             </React.Fragment>
//                         ),
//                     }}
//                 />
//             )}
//         />
//     )
// }

// // const attributes = [
// //     { name: 'The Shawshank Redemption', year: 1994 },
// //     { name: 'The Godfather', year: 1972 },
// //     { name: 'The Godfather: Part II', year: 1974 },
// //     { name: 'The Dark Knight', year: 2008 },
// //     { name: '12 Angry Men', year: 1957 },
// //     { name: "Schindler's List", year: 1993 },
// //     { name: 'Pulp Fiction', year: 1994 },
// //     {
// //         name: 'The Lord of the Rings: The Return of the King',
// //         year: 2003,
// //     },
// //     { name: 'The Good, the Bad and the Ugly', year: 1966 },
// //     { name: 'Fight Club', year: 1999 },
// //     {
// //         name: 'The Lord of the Rings: The Fellowship of the Ring',
// //         year: 2001,
// //     },
// //     {
// //         name: 'Star Wars: Episode V - The Empire Strikes Back',
// //         year: 1980,
// //     },
// //     { name: 'Forrest Gump', year: 1994 },
// //     { name: 'Inception', year: 2010 },
// //     {
// //         name: 'The Lord of the Rings: The Two Towers',
// //         year: 2002,
// //     },
// //     { name: "One Flew Over the Cuckoo's Nest", year: 1975 },
// //     { name: 'Goodfellas', year: 1990 },
// //     { name: 'The Matrix', year: 1999 },
// //     { name: 'Seven Samurai', year: 1954 },
// //     {
// //         name: 'Star Wars: Episode IV - A New Hope',
// //         year: 1977,
// //     },
// //     { name: 'City of God', year: 2002 },
// //     { name: 'Se7en', year: 1995 },
// //     { name: 'The Silence of the Lambs', year: 1991 },
// //     { name: "It's a Wonderful Life", year: 1946 },
// //     { name: 'Life Is Beautiful', year: 1997 },
// //     { name: 'The Usual Suspects', year: 1995 },
// //     { name: 'Léon: The Professional', year: 1994 },
// //     { name: 'Spirited Away', year: 2001 },
// //     { name: 'Saving Private Ryan', year: 1998 },
// //     { name: 'Once Upon a Time in the West', year: 1968 },
// //     { name: 'American History X', year: 1998 },
// //     { name: 'Interstellar', year: 2014 },
// // ]
