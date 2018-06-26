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
    Type: 'stdDialog',
    L:0, T: 0, W: 200, H:220,
    Data: {
      Text: 'stdDialog',
      DisposeOnClose: true
    },
    Controls: {
      Label5: {
        Type: 'stdLabel',
        L: 50, T: 20, W: 100,
        Data: {
          TextAlign: 'center',
          Text: 'stdProgressBar'
        }
      },
      Progress1: {
        Type: 'stdProgressBar',
        L: 20, T: 40, W: 160, H:10,
        Data: {
          Position: 30
          //Smooth: true
        }
      },
      ProgressAnim1: {
        Type: 'stdCheckBox',
        L: 20, T: 64, 
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
        Type: 'stdLabel',
        L: 50, T: 90, W: 100,
        Data: {
          TextAlign: 'center',
          Text: 'stdProgressDot'
        }
      },
      Progress2: {
        Type: 'stdProgressDot',
        L: 20, T: 110, W: 160
      },
      Link1: {
        Type: 'stdLink',
        L: 10, B: 5,
        Data: {
          Text: 'Open new dialog...'
        },
        Events: {
          OnClick: AppOpenFormDialog
        }
      },
      Button3: {
        Type: 'stdButton',
        L: 60, B: 30, W: 80,
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
      Type: 'stdButton',
      L: 10, T: 10,
      Data: {
        Text: 'Show Window'
      },
      Events: {
        OnClick: function(e) { AppForm.Window1.Show(); }
      }
    },
  
    Window1: 
    { 
      Type: 'stdWindow',
      L:10, T: 10, W: 400, H:290,
      CloseBtn: true,
      MaxBtn: true,
      MinBtn: true, 
//      HelpBtn: true,
      Data: { 
//        Moveable: false,
        Img: WinXPControls.Images.Search,
        Text: 'stdWindow',
        MinWidth:170,
        MinHeight:270
      },
      Controls: {
        Text1: {
          Type: 'stdText',
          L: 10, T: 10, R: 150, B: 10,
          Data: {
            TextAlign: 'justify',
            Text: 'stdText<br />Lorem ipsum dolor sit amet consectetuer dui Vestibulum quis risus tincidunt. Ac tellus wisi Quisque Morbi eget Vestibulum condimentum quis semper consequat. Eros sociis ridiculus orci sagittis malesuada lorem a Curabitur volutpat dignissim. Tincidunt ornare interdum adipiscing rhoncus habitasse sit Nulla ut porttitor Phasellus. Facilisis tellus In laoreet elit vitae ante augue laoreet mauris sit. Vitae nonummy laoreet venenatis platea tellus.</p>',
            Alt: 'stdText'
          }
        },
        WinLabel1: {
          Type: 'stdLabel',
          R: 10, T: 10, W: 120,
          Data: {
            TextAlign: 'left',
            Text: 'stdImage'
          }
        },        
        Image1: {
          Type: 'stdImage',
          R: 10, T: 25, 
          Data: {
            Img: { Src: ngApp.AppPath+'image.png', L:0, T:0, W: 120, H: 166 },
            Alt: 'stdImage'
          }
        },
        WinButton1: {
          Type: 'stdButton',
          R: 10, B: 10, W: 110,
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
