Project Name : Share meal

Live URL: https://food-sharing-51eaa.web.app


🎯 Purpose :
Food Sharing Web** is a community-driven platform that connects people who have extra food with those in need. Whether you're a restaurant, household, or individual, you can share surplus food directly with the poor and starving individuals in your area. This project aims to reduce food waste and support humanity by ensuring that no one goes hungry while food is being thrown away elsewhere.

✨ Key Features :
Beautiful UI Built with React – Responsive, clean design optimized for a smooth customer experience.

Firebase Authentication – Secure user sign-up, login, and session management.

Dynamic Routing with React Router – Effortless navigation across pages like Home, Plans, FAQ, and User Dashboard.

Environment Variables Support – Secure configuration using .env files for Firebase keys and other sensitive data.

Manage My Foods – Donors can see and manage their listed food items.

Volunteer Hub – Join as a volunteer to help deliver food to people in need.

Search & Request - Users in need can find available food and request it.

Share Food - Upload food details (name, image, quantity, location, expiry).

Security - Using Firebase Token to make the website secure


## 📦 NPM Packages Used

- `axios` – For API requests  
- `react-router-dom` – Routing management  
- `firebase` – Authentication and token handling  
- `react-hook-form` – Form validation  
- `sweetalert2` – Alert messages  
- `react` – Icons
- `toastify` – Alert
- `swiper slider` – Slider


## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/food-sharing-website.git
    cd food-sharing-website
    ```

2. **Install dependencies for client and server:**
    ```bash
    cd client
    npm install

    cd ../server
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the `/server` folder and add:
    ```
    MONGO_URI=your_mongodb_connection_string
    FIREBASE_API_KEY=your_firebase_api_key
    ...
    ```

4. **Run the backend server:**
    ```bash
    cd server
    npm start
    ```

5. **Run the frontend client:**
    ```bash
    cd ../client
    npm start
    ```

6. **Open the browser and go to:**
    ```
    http://localhost:3000
    ```
