
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos ,setTodos,setTodo,setIsEdit}) => {

   

 
  return (
    <div className="w-1/2 h-auto mt-5 p-8 bg-white rounded-md shadow-md">
    <h1 className="text-2xl text-center font-bold mb-6" >Lists</h1>
    <div className="max-w-screen-md mx-auto">
    <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Bio</th>
            <th className='py-2 px-4 border-b'>Action</th>
          
          </tr>
        </thead>
      {todos.map((todo:{id:number,title:string,bio:string}) => (
        <TodoItem key={todo.id} todo={todo}  setTodos={setTodos} todos ={todos} setTodo={setTodo} setIsEdit={setIsEdit}/>
      ))}

     
      </table>
      {
        !todos.length &&(
            <h2 className='text-center p-5'> Empty!</h2>
        )
      } 
      </div>
      
    </div>
  );
};

export default TodoList;
