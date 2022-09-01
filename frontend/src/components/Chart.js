import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
/**
 * 
 * @param {*} candidates
 * an array of candidate objects
 * @param {*} candidateIdx
 * the index of the candidate being displayed 
 * @returns 
 * a JSX element (chart)
 */

function Chart({ candidates, candidateIdx }) {
    const labels = candidates.map((candidate) => `Candidate ${candidate.candidate_id}`)
    const codingBackgroundColors = new Array(candidates.length).fill('grey')
    const codingBorderColors = new Array(candidates.length).fill('darkgrey')
    const communicationBorderColors = new Array(candidates.length).fill('black')
    const communicationBackgroundColors = new Array(candidates.length).fill('black')
    codingBackgroundColors[candidateIdx] = 'rgba(255, 99, 132, 0.5)'
    codingBorderColors[candidateIdx] = 'rgb(255, 99, 132)'
    communicationBackgroundColors[candidateIdx] = 'rgba(53, 162, 235, 0.5)'
    communicationBorderColors[candidateIdx] = 'rgb(53, 162, 235)'

    const options = {
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Coding and Communication scores of candidates with the same title at similar companies',
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Coding Score',
                data: candidates.map((candidate) => candidate.coding_score),
                borderColor: codingBorderColors,
                backgroundColor: codingBackgroundColors
            },
            {
                label: 'Communication Score',
                data: candidates.map((candidate) => candidate.communication_score),
                borderColor: communicationBorderColors,
                backgroundColor: communicationBackgroundColors
            },
        ],
    };

    console.log('rerender')



    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart