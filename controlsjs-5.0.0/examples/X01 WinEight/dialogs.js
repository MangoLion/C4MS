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
    Type: 'weToolBar',
    L: 15, T: 15, R: 15, B: 15, 
    Data: {
      HPadding: 10,
      VPadding: 10
    },
    Controls: {
      DlgMessageBox: {
        Type: 'weButton',
        Data: {
          Text: 'weDlgMessageBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('weDlgMessageBox','Test message!','weDlgMessageBox', function(c) { return true; });
          }
        }
      },
      DlgInputBox: {
        Type: 'weButton',
        Data: {
          Text: 'weDlgInputBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('weDlgInputBox','Enter text:','weDlgInputBox', function(c) { 
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
        Type: 'weButton',
        Data: {
          Text: 'weDlgDropDownBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('weDlgDropDownBox','Enter text:','weDlgDropDownBox', function(c) { return true; }, { DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgDropDownListBox: {
        Type: 'weButton',
        Data: {
          Text: 'weDlgDropDownListBox'
        },
        Events: {
          OnClick: function(e) {
            ngMessageDlg('weDlgDropDownListBox','Select item:','weDlgDropDownListBox', function(c) { return true; }, { DlgHint: 'Select from list', DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgMemoBox: {
        Type: 'weButton',
        Data: {
          Text: 'weDlgMemoBox'
        },
        Events: {
          OnClick: function(e) {
//            ngMessageDlg('weDlgMemoBox','Enter text:','weDlgMemoBox', function(e) { return true; }, { DlgCheckBox: { Text: 'Test', Checked: 1 } });
            ngMessageDlg('weDlgMemoBox','Enter text:','weDlgMemoBox', function(e) { return true; });
          }
        }
      },
      DlgListBox: {
        Type: 'weButton',
        Data: {
          Text: 'weDlgListBox'
        },
        Events: {
          OnClick: function(e) {
//            ngMessageDlg('weDlgListBox','Select item:','weDlgListBox', function(e) { return true; }, { DlgItems: [ 'Item1', 'Item2' ], DlgCheckBox: { Text: 'Test', Checked: 1 } });
            ngMessageDlg('weDlgListBox','Select item:','weDlgListBox', function(e) { return true; }, { DlgItems: [ 'Item1', 'Item2' ] });
          }
        }
      },
      DlgProgressBox: {
        Type: 'weButton',
        Data: {
          Text: 'weDlgProgressBox'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('weDlgProgressBox','Loading 10s...','weDlgProgressBox');
            win.Controls.Progress.BeginProcess();
            setTimeout(function() {
              win.Close();
            }, 10000);
          }
        }
      },
      DlgWaitBox: {
        Type: 'weButton',
        Data: {
          Text: 'weDlgWaitBox'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('weDlgWaitBox','Stay tuned 10s...','weDlgWaitBox');
            setTimeout(function() {
              win.Close();
            }, 10000);
          }
        }
      },
      DlgAbout: {
        Type: 'weButton',
        Data: {
          Text: 'weDlgAbout'
        },
        Events: {
          OnClick: function(e) {
            var win=ngMessageDlg('weDlgAbout');
          }
        }
      }
      
    }
  }
    
  });
}
