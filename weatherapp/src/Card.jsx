import React, { useState } from 'react'
import axios from 'axios';

const Card = () => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState('');

    const getWeather = () => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=86422775301e4f9481185114242112&q=${city}&aqi=no`)
        .then(res => {
            console.log(res);
            setData(res.data);
        })
    }
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-blue-100 flex-col'>
        <div className='flex gap-3'>
            <input type='text' value={city} onChange={e => setCity(e.target.value)} placeholder='Enter Location' className='p-2 w-[240px] rounded-md'/>
            <button className='bg-blue-600 text-white p-2 rounded-md' onClick={getWeather}>Get</button>
        </div>
   {      data && <div className='bg-white w-[300px] p-3 rounded-md py-4 mt-10'>
        <div>
            <p className='font-bold text-xl'>{data.location.name}, {data.location.country}</p>
           <p className='font-light text-sm'>{data.location.localtime}</p>
        </div>

        <div className='w-full justify-center flex mt-8'>
           <img src={`${data.current.condition.icon}`} alt='weather condition' className='w-28 h-auto'/>
        </div>

        <div className=' mt-8 justify-center flex gap-5'>
        <p className='font-bold text-4xl '>{data.current.temp_c} &deg;</p>
            <p>{data.current.condition.text}</p>
        </div>

        <div className='flex w-full justify-evenly mt-8'>
            <span>
                <p className='font-bold'>Humidity</p>
                <p className='font-light flex justify-center'>{data.current.humidity}%</p>
            </span>

            <span>
                <p className='font-bold'>Wind</p>
                <p className='font-light flex justify-center'>{data.current.wind_kph}k/h</p>
            </span>

            <span>
                <p className='font-bold'>Visibility</p>
                <p className='font-light flex justify-center'>{data.current.vis_km} km</p>
            </span>
        </div>
        
      </div>
      }
    </div>
    
  )
}

export default Card