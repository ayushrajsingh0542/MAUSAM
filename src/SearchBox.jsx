import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_KEY= "0394aecbeb8345b925afc75c614b655a";

    let getWeatherInfo=async()=>{
        try{

            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
         //    console.log(jsonResponse);
            let result={
             city:city,
             temp:jsonResponse.main.temp,
             tempMin:jsonResponse.main.temp_min,
             tempMax:jsonResponse.main.temp_max,
             humidity:jsonResponse.main.humidity,
             feelsLike:jsonResponse.main.feels_like,
             weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;

        }catch(err)
        {
           throw err
        }
      


    }
    

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{

            event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo= await getWeatherInfo();
           updateInfo(newInfo)
        }catch(err){
            setError(true)
        }
        
    }
     return(
        <div className='searchBox'>
            
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/>
            <div className="schbtn"><Button variant="contained" type="submit" color='secondary' endIcon={<SendIcon />}>Search</Button></div>
            {error && <p style={{color:"red"}}>No Such Place Exists!</p>}

            </form>
        </div>
     )
}