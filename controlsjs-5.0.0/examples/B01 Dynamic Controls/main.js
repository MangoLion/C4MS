var AppForm = null;

function AddControlClick(e)
{
  AppForm.AddControls({    // Create control(s)
    Edit1: {
      Type: 'weEdit',
      L: 20, T: 60, W: 310,
      Data: {
        Hint: 'Dynamic control'
      }
    }
  });
  AppForm.Edit1.Update();  // Draw created control
  
  AppForm.Add1.SetEnabled(false);
  AppForm.Remove1.SetEnabled(true);
}

function RemoveControlClick(e)
{
  AppForm.Edit1.Dispose(); // Destroy control
  delete AppForm.Edit1;    // Remove reference to destroyed control
  
  AppForm.Remove1.SetEnabled(false);
  AppForm.Add1.SetEnabled(true);
}

function ngMain()
{
  AppForm = new ngControls({
  
    Add1: {
      Type: 'weButton',
      L: 20, T: 20, W: 150, 
      Data: {
        Text: 'Add control'
      },
      Events: {
        OnClick: AddControlClick        
      }
    },
    Remove1: {
      Type: 'weButton',
      L: 180, T: 20, W: 150,
      Data: {
        Text: 'Remove control',
        Enabled: false
      },
      Events: {
        OnClick: RemoveControlClick
      }
    } 

  });
  AppForm.Update();
}
