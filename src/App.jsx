import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeatilsWeather from './components/DeatilsWeather'
import WeatherCitySearch from './components/WeatherCitySearch'


const App = () => {
    const [textSearch, setTextSearch] = useState('')
    const [cityName, setCityName] = useState('Abidjan')
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false)
    
    const API_key = '92f01e7a19c2961a79399215c8f82849'
    const baseURL =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_key}`
    useEffect(() => {
                        axios.get(baseURL).then((res) => {
                            const response = res.data;
                            setData(response)
                            setLoaded(true)
                            setError(null)
                        }).catch((err) => {
                            setError(err)
                        })
    }, [cityName])

    function handleChange(e) {
        setTextSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCityName(textSearch)
        setTextSearch('')

    }

    return (
    <div>
        <WeatherCitySearch 
            onChange={(e) => handleChange(e)}
            onSubmited={(e) => handleSubmit(e)}
            value={textSearch}
        />
        {loaded  ? 
            <DeatilsWeather data={data} error={error}/>
            : 'Loading...'
        }
    </div>
  )
}

export default App