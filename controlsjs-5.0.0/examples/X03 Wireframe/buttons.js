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

function AppFormButtons()
{
  return({
  
    ButtonsGroup: 
    { 
      Type: 'wfrGroup',
      L:10, T: 10, R: 10, H:180, 
      Data: { 
        Text: 'wfrButton'
      }, 
      Controls: {
        EnableButtons1: 
        {
          Type: 'wfrCheckBox',
          L: 10, T: 10,
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
        Button1:           
        {        
          Type: 'wfrButton',
          L: 10, T: 40,       
          Data: {
            Text: 'wfrButton'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Button2:           
        {        
          Type: 'wfrButton',
          L: 10, T: 70,       
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
          Type: 'wfrButton',
          L: 10, T: 100, W: 130,       
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
          Type: 'wfrButton',
          L: 10, T: 130, W: 130,       
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
          Type: 'wfrCheckBox',
          L:160, T: 43,       
          Data: {
            Text: 'wfrCheckBox'
          }
        },
        CheckBox2:           
        {        
          Type: 'wfrCheckBox',
          L:160, T: 73,       
          Data: {
            Text: 'Checked stdCheckBox',
            Checked: 1
          }
        },
        CheckBox3:           
        {        
          Type: 'wfrCheckBox',
          L:160, T: 103,       
          Data: {
            Text: 'Grayed stdCheckBox',
            AllowGrayed: true,
            Checked: 2
          }
        },
        CheckBox4:           
        {        
          Type: 'wfrCheckBox',
          L:160, T: 133,        
          Data: {
            TextAlign: 'left',
            Text: 'Right Align'
          }
        },
    
        RadioButton1:           
        {        
          Type: 'wfrRadioButton',
          L:310, T: 43,       
          Data: {
            Text: 'wfrRadioButton',
            RadioGroup: 1
          }
        },
        RadioButton2:           
        {        
          Type: 'wfrRadioButton',
          L:310, T: 73,       
          Data: {
            Text: 'Checked stdRadioButton',
            RadioGroup: 1,
            Checked: 1
          }
        },
        RadioButton3:           
        {        
          Type: 'wfrRadioButton',
          L:310, T: 103,       
          Data: {
            Text: 'Grayed stdRadioButton',
            RadioGroup: 1,
            Checked: 2
          }
        },
        RadioButton4:           
        {        
          Type: 'wfrRadioButton',
          L:310, T: 133,       
          Data: {
            Text: 'Right Align',
            TextAlign: 'left',
            RadioGroup: 1,
            Checked: 1
          }
        },
    
        Label1:           
        {        
          Type: 'wfrLabel',
          L:470, T: 45, 
          Data: {
            Text: 'wfrLabel'
          }
        },
        Label2:           
        {        
          Type: 'wfrLabel',
          L:470, T: 75,       
          Data: {
            Text: 'Checked stdLabel',
            Checked: 1
          }
        },
        Label3:           
        {        
          Type: 'wfrLabel',
          L:470, T: 105,       
          Data: {
            Text: 'Grayed stdLabel',
            Checked: 2
          }
        },
        Label4:           
        {        
          Type: 'wfrLabel',
          L:470, T: 135, W: 120,      
          Data: {
            Text: 'Right Align'
          }
        },
                
        Link1:           
        {        
          Type: 'wfrLink',
          L:590, T: 45,       
          Data: {
            Text: 'wfrLink'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Link2:           
        {        
          Type: 'wfrLink',
          L:590, T: 75,       
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
          Type: 'wfrLink',
          L:590, T: 105,       
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
          Type: 'wfrLink',
          L:590, T: 135, W: 120,       
          Data: {
            Text: 'Right Align'
          },
          Events: {
            OnClick: MyButtonClick
          }  
        },
        
        ImgButton1:           
        {        
          Type: 'wfrButton',
          L: 710, T: 40,       
          Data: {
            Text: 'Img',
            Img: WireframeControls.Images.LockIcon,
            ImgAlign: 'left',
            ImgIndent: -4
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButton2:           
        {        
          Type: 'wfrButton',
          L: 710, T: 70, W: 130,       
          Data: {
            TextAlign: 'left',
            Img: WireframeControls.Images.PulseIcon,        
            ImgAlign: 'left',
            ImgIndent: -4,                  
            Text: 'Img Left'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButton3:           
        {        
          Type: 'wfrButton',
          L: 710, T: 100, W: 130,       
          Data: {
            TextAlign: 'center',
            Img: WireframeControls.Images.AimIcon,        
            ImgAlign: 'left',
            ImgIndent: -4,                  
            Text: 'Img Center'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButton4:           
        {        
          Type: 'wfrButton',
          L: 710, T: 130, W: 130,       
          Data: {
            TextAlign: 'right',
            Img: WireframeControls.Images.EyeIcon,        
            ImgAlign: 'left',
            ImgIndent: -4,                  
            Text: 'Img Right'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
  
        ImgButtonR1:           
        {        
          Type: 'wfrButton',
          L: 860, T: 40,       
          Data: {
            Text: 'Img',
            Img: WireframeControls.Images.EyeIcon,
            ImgAlign: 'right',
            ImgIndent: -4                  
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButtonR2:           
        {        
          Type: 'wfrButton',
          L: 860, T: 70, W: 130,       
          Data: {
            TextAlign: 'left',
            Img: WireframeControls.Images.LockIcon,        
            ImgAlign: 'right',
            ImgIndent: -4,                  
            Text: 'Img Left'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButtonR3:           
        {        
          Type: 'wfrButton',
          L: 860, T: 100, W: 130,       
          Data: {
            TextAlign: 'center',
            Img: WireframeControls.Images.AimIcon,        
            ImgAlign: 'right',
            ImgIndent: -4,                  
            Text: 'Img Center'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButtonR4:           
        {        
          Type: 'wfrButton',
          L: 860, T: 130, W: 130,       
          Data: {
            TextAlign: 'right',
            Img: WireframeControls.Images.PulseIcon,        
            ImgAlign: 'right',
            ImgIndent: -4,                  
            Text: 'Img Right'
          },
          Events: {
            OnClick: MyButtonClick
          }
        }
        
      }
    },
    
    EditGroup: 
    { 
      Type: 'wfrGroup',
      L:10, T: 200, R: 10, H:160, 
      Data: { 
        Text: 'wfrEdit'
      }, 
      Controls: {
        EnableEdit1: 
        {
          Type: 'wfrCheckBox',
          L: 10, T: 10,
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
          Type: 'wfrEdit',
          L:10, T:40, W:150,
          Data: {
            Text: 'wfrEditBox',
            MaxLength: 10                
          }
        },
        Edit2:
        {
          Type: 'wfrEdit',
          L:180, T:40, W:150,
          Data: {
            Text: 'Centered stdEditBox',                  
            TextAlign: 'center'                  
          }
        },
        Edit3:
        {
          Type: 'wfrEdit',
          L:350, T: 40, W:150,
          Data: {
            Text: 'Right Align (Invalid)',
            Invalid: true,
            TextAlign: 'right'                  
          }
        },
  
        DropDown1:
        {
          Type: 'wfrDropDown',
          L:10, T:75, W:150,
          Data: {
            Text: 'wfrDropDown'
          },
          DropDown: {            
            Type: 'wfrListBox',
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
          Type: 'wfrDropDownList',
          L:180, T:75, W:150,
          Data: {
            Text: 'wfrDropDownList'
          },
          DropDown: {            
            Type: 'wfrListBox',
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
          Type: 'wfrDropDownList',
          L:350, T:75, W:150,
          Data: {
            Text: 'wfrDropDownList - Tree'
          },
          DropDown: {
            Type: 'wfrTreeList',
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
          Type: 'wfrEditBoxBtn',
          L:10, T:110, W:150,
          Data: {
            Text: 'wfrEditBoxBtn'
          },
          Events: {
            OnElipsis: function(e,text) { alert('Ellipsis clicked - '+text); }
          }
        },
        Edit5:
        {
          Type: 'wfrSearchBox',
          L:180, T:110, W:150,
          Data: {
            Text: 'wfrSearchBox'
          },
          Events: {
            OnSearch: function(e,text) { alert('Search clicked - '+text); }
          }
        },
        Edit6:
        {
          Type: 'wfrEditDate',
          L:350, T:110, W:150,
          Data: {
            Text: 'wfrEditDate'
          }
        },
        Edit7:
        {
          Type: 'wfrEditNum',
          L:520, T:40, W:60,
          Data: {
            Text: '0',
            Alt: 'wfrEditNum'
          }
        },
        Edit8:
        {
          Type: 'wfrEditNum',
          L:520, T:75, W:60,
          ArrowsAlign: 'both',
          Data: {
            Text: '0',
            MinNum: 0,
            MaxNum: 100,
            Alt: 'wfrEditNum'
          }
        },
        Edit9:
        {
          Type: 'wfrEditNum',
          L:520, T:110, W:60,
          ArrowsAlign: 'both',
          Arrows: 'updown',
          Data: {
            DefaultNum: 42,
            MinNum: 0,
            MaxNum: 99,
            Step: 10,
            StepRound: true,
            Alt: 'wfrEditNum'
          }
        },
        Edit10:
        {
          Type: 'wfrColorEdit',
          L:600, T:40, W:100,
          Data: {
            Text: 'FF0000',
            Alt: 'wfrColorEdit'
          }
        },
        Edit11:
        {
          Type: 'wfrEditBox',
          L:600, T:110, W:200,
          Data: {
            Hint: 'Custom buttons with menu'
          },
          Menu: {
            Type: 'wfrMenu',
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
                LeftImg: WireframeControls.Images.Menu.MenuButton,
                ButtonAlign: 'left'
              },
              Events: {
                OnClick: function(e) { e.Owner/*Button*/.Owner/*Edit*/.Menu.PopupCtrl(e.Owner.Owner); }
              }
            },
            {
              Type: 'ngButton',
              Data: {
                LeftImg: WireframeControls.Images.SearchIcon,
                OnClick: function(e) { alert('Edit Search custom button clicked!'); }
              }
            },
            {
              Type: 'ngButton',
              Data: {
                LeftImg: WireframeControls.Images.ElipsisIcon
              },
              Events: {
                OnClick: function(e) { alert('Edit Ellipsis custom button clicked!'); }
              }
            }
          ]
          
        }
      }
    },
    
    MemoGroup: 
    { 
      Type: 'wfrGroup',
      L:10, T: 370, R: 10, H:125, 
      Data: { 
        Text: 'wfrMemo'
      }, 
      Controls: {
        EnableMemo1: 
        {
          Type: 'wfrCheckBox',
          L: 10, T: 10,
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
          Type: 'wfrMemo',
          L:10, T:40, W:150, H: 60,
          Data: {
            Text: 'wfrMemo',
            MaxLength: 8                  
          }
        },
        Memo2:
        {
          Type: 'wfrMemo',
          L:180, T:40, W:150, H: 60,
          Data: {
            Text: 'Centered (Invalid)',
            Invalid: true,                  
            TextAlign: 'center'                  
          }
        },
        Memo3:
        {
          Type: 'wfrMemo',
          L:350, T: 40, W:150, H: 60,
          Data: {
            Text: 'Right Align stdMemo',
            TextAlign: 'right'                  
          }
        }
      }
    }
  });
}
