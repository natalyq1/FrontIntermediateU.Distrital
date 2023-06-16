import { useContext } from "react"
import TabContext from "../../../TabContext"

// eslint-disable-next-line react/prop-types, no-unused-vars
const Tab = ({id, children}) => {
    const [, setActiveTabId] = useContext(TabContext)
  return (
    <div onClick={() => setActiveTabId(id)}>{children}</div>
  )
}

export default Tab