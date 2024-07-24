import Footer from "./components/Footer/Footer.tsx";
import MainFeed from "./components/Main/MainFeed/MainFeed.tsx";
import Techs from "./components/Technologies/Techs.tsx"
import Hr from "./components/HorizontalLine/Short/Hr.tsx";
import HrL from "./components/HorizontalLine/long/Hr.tsx";
import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Projects from "./components/Projects/Project/Projects.tsx";
import {useState} from "react";
import Brand from "./components/Brand/Brand.tsx";
import Links from "./components/Links/Links.tsx";
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";

function App() {
    const [dark, setDark] = useState("");
    let Theme;
    if (dark === "dark") {
        Theme = <MdOutlineLightMode size={33} className="text-center cursor-pointer" onClick={() => {setDark("")}}/>
    }
    else{
        Theme = <MdOutlineDarkMode size={33} className="text-center cursor-pointer" onClick={() => {setDark("dark")}}/>
    }

  return (
    <div className={dark}>
        <div className="dark:bg-gray-900 dark:text-white">
            <nav className="flex justify-between md:justify-around p-2 md:p-7 lg:p-10 md:mb-5 lg:mb-10 bg-white dark:bg-gray-900 dark:text-white" id="NavBar">
                <Brand name={"Yehya"}/>
                <div className="md:flex md:justify-between m-5">
                    <Links/>
                    <div className="flex">
                        {Theme}
                    </div>
                </div>
            </nav>
            <MainFeed/>
            <Hr/>
            <Techs/>
            <Hr/>
            <About/>
            <Hr/>
            <Contact/>
            <Hr/>
            <Projects/>
            <HrL/>
            <Footer/>
        </div>
    </div>
  )
}

export default App
