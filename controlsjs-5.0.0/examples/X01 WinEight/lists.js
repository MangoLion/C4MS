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
      Type: 'weGroup',
      L:15, T: 15, R: 15, B:15, 
      Data: { 
        Text: 'weList'
      }, 
      Controls: {
        EnableList1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
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
        ListToolBar: {
          Type: 'weToolBar',
          L: 420, T: 0, R: 10,
          Data: { HPadding: 10, AutoSize: true },      
          Controls: {
            ExpandAll: {
              Type: 'weButton',
              Data: {
                Text: 'Expand All'
              },
              Events: {
                OnClick: function(e) {
                  var c; 
                  var p=AppForm.ListGroup.ControlsPanel;
                  for(var i=0;i<p.ChildControls.length;i++) 
                  { 
                    c=p.ChildControls[i];
                    if(c.CtrlType=='ngList') c.ExpandAll();
                  } 
                }
              }
            },
            CollapseAll: {
              Type: 'weButton',
              Data: {
                Text: 'Collapse All'
              },
              Events: {
                OnClick: function(e) {
                  var c; 
                  var p=AppForm.ListGroup.ControlsPanel;
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
        
        List1:
        {
          Type: 'weListBox',
          L: 0, T: 50, W:200, B: 0,
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
          Type: 'weListBox',
          L: 210, T: 50, W:200, B: 0,
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
        },
        List3:
        {
          Type: 'weTreeList',
          L: 420, T: 50, W:300, B: 0,
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
          Type: 'weTreeList',
          L: 730, T: 10, W:550, B: 0, 
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
              {Text:{fname: 'John', lname: 'Dow', age: 25, div: 'engineering'}, Alt: { fname: 'Johnie', lname: 'Dowie' }},
              {Text:{fname: 'Jack', lname: 'Nick', age: 43, div: 'custom care'}, Alt: 'Jack The Ripper' },
              {Text:{fname: 'Albert', lname: 'Hitch', age: 33, div: 'custom care'}},
              {Text:{fname: 'Elisabeth', lname: 'Sachs', age: 28, div: 'billing'}, CheckGroup: true, Checked: 0,
                Items: [
                  {Text:{fname: 'Lucia', lname: 'Liu', age: 26, div: 'billing'}},
                  {Text:{fname: 'Bianca', lname: 'Black', age: 31, div: 'billing'}},
                  {Text:{fname: 'Angela', lname: 'Smith', age: 22, div: 'billing'}, CheckGroup: true, 
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
    },
    TreeListCap: {
      Type: 'weCaption',
      L: 435, T: 15,
      Data: {
        Text: 'weTreeList'
      }
    }
  
  });
}
