import CountdownTimer from "./CountdownTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <img className="absolute z-0 w-screen h-screen object-cover" src="./images/photo.jpg" alt="Foto" />
      <div className="relative z-10 bg-gradient-to-b from-[rgba(0,102,68,0.90)] to-[#032] h-screen pt-4">
        <img className="mx-auto mb-8 h-10" src="./images/logo_albukhori.png" alt="haul" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:container sm:mx-auto md:w-1/2 md:my-12">
          <div className="text-center">
            <div className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
              <h1 className="font-bold text-[4em] tracking-[16px]" >HAUL</h1>
              <h2 className="text-2xl tracking-[12px]">KE-XV</h2>
            </div>
          </div>
          <div className="">
            <img className="w-3/4 mx-auto -mb-14 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" src="./images/abah_romo.png" alt="Abah Romo" />
            <div className="text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,1)] mb-8">
              <h2 className="font-['Freehand'] text-2xl">Almarhum Almaghfurlah</h2>
              <h1 className="font-bold text-2xl">KH. Abdul Karim Zawawi</h1>
            </div>
            {/* <div className="flex flex-col justify-center items-center mb-8">
              <img className="w-3/4" src="./images/abah_romo.png" alt="Abah Romo" />
              <img className="w-1/3 -mt-20 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" src="./images/logo_haul.png" alt="Logo Haul" />
            </div> */}
          </div>
        </div>
        <CountdownTimer />
        <div className="text-center mt-6">
          <FontAwesomeIcon icon={faAngleDown} className="text-white text-4xl animate-bounce" />
        </div>
      </div>
    </div>
  );
}