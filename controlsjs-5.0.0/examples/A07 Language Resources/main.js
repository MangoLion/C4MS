var AppForm = null;

if(typeof ngc_Lang == 'undefined') ngc_Lang=new Array();

// English resources
if(typeof ngc_Lang['en'] == 'undefined') ngc_Lang['en']=new Array();
ngc_Lang['en']['button_clicked'] = "Click...";

ngc_Lang['en']['myform'] = {
  Panel1: 
  { 
    Type: 'weColorPanel',
    L: '50%', T: '50%', W: 300, H:150,
    ColorScheme: 'Yellow',
    style: {
      marginLeft: '-150px',
      marginTop: '-75px'
    },
    Data: {
      Text: 'Language Switching'
    },
    Controls: {
      SomeText: {
        Type: 'weLabel',
        L: 20, T: 20,
        Data: {
          Text: 'Some application text...'
        }
      },
      SomeButton: {
        Type: 'weButton',
        R: 20, T: 20,
        Data: {
          Text: 'Button'
        },
        Events: {
          OnClick: OnButtonClick
        }
      },
      ToolBar: {
        Type: 'weToolBar',
        L: 20, B: 20, H: 20, W: 200,
        Data: {
          HPadding: 10,
          AutoSize: true
        },
        Controls: {
          EnglishBtn: {
            Type: 'weButton',
            Data: {
              RadioGroup: 1,
              Text: 'English',
              Checked: 1
            },
            Events: {
              OnClick: function(e) { SetLanguage('en'); }
            }
          },
          CzechBtn: {
            Type: 'weButton',
            Data: {
              RadioGroup: 1,
              Text: 'Czech',                
              Checked: 0
            },
            Events: {
              OnClick: function(e) { SetLanguage('cz'); }
            }
          }
        }
      }
    }
  } 
}; 

// Czech resources
if(typeof ngc_Lang['cz'] == 'undefined') ngc_Lang['cz']=new Array();
ngc_Lang['cz']['button_clicked'] = "Klik...";

// "myform"" is used as an resource, define only changes against english version
ngc_Lang['cz']['myform'] = {
  Panel1: 
  { 
    Data: {
      Text: 'Přepínání jazyků'
    },
    Controls: {
      SomeText: {
        Data: {
          Text: 'Nějaký text aplikace...'
        }
      },
      SomeButton: {
        B: 20, T: merge_undefined, W: 80, // changed position and size of button  
        Data: {
          Text: 'Tlačítko'
        }
      },
      ToolBar: {
        Controls: {
          EnglishBtn: {
            Data: {
              Text: 'Anglicky',
              Checked: 0
            }
          },
          CzechBtn: {
            Data: {
              Text: 'Česky',                
              Checked: 1
            }
          }
        }
      }
    }
  } 
};

// -----------------------------------------------------------------------------

function SetLanguage(lang)
{
  ngApp.SetClientParam('lang', lang);
  window.location.reload();
}

function OnButtonClick(e)
{
  alert(ngTxt('button_clicked'));
}

function ngInit()
{
  ngApp.Lang=ngApp.Param('lang');
  ngApp.PersistParam('lang');  
}

function ngMain()
{  
  AppForm = new ngControls(ngRes('myform')); // Create form from resource "myform"
  AppForm.Update();
}
