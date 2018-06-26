/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

if(typeof ngc_Lang == 'undefined') ngc_Lang=new Array();

if(typeof ngc_Lang['en'] == 'undefined') ngc_Lang['en']=new Array();
ngc_Lang['en']['ngAppCopyright']='Copyright &copy; 2014 Position s.r.o.';

var AppForm = null;

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

function ngMain()
{
  AppForm = new ngControls({
    MainMenu1: AppFormMainMenu(),
    AppMenu1: AppApplicationMenu(),
    MainPages1: 
    { 
      Type: 'wfrPages',
      L:10, T: 40, R: 10, B:10,
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
//          Visible: false,
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
    }
  });
  ParamsChanged();
  if(AppForm.MainPages1.Page==0) AppForm.MainPages1.OnPageChanging(AppForm.MainPages1,0); // first page, fire event manualy 
  ngApp.PersistParam('page');
  ngApp.SetOnParamsChanged(ParamsChanged);
  AppForm.Update();
}
