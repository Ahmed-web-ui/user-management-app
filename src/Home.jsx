import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { delUser } from './userReducer'

const Home = () => {
    const dispatch = useDispatch()
    const users = useSelector((state)=> state.users)
    const handledel = (id)=>{
      dispatch(delUser({id:id}))
    }
  return (
    <div className="container vw-100 vh-100 my-5 mx-5">
        <div><h2>Manage Your Users</h2></div>

        <Link to="/create" className='btn btn-success my-3'>Add User</Link>

        <table className='table '>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {users.map((user,index) =>(
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                        <button onClick={()=>handledel(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Home
