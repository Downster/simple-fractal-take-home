# Simple Fractal Take Home

This is an application that allows you to view a candidates percentile in coding and communication.
The candidate is compared with other candidates who have the same title and work at similar companies. The candidate information is loaded 
from .csv files on the backend server (Flask) and all of the logic for calculating percentiles, and if a company is similar to another company
is executed there.

This application utilizes React.js, react-hook-forms, tailwind.css and chart.js on the frontend and Flask/python on the backend. 

I chose to use a python backend (though not required) because we were provided a python code snippet in the instructions and python has built in modules for handling .csv files. I could have installed a package and just parsed the csv file using javascript on the frontend, but Flask is pretty easy to use and I think its more fun moving through the whole stack anyways! Plus, python is a pretty powerful language!

I hope you enjoy this application, I got a bit carried away with it!

# API Routes

* GET percentiles/:candidate_id
** This route is called with a specific candidates id and returns a dictionart containing two keys percentile and scores, scores is an array of candidate objects used to create a chart containing all of the similar candidates scores and percentile is a dictionary containing two keys, coding_percentile and communication_percentile which contain the corresponding percentiles


# Getting started

1) Clone this repo to your computer by either downloading the zip from GitHub or cloning it
``` 
git clone git@github.com:Downster/simple-fractal-take-home.git 
```


2) Install frontend dependencies
* Change directories into the frontend folder and run npm install
``` 
cd frontend 
npm install
```
3) Install backend dependencies
* Change directories back into the root folder and then into the app folder. Run pipenv install
```
cd ..
cd app
pipenv install
```

4) Start Virtual Env for backend and start backend
* Start pipenv then change back to the root directory while in the virtual env shell and run flask run
```
pipenv shell
cd ..
flask run
```

5) Start Frontend
* Open a new terminal window in the root of the project
```
cd frontend
npm start
```

6) Run backend tests
* While in the pipenv shell in the root directory of the project run:
```
python -m unittest -v
```

7) Run frontend tests
* FIRST MAKE SURE THE BACKEND IS RUNNING, SEVERAL TESTS WILL FAIL IF THE BACKEND IS NOT RUNNING
* While in the frontend directory and not in the pipenv shell run:
```
npm test
```



