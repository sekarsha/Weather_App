import { useState } from "react"

const New = () => {
 
  const[user,setuser]=useState({name:"sekar",age:26})


  function changename(e){


    setuser((olduser)=>{

      return{...olduser,name:e.target.value}
    })
    
   
  }
  
function changeage(e){


  setuser((olduser)=>{

    return{...olduser,age:e.target.value}
  })
}


  return (
    
   <div>
      <h2>{user.name} {user.age} </h2>
      <form action="">

        <input type="text" onChange={changename} value={user.name} />
        <input type="text" onChange={changeage} value={user.age} />
      </form>

   </div>

  )
}




export default New