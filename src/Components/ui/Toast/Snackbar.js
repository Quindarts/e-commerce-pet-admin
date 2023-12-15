import * as React from 'react'
import { SnackbarContent } from 'notistack'

function Toast(props, ref) {
    const { id, message, allowDownload, image, ...other } = props
    return (
        <SnackbarContent className="bg-orange-400" ref={ref} role="alert" {...other}>
            {message}
           
        </SnackbarContent>
    )
}

export default React.forwardRef(Toast)
