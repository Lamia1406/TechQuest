
import { Button, Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import Logo from "../assets/Logo.svg"
import { GiBirdHouse, GiProgression, GiCubes, GiFlyingTarget, GiBigGear } from "react-icons/gi";

export default function SideBar() {
    return (
        <Sidebar aria-label="TechQuest Navigation Sidebar">
      <Sidebar.Logo href="#" img={Logo} imgAlt="TechQuest logo">
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={GiBirdHouse}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/levels" icon={GiProgression}>
            Levels
          </Sidebar.Item>
          <Sidebar.Item href="/learning" icon={GiCubes}>
            Learning
          </Sidebar.Item>
          <Sidebar.Item href="/achievements" icon={GiFlyingTarget}>
            Achievements
          </Sidebar.Item>
          <Sidebar.Item href="/profile" icon={GiBigGear}>
            Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      

    </Sidebar>
    )
}






