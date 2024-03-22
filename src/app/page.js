import Image from "next/image";

import banner1 from "../assets/banner1.png";

export default function Home() {
  return (
    <div>
      HOme page
      <Image src={banner1} alt="banner image" width={1100} height={500} />
    </div>
  );
}
