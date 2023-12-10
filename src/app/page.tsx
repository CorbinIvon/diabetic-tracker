import RenderTable from './components/RenderTable'
import { Heading } from '@radix-ui/themes'
import moment from 'moment-timezone';
import DiabeticEntryForm from './components/DiabeticEntryForm';
import supabase from './components/SupabaseClient';

export default async function Home() {
  const { data: allData, error: error1 } = await supabase
    .from('Little_Diabetic_Tracker')
    .select('value, timestamp')
    .order('timestamp', { ascending: false })
  const { data: todayData, error: error2 } = await supabase
    .from('Little_Diabetic_Tracker')
    .select('value, timestamp')
    .gte('timestamp', moment().startOf('day').toISOString())
    .order('timestamp', { ascending: false })

  allData?.forEach(entry => {
    const dateObject = new Date(entry.timestamp);
    const date = dateObject.toLocaleDateString();
    const time = dateObject.toLocaleTimeString().replace(/:\d+ /, ' ');
    // console.log(`Value: ${entry.value}, Date: ${date}, Time: ${time}`);
    entry.date = date;
    entry.time = time;
  });
  todayData?.forEach(entry => {
    const dateObject = new Date(entry.timestamp);
    const date = dateObject.toLocaleDateString();
    const time = dateObject.toLocaleTimeString().replace(/:\d+ /, ' ');
    // console.log(`Value: ${entry.value}, Date: ${date}, Time: ${time}`);
    entry.date = date;
    entry.time = time;
  });
  // Remove poorly structured timestamp
  allData?.map((item: any) => delete item.timestamp)
  todayData?.map((item: any) => delete item.timestamp)
  // console.log(allData);
  return (
    <>
      <Heading align={'center'}>Glucose Monitor Tracker</Heading>
      <DiabeticEntryForm />
      {error1 && <p>{error1.message}</p>}
      {error2 && <p>{error2.message}</p>}

      {todayData && <Heading align={'center'}>Today's Recordings</Heading>}
      {todayData && <RenderTable data={todayData} />}
      {allData && <Heading align={'center'}>All Recordings</Heading>}
      {allData && <RenderTable data={allData} />}

      {!allData && !todayData && <p>No Data. Please make 1 entry</p>}
    </>
  )
}