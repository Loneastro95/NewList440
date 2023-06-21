import React from 'react'
import { Link } from 'react-router-dom'
import { Select } from 'react-onsenui'
import { ListItem } from 'react-onsenui';

const ReadOnly = ({ List, handleEditClick, handleDeleteClick}) => {
  return (
    <ListItem key={List.id} modifier={'material'}>
    <br/>
<Select modifier="material">
<option value="1">Active</option>
<option value="2">Completed</option>

</Select>
</ListItem>
        
  );
};

export default ReadOnly
