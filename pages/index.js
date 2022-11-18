import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { About, Blog, Contact, Portfolio } from "../components";
import HomeTab from "../components/HomeTab";

import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { GiSuitcase } from "react-icons/gi";
import { BiEnvelope, BiBookContent } from "react-icons/bi";

export default function Home() {
  return (
    <div className="relative text-white bg-stone-900 h-full">
      <Tabs>
        <TabList className="bg-stone-800 md:bg-transparent fixed  flex md:flex-col justify-around h-fit w-full md:w-fit bottom-0 md:right-12 md:top-48 z-10">
          <Tab className="nav-link" data-text="Home">
            <AiFillHome />
          </Tab>
          <Tab className="nav-link" data-text="About">
            <AiOutlineUser />
          </Tab>
          <Tab className="nav-link" data-text="Portfolio">
            <GiSuitcase />
          </Tab>
          <Tab className="nav-link" data-text="Contact">
            <BiEnvelope />
          </Tab>
          <Tab className="nav-link" data-text="Blog">
            <BiBookContent />
          </Tab>
        </TabList>

        <TabPanel>
          <HomeTab />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Portfolio />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
        <TabPanel>
          <Blog />
        </TabPanel>
      </Tabs>
    </div>
  );
}
