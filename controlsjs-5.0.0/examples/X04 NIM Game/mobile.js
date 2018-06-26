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
    },
    NewGame: {
      Type: 'nimNewGame',
      L: 15, T: 10,
      Events: {          
        OnClick: NewGameClick
      }
    },
    NumPlayers: {
      Type: 'nimNumPlayers', 
      L: 15, T: 10,
      Events: {
        OnNumPlayersChanged: NumPlayersChanged
      }
    },          
    Player: {
      Type: 'nimPlayer',
      L: 15, B: 10          
    }
  };
  
  if(typeof ngc_Lang['DEV_mobile'] === 'undefined') ngc_Lang['DEV_mobile']=new Array();
  if(typeof ngc_Lang['DEV_mobile']['en'] === 'undefined') ngc_Lang['DEV_mobile']['en']=new Array();

  ngc_Lang['DEV_mobile']['en']['GamePanel'] = { 
    GamePanel: {
      Type: 'ngPanel',
      L: '50%', T: '50%', W: 200, H: 320,      
      style: {
        zIndex: 10,
        marginLeft: '-100px',
        marginTop: '-140px'
      },
      Controls: {
        Row4: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 10, T: 0, B: 0, 
          Data: {
            Vertical: true
          }
        },
        Row3: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 55, T: 0, B: 0,
          Data: {
            Vertical: true
          }
        },
        Row2: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 100, T: 0, B: 0,
          Data: {
            Vertical: true
          }
        },
        Row1: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 145, T: 0, B: 0,
          Data: {
            Vertical: true
          }
        },
        IWon: {
          Type: 'nimIWon',
          L: 0, T: 35,
          Data: {
            Visible: false
          }, 
          Events: {          
            OnClick: NewGameClick
          }
        },
        YouWon: {
          Type: 'nimYouWon',
          L: 0, T: 35,
          Data: {
            Visible: false
          },
          Events: {          
            OnClick: NewGameClick
          }
        } 
      }      
    }
  };
  
  if(typeof ngc_Lang['DEV_mobile_landscape'] === 'undefined') ngc_Lang['DEV_mobile_landscape']=new Array();
  if(typeof ngc_Lang['DEV_mobile_landscape']['en'] === 'undefined') ngc_Lang['DEV_mobile_landscape']['en']=new Array();

  ngc_Lang['DEV_mobile_landscape']['en']['GamePanel'] = { 
    GamePanel: {
      Type: 'ngPanel',
      L: '50%', T: '50%', W: 320, H: 200,      
      style: {
        zIndex: 10,
        marginLeft: '-140px',
        marginTop: '-100px'
      },
      Controls: {
        Row1: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 0, T: 10, R: 0
        },
        Row2: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 0, T: 55, R: 0
        },
        Row3: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 0, T: 100, R: 0
        },
        Row4: {
          Type: 'ngToolBar',
          ParentReferences: false,
          L: 0, T: 145, R: 0
        },
        IWon: {
          Type: 'nimIWon',
          L: 35, T: 0,
          Data: {
            Visible: false
          }, 
          Events: {          
            OnClick: NewGameClick
          }
        },
        YouWon: {
          Type: 'nimYouWon',
          L: 35, T: 0,
          Data: {
            Visible: false
          },
          Events: {          
            OnClick: NewGameClick
          }
        } 
      }      
    }
  };
}});