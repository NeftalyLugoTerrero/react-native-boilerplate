# React Native Boilerplate

React Native Boilerplate is a starting point for React Native application. It is helpful to quick start developing with a well structured project and the minimum required dependencies.

This boilerplate is structured based on the post [An efficient way to structure React Native projects](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/).

## Features

 - [React Native](https://facebook.github.io/react-native/) (0.61.5)
 - [React Navigation](https://reactnavigation.org/) (5.0.0) and other required dependencies 
 - [Babel Plugin Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver) (4.0.0) and other recommended dependencies to simplify the require/import of paths in the project

## Requirements

A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

Assuming you have all the requirements installed, you can setup and run the project by running:

 1. Clone this repository,  `git clone https://github.com/NeftalyLT/react-native-boilerplate.git <your-project-name>` 
 2. Go to project's root directory,  `cd <your-project-name>` 
 3. Remove the previous git history (`.git`  folder),  `rm -rf .git` 
 4. Use  [React Native Rename](https://github.com/junedomingo/react-native-rename)  to update project name  `npx react-native-rename <newName>` 
 5. Run  `yarn` or  `npm install`  to install dependencies 
 6. Connect a mobile device to your development machine 
 7. Run the application:
	-   On Android:
	    -   Run  `npx react-native run-android`
	-   On iOS:
	    -   Open  `ios/YourReactProject.xcodeproj`  in Xcode
	    -   Hit  `Run`  after selecting the desired device
	    -   Or you can run the project using  `npx react-native run-ios`  inside the React Native project folder

> If you use the Yarn package manager, you can use `yarn` instead of `npx` when running React Native commands inside the project.

## Structure

The `src` directory contains all major project files
```swift
├── src
│   ├── assets
│   │  ├── fonts
│   │  ├── images
│   ├── components
│   │  ├── atoms
│   │  ├── molecules
│   │  ├── organisms
│   ├── navigations
│   ├── screens
│   ├── services
│   ├── styles
│   ├── utils
│   ├── index.js
```

The directories we use to organize the `components`
```swift
├── src
│   ├── components
│   │  ├── atoms
│   │  ├── molecules
│   │  ├── organisms
```

**Atoms:** The smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts.

**Molecules:** They are the composition of one or more components of atoms.

**Organisms:** The combination of molecules that work together or even with atoms that compose more elaborate interfaces.

> In each component directory, we have an **index.js** file that exports the specified category.

*Note: The **App.js** in the project root was removed, instead we use* **[src/index.js](https://github.com/NeftalyLT/react-native-boilerplate/blob/master/src/index.js)**

## License

This project is released under the  [MIT License](https://github.com/NeftalyLT/react-native-boilerplate/blob/master/LICENSE).

Feel free to remove the LICENSE file and the "License" section from the README if your project is not open source.