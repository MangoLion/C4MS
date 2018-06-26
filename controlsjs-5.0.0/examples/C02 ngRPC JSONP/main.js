var AppForm = null;
var MyRPC = null;

function ExecuteClick()
{
  // Set request user parameters.
  MyRPC.SetParam('MyParam1',1);
  MyRPC.SetParam('MyParam2',2);
  MyRPC.sendRequest(ngApp.AppPath+'jsonp.js',true/*prevent reading data from cache*/);

  AppForm.List1.BeginUpdate();    
  AppForm.List1.Clear();
  AppForm.Loading1.SetVisible(true);
  AppForm.List1.EndUpdate();
}

function MyCallbackFunction(data)
{
  AppForm.Loading1.SetVisible(false);
  AppForm.List1.BeginUpdate();    
  AppForm.List1.Clear();
  AppForm.List1.AddItems(data);    
  AppForm.List1.EndUpdate();
}

function ngMain()
{
  MyRPC = new ngRPC();
  // You can specify type of communication with server
  // It is recommended to keep default rpcAuto setting.
  // In our case we force rpcScript to pass through
  // same origin access restrictions.
  MyRPC.Type=rpcScript; 
  
  AppForm = new ngControls({
  
    Group1: 
    { 
      Type: 'weGroup',
      L: 20, T: 20, R: 20, B: 20,
      Data: {
        Text: 'Remote Procedure Call'
      },
      Controls: {
        Button1: {
          Type: 'weButton',
          L: 0, T: 10,
          Data: {
            Text: 'Execute...',
            OnClick: ExecuteClick
          }
        },
        List1: {
          Type: 'weList',
          L: 0, T: 60, B: 0, R: 0
        },
        Loading1: {
          Type: 'weFrame',
          L: 10, T: 70, W: 200, H: 30,
          style: {
            zIndex: 100
          },
          Data: {
            Visible: false
          },
          Controls: {
            LoadingDot: {
              Type: 'weProgressDot',
              L: 0, T: 0
            },
            LoadingLabel: {
              Type: 'weText',
              L: 35, T: 0,
              Data: {
                Text: 'Loading data...'
              }
            }
          }
          
        }        
      }
    } 

  });
  AppForm.Update();
}
