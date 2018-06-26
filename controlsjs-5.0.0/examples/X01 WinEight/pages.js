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
      Type: 'weGroup',
      L: 15, T: 15, R: 15, H:520, 
      Data: { 
        Text: 'wePages'
      }, 
      Controls: {
        EnablePages1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
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
          Type: 'wePages',
          L: 0, T: 50, W: 300, H: 200,
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
          Type: 'wePages',
          L: 330, T: 50, W: 300, H: 200,
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
          Type: 'wePages',
          L: 0, T: 270, W: 300, H: 200,
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
          Type: 'wePages',
          L: 330, T: 270, W: 300, H: 200,
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
              Text: 'Page 3', Enabled: false
            }
          }
        },
        
        Pages5: {
          Type: 'wePages',
          L: 660, T: 50, R: 10, H: 420,
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
    },
    
    SectionsGroup: 
    { 
      Type: 'weGroup',
      L: 15, T: 545, R: 15, H:180, 
      Data: { 
        Text: 'weSections'
      }, 
      Controls: {
        EnableSections1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.SectionsGroup,this.Checked==1);
            }
          }
        },
  
        Sections1: {
          Type: 'weSections',
          L: 10, T: 50, W: 300, H: 80,
          Pages: {
            0: {
              Text: 'Section 1'
            },
            1: {
              Text: 'Section 2'
            }
          }
        },
  
        Sections2: {
          Type: 'weSections',
          L: 330, T: 50, R: 10, H: 80,
          Data: {
            SectionsIndent: 50,
            Page: 5
          },
          Pages: {
            0: { Text: 'Section 1' },
            1: { Text: 'Section 2' },
            2: { Text: 'Section 3', Enabled: false },
            3: { Text: 'Section 4' },
            4: { Text: 'Section 5' },
            5: { Text: 'Section 6' },
            6: { Text: 'Section 7' },
            7: { Text: 'Section 8' }
          }
        }
  
      }
    }      
          
    
  });
}
