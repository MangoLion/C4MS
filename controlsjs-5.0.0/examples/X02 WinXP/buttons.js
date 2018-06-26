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
      Type: 'stdGroup',
      L:10, T: 10, R: 10, H:150, 
      Data: { 
        Text: 'stdButton'
      }, 
      Controls: {
        EnableButtons1: 
        {
          Type: 'stdCheckBox',
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
          Type: 'stdButton',
          L: 10, T: 30,       
          Data: {
            Text: 'stdButton'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Button2:           
        {        
          Type: 'stdButton',
          L: 10, T: 54,       
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
          Type: 'stdButton',
          L: 10, T: 78, W: 130,       
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
          Type: 'stdButton',
          L: 10, T: 102, W: 130,       
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
          Type: 'stdCheckBox',
          L:160, T: 30,       
          Data: {
            Text: 'stdCheckBox'
          }
        },
        CheckBox2:           
        {        
          Type: 'stdCheckBox',
          L:160, T: 54,       
          Data: {
            Text: 'Checked stdCheckBox',
            Checked: 1
          }
        },
        CheckBox3:           
        {        
          Type: 'stdCheckBox',
          L:160, T: 78,       
          Data: {
            Text: 'Grayed stdCheckBox',
            AllowGrayed: true,
            Checked: 2
          }
        },
        CheckBox4:           
        {        
          Type: 'stdCheckBox',
          L:160, T: 102,        
          Data: {
            TextAlign: 'left',
            Text: 'Right Align'
          }
        },
    
        RadioButton1:           
        {        
          Type: 'stdRadioButton',
          L:310, T: 30,       
          Data: {
            Text: 'stdRadioButton',
            RadioGroup: 1
          }
        },
        RadioButton2:           
        {        
          Type: 'stdRadioButton',
          L:310, T: 54,       
          Data: {
            Text: 'Checked stdRadioButton',
            RadioGroup: 1,
            Checked: 1
          }
        },
        RadioButton3:           
        {        
          Type: 'stdRadioButton',
          L:310, T: 78,       
          Data: {
            Text: 'Grayed stdRadioButton',
            RadioGroup: 1,
            Checked: 2
          }
        },
        RadioButton4:           
        {        
          Type: 'stdRadioButton',
          L:310, T: 102,       
          Data: {
            Text: 'Right Align',
            TextAlign: 'left',
            RadioGroup: 1,
            Checked: 1
          }
        },
    
        Label1:           
        {        
          Type: 'stdLabel',
          L:470, T: 30, 
          Data: {
            Text: 'stdLabel'
          }
        },
        Label2:           
        {        
          Type: 'stdLabel',
          L:470, T: 54,       
          Data: {
            Text: 'Checked stdLabel',
            Checked: 1
          }
        },
        Label3:           
        {        
          Type: 'stdLabel',
          L:470, T: 78,       
          Data: {
            Text: 'Grayed stdLabel',
            Checked: 2
          }
        },
        Label4:           
        {        
          Type: 'stdLabel',
          L:470, T: 102, W: 120,      
          Data: {
            Text: 'Right Align'
          }
        },
                
        Link1:           
        {        
          Type: 'stdLink',
          L:590, T: 30,       
          Data: {
            Text: 'stdLink'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        Link2:           
        {        
          Type: 'stdLink',
          L:590, T: 54,       
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
          Type: 'stdLink',
          L:590, T: 78,       
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
          Type: 'stdLink',
          L:590, T: 102, W: 120,       
          Data: {
            Text: 'Right Align'
          },
          Events: {
            OnClick: MyButtonClick
          }  
        },
        
        ImgButton1:           
        {        
          Type: 'stdButton',
          L: 710, T: 30,       
          Data: {
            Text: 'Img',
            Img: WinXPControls.Images.Calendar,
            ImgAlign: 'left',
            ImgIndent: -4
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButton2:           
        {        
          Type: 'stdButton',
          L: 710, T: 54, W: 130,       
          Data: {
            TextAlign: 'left',
            Img: WinXPControls.Images.Calendar,        
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
          Type: 'stdButton',
          L: 710, T: 78, W: 130,       
          Data: {
            TextAlign: 'center',
            Img: WinXPControls.Images.Calendar,        
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
          Type: 'stdButton',
          L: 710, T: 102, W: 130,       
          Data: {
            TextAlign: 'right',
            Img: WinXPControls.Images.Calendar,        
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
          Type: 'stdButton',
          L: 860, T: 30,       
          Data: {
            Text: 'Img',
            Img: WinXPControls.Images.Calendar,
            ImgAlign: 'right',
            ImgIndent: -4                  
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        ImgButtonR2:           
        {        
          Type: 'stdButton',
          L: 860, T: 54, W: 130,       
          Data: {
            TextAlign: 'left',
            Img: WinXPControls.Images.Calendar,        
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
          Type: 'stdButton',
          L: 860, T: 78, W: 130,       
          Data: {
            TextAlign: 'center',
            Img: WinXPControls.Images.Calendar,        
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
          Type: 'stdButton',
          L: 860, T: 102, W: 130,       
          Data: {
            TextAlign: 'right',
            Img: WinXPControls.Images.Calendar,        
            ImgAlign: 'right',
            ImgIndent: -4,                  
            Text: 'Img Right'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        FlatButton1:           
        {        
          Type: 'stdFlatButton',
          L: 1010, T: 30,       
          Data: {
            Text: 'stdFlatButton'
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        FlatButton2:           
        {        
          Type: 'stdFlatButton',
          L: 1010, T: 54,       
          Data: {
            Text: 'Checked stdFlatButton',
            Checked: 1
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        FlatButton3:           
        {        
          Type: 'stdFlatButton',
          L: 1010, T: 78, W: 130,       
          Data: {
            Text: 'Grayed stdFlatButton',
            Checked: 2
          },
          Events: {
            OnClick: MyButtonClick
          }
        },
        FlatButton4:           
        {        
          Type: 'stdFlatButton',
          L: 1010, T: 102, W: 130,       
          Data: {
            Text: 'Right Align',
            TextAlign: 'right'
          },
          Events: {
            OnClick: MyButtonClick
          }
        }
        
      }
    },
    
    EditGroup: 
    { 
      Type: 'stdGroup',
      L:10, T: 170, R: 10, H:130, 
      Data: { 
        Text: 'stdEdit'
      }, 
      Controls: {
        EnableEdit1: 
        {
          Type: 'stdCheckBox',
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
          Type: 'stdEdit',
          L:10, T:30, W:150,
          Data: {
            Text: 'stdEditBox',
            MaxLength: 10                
          }
        },
        Edit2:
        {
          Type: 'stdEdit',
          L:180, T:30, W:150,
          Data: {
            Text: 'Centered stdEditBox',                  
            TextAlign: 'center'                  
          }
        },
        Edit3:
        {
          Type: 'stdEdit',
          L:350, T: 30, W:150,
          Data: {
            Text: 'Right Align (Invalid)',
            Invalid: true,
            TextAlign: 'right'                  
          }
        },
  
        DropDown1:
        {
          Type: 'stdDropDown',
          L:10, T:60, W:150,
          Data: {
            Text: 'stdDropDown'
          },
          DropDown: {            
            Type: 'stdListBox',
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
          Type: 'stdDropDownList',
          L:180, T:60, W:150,
          Data: {
            Text: 'stdDropDownList'
          },
          DropDown: {            
            Type: 'stdListBox',
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
          Type: 'stdDropDownList',
          L:350, T:60, W:150,
          Data: {
            Text: 'stdDropDownList - Tree'
          },
          DropDown: {
            Type: 'stdListBox',
            W: 300,
            TreeImg: 'triangle',
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
          Type: 'stdEditBoxBtn',
          L:10, T:90, W:150,
          Data: {
            Text: 'stdEditBoxBtn'
          },
          Events: {
            OnElipsis: function(e,text) { alert('Ellipsis clicked - '+text); }
          }
        },
        Edit5:
        {
          Type: 'stdSearchBox',
          L:180, T:90, W:150,
          Data: {
            Text: 'stdSearchBox'
          },
          Events: {
            OnSearch: function(e,text) { alert('Search clicked - '+text); }
          }
        },
        Edit6:
        {
          Type: 'stdEditDate',
          L:350, T:90, W:150,
          Data: {
            Text: 'stdEditDate'
          }
        },
        Edit7:
        {
          Type: 'stdEditNum',
          L:520, T:30, W:50,
          Data: {
            Text: '0',
            Alt: 'stdEditNum'
          }
        },
        Edit8:
        {
          Type: 'stdEditNum',
          L:520, T:60, W:50,
          ArrowsAlign: 'both',
          Data: {
            Text: '0',
            MinNum: 0,
            MaxNum: 100,
            Alt: 'stdEditNum'
          }
        },
        Edit9:
        {
          Type: 'stdEditNum',
          L:520, T:90, W:50,
          ArrowsAlign: 'both',
          Arrows: 'updown',
          Data: {
            DefaultNum: 42,
            MinNum: 0,
            MaxNum: 99,
            Step: 10,
            StepRound: true,
            Alt: 'stdEditNum'
          }
        },
        Edit10:
        {
          Type: 'stdColorEdit',
          L:590, T:30, W:80,
          Data: {
            Text: 'FF0000',
            Alt: 'stdColorEdit'
          }
        },
        Edit11:
        {
          Type: 'stdEditBox',
          L:590, T:90, W:200,
          Data: {
            Hint: 'Custom buttons with menu'
          },
          Menu: {
            Type: 'stdMenu',
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
                LeftImg: WinXPControls.Images.Calendar,
                ButtonAlign: 'left'
              },
              Events: {
                OnClick: function(e) { e.Owner/*Button*/.Owner/*Edit*/.Menu.PopupCtrl(e.Owner.Owner); }
              }
            },
            {
              Type: 'ngButton',
              Data: {
                LeftImg: WinXPControls.Images.Search,
                OnClick: function(e) { alert('Edit Search custom button clicked!'); }
              }
            },
            {
              Type: 'ngButton',
              Data: {
                LeftImg: WinXPControls.Images.Elipsis
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
      Type: 'stdGroup',
      L:10, T: 310, R: 10, H:100, 
      Data: { 
        Text: 'stdMemo'
      }, 
      Controls: {
        EnableMemo1: 
        {
          Type: 'stdCheckBox',
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
          Type: 'stdMemo',
          L:10, T:30, W:150, H: 50,
          Data: {
            Text: 'stdMemo',
            MaxLength: 8                  
          }
        },
        Memo2:
        {
          Type: 'stdMemo',
          L:180, T:30, W:150, H: 50,
          Data: {
            Text: 'Centered (Invalid)',
            Invalid: true,                  
            TextAlign: 'center'                  
          }
        },
        Memo3:
        {
          Type: 'stdMemo',
          L:350, T: 30, W:150, H: 50,
          Data: {
            Text: 'Right Align stdMemo',
            TextAlign: 'right'                  
          }
        }
      }
    }
  });
}
