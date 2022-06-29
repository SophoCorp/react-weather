import React, {useEffect} from 'react'

const DeatilsWeather = ({data}) => {
  if(data) {
    console.log(data);
    return (
      <div>{data.name}</div>
    )
  }
}

export default DeatilsWeather