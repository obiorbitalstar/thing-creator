import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      snacks: [
        {
          id: 1,
          name: 'cookies',
          type: 'sweet'
        },
        {
          id: 2,
          name: 'oranges',
          type: 'fruit'
        },
        {
          id: 3,
          name: 'chocolate',
          type: 'good'
        }

      ],
      defaultSnack: 'Falafel'
    };
    this.addNewSnack = this.addNewSnack.bind(this);

  }

  render() {
    return (
      <div className='App'>
        <Header dSnack={this.state.defaultSnack} />
        <SnackList snacks={this.state.snacks} snackCreated={snack => this.addNewSnack(snack)} />
        <Footer text="Some copy right stuff" />
      </div>

    );

  }
  addNewSnack(snack) {

    let allSnacks = this.state.snacks;
    allSnacks.push({ id: 15, name: snack.name, type: snack.type });
    this.setState({
      snacks: allSnacks
    })
  }


}




class SnackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      snackType: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Snack Name
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

function SnackList(props) {
  return (
    <>
      <h2>Snack length:{props.snacks.length}</h2>
      <ul>
        {props.snacks.map(snack => <Snack item={snack} key={snack.id} />)}
      </ul>
      <SnackForm onSnackCreate={(data) => props.snackCreated(data)} />
    </>
  );

}

function Snack(props) {
  return <li>{props.item.name}</li>
}



function Header(props) {
  return <header><h3>Default Snack:{props.dSnack}</h3></header>;

}

function Footer(props) {
  return <footer><small>{props.text}</small></footer>
}








export default App;
