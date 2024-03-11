import React from 'react'
import { useTranslation } from 'react-i18next';

const ActionSteps = () => {
    const { t } = useTranslation("booking");
  return (
    <div className='flex flex-row gap-7 justify-center items-center text-white'>
        <div className='flex gap-3 items-center'>
            <p className='bg-black  h-7 w-7 flex items-center justify-center text-xs  rounded-full '>1</p>
            <p className='uppercase tracking-[0.2rem] text-xs '>{t("SEARCH")}</p>
        </div>
        <div className='flex flex-row gap-3 justify-center items-center text-white'>
            <p className='border border-gray-100-50 h-7 w-7 flex items-center justify-center  text-xs  rounded-full '>2</p>
            <p className='uppercase tracking-[0.2rem] text-xs '>{t("BOOKING")}</p>
        </div>
        <div className='flex flex-row gap-3 justify-center items-center text-white'>
            <p  className='border border-gray-100-50 h-7 w-7 flex items-center justify-center  text-xs  rounded-full '>3</p>
            <p className='uppercase tracking-[0.2rem] text-xs '>{t("CHECKOUT")}</p>
        </div>
        <div className='flex flex-row gap-3 justify-center items-center text-white'>
            <p className='border border-gray-100-50 h-7 w-7 flex items-center justify-center  text-xs  rounded-full '>4</p>
            <p className='uppercase tracking-[0.2rem] text-xs '>{t("THANK YOU")}</p>
        </div>
    </div>
  )
}

export default ActionSteps