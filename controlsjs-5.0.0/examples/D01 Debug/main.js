// Note:
// Debug is enabled automatically when using debug version of controls.js

var AppForm = null;

function ngInit()
{
  ngDEBUGLOG('Example initialized.');
}

function ngMain() 
{
  AppForm = new ngControls({
  
    ToolBar1: {
      Type: 'ngToolBar',
      L: 20, T: 20, R: 20,
      Data: {
        HPadding: 10
      },
      Controls: {
        Button1: 
        {                            
          Type: 'weButton',
          Data: {
            Text: 'Throw Exception'
          },      
          Events: {
            OnClick: function(e) {
              try
              {
                nonexistentfnc();
              }
              catch(e)
              {
                ngDEBUGERROR('Caught exception: %o',e);
              }
            }
          }
        },
        Button2: 
        {                            
          Type: 'weButton',
          Data: {
            Text: 'Test Assertion'
          },      
          Events: {
            OnClick: function(e) {
              ngASSERT((1+1)==3,'1+1 is not 3');
            }
          }
        } 
         
      }
    },
    Label1: {
      Type: 'weLabel',
      L: 20, T: 50,
      Data: {
        Text: 'Tip: Open console in browser to see debug messages.'
      }
    }     
  });
  AppForm.Update();
  ngDEBUGLOG('Example started.');
}
