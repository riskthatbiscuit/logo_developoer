# Logo Generator ✨

Logo Generator is a command-line application that allows users to create logos by choosing a shape, background color, text, and text color. It generates SVG files representing the logos based on user input. 

## Installation 💻

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd logo-developer`
3. Install dependencies: `npm install`

## Usage 🚀

1. Run the application: `node index.js`
2. Follow the prompts to select a shape, background color, text, and text color for the logo.
3. After providing the inputs, the application will generate an SVG file named `logo.svg` in the `examples` directory.

## Shapes 📐

The following shapes are available for logo generation:

- Square
- Triangle
- Circle

## Configuration 🔧

The logo properties, such as shape, color, text, and text color, can be customized through the `index.js` file. The questions defined in the `questions` array can be modified or extended to suit your requirements.

## Examples 👀

The `examples` directory contains pre-generated logo SVG files for reference.

## Testing ✅

The Logo Generator project includes automated tests using the Jest testing framework. To run the tests, follow these steps:

1. Ensure that Jest is installed as a dependency: `npm install --save-dev jest`
2. Run the test suite: `npm test`

The test suite includes test cases for the `Shape`, `Triangle`, `Circle`, and `Square` classes. It verifies the correctness of properties, default values, and rendering functionality. Feel free to expand the test suite with additional test cases to cover more scenarios.

If you make any changes to the project codebase, it is recommended to run the test suite to ensure that the changes do not introduce any regressions or breaking functionality.

Ensure that you have Node.js and npm (Node Package Manager) installed on your system before running the tests.

## Contributing 🙌

Contributions to the Logo Generator project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License 📜

The Logo Generator project is released under the [MIT License](LICENSE).

