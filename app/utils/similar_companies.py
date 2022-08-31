import math
def are_similar(company_1, company_2):
    """Similar company function given by Simple Fractal takes in two companies and returns if they are similar"""
    return math.fabs(company_1["fractal_index"] - company_2["fractal_index"]) < 0.15