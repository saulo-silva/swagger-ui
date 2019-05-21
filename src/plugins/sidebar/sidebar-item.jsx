import React, { Component } from "react"
import PropTypes from "prop-types"

export default class SidebarItem extends Component {
  static propTypes = {
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    tag: PropTypes.string.isRequired,
    children: PropTypes.element,
    actived: PropTypes.bool,
    getConfigs: PropTypes.func.isRequired,
  }

  render() {

    const {
      tag,
      children,
      layoutSelectors,
      layoutActions,
      getConfigs
    } = this.props

    let {
      docExpansion,
    } = getConfigs()

    let isShownKey = ["operations-tag", tag]
    let showTag = layoutSelectors.isShown(isShownKey, docExpansion === "full" || docExpansion === "list")

    return (
      <div className={showTag ? "sidebar-menu is-open" : "sidebar-menu"}>
        <div className="menu-item"
             onClick={() => layoutActions.show(isShownKey, !showTag)}>

             {tag}
             
        </div>

        <div className="sub-menu">
          {children}
        </div>
      </div>
    )
  }
}
