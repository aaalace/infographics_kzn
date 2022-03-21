import React from "react"
import './style.css'

export const OpenedIcon = ({name, desc, state}) => {

    const closeOpenedIcon = () => {
        state(false)
    }

    return (
        <div className="box-main">
            <div className='openedicon-box' onClick={closeOpenedIcon}>
            </div>
            <div className='openedicon-widget'>
                <h2 className='openedicon-name'>
                    {name}
                </h2>
                <p className='openedicon-desc'>
                    {desc}
                </p>
            </div>
        </div>
    )
}