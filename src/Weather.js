import React, { Component } from "react"
import './Weather.css'
import './sbuttons.min.css'

class Weather extends Component{

  constructor(props){
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
      minMax: true
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.minMax = this.minMax.bind(this);
  }

  componentDidMount(){
    if(this.props.name !== ""){
      fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.props.name+"&units=metric&APPID=YOURAPIKEYHERE")
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

  minMax(){
    this.setState({
      minMax: !this.state.minMax
    })
  }

  render(){

    var {isLoaded, items} = this.state;
    var location = this.props.name;

    if(!isLoaded){
        return(
          <p>Loading...</p>
        );
    }else{

      if(items.name !== undefined){

        location = items.name;
        var weather = items.weather[0].main;
        var tempC = items.main.temp.toFixed(0);
        var tempF = (items.main.temp * (9/5) + 32).toFixed(0);
        var tempHighC = items.main.temp_max.toFixed(0);
        var tempHighF = (items.main.temp_max * (9/5) + 32).toFixed(0);
        var tempLowC = items.main.temp_min.toFixed(0);
        var tempLowF = (items.main.temp_min * (9/5) + 32).toFixed(0);

        return(

          <div className={`${this.state.minMax ? "box" : "boxMin"}`}>

            <div className = "weather">

              <div className="locationAndMinMaxButton">

                <p className = "location">
                  {location}{'\u00A0'}
                </p>
                <a href="#" className="minMaxButton" onClick = {this.minMax}>-</a>

              </div>

              {this.state.minMax &&
                <div className="stuff">
                  <p className = "weatherDescription">
                    {weather}
                  </p>

                  <div className = "imgAndWeather">
                    <img src = {'/images/'+weather+'.png'} alt = {weather}/>
                    <div className="mainAndHighLowWeathers">
                      <h1>
                        {tempC} C° | {tempF} F°
                      </h1>
                      <p>
                        H: {tempHighC} C° | {tempHighF} F° {'\u00A0'} L: {tempLowC} C° | {tempLowF} F°
                      </p>
                    </div>
                  </div>
                </div>
              }

            </div>

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
