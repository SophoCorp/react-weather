import React, {useEffect} from 'react'

const DeatilsWeather = ({data, error}) => {
  if(data) {
    return (
      <div>
        {error ? <span>enter a correct city</span> : ''}
        <h3>City : {data.name}</h3>
        <p>
          <em>Temp : </em><strong>{Math.round(data.main.temp)}°</strong>
        </p>
      </div>
    )
  }
}

export default DeatilsWeather