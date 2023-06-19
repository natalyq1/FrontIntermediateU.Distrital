import Tab from "./Tab"
import TabPanel from "./TabPanel"
import TabSwitcher from "./TabSwitcher"


const TabContainer = () => {
  return (
      <TabSwitcher>
        <div className="tab-switcher-indicator">
          <Tab id='1' className=''>
              <span>Tab 1</span>
          </Tab>
          <Tab id='2'>
              <span>Tab 2</span>
          </Tab>
          <Tab id='3'>
              <span>Tab 3</span>
          </Tab>
          </div>

        <section className="content">
          <TabPanel whenActive='1'>
              <span> Contenido 1</span>
          </TabPanel>
          <TabPanel whenActive='2'>
              <span> Contenido 2</span>
          </TabPanel>
          <TabPanel whenActive='3'>
              <span> Contenido 3</span>
          </TabPanel>
          </section>
      </TabSwitcher>
  )
}

export default TabContainer