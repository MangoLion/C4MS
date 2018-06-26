/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppFormLists()
{
  return ({
  
    ListGroup: 
    { 
      Type: 'stdGroup',
      L:10, T: 10, W: 235, B:10, 
      Data: { 
        Text: 'stdList'
      }, 
      Controls: {
        EnableList1: 
        {
          Type: 'stdCheckBox',
          L: 10, T: 10,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.ListGroup,this.Checked==1);
            }
          }
        },      
        
        List1:
        {
          Type: 'stdListBox',
          L: 10, T: 40, W:100, B: 10,
          Data: {
            Items: [
              { Text: '1. item', Alt: 'First item' },
              { Text: '2. item', Alt: 'Second item' }, 
              { Text: '3. item', Alt: 'Third item' },
              { Text: '4. item', Alt: 'Forth item' },
              { Text: '5. item', Alt: 'Fifth item' },
              { Text: '6. item', Alt: 'Sixth item ' }
            ]
          }
        },
        List2:
        {
          Type: 'stdListBox',
          L: 118, T: 40, W:100, B: 10,
          Data: {
            ShowCheckboxes: true,
            SelectType: nglSelectSingle,
            Items: [
              { Text: '1. item' },
              { Text: '2. item', Checked: 1 }, 
              { Text: '3. item', Checked: 2, AllowGrayed: true },
              { Text: '4. item', RadioGroup: 1, Checked: 1 },
              { Text: '5. item', RadioGroup: 1 },
              { Text: '6. item', RadioGroup: 1 }
            ]
          }
        }
      }
    },
    TreeGroup: 
    { 
      Type: 'stdGroup',
      L:255, T: 10, R: 10, B:10, 
      Data: { 
        Text: 'stdTreeList'
      }, 
      Controls: {
        EnableTree1: 
        {
          Type: 'stdCheckBox',
          L: 10, T: 10,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.TreeGroup,this.Checked==1);
            }
          }
        },      
        ListToolBar: {
          Type: 'stdToolBar',
          L: 80, T: 7, R: 10,
          Data: { HPadding: 10, AutoSize: true },      
          Controls: {
            ExpandAll: {
              Type: 'stdButton',
              Data: {
                Text: 'Expand All'
              },
              Events: {
                OnClick: function(e) {
                  var c; 
                  var p=AppForm.TreeGroup.ControlsPanel;
                  for(var i=0;i<p.ChildControls.length;i++) 
                  { 
                    c=p.ChildControls[i];
                    if(c.CtrlType=='ngList') c.ExpandAll();
                  } 
                }
              }
            },
            CollapseAll: {
              Type: 'stdButton',
              Data: {
                Text: 'Collapse All'
              },
              Events: {
                OnClick: function(e) {
                  var c; 
                  var p=AppForm.TreeGroup.ControlsPanel;
                  for(var i=0;i<p.ChildControls.length;i++) 
                  { 
                    c=p.ChildControls[i];
                    if(c.CtrlType=='ngList') c.CollapseAll();
                  } 
                }
              }
            }
          }
        },
        List3:
        {
          Type: 'stdTreeList',
          L: 10, T: 40, W:200, B: 10,
          TreeImg: 'folder',
          Data: {
            ShowCheckboxes: true,
            SelectType: nglSelectMulti,
            Items: [
              { Text: '1. item', Checked: 1 },
              { Text: '2. item' }, 
              { Text: '3. item' },
              { Text: '4. item', RadioGroup: 1,
                Items: [
                  { Text: '1. subitem', RadioGroup: 1 },
                  { Text: '2. subitem', RadioGroup: 1, Checked: 1 },
                  { Text: '3. subitem',
                    Items: [
                      { Text: 'A. subitem' },
                      { Text: 'B. subitem' } 
                    ] 
                  },  
                  { Text: '4. subitem' }
                ]
              },
              { Text: '5. item', RadioGroup: 1 },
              { Text: '6. item', RadioGroup: 1 }
            ]
          }
        },
        List4:
        {
          Type: 'stdTreeList',
          L: 220, T: 40, W:400, B: 10, 
          Data: {
            ShowCheckboxes: true,
            SelectType: nglSelectMultiExt,
            Columns: [
                       new ngListCol('fname', 'First Name', 'left',200), 
                       new ngListCol('lname', 'Last&nbsp;Name', 'left'),
                       new ngListCol('age', 'Age', 'left'),
                       new ngListCol('div', 'Division', 'left')
                     ],
            Items: [
              { Text:{fname: 'John', lname: 'Dow', age: 25, div: 'engineering'}, Alt: { fname: 'Johnie', lname: 'Dowie' }},
              { Text:{fname: 'Jack', lname: 'Nick', age: 43, div: 'custom care'}, Alt: 'Jack The Ripper' },
              { Text:{fname: 'Albert', lname: 'Hitch', age: 33, div: 'custom care'}},
              { Text:{fname: 'Elisabeth', lname: 'Sachs', age: 28, div: 'billing'}, CheckGroup: true, Checked: 0,
                Items: [
                  { Text:{fname: 'Lucia', lname: 'Liu', age: 26, div: 'billing'}},
                  { Text:{fname: 'Bianca', lname: 'Black', age: 31, div: 'billing'}},
                  { Text:{fname: 'Angela<br />Blah', lname: 'Smith', age: 22, div: 'billing'}, CheckGroup: true, 
                    Items: [
                      {Text:{fname: 'Alfed', lname: 'Mountfield', age: 37, div: 'accountant'}, Checked: 1},
                      {Text:{fname: 'Daryl', lname: 'Hertz', age: 35, div: 'accountant'}, Checked: 1}
                    ]
                  }
                ]
              },
              {Text:{fname: 'Frank', lname: 'Zap', age: 21, div: 'IT'}}
            ]
          }
        }
      }
    }
  
  });
}
