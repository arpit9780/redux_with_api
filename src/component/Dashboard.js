import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem("user"))
  console.log(5555,data)
 
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/")
  }
  useEffect(()=>{
    console.log("caaallllllllll use")
  })
  return (
    <>
   
    <div className="card text-center">
  <div className="card-header">
    Profile
  </div>
  <div className="card-body">
    <h5 className="card-title">{data.user.id}</h5>
    <p className="card-text">{data.user.email}</p>
    <p className="card-text">{data.user.created_at}</p>
    <a href="#" className="btn btn-primary" onClick={logout}>logout</a>
  </div>
</div>
    </>
  )
}

export default Dashboard