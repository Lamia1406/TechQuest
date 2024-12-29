import SideBar from "../components/Sidebar";

export function ContentLayout({children}) {
    return <div className="w-screen h-full min-h-screen bg-[#D4A56B] overflow-x-hidden ">
        <SideBar/>
        <div className="brand-accent ml-64">
        {children}
        </div>
    </div>
}