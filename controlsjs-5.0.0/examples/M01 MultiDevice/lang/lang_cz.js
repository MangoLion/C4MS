if(typeof ngAppUnits === 'undefined') ngAppUnits = new Array();
ngAppUnits.push({ OnInit: function() 
{
  // --- Czech string resources --------------------------------------------------
  if(typeof ngc_Lang == 'undefined') ngc_Lang=new Array();
  if(typeof ngc_Lang['cz'] == 'undefined') ngc_Lang['cz']=new Array();
  
  ngc_Lang['cz']['ngAppName'] = 'Příklad podpory různých zařízení';
  ngc_Lang['cz']['appdeviceinfo'] = 'Informace o zařízení';
  ngc_Lang['cz']['yes'] = 'Ano';
  ngc_Lang['cz']['no'] = 'Ne';
  ngc_Lang['cz']['tipmessage'] = 'Tip: Zařízení jsou detekována na základě velikosti okna prohlížeče. Pro mobilní zařízení zkuste menší okno s orientací "na šířku" nebo "na výšku". Větší okno je detekováno jako zařízení typu desktop.';
  ngc_Lang['cz']['devicechangedquery'] = 'Byla detekovaná změna zařízení. Načíst optimalizovanou verzi pro toto zařízení?';
  
  var czform = {
    CheckDeviceChange: {
      Data: {
        Text: 'Sledovat změny zařízení'
      }
    },
    DeviceInfo: {
      Data: {
        Columns: [
                   new ngListCol('name', 'Název', 'left', 200), 
                   new ngListCol('value', 'Hodnota', 'left')
                 ]
      }
    },
    SwitchDevice: {
      Controls: {
        Autodetect: {
          Data: {
            Text: 'Autodetekce'
          }
        },
        Desktop: {
          Data: {
            Text: 'Desktop'
          }
        },
        Mobile: {
          Data: {
            Text: 'Mobil'
          }
        },
        MobileLandscape: {
          Data: {
            Text: 'Mobil (na šířku)'
          }
        }        
      }
    }
  }
  
  // [Desktop device]
  if(typeof ngc_Lang['DEV_mydevice_desktop'] == 'undefined') ngc_Lang['DEV_mydevice_desktop']=new Array();
  if(typeof ngc_Lang['DEV_mydevice_desktop']['cz'] == 'undefined') ngc_Lang['DEV_mydevice_desktop']['cz']=new Array();
  
  ngc_Lang['DEV_mydevice_desktop']['cz']['res_appdeviceinfo'] = czform;
  ngc_Lang['DEV_mydevice_desktop']['cz']['AppCaption'] = 'Desktop';
  
  // [Mobile device]
  if(typeof ngc_Lang['DEV_mydevice_mobile'] == 'undefined') ngc_Lang['DEV_mydevice_mobile']=new Array();
  if(typeof ngc_Lang['DEV_mydevice_mobile']['cz'] == 'undefined') ngc_Lang['DEV_mydevice_mobile']['cz']=new Array();
  
  ngc_Lang['DEV_mydevice_mobile']['cz']['res_appdeviceinfo'] = czform;
  ngc_Lang['DEV_mydevice_mobile']['cz']['AppCaption'] = 'Mobil';
  
  // [Mobile landscape device]
  if(typeof ngc_Lang['DEV_mydevice_mobile_landscape'] == 'undefined') ngc_Lang['DEV_mydevice_mobile_landscape']=new Array();
  if(typeof ngc_Lang['DEV_mydevice_mobile_landscape']['cz'] == 'undefined') ngc_Lang['DEV_mydevice_mobile_landscape']['cz']=new Array();

  var czformls=ng_CopyVar(czform);
  czformls.UserAgent={L:170};
  czformls.DeviceInfo={B:70};

  ngc_Lang['DEV_mydevice_mobile_landscape']['cz']['res_appdeviceinfo'] = czformls;
  ngc_Lang['DEV_mydevice_mobile_landscape']['cz']['AppCaption'] = 'Mobil (na šířku)';
}});