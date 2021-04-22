import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
// import { ThemeProvider, useTheme } from "./comps/ThemeContext.tsx";
// import Particles from "react-tsparticles";
import ParticlesBg from 'particles-bg';
import MouseParticles from 'react-mouse-particles'


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [id, setId] = useState(null);


  // console.log(id);

  // const Page = () => {
  //   const { theme, setTheme } = useTheme();
  //   return (
  //     <div>
  //       <h1>{theme}</h1>
  //       <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  //         {theme === "dark" ? "Switch to light mode" : "switch to dark mode"}
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <div className="App">

      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setId={setId} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} id={id} />
      )}
    
      <ParticlesBg type="ball" bg={true} style={{  backgroundRepeat: "no-repeat", backgrounAttachment: "fixed"}} />
      <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
      
    </div>


  );
}

export default App;



// particles type :- 
// "color"
// "ball"
// "lines"
// "thick"
// "circle"
// "cobweb"
// "polygon"
// "square"
// "tadpole"
// "fountain"
// "random"
// "custom"