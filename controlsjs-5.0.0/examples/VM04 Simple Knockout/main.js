var AppForm = null;

// Define simple Knockout.js model 
function SimpleKnockoutModel()
{
  this.FIELD1 = ko.observable('KO');
  this.FIELD2 = ko.observable('View');
  this.FIELD3 = ko.observable('Model');
  
  // Extend ViewModel with computed properties
  this.computed    = ko.computed({
    read: function() {        
     return ng_Trim(this.FIELD1()+' '+this.FIELD2()+' '+this.FIELD3());    
    }, 
    write: function(value) {
      var arr=value.split(' ');
      for(var i=arr.length-1;i>=0;i--)
        if(ng_Trim(''+arr[i])=='') arr.splice(i,1);
      if(arr.length>0) this.FIELD1(arr[0]);
      if(arr.length>1) this.FIELD2(arr[1]);
      if(arr.length>2) this.FIELD3(arr[2]);             
    },
    owner: this});

  // Controls.js provides new helpers for fast creation of computed properties
  this.greeting    = ko.ng_sprintf(this,"%s-%s-%s",'FIELD1','FIELD2','FIELD3');
  this.matches     = ko.ng_matches(this,'FIELD1','KO','FIELD2','View','FIELD3','Model');
  this.changed     = ko.ng_changed(this,'FIELD1','FIELD2','FIELD3'); 
  this.dataversion = ko.ng_dataversion(this,'FIELD1','FIELD2','FIELD3');
  this.timer       = ko.ng_timer(1000);
}


function ngMain()
{
  AppForm = new ngControls({
  
    MyViewModel: {
      ID: 'myvmodel',
      Type: 'ngSysViewModel',
      Namespace: 'myvmodelns',
      ViewModel: SimpleKnockoutModel // or you can put here reference 
                                     // to existing Knockout model instance
    },
    
    EditForm: {
      Type: 'weViewModelForm',
      L: 20, T: 20, W: 520, H: 250,
      ViewModel: 'myvmodel',
      Controls: {
        Field1Label: {
          Type: 'weLabel',
          L: 0, T: 0,
          Data: {
            Text: 'FIELD1:'
          }
        },
        Field1: {
          Type: 'weEditField',
          L: 100, T: 0, W: 150,
          DataBind: 'Value: FIELD1, InstantUpdate: true'
        },
        
        Field2Label: {
          Type: 'weLabel',
          L: 0, T: 40,
          Data: {
            Text: 'FIELD2:'
          }
        },
        Field2: {
          Type: 'weEditField',
          L: 100, T: 40, W: 150,
          DataBind: 'Value: FIELD2, InstantUpdate: true'
        },

        Field3Label: {
          Type: 'weLabel',
          L: 0, T: 80,
          Data: {
            Text: 'FIELD3:'
          }
        },
        Field3: {
          Type: 'weEditField',
          L: 100, T: 80, W: 150,
          DataBind: 'Value: FIELD3, InstantUpdate: true'
        },
        
        ComputedLabel: {
          Type: 'weLabel',
          L: 280, T: 0,
          Data: {
            Text: 'Computed:'
          }
        },
        Computed: {
          Type: 'weEditField',
          L: 370, T: 0, W: 150,
          DataBind: 'Value: computed, InstantUpdate: true'
        },

        MatchesLabel: {
          Type: 'weLabel',
          L: 280, T: 40,
          Data: {
            Text: 'Matches:'
          }
        },
        Matches: {
          Type: 'weCheckBox',
          L: 370, T: 40, 
          DataBind: 'Value: matches'
        },
        MatchesLabel2: {
          Type: 'weLabel',
          L: 400, T: 40,
          Data: {
            Text: '= KO-View-Model'
          }
        },
        
        ChangedLabel: {
          Type: 'weLabel',
          L: 280, T: 80,
          Data: {
            Text: 'Changed:'
          }
        },
        Changed: {
          Type: 'weCheckBox',
          L: 370, T: 80, 
          DataBind: 'Value: changed'
        },

        DataVersionLabel: {
          Type: 'weLabel',
          L: 0, T: 130,
          Data: {
            Text: 'Data Version:'
          }
        },
        DataVersion: {
          Type: 'weEditField',
          L: 100, T: 130, W: 50,
          DataBind: 'Value: dataversion'
        },
        
        TimerLabel: {
          Type: 'weLabel',
          L: 280, T: 130,
          Data: {
            Text: 'Timer:'
          }
        },
        Timer: {
          Type: 'weLabel',
          L: 370, T: 130, W: 150,
          DataBind: 'Text: timer'
        },
        
        Greeting: {
          Type: 'weTitle',
          L: 0, T: 190, R: 0,
          DataBind: 'Text: greeting',
          Data: {
            TextAlign: 'center'
          }
        }
      }
    }        

  });
  AppForm.Update();
}
