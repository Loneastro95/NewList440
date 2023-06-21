import React from 'react'
import { ListItem } from 'react-onsenui';

const Editable = ({ editListData,List, handleEditListChange, handleCancelClick }) => {
  return (
    <ListItem key={List.id} modifier={'material'}>
     <form>
     <input
     type="text"
     name="List"
     placeholder="Enter..."
     value={editListData.first_name}
     onChange={handleEditListChange}
     />     
   
    <button type='submit'>Save</button>
    <button type='button' onClick={handleCancelClick}>Cancel</button>
    </form> 
</ListItem>
  )
}

export default Editable;

