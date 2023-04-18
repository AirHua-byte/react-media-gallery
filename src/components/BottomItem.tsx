import { useState } from 'react'

const poses = ['CLICK_WAVE', 'CLICK_DANCE', 'CLICK_SIT']

const BottomItem = ({ sendPose }: any) => {
  const onSendPose = (index: number) => {
    console.log(index)
    sendPose(poses[index])

    setTimeout(() => {
      sendPose('OVER')
    }, 2000)
  }

  return (
    <div className="flex content-center absolute bottom-10 right-10">
      {['打招呼', '跳段舞', '休息一下'].map((value, index) => {
        return (
          <button
            onClick={() => onSendPose(index)}
            className="w-100 h-50 p-2 text-gray-50 mx-2 rounded-xl bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}

export default BottomItem
