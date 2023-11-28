# Tutor4U
Tutor4U is an online platform to connect amazing tutors with motivated students in every subject at all levels right across NZ!


### Front-end Requirements

The Tutor4U front-end is written in TypeScript with the React library and Vite during development, with the following dependencies:

+ [Node.js](https://nodejs.org/)
+ [React](https://facebook.github.io/react/)
+ [Vite](https://vitejs.dev/)
+ [Axios](https://axios-http.com/)
+ [Bootstrap](https://getbootstrap.com/)
+ [Dotenv](https://www.npmjs.com/package/dotenv)


### Back-end Requirements

The Tutor4U back-end is written in Python using the Django REST API Framework, with the following dependencies:

+ [Django](https://www.djangoproject.com/)
+ [Django REST framework](https://www.django-rest-framework.org/)
+ [Django CORS headers](https://pypi.org/project/django-cors-headers/)
+ [Pillow](https://python-pillow.org/)
+ [Python-Dotenv](https://pypi.org/project/python-dotenv/)


## Getting Started

Follow these instructions to download, initialise and run the Tutor4U web app for local development:

    git clone https://github.com/lachiestewart/Tutor4U.git
    
From the `Tutor4U` directory run the following commands to download the necessary packages and initialise the Django SQLite Database:
    
    cd backend
    pip install pipenv
    pipenv shell
    
then:

    pipenv install
    python manage.py makemigrations tutor4u
    python manage.py migrate

If you would like to create a database super user, after running the previous commands, run the following commands (while still inside the virtual environment) and enter your credentials: 

    python manage.py createsuperuser

To exit the virtual environment and return to the `Tutor4U` directory, run the following commands:

    exit
    
then:

    cd ..

From the `Tutor4U` directory, run the following commands to download the necessary packages for the front-end:

    cd frontend
    npm install

To run the back-end, run the following commands from the `Tutor4U` directory:

    cd backend 
    pipenv shell

then:

    python manage.py runserver

To run the front-end, open a separate terminal instance and run the following commands from the `Tutor4U` directory:

    cd frontend 
    npm run dev

Note that a local address in the format `http://localhost:####/` with the port number represented by `####` appears in the terminal after each server is run.

To terminate either server press:
    `Control+C`

To exhange server addresses to allow each end to exhange via HTTP Requests/Responses, from the `Tutor4U` directory, execute the following commands, with their respective addresses:

    echo FRONTEND_URL=frontend_address >> backend/.env
    echo VITE_BACKEND_URL=backend_address >> frontend/.env






