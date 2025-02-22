import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from './userReducer'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [role, setRole] = useState('User');
    const [status, setStatus] = useState('Active');
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({ id: users.length > 0 ? users[users.length - 1].id + 1 : 1, name, email,role,status }))
        navigate('/')
    }
    return (
        <div className="d-flex vw-100 h-100 justify-content-center align-item-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Add New User!</h3>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' placeholder='enter your name' className='form-control'
                            onChange={e => setname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="Email">Email:</label>
                        <input type="email" name='email' placeholder='enter your email' className='form-control' onChange={e => setemail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select
                            id="role"
                            className="form-select"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                             <option value=""></option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select
                            id="status"
                            className="form-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create