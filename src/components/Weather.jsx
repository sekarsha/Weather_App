import { useEffect, useState } from 'react'
import sun from "../assets/sun.jpeg"
import shown from "../assets/shown1.webp";
import wind from "../assets/wind.png";
import air from "../assets/air.png";



const Weatherdetails = ({ icon, temp, city, country, lat, log, win, ai }) => {

  return (

    <div className=' p-2'>
      <div className=' d-flex justify-content-center'> <img src={icon} alt="image" width={200} /></div>

      <div className='  mt-3 text-center'> <h6 className='  text-warning fs-1 fw-bold font-monospace text-uppercase'>Temp {temp} °C </h6></div>
      <div className='  text-center'><h6 className=' fs-3 fw-bold font-monospace text-uppercase'>{city}</h6></div>
      <div className='  text-center'><h6 className=' fs-4 fw-bold font-monospace text-uppercase'>{country}</h6></div>
      <div className=' d-flex justify-content-center gap-2'>
        <h6 className=' fw-bold'> {lat}</h6>
        <h6 className=' fw-bold'>{log}</h6>
      </div>

      <div className=' d-flex    justify-content-between  mt-3 p-2
      '>

        <div>
          <img src={wind} alt="" width={50} />
          <div className=' d-flex fw-bold gap-2'>
            <div>{win}%</div>
            <div>Humunity</div>
          </div>
        </div>

        <div>
          <img src={air} alt="" width={38} />
          <div className=' d-flex fw-bold gap-2'>
            <div>{ai} km/hr </div>
            <div>air</div>
          </div>
        </div>

      </div>




    </div>
  )

}





const Weather = () => {

  let api_key="2c5b5db56c19161685e048885e05c452"
  const[text,setext]=useState("madurai")
  const [icon, seticon] = useState(shown)
  const [temp, settemp] = useState(0)
  const [city, setcity] = useState("Madurai")
  const [country, setcountry] = useState("India")
  const [lat, setlat] = useState("India")
  const [log, setlog] = useState("India")
  const [wind, setwind] = useState()
  const [air, setair] = useState()
  const [cityNotFound,setcityNotFound]=useState(false)
  const [loading,setloading]=useState(false);



  const search=async () =>{
    setloading(true)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`
  
    try{
      let res=await fetch(url);
      let data=await res.json()
      if(data.cod==="404"){
        console.error("City Not Found")
        setcityNotFound(true)
        setloading(false)
        alert("City Not Found")
        return;
      }
       
      setwind(data.main.humidity)
      setair(data.wind.speed)
      settemp(data.main.temp)
      setcity(data.name)
      setcountry(data.sys.country)
      setlat(data.coord.lat)
      setlog(data.coord.lon)
     
      
      

    }
    catch(error) {console.error("Fetch api Error",error.message);}
    finally{
      setloading(false)
    }
    
  }

  
  const  handlecity= (e)=>{

    setext(e.target.value);
  }
  
   const handledown=(e)=>{
     
    if(e.key=="Enter"){
      search();
    }

  }

  useEffect(function(){
    search();
  },[] )




  return (
    <div className=' container-fluid bg-primary vh-100 '>

      <div className='d-flex justify-content-center align-items-center vh-100'>

        <div className='weather  bg-white p-4 rounded-3 '>

          <div className=' d-flex align-items-center border border-1  border-primary p-1 rounded-2'>
            <input value={text}  onKeyDown={handledown}   type="text" onChange={handlecity}     className=' w-100   border border-0 no-outline ' /> <i className="bi bi-search" onClick={()=>search()}  ></i>
          </div>

          <Weatherdetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} ai={air} win={wind}  />

          
          <p className='text-center'  style={{ fontSize: '10px' }}  >Desigend By <a href="https://github.com/sekarsha">@sekar</a></p>
        </div>

      </div>





    </div>
  )
}

export default Weather