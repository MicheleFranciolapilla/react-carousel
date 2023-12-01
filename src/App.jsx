import TheBackgroundImage from "./components/TheBackgroundImage";
import TheHeader from "./components/TheHeader";
import TheMainSection from "./components/TheMainSection";
import TheFooter from "./components/TheFooter";

function App() 
{
  return(
    <div className="h-screen">
      <TheBackgroundImage />
      <TheHeader />
      <TheMainSection />
      <TheFooter />
    </div>
  );
}

export default App
