'use server'
import moment from 'moment-timezone';
import supabase from '../SupabaseClient'
export default async function InsertData(formData) {
  const value = formData.get('value')
  const timestamp = moment(`${formData.get('date')} ${formData.get('time')}`).toISOString()
  const {data, error} = await supabase
    .from('Little_Diabetic_Tracker')
    .insert([
      { value, timestamp }
    ])
}
