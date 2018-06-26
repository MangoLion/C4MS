/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppFormDialogs()
{
  return({

  DlgToolBar: {
    Type: 'stdToolBar',
    L: 10, T: 10, R: 10, H: 100, 
    Data: {
      HPadding: 10,
      VPadding: 10
    },
    Controls: {
      DlgMessageBox: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgMessageBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('dlgMessageBox','Test message!','dlgMessageBox', function(c) { return true; }, { DlgIcon: mbIconError });
          }
        }
      },
      DlgInputBox: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgInputBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('dlgInputBox','Enter text:','dlgInputBox', function(c) { 
              if(c.DialogResult==mbOK) 
              {
                c.Hide();
                alert("You entered: "+c.Controls.Edit.GetText()+"\n"+
                      "Checkbox state: "+(c.Controls.CheckBox.Checked==1 ? 'checked' : 'unchecked'));  
              }
              return true; 
            }, { DlgCheckBox: { Text: 'Test option', Checked: 1 } });
          }
        }
      },
      DlgDropDownBox: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgDropDownBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('dlgDropDownBox','Enter text:','dlgDropDownBox', function(c) { return true; }, { DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgDropDownListBox: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgDropDownListBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('dlgDropDownListBox','Select item:','dlgDropDownListBox', function(c) { return true; }, { DlgHint: 'Select from list', DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgMemoBox: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgMemoBox'
        },
        Events: {
          OnClick: function(e) {
//            ngMessageDlg('dlgMemoBox','Enter text:','dlgMemoBox', function(e) { return true; }, { DlgCheckBox: { Text: 'Test', Checked: 1 } });
            ngMessageDlg('dlgMemoBox','Enter text:','dlgMemoBox', function(e) { return true; });
          }
        }
      },
      DlgListBox: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgListBox'
        },
        Events: {
          OnClick: function(e) {
//            ngMessageDlg('dlgListBox','Select item:','dlgListBox', function(e) { return true; }, { DlgItems: [ 'Item1', 'Item2' ], DlgCheckBox: { Text: 'Test', Checked: 1 } });
            ngMessageDlg('dlgListBox','Select item:','dlgListBox', function(e) { return true; }, { DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgProgressBox: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgProgressBox'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('dlgProgressBox','Loading 10s...','dlgProgressBox');
            win.Controls.Progress.BeginProcess();
            setTimeout(function() {
              win.Close();
            }, 10000);
          }
        }
      },
      DlgWaitBox: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgWaitBox'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('dlgWaitBox','Stay tuned 10s...','dlgWaitBox');
            setTimeout(function() {
              win.Close();
            }, 10000);
          }
        }
      },
      DlgAbout: {
        Type: 'stdButton',
        Data: {
          Text: 'dlgAbout'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('dlgAbout',undefined,undefined,undefined, { DlgIcon: { Src: ngApp.AppPath+'image.png', L:0, T:0, W: 120, H: 166 } });
          }
        }
      }
      
    }
  }
    
  });
}
