import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import './PreLoader.css'


const PreLoader = () => {
 
  return (
      <div className="loading-screen">
    <Player autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_weytz1ra.json" style={{ height: '250px', width: '250px'}}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
    </div>
  );
}

export default PreLoader;