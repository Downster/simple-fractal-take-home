from app.data.data import calculate_percentile
from flask import Flask
from .data import create_scores_array, calculate_percentile
app = Flask(__name__)

#Route that returns the coding and communication percentile of a candidate and information for a graph
@app.route('/percentile/<int:candidate_id>')
def percentile(candidate_id):
    """Takes in a candidate_id and returns the scores of other similar candidates, and the percentile of the provided candidate in a dictionary
        scores can be accessed by keying into 'scores'
        percentile can be accessed by keying into 'percentile'
        the percentile dictionary has two keys 'coding_percentile' and 'communication_percentile'
        which correspond to the candidates coding percentile and communication percentile, respectively
    """
    #Check and see if a valid candidate id has been passed through
    #react-hook-form validations should take care of this
    #but we will define it ourselves just to be sure
    if 888 < candidate_id < 947:
        scores = create_scores_array(candidate_id)
        percentile = calculate_percentile(candidate_id)
        return {'scores': scores, 'percentile': percentile}
    else:
        return {'error': 'Invalid Candidate Id'}, 400

