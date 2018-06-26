/*
 * Controls.js NIM Game
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

if(typeof ngAppUnits === 'undefined') ngAppUnits = new Array();
ngAppUnits.push({ OnInit: function() 
{
  if(typeof ngc_Lang === 'undefined') ngc_Lang=new Array();
  if(typeof ngc_Lang['en'] === 'undefined') ngc_Lang['en']=new Array();
  
  ngc_Lang['en']['GameForm'] = {  
    Background: {
      Type: 'nimBackground',
      Data: {
        Dark: true
      },
      Events: {
        OnGesture: BackgroundGesture
      }
    },
    ControlsJS: {
      Type: 'nimControlsJS',
      R: 10, B: 10
    },
    Theme: {
      Type: 'nimThemes',
      R: 10, T: 10,
      Events: {
        OnThemeChanged: ThemeChanged
      }
    }
  };
  
  ngc_Lang['en']['GamePanel'] = { 
    GamePanel: {
      Type: 'ngPanel',
      L: '50%', T: '50%', W: 640, H: 595,      
      style: {
        zIndex: 10,
        marginLeft: '-280px',
        marginTop: '-257px'
      },
      Controls: {
        Player: {
          Type: 'nimPlayer',
          L: 265, T: 0          
        },
        Row1: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 0, T: 70, R: 0
        },
        Row2: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 0, T: 170, R: 0
        },
        Row3: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 0, T: 270, R: 0
        },
        Row4: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 0, T: 370, R: 0
        },
        IWon: {
          Type: 'nimIWon',
          L: 180, T: 170,
          Data: {
            Visible: false
          }, 
          Events: {          
            OnClick: NewGameClick
          }
        },
        YouWon: {
          Type: 'nimYouWon',
          L: 180, T: 170,
          Data: {
            Visible: false
          },
          Events: {          
            OnClick: NewGameClick
          }
        }, 
        NewGame: {
          Type: 'nimNewGame',
          L: 240, T: 495,
          Events: {          
            OnClick: NewGameClick
          }
        },
        NumPlayers: {
          Type: 'nimNumPlayers', 
          L: 217, T: 520, W: 125,
          Data: {
            HPadding: 25
          },
          Events: {
            OnNumPlayersChanged: NumPlayersChanged
          }
        }          
      }      
    }  
  };  
}});