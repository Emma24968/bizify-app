import { User, LayoutGrid, CalendarClock, MapPin } from "lucide-react";

export default function ProjectInfoCard() {
  return (
    <div className="w-[320px] rounded-2xl overflow-hidden border border-[#2a3b3b] bg-[#0f1f1f] text-white shadow-lg">
    
      <div className="bg-[#84A17D] px-4 py-3">
        <h2 className="text-sm font-semibold text-white">
          Project information
        </h2>
      </div>
      <div className="p-4 space-y-5">
        
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[white]">
            <User size={18} className="text-[#9fb3a8]" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Clients</p>
            <p className="text-sm font-medium">Josefin h. smith</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[white]">
            <LayoutGrid size={18} className="text-[#9fb3a8]" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Category</p>
            <p className="text-sm font-medium">Business solution</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[white]">
            <CalendarClock size={18} className="text-[#9fb3a8]" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Date</p>
            <p className="text-sm font-medium">25 january, 2023</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-[white]">
            <MapPin size={18} className="text-[#9fb3a8]" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Address</p>
            <p className="text-sm font-medium">268 Dancing Street, Ny</p>
          </div>
        </div>

      </div>
    </div>
  );
}