import TheBackgroundImage from "./components/TheBackgroundImage";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

function App() 
{
  return(
    <div id="theMainBlock" className="h-screen">
      <TheBackgroundImage />
      <TheHeader />
      <TheFooter />
    </div>
  );
}

export default App
