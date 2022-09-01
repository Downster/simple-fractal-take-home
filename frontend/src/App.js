import { useState } from 'react';
import Chart from './components/Chart';
import CandidateIdForm from './components/CandidateIdForm';
import getCandidateIndex from './utils/getCandidateIndex'

function App() {

  const [candidates, setCandidates] = useState([])
  const [candidateIdx, setCandidateIdx] = useState(0)
  const [codingPercentile, setCodingPercentile] = useState('')
  const [communicationPercentile, setCommunicationPercentile] = useState('')
  const [error, setErrors] = useState('')

  const getCandidateData = async (data) => {
    const { candidateId } = data
    const res = await fetch(`/percentile/${candidateId}`)
    if (res.ok) {
      const { scores, percentile } = await res.json()
      setCandidateIdx(getCandidateIndex(scores, candidateId))
      setCandidates(scores)
      setCodingPercentile(percentile.coding_percentile.toFixed(2))
      setCommunicationPercentile(percentile.communication_percentile.toFixed(2))

    } else {
      const { error } = await res.json()
      setErrors(error)
    }
  }


  return (
    <div className='flex flex-col'>
      {error && <p>{error}</p>}
      <div className='flex flex-col items-center'>
        <p className='pt-2'>Coding percentile: {codingPercentile}</p>
        <p className='pt-2'>Communication percentile: {communicationPercentile}</p>
        <CandidateIdForm submit={getCandidateData} />
      </div>
      <Chart candidates={candidates} candidateIdx={candidateIdx} />
    </div>
  );
}

export default App;
