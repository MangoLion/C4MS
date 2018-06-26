var AppForm = null;
var ViewModels = null;

function ngMain()
{
  // The Model-View-ViewModel (MVVM) design patern provides clear separation of GUI from program business logic.
  // ViewModel and GUI should be totally independent.
  
  // Note: Don't forget to use controls-vm.js in index.html to make VM works.
     
  ViewModels = new ngControls({

    // ViewModels are based on Knockout.js observables - see http://www.knockoutjs.com/ for details.
    
    // Create ViewModel:  
    MyViewModel: {
      Type: 'ngSysViewModel',
      ID: 'myvmodel',      

      // ViewModel's typed properties      
      FieldDefs: [
        new ngFieldDef_String('firstName', { DefaultValue: 'Planet', Size: 30, NullIfEmpty: false }),        
        new ngFieldDef_String('lastName',  { DefaultValue: 'Earth',  Size: 30, NullIfEmpty: false })                
      ],

      // ViewModel's constructor (optional)
      ViewModel: function(owner) {
       
        // Create computed property
        ko.ng_fielddef(this, 
          new ngFieldDef_String('fullName'), ko.computed(function() {        
          // Knockout tracks dependencies automatically. 
          // It knows that fullName depends on firstName and lastName, 
          // because these get called when evaluating fullName.        
          return ng_Trim(this.firstName.Value() + " " + this.lastName.Value());    
        }, this));

        // ViewModel can also contains functions 
        this.Reset = function() {
          owner.Reset();
        };
        
        this.ClearName = function() {
          this.firstName.Value("");
          this.lastName.Value("");
        };               
        
      }
    }

  });
  
  AppForm = new ngControls({
  
    // Put Controls into ViewModelForm. 
    // ViewModelForm provides reference to ViewModel to it's Controls so you 
    // don't need to specify reference in every single Control.
    // Moreover ViewModelForm handles ViewModel's errors, location of binded
    // controls or command processing. 
    VMForm: {
      Type: 'weViewModelForm',
      L:20, T:20, R:20, B:20,
      
      ViewModel: 'myvmodel', // Reference to ViewModel
      
      Controls: {
        FirstNameLabel: {
          Type: 'weLabel',
          L: 0, T: 0,
          Data: {
            Text: 'First name:'
          }
        },
        FirstName: {
          Type: 'weEditField',
          L: 100, T: 0, W: 150,
          
          // Reference to the ViewModel.
          // If not specified the reference is taken from ParentControl 
          // or Owner. In our case the reference is already defined in VMForm,
          // so it can be omitted.  
          ViewModel: 'myvmodel',  

          // Bind edit control to the ViewModel
          // InstantUpdate flag tells the binding to update value immediately 
          // right after user hits the key
          DataBind: 'Value: firstName.Value, InstantUpdate: true'
        },        
        Reset: {
          Type: 'weButton',
          L: 260, T: 0, W: 80,
          Data: {
            Text: 'Reset'
          },    
          DataBind: 'OnClick: Reset'
        },
        
        LastNameLabel: {
          Type: 'weLabel',
          L: 0, T: 40,
          Data: {
            Text: 'Last name:'
          }
        },
        LastName: {
          Type: 'weEditField',
          L: 100, T: 40, W: 150,
          DataBind: 'Value: lastName.Value, InstantUpdate: true'
        },
        
        Clear: {
          Type: 'weButton',
          L: 260, T: 40, W: 80,
          Data: {
            Text: 'Clear'
          },    
          DataBind: 'OnClick: ClearName'
        },
        
        HelloText: {
          Type: 'weText',
          style: {
            fontSize: '24px'
          },
          L: 0, T: 100,
          DataBind: 'Text: fullName.Value, Visible: fullName.Value()!="" ',
    
          // No magic here, add prefix Hello to the text 
          Events: {
            OnGetText: function(c) { return '<b>Hello, '+c.Text+'</b>'; }
          }
        }
      }
    }          

  });
  AppForm.Update();
}
