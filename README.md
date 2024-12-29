
# Weather App

A simple and visually appealing weather application that fetches real-time weather data using the Visual Crossing Weather API. The app is built with React.js and styled with custom CSS.

## Features

- **Real-Time Weather Data**: Displays current temperature, wind speed, humidity, heat index, and weather conditions.
- **Dynamic Icons**: Changes weather icons based on conditions (e.g., sun, rain, cloud).
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Secure API Integration**: API key is handled securely using environment variables.

## Technologies Used

- React.js
- Tailwind CSS
- Visual Crossing Weather API
- Vercel (for deployment)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather_app.git
   cd weather_app
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:5173
   ```

## Deployment

The app is deployed on Vercel. Follow these steps to deploy:

1. Push the project to a GitHub repository.
2. Link the repository to Vercel.
3. Add the environment variable in Vercel:
   - Navigate to your project dashboard on Vercel.
   - Go to **Settings > Environment Variables**.
   - Add `REACT_APP_WEATHER_API_KEY` and set it to your API key.
4. Deploy the app.

## Usage

1. Open the app.
2. View the real-time weather details for the selected location.
3. The app will dynamically fetch and display weather data, along with appropriate icons and formatting.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or feedback, feel free to reach out:
- **Email**: frabhinav709@gmail.com

---

Thank you for using the Weather App! We hope you find it useful and enjoyable.
```

Make sure to replace placeholders like `yourusername` and `your_api_key_here` with your actual GitHub username and API key respectively. Let me know if you need any further assistance!
