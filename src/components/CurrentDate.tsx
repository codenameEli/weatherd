import Moment from 'moment';

const today = new Date();

function CurrentDate() {
  return (
    <div className={`current-date text-sm py-1 px-5 mt-8 rounded-3xl bg-black text-white`}>
      {Moment(today).format('dddd, MMMM Do')}
    </div>
  )
}

export default CurrentDate