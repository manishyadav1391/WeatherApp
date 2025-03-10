import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import{useState} from "react";
export default function SearchBox({updateInfo}){
        
    let [city,setCity] = useState("");
    let [error,setError] = useState("false");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="633529eb3c9c62fa307a09b9c7a7fd7d";

    let getWheathetInfo = async () =>{
      try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        
        let result = {
         city: city,
         temp: jsonResponse.main.temp,
         tempMin: jsonResponse.main.temp_min,
         tempMax: jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feelsLike: jsonResponse.main.feels_Like,
         weather: jsonResponse.weather[0].description,
 
        };
        console.log(result);
        return result;
      }catch(err){
        throw err;
      }

    };

    
    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
        let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWheathetInfo();
          updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        };


    return (
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="city name" variant="outlined" required  value={city} onChange={handleChange} />
            <br /><br />
            <Button variant="contained" type="submit"> send</Button>
            </form>
        </div>
    );
}