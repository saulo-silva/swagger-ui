import React from "react"
import PropTypes from "prop-types"

const divLeft = {
  float: 'left',
  width: '25%',
};

const divRight = {
  float: 'right',
  width: '75%'
};

const center = {
  textAlign: 'center',
  fontSize: '21px',
  fontWeight: 'bold'
}
// Create the layout component
export default class OperationsLayout extends React.Component {
  
  static propTypes = {
    specSelectors: PropTypes.object.isRequired,
    // specActions: PropTypes.object.isRequired,
    // oas3Actions: PropTypes.object.isRequired,
    // getComponent: PropTypes.func.isRequired,
    // layoutSelectors: PropTypes.object.isRequired,
    // layoutActions: PropTypes.object.isRequired,
    // authActions: PropTypes.object.isRequired,
    // authSelectors: PropTypes.object.isRequired,
    // getConfigs: PropTypes.func.isRequired,
    // fn: PropTypes.func.isRequired
  };

  render() {
    const {
      getComponent,
      specSelectors
    } = this.props

    // let taggedOps = specSelectors.taggedOperations()
    let Sidebar = getComponent("Sidebar", true)
    const BaseLayout = getComponent("BaseLayout", true)
    

    return (
      <div>
        <div style={divLeft}>
          <p style={center}>LOGO AQUI</p>
          <Sidebar />
        </div>
        <div style={divRight}>
          <BaseLayout />
        </div>
      </div>
    )
  }
}

