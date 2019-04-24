import React from 'react'


const StoryList = ({ children}) => (
      console.log('Rerendering Storlist') ||  
    <div className="bg-light rounded p-4">
     {children}
    </div>
  )

export default StoryList
