import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo4.png"
        alt="KeroDevs Logo"
        width={269}
        height={88}
        style={{
          width: "auto",
          height: "44px",        // navbar height ke hisaab se
          objectFit: "contain",
        }}
        priority
      />
    </Link>
  );
};

export default Logo;