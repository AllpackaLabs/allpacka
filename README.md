# allpacka
A planning app for any and every event!

Note the server and client have their own package.json
to install the dependencies, run

    npm install
    
in both "/client" and "/server"

Once the node_modules are installed
If you want to develop the client run...

    npm run dev

To run the server without the client, run...

    npm start
    
Happy Hacking!


## current file structure 

````
.
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── alpaca3.jpg
│   │   ├── alpacaLogo.jpg
│   │   └── alpaca_cool.jpg
│   ├── context.js
│   ├── layouts
│   │   └── rootLayout.jsx
│   ├── loaders.js
│   ├── main.jsx
│   ├── pages
│   │   ├── LoginPage.jsx
│   │   ├── NewTripPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── TripHome
│   │   │   ├── TripHomeComp
│   │   │   │   ├── AddCategoryComp.jsx
│   │   │   │   ├── AddItemsComp.jsx
│   │   │   │   ├── categoryComponent.jsx
│   │   │   │   ├── itemsDisplayComponent.jsx
│   │   │   │   └── mainItemsComponent.jsx
│   │   │   └── TripHomePage.jsx
│   │   └── UserHome
│   │       ├── UserHomePage.jsx
│   │       ├── UserSettingsPage.jsx
│   │       └── userTripsDisplay.jsx
│   └── styles
│       ├── _AddCategoryComp.scss
│       ├── _AddItemsComponent.scss
│       ├── _CategoryComponent.scss
│       ├── _ItemsDisplayComponent.scss
│       ├── _LoginPage.scss
│       ├── _MainItemsComponent.scss
│       ├── _NewTripPage.scss
│       ├── _SignupPage.scss
│       ├── _TripHomePage.scss
│       ├── _UserHomePage.scss
│       ├── _UserSettingsPage.scss
│       └── index.scss
└── vite.config.js
   ````
