import React, { Component } from 'react'
import PokemonList from '../pokemon/PokemonList'
import ModalTest from '../ModalTest/ModalTest'
export default class Dashboard extends Component {
  state = {
    modal: false
 }
  
 selectModal = (info) => {
   this.setState({modal: !this.state.modal}) // true/false toggle
 }
 
  render() {

    return (
      <div>
             <p onClick={ this.selectModal }
             >Open Modal</p>      
             <ModalTest 
                 displayModal={this.state.modal}
                 closeModal={this.selectModal}
             />


        <PokemonList />
      </div>
    )
  }
}
