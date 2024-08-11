import React from 'react'
import CustomButton from '../components/CustomButton';
import { useSnapshot } from 'valtio';
import logoState from '../state/logoState';

const LogoSelector = () => {
    const state=useSnapshot(logoState);
    var imageArr=['admin-settings.svg','aircraft-take-off.svg','analyse.svg','apps-plus.svg','archive-square.svg','arxiv.svg','baseline-all-inclusive.svg','battery.svg','big-data.svg','dblp.svg','drone.svg','figshare.svg','gandi-v2-svgrepo-com.svg','icons8-canvas-student.svg','ideas-repec.svg','merge-outlined.svg','network-policy.svg','neural-network.svg','obp.svg','open-access.svg','performance.svg','turf-triangle-grid.svg','ui-earth-east.svg','beer.svg'];
  return (
    <div className='container mx-auto my-auto'>
        <div className='container mx-auto my-auto grid grid-cols-4 gap-y-9'>
            {imageArr.map(imageLinks =><button className='w-32 hover:bg-sky-300 focus:bg-sky-500 container mx-auto rounded-full' onClick={function(){
                logoState.logoImg=imageLinks
            }}><img src={imageLinks} className='container mx-auto my-auto aspect-square object-contain mix-blend-color-burn'></img></button>)}
        </div>

      <CustomButton text="Select Logo" handleClick={function(){
            logoState.homePage=true;
            logoState.uploadPage=false;
      }}></CustomButton>
    </div>
  )
}

export default LogoSelector
