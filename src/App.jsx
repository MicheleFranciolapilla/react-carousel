import { useState } from "react";

import TheBackgroundImage from "./components/TheBackgroundImage";
import TheHeader from "./components/TheHeader";
import TheMainSection from "./components/TheMainSection";
import TheFooter from "./components/TheFooter";
import RoundedThumb from "./components/RoundedThumb";



function App() 
{
  const [showCollection, SetShowCollection] = useState(false);

  function switchValue()
  {
    console.log("FUNZIONE INVOCATA");
    SetShowCollection( (currentValue) => currentValue = !currentValue);
  }

function SwitchCollection({showCollectionValue})
{
  const imgToShow = showCollectionValue ? "close-collection.jpg" : "open-collection.jpg";
  const TWImgPos  = showCollectionValue ? "right-3 top-3" : "left-10 top-10";
  return (
    <img src={`./icons/${imgToShow}`} className="relative z-10" onClick={() => switchValue()} />
    // <RoundedThumb filePath={`./icons/${imgToShow}`} styleClasses={`absolute aspect-square rounded-full p-8 cursor-pointer ${TWImgPos}`} onClick={clicked} />
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
