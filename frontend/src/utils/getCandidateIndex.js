function getCandidateIndex(candidates, id) {
    for (let i = 0; i < candidates.length; i++) {
        console.log(id)
        console.log(candidates[i].candidate_id)
        if (candidates[i].candidate_id === +id) {
            return i
        }
    }
}

export default getCandidateIndex