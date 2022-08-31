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


function Chart({ candidates }) {
    const labels = candidates.map((candidate) => `Candidate ${candidate.candidate_id}`)

    const options = {
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
                backgroundColor: new Array(candidates.length).fill('rgba(255, 99, 132, 0.5)')
            },
            {
                label: 'Communication Score',
                data: candidates.map((candidate) => candidate.communication_score),
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            },
        ],
    };



    return (
        <div className=''>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart