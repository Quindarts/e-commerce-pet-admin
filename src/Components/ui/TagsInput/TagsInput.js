import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Textfield from '../Textfield/Textfield'
import Box from '@mui/material/Box'

export default function TagsInput(props) {
    const {
        onTagsChange,
        className,
        inputcss,
        type = 'text',
        label,
        variant = 'container',
        helperText,
        error,
        value,
        defaultValue,
        icon,
        onTagRemove,
        size = 'xl',
        ...rest
    } = props

    // Initialize state for tags
    const [tags, setTags] = React.useState([])

    // Handle selection changes
    const handleChange = (event, newValue) => {
        setTags(newValue)
        console.log('Current tags:', newValue)
        if (onTagsChange) {
            onTagsChange(newValue) // Correctly notifying the parent component here
        }

        // Optionally, call onTagRemove for each removed tag
        // Note: This logic needs adjustment since it currently checks for added tags instead of removed ones
        const previouslyAddedTags = tags.filter((tag) => !newValue.includes(tag))
        previouslyAddedTags.forEach((tag) => {
            if (onTagRemove) {
                onTagRemove(tag)
            }
        })
    }

    return (
        <Box className={`${className}`}>
            <Autocomplete
                multiple
                id="tags-filled"
                options={[]} // Assuming you have an array of available options
                defaultValue={defaultValue || []}
                freeSolo
                value={tags} // Control the selected values
                onChange={handleChange}
                renderInput={(params) => <Textfield {...params} variant="filled" label="Tags" placeholder="Tags" />}
            />
        </Box>
    )
}
