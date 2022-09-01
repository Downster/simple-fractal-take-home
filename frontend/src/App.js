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
  /**
   *
   * @param {*} data
   *  a data object with a key of candidateId
   *
   * This functions fetches the coding and communication percentiles of the chosen candidate
   * along with all of the other scores used to calculate the percentile
   * and assigns them to their specific slice of state.
   *
   * When the candidates state is updated, it causes the Chart.js component to be re-rendered with the
   * chosen candidate highligted in red and blue
   */
  const getCandidateData = async (data) => {
    const { candidateId } = data
    const res = await fetch(`/percentile/${candidateId}`)
    if (res.ok) {
      const { scores, percentile } = await res.json()
      //simple helper function to get the candidates position in the scores array
      //since the graph data is mapped from the scores array it will be in the same position in the
      //graph data
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
        <CandidateIdForm submit={getCandidateData} />
        <p className='pt-2'>Candidate coding percentile: {codingPercentile}</p>
        <p className='pt-2'>Candidate communication percentile: {communicationPercentile}</p>
      </div>
      <Chart candidates={candidates} candidateIdx={candidateIdx} />
    </div>
  );
}

export default App;
