export default function Schedule() {
  return (
    <div className="bg-[#032] text-white p-8">
      <h1 className="font-bold text-2xl text-center tracking-[6px] mb-8">
        RANGKAIAN KEGIATAN
      </h1>
      <ul className="flex flex-col gap-4 mb-8 sm:container sm:mx-auto">
        <li>
          <div className="bg-white text-[#302] rounded p-2 mb-4">
            <p className="font-bold text-center">Ahad, 4 Januari 2026</p>
          </div>
          <ul className="flex flex-col gap-4 mb-4 sm:container sm:mx-auto">
            <li className="flex flex-row gap-2 pb-4 border-b-white border-b-2">
              <div className="w-20 shrink-0 my-auto text-center px-2 py-1 rounded">
                <p className="font-bold text-xl leading-4">7.00</p>
                <p className="text-xs tracking-[8px]">
                  WI<span className="tracking-normal">B</span>
                </p>
              </div>
              <div className="flex items-center border-white border-l-2 pl-2">
                <p className="text-xl">Simakan Qur'an Putri</p>
              </div>
            </li>
            <li className="flex flex-row gap-2 pb-4 border-b-white border-b-2">
              <div className="w-20 shrink-0 my-auto text-center px-2 py-1 rounded">
                <p className="font-bold text-xl leading-4">13.00</p>
                <p className="text-xs tracking-[8px]">
                  WI<span className="tracking-normal">B</span>
                </p>
              </div>
              <div className="flex items-center border-white border-l-2 pl-2">
                <p className="text-xl">Pawai Ta'aruf</p>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div className="bg-white text-[#302] rounded p-2 mb-4">
            <p className="font-bold text-center">Senin, 5 Januari 2026</p>
          </div>
          <ul className="flex flex-col gap-4 mb-4 sm:container sm:mx-auto">
            <li className="flex flex-row gap-2 pb-4 border-b-white border-b-2">
              <div className="w-20 shrink-0 my-auto text-center px-2 py-1 rounded">
                <p className="font-bold text-xl leading-4">7.00</p>
                <p className="text-xs tracking-[8px]">
                  WI<span className="tracking-normal">B</span>
                </p>
              </div>
              <div className="flex items-center border-white border-l-2 pl-2">
                <p className="text-xl">Simakan Qur'an Putra</p>
              </div>
            </li>
            <li className="flex flex-row gap-2 pb-4 border-b-white border-b-2">
              <div className="w-20 shrink-0 my-auto text-center px-2 py-1 rounded">
                <p className="font-bold text-xl leading-4">7.00</p>
                <p className="text-xs tracking-[8px]">
                  WI<span className="tracking-normal">B</span>
                </p>
              </div>
              <div className="flex items-center border-white border-l-2 pl-2">
                <p className="text-xl">Khitanan Massal</p>
              </div>
            </li>
            <li className="flex flex-row gap-2 pb-4 border-b-white border-b-2">
              <div className="w-20 shrink-0 my-auto text-center px-2 py-1 rounded">
                <p className="font-bold text-xl leading-4">13.30</p>
                <p className="text-xs tracking-[8px]">
                  WI<span className="tracking-normal">B</span>
                </p>
              </div>
              <div className="flex items-center border-white border-l-2 pl-2">
                <p className="text-xl">Dalailul Khoirot</p>
              </div>
            </li>
            <li className="flex flex-row gap-2 pb-4 border-b-white border-b-2">
              <div className="w-20 shrink-0 my-auto text-center px-2 py-1 rounded">
                <p className="font-bold text-xl leading-4">16.00</p>
                <p className="text-xs tracking-[8px]">
                  WI<span className="tracking-normal">B</span>
                </p>
              </div>
              <div className="flex items-center border-white border-l-2 pl-2">
                <p className="text-xl">Tahlil Akbar</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div className="border-white border-2 rounded p-4">
        <div className="text-center mb-4">
          <h1 className="font-bold text-3xl">Pengajian Umum</h1>
          <p className="text-sm">serta</p>
          <h2 className="font-bold text-xl">
            Khataman Alfiyah Ibnu Malik dan Nadzom Imrithi
          </h2>
        </div>
        <div className="bg-white text-[#032] text-center px-2 py-1 rounded">
          <p className="text-sm">Ahad malam Senin</p>
          <p className="font-bold text-2xl">5 Januari 2024</p>
          <p>Pukul 19.30 WIB</p>
        </div>
      </div>
    </div>
  );
}
