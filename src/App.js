import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import ToDoItem from './model/ToDoItem';
import ToDo from './model/ToDo';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.toDo = new ToDo();

    this.state = {
      items: this.toDo.items
    };

    this.createItem = this.createItem.bind(this);

    this.changeItemState = this.changeItemState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  createItem(content, number) {

    if (content === "" || number === "") return

    let item = new ToDoItem(content, number, new Date());
    let items = this.toDo.add(item);

    this.setState({ items: items });

  }

  changeItemState(item) {
    let items = this.toDo.changeState(item);
    this.setState({ items: items });
  }



  deleteItem(item) {
    let items = this.toDo.delete(item);
    this.setState({ items: items });
  }



  render() {
    return (<div id="app-container">
      <Header ></Header>
      <Body items={this.state.items} onItemClick={this.changeItemState} onDeleteItem={this.deleteItem}></Body>
      <Footer createItem={this.createItem}></Footer>
    </div>)
  }

}

export default App;
