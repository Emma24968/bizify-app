import Image from "next/image";
import { contact } from "@/app/data";

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      
      <div className="w-[70%] bg-[#172426E5] rounded-2xl flex justify-center items-center gap-10 py-10 px-6">
        
        {contact.map((details, index) => {
          return (
            <div key={index} className="flex flex-col items-center text-center gap-4">
              
              <Image
                src={details.image}
                alt="icon"
                width={70}
                className="bg-white p-2 rounded-md"
              />

              <h3 className="text-[30px] text-white">
                {details.header}
              </h3>

              <p className="text-[#CED0DF]">
                {details.description}
              </p>

              <button className="bg-[#84A17D] text-white px-4 py-2 rounded-md">
                {details.button}
              </button>

            </div>
          );
        })}

      </div>
    </div>
  );
}