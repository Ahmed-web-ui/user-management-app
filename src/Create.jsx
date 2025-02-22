import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addUser } from './userReducer'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const navigate = useNavigate()
    const users = useSelector((state)=> state.users)
    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(addUser({ id:users.length > 0 ?users[users.length - 1].id + 1 : 1,name, email}))
        navigate('/')
    }

  return (
    <div className="d-flex vw-100 h-100 justify-content-center align-item-center">
        <div className="w-50 border bg-secondary text-white p-5">
            <h3>Add New User!</h3>
            <form  onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' placeholder='enter your name' className='form-control' 
                    onChange={e=> setname(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="Email">Email:</label>
                <input type="email"  name='email' placeholder='enter your email' className='form-control' onChange={e=> setemail(e.target.value)}/> 
                </div> <br />
                <button className="btn btn-info">Submit</button>
            </form>
        </div>
    </div>
  )
} 

export default Create
