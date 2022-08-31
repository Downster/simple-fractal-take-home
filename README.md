# Simple Fractal Take Home

This is an application that allows you to view a candidates percentile in coding and communication.
The candidate is compared to candidates with the same title, that work at similar companies.

# Getting started

- Clone this repo to your computer by either downloading the zip from GitHub or cloning it
``` 
git clone git@github.com:Downster/simple-fractal-take-home.git 
```


- Install frontend dependencies
``` 
cd frontend 
npm install
```
- Install backend dependencies
```
cd app
pipenv install
```

- Start Virtual Env for backend and start backend
```
pipenv shell
cd ..
flask run
```

- Start Frontend
Open a new terminal window in the root of the project
```
cd frontend
npm start
```

- Run backend tests
While in the pipenv shell in the root directory of the project run:
```
python -m unittest -v
```

- Run frontend tests
FIRST MAKE SURE THE BACKEND IS RUNNING, SEVERAL TESTS WILL FAIL IF THE BACKEND IS NOT RUNNING
While in the frontend directory and not in the pipenv shell run:
```
npm test
```



