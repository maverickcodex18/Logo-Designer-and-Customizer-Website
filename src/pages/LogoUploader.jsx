import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import { useSnapshot } from 'valtio';
import logoState from '../state/logoState';



const LogoUploader = () => {
    const [file,setFile] =useState(null);
    const state=useSnapshot(logoState);
  return (
    <div>
        {file===null && <h1>No File Uploded</h1>}
        {file!=null && <img src={URL.createObjectURL(file)} />}
        <input name='logoUploader' id='logoUploader' type='file' accept='image/*' onChange={function (event){
            setFile(event.target.files[0]);
        }}></input>
        <label id='logoUploader'>Select File From Local Storage</label>
      <CustomButton text="Upload Logo" handleClick={function(){
            logoState.logoImg=URL.createObjectURL(file);
            logoState.homePage=true;
            logoState.uploadPage=false;
      }}></CustomButton>
    </div>
  )
}

export default LogoUploader
