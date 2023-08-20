import React from 'react'
import {FaRegHeart} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div class="flex items-end p-3 justify-center h-40 w-full bg-gray-200 ">
        <div class="flex flex-col items-center text-slate-400 ">

          <div >Jennifer Li | jenxli | jennzhli@gmail.com </div>
          <div class="flex flex-row items-center gap-2">
            <div class="flex flex-row">Created with</div> <FaRegHeart /> <div>2023</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer