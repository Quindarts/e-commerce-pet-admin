import React, { useEffect, useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../Button/Button'
import { styled } from '@mui/material/styles'
import { Icon } from '@iconify/react'
import ImageCard from './ImageCard'
import { getBase64Image } from '../../../hook/ui/getBase64Image'
import { toast } from 'sonner' // Ensure 'sonner' is properly installed and imported

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

function InputUpload(props) {
    const { listUpload, handleTakeImages } = props
    const [listImg, setListImg] = useState(listUpload || [])
    const [base64Image, setBase64Image] = useState('')
    const [hovered, setHovered] = useState(false)
    const fileInputRef = useRef(null)

    const handleRemoveUploadImage = (src) => {
        setListImg((prevList) => prevList.filter((item) => item !== src))
    }
    const handleRemoveAllImage = () => {
        setListImg([])
    }

    useEffect(() => {
        if (base64Image) {
            setListImg((prevList) => [...prevList, base64Image])
        }
    }, [base64Image])

    useEffect(() => {
        handleTakeImages(listImg)
    }, [listImg])

    const handleFileChange = async (event) => {
        const file = event.target.files[0]
        if (file) {
            try {
                const base64String = await getBase64Image(file)
                setBase64Image(base64String)

                const reader = new FileReader()
                reader.onload = () => {
                    setBase64Image(reader.result)
                }
                reader.readAsDataURL(file)
            } catch (error) {
                toast.error('Failed to convert image to Base64: ' + error.message)
                console.error('Failed to convert image to Base64:', error)
            }
        }
    }
    const handleFileInputClick = () => {
        fileInputRef.current.click()
    }

    return (
        <Box
            className="flex w-full border-spacing-1 flex-col justify-center gap-5 rounded-2xl border-2 bg-white shadow-md"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Button
                className="mt-5"
                component="label"
                variant="contained"
                startIcon={<Icon icon="ic:round-cloud-upload" width={40} height={40} />}
            >
                <Typography className="font-[700] text-gray-600" variant="h6" component="h6">
                    Upload Image here
                </Typography>
                <VisuallyHiddenInput type="file" onChange={handleFileChange} ref={fileInputRef} />
            </Button>
            <Box className="flex h-[11rem] w-full border-spacing-1 flex-wrap gap-5 rounded-md px-[2rem]">
                {listImg.length > 0 &&
                    listImg.map((item, key) => (
                        <ImageCard src={item} key={key} handleRemoveUploadImage={handleRemoveUploadImage} />
                    ))}
            </Box>
            <Button className="m-4 w-[10rem]" color="primary" onClick={handleRemoveAllImage}>
                Clear all choice
            </Button>
        </Box>
    )
}

export default InputUpload
