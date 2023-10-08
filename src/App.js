import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.inputRef = createRef();
  }

  getVal() {
    console.log(this.inputRef.current.value)
    console.log(this.inputRef.current.focus())
    console.log(this.inputRef.current.style.color = "red")

  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getVal()}>Check Ref</button>
      </div>
    )
  }
}
