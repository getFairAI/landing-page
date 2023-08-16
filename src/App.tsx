

import Crasual from "./components/Crasual"
import Header from "./components/Header"
import ImgAnimate from "./components/ImgAnimate"
import JamboSection from "./components/JamboSection"
import ScreenShotSec from "./components/ScreenShotSec"
import Teams from "./components/Teams"
import VideoCard from "./components/VideoCard"

function App() {

  return (
    <section className="w-full min-h-screen bg-[#f4f4f6]    relative" >
      <section className="sticky top-0  ">
        <Header />
      </section>
      <JamboSection />
      <ImgAnimate />
      <VideoCard />
      <ScreenShotSec />
      <Crasual />
      <Teams />
    </section>
  )
}

export default App
