/* eslint-disable react/prop-types */
import { useState } from "react"
import TabContext from "../../../TabContext"

const TabSwitcher = ({ children }) => {
    const [activeTabId, setActiveTabId] = useState('1')
    console.log(activeTabId);
  return (
      <TabContext.Provider 
      value={[activeTabId, setActiveTabId]}>
        { children}
      </TabContext.Provider >
  )
}

export default TabSwitcher