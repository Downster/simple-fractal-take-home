import unittest
from ..data import create_scores_array
from ..data import create_companies_object
from ..utils import are_similar


class TestSimilarCompanies(unittest.TestCase):
    def test_correct_company(self):
        """The candidate should have the correct company Id according to the score-records csv file"""
        scores = create_scores_array(901)
        candidate = next((item for idx, item in enumerate(scores) if item['candidate_id'] == 901), -1)
        assert(candidate['company_id'] == 3)
    
    def test_are_similar(self):
        """Every item in scores should have a fractal index of less than .15"""
        scores = create_scores_array(901)
        companies = create_companies_object()
        for score in scores:
            self.assertTrue(are_similar(companies['3'], companies[str(score['company_id'])]))
    

    def test_company_5(self):
        """Should only contain people from company 5"""
        scores = create_scores_array(947)
        for score in scores:
            assert(score['company_id'] == 5)
    

    def test_company_1(self):
        """Should contain people from companies 1, 2, 3 and 4 who are Engineers"""
        def company_helper(company_id):
            return company_id == 1 or company_id == 2 or company_id == 3 or company_id == 4

        scores = create_scores_array(931)
        for score in scores:
            self.assertTrue(company_helper(score['company_id']))
            assert(score['title'] == 'Engineer')
