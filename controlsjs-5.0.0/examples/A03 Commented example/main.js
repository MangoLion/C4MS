var AppForm = null;             // References to created controls

function ngInit()               // Application initialization point
{
                                // Do some init. For instance preload images.
}

function ngMain()               // Application starting point
{
  AppForm = new ngControls({
  
    Group1:                      // Reference name 
    {                            // Control definition
      Type: 'weGroup',           // Control type
      L:20, T: 20, R: 20, B: 20, // Placement and dimensions
      Data: {                    // Control's properties
        Text: 'New application'
      },
      Events: {                  // Hook control's events
        // ...
      },      
      BeforeEvents: {            // Hook before existing control's events
        // ... 
      },
      OverrideEvents: {          // Override existing control's events 
        // ..
      },
      Controls: {                // Define/modify child controls (if supported) 
        Label1: {
          Type: 'weLabel',
          L: 0, T: 0,
          Data: {
            Text: 'Text label'
          }
        }
      }
    } 

  });
  AppForm.Update();              // Draw created form
}
