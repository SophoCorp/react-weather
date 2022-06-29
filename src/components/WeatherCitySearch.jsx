import React from 'react'

const WeatherCitySearch = ({onChange, onSubmited, value}) => {
  return (
    <form onSubmit={onSubmited}>
        <input type='text' value={value} onChange={onChange} />
        <button type="submit">Search</button>
    </form>
  )
}

export default WeatherCitySearch