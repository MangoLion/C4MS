var AppForm = null;
var DataSource = null;

function LoadDataClick()
{
  AppForm.List1.BeginUpdate();    
  AppForm.List1.Clear();
  AppForm.Loading1.SetVisible(true);
  AppForm.List1.EndUpdate();
  
  DataSource.sendRequest(ngApp.AppPath+'data.json');
}

function DataLoaded(rpc, data, xmlhttp)
{
  AppForm.Loading1.SetVisible(false);
  AppForm.List1.BeginUpdate();
  AppForm.List1.Clear();
  AppForm.List1.AddItems(data);    
  AppForm.List1.EndUpdate();
}

function ngMain()
{
  DataSource = new ngRDS();
  DataSource.OnReceivedJSON = DataLoaded;
  
  AppForm = new ngControls({
  
    Group1: 
    { 
      Type: 'weGroup',
      L: 20, T: 20, R: 20, B: 20,
      Data: {
        Text: 'Remote DataSource'
      },
      Controls: {
        Button1: {
          Type: 'weButton',
          L: 0, T: 10,
          Data: {
            Text: 'Load data...',
            OnClick: LoadDataClick
          }
        },
        List1: {
          Type: 'weList',
          L: 0, T: 60, B: 0, R: 0,
          Data: {
            SelectType: nglSelectMultiExt,
            Columns: new Array(
                             new ngListCol('fname', 'First Name', 'left',200), 
                             new ngListCol('lname', 'Last&nbsp;Name', 'left'),
                             new ngListCol('age', 'Age', 'left'),
                             new ngListCol('div', 'Division', 'left', 200))
          }
        },
        Loading1: {
          Type: 'weFrame',
          L: 20, T: 120, W: 200, H: 30,
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
