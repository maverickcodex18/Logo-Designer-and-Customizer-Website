import React from 'react'
import { useSnapshot } from 'valtio'
import logoState from '../state/logoState'
import CustomButton from '../components/CustomButton';
import ColorPickerAPI from '../components/ColorPickerAPI';
import Slider from '../components/Slider';


const Home = () => {
  const state = useSnapshot(logoState);

  const handleColorChange = (newColor) => {
    logoState.bgColor = newColor;
    console.log("state: " +state.gradientType);
  };

  return (
    <div className={`p-0 grid grid-cols-2`}>
      <div className='SETTINGS grid grid-cols-1 '>
        <div className='LOGO grid grid-cols-1'>
          <CustomButton text="Choose Logo" handleClick={function(){
            logoState.homePage=false;
            logoState.uploadPage=false;
          }}></CustomButton>
          <CustomButton text="Upload Logo" handleClick={function(){
            logoState.homePage=false;
            logoState.uploadPage=true;
          }}></CustomButton>
        </div>
        <ColorPickerAPI className='h-8' onColorChange={(newColor) => handleColorChange(newColor)}></ColorPickerAPI>
        <Slider text="Image Size" minValue="10" maxValue="100" handleSizeChange={function(event){
          logoState.logoSize=String(event.target.value)+'%';
          console.log(event.target.value);
        }}></Slider>
        <Slider text="Background Roundness" minValue="0" maxValue="100" handleSizeChange={function(event){
          logoState.bgRound=String(event.target.value)+'%';
          console.log("Roundness:"+event.target.value);
        }}></Slider>

      </div>
      <div className='container mx-auto my-auto h-[80vh] flex justify-center items-center' style={state.gradientType===`radial-gradient` || state.gradientType=== 'linear-gradient'?{backgroundImage:state.bgColor, borderRadius:state.bgRound}:{backgroundColor:state.bgColor, borderRadius:state.bgRound}} ><img src={state.logoImg} className='container mx-auto my-auto aspect-square object-contain mix-blend-color-burn ' style={{width:state.logoSize}}></img></div>
    </div>
  )
}

export default Home
