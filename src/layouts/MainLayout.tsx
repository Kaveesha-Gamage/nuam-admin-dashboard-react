import { Activity, ChevronLeft, FileText, LayoutDashboard, Menu, Monitor, Settings } from "lucide-react";
import { useState } from "react";

function MainLayout() {

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <aside
            className={`bg-slate-900 text-slate-100 transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'
                }`}
        >
            <div className="p-4 flex items-center justify-between border-b border-slate-800">
                {!sidebarCollapsed && <span className="font-semibold">LAN Monitor</span>}
                <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className="p-1 hover:bg-slate-800 rounded"
                >
                    {sidebarCollapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                </button>
            </div>

            <nav className="p-2 space-y-1">
                {[
                    { icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard', active: true },
                    { icon: <Monitor className="h-5 w-5" />, label: 'Devices', active: false },
                    { icon: <Activity className="h-5 w-5" />, label: 'Network Activity', active: false },
                    { icon: <FileText className="h-5 w-5" />, label: 'Reports', active: false },
                    { icon: <Settings className="h-5 w-5" />, label: 'Settings', active: false },
                ].map((item) => (
                    <button
                        key={item.label}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-colors ${item.active
                                ? 'bg-slate-800 text-white'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`}
                    >
                        {item.icon}
                        {!sidebarCollapsed && <span className="text-sm">{item.label}</span>}
                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default MainLayout