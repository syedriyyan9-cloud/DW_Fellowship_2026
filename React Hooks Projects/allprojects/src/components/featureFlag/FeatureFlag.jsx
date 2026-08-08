import {useState} from "react"
import dummyApiResponse from "./data"

function FeatureFlag(){

    const [accordian, setAccordian] = useState(true)
    const [profilefinder, setProfilefinder] = useState(true)
    const [modaltemplate, setModaltemplate] = useState(true)
    const [randomcolor, setRandomcolor] = useState(true)
    const [searchautocomplete, setSearchautocomplete] = useState(true)
    const [starrating, setStarrating] = useState(true)
    const [tabs, setTabs] = useState(true)
    const [tictactoe, setTictactoe] = useState(true)

    const features = ["accordian", "profilefinder", "modaltemplate", "randomcolor", "searchautocomplete", "starrating", "tabs", "tictactoe"]

    function handleClick(curItem){
        if(curItem === "accordian"){
            setAccordian(!accordian)
            dummyApiResponse.accordian = accordian
        }
        else if(curItem === "profilefinder"){
            setProfilefinder(!profilefinder)
        }
        else if(curItem === "modaltemplate"){
            setModaltemplate(!modaltemplate)
        }
        else if(curItem === "randomcolor"){
            setRandomcolor(!randomcolor)
        }
        else if(curItem === "searchautocomplete"){
            setSearchautocomplete(!searchautocomplete)
        }
        else if(curItem === "starrating"){
            setStarrating(!starrating)
        }
        else if(curItem === "tabs"){
            setTabs(!tabs)
        }
        else if(curItem === "tictactoe"){
            setTictactoe(!tictactoe)
        }
    }
    console.log(dummyApiResponse.accordian)
    return(
        <div>
            <div>
                {/* {features.map((item, index) => 
                <button key={index} onClick={() => handleClick(item)}>
                    {`${item}`}
                </button>)} */}
            </div>
        </div>
    )
}
export default FeatureFlag