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
    Type: 'wfrToolBar',
    L: 10, T: 10, R: 10, H: 100, 
    Data: {
      HPadding: 10,
      VPadding: 10
    },
    Controls: {
      DlgMessageBox: {
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgMessageBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('wfrDlgMessageBox','Test message!','wfrDlgMessageBox', function(c) { return true; }, { DlgIcon: 'EyeIcon' });
          }
        }
      },
      DlgInputBox: {
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgInputBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('wfrDlgInputBox','Enter text:','wfrDlgInputBox', function(c) { 
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
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgDropDownBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('wfrDlgDropDownBox','Enter text:','wfrDlgDropDownBox', function(c) { return true; }, { DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgDropDownListBox: {
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgDropDownListBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('wfrDlgDropDownListBox','Select item:','wfrDlgDropDownListBox', function(c) { return true; }, { DlgHint: 'Select from list', DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgMemoBox: {
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgMemoBox'
        },
        Events: {
          OnClick: function(e) {
//            ngMessageDlg('wfrDlgMemoBox','Enter text:','wfrDlgMemoBox', function(e) { return true; }, { DlgCheckBox: { Text: 'Test', Checked: 1 } });
            ngMessageDlg('wfrDlgMemoBox','Enter text:','wfrDlgMemoBox', function(e) { return true; });
          }
        }
      },
      DlgListBox: {
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgListBox'
        },
        Events: {
          OnClick: function(e) {
//            ngMessageDlg('wfrDlgListBox','Select item:','wfrDlgListBox', function(e) { return true; }, { DlgItems: [ 'Item1', 'Item2' ], DlgCheckBox: { Text: 'Test', Checked: 1 } });
            ngMessageDlg('wfrDlgListBox','Select item:','wfrDlgListBox', function(e) { return true; }, { DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgProgressBox: {
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgProgressBox'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('wfrDlgProgressBox','Loading 10s...','wfrDlgProgressBox');
            win.Controls.Progress.BeginProcess();
            setTimeout(function() {
              win.Close();
            }, 10000);
          }
        }
      },
      DlgWaitBox: {
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgWaitBox'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('wfrDlgWaitBox','Stay tuned 10s...','wfrDlgWaitBox');
            setTimeout(function() {
              win.Close();
            }, 10000);
          }
        }
      },
      DlgAbout: {
        Type: 'wfrButton',
        Data: {
          Text: 'wfrDlgAbout'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('wfrDlgAbout',undefined,undefined,undefined, { DlgIcon: { Src: ngApp.AppPath+'image.png', L:0, T:0, W: 120, H: 166 } });
          }
        }
      }
      
    }
  }
    
  });
}
