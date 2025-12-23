// --- Countdown Logic ---
document.addEventListener('DOMContentLoaded', () => {
  // Tanggal target: 5 Januari 2026, 19:30
  const eventDate = new Date('2026-01-05T19:30:00').getTime()

  const updateCountdown = () => {
    const now = new Date().getTime()
    const timeDifference = eventDate - now

    if (timeDifference < 0) {
      // Jika waktu sudah lewat, set semua ke 0
      document.getElementById('days').innerText = 0
      document.getElementById('hours').innerText = 0
      document.getElementById('minutes').innerText = 0
      document.getElementById('seconds').innerText = 0
      return
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    document.getElementById('days').innerText = days
    document.getElementById('hours').innerText = hours
    document.getElementById('minutes').innerText = minutes
    document.getElementById('seconds').innerText = seconds
  }

  // Jalankan sekali saat load, lalu set interval
  updateCountdown()
  setInterval(updateCountdown, 1000)
})

// --- Google Calendar Logic ---
function addEventToGoogleCalendar() {
  const eventName = 'Haul Ke-XVII Almaghfurlah KH. Abdul Karim Zawawi'
  const eventStartDate = new Date('2026-01-05T19:30:00') // Sesuaikan tanggal
  const eventEndDate = new Date('2026-01-05T23:00:00') // Sesuaikan estimasi selesai
  const location =
    'Pondok Pesantren Al Bukhori, Sengon Wetan, Sengon, Kec. Tanjung, Kabupaten Brebes, Jawa Tengah, Indonesia'
  const eventDetails = 'Pengajian Umum serta Khataman Alfiyah Ibnu Malik dan Nadzom Imrithi'

  const startDate = eventStartDate.toISOString().replace(/-|:|\.\d+/g, '')
  const endDate = eventEndDate.toISOString().replace(/-|:|\.\d+/g, '')

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(eventDetails)}&sf=true&output=xml`

  window.open(googleCalendarUrl, '_blank')
}
