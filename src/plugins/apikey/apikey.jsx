import React, { Component } from "react"

export default class Apikey extends Component {
  render() {
    return (
      <div className="api-key">
          <input type="text"  
                className="form__input"
                 />
          <button 
            type="submit"
            className="button">Save Token</button>
      </div>
        
    )
  }
}
