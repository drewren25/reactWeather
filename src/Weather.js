import React, { Component } from "react"
import './Weather.css'
import './sbuttons.min.css'

class Weather extends Component{

  constructor(props){
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
      min: false,
      max: false,
      seeMore: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.minMax = this.minMax.bind(this);
    this.seeMore = this.seeMore.bind(this);
  }

  componentDidMount(){
    if(this.props.name !== ""){
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.props.name+"&units=metric&APPID=YOURAPIKEYHERE")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
    }else{
     this.setState({
       isLoaded: true
     })
    }
  }

  minMax(){  //alternates btwn minimized and maximized box after initial display
    this.setState({
      min: !this.state.min,
      max: true   //needed so that boxMax isn't applied as soon as a box appears
    })
  }

  seeMore(){  //alternates display of see more
    this.setState({
      seeMore: !this.state.seeMore
    })
  }

  determineWindDir(dir){
    if(dir==0 || dir==360){return "E";}
    else if(dir==90){return "N";}
    else if(dir==180){return "W";}
    else if(dir==270){return "S";}
    else if(dir>0 &&  dir<90){return "NE";}
    else if(dir>90 && dir<180){return "NW";}
    else if(dir>180 &&  dir<270){return "SW";}
    else if(dir>270 && dir<360){return "SE";}
  }

  render(){

    var {isLoaded, items} = this.state;

    if(!isLoaded){
        return(
          <p>Loading...</p>
        );
    }else{

      if(items.name !== undefined){

        var location = items.name;
        var weather = items.weather[0].main;
        var tempC = items.main.temp.toFixed(0);
        var tempF = (items.main.temp * (9/5) + 32).toFixed(0);
        var tempHighC = items.main.temp_max.toFixed(0);
        var tempHighF = (items.main.temp_max * (9/5) + 32).toFixed(0);
        var tempLowC = items.main.temp_min.toFixed(0);
        var tempLowF = (items.main.temp_min * (9/5) + 32).toFixed(0);
        var windSpeedMeters = items.wind.speed;
        var windSpeedMiles = (items.wind.speed * 2.237).toFixed(2);
        var windDir = items.wind.deg;
        var windDirNSEW = this.determineWindDir(items.wind.deg);
        var humidity = items.main.humidity;
        var clouds = items.clouds.all;
        var visibility = items.visibility;
        var visbilityMiles = (items.visibility/1609).toFixed(2);
        var visibilityAsAString = visibility+"m";
        if(visibility >= 900){  //changes units to km if visibility >= 900 meters
          visibility /= 1000;
          visibilityAsAString = visibility+" km";
        }
        var feelsLikeC = items.main.feels_like.toFixed(0);
        var feelsLikeF = (items.main.feels_like * (9/5) + 32).toFixed(0);

/*
        var sunriseUnix = items.sys.sunrise;
        var sunsetUnix = items.sys.sunset;
        var riseTime = new Date(sunriseUnix * 1000 +items.timezone);
        var setTime = new Date(sunsetUnix * 1000 +items.timezone);
        var riseHours = riseTime.getHours();
        var setHours = setTime.getHours();
        var riseMin = "0" + riseTime.getMinutes();
        var setMin = "0" + setTime.getMinutes();
        var sunrise = riseHours + ':' + riseMin.substr(-2);
        var sunset = setHours + ':' + setMin.substr(-2);
*/

        return(

          <div className="wholeThing">

            <div className = {`${this.state.min ? "boxMin" : "box"} ${this.state.max ? "boxMax" : ""}`}>

              <div className = "weather">

                <div className = "locationAndMinMaxButton">

                  <p className = "location">
                    {location}{'\u00A0'}
                  </p>
                  <a href = "/#" className="minMaxButton" onClick = {this.minMax}>-/+</a>

                </div>

                <p className = "weatherDescription">
                  {weather}
                </p>

                {!this.state.min &&
                  <div className = {`${this.state.max ? "imgAndWeather imgandWeatherMax" : "imgAndWeather"}`}>
                    <img src = {'/images/'+weather+'.png'} alt = {weather}/>
                    <div className = "weatherValues">
                      <h1>
                        {tempC} C° | {tempF} F°
                      </h1>

                      <div className="highLowAndFeelsLike">
                        <p>
                          H: {tempHighC} C° | {tempHighF} F° {'\u00A0'} L: {tempLowC} C° | {tempLowF} F°
                        </p>
                        <p>
                          Feels Like: {feelsLikeC} C° | {feelsLikeF} F°
                        </p>
                      </div>

                      <a href = "/#" className="seeMore" onClick = {this.seeMore}>See more &darr;</a>
                    </div>
                  </div>
                }

              </div>

            </div>

            {this.state.seeMore && !this.state.min &&  //displays if seeMore is clicked and box isn't minimized
              <div className="box seeMoreBox">
                <div className = {`${this.state.seeMore ? "moreInfo" : "lessInfo"}`}>
                  <ul>
                    <li>Wind speed: {windSpeedMeters} m/s | {windSpeedMiles} m/h</li>
                    <li>Wind direction: {windDirNSEW}, {windDir}°</li>
                  </ul>
                  <ul>
                    <li>Humidity: {humidity}%</li>
                  </ul>
                  <ul>
                    <li>Clouds: {clouds}%</li>
                    <li>Visibility: {visibilityAsAString} | {visbilityMiles} miles</li>
                  </ul>
                </div>
              </div>
            }
          </div>

        );

      }else if(items.name === undefined){
        return (
          <p>
            It seems we don't have information for this location.
            This can be caused either because this is not a valid location or
            we don't have it in our systems. Please remember to check for correct
            spelling. Valid locations include: a city(e.g: San Francisco),
            state/province(e.g: California), country(e.g: United States),
            continent(e.g: North America), or Earth/Globe.
          </p>
        );
      }

    }
  }
}

export default Weather;
