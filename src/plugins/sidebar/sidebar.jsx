import React from "react"
import PropTypes from "prop-types"
import SidebarItem from './sidebar-item'
import SideBarContainer from './sidebar-container'
import Im from "immutable"

const SWAGGER2_OPERATION_METHODS = [
  "get", "put", "post", "delete", "options", "head", "patch"
]

const OAS3_OPERATION_METHODS = SWAGGER2_OPERATION_METHODS.concat(["trace"])

export default class Sidebar extends React.Component {

  static propTypes = {
    layoutActions: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    getConfigs: PropTypes.func.isRequired,
    getComponent: PropTypes.func.isRequired,
    fn: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context)

    this.state = { url: props.specSelectors.url(), selectedIndex: 0 }
  }

  render() {

    let {
      specSelectors,
      layoutSelectors,
      specActions,
      layoutActions,
      getConfigs } = this.props // this.props has the whole state spread

    let taggedOps = specSelectors.taggedOperations()
    // let something = specSelectors.url() // calls our selector, which returns some state (either an immutable object or value)

    let {
      maxDisplayedTags,
    } = getConfigs()

    let filter = layoutSelectors.currentFilter()

    if (filter) {
      if (filter !== true) {
        taggedOps = fn.opsFilter(taggedOps, filter)
      }
    }

    if (maxDisplayedTags && !isNaN(maxDisplayedTags) && maxDisplayedTags >= 0) {
      taggedOps = taggedOps.slice(0, maxDisplayedTags)
    }


    return (
      <ul>
        {
          taggedOps.map((tagObj, tag) => {
            const operations = tagObj.get("operations")

            return <SidebarItem
              key={"sidebar-" + tag}
              tag={tag}
              layoutSelectors={layoutSelectors}
              layoutActions={layoutActions}
              getConfigs={getConfigs}>
                  {
                    operations.map( op => {
                      const path = op.get("path")
                      const method = op.get("method")
                      const specPath = Im.List(["paths", path, method])


                      // FIXME: (someday) this logic should probably be in a selector,
                      // but doing so would require further opening up
                      // selectors to the plugin system, to allow for dynamic
                      // overriding of low-level selectors that other selectors
                      // rely on. --KS, 12/17
                      const validMethods = specSelectors.isOAS3() ?
                            OAS3_OPERATION_METHODS : SWAGGER2_OPERATION_METHODS

                      if(validMethods.indexOf(method) === -1) {
                        return null
                      }
                      
                      return <SideBarContainer
                                 key={`${path}-${method}`}
                                 specPath={specPath}
                                 op={op}
                                 path={path}
                                 method={method}
                                 tag={tag}
                                 />
                    }).toArray()
                  }

              </SidebarItem>
          }).toArray()
        }
      </ul>
    )

  }

}


Sidebar.propTypes = {
  specSelectors: PropTypes.object.isRequired,
  specActions: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired,
  layoutSelectors: PropTypes.object.isRequired,
  getConfigs: PropTypes.func.isRequired,
  fn: PropTypes.object.isRequired
}

