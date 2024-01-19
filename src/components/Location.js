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
    <div className="bg-[#032] text-white py-8">
      <h1 className="font-bold text-2xl text-center tracking-[6px] mb-8">LOKASI</h1>
      <div className="grid gap-4 sm:gap-8 grid-flow-row sm:grid-flow-col sm:container sm:mx-auto">
        <iframe title="Event Location" className="w-72 h-80 mx-auto sm:w-full sm:mx-0 sm:justify-self-end"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7423.675573262011!2d108.86965255352442!3d-6.884377101048446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fa62606561ae5%3A0xb6e68810abeeda0d!2sPondok%20Pesantren%20Al%20Bukhori!5e0!3m2!1sen!2sid!4v1705622975334!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
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