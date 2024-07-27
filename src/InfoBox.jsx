
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const COLD_URL="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1532530047017-dd28913dc4b1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    return(
        <div className="InfoBox">
            <h1><u>{info.city}</u> </h1>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 190,width: 350 }}
        
        image={info.humidity > 80 ? RAIN_URL : info.temp >15 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <i>"{info.weather}"  </i>{
            info.humidity > 80 ? <ThunderstormIcon /> :  info.temp >15 ? < WbSunnyIcon />:< AcUnitIcon/>}

          
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature = {info.temp} &deg;C </div>
         <div>Humidity = {info.humidity} </div>
         <p>Min temp = {info.tempMin} &deg;C</p>
         <p>Max temp = {info.tempMax} &deg;C</p>
         <div> Feels Like : {info.feelsLike} &deg;C</div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    )
}