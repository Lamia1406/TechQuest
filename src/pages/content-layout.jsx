import SideBar from "../components/Sidebar";

export function ContentLayout({children}) {
    return <div>
        <SideBar/>
        <div>
        {children}
        </div>
    </div>
}