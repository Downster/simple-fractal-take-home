import csv
from ..utils import are_similar

def create_companies_object():
    """A function that reads the companies listed in the csv file and returns that csv file as a python dictionary"""
    companies = {}
    with open('app/data/companies.csv', mode='r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            companies[row['company_id']] = {
                'fractal_index' : float(row['fractal_index'])
            }
    return companies

def build_candidate_object(id):
    """A function that Takes in a candidate id and returns an object containing the candidates information"""
    candidate = {}
    with open('app/data/score-records.csv', mode='r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            #find the target candidate and break out of the loop, to save time
            if row['candidate_id'] == str(id):
                candidate['candidate_id'] = id
                candidate['communication_score'] = row['communication_score']
                candidate['coding_score'] = row['coding_score']
                candidate['title'] = row['title']
                candidate['company_id'] = row['company_id']
                break
    return candidate

def create_scores_array(id):
    """A function that takes in a candidate id, and returns an array with all of the other candidates with similar titles and at similar companies"""
    scores = []
    candidate = build_candidate_object(id)
    companies = create_companies_object()
    with open('app/data/score-records.csv', mode='r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            #if the row has the same title as the candidate and they work at similar companies, build an object for this particular candidate and add it to the scores array
            if row['title'] == candidate['title'] and are_similar(companies[row['company_id']], companies[candidate['company_id']]):
                similar_candidate = {
                    'candidate_id': int(row['candidate_id']),
                    'communication_score' : int(row['communication_score']),
                    'coding_score' : int(row['coding_score']),
                    'title': row['title'],
                    'company_id': int(row['company_id']) 
                }
                scores.append(similar_candidate)
    return scores

def calculate_percentile(id):
    """A function that takes a candidate_id and returns their percentile for their coding and commmunication score compared to other candidates at the same title and at similar companies"""
    #formula: percentile = (number of scores below the chosen candidates score) / total amount of scores * 100
    #to calculate the percentile the scores must be sorted in ascending order so we will sort the objects by coding score and communication score
    sorted_by_coding = sorted(create_scores_array(id), key= lambda item: item['coding_score'])
    sorted_by_communication = sorted(create_scores_array(id), key= lambda item: item['communication_score'])
    total_items = len(sorted_by_coding)
    #indicies are zero indexed, which means if we get the index of the candidate, that is how many scores are below them
    coding_candidate_idx = next((i for i, item in enumerate(sorted_by_coding) if item['candidate_id'] == id), -1)
    communication_candidate_idx = next((i for i, item in enumerate(sorted_by_communication) if item['candidate_id'] == id), -1)
    return {'coding_percentile': coding_candidate_idx / total_items * 100, 'communication_percentile' : communication_candidate_idx / total_items * 100}

    

            