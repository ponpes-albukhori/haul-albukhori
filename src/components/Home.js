import CountdownTimer from "./CountdownTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <img className="absolute z-0 w-screen h-screen object-cover" src="./images/photo.jpg" alt="Foto" />
      <div className="relative z-10 bg-gradient-to-b from-[rgba(0,77,0,0.90)] to-[#001A00] h-screen">
        <div className="text-center pt-4">
          <img
            className="mx-auto mb-8 h-10"
            src="./images/logo_albukhori.png"
            alt="haul"
          />
          <div className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            <h1 className="font-bold text-[4em] tracking-[16px]" >HAUL</h1>
            <h2 className="text-2xl tracking-[12px]">KE-XV</h2>
          </div>
        </div>
        {/* <div className="w-screen h sm:w-20 sm:h-40 mx-auto"></div> */}
        <div className="absolute w-screen bottom-16">
          <div className="text-white text-center mb-8">
            <h2 className="font-['Freehand'] text-2xl">Almaghfurlah</h2>
            <h1 className="font-bold text-2xl">KH. Abdul Karim Zawawi</h1>
          </div>
          <CountdownTimer />
          <div className="text-center mt-6">
            <FontAwesomeIcon icon={faAngleDown} className="text-white text-4xl animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}