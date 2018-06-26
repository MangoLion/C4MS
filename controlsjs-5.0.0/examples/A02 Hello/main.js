var AppForm = null;

function ngMain() 
{
  AppForm = new ngControls({
  
    Label1: {
      Type: 'weLabel',
      L: 20, T: 20,
      Data: {
        Text: 'Name:'
      }
    },
    
    Edit1: { 
      Type: 'weEdit',
      L:80, T: 20, W: 150, 
      Data: {
        Text: 'John'
      }
    },
    
    Button1: 
    {                            
      Type: 'weButton',
      L: 80, T: 60,      
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
