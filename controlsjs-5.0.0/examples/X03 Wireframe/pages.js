/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppFormPages()
{
  return({

    PagesGroup: 
    { 
      Type: 'wfrGroup',
      L:10, T: 10, R: 10, B:10, 
      Data: { 
        Text: 'wfrPages'
      }, 
      Controls: {
        EnablePages1: 
        {
          Type: 'wfrCheckBox',
          L: 10, T: 10,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.PagesGroup,this.Checked==1);
            }
          }
        },
  
        Pages1: {
          Type: 'wfrPages',
          L: 10, T: 40, W: 200, H: 100,
          Pages: {
            0: {
              Text: 'Page 1'
            },
            1: {
              Text: 'Page 2'
            }
          }
        },
  
        Pages2: {
          Type: 'wfrPages',
          L: 220, T: 40, W: 200, H: 100,
          Data: {
            PagesAlign: 'right'
          },
          Pages: {
            0: {
              Text: 'Page 1'
            },
            1: {
              Text: 'Page 2'
            }
          }
        },
  
        Pages3: {
          Type: 'wfrPages',
          L: 10, T: 150, W: 200, H: 100,
          Data: {
            PagesVAlign: 'bottom'
          },
          Pages: {
            0: {
              Text: 'Page 1'
            },
            1: {
              Text: 'Page 2'
            }
          }
        },
  
        Pages4: {
          Type: 'wfrPages',
          L: 220, T: 150, W: 200, H: 100,
          Data: {
            PagesAlign: 'right',
            PagesVAlign: 'bottom'
          },
          Pages: {
            0: {
              Text: 'Page 1'
            },
            1: {
              Text: 'Page 2'
            },
            2: {
              Text: 'Page 3',
              Enabled: false
            }
          }
        },
        
        Pages5: {
          Type: 'wfrPages',
          L: 440, T: 40, R: 10, H: 210,
          Data: {
            PagesIndent: 50,
            Page: 5
          },
          Pages: {
            0: { Text: 'Page 1' },
            1: { Text: 'Page 2' },
            2: { Text: 'Page 3', Enabled: false },
            3: { Text: 'Page 4' },
            4: { Text: 'Page 5' },
            5: { Text: 'Page 6' },
            6: { Text: 'Page 7' },
            7: { Text: 'Page 8' },
            8: { Text: 'Page 9' },
            9: { Text: 'Page 10' },
            10: { Text: 'Page 11' },
            11: { Text: 'Page 12' }
          }
        }
  
      }
    }      
    
  });
}
