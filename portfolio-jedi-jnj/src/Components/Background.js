import AboutMe from "./AboutMe"
import Frase from "./Frase"
import Img from "./Img"
import Info from "./Info"
import Nome from "./Nome"
import Objetivo from "./Objetivo"

function Background(){
    return (
        <div className="background">
            <div className="left">
                <AboutMe/>
                
                <Objetivo/>
            </div>
            <div className="right">
                <Img/>
                <Nome/>
                <Info/>
                <Frase/>
            </div>
            
        </div>
    )
}

export default Background