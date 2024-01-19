import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="font-['Poppins'] bg-neutral-900 text-white pt-8 p-4 grid gap-4 grid-flow-row">
      <div className="grid gap-4 grid-flow-row sm:grid-flow-col sm:justify-center">
        <img
          className="mx-auto h-16 sm:mx-0 sm:justify-self-end"
          src="./images/logo_albukhori.png"
          alt="haul"
        />
        <div>
          <h1 className="font-bold text-center sm:text-left mb-2">Media Sosial</h1>
          <div className="flex flex-row gap-4 justify-center text-xl">
            <a href="https://www.facebook.com/PesantrenAlBukhori" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href="https://instagram.com/pesantrenalbukhori" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a href="https://www.youtube.com/@PesantrenAlBukhori" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareYoutube} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs">© 2024 Ponpes Al Bukhori. <br className="sm:hidden" />Hak cipta dilindungi undang-undang. <br />Created by <a href="https://ahmadmcer.github.io/" className="underline">@ahmadmcer</a>.</p>
    </div>
  );
}