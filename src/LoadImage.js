import React from 'react'

const LoadImage = (props) => {
  console.log(props)
  return <img alt='test' src={props.imgPath} />
}

export default LoadImage
