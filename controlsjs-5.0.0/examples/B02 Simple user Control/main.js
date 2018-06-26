var AppForm = null;

function ngMain()
{
  // Register my control
  ngRegisterControlType('myPhoneEdit', {
    Type: 'weEdit',
    Data: {
      Hint: 'Phone Number'
    },
    Events: {
      OnFocus: function(c) {
        if(ng_Trim(c.GetText())==='') c.SetText('+420'); 
      },
      OnBlur: function(c) {
        if(ng_Trim(c.GetText())==='+420') c.SetText('');
      }
    }
  });
    
  AppForm = new ngControls({

    FullNameLabel: {
      Type: 'weLabel',
      L: 20, T: 20,
      Data: {
        Text: 'Full Name:'
      }
    }, 
    FullName: 
    {
      Type: 'weEdit',
      L: 120, T: 20, W: 200
    },
    PhoneLabel: {
      Type: 'weLabel',
      L: 20, T: 60,
      Data: {
        Text: 'Phone:'
      }
    }, 
    Phone: 
    {
      Type: 'myPhoneEdit', // My control
      L: 120, T: 60, W: 200
    },
    CellPhoneLabel: {
      Type: 'weLabel',
      L: 20, T: 100,
      Data: {
        Text: 'Cell phone:'
      }
    }, 
    CellPhone: 
    {
      Type: 'myPhoneEdit', // My control
      L: 120, T: 100, W: 200
    }

  });
  AppForm.Update();
}
