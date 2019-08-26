import React from "react"
import greensax from "../Resources/greensax.png"
import { bio1, bio2 } from "../Resources/bio"
export default class About extends React.Component{

    render(){
        return(<div className={"page-body contain"}style={{backgroundImage: `url(${greensax})`}}>
            <div className="about-container">
                <div className="about-text">
                    {bio1}
                </div>
                <div className="about-text">
                    {bio2}
                </div>

            </div>
        </div>)
    }
    
}