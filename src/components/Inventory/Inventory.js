import React from 'react';
import ReactDOM from 'react-dom';

const InventoryForm = ({addInventory}) => {
    // Input Tracker
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button> onClick={() => {
                addInventory(input.value);
                input.value = '';
            }}>
            +
            </button>
        </div>
    );
};