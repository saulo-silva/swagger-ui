import React from "react"
import PropTypes from "prop-types"

// Create the layout component
export default class XtrategieLayout extends React.Component {

  static propTypes = {
    getComponent: PropTypes.func.isRequired
  }

  render() {
    const {
      getComponent
    } = this.props

    const Sidebar = getComponent("Sidebar", true)
    const Apikey = getComponent("Apikey", true)
    // const Operations = getComponent("operations", true)
    const BaseLayout = getComponent("BaseLayout", true)    

    return (
      <div>
        <div id="swagger_sidebar">
          <h1>API Reference</h1>
          <Sidebar />
        </div>
        <div id="resources_container">
          <h1>Api Reference</h1>
          <Apikey />

          <BaseLayout />
        </div>
      </div>
    )
  }
}
