import { Form, Formik } from 'formik'
import React from 'react'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'

function ModalAdd(props) {
    const { handleCloseModalAdd } = props
    const handleSubmitAddForm = async (values, actions) => {}

    return (
        <Box padding={2}>
            <Typography
                style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ', marginBottom: '15px' }}
                variant="h7"
            >
                New category
            </Typography>
            <Formik
                initialValues={{
                    name: '',
                    total: '',
                    description: '',
                }}
                onSubmit={handleSubmitAddForm}
            >
                {({ handleChange, handleBlur, values }) => (
                    <Form style={{ marginTop: '15px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                                <Box flex={1}>
                                    <Textfield
                                        label="Name"
                                        name="name"
                                        id="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                </Box>
                                <Box flex={1}>
                                    <Textfield
                                        label="Code"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={'Auto generate code category'}
                                        disabled
                                    />
                                </Box>
                            </Box>
                            <Box>
                                <Textfield
                                    label="Total"
                                    name="total"
                                    id="total"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.total}
                                />
                            </Box>
                            <Box>
                                <Textfield
                                    label="Description"
                                    name="description"
                                    id="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                />
                            </Box>

                            <Box>
                                <Textfield
                                    label="Category path"
                                    name="path"
                                    id="path"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.total}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Button
                                    onClick={handleCloseModalAdd}
                                    sx={{ width: '50%' }}
                                    color="primary"
                                    variant="outline"
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" sx={{ width: '50%' }} color="primary">
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default ModalAdd
