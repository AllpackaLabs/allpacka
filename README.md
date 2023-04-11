# allpacka
A planning app for any and every event!

Note the server and client have their own package.json
to install the dependencies, run

    npmp install
    
in both "/client" and "/server"

Once the node_modules are installed
If you want to develop the client run...

    npm run dev

To run the server without the client, run...

    npm start
    
Happy Hacking!


## current file structure 


.
├── client
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── alpaca3.jpg
│   │   │   ├── alpacaLogo.jpg
│   │   │   ├── alpaca_cool.jpg
│   │   │   ├── background.png
│   │   │   └── yosemite.jpg
│   │   ├── context.js
│   │   ├── index.css
│   │   ├── layouts
│   │   │   └── rootLayout.jsx
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   ├── TripHome
│   │   │   │   ├── NewTripPage.jsx
│   │   │   │   ├── TripHomePage.jsx
│   │   │   │   ├── addItemsComponent.jsx
│   │   │   │   ├── categoryComponent.jsx
│   │   │   │   ├── itemsDisplayComponent.jsx
│   │   │   │   └── mainItemsComponent.jsx
│   │   │   └── UserHome
│   │   │       ├── UserHomePage.jsx
│   │   │       └── userTripsDisplay.jsx
│   │   └── scss
│   │       ├── LoginPage.scss
│   │       ├── NewTripPage.scss
│   │       ├── SignupPage.scss
│   │       ├── TripHome.scss
│   │       └── UserHomePage.scss
│   └── vite.config.js
└── server
    ├── controllers
    │   ├── cookieController.js
    │   ├── sessionController.js
    │   ├── tripController.js
    │   └── userController.js
    ├── models.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   ├── tripRouter.js
    │   └── userRouter.js
    └── server.js
