var AppForm = null;

// Language Resources:

if(typeof ngc_Lang == 'undefined') ngc_Lang=new Array();

// English
if(typeof ngc_Lang['en'] == 'undefined') ngc_Lang['en']=new Array();
ngc_Lang['en']['title'] = 'Language Switching';
ngc_Lang['en']['english'] = 'English';
ngc_Lang['en']['czech'] = 'Czech';
ngc_Lang['en']['text'] = 'Some application text...';
ngc_Lang['en']['button'] = 'Button';
ngc_Lang['en']['button_clicked'] = "Click...";

// Czech
if(typeof ngc_Lang['cz'] == 'undefined') ngc_Lang['cz']=new Array();
ngc_Lang['cz']['title'] = 'Přepínání jazyků';
ngc_Lang['cz']['english'] = 'Anglicky';
ngc_Lang['cz']['czech'] = 'Česky';
ngc_Lang['cz']['text'] = 'Nějaký text aplikace...';
ngc_Lang['cz']['button'] = 'Tlačítko';
ngc_Lang['cz']['button_clicked'] = "Klik...";

function SetLanguage(lang)
{
  lang=ngVal(lang,ngApp.Lang);
  if(lang=='cz') AppForm.CzechBtn.Checked=1;
  if(lang=='en') AppForm.EnglishBtn.Checked=1;
  if((ngApp.Lang!=lang)&&(lang!=''))
  {
    // Update URL parameter according to selected language
    ngApp.SetClientParam('lang', lang);
    ngApp.Lang=lang;
    AppForm.Update();
  }
}

function ParamsChanged(app)
{
  // Update language according to URL parameter
  var lang=ngApp.Param('lang');  
  if((lang=='cz')||(lang=='en')) SetLanguage(lang);
}

function OnButtonClick(e)
{
  alert(ngTxt('button_clicked'));
}

function ngInit()
{
  // Get current language from URL parameter  
  ngApp.Lang=ngApp.Param('lang');
  
  // Make URL parameter persistent (allows immediate changes).
  // and register callback for URL parameters changes   
  ngApp.PersistParam('lang');
  ngApp.OnParamsChanged = ParamsChanged;  
}

function ngMain()
{
  AppForm = new ngControls({
  
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
        // Text: 'title'
        // * Static text
         
        // ngText: 'title' 
        // * Static resource text
        // * equivalent to: Text: ngTxt(ngText) )
                
        ngTextD: 'title'
        // * Dynamic resource text
        // * equivalent to:  OnGetText: function() { return ngTxt(this.ngTextD); }; 
      },
      Controls: {
        SomeText: {
          Type: 'weLabel',
          L: 20, T: 20,
          Data: {
            ngTextD: 'text'
          }
        },
        SomeButton: {
          Type: 'weButton',
          R: 20, T: 20,
          Data: {
            ngTextD: 'button'
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
                ngTextD: 'english'
              },
              Events: {
                OnClick: function(e) { SetLanguage('en'); }
              }
            },
            CzechBtn: {
              Type: 'weButton',
              Data: {
                RadioGroup: 1,
                ngTextD: 'czech'                
              },
              Events: {
                OnClick: function(e) { SetLanguage('cz'); }
              }
            }
          }
        }
      }
    } 

  });
  SetLanguage();
  AppForm.Update();
}
