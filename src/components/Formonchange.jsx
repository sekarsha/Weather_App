import { useState } from 'react'

function Formonchange() {

  const [user,setuser]=useState({
     Name:"sekar",
     age:26,
     genter:"Male",
     Maried:true,
     email:"sekarsha70@gmail.com"
  });


  function change(e){

    const name=e.target.name;

    const values=e.target.type==="checkbox"?e.target.checked:e.target.value;
    
    setuser({...user,[name]:values})
    
  }


  return (
    <div className='sha  d-flex justify-content-center'>

         <div>
         <table className=" mb-2">
           <tbody>
              <tr>
                <td className='p-1'>Name</td>
                <td>{user.Name}</td>
              </tr>

              <tr>
                <td  className='p-1' >Age</td>
                <td>{user.age}</td>
              </tr>

              <tr>
                <td  className='p-1' >Age</td>
                <td>{user.email}</td>
              </tr>

              <tr>
                <td className='p-1'>Gender</td>
                <td>{user.genter}</td>
              </tr>

              <tr >
                <td className='p-1'>Maried status</td>
                <td>{user.Maried?"Maried":"Not Maried"}</td>
              </tr>

           </tbody>

         </table>
      
      <form action="">
            
      <input type="text" name='Name' onChange={change} className='in'    value={user.Name} /><br />
       <input type="text" name='age' onChange={change}  className='in'     value={user.age} /><br />
       <input type="text" name='email' onChange={change}  className='in'     value={user.email} /><br />

       <input type="radio"    onChange={change}  name='genter' checked={user.genter=="Male"}  value="Male"   className=' mt-2'  />Male
       <input type="radio" onChange={change}  name='genter' checked={user.genter=="Female"}  value="Female"   className=' ms-2'   />Female <br />

       <input type="checkbox" name='Maried'  onChange={change}    checked={user.Maried} />Is Maried
       
 
      </form>

         </div>
        
      
       
    </div>
  )
}

export default Formonchange