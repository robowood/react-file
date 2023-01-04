import React from 'react';
import  './ChartBar.css';

const ChartBar=(props) =>{
    return(
        <div className="Chart-bar">
            <div className="Chart-bar__inner">
                <div className="Chart-bar__fall"></div>
            </div>
            <div className="Chart-bar__label">{props.label}</div>
        </div>
    );
}
export default ChartBar;