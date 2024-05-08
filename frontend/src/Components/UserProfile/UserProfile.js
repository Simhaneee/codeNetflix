import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const UserProfile = () => {

    const userDetails=JSON.parse(localStorage.getItem('userInfo'))
    const navigate=useNavigate()
  return (
    <div>
        <div className='bg-primay my-5'>
            User Details Update
        </div>
        <div>
            {userDetails.email}
        </div>
        <Button onClick={()=>{
            navigate('/userDashboard')
        }}>
            Back to Dashboard
        </Button>
    </div>
  )
}

export default UserProfile