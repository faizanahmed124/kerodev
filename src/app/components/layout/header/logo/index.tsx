import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
        <Image
        src="/images/logo/logo4.jpeg"
        alt="KeroDevs Logo"
        width={220}
        height={350}
        style={{ 
          width: "100px", 
          height: "60px",
          backgroundColor: "whe",
         
        }}
      />
    </Link>
  );
};

export default Logo;
