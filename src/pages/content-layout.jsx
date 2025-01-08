import SideBar from "../components/Sidebar";

export default function ContentLayout({children , background}) {
    return <div className=" h-full min-h-screen bg-[#CBEAE4] overflow-x-hidden "
    style={background ? {background: background}: {}}>
        <SideBar/>
       
        <div className="brand-accent lg:ml-64 w-full lg:px-0 px-8 ">
        {children}
        </div>
    </div>
}