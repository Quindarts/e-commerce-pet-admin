import React, { Fragment, useState } from 'react'
import Title from '../../../Components/ui/Title/Title'
import { Box } from '@mui/material'
import { useSnackbar } from 'notistack'
import Button from '../../../Components/ui/Button/Button'
import Modal from '../../../Components/ui/Modal/Modal'
import ModalAdd from '../Modal/Add'
import AccordionList from '../../../Components/ui/AccordionList/AccordionList'

const list = [
    {
        name: 'dog',
        path: ',dog,',
        details:
            'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.',
        child: [
            {
                name: 'toys',
                details:
                    'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.',
            },
            {
                name: 'baby',
                details:
                    'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.',
            },
        ],
    },
    {
        name: 'cat',
        path: ',cat,',
        details:
            'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.',
        child: [
            {
                name: 'toys',
                details:
                    'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès quil est prêt ou que la mise en page est achevée.',
                path: ',cat,',
            },
        ],
    },
]

function CategoryAddPage() {
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false)
    const [pathCurrent, setPathCurrent] = useState('')
    const handleOpenModalAdd = (path) => {
        setIsOpenModalAdd(true)
        setPathCurrent(path)
    }

    const handleCloseModalAdd = () => {
        setIsOpenModalAdd(false)
    }

    return (
        <Fragment>
            <Box>
                <Box className="flex justify-between">
                    <Title icon="system-uicons:box-add">Add new category</Title>
                    <Button>New root category</Button>
                </Box>
                <Box>
                    <AccordionList
                        list={list}
                        handleOpenModalAdd={handleOpenModalAdd}
                        handleCloseModalAdd={handleCloseModalAdd}
                    />
                </Box>
            </Box>
            <Modal size="sm" open={isOpenModalAdd} onClose={handleCloseModalAdd}>
                <ModalAdd path={pathCurrent} handleCloseModalAdd={handleCloseModalAdd} />
            </Modal>
        </Fragment>
    )
}

export default CategoryAddPage
