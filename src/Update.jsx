import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { updateUser } from './userReducer'
import { useNavigate } from 'react-router-dom'

const Update = () => {
  const users = useSelector((state)=> state.users)
  const Navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  const existuser = users.filter(f=> f.id == id)
  const {name, email}= existuser[0]
  const [uname, setuname] = useState(name)
  const [uemail, setuemail] = useState(email)
  const handleupdate = (event)=>{
    event.preventDefault()
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    Navigate('/')
  }

  return (
    <div>
      <div className="Navbar"></div>
      <div className="d-flex vw-100 h-100 justify-content-center align-item-center">
        <div className="w-50 border bg-secondary text-white p-5">
            <h3>Update User!</h3>
            <form onSubmit={handleupdate} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={uname} name='name' placeholder='enter your name' className='form-control' onChange={e=> setuname(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="Email">Email:</label>
                <input type="email" value={uemail} name='email' placeholder='enter your email' className='form-control' onChange={e=> setuemail(e.target.value)}/> 
                </div> <br />
                <button className="btn btn-info">Update</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Update
