import Sidebar from "./sidebar"
import SidebarSearch from "./sidebar-search"
import SidebarItem from "./sidebar-item"
import SidebarContainer from "./sidebar-container"
import SidebarOperation from "./sidebar-operation"
import SidebarSummary from "./sidebar-summary"

export default function () {
  return {
    components: {
        Sidebar,
        SidebarSearch,
        SidebarItem,
        SidebarContainer,
        SidebarOperation,
        SidebarSummary,
    }
  }
}
