import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit=()=>{

  }

  const handleDelete=()=>{

  }

  const handleAdd=()=>{
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
   <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
    <div className='addTodo my-5'>
      <h2 className="text-lg font-bold">Add a Todo</h2>
      <input type="text" onChange={handleChange} value={todo} className='w-1/2' />
      <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-md cursor-pointer m-6'>Add</button>
    </div>
      <h2 className='text-lg font-bold'>TODO LIST</h2>
      <div className="todos">
        {todos.map(item=>{

       
         return <div key={todo} className="todo flex w-1/3 justify-between my-3">
          <input type="checkbox" vlaue={todo.isCompleted} name="" id="" />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <div className="buttons">
            <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-md cursor-pointer mx-1'>Edit</button>
            <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-md cursor-pointer mx-1'>Delete</button>
          </div>
        </div>
         })}
      </div>
   </div>
    </>
  )
}

export default App
