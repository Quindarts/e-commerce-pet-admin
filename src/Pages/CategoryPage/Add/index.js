import React, { Fragment, useState } from 'react'
import Title from '../../../Components/ui/Title/Title'
import { Accordion, AccordionSummary, AccordionActions, AccordionDetails, Box } from '@mui/material'
import { Form, Formik } from 'formik'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import { useSnackbar } from 'notistack'
import Button from '../../../Components/ui/Button/Button'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Modal from '../../../Components/ui/Modal/Modal'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Icon } from '@iconify/react'
import { APP_ICON } from '../../../Utils/Constants'
import ModalAdd from '../Modal/Add'

function CategoryAddPage() {
    const { enqueueSnackbar } = useSnackbar()
    const list = [
        { title: 'Cat', value: 'cat' },
        { title: 'Dog', value: 'dog' },
    ]
    const [isActive, setActive] = useState(false)
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false)

    const handleOpenModalAdd = () => {
        setIsOpenModalAdd(true)
    }
    const handleCloseModalAdd = () => {
        setIsOpenModalAdd(false)
    }
    return (
        <Fragment>
            <Box>
                <Title icon="system-uicons:box-add">Add new category</Title>
                <Box>
                    <Box className="mt-4">
                        <Accordion expanded={isActive}>
                            <AccordionSummary
                                expandIcon={
                                    <Box>
                                        <button onClick={() => setActive(!isActive)}>
                                            <ExpandMoreIcon />
                                        </button>
                                        {!isActive && (
                                            <Button
                                                onClick={handleOpenModalAdd}
                                                className="m-1"
                                                size="sm"
                                                color="red"
                                                icon
                                            >
                                                <Icon icon={APP_ICON.i_plus} />
                                            </Button>
                                        )}
                                    </Box>
                                }
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Dog
                            </AccordionSummary>
                            <AccordionDetails>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={
                                            <button onClick={() => setActive(!isActive)}>
                                                <ExpandMoreIcon />
                                            </button>
                                        }
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}
                                    >
                                        Dog toys
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        Dog meals
                                    </AccordionSummary>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box className="mt-4">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Cat
                            </AccordionSummary>
                            <AccordionDetails>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        Cat toys
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        Cat meals
                                    </AccordionSummary>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Box>
            <Modal size="sm" open={isOpenModalAdd} onClose={handleCloseModalAdd}>
                <ModalAdd handleCloseModalAdd={handleCloseModalAdd} />
            </Modal>
        </Fragment>
    )
}

export default CategoryAddPage
