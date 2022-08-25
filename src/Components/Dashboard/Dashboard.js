import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import classes from './Dashboard.module.css'
import { useNavigate } from "react-router-dom";

const Dashboard = ({data}) => {
  let navigate = useNavigate()

  const onlogout =()=>{
    
    navigate("/", { replace: true });
  }
  return (
     
   
    <div>
      
        <div className={classes.header}>
          <h1>Welcome</h1>
          <div className={classes.logout} onClick={onlogout}>Logout</div>
        </div>

        <UserInfo data={data && data}/>
    </div>
  )
}

export default Dashboard