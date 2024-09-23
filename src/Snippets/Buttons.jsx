import React from 'react'

function Buttons(props) {
  return (
    <button type={props.type || "button"} className={`${props.bg || "bg-[#212529]"} px-[29.5px] pt-[13px] pb-[10px] rounded text-[20px] leading-[25px] font-normal font-work text-center ${props.color || "text-white"} ${props.class || "all-btns"}`}>{props.name}</button>
  )
}

export default Buttons