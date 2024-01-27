import { Formik } from 'formik'
import React, { Fragment, useRef } from 'react'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { Editor } from '@tinymce/tinymce-react'

function ModalEdit(props) {
    const { category_id } = props
    console.log('🚀 ~ ModalEdit ~ category_id:', category_id)
    const editorRef = useRef(null)
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent())
        }
    }
    return (
        <Formik
            sx={{ width: '100%' }}
            className="form_category "
            initialValues={{}}
            validationSchema={{}}
            onSubmit={{}}
        >
            {({ handleBlur, handleChange, values, errors, touched }) => (
                <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', margin: '15px' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h7">
                        Category details
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                            <Box sx={{ width: '100%' }}>
                                <Textfield label="Name" />
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <Textfield label="Code" />
                            </Box>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <Textfield label="Total" />
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                initialValue="<p>This is the initial content of the editor.</p>"
                                init={{
                                    height: 130,
                                    menubar: false,
                                    plugins: [
                                        'a11ychecker',
                                        'advlist',
                                        'advcode',
                                        'advtable',
                                        'autolink',
                                        'checklist',
                                        'export',
                                        'lists',
                                        'link',
                                        'image',
                                        'charmap',
                                        'preview',
                                        'anchor',
                                        'searchreplace',
                                        'visualblocks',
                                        'powerpaste',
                                        'fullscreen',
                                        'formatpainter',
                                        'insertdatetime',
                                        'media',
                                        'table',
                                        'help',
                                        'wordcount',
                                    ],
                                    toolbar:
                                        'undo redo | casechange blocks | bold italic backcolor | ' +
                                        'alignleft aligncenter alignright alignjustify | ' +
                                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Button sx={{ width: '50%' }} color="primary" variant="outline">
                            Cancel
                        </Button>{' '}
                        <Button sx={{ width: '50%' }} color="primary">
                            Save
                        </Button>
                    </Box>
                </Box>
            )}
        </Formik>
    )
}

export default ModalEdit
