import { Box } from '@mui/material'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '../Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'

function AccordionList(props) {
    const { handleOpenModalAdd, list } = props
    const [isActive, setActive] = useState(false)
    return (
        <Box className="mt-4">
            {list.map((item, key) => (
                <Accordion
                    key={key}
                    onChange={(e) => {
                        console.log(e)
                        setActive(!isActive)
                    }}
                    disableSpacing
                >
                    <AccordionSummary
                        expandIcon={
                            <Box>
                                <Button
                                    onClick={() => handleOpenModalAdd(item.path)}
                                    className="m-1"
                                    size="sm"
                                    color="primary"
                                    icon
                                >
                                    <Icon icon={APP_ICON.i_plus} />
                                </Button>
                            </Box>
                        }
                    >
                        {item.name}
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.child.map((mini, key) => (
                            <Accordion className="my-2">
                                <AccordionSummary
                                    // expandIcon={
                                    //     <Box>
                                    //         <Button
                                    //             onClick={handleOpenModalAdd}
                                    //             className="m-1"
                                    //             size="sm"
                                    //             color="primary"
                                    //             icon
                                    //         >
                                    //             <Icon icon={APP_ICON.i_plus} />
                                    //         </Button>
                                    //     </Box>
                                    // }
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    {mini.name}
                                </AccordionSummary>
                                <AccordionDetails>{mini.details}</AccordionDetails>
                            </Accordion>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}

export default AccordionList
