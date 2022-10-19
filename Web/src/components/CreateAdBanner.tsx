import { MagnifyingGlass } from "phosphor-react";

export function CreateAdBanner() {
  return (
    <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg over overflow-hidden mt-8' >
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-2xl text-white font-black block'>Couldn't find your duo?</strong>
          <span className='text-zinc-400 block'>Place an Ad to find new players!</span>
        </div>

        <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
          <MagnifyingGlass size={24} />
          Place an Ad!
        </button>


      </div>
    </div>

  )

}