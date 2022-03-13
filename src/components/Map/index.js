import React, { useState } from "react"
import './style.css'
import { useSelector } from "react-redux"
import { OpenedIcon } from "../OpenedIcon"

export function CustomMap() {
    const month = useSelector(state => state.month)
    const [objects, setObjects] = useState([])
    const [currentMonth, setCurrentMonth] = useState(0)

    const [openedIconState, setOpenedIconState] = useState(false)
    const [openedIconInfo, setOpenedIconInfo] = useState('')

    if(month !== currentMonth){
        console.log(month, currentMonth)
        console.log(objects)
        setCurrentMonth(month)
        if(month == 1){
            setObjects(['kremlin'])
        }
        if(month == 2){
            setObjects(['kul_sharif'])
        }
        if(month == 3){
            setObjects(['tna'])
        }
    }

    const openIcon = (key) => {
        setOpenedIconState(true)
        setOpenedIconInfo(key)
    }

    return(
        <div className="map-container">
            <img className="map"></img>
            {openedIconState ? <OpenedIcon info={openedIconInfo} state={setOpenedIconState}/> : null}
            {objects.includes('kremlin') ? 
            <img onClick={() => openIcon('kremlin')} className="icon" style={{left: '640px', top: '480px'}} src="./static/kremlin.png"></img>:
            null}
            {objects.includes('kul_sharif') ? 
            <img onClick={() => openIcon('kul_sharif')} className="icon" style={{left: '650px', top: '490px'}} src="./static/kul_sharif.jpg"></img>:
            null}
            {objects.includes('tna') ? 
            <img onClick={() => openIcon('tna')} className="icon" style={{left: '660px', top: '420px'}} src="./static/tna.jpg"></img>:
            null}

        </div>
    )
}
