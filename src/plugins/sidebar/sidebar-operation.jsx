import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { escapeDeepLinkPath } from "core/utils"
import { Iterable, List } from "immutable"
import ImPropTypes from "react-immutable-proptypes"


export default class SidebarOperation extends PureComponent {
  static propTypes = {
    specPath: ImPropTypes.list.isRequired,
    operation: PropTypes.instanceOf(Iterable).isRequired,
    summary: PropTypes.string,

    toggleShown: PropTypes.func.isRequired,
    onTryoutClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onExecute: PropTypes.func.isRequired,

    getComponent: PropTypes.func.isRequired,
    authActions: PropTypes.object,
    authSelectors: PropTypes.object
  }

  static defaultProps = {
    operation: null,
    specPath: List(),
    summary: ""
  }

  render() {
    let {
      specPath,
      toggleShown,
      getComponent,
      authActions,
      authSelectors,
    } = this.props
    let operationProps = this.props.operation

    let {
      deprecated,
      isShown,
      method,
      tag,
      operationId,
    } = operationProps.toJS()

    let isShownKey = ["operations", tag, operationId]

    const SidebarSummary = getComponent( "SidebarSummary" )


    return (
        // <div className={deprecated ? "opblock opblock-deprecated" : isShown ? `opblock opblock-${method} is-open` : `opblock opblock-${method}`} id={escapeDeepLinkPath(isShownKey.join("-"))} >
        <div className={deprecated ? "opblock opblock-deprecated" : isShown ? `opblock opblock-${method} is-open` : `opblock opblock-${method}`} id={escapeDeepLinkPath(isShownKey.join("-"))} >
            <SidebarSummary 
                operationProps={operationProps}
                toggleShown={toggleShown} 
                getComponent={getComponent} 
                authActions={authActions} 
                authSelectors={authSelectors} 
                specPath={specPath} />
          
        </div>
    )
  }

}
