var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({
    AppType: {
      L: 20, T: 20,       
      Type: 'weTitle',
      Data: {
        ngText: 'AppCaption'
      }
    },
    AppPanel: {     
      Type: 'wePanel',
      L: 20, T: 80, R: 20, B: 20,
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
