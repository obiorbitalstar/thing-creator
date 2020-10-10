import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      things: [
        {
          id: 1,
          name: 'Potato',
          type: 'food'
        },
        {
          id: 2,
          name: 'shovel',
          type: 'tool'
        },
        {
          id: 3,
          name: 'sword',
          type: 'weapon'
        }

      ],
      defaultThing: 'Laptop'
    };
    this.addNewThing = this.addNewThing.bind(this);

  }

  render() {
    return (
      <div className='App'>
        <Header dThing={this.state.defaultThing} />
        <ThingsList things={this.state.things} thingCreated={thing => this.addNewThing(thing)} />
        <Footer text="Some copy right stuff" />
      </div>

    );

  }
  addNewThing(thing) {

    let allThings = this.state.things;
    allThings.push({ id: 15, name: thing.name, type: thing.type });
    this.setState({
      things: allThings
    })
  }


}




class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      thingType: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Thing Name
            <input type='text' placeholder='name' onChange={this.handleChangeName}></input>
          <input type='text' placeholder='type'></input>
          <input type='submit' value='Add'></input>
        </label>

      </form>

    )
  }

  handleChangeName(event) {
    console.log('text entered to text input');
    let newName = event.target.value;
    this.setState({
      name: newName
    })
  }



  handleSubmit(event) {
    event.preventDefault();
    this.props.onSnackCreate(this.state)
  }

}

function ThingsList(props) {
  return (
    <>
      <h2>Things length: {props.things.length}</h2>
      <ul>
        {props.things.map(thing => <Thing item={thing} key={thing.id} />)}
      </ul>
      <ThingForm onSnackCreate={(data) => props.thingCreated(data)} />
    </>
  );

}

function Thing(props) {
  return <li>{props.item.name}</li>
}



function Header(props) {
  return <header><h3>Default Thing:{props.dSnack}</h3></header>;

}

function Footer(props) {
  return <footer><small>{props.text}</small></footer>
}








export default App;
