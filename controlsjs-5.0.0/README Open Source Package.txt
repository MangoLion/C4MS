Controls.js Open Source Package
===============================

Controls.js is a technology for building desktop-like applications (SPA). 
Controls.js uses web technologies but gives the user the same feeling as standard 
desktop or native applications. Your applications will run almost anywhere thanks 
to the support of variety of   browsers , ability to build native applications 
from JavaScript, and the propagation of web based Operating Systems.

For more details, see Controls.js website: 
http://controlsjs.com


License
-------

The Controls.js is available in two licensing options: commercial and open source 
license. 

You may use Controls.js free of charge under the open source license but you must 
comply with the terms of the license agreement (see License GPLv3_0.txt), which 
requires you to distribute your application also under open source license 
and that you release source code of application to the general public.

Please note that 3rd party libraries are licensed under its own licenses.    

The commercial license can be purchased at Controls.js website:
http://controlsjs.com


Package Content
--------------- 

1. Getting started guide - see GETTING STARTED.txt.

2. Release and debug build of Controls.js

   The ready-to-use build files are stored in /build directory:
   
   /release               ... files used in production
   /debug                 ... files used in development
   
   controls.js            ... Controls.js 
                            + Hammer.js library for multi-touch gestures
                  
   controls-vm.js         ... Controls.js 
                            + ViewModel support 
                            + Hammer.js library for multi-touch gestures 
                            + Knockout MVVM library
                  
   controls-notouch.js    ... Controls.js
   
   controls-vm-notouch.js ... Controls.js 
                            + ViewModel support 
                            + Knockout MVVM library  
   libs/ng_basic, 
   libs/ng_controls       ... Controls.js resources
   
   libs/ng_wineight/      ... WinEight Skin   
   libs/ng_winxp/         ... WinXP Skin
   libs/ng_wireframe/     ... Wireframe Skin
   
   loader.js              ... Controls.js Loader
   
   loader-bar.js          ... Controls.js Loader + Progress Bar
   loader-image.js        ... Controls.js Loader + Image Progress
   loader-percent         ... Controls.js Loader + Percent Progress
   

3. Examples of how to use Controls.js - see /examples directory.
   
4. Documentation - see /docs directory.
   
5. New project templates - see /templates directory.
   
6. 3rd party libraries - see /libs directory.

7. Controls.js sources - see /src directory.


Building from sources
---------------------

The package already contains release and debug build in 'build\' directory.
If you prefer to re-build it from sources perform the following steps:

1. Install build system
 
   The build system is based on Grunt, The JavaScript Task Runner.
   Grunt is installed and managed via npm, the Node.js package manager.
  
   - Download and install Node.js from http://nodejs.org web site.
  
   - Install Grunt's command line interface (CLI) globally. 
     You may need to use sudo (for OSX, *nix, BSD etc) or run your command 
     shell as Administrator (for Windows) to do this. To install Grunt CLI run 
     command:
    
     npm install -g grunt-cli
    
2. Install build dependencies

   Change current working directory to Controls.js Package root and run:  
  
     npm install
   
3. Run build tool

     grunt
     
   Now you'll find the built files in 'build\' directory.
         