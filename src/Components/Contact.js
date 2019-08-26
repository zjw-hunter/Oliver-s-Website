import React from "react"
import bluesax from "../Resources/bluesax.png"
export default class Contact extends React.Component{

    render(){
        return(<div className={"page-body"}style={{backgroundImage: `url(${bluesax})`}}>
            <div className={"about-container"}>
                <div className={"about-text"}>
                    Email: oh1390a@student.american.edu
                </div>
            </div>
        </div>)
    }
    
}