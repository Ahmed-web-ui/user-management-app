import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { delUser } from './userReducer'

const Home = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const [tuser, settuser] = useState(users.length)
  useEffect(() => {
    settuser(users.length)
  }, [users])

  const [checks, setchecks] = useState(users)
  useEffect(() => {
    setchecks(users)
  }, [users])

  const handledel = (id) => {
    dispatch(delUser({ id: id }))
  }

  return (
    <div className="container vw-100 vh-100 my-5 mx-5">
      <div><h1 className='text-center'>Manage Your Users</h1></div>
      <div className=''>
      <Link to="/create" className='btn btn-success my-2'>Add User</Link>
      </div>
      <br />
        <h3 className='btn btn-dark text-white p-2 fw-bold'>Total user : {tuser}</h3>

      <table className='table '>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role} </td>
              <td className={` btn text-white p-1 my-2 ${ user.status === 'Active' ? 'bg-success' : 'bg-dark'}`}>{user.status}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                <button onClick={() => handledel(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Home
