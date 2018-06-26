// --- Variables ---------------------------------------------------------------
var AppForm = null;

// --- String resources --------------------------------------------------------
if(typeof ngc_Lang == 'undefined') ngc_Lang=new Array();

// English
if(typeof ngc_Lang['en'] == 'undefined') ngc_Lang['en']=new Array();
ngc_Lang['en']['ngAppName']='New Application';
ngc_Lang['en']['ngAppCopyright']='Copyright (c) 2014';

// --- Application -------------------------------------------------------------

function ngMain()
{
  AppForm = new ngControls({
  
    NewApplicationCaption1: 
    { 
      Type: 'weCaption',
      L:10, T: 10, 
      Data: {
        Text: 'New Application'
      }
    } 

  });
  AppForm.Update();
}
