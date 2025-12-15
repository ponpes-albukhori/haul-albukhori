import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventDate = new Date("2026-01-05T19:30:00").getTime(); // Ganti dengan tanggal event Anda

      const timeDifference = eventDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (timeDifference < 0) {
        clearInterval(interval); // Hentikan interval jika waktu sudah habis
      }
    }, 1000);

    return () => {
      clearInterval(interval); // Membersihkan interval saat komponen unmount
    };
  }, []); // [] sebagai dependencies agar useEffect hanya dijalankan sekali saat komponen dipasang

  return (
    <div
      id="countdownTimer"
      className="bg-gray-200 flex flex-row justify-around py-4 px-8 md:px-64">
      <div id="days" className="text-center w-14">
        <p className="font-bold text-5xl">{countdown.days}</p>
        <p>hari</p>
      </div>
      <div id="hours" className="text-center w-14">
        <p className="font-bold text-5xl">{countdown.hours}</p>
        <p>jam</p>
      </div>
      <div id="minutes" className="text-center w-14">
        <p className="font-bold text-5xl">{countdown.minutes}</p>
        <p>menit</p>
      </div>
      <div id="seconds" className="text-center w-14">
        <p className="font-bold text-5xl">{countdown.seconds}</p>
        <p>detik</p>
      </div>
    </div>
  );
}
