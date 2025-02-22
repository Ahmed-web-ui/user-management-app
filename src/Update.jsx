import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { updateUser, updateRole, updateStatus } from './userReducer'
import { useNavigate } from 'react-router-dom'

const Update = () => {
  const Navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()

  const users = useSelector((state) => state.users)
  const user = users.find((user) => user.id === parseInt(id));

  const existuser = users.filter(f => f.id == id)

  const { name, email } = existuser[0]
  const [uname, setuname] = useState(name)
  const [uemail, setuemail] = useState(email)
  const [role, setRole] = useState(user.role);
  const [status, setStatus] = useState(user.status);
  const handleupdate = (event) => {
    event.preventDefault()
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail,
    }))
    dispatch(updateRole({ id: user.id, role }));
    dispatch(updateStatus({ id: user.id, status }));

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
              <input type="text" value={uname} name='name' placeholder='enter your name' className='form-control' onChange={e => setuname(e.target.value)} />
            </div>
            <div>
              <label htmlFor="Email">Email:</label>
              <input type="email" value={uemail} name='email' placeholder='enter your email' className='form-control' onChange={e => setuemail(e.target.value)} />
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
                <option value="user">User</option>
                <option value="admin">Admin</option>
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
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <br />
            <button className="btn btn-info">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update
