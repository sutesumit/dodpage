import ActivityTile from '@/app/my_components/elements/ActivityTile'
import React from 'react'
import TimeLine from '@/app/my_components/elements/TimeLine'

const ActivityOverview = () => {
  return (
    <>
        <div className='flex flex-row flex-wrap items-center justify-center gap-2 p-2'>
        <ActivityTile
            title="IntroTime"
            href="/facilitator/introtime"
        />
        <ActivityTile
            title="PartTime"
            href="/facilitator/parttime"
        />
        <ActivityTile
            title="StoryTime"
            href="/facilitator/storytime"
        />
        <ActivityTile
            title="PlayTime"
            href="/facilitator/playtime"
        />
        <ActivityTile
            title="OverTime"
            href="/facilitator/overtime"
        />
        </div>
        <TimeLine num={5} />
        <TimeLine num={5} />
    </>
  )
}

export default ActivityOverview
