import React, { Component } from 'react';

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      newPokemon: {}
    }
    this.inputChange = this.inputChange.bind(this) // part of new request
    this.createNewPokemon = this.createNewPokemon.bind(this)// part of new request
  }

  componentDidMount(){
    // fetch(`http://35.173.179.2:3030/pokemon`)
    fetch(`http://localhost:3030/pokemon`) // part of new request when you update back end swap back to line above
      .then(res => res.json())
      .then(res => this.setState({pokemon: res}))
      .catch(err => console.log(err))
  }

  // this whole function is part of new request
  inputChange(event){ 
    let newPokemon = this.state.newPokemon
    newPokemon[event.target.name] = event.target.value
    this.setState({
      newPokemon
    })
    console.log(this.state)
  }

  // this whole function is part of new request
  createNewPokemon(){
    fetch(`http://localhost:3030/pokemon`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.newPokemon)
    })
    .then(res => res.json())
    .catch(error => console.log(error))
  }

  render(){
    return(
      <>
        <div>{this.state.pokemon ? this.state.pokemon.map(poke => <h1 key={poke.poke_id}>{poke.name}</h1> ): 'no fetch working'}</div>
        {/* The following lines are part of the new request */}
        <button onClick={this.createNewPokemon}>Create New Pokemon</button> 
        <input name="name" placeholder="name" onChange={this.inputChange}/>
        <input name="nickname" placeholder="nickname" onChange={this.inputChange}/>
        <input name="type" placeholder="type" onChange={this.inputChange}/>
        <input name="img" placeholder="img" onChange={this.inputChange}/>
      </>
    )
  }
}

export default Test;