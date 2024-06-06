import CallList from '@/components/CallList'
import { CallRecordingList } from '@stream-io/video-react-sdk'
import React from 'react'

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">
        Recordings
      </h1>
      <CallList type="recordings" />
      
    </section>
  )
  
}

export default Recordings