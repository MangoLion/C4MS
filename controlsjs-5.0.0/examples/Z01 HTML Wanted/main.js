var AppForm = null;

function ngMain() 
{
  AppForm = new ngControls({
  
    Panel1: {
      id: 'ctrl_panel', // Specified exact DIV id. 
                        // Control's DIV is not created if already exists 
                        // in HTML (see index.html).
      Type: 'wePanel',
      L: 0, T: 0, W: 150, H: 80,
      Controls: {      
        Label1: {
          Type: 'weLabel',
          L: 0, T: 0,
          Data: {
            Text: 'Enter Name:'
          }
        },
        
        Edit1: { 
          Type: 'weEdit',
          L:0, T: 40, W: 150, 
          Data: {
            Text: 'John'
          }
        }
      }
    },    
    Button1: 
    {                            
      id: 'ctrl_button', // Link with existing DIV id.
      Type: 'weButton',
      L: 0, T: 0,      
      Data: {
        Text: 'Say Hello'
      },      
      Events: {
        OnClick: function(e) {
          alert('Hello, '+AppForm.Edit1.GetText()+'!');
        }
      }
    } 

  });
  AppForm.Update();
}
