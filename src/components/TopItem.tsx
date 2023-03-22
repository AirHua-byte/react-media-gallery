import { useState } from 'react'

const TopItem = ({setNowSence}:any) => {
  const onChangeScene = (index: any) => {
    console.log(index)
    setNowSence(index)
  }

  return (
    <div className="flex content-center">
      {[0, 1, 2].map(value => {
        return (
          <div
            onClick={() => onChangeScene(value)}
            className="bg-opacity-10 mx-4 w-12 h-12 bg-blue-100 rounded-xl shadow flex justify-center"
            key={value}
          >
            <p>{value}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TopItem
