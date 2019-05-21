import React, { Component } from "react"
import PropTypes from "prop-types"

export default class SidebarItem extends Component {
  static propTypes = {
    actived: PropTypes.bool,
  }

  render() {

    const {
      actived,
    } = this.props

    let classes = "menu "
    classes += actived ? "actived" : ""

    return (
      <div className={classes}>
        <div className="menu-item">Condição Inicial</div>

        <div className="sub-menu">
            <div>item</div>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </div>

      </div>
    )
  }
}
