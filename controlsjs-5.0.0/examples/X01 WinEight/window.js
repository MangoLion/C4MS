/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppOpenFormDialog()
{
  var win=ngCreateWindow({ 
    Type: 'weDialog',
    L:0, T: 0, W: 300, H:350,
    Data: {
      Text: 'weDialog',
      DisposeOnClose: true
    },
    Controls: {
      Label5: {
        Type: 'weLabel',
        L: 20, T: 10, W: 240,
        Data: {
          TextAlign: 'center',
          Text: 'weProgressBar'
        }
      },
      Progress1: {
        Type: 'weProgressBar',
        L: 20, T: 50, W: 240, H:10,
        Data: {
          Position: 30
          //Smooth: true
        }
      },
      ProgressAnim1: {
        Type: 'weCheckBox',
        L: 10, T: 65, 
        Data: {
          Text: 'Process Animation'
        },
        Events: {
          OnClick: function(e) {
            if(this.Checked) e.Owner.Owner.Owner.Controls.Progress1.BeginProcess();
            else             e.Owner.Owner.Owner.Controls.Progress1.EndProcess();
          }
        }
      },
      Label6: {
        Type: 'weLabel',
        L: 20, T: 105, W: 240,
        Data: {
          TextAlign: 'center',
          Text: 'weProgressDot'
        }
      },
      Progress2: {
        Type: 'weProgressDot',
        L: 20, T: 150, W: 240
      },
      Link1: {
        Type: 'weLink',
        L: 10, B: 5,
        Data: {
          Text: 'Open new dialog...'
        },
        Events: {
          OnClick: AppOpenFormDialog
        }
      },
      Button3: {
        Type: 'weButton',
        L: 80, B: 50, W: 120,
        Data: {
          Text: 'OK'
        },
        Events: {
          OnClick: function(e) { e.Owner.Owner.Owner.Close(); }
        }
      }
    }   
  });
  if(win) win.Show();
  return true;
}
function AppFormWindow() 
{
  return ({
    ShowWindow: {
      Type: 'weButton',
      L: 15, T: 15,
      Data: {
        Text: 'Show Window'
      },
      Events: {
        OnClick: function(e) { AppForm.Window1.Show(); }
      }
    },
  
    Window1: 
    { 
      Type: 'weWindow',
      L: 15, T: 15, W: 500, H:350,
      CloseBtn: true,
      MaxBtn: true,
      MinBtn: true, 
//      HelpBtn: true,
      Data: { 
//        Moveable: false,
        Img: WinEightControls.AppIcon('Search'),
        Text: 'weWindow',
        MinWidth:270,
        MinHeight:320
      },
      Controls: {
        Text1: {
          Type: 'weText',
          L: 10, T: 10, R: 150, B: 10,
          Data: {
            TextAlign: 'justify',
            Text: 'weText<br />Lorem ipsum dolor sit amet consectetuer dui Vestibulum quis risus tincidunt. Ac tellus wisi Quisque Morbi eget Vestibulum condimentum quis semper consequat. Eros sociis ridiculus orci sagittis malesuada lorem a Curabitur volutpat dignissim. Tincidunt ornare interdum adipiscing rhoncus habitasse sit Nulla ut porttitor Phasellus. Facilisis tellus In laoreet elit vitae ante augue laoreet mauris sit. Vitae nonummy laoreet venenatis platea tellus.</p>',
            Alt: 'weText'
          }
        },
        WinLabel1: {
          Type: 'weLabel',
          R: 10, T: 10, W: 120,
          Data: {
            TextAlign: 'left',
            Text: 'weImage'
          }
        },        
        Image1: {
          Type: 'weImage',
          R: 10, T: 40, 
          Data: {
            Img: { Src: ngApp.AppPath+'image.png', L:0, T:0, W: 120, H: 166 },
            Alt: 'weImage'
          }
        },
        WinButton1: {
          Type: 'weButton',
          R: 10, B: 10, W: 120,
          Data: {
            Text: 'Open Dialog'
          },
          Events: {
            OnClick: AppOpenFormDialog
          }
        }
      }   
    }
  });
}
