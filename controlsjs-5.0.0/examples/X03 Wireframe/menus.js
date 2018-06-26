/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppApplicationMenu()
{
  return({
    Type: 'wfrMenu',
    Data: {
      Items: [
        { Text: 'Application Menu 1' },
        { Text: '-' },
        { Text: 'Application Menu 2', 
          SubMenu: [
            { Text: 'SubItem 1' }, 
            { Text: 'SubItem 2' } 
          ]
        },
        { Text: 'Application Menu 3' }
      ]
    }
  });
}

function AppFormMainMenu()
{
  return ({
    Type: 'wfrMenuBar',
    L:10, T: 5, R: 10,
    Data: {
      //HAlign: 'right'
    },
    Menu: {
      Type: 'wfrMenu',
      Data: {
        Items: [
          { Text: 'Explore',
            SubMenu:  [
              { Text: 'Buttons and Edit', OnMenuClick: function() { AppForm.MainPages1.SetPage('buttons'); } },
              { Text: 'Lists', OnMenuClick: function() { AppForm.MainPages1.SetPage('lists'); } },
              { Text: 'Page Lists', OnMenuClick: function() { AppForm.MainPages1.SetPage('pagelists'); } },
              { Text: 'Pages', OnMenuClick: function() { AppForm.MainPages1.SetPage('pages'); } },
              { Text: 'Layout', OnMenuClick: function() { AppForm.MainPages1.SetPage('layout'); } },
              { Text: 'Window', OnMenuClick: function() { AppForm.MainPages1.SetPage('window'); } },
              { Text: 'Dialogs', OnMenuClick: function() { AppForm.MainPages1.SetPage('dialogs'); } },
              { Text: 'Menus', OnMenuClick: function() { AppForm.MainPages1.SetPage('menus'); } },
              { Text: 'Misc', OnMenuClick: function() { AppForm.MainPages1.SetPage('misc'); } }
            ]
          },
          { Text: 'Help',
            SubMenu:  [
              { Text: 'Controls.js Home Page', OnMenuClick: function() { ng_Redirect('http://controlsjs.com'); } },
              { Text: '-' },
              { Text: 'About', OnMenuClick: function() { ngMessageDlg('wfrDlgAbout'); } }
            ]
          }
        ]
      }
    }
  });
}
function AppFormMenu()
{
  return({
    MenuGroup:
    {
      Type: 'wfrGroup',
      L:10, T: 10, R: 10, B:10,
      Data: {
        Text: 'wfrList'
      },
      Controls: {
        EnableMenu1:
        {
          Type: 'wfrCheckBox',
          L: 10, T: 10,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.MenuGroup,this.Checked==1);
            }
          }
        },
        ButtonWithMenu1:
        {
          Type: 'wfrButton',
          L: 10, T: 40, W: 150, H: 50,
          Data: {
            Text: 'wfrButton with menu',
            MenuHAlign: 'right'
          },
          Menu: {
            Type: 'wfrMenu',
            Data: {
              Items: [
                { Text: '-' },
                { Text: 'Simple Item',
                  Image: WireframeControls.Images.TreeImgFolder,
                  OnMenuClick: function(e,m,i)
                  {
                    m.HideMenu();
                    alert('Simple menu item clicked!');
                    return true;
                  }
                },
                { Text: '-' },
                { Text: 'Radio Item 1', RadioGroup: 'MRI1', Checked: 1 },
                { Text: 'Radio Item 2', RadioGroup: 'MRI1' },
                { Text: 'Radio Item 3', RadioGroup: 'MRI1' },
                { Text: '-' },
                { Text: 'Disabled Item', Enabled: false },
                { Text: '-' },
                { Text: 'Check Item', Checked: 1 },
                { Text: '-' }
              ]
            }
          }
        },
        StaticMenu1: {
          Type: 'wfrMenu',
          L: 10, T: 85, W: 100,
          Data: {
            Visible: true,
            Items: [
              { Text: 'wfrMenu' },
              { Text: '-' },
              { Text: 'Menus can be' },
              { Text: 'used as static' },
              { Text: 'controls if',
                SubMenu: [
                  { Text: 'Visible' },
                  { Text: 'property' },
                  { Text: 'in control' },
                  { Text: 'definition' },
                  { Text: 'is set to',
                    SubMenu: [
                      { Text: 'TRUE' }
                    ]
                  }
                ]
              }
            ]
          }
        },
        MenuButton1: {
          Type: 'wfrSplitButton',
          L: 170, T: 40,
          Data: {
            Text: 'wfrSplitButton'
          },
          Events: {
            OnClick: function(e)
            {
              alert('wfrMenuButton Click!');
            }
          },
          Menu: {
            Type: 'wfrMenu',
            W: 100,
            Data: {
              Items: [
                { Text: 'Menu Item 1',
                  SubMenu: [
                    { Text: 'SubItem 1-1',
                      SubMenu: [
                        { Text: 'SubItem 1-1-1' },
                        { Text: 'SubItem 1-1-2',
                          SubMenu: [
                            { Text: 'SubItem 1-1-2-1' },
                            { Text: 'SubItem 1-1-2-2' },
                            { Text: 'SubItem 1-1-2-3',
                              SubMenu: [
                                { Text: 'SubItem 1...3-1' },
                                { Text: 'SubItem 1...3-2' },
                                { Text: 'SubItem 1...3-3' }
                              ]
                            }
                          ]
                        },
                        { Text: 'SubItem 1-1-3' }
                      ]
                    },
                    { Text: '-' },
                    { Text: 'SubItem 1-2' }
                  ]
                },
                { Text: 'Big Menu',
                  SubMenu: [
                    { Text: 'SubItem 2-1' },
                    { Text: '-' },
                    { Text: 'SubItem&nbsp;2-2',
                      SubMenu: [
                        { Text: 'SubItem 2-2-1' },
                        { Text: 'SubItem 2-2-2' },
                        { Text: 'SubItem 2-2-3' }
                      ]
                    },
                    { Text: 'SubItem 2-3' },
                    { Text: 'SubItem 2-4' },
                    { Text: 'SubItem 2-5' },
                    { Text: 'SubItem 2-6' },
                    { Text: 'SubItem 2-7' },
                    { Text: 'SubItem 2-8' },
                    { Text: 'SubItem 2-9' },
                    { Text: 'SubItem 2-10' },
                    { Text: 'SubItem 2-11' },
                    { Text: 'SubItem 2-12' },
                    { Text: 'SubItem 2-13' },
                    { Text: 'SubItem 2-14' },
                    { Text: 'SubItem 2-15' },
                    { Text: 'SubItem 2-16' },
                    { Text: 'SubItem 2-17' },
                    { Text: 'SubItem 2-18' },
                    { Text: 'SubItem 2-19' },
                    { Text: 'SubItem 2-20' },
                    { Text: 'SubItem 2-21' },
                    { Text: 'SubItem 2-22' },
                    { Text: 'SubItem 2-23' },
                    { Text: 'SubItem 2-24' },
                    { Text: 'SubItem 2-25' },
                    { Text: 'SubItem 2-26' },
                    { Text: 'SubItem 2-27' },
                    { Text: 'SubItem 2-28' },
                    { Text: 'SubItem 2-29' },
                    { Text: 'SubItem 2-30' },
                    { Text: 'SubItem 2-31' },
                    { Text: 'SubItem 2-32' },
                    { Text: 'SubItem 2-33' },
                    { Text: 'SubItem 2-34' },
                    { Text: 'SubItem 2-35' },
                    { Text: 'SubItem 2-36' },
                    { Text: 'SubItem 2-37' },
                    { Text: 'SubItem 2-38' },
                    { Text: 'SubItem 2-39' },
                    { Text: 'SubItem 2-40' }
                  ]
                },
                { Text: '-' },
                { Text: 'Menu item text can be long and if menu width is specified the text is wrapped.' },
                { Text: '-' },
                { Text: 'With Controls',
                  SubMenu: {
                    Bounds: {
                      W: 100 // IE6 miscalculated menu width
                    },
                    Items: [
                      { Text: 'SubItem 4-1', OnMenuClick: function() { alert('I1'); } },
                      { Text: '-' },
                      { Text: '', H: 21,
                        Controls: {
                          Editor:
                          {
                            Type: 'wfrEditNum',
                            L:0, T:0, W: 50,
                            Data: {
                              Text: '10'
                            }
                          }
                        },
                        OnMenuClick: function(e,m,i) {
                          return false;
                        }
                      },
                      { Text: 'Inplace check', Checked:1, OnMenuClick: function(e,menu,it) { menu.CheckItem(it, it.Checked ? 0 : 1); return false; } },
                      { Text: '-' },
                      { Text: 'SubItem 4-4' }
                    ]
                  }
                },
                {
                  Text: 'Multi Column',
                  SubMenu: {
                    Bounds: {
                      W: 150 // Opera miscalculated menu width
                    },
                    Columns: [
                      new ngListCol('text','','left',100),
                      new ngListCol('shortcut', '', 'right',50)
                    ],
                    Items: [
                      { Text: { text: 'M.Item&nbsp;1', shortcut: 'Ctrl-1' } },
                      { Text: { text: '-', shortcut: '' } },
                      { Text: { text: 'M.Item&nbsp;2', shortcut: '' } },
                      { Text: { text: 'M.Item&nbsp;3', shortcut: 'F2' } },
                      { Text: { text: 'M.Item&nbsp;4', shortcut: 'Alt-F4' } }
                    ]
                  }
                }
              ]
            }
          }
        },
        MenuBar1: {
          Type: 'wfrMenuBar',
          L:170, T: 90, R: 10, 
          Menu: {
            Type: 'wfrMenu',
            Data: {
              Items: [
                { Text: 'wfrMenuBar',
                  SubMenu:  [
                    { Text: 'Align Bottom',
                      OnMenuClick: function(e,mn,it)
                      {
                        var b=AppForm.MenuBar1.Menu[0];
                        b.MenuVAlign='bottom';
                        b.Menu.BeginUpdate();
                        b.Menu.SetItemEnabled(b.Menu.Items[0],false);
                        b.Menu.SetItemEnabled(b.Menu.Items[1],true);
                        b.Menu.EndUpdate();
                      }
                    },
                    { Text: 'Align Top', Enabled: false,
                      OnMenuClick: function(e,mn,it)
                      {
                        var b=AppForm.MenuBar1.Menu[0];
                        b.MenuVAlign='top';
                        b.Menu.BeginUpdate();
                        b.Menu.SetItemEnabled(b.Menu.Items[0],true);
                        b.Menu.SetItemEnabled(b.Menu.Items[1],false);
                        b.Menu.EndUpdate();
                      }
                    }
                  ]
                },
                { Text: 'File',
                  SubMenu: [
                    { Text: 'New' },
                    { Text: 'Open...' },
                    { Text: 'Save' },
                    { Text: 'Save As...' },
                    { Text: '-' },
                    { Text: 'Print...' },
                    { Text: 'Recent Files',
                      SubMenu: [
                        { Text: 'File1' },
                        { Text: 'File2' },
                        { Text: 'File3' },
                        { Text: 'File4' }
                      ]
                    },
                    { Text: '-' },
                    { Text: 'Exit' }
                  ]
                },
                { Text: 'Edit',
                  SubMenu: [
                    { Text: 'Undo' },
                    { Text: '-' },
                    { Text: 'Cut' },
                    { Text: 'Copy' },
                    { Text: 'Paste' },
                    { Text: 'Delete' },
                    { Text: '-' },
                    { Text: 'Find...' },
                    { Text: 'Replace...' }
                  ]
                }
              ]
            }
          }
        },
        MenuGroup1: {
          Type: 'wfrGroup',
          L:170, T: 120, W: 230, H: 65,
          Controls: {
            PopupMenuText1: {
              Type: 'wfrText',
              L: 10, R: 10, T: 10, B: 10,
              Data: {
                Text: 'You can assign popup menu to any control. Click right mouse button here.'
              }
            }
          },
          PopupMenu: {
            Type: 'wfrMenu',
            Data: {
              Items: [
                { Text: 'Group Popup 1' },
                { Text: 'Group Popup 2' },
                { Text: 'Group Popup 3', 
                  SubMenu: [
                    { Text: 'SubItem 1' }, 
                    { Text: 'SubItem 2' } 
                  ]
                }
              ]
            }
          }
        },
        RegAppMenu1: {
          Type: 'wfrButton',
          L:10, T: 210,
          OverrideEvents: {
            OnGetText: function(c) {
              return(!ngVal(ngApp.PopupMenu,null) ? 'Register Application Popup Menu' : 'Unregister Application Popup Menu');
            }
          },
          Events: {
            OnClick: function(e) {
              ngApp.SetPopupMenu(!ngVal(ngApp.PopupMenu,null) ? AppForm.AppMenu1 : null);
              this.Update();
            }
          }
        }

      }
    }
  });
}