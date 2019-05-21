import XtrategieLayout from "./layout"
import TopbarPlugin from "plugins/topbar"
import SidebarPlugin from "plugins/sidebar"
import ApikeyPlugin from "plugins/apikey"
import ConfigsPlugin from "corePlugins/configs"

// the Standalone preset

let preset = [
  TopbarPlugin,
  SidebarPlugin,
  ApikeyPlugin,
  ConfigsPlugin,
  () => {
    return {
      components: { XtrategieLayout }
    }
  }
]

module.exports = preset
