import SideBar from "../components/Sidebar";

export default function ContentLayout({children}) {
    return <div className="w-screen h-full min-h-screen bg-[#CBEAE4] overflow-x-hidden ">
        <SideBar/>
        <div className="brand-accent lg:ml-64 w-full lg:px-0 px-8 ">
        {children}
        </div>
    </div>
}