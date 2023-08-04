import { EyeDropperIcon } from '@heroicons/react/20/solid'
import { EyeIcon } from '@heroicons/react/24/outline'
import { QueueListIcon } from '@heroicons/react/24/solid'

function DailyMetrics() {
  return (
    <ul className='daily-metrics bg-black py-4 px-4 rounded-2xl justify-around flex w-[400px] mt-6 mb-6'>
      <li className='daily-metric flex flex-col justify-center text-center items-center text-[#ffe142]'>
        <QueueListIcon className='w-10 h-10 mb-3 animate-[pulse_2s_linear_infinite]' />
        <span className='font-bold text-lg'>4km/h</span>
        <span className='font-thin text-md'>Wind</span>
      </li>

      <li className='daily-metric flex flex-col justify-center text-center items-center text-[#ffe142]'>
        <EyeDropperIcon className='w-10 h-10 mb-3' />
        <span className='font-bold text-lg'>48%</span>
        <span className='font-thin text-md'>Humidity</span>
      </li>

      <li className='daily-metric flex flex-col justify-center text-center items-center text-[#ffe142]'>
        <EyeIcon className='w-10 h-10 mb-3' />
        <span className='font-bold text-lg'>1km</span>
        <span className='font-thin text-md'>Visibility</span>
      </li>
    </ul>
  )
}

export default DailyMetrics