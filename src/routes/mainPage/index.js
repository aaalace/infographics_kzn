import React from "react"
import { Header } from "../../components/Header"
import { CustomMap } from "../../components/Map"
import { Panel } from "../../components/Panel"
import './style.css'

export function MainPage() {
    return(
        <div className="main-container">
            <Header/>
            <div className="main">
                <CustomMap/>
                <Panel/>
            </div>
        </div>
    )
}
