var AppForm = null;

function ngMain()
{
  // Register my control
  ngRegisterControlType('myItemsEdit', {
    Type: 'ngFrame', // Frame holds references to its children
    W: 300, H: 40,
    Controls: {
      CanOrder: {
        Type: 'weCheckBox',
        L: 0, T: 0,
        Events: {
          OnCheckChanged: function(c) {
            c.Owner.Amount.SetEnabled(c.Checked==1);
          }
        }        
      },
      Amount: {
        Type: 'weEditNum',
        L: 40, T: 0, W: 100,
        Data: {
          Enabled: false,
          DefaultNum: 0,
          MinNum: 0
        },
        Events: {
          OnTextChanged: function(c) {
            c.Owner.Remove.SetVisible(c.GetNum()!=0);            
          }
        }
      },
      Units: {
        Type: 'weLabel',
        L: 150, T: 0,
        Data: {
          Text: 'items'
        }
      },
      Remove: {
        Type: 'weButton',
        L: 210, T: 0, W: 90,
        Data: {
          Text: 'Remove',
          Visible: false
        },
        Events: {
          OnClick: function(e) {
            var frame=e.Owner.Owner;            
            frame.Amount.SetNum(0);
            frame.CanOrder.Check(0);
          }
        }
      }    
    }
  });
    
  AppForm = new ngControls({

    OrderLabel: {
      Type: 'weLabel',
      L: 20, T: 20,
      Data: {
        Text: 'Order #:'
      }
    }, 
    OrderNum: 
    {
      Type: 'weEdit',
      L: 140, T: 20, W: 260
    },
    PencilsLabel: {
      Type: 'weLabel',
      L: 20, T: 60,
      Data: {
        Text: 'Pencils:'
      }
    }, 
    Pencils: 
    {
      Type: 'myItemsEdit', // My control
      L: 100, T: 60
    },
    PensLabel: {
      Type: 'weLabel',
      L: 20, T: 100,
      Data: {
        Text: 'Pens:'
      }
    }, 
    Pens: 
    {
      Type: 'myItemsEdit', // My control
      L: 100, T: 100
    },
    RulersLabel: {
      Type: 'weLabel',
      L: 20, T: 140,
      Data: {
        Text: 'Rulers:'
      }
    }, 
    Rulers: 
    {
      Type: 'myItemsEdit', // My control
      L: 100, T: 140
    }

  });
  AppForm.Update();
}
