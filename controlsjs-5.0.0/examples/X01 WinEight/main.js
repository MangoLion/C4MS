/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

// --- Variables ---------------------------------------------------------------
var AppForm = null;

// --- String resources --------------------------------------------------------
if(typeof ngc_Lang == 'undefined') ngc_Lang=new Array();

if(typeof ngc_Lang['en'] == 'undefined') ngc_Lang['en']=new Array();
ngc_Lang['en']['ngAppCopyright']='Copyright &copy; 2014 Position s.r.o.';

// --- Application -------------------------------------------------------------
var AvailableSchemes = [
  'Blue',
  'LtBlue',
  'Green',
  'Yellow',
  'Maroon',
  'Gray',
  'LtGray',
  'DkGray',
  'White',
  'MyAppColor'
];

var AvailableBackgrounds = [
  'Auto',
  'Blue',
  'LtBlue',
  'Green',
  'Yellow',
  'Maroon',
  'Gray',
  'LtGray',
  'DkGray',
  'White',
  'MyAppColor',
  'None'
];

function AppEnableChildren(owner, parent, state)
{
  var c;
  if(typeof parent.ControlsPanel != 'undefined') parent=parent.ControlsPanel;
  for(var i=0;i<parent.ChildControls.length;i++) 
  { 
    c=parent.ChildControls[i];
    if(c!=owner) c.SetEnabled(state);
  } 
}

function ParamsChanged()
{
  var page=parseInt(ngVal(ngApp.Param('page'),0));
  if(page<0) page=0;
  if(page>=AppForm.MainPages1.Pages.length) page=AppForm.MainPages1.Pages.length-1;
  AppForm.MainPages1.SetPage(parseInt(page));
}

// Dynamicaly creates controls after page is selected 
function DynamicInitPage(c,p)
{
  var pg=c.Pages[p];
  if(!ngVal(pg.Initialized,false))
  {
    if((pg.ControlsDef)&&(pg.ControlsPanel)) c.Owner.AddControls(pg.ControlsDef(),pg.ControlsPanel);
    switch(pg.id)
    {
      case 'pagelists': InitPageListsData(); break;
    }
    pg.Initialized=true;
  }
  return true;
}

function ngInit()
{
  var th=ng_GET('theme');
  if(ngVal(th,'')!='') WinEightControls.Theme = (th == WE_LIGHT ? WE_LIGHT : WE_DARK);
  var cscheme=ng_GET('colorscheme');
  if(ng_inArray(cscheme,AvailableSchemes))
    WinEightControls.ColorScheme=cscheme;

  var cback=ng_GET('backgroundcolor');
  if(ng_inArray(cback,AvailableBackgrounds))
    WinEightControls.BackgroundColor=cback;
  
}

function ngMain()
{
  AppForm = new ngControls({
  
    MainMenu1: AppFormMainMenu(),
    AppMenu1: AppApplicationMenu(),
    MainPages1: 
    { 
      Type: 'weSections',
      L:0, T: 50, R: 0, B:0,
      Events: {
        OnPageChanging: DynamicInitPage,
        OnPageChanged: function(e) { ngApp.SetClientParam('page',this.Page); }
      }, 
      Pages: 
      [
        {
          id: 'buttons',
          Text: 'Buttons and Edit',
          ControlsDef: AppFormButtons
        },
        {
          id: 'lists',
          Text: 'Lists',
          ControlsDef: AppFormLists
        },
        {
          id: 'pagelists',
          Text: 'Page Lists',
          ControlsDef: AppFormPageLists
        },
        {
          id: 'pages',
          Text: 'Pages',
          ControlsDef: AppFormPages
        },
        {
          id: 'layout',
          Text: 'Layout',
          ControlsPanel: {
            ScrollBars: ssNone
          },
          ControlsDef: AppFormLayout
        },
        {
          id: 'window',
          Text: 'Window',
          ControlsDef: AppFormWindow
        },
        {
          id: 'dialogs',
          Text: 'Dialogs',
          ControlsDef: AppFormDialogs
        },
        {
          id: 'menus',
          Text: 'Menus',
          ControlsDef: AppFormMenu
        },
        {
          id: 'misc',
          Text: 'Misc',
          ControlsDef: AppFormMisc
        }
      ]
    },
    SchemeThemePanel: {
      Type: 'weDropPanel',
      L: 0, B: 0, R: 0, H: 100,
      DroppedDown: true,
      Theme: WE_DARK,
      Events: {
        OnUpdated: function(c) {
          if(AppForm.MainPages1.SetBounds({B: c.Bounds.H })) AppForm.MainPages1.Update();
        }
      },
      Controls: {
        ThemeCaption: 
        { 
          Type: 'weLabel',
          L:30, T: 15,           
          Theme: WE_DARK,
          Data: {
            Text: 'Theme:'
          }
        }, 
        ThemeLight: 
        { 
          Type: 'weRadioButton',
          L:100, T: 15, 
          Theme: WE_DARK,
          Data: {
            Text: 'Light',
            RadioGroup: 'theme',
            Checked: (WinEightControls.Theme == WE_LIGHT ? 1 : 0)      
          }
        }, 
        ThemeDark: 
        { 
          Type: 'weRadioButton',
          L:180, T: 15, 
          Theme: WE_DARK,
          Data: {
            Text: 'Dark',
            RadioGroup: 'theme',
            Checked: (WinEightControls.Theme == WE_DARK ? 1 : 0)      
          }
        },
        SchemeCaption: 
        { 
          Type: 'weLabel',
          L:280, T: 15, 
          Theme: WE_DARK,
          Data: {
            Text: 'Scheme:'
          }
        }, 
        Scheme: 
        { 
          Type: 'weDropDownList',
          L:350, T: 15, W: 150, 
          Theme: WE_DARK,
          Data: {
            Text: WinEightControls.ColorScheme
          },
          DropDown: {
            Type: 'weList',
            Data: {
              Items: ng_CopyVar(AvailableSchemes)
            }
          }
        },      

        BackgroundCaption: 
        { 
          Type: 'weLabel',
          L:540, T: 15, 
          Theme: WE_DARK,
          Data: {
            Text: 'Background:'
          }
        }, 
        Background: 
        { 
          Type: 'weDropDownList',
          L:640, T: 15, W: 150, 
          Theme: WE_DARK,
          Data: {
            Text: WinEightControls.BackgroundColor
          },
          DropDown: {
            Type: 'weList',
            Data: {
              Items: ng_CopyVar(AvailableBackgrounds)
            }
          }
        },      
        SetThemeScheme: 
        { 
          Type: 'weButton',
          Theme: WE_DARK,
          L:830, T: 15, 
          Data: {
            Text: 'Set Theme/Scheme'
          },
          Events: {
            OnClick: function(e) {
              ngApp.SetClientParam('theme',AppForm.ThemeLight.Checked == 1 ? WE_LIGHT : WE_DARK);
              ngApp.SetClientParam('colorscheme',AppForm.Scheme.GetText());
              ngApp.SetClientParam('backgroundcolor',AppForm.Background.GetText());
              window.location.reload();              
            }
          }
        }
      }
    } 
  });
  ngApp.PersistParam('theme');
  ngApp.PersistParam('colorscheme');
  ngApp.PersistParam('backgroundcolor');
  ngApp.PersistParam('page');
  ParamsChanged();
  if(AppForm.MainPages1.Page==0) AppForm.MainPages1.OnPageChanging(AppForm.MainPages1,0); // first page, fire event manualy 
  ngApp.SetOnParamsChanged(ParamsChanged);
  AppForm.Update();
}
