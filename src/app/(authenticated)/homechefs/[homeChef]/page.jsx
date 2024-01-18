'use client'

import { AddFood, Button, DetailsHomechef, EditHomeChef, ListAllFood } from '@src/components'
import { ApiRoutes } from '@src/core'
import { useState } from 'react'
import { useQuery } from 'react-query'

const Page = ({ params }) => {
  const homechefId = params.homeChef
  const [component, setComponent] = useState(<DetailsHomechef />)
  const [buttonClicked, setButtonClicked] = useState('details')

  const updateComponent = (type) => {
    switch (type) {
      case 'edit':
        setComponent(<EditHomeChef />)
        setButtonClicked('edit')
        break
      case 'details':
        setComponent(<DetailsHomechef homechef={homechef} />)
        setButtonClicked('details')
        break
      case 'add food':
        setComponent(<AddFood />)
        setButtonClicked('add food')
        break
      case 'list food':
        setComponent(<ListAllFood />)
        setButtonClicked('list food')
        break
      default:
        setComponent(<DetailsHomechef homechef={homechef} />)
        setButtonClicked('details')
    }
  }

  const handleDeleteClick = async () => {
    const response = await fetch(ApiRoutes.deleteHomchefs, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ homeChefId: homechefId }),
    })
    if (response.ok) {
      updateComponent('details')
    } else {
      console.error('Failed to delete home chef')
    }
  }

  const { isLoading, isError, data, error } = useQuery('repoData', async () => {
    try {
      console.log('id: homechefId', homechefId)
      const response = await fetch(ApiRoutes.getHomechefById, {
        method: 'POST',
        body: JSON.stringify({ id: homechefId }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch home chef')
      }
      const json = await response.json()
      console.dir('JSON', json)
      return json
    } catch (error) {
      console.error('error', error)
      throw error
    }
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  const homechef = data

  return (
    <div className="flex flex-col">
      <div className="mb-5 mt-10 flex flex-row justify-between">
        <h2 className="my-auto">HomeChef ID: {homechefId}</h2>
        <Button
          handleClick={handleDeleteClick}
          style="uppercase px-10 py-4 mx-1 my-1 max-w-full bg-red-300 rounded-md hover:bg-red-500"
          name="delete"
        />
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h2 className="mb-10 text-center text-[20px] uppercase text-neutral-400  ">options</h2>
          <div className="px-auto flex flex-col items-center ">
            <Button
              handleClick={() => {
                updateComponent('details')
              }}
              style="uppercase px-5 py-4 mx-1 my-1 min-w-[150px] bg-slate-300 hover:bg-slate-400 rounded-md"
              buttonActive={buttonClicked == 'details' ? 'border-r-4 border-[#009879]' : ''}
              name="details"
            />
            <Button
              handleClick={() => {
                updateComponent('edit')
              }}
              style="uppercase px-5 py-4 mx-1 my-1 min-w-[150px] bg-slate-300 hover:bg-slate-400 hover:border-r-4 border-[#009879] rounded-md"
              buttonActive={buttonClicked == 'edit' ? 'border-r-4 border-[#009879]' : ''}
              name="edit"
            />
            <Button
              handleClick={() => {
                updateComponent('add food')
              }}
              style="uppercase px-5 py-4 mx-1 my-1 min-w-[150px] bg-slate-300 hover:bg-slate-400 rounded-md"
              buttonActive={buttonClicked == 'add food' ? 'border-r-4 border-[#009879]' : ''}
              name="add food"
            />
            <Button
              handleClick={() => {
                updateComponent('list food')
              }}
              style="uppercase px-5 py-4 mx-1 my-1 min-w-[150px] bg-slate-300 hover:bg-slate-400 rounded-md"
              buttonActive={buttonClicked == 'list food' ? 'border-r-4 border-[#009879]' : ''}
              name="list food"
            />
          </div>
        </div>
        <div className="col-span-2 border-l-2 border-sky-500 pl-10">
          <h2 className="mb-10 text-center text-[20px] uppercase text-neutral-400">HomeChefs Details</h2>
          {component}
          <DetailsHomechef homechef={homechef} />
        </div>
      </div>
    </div>
  )
}

export default Page
