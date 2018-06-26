function FillDeviceInfo()
{
  var di=ngGetDeviceInfo();
  var items=[];
  for(var i in di)
  {
    items.push({name: i,value: di[i]});
  }
  AppForm.DeviceInfo.AddItems(items);
}

function TrackChangesClick(e)
{
  ngApp.SetClientParam('track',e.Owner.Checked);
}

function OnGetDeviceInfoText(c,it,col)
{
  switch(col.ID)
  {
    case 'name': return it.name;
    case 'value': 
    {
      var val=it.value;
      if(typeof val === 'boolean') return val ? ngTxt('yes') : ngTxt('no');      
      return val;
    }
  }
}

var ChangeQueryWin = null;

function DeviceChangedQuery(newdevice)
{
  if(AppForm.CheckDeviceChange.Checked!=1) return false;
  
  if(!ChangeQueryWin) 
  {
    ChangeQueryWin=ngMessageDlg('weMessageDlg',ngTxt('devicechangedquery'),ngTxt('ngAppName'), function(c) 
    { 
      if(c.DialogResult==mbYes)
      {    
        // Reload application (which detects new device)
        ngDeviceReset();
      }
      ChangeQueryWin=null;
      return true; 
    }, { DlgButtons: mbYes | mbNo });
  }
  return false;
}