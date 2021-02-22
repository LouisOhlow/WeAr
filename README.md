# WEAR 
#### This project contains the source code for the bachelor's thesis with the title:
## The development of a smartphone application with modifiable augmented reality filter for clothing prints
### Author: Louis Ohlow

## Setup
Since this project contains augmented reality features, a physical device is necessary to run the app.
The device has to support ARKit on iOS (iPhone 6s or newer) or [ARCore for Android](https://developers.google.com/ar/discover/supported-devices).

For running the app follow these steps:
### 1. clone the project: 

*git clone https://github.com/LouisOhlow/WeAr*

### 2. navigate to the root folder: 

*cd wear/wear*

### 3. install all node packages:

*npm install*

### 4. prepare devices

for setting up the devices for usb debugging, please follow the offical iOS and Android descriptions.

### 5. platform specific preparations

#### Android: 

open the wear/android project once with Android Studio and make sure you have a valid SDK installed

#### iOS:     

open the wear/ios project once with xCode

### 6. fix node-module error:

navigate to node_modules/react-native-permissions/RNPermissions.podspec

at line 6, change "React-Core" to "React/Core"

### 6.1 only iOS

run the following commands:

*cd ios*

*pod install*

*cd ..*

### 7. connect your device and run the project:

From the terminal:

#### Android: 
*npx react-native run-android --variant=ArDebug*

#### iOS
*npx react-native run-ios --device=**yourDeviceName***

alternatively you can just run it with ARCore or Android Studio


## Project Structure 
### actions

This folder contains all redux state management actions

### components

contains all visible components divided by views whereas the 
edit filter overview and setting view is for technical reasons in the same folder

### db

contains the realm logic and the default filter data
as well as the all filter connections kind of like an api connection

### navigation

contains the logic for navigating between all screens

### reducers

contains all redux state reducers

### res

contains the resources such as buttons, objects, images, image targets and colors

### utils

helper functions to prepare data or help out with basic logic

## Tests 

for running all tests, run the following command from the root folder:

*npm test we-ar*
