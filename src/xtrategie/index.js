import OperationsLayout from "./layout"
import SidebarPlugin from "plugins/sidebar"
import ConfigsPlugin from "corePlugins/configs"

let preset = [
  SidebarPlugin,
  ConfigsPlugin,
  () => {
    return {
      components: { OperationsLayout }
    }
  }
]

module.exports = preset
