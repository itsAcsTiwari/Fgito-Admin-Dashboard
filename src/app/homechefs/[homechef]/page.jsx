'use client'
import React,{useState} from 'react'

import {Button,DetailsHomechef,EditHomeChef,AddFood,ListAllFood} from '@src/components'



const Page = ({ params}) => {
  const homechefId = params.homechef
  const [component,setComponent] = useState(<></>)
  const [buttonClicked,setButtonClicked] = useState()

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mt-10 mb-5 justify-between">
        <h2 className="my-auto" >HomeChef ID: {homechefId}</h2>
        <Button 
          handleClick={() => {setComponent(<DetailsHomechef/>)}}
          style={'uppercase px-10 py-4 mx-1 my-1 max-w-full bg-red-300 rounded-md hover:bg-red-500'}
          name={"delete"} />
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h2 className="text-center uppercase text-[20px] text-neutral-400 mb-10  " >options</h2>
          <div className="flex flex-col px-auto items-center ">
            <Button 
              handleClick={() => {
                setComponent(<DetailsHomechef/>),
                setButtonClicked('details')
                }}
              style={'uppercase px-5 py-4 mx-1 my-1 min-w-[150px] bg-slate-300 hover:bg-slate-400 rounded-md'} 
              buttonActive={buttonClicked == 'details' ? 'border-r-4 border-[#009879]':''}
              name={"details"} />
            <Button 
              handleClick={() => {
                setComponent(<EditHomeChef/>),
                setButtonClicked('edit')
                }} 
              style={'uppercase px-5 py-4 mx-1 my-1 min-w-[150px] bg-slate-300 hover:bg-slate-400 hover:border-r-4 border-[#009879] rounded-md'} 
              buttonActive={buttonClicked == 'edit' ? 'border-r-4 border-[#009879]':''}
              name={"edit"} />
            <Button 
              handleClick={() => {
                setComponent(<AddFood/>),
                setButtonClicked('add food')
                }}
              style={'uppercase px-5 py-4 mx-1 my-1 min-w-[150px] bg-slate-300 hover:bg-slate-400 rounded-md'} 
              buttonActive={buttonClicked == 'add food' ? 'border-r-4 border-[#009879]':''} 
              name={"add food"} />
            <Button 
              handleClick={() => {
                setComponent(<ListAllFood/>),
                setButtonClicked('list food')
                }}
              style={'uppercase px-5 py-4 mx-1 my-1 min-w-[150px] bg-slate-300 hover:bg-slate-400 rounded-md'}
              buttonActive={buttonClicked == 'list food' ? 'border-r-4 border-[#009879]':''}  
              name={"list food"} />
          </div>
        </div>
        <div className="col-span-2 border-l-2 border-sky-500 pl-10">
          <h2 className="text-center uppercase text-[20px] text-neutral-400 mb-10" >HomeChefs Details</h2>
            {component}
        </div>
      </div>
    </div>
  )
}

export default Page