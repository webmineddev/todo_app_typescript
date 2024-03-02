// TodoItem.js
import React from 'react';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo,setTodos,todos ,setTodo,setIsEdit}) => {
    
const handleDelete=(id:number)=>{
let deletedTodo=todos.filter(item=>item.id!==id)
setTodos(deletedTodo)

}

const handleEdit=(todo)=>{
    setTodo(todo)
    setIsEdit(true)
    window.scrollTo({
        top:0,
        behavior:"smooth"

    })

}
   

  return (
     <>
    
     
        <tbody>
          <tr>
            <td className="py-2 px-4 text-center border-b">{todo.title}</td>
            <td className="py-2 text-center px-4 border-b">{todo.bio}</td>
            <td className="py-2 text-center px-4 border-b">
               
                <FaTrash  className="text-red-500 inline-block cursor-pointer" onClick={()=>handleDelete(todo.id)} />
                
                <FaEdit  className="text-blue-500 inline-block cursor-pointer ml-10" onClick={()=>handleEdit(todo)} />
            </td>

         
          </tr>
        
        </tbody>
      

     </>
  );
};

export default TodoItem;
