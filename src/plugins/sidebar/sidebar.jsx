import React, { Component } from "react"
import PropTypes from "prop-types"
import Im from "immutable"

export default class Sidebar extends Component {

  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    
  }

  render() {
    const {
      getComponent,
      specSelectors
    } = this.props

    let taggedOps = specSelectors.taggedOperations()
    
    const SidebarSearch = getComponent("SidebarSearch", true)
    const SidebarItem = getComponent("SidebarItem", true)
    const SidebarContainer = getComponent("SidebarContainer", true)

    return (
      <div>
        <SidebarSearch />
        
        <div id="resources_nav">
          <h3>Endpoits</h3>
          { 
            taggedOps.map((tagObj, tag) => {
              const operations = tagObj.get("operations")
              
              return (
                <SidebarItem 
                  key={"operation-" + tag} 
                  tag={tag}>
                  {
                     operations.map( op => {
                      const path = op.get("path")
                      const method = op.get("method")
                      const specPath = Im.List(["paths", path, method])

                      return <SidebarContainer
                                key={`${path}-${method}`}
                                specPath={specPath}
                                op={op}
                                path={path}
                                method={method}
                                tag={tag}
                              />
                      // return <div key={`${path}-${method}`}>{path}</div>
                     }).toArray()
                  }
                    
                </SidebarItem>
              )
            }).toArray()

          }
          {/* <SidebarItem actived /> */}
        </div>

      </div>
    )
  }
}

Sidebar.propTypes = {
  getComponent: PropTypes.func.isRequired,
  specSelectors: PropTypes.object.isRequired
}

