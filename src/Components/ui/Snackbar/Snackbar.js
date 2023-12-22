import React from 'react'
import { useSnackbar, SnackbarContent } from 'notistack'
import styled from '@emotion/styled'
import { forwardRef } from 'react'
// import { Box } from '@mui/material'

function CustomVariantSnackbar(props, ref) {
    const { closeSnackbar } = useSnackbar()
    const handleCloseSnackbar = () => closeSnackbar(id)
    const { id, message, allowDownload, image, ...other } = props
    return (
        <SnackbarContent ref={ref} role="alert" {...other}>
            <div className="bg-orange-400 text-black p-2 rounded-lg border-black flex justify-between items-center w-full" >
                {message}
                <button className="cursor-pointer text-xl text-white" onClick={handleCloseSnackbar}>
                    Close
                </button>
            </div>
        </SnackbarContent>
    )
}

export default React.forwardRef(CustomVariantSnackbar)
