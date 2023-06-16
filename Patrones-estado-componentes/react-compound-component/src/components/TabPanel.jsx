/* eslint-disable react/prop-types */
import { useContext } from "react"
import TabContext from "../../../TabContext"

const TabPanel = ({whenActive, children}) => {

    const [activeTabId] = useContext(TabContext)

  return (
    <div>
        {activeTabId === whenActive ? children : null}
    </div>
  )
}

export default TabPanel