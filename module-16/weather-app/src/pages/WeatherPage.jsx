


import React, { useEffect, useState } from 'react'
import axios from 'axios';

const WeatherPage = () => {

//state 
  const [WeatherData,SetWeather] = useState([]);
  const [City,SetCity] = useState("germany");



  //useEffect
  useEffect(()=>{
    getWeatherData();
},[]);



  const getWeatherData= async ()=>{

    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=4b85e5a6e59c4bbf98025b8916c190cb`);
    


    let weatherData = res.data;
    SetWeather(weatherData);
  }


  console.log(WeatherData);




  return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center' style={{marginTop:'100px'}}>

          <div className="card" style={{width: "18rem"}}>
            
            <div className="card-body">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your City Name</label>
                <input onChange={(e)=>{
                  SetCity(e.target.value)
                }} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your City"/>
              </div>

              <p className="card-text"></p>
              <button type="button" className="btn btn-outline-dark" onClick={()=>{
                getWeatherData()
              }}>SUBMIT</button>
            </div>
        </div>

          </div>

        </div>


      {
      WeatherData && 
      <div className='row'>
      <div className='col-12 d-flex justify-content-center' style={{marginTop:'100px'}}>

      <div className="card" style={{width: "18rem"}}>
      <h3 style={{margin:"auto"}}>Weather of {WeatherData['name']}</h3>
        <div className="card-body">

        <table className='table table-striped'>

          <tbody>
            <tr>
              <td>temperature</td>
              <td>{WeatherData.main.temp}  F</td>
            </tr>
            <tr>
                <td>pressure</td>
                <td> {WeatherData.main.pressure}Pascal</td>
            </tr>

            <tr>
              <td> humidity </td>
              <td>{WeatherData.main.humidity}</td>
            </tr>

            <tr>
              <td>feels like</td>
              <td>{WeatherData.main.feels_like}F</td>
            </tr>
          </tbody>

        </table>


        </div>
    </div>

      </div>

    </div>
      }




      </div>
  )
}

export default WeatherPage;