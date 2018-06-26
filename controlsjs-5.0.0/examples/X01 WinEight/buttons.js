/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function MyButtonClick(e)
{
  alert('Button '+this.Text+' ['+this.ID+'] was clicked...');
}

function SwitchBtnClick(e)
{
  e.Owner.Check(e.Owner.Checked ? 0 : 1);
}

function AppFormButtons()
{
  var def={
  
    ButtonsGroup: 
    { 
      Type: 'weGroup',
      L:15, T: 15, R: 15, H:300, 
      Data: { 
        Text: 'weButton'
      }, 
      Controls: {
        EnableButtons1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.ButtonsGroup,this.Checked==1);
            }
          }
        },      
        ToggleSwitch1:           
        {        
          Type: 'weToggleSwitch',
          L:0, T: 40,
          Data: {
            Text: 'Test'
          }        
        },
        ToggleSwitchCaption1: {
          Type: 'weLabel',
          L:80, T: 40,
          Data: {
            Text: 'weToggleSwitch'
          }
        },

        Button1:           
        {        
          Type: 'weButton',
          L: 0, T: 90,       
          Data: {
            Text: 'weButton'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Button2:           
        {        
          Type: 'weButton',
          L: 0, T: 130,       
          Data: {
            Text: 'Checked stdButton',
            Checked: 1
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Button3:           
        {        
          Type: 'weButton',
          L: 0, T: 170, W: 200,       
          Data: {
            Text: 'Grayed stdButton',
            Checked: 2
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Button4:           
        {        
          Type: 'weButton',
          L: 0, T: 210, W: 200,       
          Data: {
            Text: 'Right Align (Default)',
            TextAlign: 'right',
            Default: true
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
    
        CheckBox1:           
        {        
          Type: 'weCheckBox',
          L:240, T: 90,       
          Data: {
            Text: 'weCheckBox'
          }
        },
        CheckBox2:           
        {        
          Type: 'weCheckBox',
          L:240, T: 130,       
          Data: {
            Text: 'Checked stdCheckBox',
            Checked: 1
          }
        },
        CheckBox3:           
        {        
          Type: 'weCheckBox',
          L:240, T: 170,       
          Data: {
            Text: 'Grayed stdCheckBox',
            AllowGrayed: true,
            Checked: 2
          }
        },
        CheckBox4:           
        {        
          Type: 'weCheckBox',
          L:240, T: 210,        
          Data: {
            TextAlign: 'left',
            Text: 'Right Align'
          }
        },

        RadioButton1:           
        {        
          Type: 'weRadioButton',
          L:450, T: 90,       
          Data: {
            Text: 'weRadioButton',
            RadioGroup: 1
          }
        },
        RadioButton2:           
        {        
          Type: 'weRadioButton',
          L:450, T: 130,       
          Data: {
            Text: 'Checked stdRadioButton',
            RadioGroup: 1,
            Checked: 1
          }
        },
        RadioButton3:           
        {        
          Type: 'weRadioButton',
          L:450, T: 170,       
          Data: {
            Text: 'Grayed stdRadioButton',
            RadioGroup: 1,
            Checked: 2
          }
        },
        RadioButton4:           
        {        
          Type: 'weRadioButton',
          L:490, T: 210,       
          Data: {
            Text: 'Right Align',
            TextAlign: 'left',
            RadioGroup: 1,
            Checked: 1
          }
        },

        Label1:           
        {        
          Type: 'weLabel',
          L:680, T: 90, 
          Data: {
            Text: 'weLabel'
          }
        },
        Label2:           
        {        
          Type: 'weLabel',
          L:680, T: 130,       
          Data: {
            Text: 'Checked stdLabel',
            Checked: 1
          }
        },
        Label3:           
        {        
          Type: 'weLabel',
          L:680, T: 170,       
          Data: {
            Text: 'Grayed stdLabel',
            Checked: 2
          }
        },
        Label4:           
        {        
          Type: 'weLabel',
          L:680, T: 210, W: 190,      
          Data: {
            Text: 'Right Align'
          }
        },
                
        Link1:           
        {        
          Type: 'weLink',
          L:850, T: 90,       
          Data: {
            Text: 'weLink'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Link2:           
        {        
          Type: 'weLink',
          L:850, T: 130,       
          Data: {
            Text: 'Checked stdLink',
            Checked: 1
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Link3:           
        {        
          Type: 'weLink',
          L:850, T: 170,       
          Data: {
            Text: 'Grayed stdLink',
            Checked: 2
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Link4:           
        {        
          Type: 'weLink',
          L:850, T: 210, W: 165,       
          Data: {
            Text: 'Right Align'
          },
          Events: {
            OnClick: MyButtonClick
          }  
        },
        
        ImgButton1:           
        {        
          Type: 'weButton',
          L:1010, T: 90,       
          Data: {
            Img: WinEightControls.AppIcon('Plus')
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButton2:           
        {        
          Type: 'weButton',
          L: 1055, T: 90, W: 110,       
          Data: {
            Text: 'Img',
            Img: WinEightControls.AppIcon('Refresh'),
            ImgIndent: -10                 
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButton3:           
        {        
          Type: 'weButton',
          L:1010, T: 130, W: 155,       
          Data: {
            TextAlign: 'left',
            Img: WinEightControls.AppIcon('Search'),
            ImgAlign: 'left',
            ImgIndent: -10,                  
            Text: 'Left Align'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButton4:           
        {        
          Type: 'weButton',
          L:1010, T: 170, W: 155,       
          Data: {
            TextAlign: 'right',
            Img: WinEightControls.AppIcon('Erase'),
            ImgAlign: 'left',
            ImgIndent: -10,                  
            Text: 'Right Align'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButton5:           
        {        
          Type: 'weButton',
          L:1010, T: 210, W: 155,       
          Data: {
            TextAlign: 'right',
            Img: WinEightControls.AppIcon('Calendar'),
            ImgAlign: 'right',
            ImgIndent: -10,                  
            Text: 'Img Right'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
  
        ColorButton1:           
        {        
          Type: 'weButton',
          L:1200, T: 90,
          ColorScheme: 'Yellow',       
          Data: {
            Text: 'weButton'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ColorButton2:           
        {        
          Type: 'weButton',
          L:1200, T: 130,       
          ColorScheme: 'Yellow',       
          Data: {
            Text: 'Checked stdButton',
            Checked: 1
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ColorButton3:           
        {        
          Type: 'weButton',
          L:1200, T: 170, W: 180,       
          ColorScheme: 'Yellow',       
          Data: {
            Text: 'Grayed stdButton',
            Checked: 2
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ColorButton4:           
        {        
          Type: 'weButton',
          L:1200, T: 210, W: 180,       
          ColorScheme: 'Yellow',       
          Data: {
            Text: 'Right Align (Default)',
            TextAlign: 'right',
            Default: true
          },
          Events: {
            OnClick: MyButtonClick
          }
        }        
      }
    },
    
    EditGroup: 
    { 
      Type: 'weGroup',
      L:15, T: 315, R: 15, H:220, 
      Data: { 
        Text: 'weEdit'
      }, 
      Controls: {
        EnableEdit1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.EditGroup,this.Checked==1);
            }
          }
        },      
        Edit1:
        {
          Type: 'weEdit',
          L:0, T:50, W:220,
          Data: {
            Text: 'weEditBox',
            MaxLength: 10                
          }
        },
        Edit2:
        {
          Type: 'weEdit',
          L:240, T:50, W:220,
          Data: {
            Text: 'Centered stdEditBox',                  
            TextAlign: 'center'                  
          }
        },
        Edit3:
        {
          Type: 'weEdit',
          L:480, T: 50, W:220,
          Data: {
            Text: 'Right Align (Invalid)',
            Invalid: true,
            TextAlign: 'right'                  
          }
        },
  
        DropDown1:
        {
          Type: 'weDropDown',
          L:0, T:90, W:220,
          Data: {
            Text: 'weDropDown'
          },
          DropDown: {            
            Type: 'weListBox',
            Data: {
              Items: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J' 
              ]
            }
          }
        },
        DropDown2:
        {
          Type: 'weDropDownList',
          L:240, T:90, W:220,
          Data: {
            Text: 'weDropDownList'
          },
          DropDown: {            
            Type: 'weListBox',
            Data: {
              Items: [
                '1.',
                '2.',
                '3.',
                '4.'
              ]
            }
          }
        },
        DropDown3:
        {
          Type: 'weDropDownList',
          L:480, T:90, W:220,
          Data: {
            Text: 'weDropDownList - Tree'
          },
          DropDown: {
            Type: 'weTreeList',
            W: 300,
            Data: {      
              Items: [
                '1',
                { Text: '2', Collapsed: true,
                  Items: [
                    'a',
                    'b' 
                  ]
                },
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10' 
              ]
            }
          }        
        },
        
        Edit4:
        {
          Type: 'weEditBoxBtn',
          L:0, T:130, W:220,
          Data: {
            Text: 'weEditBoxBtn'
          },
          Events: {
            OnEllipsis: function(e,text) { alert('Ellipsis clicked - '+text); }
          }
        },
        Edit5:
        {
          Type: 'weSearchBox',
          L:240, T:130, W:220,
          Data: {
            Text: 'weSearchBox',
            OnSearch: function(e,text) { alert('Search clicked - '+text); }
          }
        },
        Edit6:
        {
          Type: 'weEditDate',
          L:480, T:130, W:220,
          Data: {
            Text: 'weEditDate'
          }
        },
        Edit7:
        {
          Type: 'weEditNum',
          L:720, T:50, W:100,
          Data: {
            Text: '0',
            Alt: 'weEditNum'
          }
        },
        Edit8:
        {
          Type: 'weColorEdit',
          L:840, T:50, W:120,
          Data: {
            Text: 'FF0000',
            Alt: 'weColorEdit'
          }
        },
        Edit9:
        {
          Type: 'weEditBox',
          L:720, T:90, W:240,
          Data: {
            Hint: 'Custom buttons'
          },
          Menu: {
            Type: 'weMenu',
            Data:
            {
              Items: [
                { Text: 'Edit Menu 1' },
                { Text: '-' },
                { Text: 'Edit Menu 2', 
                  SubMenu: [ 
                    { Text: 'SubItem 1' }, 
                    { Text: 'SubItem 2' } 
                  ] 
                },
                { Text: 'Edit Menu 3' }
              ]
            } 
          },
          Buttons: [
            {
              Type: 'ngButton',
              Data: {
                LeftImg: WinEightControls.AppIcon('Calendar',WE_LIGHT),
                ButtonAlign: 'left'
              },
              Events: {
                OnClick: function(e) { e.Owner/*Button*/.Owner/*Edit*/.Menu.PopupCtrl(e.Owner.Owner); }
              }
            },
            {
              Type: 'ngButton',
              Data: {
                LeftImg: WinEightControls.AppIcon('Search',WE_LIGHT)
              },
              Events: {
                OnClick: function(e) { alert('Edit Search custom button clicked!'); }
              }
            },
            {
              Type: 'ngButton',
              Data: {
                LeftImg: WinEightControls.AppIcon('Ellipsis',WE_LIGHT)
              },
              Events: {
                OnClick: function(e) { alert('Edit Elipsis custom button clicked!'); }
              }
            }
          ]          
        },
        Edit10:
        {
          Type: 'weEditTime',
          L:720, T:130, W:200,
          Data: {
            Text: 'weEditTime'
          }
        }
      }
    },
    
    MemoGroup: 
    { 
      Type: 'weGroup',
      L:15, T: 535, W: 710, H:250, 
      Data: { 
        Text: 'weMemo'
      }, 
      Controls: {
        EnableMemo1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.MemoGroup,this.Checked==1);
            }
          }
        },      
        Memo1:
        {
          Type: 'weMemo',
          L:0, T:50, W:220, H: 150,
          Data: {
            Text: 'weMemo',
            MaxLength: 8                  
          }
        },
        Memo2:
        {
          Type: 'weMemo',
          L:240, T:50, W:220, H: 150,
          Data: {
            Text: 'Centered (Invalid)',
            Invalid: true,                  
            TextAlign: 'center'                  
          }
        },
        Memo3:
        {
          Type: 'weMemo',
          L:480, T: 50, W:220, H: 150,
          Data: {
            Text: 'Right Align stdMemo',
            TextAlign: 'right'                  
          }
        }
      }
    },
    
    AppBtnGroup: 
    { 
      Type: 'weGroup',
      L:760, T: 540, W: 650, H:250, 
      Data: { 
        Text: 'weAppButton'
      }, 
      Controls: {
        EnableAppBtn1: 
        {
          Type: 'weCheckBox',
          L: 0, T: 0,
          Data:  {
            Text: 'Enabled',
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              AppEnableChildren(this,AppForm.AppBtnGroup,this.Checked==1);
            }
          }
        },      
        AppButtonsPanel: {
          Type: 'ngPanel',
          L: 0, T: 50,  W: 650,H: 160,
          ScrollBars: ssAuto,
          Controls: {
            AppButtons: {
              Type: 'ngToolBar',
              L: 0, T: 0, R: 0, 
              ParentReferences: false,
              Data: {
                HPadding: 5,
                VPadding: 5
              },
              Controls: {
              }
            }
          }  
        }
      }    
    }
  };

  var j=0;
  var appbuttons=def.AppBtnGroup.Controls.AppButtonsPanel.Controls.AppButtons;
  for(var b in WinEightControls.Images.AppIcons[WinEightControls.Theme])
  {
    if((b==='_noMerge')||(b=='Src')) continue;
    j++;
    appbuttons.Controls['AppButton'+j] = { 
      Type: 'weAppButton', 
      Data: { 
        Img: b,
        Alt: b 
      }, 
      Events: { 
        OnClick: SwitchBtnClick 
      }
    };
  }
  
  return def;
}
