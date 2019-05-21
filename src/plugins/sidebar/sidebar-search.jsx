import React, { Component } from "react"

export default class SidebarSearch extends Component {
  render() {
    return (
      <div>
        <div className="sidebar__search-container">
          <div className="sidebar__search">
              <div className="sidebar__search-form">
                <form className="form form--gray-inputs" >
                    <div className="form__input-wrapper form__input-wrapper--search">
                      <input type="text"  
                             className="form__input" 
                             placeholder="Search for endpoints" />
                      {/* <span className="close">
                      <span aria-hidden="true">×</span>
                      </span> */}
                    </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
