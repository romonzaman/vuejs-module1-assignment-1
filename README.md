# Simple Weather Application

This is a simple weather application that allows users to fetch weather data searching by city or zipcode. It is built using Vite as the build tool and Axios for making API requests.

## Features

- Fetches weather data from the weatherapi.com.
- Displays the current weather conditions for a given location.
- Supports searching for weather data for different cities or zip code

## Prerequisites

Before running this application, make sure you have the following installed on your system:

- Node.js: [https://nodejs.org](https://nodejs.org)
- WeatherAPI API key: Obtain an API key by signing up at [https://www.weatherapi.com](https://www.weatherapi.com)

## Installation

1. Clone the repository or download the source code.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Run the following command to install the dependencies:

```shell
npm install
```

5. Start the development server by running the following command:

```shell
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173/` to see the application in action.

## Configuration

The application's configuration can be found in the `script.js` file in the project's root directory. Currently, the only configuration option is the `apiKey`, which should be set to your WeatherAPI API key.

## Technologies Used

- [Vite](https://vitejs.dev): A fast build tool for modern web applications.
- [Axios](https://axios-http.com): A promise-based HTTP client for making API requests.
- [WeatherAPI](https://www.weatherapi.com): A weather data provider with a rich set of APIs.
- ES6
- Bootstrap


## Deployed to netlify

    https://helpful-palmier-fb8f00.netlify.app/

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).