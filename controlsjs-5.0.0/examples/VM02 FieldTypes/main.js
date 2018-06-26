var AppForm = null;
var ViewModels = null;

if(typeof ngc_Lang == 'undefined') ngc_Lang=new Array();
if(typeof ngc_Lang['en'] == 'undefined') ngc_Lang['en']=new Array();

// You can define language resources for ViewModel properties display names: 
// The format is: 'VM.<namespace>.<propertyid>'
ngc_Lang['en']['VM.myvmodelns.f_bool'] = 'Boolean:';
ngc_Lang['en']['VM.myvmodelns.f_integer'] = 'Integer:';
ngc_Lang['en']['VM.myvmodelns.f_float'] = 'Float:';
ngc_Lang['en']['VM.myvmodelns.f_sbyte'] = 'Signed byte:';
ngc_Lang['en']['VM.myvmodelns.f_byte'] = 'Byte:';
ngc_Lang['en']['VM.myvmodelns.f_short'] = 'Short:';
ngc_Lang['en']['VM.myvmodelns.f_ushort'] = 'Unsigned short:';
ngc_Lang['en']['VM.myvmodelns.f_long'] = 'Long:';
ngc_Lang['en']['VM.myvmodelns.f_ulong'] = 'Unsigned long:';
ngc_Lang['en']['VM.myvmodelns.f_dec'] = 'Decimal:';
ngc_Lang['en']['VM.myvmodelns.f_string'] = 'String:';
ngc_Lang['en']['VM.myvmodelns.f_string10'] = 'String (max len.10):';
ngc_Lang['en']['VM.myvmodelns.f_timestamp'] = 'Timestamp:';
ngc_Lang['en']['VM.myvmodelns.f_datetime'] = 'Date and time:';
ngc_Lang['en']['VM.myvmodelns.f_date'] = 'Date:';
ngc_Lang['en']['VM.myvmodelns.f_time'] = 'Time:';
ngc_Lang['en']['VM.myvmodelns.f_utctimestamp'] = 'UTC Timestamp:';
ngc_Lang['en']['VM.myvmodelns.f_utcdatetime'] = 'UTC Date and time:';
ngc_Lang['en']['VM.myvmodelns.f_utcdate'] = 'UTC Date:';
ngc_Lang['en']['VM.myvmodelns.f_utctime'] = 'UTC Time:';
ngc_Lang['en']['VM.myvmodelns.f_www'] = 'WWW:';
ngc_Lang['en']['VM.myvmodelns.f_email'] = 'E-mail:';
ngc_Lang['en']['VM.myvmodelns.f_ip4'] = 'IP4:';
ngc_Lang['en']['VM.myvmodelns.f_ip6'] = 'IP6:';
ngc_Lang['en']['VM.myvmodelns.f_currency'] = 'Currency:';
ngc_Lang['en']['VM.myvmodelns.f_distance'] = 'Distance:';
ngc_Lang['en']['VM.myvmodelns.f_area'] = 'Area:';
ngc_Lang['en']['VM.myvmodelns.f_siunits'] = 'SI Units:';
ngc_Lang['en']['VM.myvmodelns.f_minutes'] = 'Minutes:';
ngc_Lang['en']['VM.myvmodelns.f_seconds'] = 'Seconds:';
ngc_Lang['en']['VM.myvmodelns.f_bytes'] = 'Bytes:';

// --- Application -------------------------------------------------------------

