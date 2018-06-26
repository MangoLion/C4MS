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
      Type: 'wfrGroup',
      L: 10, T: 10, R: 10, B: 10,
      Data: {
        Text: 'Misc'
      },      
      Controls: {
        EnableMisc1: 
        {
          Type: 'wfrCheckBox',
          L: 10, T: 10,
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
          Type: 'wfrHint',
          L: 30, T: 40, W: 250, H: 100,
          Data: {
            Anchor: 'topleft',
            Visible: true
          },
          Controls: {        
            HintLabel1: {
              Type: 'wfrLabel',
              L: 10, T: 5,
              Data: {
                Text: 'wfrHint'
              }
            }
          } 
        },
        TextHint1: {
          Type: 'wfrTextHint',
          L: 280, T: 50,       
          Data: {
            Anchor: 'topleft',
            Text: 'wfrTextHint',
            Visible: true
          }
        },
        ProgressDot1Cap: {
          Type: 'wfrText',
          L: 20, T: 190,
          Data: {
            Text: 'wfrProgressDot'
          }
        },
        ProgressDot1: {
          Type: 'wfrProgressDot',
          L: 20, T: 220
        }, 
    
        ProgressBar1Cap: {
          Type: 'wfrText',
          L: 140, T: 190,
          Data: {
            Text: 'wfrProgressBar'
          }
        },
        ProgressBar1: {
          Type: 'wfrProgressBar',
          L: 140, T: 220, W: 200, H:10,
          Data: {
            Position: 30
          }
        },
        
        Calendar1Cap: {
          Type: 'wfrText',
          L: 380, T: 20,
          Data: {
            Text: 'wfrCalendar'
          }
        },
        Calendar1: {
          Type: 'wfrCalendar',
          L: 380, T: 40,
          Data: {
            SelectType: ngcalSelectMulti,
            YearNavigation: true
          }
        }
      }
      
    }
    
  });
}
