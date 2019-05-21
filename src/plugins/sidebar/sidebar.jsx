import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Sidebar extends Component {

  static propTypes = {
    getComponent: PropTypes.func.isRequired
  }

  render() {
    const {
      getComponent
    } = this.props

    const SidebarSearch = getComponent("SidebarSearch", true)
    const SidebarItem = getComponent("SidebarItem", true)

    return (
      <div>
        <SidebarSearch />
        
        <div id="resources_nav">
          <h3>Endpoits</h3>
          <SidebarItem actived />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
        </div>

      </div>
    )
  }
}
