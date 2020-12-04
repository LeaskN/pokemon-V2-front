import React, { Component } from 'react';

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    fetch(`http://35.173.179.2:3030/pokemon`)
      .then(res => res.json())
      .then(res => this.setState({pokemon: res}))
      .catch(err => console.log(err))
  }

  render(){
    console.log(this.state)
    return(
      <div>{this.state.pokemon ? this.state.pokemon.map(poke => <h1 key={poke.poke_id}>{poke.name}</h1> ): 'no fetch working'}</div>
    )
  }
}

export default Test;