import React from 'react'
import classes from './UserInfo.module.css'

const UserInfo = ({data}) => {

    console.log(data);
  return (
   <div>
      <h1 className={classes.welcome}> <i>Welcome {data.Firstname}</i> </h1>

      <div className={classes.list}>
       <ul >
       <li>Name: <span>{data.Firstname} {data.Lastname}</span></li>
       <li>Email: <span>{data.Email}</span></li>
       <li>Mobile number:<span> {data.Mobilenumber}</span></li>
   </ul> 
</div>
   </div>
  )
}

export default UserInfo