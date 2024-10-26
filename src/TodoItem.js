import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

function TodoItem({ text , onButtonClick }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete"
                    onClick={onButtonClick}
                >
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemText primary={text} />

        </ListItem>
    )
}

export default TodoItem;
