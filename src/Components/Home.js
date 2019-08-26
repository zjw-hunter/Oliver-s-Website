import React from "react"
import saxman from "../Resources/saxman.jpg"
export default class home extends React.Component{

    render(){
        return(
            <div className="page-body" style={{backgroundImage: `url(${saxman})`}}>
                <div className="page-container home-page" style={{paddingTop: "20%", paddingLeft:"none !important"}}>
                    <div className="page-text">
                        <p>Oliver Hunter</p>
                        <p>Musician // Student</p>
                    </div>
                </div>
            </div>
        );
    }
    
}