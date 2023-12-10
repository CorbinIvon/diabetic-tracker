import moment from 'moment-timezone';
import InsertData from "./server/InsertData";

export default function Form() {
  const today = moment().format('YYYY-MM-DD')
  const now = moment().format('HH:mm')
  return (
    <form action={InsertData} className="m-4">
      <div className="px-4">
        <label htmlFor="value" className="block text-sm font-medium text-gray-400">Reading</label>
        <div className="flex">
          <input type="number" name="value" id="value" className="bg-pink-900 text-white rounded-md w-full p-5" placeholder="mg/dL Reading" required/>
        </div>
      </div>
      <div className="flex justify-between px-4 pt-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-400">date</label>
          <input type="date" name="date" id="date" className="bg-pink-900 text-white rounded-md w-full p-1" value={today} autofocus/>
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-400">time</label>
          <input type="time" name="time" id="time" className="bg-pink-900 text-white rounded-md w-full p-1" value={now}/>
        </div>
      </div>
      <div className="flex justify-center m-4">
        <button type="submit" className="w-full bg-pink-900 p-5 rounded-lg">Submit</button>
      </div>
    </form>
  )
}