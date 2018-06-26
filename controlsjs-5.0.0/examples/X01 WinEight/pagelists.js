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
      Type: 'weGroup',
      L:15, T: 15, R: 15, B:15, 
      Data: { 
        Text: 'wePageList'
      }, 
      Controls: {
        EnablePgList1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
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
          Type: 'wePageList',
          L: 0, T: 50, W:300, B: 50,
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
          Type: 'weLabel',
          L: 0, B: 10,
          Data: {
            Text: 'plPagingDataSetEx, PagingInside'
          }
        },

        PgListToolBar: {
          Type: 'weToolBar',
          L: 310, T: 0, R: 10,
          Data: { HPadding: 10, AutoSize: true },      
          Controls: {
            PgExpandAll: {
              Type: 'weButton',
              Data: {
                Text: 'Expand All'
              },
              Events: {                
                OnClick: function(e) {
                  var c; 
                  var p=AppForm.PgListGroup.ControlsPanel;
                  for(var i=0;i<p.ChildControls.length;i++) 
                  { 
                    c=p.ChildControls[i];
                    if(c.List) c.List.ExpandAll();
                  } 
                }
              }
            },
            PgCollapseAll: {
              Type: 'weButton',
              Data: {
                Text: 'Collapse All'
              },
              Events: {              
                OnClick: function(e) {
                  var c; 
                  var p=AppForm.PgListGroup.ControlsPanel;
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
          Type: 'wePageTreeList',
          L: 310, T: 50, W:300, B: 50,
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
          Type: 'weLabel',
          L: 310, B: 10,
          Data: {
            Text: 'plPagingPagesEx, PagingInside'
          }
        },

        PgList3:
        {
          Type: 'wePageTreeList',
          L: 620, T: 10, W: 500, B: 50,
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
          Type: 'weLabel',
          L: 620, B: 10,
          Data: {
            Text: 'plPagingSimple, plDisplayFixed(10), NoPagingInside'
          }
        }
        
      }
    },
    PgTreeListCap: {
      Type: 'weCaption',
      L: 325, T: 15,
      Data: {
        Text: 'wePageTreeList'
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