if(typeof ngAppUnits === 'undefined') ngAppUnits = new Array();
ngAppUnits.push({ OnInit: function() 
{
  // --- English string resources ------------------------------------------------
  if(typeof ngc_Lang == 'undefined') ngc_Lang=new Array();
  if(typeof ngc_Lang['en'] == 'undefined') ngc_Lang['en']=new Array();
  
  ngc_Lang['en']['ngAppName'] = 'Multi-device Example';
  ngc_Lang['en']['appdeviceinfo'] = 'Device Info:';
  ngc_Lang['en']['yes'] = 'Yes';
  ngc_Lang['en']['no'] = 'No';
  ngc_Lang['en']['tipmessage'] = 'Tip: Devices are detected by size of browser window. Try smaller window with "landscape" or "portrait" orientation for mobile devices. Bigger window is detected as desktop device.';
  ngc_Lang['en']['devicechangedquery'] = 'Device change detected. Load optimized version for this device?';
  
  ngc_Lang['en']['AppCaption'] = 'Desktop';
  
  // [Desktop device]
  if(typeof ngc_Lang['DEV_mydevice_desktop'] == 'undefined') ngc_Lang['DEV_mydevice_desktop']=new Array();
  if(typeof ngc_Lang['DEV_mydevice_desktop']['en'] == 'undefined') ngc_Lang['DEV_mydevice_desktop']['en']=new Array();
  
  ngc_Lang['DEV_mydevice_desktop']['en']['res_appdeviceinfo'] = {
    CheckDeviceChange: {
      Type: 'weCheckBox',
      L: 0, T: 0,
      Data: {
        Checked: 0,
        Text: 'Track device changes'
      },
      Events: {
        OnClick: TrackChangesClick
      }
    },
    DeviceInfoCap: {
      Type: 'weCaption',
      L: 15, T: 50, 
      Data: {
        ngText: 'appdeviceinfo'
      }
    },    
    UserAgent: {
      Type: 'weEdit',    
      L:0, T: 90, R: 0,
      Data: {
        ReadOnly: true
      }
    },
    DeviceInfo: {
      Type: 'weList',
      L: 0, T: 130, R: 0, B: 60,
      Data: {
        Columns: [
                         new ngListCol('name', 'Name', 'left', 200), 
                         new ngListCol('value', 'Value', 'left')
                 ]
      },
      Events: {
        OnGetText: OnGetDeviceInfoText
      }    
    },
    Tip: {
      Type: 'weText',
      L:15,B:20,R:15
    }
  };
  
  ngc_Lang['DEV_mydevice_desktop']['en']['AppCaption'] = 'Desktop';
  
  // [Mobile device]
  if(typeof ngc_Lang['DEV_mydevice_mobile'] == 'undefined') ngc_Lang['DEV_mydevice_mobile']=new Array();
  if(typeof ngc_Lang['DEV_mydevice_mobile']['en'] == 'undefined') ngc_Lang['DEV_mydevice_mobile']['en']=new Array();
  
  ngc_Lang['DEV_mydevice_mobile']['en']['res_appdeviceinfo'] = {
    CheckDeviceChange: {
      Type: 'weCheckBox',
      L: 0, T: 0,
      Data: {
        Checked: 0,
        Text: 'Track device changes'
      },
      Events: {
        OnClick: TrackChangesClick
      }
    },
    DeviceInfoCap: {
      Type: 'weCaption',
      L: 15, T: 50, 
      Data: {
        ngText: 'appdeviceinfo'
      }
    },    
    UserAgent: {
      Type: 'weEdit',    
      L:0, T: 90, R: 0,
      Data: {
        ReadOnly: true
      }
    },
    DeviceInfo: {
      Type: 'weList',
      L: 0, T: 130, R: 0, B: 100,
      Data: {
        Columns: [
                         new ngListCol('name', 'Name', 'left', 200), 
                         new ngListCol('value', 'Value', 'left')
                 ]
      },
      Events: {
        OnGetText: OnGetDeviceInfoText
      }    
    },
    Tip: {
      Type: 'weSmallText',
      L:15,B:20,W:260
    }
  };

  ngc_Lang['DEV_mydevice_mobile']['en']['AppCaption'] = 'Mobile';
     
  // [Mobile landscape device]
  if(typeof ngc_Lang['DEV_mydevice_mobile_landscape'] == 'undefined') ngc_Lang['DEV_mydevice_mobile_landscape']=new Array();
  if(typeof ngc_Lang['DEV_mydevice_mobile_landscape']['en'] == 'undefined') ngc_Lang['DEV_mydevice_mobile_landscape']['en']=new Array();

  ngc_Lang['DEV_mydevice_mobile_landscape']['en']['res_appdeviceinfo'] = {
    CheckDeviceChange: {
      Type: 'weCheckBox',
      L: 0, T: 0,
      Data: {
        Checked: 0,
        Text: 'Track device changes'
      },
      Events: {
        OnClick: TrackChangesClick
      }
    },
    DeviceInfoCap: {
      Type: 'weText',
      L: 15, T: 46, 
      Data: {
        ngText: 'appdeviceinfo'
      }
    },    
    UserAgent: {
      Type: 'weEdit',    
      L: 100, T: 40, R: 0,
      Data: {
        ReadOnly: true
      }
    },
    DeviceInfo: {
      Type: 'weList',
      L: 0, T: 80, R: 0, B: 60,
      Data: {
        Columns: [
                         new ngListCol('name', 'Name', 'left', 200), 
                         new ngListCol('value', 'Value', 'left')
                 ],
        ShowHeader: false
      },
      Events: {
        OnGetText: OnGetDeviceInfoText
      }    
    },
    Tip: {
      Type: 'weSmallText',
      L:15,B:20,R:15
    }
  };

  ngc_Lang['DEV_mydevice_mobile_landscape']['en']['AppCaption'] = 'Mobile (landscape)';
  
}});