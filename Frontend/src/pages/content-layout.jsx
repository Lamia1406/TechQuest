import SideBar from "../components/Sidebar";

export function ContentLayout({children}) {
    return <div className="w-screen h-full min-h-screen bg-[#CBEAE4] overflow-x-hidden ">
        <SideBar/>
        <div className="brand-accent ml-64">
        {children}
        </div>
    </div>
}