import React from "react"
import './style.css'

export const OpenedIcon = ({info, state}) => {

    const closeOpenedIcon = () => {
        state(false)
    }

    return (
        <div className="box-main">
            <div className='openedicon-box' onClick={closeOpenedIcon}>
            </div>
            <div className='openedicon-widget'>
                <p className='openedicon-text'>
                    {info}
                </p>
            </div>
        </div>
    )
}