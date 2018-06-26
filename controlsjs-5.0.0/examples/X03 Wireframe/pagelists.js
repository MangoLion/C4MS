/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppFormPageLists()
{
  return ({
  
    PgListGroup: 
    { 
      Type: 'wfrGroup',
      L:10, T: 10, W: 325, B:10, 
      Data: { 
        Text: 'wfrPageList'
      }, 
      Controls: {
        EnablePgList1: 
        {
          Type: 'wfrCheckBox',
          L: 10, T: 10,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.PgListGroup,this.Checked==1);
            }
          }
        },      
        PgList1:
        {
          Type: 'wfrPageList',
          L: 10, T: 45, W:300, B: 30,
          Data: {
            PagingType: plPagingDataSetEx
          },
          Controls: {
            List: {
              Data: {
                SelectType: nglSelectSingle
              }
            }
          }
        },
        PgListLabel1: {
          Type: 'wfrLabel',
          L: 10, B: 10,
          Data: {
            Text: 'plPagingDataSetEx, PagingInside'
          }
        }
      }
    },
    PgTreeListGroup: 
    { 
      Type: 'wfrGroup',
      L:345, T: 10, R: 10, B:10, 
      Data: { 
        Text: 'wfrPageTreeList'
      }, 
      Controls: {
        EnablePgTreeList1: 
        {
          Type: 'wfrCheckBox',
          L: 10, T: 10,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.PgTreeListGroup,this.Checked==1);
            }
          }
        },      
        PgListToolBar: {
          Type: 'wfrToolBar',
          L: 100, T: 7, R: 10,
          Data: { HPadding: 10, AutoSize: true },      
          Controls: {
            PgExpandAll: {
              Type: 'wfrButton',
              Data: {
                Text: 'Expand All'
              },
              Events: {                
                OnClick: function(e) {
                  var c; 
                  var p=AppForm.PgTreeListGroup.ControlsPanel;
                  for(var i=0;i<p.ChildControls.length;i++) 
                  { 
                    c=p.ChildControls[i];
                    if(c.List) c.List.ExpandAll();
                  } 
                }
              }
            },
            PgCollapseAll: {
              Type: 'wfrButton',
              Data: {
                Text: 'Collapse All'
              },
              Events: {              
                OnClick: function(e) {
                  var c; 
                  var p=AppForm.PgTreeListGroup.ControlsPanel;
                  for(var i=0;i<p.ChildControls.length;i++) 
                  { 
                    c=p.ChildControls[i];
                    if(c.List) c.List.CollapseAll();
                  } 
                }
              }
            }
          }
        },
        PgList2:
        {
          Type: 'wfrPageTreeList',
          L: 10, T: 45, W:300, B: 30,
          Data: {
            PagingType: plPagingPagesEx
          },
          Controls: {
            List: {
              Data: {
                SelectType: nglSelectSingle
              }
            }
          }
        },              
        PgListLabel2: {
          Type: 'wfrLabel',
          L: 10, B: 10,
          Data: {
            Text: 'plPagingPagesEx, PagingInside'
          }
        },

        PgList3:
        {
          Type: 'wfrPageTreeList',
          L: 320, T: 45, W: 500, B: 30,
          Data: {
           PagingInside: false,
           DisplayMode: plDisplayFixed                
          },
          Controls: {
            List: {
              Data: {
                ShowCheckboxes: true,
                SelectType: nglSelectSingle,
                Columns: [ new ngListCol('Col1', 'Text', 'left'),
                           new ngListCol('Col2', 'Date', 'left', 120),
                           new ngListCol('Col3', 'Time', 'left', 120) ]                
              }
            }
          }
        },
        PgListLabel3: {
          Type: 'wfrLabel',
          L: 320, B: 10,
          Data: {
            Text: 'plPagingSimple, plDisplayFixed(10), NoPagingInside'
          }
        }
        
      }
    }
  });
}

function InitPageListsData()
{
  // PageList1
  for(var i=0;i<500;i++)
  {
    var txt=(i+1)+'. Item'
    var it2={ Text: txt, Checked: (Math.floor(Math.random()*10)<2 ? 1 : 0) };
    var it3={ Text: { Col1: txt }, Checked: (Math.floor(Math.random()*10)<2 ? 1 : 0) };
    if(Math.floor(Math.random()*10)<2)
    {
      it2.Collapsed=true;
      it2.Items=new Array();
      for(var j=0;j<5;j++)
      {
        it2.Items[j]={ Text: (j+1)+'. SubItem' };
      }      
    }
    if(Math.floor(Math.random()*10)<2)
    {
      it3.Collapsed=true;
      it3.Items=new Array();
      for(var j=0;j<5;j++)
      {
        it3.Items[j]={ Text: { Col1: (j+1)+'. SubItem', Col2: ng_FormatDate(new Date()),Col3: ng_FormatTime(new Date()) }};
      }      
    }
    AppForm.PgList1.Controls.List.Add(txt);
    AppForm.PgList2.Controls.List.Add(it2);
    AppForm.PgList3.Controls.List.Add(it3);
  }
}