var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({

    MyAction1: {
      ID: 'ac1',        
      Type: 'ngSysAction',
      Data: {
        Text: 'ngSysAction 1',
        RadioGroup: 'myacgrp',
        Checked: 0,
        OnClick: function(e) { e.action.Check(1); return true; }
      }      
    },
    MyAction2: {
      ID: 'ac2',       
      Type: 'ngSysAction',
      Data: {
        Text: 'ngSysAction 2',
        RadioGroup: 'myacgrp',
        Checked: 0,
        OnClick: function(e) { e.action.Check(1); return true; }
      }      
    },
    MyAction3: {
      ID: 'ac3',       
      Type: 'ngSysAction',
      Data: {
        Text: 'ngSysAction 3',
        RadioGroup: 'myacgrp',
        Checked: 1,
        OnClick: function(e) { e.action.Check(1); return true; }
      }      
    },
  
    MenuBar1: {
      Type: 'weMenuBar',
      L:0, T: 0, R: 0,
      ColorScheme: 'Green',
      Theme: WE_DARK, 
      Menu: {
        Type: 'weMenu',
        Data: {
          Items: new Array( 
            { Text: 'weMenu', 
              SubMenu: new Array(
                { Action: 'ac1' },
                { Action: 'ac2' },
                { Action: 'ac3' }
              )
            }
          )          
        }
      }
    },
  
    Panel1: 
    { 
      Type: 'wePanel',
      L: 0, T: 50, W: 840, H: 280,
      Controls: {
        Caption1: {
          Type: 'weCaption',
          L: 20, T: 0,
          ColorScheme: 'Green',
          Data: { Text: 'weCheckBox' }
        },
        Check1: {
          Type: 'weCheckBox',
          L: 20, T: 33,
          Data: { Action: 'ac1' } 
        },
        Check2: {
          Type: 'weCheckBox',
          L: 20, T: 73,
          Data: { Action: 'ac2' } 
        },
        Check3: {
          Type: 'weCheckBox',
          L: 20, T: 113,
          Data: { Action: 'ac3' } 
        },
        
        Caption2: {
          Type: 'weCaption',
          L: 190, T: 0,
          ColorScheme: 'Green',
          Data: { Text: 'weList' }
        },
        List2: {
          Type: 'weListBox',
          L: 180, T: 30, W: 170, H: 120,
          Data: {
            Items: new Array(
              { Action:'ac1' }, 
              { Action:'ac2' },
              { Action:'ac3' } 
            )
          }
        },
        
        Caption3: {
          Type: 'weCaption',
          L: 360, T: 0,
          ColorScheme: 'Green',
          Data: { Text: 'weButton' }
        },
        Button1: {
          Type: 'weButton',
          L: 360, T: 30,
          Data: { Action: 'ac1' } 
        },
        Button2: {
          Type: 'weButton',
          L: 360, T: 70,
          Data: { Action: 'ac2' } 
        },
        Button3: {
          Type: 'weButton',
          L: 360, T: 110,
          Data: { Action: 'ac3' } 
        },
        
        

        MyAction4: {
          ID: 'ac4',        
          Type: 'ngSysAction',
          Data: {
            Text: 'ngSysAction 4',
            OnClick: function(e) { alert('Action4'); return true; }
          }      
        },
        MyAction5: {
          ID: 'ac5',       
          Type: 'ngSysAction',
          Data: {
            Text: 'ngSysAction 5',
            OnClick: function(e) { alert('Action5'); return true; }
          }      
        },
        MyAction6: {
          ID: 'ac6',       
          Type: 'ngSysAction',
          Data: {
            Text: 'ngSysAction 6',
            OnClick: function(e) { alert('Action6'); return true; }
          }      
        },
        SplitButton1: {
          Type: 'weSplitButton',
          L: 510, T: 30,
          Data: {
            Action: 'ac4'
          },
          Menu: {
            Type: 'weMenu',
            Data: {
              Items: new Array(
                { Action: 'ac4', OnMenuClick: function(e) { AppForm.SplitButton1.SetAction(AppForm.MyAction4); return true; } },
                { Action: 'ac5', OnMenuClick: function(e) { AppForm.SplitButton1.SetAction(AppForm.MyAction5); return true; } },
                { Action: 'ac6', OnMenuClick: function(e) { AppForm.SplitButton1.SetAction(AppForm.MyAction6); return true; } }
              )
            }
          }
        }
        
      }
    } 

  });
  AppForm.Update();
}
