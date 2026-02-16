import React from 'react'
import TabBar from '../components/assets/Tabbar';

function VlogPage() {
  return (
    <div>
      <TabBar tabs={["Home","All", "Today", "Upcoming", "Playlist", "Most Viewed", "Tunes", "Music", "Shorts", "Full Length", "Recommended", "Your Favorite"]} />
    </div>
  )
}

export default VlogPage;