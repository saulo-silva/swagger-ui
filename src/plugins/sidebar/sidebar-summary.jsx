import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Iterable, List } from "immutable"
import ImPropTypes from "react-immutable-proptypes"
import toString from "lodash/toString"


export default class SidebarSummary extends PureComponent {

  static propTypes = {
    specPath: ImPropTypes.list.isRequired,
    operationProps: PropTypes.instanceOf(Iterable).isRequired,
    toggleShown: PropTypes.func.isRequired,
    getComponent: PropTypes.func.isRequired,
    getConfigs: PropTypes.func.isRequired,
    authActions: PropTypes.object,
    authSelectors: PropTypes.object,
  }

  static defaultProps = {
    operationProps: null,
    specPath: List(),
    summary: ""
  }

  render() {

    let {
      toggleShown,
      operationProps,
    } = this.props

    let {
      summary,
      op,
      showSummary,
    } = operationProps.toJS()

    let {
      summary: resolvedSummary,
    } = op

    return (
    //   <div className={`opblock-summary opblock-summary-${method}`} onClick={toggleShown} >
        <div onClick={toggleShown} >
            {!showSummary ? null :
            <div>
                {toString(resolvedSummary || summary)}
            </div>
            }
        </div>
    )

  }
}
