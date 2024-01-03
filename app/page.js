"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, {title, description}])
    setTitle("")
    setDescription("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Avialable</h2>

  if(mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className='flex items-center justify-between mb-4'>
        <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <p className='text-lg font-medium'>{t.description}</p>
        </div> 
        <button className='bg-red-400 text-white px-5 py-2 rounded font-bold'
        onClick={() => deleteHandler(i)}>
          Delete
        </button>
      </li>
    })
  }

  return (
    <>
      <h1 className='bg-black text-white font-bold p-5 text-5xl text-center'>Nobody Todo List</h1>
      
      <form onSubmit={submitHandler}>
        <input type='text'
        className='text -2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter Title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}/> 

        <input type='text'
        className='text -2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter Description here'
        value={description}
        onChange={(e) => setDescription(e.target.value)}/> 

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 hover:bg-gray-900 hover:text-teal-50'>
          Add Task
        </button>
      </form>

      <hr/>

      <div className='p-8 bg-slate-200 text-center'>
        <ul>{renderTask}</ul>
      </div>
      
    </>
  )
}

export default page
