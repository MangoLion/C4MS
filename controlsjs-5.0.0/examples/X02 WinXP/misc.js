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
      Type: 'stdGroup',
      L: 10, T: 10, R: 10, B: 10,
      Data: {
        Text: 'Misc'
      },      
      Controls: {
        EnableMisc1: 
        {
          Type: 'stdCheckBox',
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
          Type: 'stdHint',
          L: 40, T: 30, W: 250, H: 100,
          Data: {
            Anchor: 'topleft',
            Visible: true
          },
          Controls: {        
            HintLabel1: {
              Type: 'stdLabel',
              L: 10, T: 5,
              Data: {
                Text: 'stdHint'
              }
            }
          } 
        },
        TextHint1: {
          Type: 'stdTextHint',
          L: 270, T: 30,       
          Data: {
            Anchor: 'topleft',
            Text: 'stdTextHint',
            Visible: true
          }
        },
        ProgressDot1Cap: {
          Type: 'stdText',
          L: 20, T: 160,
          Data: {
            Text: 'stdProgressDot'
          }
        },
        ProgressDot1: {
          Type: 'stdProgressDot',
          L: 20, T: 190
        }, 
    
        ProgressBar1Cap: {
          Type: 'stdText',
          L: 140, T: 160,
          Data: {
            Text: 'stdProgressBar'
          }
        },
        ProgressBar1: {
          Type: 'stdProgressBar',
          L: 140, T: 190, W: 200, H:10,
          Data: {
            Position: 30
          }
        },
        
        Calendar1Cap: {
          Type: 'stdText',
          L: 370, T: 20,
          Data: {
            Text: 'stdCalendar'
          }
        },
        Calendar1: {
          Type: 'stdCalendar',
          L: 370, T: 40,
          Data: {
            SelectType: ngcalSelectMulti,
            YearNavigation: true
          }
        }
      }
      
    }
    
  });
}
