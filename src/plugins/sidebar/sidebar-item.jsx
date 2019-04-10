import React from 'react';
import PropTypes from "prop-types";
import Im from "immutable";
import ImPropTypes from "react-immutable-proptypes"

export default class SideBarItem extends React.Component {

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
    };


    render() {
        let {
            tag,
            tagObj,
            layoutSelectors,
            layoutActions,
            getConfigs,
            children
        } = this.props

        let {
            docExpansion,
            // deepLinking,
        } = getConfigs()

        let isShownKey = ["operations-tag", tag]
        let showTag = layoutSelectors.isShown(isShownKey, docExpansion === "full" || docExpansion === "list")

        return (
            <li onClick={() => layoutActions.show(isShownKey, !showTag)}>
                {tag}
                <ul>
                    {/* {children} */}
                </ul>
            </li>
        );
    }
}

SideBarItem.propTypes = {
    tag: PropTypes.string.isRequired,
    layoutActions: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    getConfigs: PropTypes.func.isRequired,
}
