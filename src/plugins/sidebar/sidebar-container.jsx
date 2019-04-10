import React from 'react';
import PropTypes from "prop-types";
import Im from "immutable"
import { Iterable } from "immutable"
import ImPropTypes from "react-immutable-proptypes"

export default class SideBarContainer extends React.Component {

    static defaultProps = {
        tagObj: Im.fromJS({}),
        tag: "",
    }

    static propTypes = {
        tag: PropTypes.string.isRequired,
        tagObj: ImPropTypes.map.isRequired,
        layoutActions: PropTypes.object.isRequired,
        layoutSelectors: PropTypes.object.isRequired,
        getConfigs: PropTypes.func.isRequired,
        children: PropTypes.element,
        operationProps: PropTypes.instanceOf(Iterable).isRequired,
    };


    render() {
        let {
            tag,
            tagObj,
            layoutSelectors,
            layoutActions,
            getConfigs,
            children,
            operationProps
        } = this.props

        let {
            docExpansion,
            // deepLinking,
        } = getConfigs()

        let {
            summary,
            isAuthorized,
            method,
            op,
            showSummary,
            operationId,
            originalOperationId,
            displayOperationId,
          } = operationProps.toJS()

        let isShownKey = ["operations-tag", tag]
        let showTag = layoutSelectors.isShown(isShownKey, docExpansion === "full" || docExpansion === "list")

        return (
            <li>ttt</li>
        );
    }
}

SideBarContainer.propTypes = {
    tag: PropTypes.string.isRequired,
    layoutActions: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    getConfigs: PropTypes.func.isRequired,
}
