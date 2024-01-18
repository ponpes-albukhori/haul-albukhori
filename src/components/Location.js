import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Location() {
  const addEventToGoogleCalendar = () => {
    // Ganti dengan detail acara Anda
    const eventName = 'Haul Ke-XV Almaghfurlah KH. Abdul Karim Zawawi';
    const eventStartDate = new Date('2024-01-27T19:00:00'); // Tanggal dan waktu mulai acara
    const eventEndDate = new Date('2024-01-27T22:00:00'); // Tanggal dan waktu selesai acara
    const location = 'Pondok Pesantren Al Bukhori, Sengon Wetan, Sengon, Kec. Tanjung, Kabupaten Brebes, Jawa Tengah, Indonesia';
    const eventDetails = '';

    // Format tanggal dan waktu sesuai dengan format yang diinginkan oleh URL Google Calendar
    const startDate = eventStartDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = eventEndDate.toISOString().replace(/-|:|\.\d+/g, '');

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(eventDetails)}&sf=true&output=xml`;

    // Buka tautan ke Google Calendar di jendela baru
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="bg-[#001A00] text-white py-8">
      <h1 className="font-bold text-2xl text-center tracking-[6px] mb-4">LOKASI</h1>
      <div className="grid gap-4 sm:gap-8 grid-flow-row sm:grid-flow-col sm:container sm:mx-auto">
        <iframe title="Event Location" id="gmap_canvas" className="w-72 h-80 mx-auto sm:w-full sm:mx-0 sm:justify-self-end" src="https://maps.google.com/maps?q=Pondok%20Pesantren%20Al%20Bukhori&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        <div className="mx-8 sm:mx-0">
          <h2 className="font-bold text-xl">Pondok Pesantren Al Bukhori</h2>
          <p>Sengon Wetan, Sengon,<br />Kec. Tanjung, Kabupaten Brebes,<br />Jawa Tengah, Indonesia</p>
          <button
            className="border-white border-2 text-white hover:bg-white hover:text-green-950 font-bold w-full py-2 px-4 rounded mt-8"
            onClick={addEventToGoogleCalendar}
          >
            <FontAwesomeIcon icon={faCalendarPlus} className="hidden sm:inline" /> Tambahkan ke Google Calendar
          </button>
        </div>
      </div>
    </div>
  );
}