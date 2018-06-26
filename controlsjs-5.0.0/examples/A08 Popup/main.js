var AppForm = null;

function ngMain() 
{
  AppForm = new ngControls({
  
    Button1: 
    {                            
      Type: 'weButton',
      L: 20, T: 20, W: 120,      
      Data: {
        Text: 'Show Popup'
      },      
      Events: {
        OnClick: function(e) {
          AppForm.PopupPanel.SetVisible(true);
        }
      }
    },
    PopupPanel: 
    {
      Type: 'weColorPanel',
      L: 20, T: 52, W: 220, H: 120,
      Data: {
        IsPopup: true, // Define control as popup
        Visible: false
      },
      Controls: {
        PanelCaption1: {
          Type: 'weText',
          L: 20, T: 20,
          Theme: WE_DARK,
          Data: {
            Text: 'Popup panel'
          }
        }
      },
      Events: {
        OnClickOutside: function(e) { // Optional event, which support any control with IsPopup=true
          return true;
        }
      }       
    } 

  });
  AppForm.Update();
}
