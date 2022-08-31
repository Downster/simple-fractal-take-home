import unittest

from app import percentile
from ..data import calculate_percentile, create_scores_array


class TestPercentile(unittest.TestCase):
    def test_candidate_900(self):
        """Candidate 900 should be in the 0th percentile for coding and communication :("""
        percentile = calculate_percentile(900)
        assert(percentile['coding_percentile'] == 0)
        assert(percentile['communication_percentile'] == 0)

    def test_candidate_890(self):
        """Candidate 890 should be in the 0th percentile for coding but 9.68 for communication"""
        percentile = calculate_percentile(890)
        assert(percentile['coding_percentile'] == 0)
        assert(round(percentile['communication_percentile'], 2) == 9.68)
    
    def test_candidate_932_manually(self):
        """There should be 31 potential candidates, and candidate 932 should have the highest coding score out of all of them putting them in the 96.77 percentile of coding"""
        percentile = calculate_percentile(932)
        scores = create_scores_array(932)
        candidate_932 = next((item for idx, item in enumerate(scores) if item['candidate_id'] == 932), -1)
        sorted_scores = sorted([score['coding_score'] for score in scores])
        assert(len(scores) == 31)
        assert(candidate_932['coding_score'] == sorted_scores[-1])
        #there are 30 scores below the last score so....
        # 30 / 31 = .9677 
        #.9677 x 100 = 96.77
        manual_percentile = 30 / 31 * 100
        assert(round(manual_percentile, 2) == round(percentile['coding_percentile'], 2))

        

