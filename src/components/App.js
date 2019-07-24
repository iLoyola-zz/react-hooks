import React, { useState, useEffect } from 'react';

const App = ( props ) => {
	const [count, setCount] = useState( props.count );
	const increment = () => {
		setCount( count + 1 )
	};
	const reset = () => {
		setCount( props.count )
	};
	const [text, setText] = useState( '' );
	const onChange = ( e ) => {
		setText( e.target.value );
	};

	useEffect( () => {
		console.log( 'Only ran once!' );
	}, []);

	useEffect( () => {
		console.log( 'useEffect ran!' );
		document.title = count;
	}, [count]);

	return (
		<div>
			<p>The current {text || 'count'} is {count}</p>
			<button onClick={increment}>+1</button>
			<button onClick={() => setCount( count - 1 )}>-1</button>
			<button onClick={reset}>reset</button>
			<div>
				<input type="text" value={text} onChange={onChange} />
			</div>
		</div>
	)
};

App.defaultProps = {
	count: 0
}

export { App as default };