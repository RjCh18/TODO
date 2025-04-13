import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished,setshowFinished] = useState(true)

  useEffect(()=>{
    let todoString= localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  },[])
  

  const saveToLS=(params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished =(e) => {
    setshowFinished(!showFinished)
  }
  
  

  const handleEdit=(e,id)=>{
    let t =todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete=(e,id)=>{

    let index = todos.findIndex(item=>{
      return item.id===id
    })
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd=()=>{
    setTodos([...todos, {id:uuidv4(),todo, isCompleted: false}])
    setTodo("")
    saveToLS()
  }

  const handleCheckbox=(e)=>{
    let id=e.target.name
    let index = todos.findIndex(item=>{
      return item.id===id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
   <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh] md:w-1/2">
   <h1 className='text-2xl font-bold text-center'>Todo Manager - Manage your Todos at one place</h1>
    <div className='addTodo my-3'>
      <h2 className="text-lg font-bold">Add a Todo</h2>
      <div className="flex mt-2">

      <input type="text" onChange={handleChange} value={todo} className='w-full rounded-lg px-3 py-1 bg-white focus:outline-none' />
      <button onClick={handleAdd} disabled={todo.length<3} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-sm font-bold disabled:bg-violet-400 text-white rounded-md cursor-pointer mx-3 '>Save</button>
      </div>
    </div>
    <input type="checkbox" className='my-4' onChange={toggleFinished} checked={showFinished} id="" /> Show Finished 
      <h2 className='text-lg font-bold'>TODO LIST</h2>
      <div className="todos">
        {todos.length===0 && <div className="m-5 text-lg">No Todos</div>}

        {todos.map(item=>{
         return(showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-3">
          <div className='flex gap-5'>
          <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
          <div className="buttons">
            <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-md cursor-pointer mx-1'>Edit</button>
            <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-900 p-2 py-1 text-sm font-bold text-white rounded-md cursor-pointer mx-1'>Delete</button>
          </div>
        </div>
         })}
      </div>
   </div>
    </>
  )
}

export default App
