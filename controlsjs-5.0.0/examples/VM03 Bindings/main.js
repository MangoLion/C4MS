var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({
  
    // ViewModel Bindings:
    // Defined properties are bound to GUI controls. 
    // GUI responds on ViewModel changes and any user action on GUI 
    // is immediately propagated to ViewModel. 

    // Note: Don't forget to use controls-vm.js in index.html to make VM works.
    
    // Create ViewModel:  
    MyViewModel: {
      ID: 'myvmodel',
      Type: 'ngSysViewModel',
      FieldDefs: [
        new ngFieldDef_Integer('value_field', {DefaultValue:42}),
        new ngFieldDef_Bool('enabled_field', {DefaultValue:true}),
        new ngFieldDef_Bool('focus_field', {DefaultValue:false}),
        new ngFieldDef_Bool('visible_field', {DefaultValue:true}),
        new ngFieldDef_Bool('invalid_field', {DefaultValue:false}),
        new ngFieldDef_Bool('readonly_field', {DefaultValue:false}),
        new ngFieldDef_String('hint_field', {DefaultValue:'Enter number'}),
        new ngFieldDef_String('alt_field', {DefaultValue:'Model alt'}),

        new ngFieldDef_Array('listitems_field', {DefaultValue:[{Value:1,Text:'Item1'},{Value:2,Text:'Item2'},{Value:3,Text:'Item3'},{Value:4,Text:'Item4'}]}),
        
        new ngFieldDef_Array('selected_field', {DefaultValue:[1,3]}),
        new ngFieldDef_Array('checked_field', {DefaultValue:[1,2]}),
       
        new ngFieldDef_Integer('lookup_field', {DefaultValue:2})

      ],

      // ViewModel's constructor (optional)
      ViewModel: function(owner) {
        // Functions can also be part of ViewModel. 
        // They can be bound to GUI events (e.g. OnClick) or called directly.          
        this.AddItem = function() {
          // Modifying array in ViewModel automatically updates GUI controls (e.g. ngList items).
          var len=this.listitems_field.Value().length;
          this.listitems_field.Value.push({Value:len+1,Text:'Item'+(len+1)});
        };             

        this.RemoveItem = function() {
          var len=this.listitems_field.Value().length;
          this.listitems_field.Value.splice(len-1,1);
        };     
      }
    },
    
    // Put Controls into ViewModelForm. 
    // ViewModelForm provides reference to ViewModel to it's Controls so you 
    // don't need to specify reference in every single Control.
    // Moreover ViewModelForm handles ViewModel's errors, location of binded
    // controls or command processing. 
    EditForm: {
      Type: 'weViewModelForm',
      L: 20, T: 0, R: 20, B: 20,
      ViewModel: 'myvmodel',
      Controls: {
        ValueLabel: {
          Type: 'weLabel',
          L: 0, T: 20,
          Data: {
            Text: 'Value:'
          },
          DataBind: 'Enabled: enabled_field, Visible: visible_field'
        },
        ValueField: {
          Type: 'weEdit',
          L: 80, T: 20, W: 200,
          // ng_Bindings() is helper function which converts name-value object to DataBind string
          DataBind: ng_Bindings({ 
            Value: 'value_field',
            InstantUpdate: true,
            Enabled: 'enabled_field',
            Visible: 'visible_field',
            Invalid: 'invalid_field',
            ReadOnly: 'readonly_field',
            Alt: 'alt_field',
            Hint: 'hint_field',
            Focus: 'focus_field'
          })
                    
          // As you see, multiple properties can be bound with one control.
          // There is also possibility to bound properties from more than one
          // model to the same control.
          //
          // DataBind: {
          //   self: 'Value: parent', // 'self' refers to control default ViewModel
          //   model1: 'Enabled: children.Value.count() > 0' // 'model1' is ID of another model
          //   model2: ...
          // }
          //
          // ng_Bindings({ Value: 'parent' },
          //    'model1',{ Enabled: 'children.Value.count() > 0' },
          //    'model2',{ ... }, ... );                
        },
        
        TextLabel: {
          Type: 'weLabel',
          L: 0, T: 60,
          Data: {
            Text: 'Text:'
          }
        },
        TextField: {
          Type: 'weLabel',
          L: 95, T: 60,
          DataBind: 'Text: value_field'
        },

        EnabledLabel: {
          Type: 'weLabel',
          L: 0, T: 100,
          Data: {
            Text: 'Enabled:'
          }
        },
        EnabledCheck: {
          Type: 'weCheckBox',
          L: 95, T: 100,
          DataBind: 'Value: enabled_field'
        },

        VisibleLabel: {
          Type: 'weLabel',
          L: 0, T: 130,
          Data: {
            Text: 'Visible:'
          }
        },
        VisibleCheck: {
          Type: 'weCheckBox',
          L: 95, T: 130,
          DataBind: 'Value: visible_field'
        },


        InvalidLabel: {
          Type: 'weLabel',
          L: 0, T: 160,
          Data: {
            Text: 'Invalid:'
          }
        },
        InvalidCheck: {
          Type: 'weCheckBox',
          L: 95, T: 160,
          DataBind: 'Value: invalid_field'
        },

        ReadOnlyLabel: {
          Type: 'weLabel',
          L: 0, T: 190,
          Data: {
            Text: 'ReadOnly:'
          }
        },
        ReadOnlyCheck: {
          Type: 'weCheckBox',
          L: 95, T: 190,
          DataBind: 'Value: readonly_field'
        },


        FocusLabel: {
          Type: 'weLabel',
          L: 160, T: 100,
          Data: {
            Text: 'Focus:'
          }
        },                       
        FocusCheck: {
          Type: 'weCheckBox',
          L: 260, T: 100,
          DataBind: 'Value: focus_field'
        },

        DataLabel: {
          Type: 'weLabel',
          L: 160, T: 130,
          Data: {
            Text: 'Data (=42):'
          }
        },
        // Also controls without any direct DataBind support can be bound.
        // Binding 'Data' adds new event OnViewModelDataChanged 
        // and new method SetViewModelData() to any control.   
        DataCheck: {
          Type: 'weCheckBox',
          L: 260, T: 130,
          DataBind: 'Data: value_field',
          Events: {
            OnViewModelDataChanged: function(c,oldval) {
              // Make control checked if underlying ViewModel data are equal to 42. 
              c.Check(c.ViewModelData=='42' ? 1 : 0);
            },
            OnCheckChanged: function(c) {
              // If user checks the control, set underlying ViewModel data to 42. 
              if(c.Checked) c.SetViewModelData('42');                  
            }
          }
        },

        ExprLabel: {
          Type: 'weLabel',
          L: 160, T: 160,
          Data: {
            Text: 'Expr (=42):'
          }
        },
        ExprCheck: {
          Type: 'weCheckBox',
          L: 260, T: 160,
          Data: {
            ReadOnly: true
          },
          DataBind: 'Value: value_field.Value()==42'
        },

        ProgressLabel: {
          Type: 'weLabel',
          L: 0, T: 230,
          Data: {
            Text: 'ProgressBar:'
          }
        },
        ProgressBar: {
          Type: 'weProgressBar',
          L: 95, T: 242, W: 185,
          DataBind: 'Value: value_field'
        },

        AddItem: {
          Type: 'weButton',
          L: 540, T: 20,
          Data: {
            Text: 'Add'
          },
          DataBind: 'OnClick: AddItem'
        },
        RemoveItem: {
          Type: 'weButton',
          L: 600, T: 20,
          Data: {
            Text: 'Remove'
          },
          DataBind: 'OnClick: RemoveItem'
        },
        List: {
          Type: 'weList',
          L: 300, T: 20, W: 220, H: 200,
          Data: {
            ShowCheckboxes: true,
            SelectType: nglSelectMulti,
            CheckedChangedDelay: 50
          },
          DataBind: 'Value: listitems_field, Selected: selected_field, Checked: checked_field'
        },
        SelectedLabel: {
          Type: 'weLabel',
          L: 540, T: 60,
          Data: {
            Text: 'Selected:'
          }
        },
        SelectedItems: {
          Type: 'weLabel',
          L: 540, T: 90,
          DataBind: 'Text: selected_field'
        },
        CheckedLabel: {
          Type: 'weLabel',
          L: 540, T: 130,
          Data: {
            Text: 'Checked:'
          }
        },
        CheckedItems: {
          Type: 'weLabel',
          L: 540, T: 160,
          DataBind: 'Text: checked_field'
        },
        DropDownLabel: {
          Type: 'weLabel',
          L: 300, T: 230,
          Data: {
            Text: 'Lookup:'
          }
        },
        DropDown: {
          Type: 'weDropDownList',
          L: 360, T: 230, W: 160, 
          DataBind: 'Lookup: lookup_field',
          DropDown: {
            Type: 'weList',
            DataBind: 'Value: listitems_field'
          }
        },
        SelectedDDLabel: {
          Type: 'weLabel',
          L: 540, T: 230,
          Data: {
            Text: 'Selected:'
          }
        },
        SelectedDDItems: {
          Type: 'weEdit',
          L: 610, T: 230, W: 50,
          DataBind: 'Value: lookup_field, InstantUpdate: true'
        }
      }
    }          

  });
  AppForm.Update();
}
