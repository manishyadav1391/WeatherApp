import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = "https://th.bing.com/th/id/OIP.718MVOpH5kFDvGsLQ7nnmwHaE_?w=262&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7";
    let HOT_URL = "https://th.bing.com/th/id/R.ebadc44231bd8bd99735cd115014615b?rik=Wk96mFZAv%2bQGoA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1080582%2fimages%2fo-DC-WEATHER-HEAT-facebook.jpg&ehk=SjzbU%2fnxCDGUeuvusKispiYXkMUF%2bK0xIIaYDOhaZcU%3d&risl=&pid=ImgRaw&r=0";
    let COLD_URL = "https://th.bing.com/th/id/OIP.onVPev7Yp7ZnMVoRXdPzyAHaEo?rs=1&pid=ImgDetMain";
    let RAIN_URL = "https://th.bing.com/th/id/OIP.5Yx3sdRkYX-NPreSIxJiPQHaE8?w=238&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL
                            : info.temp > 15
                            ? HOT_URL
                            : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80
                                ? <ThunderstormIcon />
                                : info.temp > 15
                                ? <WbSunnyIcon />
                                : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min temp = {info.tempMin}&deg;c</p>
                            <p>Max temp = {info.tempMax}&deg;c</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
