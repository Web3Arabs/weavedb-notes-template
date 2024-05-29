import Image from "next/image";

export default function Home() {
  return (
    <div dir="rtl">
      <nav className="relative z-20 bg-white w-full md:static md:text-sm md:border-none">
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/"><img src="https://console.weavedb.dev/static/images/logo.png" width={50} height={50} className="-mt-2" alt="notes"/></a>
          </div>
          <div className="nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0">
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
              <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                <li>
                  <button 
                    className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                  >
                    ربط المحفظة
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full h-screen flex flex-row -mt-8">
        <div className="flex-1 flex flex-col">
          
          <div className="flex flex-col m-10 mt-10">
            <div className="flex lg:w-[95%] flex-col ">
              <label className="text-black text-base">الملاحظة</label>
              <textarea
                placeholder="يعد تعلم Web3 الان يشابه شراء البيتكوين عام 2009 والإستثمار بالعديد من العملات المشفرة حتى يومنا هذا."
                className="w-[100%] text-black h-32 placeholder:text-gray-500 rounded-md mt-2 p-2 border border-[#444752] focus:outline-none"
              />
            </div>
          </div>

          <div className="mr-10 -mt-4 flex justify-start">
            <div className="flex items-center ml-8">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-10 rounded-lg flex justify-center flex-row items-center"
              ><p>حفظ</p></button>
            </div>
          </div>

          <div className="flex m-10 mt-10 flex-col">
            <h1 className='font-extrabold font-serif text-2xl text-gray-800'>الملاحظات:</h1>
            <div className='mt-2'>
                <div>
                  <div className="flex gap-40 mt-2">
                    <p>● Play</p>
                    <button className='py-1 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-lg'>حذف</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
