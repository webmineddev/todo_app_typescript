import React, { useState } from 'react';

import TodoForm from './Component/TodoForm';
// import './App.css'
import TodoList from './Component/TodoList';

type Todos={
  id?:number;
  title:string;
  bio:string
}

type Todo={
  id?:number
  title:string;
  bio:string
}
function App() {

  const [todos, setTodos] = useState<Todos[]>([]);
  const [todo, setTodo] = useState<Todo>({title:"",bio:""});
  const [isEdit,setIsEdit]=useState<boolean>(false)




  console.log(todos)

  const handleAddTodo = (newTodo:{title:string,bio:string}) => {
    setTodos([...todos,{id:todos.length+1,title:newTodo.title,bio:newTodo.bio}])
  };
  const handleUpdateTodo = ()=>{
     const {id}=todo
     let index=todos.findIndex((e,i)=>e.id===id)
     todos[index]={title:todo.title,bio:todo.bio}
     setTodos(todos)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <TodoForm onAddTodo={handleAddTodo} setTodo={setTodo} todo={todo} isEdit={isEdit} setIsEdit={setIsEdit} handleUpdateTodo={handleUpdateTodo}/>
        <TodoList todos={todos} setTodos={setTodos} setTodo={setTodo} setIsEdit={setIsEdit} />
      </div>
 
  );
}

export default App
