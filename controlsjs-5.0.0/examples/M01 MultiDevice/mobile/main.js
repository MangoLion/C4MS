var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({
  
    AppGroup: {
      L: 5, T: 5, R: 5, B: 5,      
      Type: 'weGroup',
      Data: {
        ngText: 'AppCaption'
      },
      Controls: ngRes('res_appdeviceinfo')
    } 

  });
  ngApp.PersistParam('track');
  AppForm.CheckDeviceChange.Check(ng_GET('track')==1 ? 1 : 0);
  FillDeviceInfo();
  AppForm.UserAgent.SetText(navigator.userAgent);
  AppForm.Tip.SetText(ngTxt('tipmessage'));
  AppForm.Update();
  ngApp.OnDeviceChanged = DeviceChangedQuery;
}
