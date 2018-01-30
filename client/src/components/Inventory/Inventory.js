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

const Inventory = ({inventory, remove}) => {
    // Each Inventory
    return (
    <li onClick(remove(inventory.id))>{inventory.text}</li>);
  }
  
  const InventoryList = ({inventories, remove}) => {
    // Map through the inventorys
    const inventoryNode = inventories.map((inventory) => {
      return (<Inventory inventory={inventory} key={inventory.id} remove={remove}/>)
    });
    return (<ul>{inventoryNode}</ul>);
  }

  