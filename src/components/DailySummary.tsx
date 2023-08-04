import React from 'react'

function DailySummary() {
  return (
    <div className='daily-summary text-left max-w-6xl'
    >
      <h3 className='tex font-extrabold text-md'>Daily Summary</h3>
      <p className=''>
        Now it feels like +35°, actually +31°.<br/>
        It feels hot because of the direct sun.<br/>
        Today, the temperature is felt in the range from +31° to 27°.
      </p>
    </div>
  )
}

export default DailySummary