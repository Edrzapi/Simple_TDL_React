    # React TDL Demo App  

This project is a simple **To-Do List (TDL)** built with React.  

## Getting Started  

### Prerequisites  
Make sure you have **Node.js** and **npm** installed.  

### Installation  
1. Clone the repository:  
   ```sh
   git clone https://github.com/Edrzapi/Simple_TDL_React.git
   cd Simple_TDL_React
   ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Run the app:
    ```sh
    npm start 
    ```
    
Have fun!


Routing Task:
Add Routing to the `simple_tdl_app`

Your task is to implement routing in the `simple_tdl_app` to navigate between different pages: Home, About, and 404 (Not Found). You have already been given the `404Page.js`, `About.js`, and `Home.js` components. Your job is to add routing functionality and ensure proper navigation across these pages.


Steps to Complete the Task:

1. Install React Router
   - If you haven't already installed React Router in the project, run the following command in your terminal to add it:
    
     npm install react-router-dom
    

2. Set Up Routing in `App.js`
   - Open the `App.js` file. This file will be responsible for managing the routes in your app.
   - Add routes for the following:
     - `/` should render the `Home` component.
     - `/about` should render the `About` component.
     - Any other path (404) should render the `404Page` component.

3. (Optional) Update Navbar for Navigation
   - Create a `Navbar.js` file and add links to the `Home` and `About` pages using `react-router-dom`.

4. Test Your Routes
   - Start the development server (`npm start`) and verify that:
     - The `/` path correctly renders the `Home` component.
     - The `/about` path correctly renders the `About` component.
     - Any invalid URL renders the `404Page` component.

5. Bonus (Optional)
   - Customize the `404Page.js` to display a more user-friendly message like: "Oops! Page not found. Go back to <Link to="/">Home</Link>."
   - Use an AppRouter instead of Routes in App.js



Expected Outcomes:

- The app should have routing implemented, allowing users to navigate between the `Home` and `About` pages.
- Any invalid route should display the `404Page` component.
- The `Navbar` should contain links to navigate between the pages.

