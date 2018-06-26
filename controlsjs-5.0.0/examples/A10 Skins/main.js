var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({

    weSkin: {
      Type: 'weCaption',
      L: 10, T: 10,
      Data: {
        Text: 'WinEight Skin'
      }
    },  
    wePanel1: 
    { 
      Type: 'wePanel',
      L:10, T: 40, W: 170, H: 280,
      Controls: {
        weCheckBox1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
          Data: {
            Text: 'weCheckBox',
            Checked: 1
          }
        },
        weRadioButton1: 
        {
          Type: 'weRadioButton',
          L: 0, T: 40,
          Data: {
            Text: 'weRadioButton'
          }
        },
        weButton1: 
        {
          Type: 'weButton',
          L: 0, T: 80, W: 160,
          Data: {
            Text: 'weButton'
          }
        },
        weEdit1: 
        {
          Type: 'weEdit',
          L: 0, T: 120, W: 160,
          Data: {
            Text: 'weEdit'
          }
        },
        weMemo1: 
        {
          Type: 'weMemo',
          L: 0, T: 160, W: 160, H: 90,
          Data: {
            Text: 'weMemo'
          }
        }
      }
    }, 

    wxpSkin: {
      Type: 'weCaption',
      L: 220, T: 10,
      Data: {
        Text: 'WinXP Skin'
      }
    },  
    stdPanel1: 
    { 
      Type: 'stdPanel',
      L:220, T: 40, W: 170, H: 280,
      Controls: {
        stdCheckBox1: 
        {
          Type: 'stdCheckBox',
          L: 0, T: 10,
          Data: {
            Text: 'stdCheckBox',
            Checked: 1
          }
        },
        stdRadioButton1: 
        {
          Type: 'stdRadioButton',
          L: 0, T: 50,
          Data: {
            Text: 'stdRadioButton'
          }
        },
        stdButton1: 
        {
          Type: 'stdButton',
          L: 0, T: 85, W: 160,
          Data: {
            Text: 'stdButton'
          }
        },
        stdEdit1: 
        {
          Type: 'stdEdit',
          L: 0, T: 125, W: 160,
          Data: {
            Text: 'stdEdit'
          }
        },
        stdMemo1: 
        {
          Type: 'stdMemo',
          L: 0, T: 160, W: 160, H: 90,
          Data: {
            Text: 'stdMemo'
          }
        }
      }
    }, 

    wfrSkin: {
      Type: 'weCaption',
      L: 440, T: 10,
      Data: {
        Text: 'Wireframe Skin'
      }
    },  
    wfrPanel1: 
    { 
      Type: 'wfrPanel',
      L:440, T: 40, W: 170, H: 280,
      Controls: {
        wfrCheckBox1: 
        {
          Type: 'wfrCheckBox',
          L: 0, T: 8,
          Data: {
            Text: 'wfrCheckBox',
            Checked: 1
          }
        },
        wfrRadioButton1: 
        {
          Type: 'wfrRadioButton',
          L: 0, T: 48,
          Data: {
            Text: 'wfrRadioButton'
          }
        },
        wfrButton1: 
        {
          Type: 'wfrButton',
          L: 0, T: 83, W: 160,
          Data: {
            Text: 'wfrButton'
          }
        },
        wfrEdit1: 
        {
          Type: 'wfrEdit',
          L: 0, T: 123, W: 160,
          Data: {
            Text: 'wfrEdit'
          }
        },
        wfrMemo1: 
        {
          Type: 'wfrMemo',
          L: 0, T: 160, W: 160, H: 90,
          Data: {
            Text: 'wfrMemo'
          }
        }
      }
    } 

  });
  AppForm.Update();
}
