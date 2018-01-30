// Container Component
// Inventory Id
window.id = 0;
class InventoryApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }
  // Add Inventory handler
  addInventory(val){
    // Assemble data
    const inventory = {text: val, id: window.id++}
    // Update data
    this.state.data.push(inventory);
    // Update state
    this.setState({data: this.state.data});
  }
  // Handle remove
  handleRemove(id){
    // Filter all inventories except the one to be removed
    const remainder = this.state.data.filter((inventory) => {
      if(inventory.id !== id) return inventory;
    });
    // Update state with filter
    this.setState({data: remainder});
  }

  render(){
    // Render JSX
    return (
      <div>
        <Title />
        <InventoryForm addInventory={this.addInventory.bind(this)}/>
        <InventoryList 
          inventories={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}