function ngMain()
{
  ViewModels = new ngControls({

    MyViewModel: {
      Type: 'ngSysViewModel',
      Namespace: 'myvmodelns',
      
      ID: 'myvmodel',
      FieldDefs: [
        new ngFieldDef_Bool('f_bool', {DefaultValue:true}),
        new ngFieldDef_Integer('f_integer', {DefaultValue:-ULONG_MAX}),
        new ngFieldDef_Float('f_float', {DefaultValue:123.4}),
        new ngFieldDef_SByte('f_sbyte', {DefaultValue:SBYTE_MAX}),
        new ngFieldDef_Byte('f_byte', {DefaultValue:BYTE_MAX}),
        new ngFieldDef_Short('f_short', {DefaultValue:SHORT_MAX}),
        new ngFieldDef_UShort('f_ushort', {DefaultValue:USHORT_MAX}),
        new ngFieldDef_Long('f_long', {DefaultValue:LONG_MAX}),
        new ngFieldDef_ULong('f_ulong', {DefaultValue:ULONG_MAX}),
        new ngFieldDef_Decimal('f_dec', {Size:10,Precision:3,DefaultValue:1234567.891}),
        new ngFieldDef_String('f_string', {DefaultValue:'text'}),
        new ngFieldDef_String('f_string10', {Size:10,DefaultValue:'text'}),
        new ngFieldDef_Timestamp('f_timestamp', {DefaultValue:ng_toUnixTimestamp(new Date())}),
        new ngFieldDef_DateTime('f_datetime', {DefaultValue:new Date()}),
        new ngFieldDef_Date('f_date', {DefaultValue:new Date()}),
        new ngFieldDef_Time('f_time', {DefaultValue:new Date()}),
        new ngFieldDef_UTCTimestamp('f_utctimestamp', {DefaultValue: ng_toUnixTimestamp(ng_toUTCDate(new Date()))}),
        new ngFieldDef_UTCDateTime('f_utcdatetime', {DefaultValue:ng_toUTCDate(new Date())}),
        new ngFieldDef_UTCDate('f_utcdate', {DefaultValue:ng_toUTCDate(new Date())}),
        new ngFieldDef_UTCTime('f_utctime', {DefaultValue:ng_toUTCDate(new Date())}),
        new ngFieldDef_WWW('f_www', {DefaultValue:'http://www.controlsjs.com'}),
        new ngFieldDef_Email('f_email', {DefaultValue:'test@controlsjs.com'}),
        new ngFieldDef_IP4('f_ip4', {DefaultValue:'192.168.0.1'}),
        new ngFieldDef_IP6('f_ip6', {DefaultValue:'fe80::202:b3ff:fe1e:8329'}),
        new ngFieldDef_Currency('f_currency', 'Kč',{DefaultValue:999.9}),
        new ngFieldDef_SIUnits('f_siunits', 'g', {DefaultValue:10.}, ['m','k']),
        new ngFieldDef_Distance('f_distance', {DefaultValue:100.1}),
        new ngFieldDef_Area('f_area', {DefaultValue:400.4}),
        new ngFieldDef_Minutes('f_minutes', {DefaultValue:100}),
        new ngFieldDef_Seconds('f_seconds', {DefaultValue:300}),
        new ngFieldDef_Bytes('f_bytes', {DefaultValue:1024*500})
      ]
    }
    
  });
    
  AppForm = new ngControls({
  
      EditForm: {
        Type: 'weViewModelForm',
        L: 20, T: 20, R: 20, B: 20,
        ScrollBars: ssAuto,
        ViewModel: 'myvmodel'
      }
              
  });
  
  // Create ViewModelForm Controls dynamically: 
  var defs={};
  var y=0,x=0,cnt=0;
  for(var i in ViewModels.MyViewModel.ViewModel)
  {
    if(!ngIsFieldDef(ViewModels.MyViewModel.ViewModel[i])) continue;
    x=(cnt % 2 ? 350 : 0);
    defs['Label'+i]={
      Type: 'weLabel',
      L: x, T: y,              
      DataBind: 'Text: '+i+'.DisplayName'
    };
    defs['Field'+i]={
      Type: 'weEditField',
      L: x+140, T: y, W: 170,              
      DataBind: 'Value: '+i+', InstantUpdate: true'
    };
    defs['Value'+i]={
      Type: 'weLabel',
      L: x, T: y+30, W: 310,              
      DataBind: 'Data: '+i,
      Data: {
        TextAlign: 'right'
      },
      Events: {
        // Display underlying field value
        OnViewModelDataChanged: function(c,oldval) {
          var d=c.ViewModelData;
          if(ng_typeDate(d)) d=ng_FormatDateTime(d,'d.M.yyyy HH:mm:ss'); 
          c.SetText('('+d+')');
        }
      }
    };
    if(cnt % 2) y+=70;
    cnt++;
  }
  AppForm.EditForm.Controls.AddControls(defs);
  AppForm.Update();
}
