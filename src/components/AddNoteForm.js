import React, { useState, useContext } from 'react';

import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
	const {dispatch} = useContext( NotesContext );
	const [title, setTitle] = useState( '' );
	const [body, setBody] = useState( '' );
	const addNote = ( e ) => {
		e.preventDefault();
		dispatch( {type: 'ADD_NOTE', title, body} );
		setTitle( '' );
		setBody( '' );
	};
	return (
		<div>
			<p>Add note</p>
			<form action="" onSubmit={addNote}>
				<input type="text" value={title} onChange={(e) => setTitle( e.target.value )} />
				<textarea name="" id="" cols="30" rows="10" value={body} onChange={(e) => setBody( e.target.value )}></textarea>
				<button>Add note</button>
			</form>
		</div>
	)
};

export { AddNoteForm as default };