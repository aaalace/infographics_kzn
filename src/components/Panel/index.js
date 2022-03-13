import React from "react"
import './style.css'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { setMonthRedux } from "../../store/month/actions";

export function Panel() {
    const [openedMonth, setOpenedMonth] = useState(0)
    const dispatch = useDispatch()

    const openMonth = (num) => {
        setOpenedMonth(num)
        dispatch(setMonthRedux(num))
    } 

    return(
        <div className="panel-container">
           <div className="list">
                <div onClick={() => openMonth(1)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Январь</a>
                        {openedMonth === 1 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
                <div onClick={() => openMonth(2)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Февраль</a>
                        {openedMonth === 2 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
                <div onClick={() => openMonth(3)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Март</a>
                        {openedMonth === 3 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
                <div onClick={() => openMonth(4)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Апрель</a>
                        {openedMonth === 4 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                    <div className="item-icon"></div>
                </div>
                <div onClick={() => openMonth(5)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Май</a>
                        {openedMonth === 5 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
                <div onClick={() => openMonth(6)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Июнь</a>
                        {openedMonth === 6 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
                <div onClick={() => openMonth(7)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Июль</a>
                        {openedMonth === 7 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                    <div className="item-icon"></div>
                </div>
                <div onClick={() => openMonth(8)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Август</a>
                        {openedMonth === 8 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
                <div onClick={() => openMonth(9)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Сентябрь</a>
                        {openedMonth === 9 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
                <div onClick={() => openMonth(10)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Октябрь</a>
                        {openedMonth === 10 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                    <div className="item-icon"></div>
                </div>
                <div onClick={() => openMonth(11)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Ноябрь</a>
                        {openedMonth === 11 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
                <div onClick={() => openMonth(12)} className="item">
                    <div className="item-header">
                        <a style={{cursor: 'pointer'}}>Декабрь</a>
                        {openedMonth === 12 ? <div className="item-icon"><i className="fa fa-check" aria-hidden="true"></i></div>
                        : null}
                    </div>
                </div>
           </div>
        </div>
    )
}
