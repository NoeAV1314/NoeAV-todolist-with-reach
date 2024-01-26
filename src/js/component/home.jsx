import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input type="text" 
					onChange={(e) => setInputValue(e.target.value)} 
					value={inputValue}
					onKeyPress={(e) => 
						e.key === "Enter" 
						? setTodos(todos.concat(inputValue))
						: null
					}
					placeholder="What do you need to do?"></input>
				</li>
				
				{todos.map((item, index) => (
					<li> 
						{item} {" "} <i class="fa-solid fa-eraser" style={{color: "#FFB650"}} 
						onClick={() => 
							setTodos (
								todos.filter(
									(t, currentIndex) => index != currentIndex
								)
							)	
						}></i>
					</li>
				))}
			
			</ul>
			<div className="leftTask"> {todos.length} left.</div>
		</div >
	);
};

export default Home;
