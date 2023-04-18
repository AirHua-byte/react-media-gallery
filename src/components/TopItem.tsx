import { useState } from 'react'

const TopItem = ({ setNowSence }: any) => {
  const onChangeScene = (index: any) => {
    console.log(index)
    setNowSence(index)
  }

  return (
    <div className="flex content-center mt-14">
      {['媒体展厅1', '媒体展厅2'].map((value, index) => {
        return (
          <button
            onClick={() => onChangeScene(index)}
            className="w-100 h-50 p-2 text-gray-50 mx-2 rounded-xl bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}

export default TopItem
