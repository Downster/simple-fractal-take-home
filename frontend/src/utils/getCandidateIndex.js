/**
 * 
 * @param {*} candidates 
 * an array of candidate objects
 * @param {*} id 
 * the id of the candidate we are trying to locate
 * @returns 
 * the index of the candidate we are trying to find
 */

function getCandidateIndex(candidates, id) {
    for (let i = 0; i < candidates.length; i++) {
        console.log(candidates[i].candidate_id)
        if (candidates[i].candidate_id === +id) {
            return i
        }
    }
}

export default getCandidateIndex