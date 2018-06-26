/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppFormLayout()
{
  return ({
    LayoutGroup: 
    { 
      Type: 'wfrPanel',
      L: 10, T: 10, R: 10, B:10,
      ScrollBars: ssAuto, 
      Controls: {
        EnableLayout1: 
        {
          Type: 'wfrCheckBox',
          L: 0, T: 0,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.LayoutGroup,this.Checked==1);
            }
          }
        },

        Group1: {
          Type: 'wfrGroup',
          L: 0, T: 30, H: 100, W: 200,
          Data: {
            Text: 'wfrGroup'
          }
        },
        Group2: {
          Type: 'wfrGroup',
          L: 220, T: 30, H: 100, W: 200,
          Controls: {
            Group2Cap: {
              Type: 'wfrText',
              L: 10, T: 10,
              Data: {
                Text: 'wfrGroup (no text)'
              }
            }
          }
        },
        
        SplitPanel1: {
          Type: 'wfrSplitPanel',
          L: 0, T: 150, W: 300, H: 220,
          style: {
            border: '1px solid #c0c0c0'
          },
          Mover: 'controls2',
          Data: {
            Size: 100
          },
          Controls1: {
            SplitPanelCap1: {
              Type: 'wfrText',
              L: 10, T: 10,
              Data: {
                Text: 'wfrSplitPanel'
              }
            }                  
          },
          Controls2: {
          }          
        },
        
        SplitPanel2: {
          Type: 'wfrSplitPanel',
          L: 320, T: 150, W: 100, H: 220,
          Mover: 'both',
          style: {
            border: '1px solid #c0c0c0'
          },
          Data: {
            PanelAlign: 'top',
            Size: 100,
            AutoMinimize: 50,
            MaxSize: 150
          },
          Controls1: {
            SplitPanelCap2: {
              Type: 'wfrText',
              L: 10, B: 10,
              Data: {
                Text: 'wfrSplitPanel'
              }
            }                  
          },
          Controls2: {
          }
        },
        
        ToolBarCap1: {
          Type: 'wfrText',
          L: 0, T: 390,     
          Data: {
            Text: 'wfrToolBar'
          }
        },
        ToolBar1: {
          Type: 'wfrToolBar',
          L: 0, T: 410, R: 0,
          Data: {
            AutoSize: true,
            VPadding: 20,
            HPadding: 10
          }, 
          Controls: {
            TB1Button1: {
              Type: 'wfrButton', 
              Data: {
                Text: 'Button1'
              }
            },
            TB1Edit1: {
              Type: 'wfrEdit',
              W: 160, 
              Data: {
                Text: 'Edit1'
              }
            },
            TB1Button2: {
              Type: 'wfrButton', 
              Data: {
                Text: 'Button2'
              }
            },
            TB1Button3: {
              Type: 'wfrButton', 
              Data: {
                Text: 'Button3'
              }
            },
            TB1Button4: {
              Type: 'wfrButton', 
              Data: {
                Text: 'Button4'
              }
            }
          }
        }        
      }
    },
    DropPanel1: {
      Type: 'wfrDropPanel',
      L: 450, T: 0, CH: 150, CW: 150,
      DroppedDown: true,
      Controls: {
        DropPanelCap1: {
          Type: 'wfrText',
          L: 10, T: 10,
          Data: {
            Text: 'wfrDropPanel'
          }
        }
      }
    }
  });  
}
