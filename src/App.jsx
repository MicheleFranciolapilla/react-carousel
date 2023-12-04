import { useState } from "react";

import style from "./assets/style/modules/SwitchCollectionStyle.module.css";

import TheBackgroundImage from "./components/TheBackgroundImage";
import TheHeader from "./components/TheHeader";
import TheMainSection from "./components/TheMainSection";
import TheFooter from "./components/TheFooter";

function App() 
{
  const [showCollection, SetShowCollection] = useState(false);

  function switchValue()
  {
    console.log("GOING TO SWITCH")
    SetShowCollection( (currentValue) => currentValue = !currentValue);
  }

function SwitchCollection({showCollectionValue})
{
  const svgToShow = showCollectionValue ? "close-collection.svg" : "open-collection.svg";
  const TWImgPos  = showCollectionValue ? "border-4 right-3 top-24 w-10 hover:w-14" : "border-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 hover:w-52";
  return (
    <div className={`${TWImgPos} ${style.imgContainer}`}>
        <img src={`./icons/${svgToShow}`} className={`w-[75%]`} onClick={() => switchValue()} />
    </div>
  );
}

  return(
    <div className="h-screen relative">
      <TheBackgroundImage showCollectionValue={showCollection} />
      <TheHeader />
      { showCollection && <TheMainSection /> }
      <SwitchCollection showCollectionValue={showCollection} />
      <TheFooter />
    </div>
  );
}

export default App
