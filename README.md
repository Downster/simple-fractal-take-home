# Simple Fractal Take Home

This is an application that allows you to view a candidates percentile in coding and communication.
The candidate is compared to candidates with the same title, that work at similar companies. This application utilizes React.js, react-hook-forms, tailwind.css and chart.js on the frontend and Flask/python on the backend. I chose to use a python backend (though not required) because we were provided a python code snippet in the instructions and python has build in modules for handling .csv files. I could have installed a package and just parsed the csv file using javascript on the frontend, but Flask is pretty easy to use and I think its more fun moving through the whole stack anyways!

I hope you enjoy this little application, I got a little carried away with it!

# Getting started

1) Clone this repo to your computer by either downloading the zip from GitHub or cloning it
``` 
git clone git@github.com:Downster/simple-fractal-take-home.git 
```


2) Install frontend dependencies
``` 
cd frontend 
npm install
```
3) Install backend dependencies
```
cd app
pipenv install
```

4) Start Virtual Env for backend and start backend
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



