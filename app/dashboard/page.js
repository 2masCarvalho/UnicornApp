import Image from "next/image";
import nextImg from "@/app/image.png";

export default function dashboard(){
    return (
        <div className="p-8">
            <Image
                src={nextImg}
                alt="Next.js Logo"
                width={300}
                height={300}
                className="w-full rounded-lg border-gray-200" /> 
        </div>
    );
}