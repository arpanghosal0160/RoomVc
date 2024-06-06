'use client'

import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'


const MeetingSetup = ({setIsSetupComplete}: {
  setIsSetupComplete: (value: boolean) =>void
}) => {
  const [isMicCamToggleOn, setisMicCamToggleOn] = useState(false)

  const call = useCall();

  if(!call) {
    throw new Error('usecall should be used within streamcall component')
  }



  useEffect(() => {
    if(isMicCamToggleOn) {
      call?.camera.disable();
      call?.microphone.disable();
    }else{
      call?.camera.enable();
      call?.microphone.enable()
    }
  }, [isMicCamToggleOn, call?.camera, call?.microphone])
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Meeting Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggleOn}
            onChange={(e) => setisMicCamToggleOn(e.target.checked)}
          
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button className="rounded-lg bg-purple-500 px-4 py-2.5 hover:bg-green-600 active:bg-green-800 transform transition duration-300 ease-in-out hover:scale-105 active:scale-95 " onClick={() => {
        call.join();
        setIsSetupComplete(true);
      }}>
        Join the Meeting
        
      </Button>

    </div>
  )
}

export default MeetingSetup