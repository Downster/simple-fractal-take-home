import unittest
from ..data import create_scores_array


class TestSameRole(unittest.TestCase):
    def test_same_role(self):
        """Every candidate should be a senior engineer"""
        scores = create_scores_array(921)
        for score in scores:
            assert score['title'] == 'Senior Engineer'