/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppFormMisc()
{
  return({
    MiscGroup1: {
      Type: 'weGroup',
      L: 15, T: 15, R: 15, B: 15,
      Data: {
        Text: 'Misc'
      },      
      Controls: {
        EnableMisc1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.MiscGroup1,this.Checked==1);
            }
          }
        },
  
        Hint1: {
          Type: 'weHint',
          L: 20, T: 40, W: 250, H: 100,
          Data: {
            Anchor: 'topleft',
            Visible: true
          },
          Controls: {        
            HintLabel1: {
              Type: 'weLabel',
              L: 10, T: 5,
              Theme: WE_LIGHT,
              Data: {
                Text: 'weHint'
              }
            }
          } 
        },
        TextHint1: {
          Type: 'weTextHint',
          L: 290, T: 40,       
          Data: {
            Anchor: 'topleft',
            Text: 'weTextHint',
            Visible: true
          }
        },
        ProgressRing1Cap: {
          Type: 'weText',
          L: 0,T: 170,
          Data: {
            Text: 'weProgressRing'
          }
        },
        ProgressRing1: {
          Type: 'weProgressRing',
          L: 0, T: 200
        }, 
        
        ProgressDot1Cap: {
          Type: 'weText',
          L: 0, T: 250,
          Data: {
            Text: 'weProgressDot'
          }
        },
        ProgressDot1: {
          Type: 'weProgressDot',
          L: 0, T: 280
        }, 
    
        ProgressLine1Cap: {
          Type: 'weText',
          L: 170, T: 170,
          Data: {
            Text: 'weProgressLine'
          }
        },
        ProgressLine1: {
          Type: 'weProgressLine',
          L: 170, T: 200
        },
         
        ProgressBar1Cap: {
          Type: 'weText',
          L: 170, T: 250,
          Data: {
            Text: 'weProgressBar'
          }
        },
        ProgressBar1: {
          Type: 'weProgressBar',
          L: 170, T: 280, W: 200, H:10,
          Data: {
            Position: 30
          }
        },
        
        Calendar1Cap: {
          Type: 'weText',
          L: 390, T: 20,
          Data: {
            Text: 'weCalendar'
          }
        },
        Calendar1: {
          Type: 'weCalendar',
          L: 390, T: 50,
          Data: {
            SelectType: ngcalSelectMulti,
            YearNavigation: true
          }
        }
      }
      
    }
    
  });
}
