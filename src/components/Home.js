

import React, { useState } from 'react';
import 'onsenui/css/onsen-css-components.css';
import { List, ListItem } from 'react-onsenui';
import { Link } from 'react-router-dom'
import { Select } from 'react-onsenui'


export default function () {

	// Sample List Item
	const sampleListItem = ['Running-- ',
		'Eating-- ', 'Study-- ', 'Socials-- ', 'Play-- ']

		const [addListData, setListData] = useState([''])
		const [query, setQuery] = useState('');

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

				dataSource={sampleListItem.filter((sampleListItem) =>
					sampleListItem.toLowerCase().includes(query))
					.map((sampleListItem) => (sampleListItem))}
				renderRow={(row) => (
					<ListItem modifier={'material'}>
						{row}<br/>
            <Select modifier="material">
        <option value="1">Active</option>
        <option value="2">Completed</option>
        
      </Select>
					</ListItem>
				)}
			/>
			<form>
				<input
				type='text'
				name='list'
				placeholder='Activity...'
				/>
				<button>ADD</button>
			</form>
		</div>
	);
}
