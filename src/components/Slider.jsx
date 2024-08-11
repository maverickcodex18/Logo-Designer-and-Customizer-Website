import React from 'react'
import { useSnapshot } from 'valtio'
import logoState from '../state/logoState'

const Slider = (props) => {
  return (
    <div>
      <h1 className='font-bold'>{props.text}</h1>
      <input type='range' onChange={props.handleSizeChange} min={props.minValue} max={props.maxValue}></input>

    </div>
  )
}

export default Slider
