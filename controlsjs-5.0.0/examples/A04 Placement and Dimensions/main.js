var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({
  
    Group1: {
      Type: 'weGroup', 
      // Placement and dimensions
      // L = left,  T = top
      // R = right, B = bottom
      // W = width, H = height
      //
      // Units: pixels; different units must be specified as strings - L:'50%'
      L:20, T: 20, R: 20, B: 20,  
      Data: {
        Text: 'Placement and Dimensions'
      },
      Controls: {
      
        Text1: {
          Type: 'weText',
          L: 0, T: 0,
          Data: {
            Text: 'Left-Top'
          }
        },
        
        Text2: {
          Type: 'weText',
          R: 0, T: 0,
          Data: {
            Text: 'Right-Top'
          }
        },

        Text3: {
          Type: 'weText',
          R: 0, B: 0,
          Data: {
            Text: 'Right-Bottom'
          }
        },

        Text4: {
          Type: 'weText',
          L: 0, B: 0,
          Data: {
            Text: 'Left-Bottom'
          }
        },
        
        Button1: {
          Type: 'weButton',
          L: 100, T: 50,
          Data: {
            Text: 'Auto-size'
          }
        },
        
        Button2: {
          Type: 'weButton',
          L: 210, T: 50, W: 100,
          Data: {
            Text: 'Fixed-size'
          }
        },

        Button3: {
          Type: 'weButton',
          L: 320, T: 50, R: 100,
          Data: {
            Text: 'Dynamic-size'
          }
        },
        
        ToolBar1: {
          Type: 'weToolBar',
          L: 100, T: 100, R: 100, H: 30,
          Data: {
            HPadding: 10
          },
          Controls: {
            // ToolBar handles position of child controls
            ToolBtn1: {
              Type: 'weButton',
              Data: {
                Text: 'Placement can be'
              }
            },
            ToolBtn2: {
              Type: 'weButton',
              Data: {
                Text: 'handled by'
              }
            },
            ToolBtn3: {
              Type: 'weButton',
              Data: {
                Text: 'parent control.'
              }
            }
          } 
        }
      }
    } 

  });
  AppForm.Update();
}
