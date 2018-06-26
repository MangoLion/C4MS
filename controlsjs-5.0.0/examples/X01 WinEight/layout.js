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
      Type: 'wePanel',
      L: 15, T: 15, R: 15, B:15,
      ScrollBars: ssAuto, 
      Controls: {
        EnableLayout1: 
        {
          Type: 'weCheckBox',
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
        
        Title1: {
          Type: 'weTitle',
          L: 0, T: 50,
          Data: {
            Text: 'weTitle'
          }
        },
        Caption1: {
          Type: 'weCaption',
          L: 160, T: 70,
          Data: {
            Text: 'weCaption'
          }
        },
        Text1: {
          Type: 'weText',
          L: 280, T: 75,
          Data: {
            Text: 'weText'
          }
        },
        SmallText1: {
          Type: 'weSmallText',
          L: 360, T: 78,
          Data: {
            Text: 'weSmallText'
          }
        },
        
        Group1: {
          Type: 'weGroup',
          L: 0, T: 140, H: 100, W: 200,
          Data: {
            Text: 'weGroup'
          },
          Controls: {
            GroupPanel: {
              Type: 'weColorPanel',
              L:0,T:0,R:0,B:0
            }
          }
        },
        Group2: {
          Type: 'weGroup',
          L: 220, T: 140, H: 100, W: 200,
          Controls: {
            Group2Cap: {
              Type: 'weCaption',
              L: 10, T: 10,
              Data: {
                Text: 'weGroup (no text)'
              }
            }
          }
        },
        
        ColorPanel1: {
          Type: 'weColorPanel',
          ColorScheme: 'Yellow',
          L: 0, T: 260, W: 420, H: 100,
          Controls: {
            ColorPanelCap1: {
              Type: 'weCaption',
              ColorScheme: 'Black',
              L: 10, T: 10,
              Data: {
                Text: 'weColorPanel (weColorFrame)'
              }
            }
          }
        },
        
        SplitPanel1: {
          Type: 'weSplitPanel',
          L: 450, T: 140, W: 300, H: 220,
          Data: {
            Size: 150
          },
          Controls1: {
            SplitColorPanel1: {
              Type: 'weColorPanel',
              L: 0, T: 0, R: 0, B: 0,
              ColorScheme: 'Yellow',
              Controls: {
                SplitPanelCap1: {
                  Type: 'weCaption',
                  L: 10, T: 10,
                  ColorScheme: 'Black',
                  Data: {
                    Text: 'weSplitPanel'
                  }
                }                  
              }
            }
          },
          Controls2: {
            SplitColorPanel2: {
              Type: 'weColorPanel',
              L: 0, T: 0, R: 0, B: 0
            }
          }          
        },
        
        SplitPanel2: {
          Type: 'weSplitPanel',
          L: 780, T: 140, W: 150, H: 220,
          Data: {
            PanelAlign: 'top',
            Size: 100,
            AutoMinimize: 50,
            MaxSize: 150
          },
          Controls1: {
            SplitColorPanel3: {
              Type: 'weColorPanel',
              L: 0, T: 0, R: 0, B: 0,
              ColorScheme: 'Yellow',
              Controls: {
                SplitPanelCap2: {
                  Type: 'weCaption',
                  L: 10, T: 10,
                  ColorScheme: 'Black',
                  Data: {
                    Text: 'weSplitPanel'
                  }
                }                  
              }
            }
          },
          Controls2: {
            SplitColorPanel4: {
              Type: 'weColorPanel',
              L: 0, T: 0, R: 0, B: 0
            }
          }
        },
        
        ToolBarCap1: {
          Type: 'weCaption',
          L: 0, T: 400,     
          Data: {
            Text: 'weToolBar'
          }
        },
        ToolBar1: {
          Type: 'weToolBar',
          L: 0, T: 430, R: 0,
          Data: {
            AutoSize: true,
            VPadding: 20,
            HPadding: 10
          }, 
          Controls: {
            TB1Button1: {
              Type: 'weButton', 
              Data: {
                Text: 'Button1'
              }
            },
            TB1Edit1: {
              Type: 'weEdit',
              W: 200, 
              Data: {
                Text: 'Edit1'
              }
            },
            TB1Button2: {
              Type: 'weButton', 
              Data: {
                Text: 'Button2'
              }
            },
            TB1Button3: {
              Type: 'weButton', 
              Data: {
                Text: 'Button3'
              }
            },
            TB1Button4: {
              Type: 'weButton', 
              Data: {
                Text: 'Button4'
              }
            }
          }
        }        
      }
    },
    DropPanel1: {
      Type: 'weDropPanel',
      R: 40, B: 0, CH: 200, CW: 200,
      DroppedDown: true,
      Controls: {
        DropPanelCap1: {
          Type: 'weCaption',
          L: 10, T: 0,
          Data: {
            Text: 'weDropPanel'
          }
        }
      }
    }
  });  
}
