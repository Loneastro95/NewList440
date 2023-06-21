

import React, { useState, Fragment } from 'react';
import 'onsenui/css/onsen-css-components.css';
import { List } from 'react-onsenui';
import { Link } from 'react-router-dom'
import { Select } from 'react-onsenui'
import data from "./mock-data.json";
import ReadOnly from './ReadOnly';
import Editable from './Editable';
import { nanoid } from "nanoid";

export default function () {

	// Sample List Item
	   const [Lists, setLists] = useState(data)


		const [addListData, setListData] = useState({
			first_name: ""
		});

		const [editListData, setEditListData] = useState({
			first_name: ""
		});

		const [editListId, setEditListId] = useState(null)
        
		const handleAddListChange = (event) => {
			event.preventDefault();

			const fieldName= event.target.getAttribute("name");
			const fieldValue = event.target.value;

			const newListData = { ...addListData};
			newListData[fieldName] = fieldValue;

			setListData(newListData);
		};

		const handleEditListChange = (event) => {
			event.preventDefault();

			const fieldName = event.target.getAttribute("name");
			const fieldValue = event.target.value;

			setEditListData(setListData)
			};

		const handleAddListSubmit = (event) => {
			event.preventDefault();

			const newList = {
				id: nanoid(),
				first_name: addListData.first_name,
			};

			const newLists = [...Lists, newList];
			setLists(newLists);
		};
		const handleEditListSubmit = (event) => {
			event.preventDefault();

			const editedList = {
				id: editListId,
				first_name: editListData.first_name,
			};

			const newLists = [...Lists];

			const index = Lists.findIndex((List) => List.id === editListId);

			newLists[index] = editedList;

			setLists(newLists);
			setEditListId(null);
		};
		
		const handleEditListClick = (event, List) => {
			event.preventDefault();
			setEditListId(List.id);

			const ListValues = {
				first_name: List.first_name,
			};

			setEditListData(ListValues)
		};

		const handleCancleClick = (ListId) => {
			setEditListId(null);
		};
		
		const handleDeleteClick = (ListId) => {
			const newLists = [...Lists];

			const index = Lists.findIndex((List) => List.id === ListId);

			newLists.splice(index, 1);

			setLists(newLists);
		};
		

		
		const [query, setQuery] = useState("");

	return (
		<div className='home'>
		
		<nav>	
         <h2>To-Do</h2>


        <ul>
         <button><Link to="/Home">Home</Link></button>    
         <button><Link to="/">LogOut</Link></button>
         <button><Link to="/Registration">SignUp</Link></button>
        </ul>
      </nav>
		<form className="search"
        onChange={(event) => setQuery(event.target.value)}>
          <input
           type="text"
           name="search"
           required="reqired"
           placeholder="Search..."/>
        </form>		  
			<List

				dataSource={Lists.filter((List) =>
					List.toLowerCase().includes(query))
					.map((List) => (List))}
				renderRow={(row) => (
					
	// 				<ListItem modifier={'material'}>
	// 					{row}<br/>
    //               <Select modifier="material">
    //                 <option value="1">Active</option>
    //                  <option value="2">Completed</option>
        
    //              </Select>
	// 	           </ListItem>
				
	<Fragment>
		
	{editListId === List.id ? (
	  <Editable
		editListData={editListData}
		handleEditListChange={handleEditListChange}
		handleCancelClick={handleCancleClick}
	  />
	) : (
	  <ReadOnly
		List={List}
		handleEditClick={handleEditListClick}
		handleDeleteClick={handleDeleteClick}
	  />
	)}
  </Fragment>
	         )}
			/>
			<form onSubmit={ handleAddListSubmit}>
				<input
				type='text'
				name='list'
				placeholder='Activity...'
				onChange={handleAddListChange }
				/>
				<button>ADD</button>
			</form>
		</div>
	);
	}
