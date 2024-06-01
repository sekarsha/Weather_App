import { useEffect, useState } from 'react'

export const Quots = () => {

    const[advice,setadvice]=useState("Hai sekar");
    const[count,setcount]=useState(0)
 
  async function getadvice(){

       
      

        const res= await fetch("https://api.adviceslip.com/advice");
        
        const data=await res.json();
        setadvice(data.slip.advice);

        setcount((c)=>c+1)


    }

    useEffect( function(){

        getadvice()
    },[0])

  return (
    <div className=' bg-danger vh-100 vw-100 justify-content-center d-flex align-items-center'>

      <div className='p-2  fw-bold'>

         <h5 className=' fw-bold text-center'>{advice}</h5>
         <div className=' justify-content-center d-flex'>

         <button className=' btn  btn-sm btn-primary' onClick={getadvice}> Get Advice </button>
         
         </div>
         <p className=' text-center p-2'>You Have Read {count} Pices of Advice</p>
         
        
     </div>      

    </div>
  )
}
