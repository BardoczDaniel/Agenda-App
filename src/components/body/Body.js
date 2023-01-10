import React from 'react';
import './Body.css';
import ItemsAll from '../items-all/ItemsAll';



function Body(props) {
    return (
        <div id="app-body">

            <div id="all-items" className="items-container">
                <div id="all-items-container">
                    <ItemsAll items={props.items} onItemClick={props.onItemClick} onDeleteItem={props.onDeleteItem}></ItemsAll>
                </div>
            </div>

            {/* <div id="active-items" className="items-container">
                <div id="active-items-container">
                    <span className="no-items-message">No Items</span>
                    <ItemsActive items={props.items} onItemClick={props.onItemClick} onDeleteItem={props.onDeleteItem}></ItemsActive>
                </div>
            </div>

            <div id="completed-items" className="items-container">
                <div id="completed-items-container">
                    <span className="no-items-message">No Items</span>
                    <ItemsCompleted items={props.items} onItemClick={props.onItemClick} onDeleteItem={props.onDeleteItem}></ItemsCompleted>
                </div>
            </div> */}

        </div>
    );
}

export default Body;
