export default function Schedule() {
  return (
    <div className="bg-[#032] text-white p-8">
      <h1 className="font-bold text-2xl text-center tracking-[6px] mb-8">RANGKAIAN KEGIATAN</h1>
      <ul className="flex flex-col gap-4 mb-8 sm:container sm:mx-auto">
        <li className="flex flex-row gap-4 pb-4 border-b-white border-b-2">
          <div className="w-16 mb-auto bg-white text-[#032] text-center px-2 py-1 rounded">
            <p className="text-xs">Jumat</p>
            <p className="font-bold text-4xl">26</p>
            <p className="text-xs">Jan 2024</p>
          </div>
          <div>
            <h1 className="font-bold text-xl flex-auto">Pawai Ta'aruf</h1>
            <p>13.30 WIB</p>
          </div>
        </li>
        <li className="flex flex-row gap-4 pb-4 border-b-white border-b-2">
          <div className="w-16 mb-auto flex-none bg-white text-[#032] text-center px-2 py-1 rounded">
            <p className="text-xs">Sabtu</p>
            <p className="font-bold text-4xl">27</p>
            <p className="text-xs">Jan 2024</p>
          </div>
          <div>
            <h1 className="font-bold text-xl flex-auto">Simakan Qur'an</h1>
            <p>7.00 WIB</p>
          </div>
        </li>
        <li className="flex flex-row gap-4 pb-4 border-b-white border-b-2">
          <div className="w-16 mb-auto flex-none bg-white text-[#032] text-center px-2 py-1 rounded">
            <p className="text-xs">Sabtu</p>
            <p className="font-bold text-4xl">27</p>
            <p className="text-xs">Jan 2024</p>
          </div>
          <div>
            <h1 className="font-bold text-xl flex-auto">Khitanan Massal</h1>
            <p>7.00 WIB</p>
          </div>
        </li>
        <li className="flex flex-row gap-4 pb-4 border-b-white border-b-2">
          <div className="w-16 mb-auto bg-white text-[#032] text-center px-2 py-1 rounded">
            <p className="text-xs">Sabtu</p>
            <p className="font-bold text-4xl">27</p>
            <p className="text-xs">Jan 2024</p>
          </div>
          <div>
            <h1 className="font-bold text-xl flex-auto">Dalailul Khoirot</h1>
            <p>13.30 WIB</p>
          </div>
        </li>
        <li className="flex flex-row gap-4 pb-4 border-b-white border-b-2">
          <div className="w-16 mb-auto bg-white text-[#032] text-center px-2 py-1 rounded">
            <p className="text-xs">Sabtu</p>
            <p className="font-bold text-4xl">27</p>
            <p className="text-xs">Jan 2024</p>
          </div>
          <div>
            <h1 className="font-bold text-xl flex-auto">Tahlil Akbar</h1>
            <p>16.00 WIB</p>
          </div>
        </li>
      </ul>
      <div className="border-white border-2 rounded p-4">
        <div className="text-center mb-4">
          <h1 className="font-bold text-3xl">Pengajian Umum</h1>
          <p className="text-sm">serta</p>
          <h2 className="font-bold text-xl">Khataman Alfiyah dan Nadzom Imrithi</h2>
        </div>
        <div className="bg-white text-[#032] text-center px-2 py-1 rounded">
          <p className="text-sm">Sabtu malam Ahad</p>
          <p className="font-bold text-2xl">27 Januari 2024</p>
          <p>Pukul 19.30 WIB</p>
        </div>
      </div>
    </div>
  );
}