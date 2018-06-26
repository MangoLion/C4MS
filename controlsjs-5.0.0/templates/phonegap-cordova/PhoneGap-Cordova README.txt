How to use Controls.js in PhoneGap/Cordova projects
===================================================

Apache Cordova (aka PhoneGap) is a platform for building native mobile 
applications using HTML, CSS and JavaScript.


1. Install Cordova

   Cordova is installed and managed via npm, the Node.js package manager.

   - Download and install Node.js from http://nodejs.org web site.

   - Install Cordova command line interface (CLI) globally. 
     You may need to use sudo (for OSX, *nix, BSD etc) or run your command 
     shell as Administrator (for Windows) to do this. To install Cordova CLI 
     run command:

     npm install -g cordova

2. Install mobile platform SDKs

   To develop Cordova applications, you must install SDKs for each mobile 
   platform you are targeting.

   See Platform Guides in Apache Cordova Documentation:

     http://cordova.apache.org/docs/en/3.0.0/guide_platforms_index.md.html

3. Create new Cordova project

   Go to the directory where you maintain your source code, and run a command 
   such as the following: 

     cordova create hello com.example.hello HelloWorld

4. Copy template and Controls.js build files
 
   - Copy selected Controls.js PhoneGap/Cordova template to "www/" folder 
     in PhoneGap/Cordova project.

   - Copy files from "build/release/{version}/" to "www/controls/" folder
     in PhoneGap/Cordova project.


5. Add platform(s)

   All subsequent commands need to be run within the project's directory, or 
   any subdirectories within its scope:

     cd hello

   Before you can build the project, you need to specify a set of target 
   platforms. Your ability to run these commands depends on whether your 
   machine supports each SDK, and whether you have already installed each SDK. 

   Run any of these commands to add required platforms:
   
     cordova platform add android
     cordova platform add ios
     cordova platform add amazon-fireos
     cordova platform add blackberry10
     cordova platform add firefoxos
     cordova platform add wp7
     cordova platform add wp8
     cordova platform add windows8

6. Build project

   Run the following command to iteratively build the project:

     cordova build

7. Test project on an Emulator or Device

   Run a command such as the following to rebuild the app and view it within
   a specific platform's emulator:

     cordova emulate android

   Alternately, you can plug the handset into your computer and test the app 
   directly:

     cordova run android

   Testing project in platform's emulator is not the best way how to test 
   and debug your projects. It's simply because there is no JavaScript 
   debugger :(.

   You can make it little bit better if you use the FireBug Lite: 
   http://getfirebug.com/firebuglite

   But the best way is to use the "ripple-emulator" which runs your project
   in standard Chrome browser but with all special Cordova's API extensions.

   To install ripple-emulator run command:

     npm install -g ripple-emulator

   Then you must add android platform to your project:

     cordova platform add android

   To run your project in ripple-emulator just run command:

     ripple emulate --path platforms/android/assets/www


For more details, see Apache Cordova website:
http://cordova.apache.org/

