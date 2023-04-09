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
    <div className="flex content-center left-0">
      {[0, 1, 2].map(value => {
        return (
          <div
            onClick={() => onSendPose(value)}
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

export default BottomItem
