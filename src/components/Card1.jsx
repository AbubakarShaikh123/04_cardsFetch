import React from 'react'

function Card1({imgurl,title,des}) {
  return (
    <div className='w-[250px] h-[320px] bg-transparent rounded-md border shadow-md shadow-white	cursor-pointer hover:scale-105 transition-all overflow-hidden text-ellipsis'>
        <img src={imgurl} alt="" className='w-full h-[70%] object-cover  rounded-md hover:scale-105 transition-all hover:overflow-hidden' />
        <h1 className='text-2xl font-bold pl-1 py-1'>${title}</h1>
        <p className='px-1 text-[16px] leading-5 text-[#bcbaba] text-ellipsis	overflow-hidden'>{des}</p>
    </div>
  )
}

export default Card1