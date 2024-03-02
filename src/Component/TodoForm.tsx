// TodoForm.js
import React, { useState } from 'react';


const TodoForm = ({ onAddTodo ,todo,setTodo,setIsEdit,isEdit,handleUpdateTodo}) => {
 




  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(isEdit){
        handleUpdateTodo()
        setIsEdit(false)
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
          setTodo({title:"",bio:""})
    }else{
        if(!todo.title && !todo.bio){
            alert("title and bio shouldn't be empty!")
        }else{
            onAddTodo(todo);
            setTodo({title:"",bio:""})
        }
        
    }
   

  }

  const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
   const {name}=e.target
   console.log(e.target.value,"dfdsf")
   setTodo({
    ...todo,
    [name]:e.target.value
   })
  }

  return (
   <>
    <div className="w-1/2 h-1/2 mt-5 p-8 bg-white rounded-md shadow-md">
      <h1 className="text-2xl text-center font-bold mb-6" >Todo App</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>  
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">title</label>
          <input
            placeholder='Enter title'
            type="text"
            name="title"
            value={todo.title}
            onChange={(e)=>handleChange(e)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Bio</label>
          <textarea
            name="bio"
            placeholder='Enter bio'
            value={todo.bio}
            onChange={(e)=>handleChange(e)}
            rows={4}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
       
        <button
          type="submit"
          className="w-full  bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          {isEdit?"Update":"Add"} 
        </button>
      </form>
    </div>
   </>
  );
};

export default TodoForm;
