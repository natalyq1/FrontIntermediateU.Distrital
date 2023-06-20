/* eslint-disable react/prop-types */
import { useContext } from "react"
import TabContext from "../context/TabContext"

const TabPanel = ({ whenActive, children }) => {

  const [activeTabId] = useContext(TabContext)

  return (
    <div className={activeTabId === whenActive ? "tab-panel" : ""}>
      {activeTabId === whenActive ? children : null}
    </div>
  )
}

export default TabPanel