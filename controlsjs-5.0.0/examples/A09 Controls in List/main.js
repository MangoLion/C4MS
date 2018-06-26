var AppForm = null;

function ngMain()
{
  AppForm = new ngControls({
  
    Group1: 
    { 
      Type: 'weGroup',
      L:20, T: 20, W: 540, B: 10,
      Data: {
        Text: 'Controls in ngList'
      },
      Controls: {
        List1: 
        {
          Type: 'weTreeList',
          L: 0, T: 0, W: 400, B: 10,
          Data: {
            Columns: [
                         new ngListCol('name', 'Name', 'left'), 
                         new ngListCol('value', 'Value', 'left', 220)
                     ],

            ItemHeight: 32,            
            Items: [
              {
                Text:     { name: 'Left' }, 
                Controls: { value: { Editor: {
                              Type: 'weEditNum',
                              L:0, T:0, W: 100,
                              Data: {
                                Text: '10'
                              }
                           } } }
              },
              {
                Text:     { name: 'Top' }, 
                Controls: { value: { Editor: {
                              Type: 'weEditNum',
                              L:0, T:0, W: 100,
                              Data: {
                                Text: '10'
                              }
                           } } }
              },
              {
                Text:     { name: 'Width' }, 
                Controls: { value: { Editor: {
                              Type: 'weEditNum',
                              L:0, T:0, W: 100,
                              Data: {
                                Text: '260'
                              }
                           } } }
              },
              {
                Text:     { name: 'Height' }, 
                Controls: { value: { Editor: {
                              Type: 'weEditNum',
                              L:0, T:0, W: 100,
                              Data: {
                                Text: '300'
                              }
                           } } }
              },
              {
                Text:      { name: 'Columns' },
                Collapsed: true,
                Items: new Array(
                  {
                    Text:     { name: '1.' }, 
                    Controls: { value: { Editor: {
                                  Type: 'weEdit',
                                  L:0, T:0, W: 190,
                                  Data: {
                                    Text: 'Name'
                                  }
                               } } }
                  },
                  {
                    Text:     { name: '2.' }, 
                    Controls: { value: { Editor: {
                                  Type: 'weEdit',
                                  L:0, T:0, W: 190,
                                  Data: {
                                    Text: 'Value'
                                  }
                               } } }
                  },
                  {
                    Text:     { name: 'Select type' },
                    H: 160, 
                    Controls: { value: { Editor: {
                                  Type: 'weList',
                                  L:0, T:0, W: 186, H: 160,
                                  Data: {
                                    SelectType: nglSelectMultiExt,
                                    Items: ['nglSelectNone','nglSelectSingle','nglSelectMulti', 'nglSelectMultiExt']
                                  }
                               } } }
                  }
                )
              },
              {
                Text:     { name: 'Visible' }, 
                Controls: { value: { Editor: {
                              Type: 'weCheckBox',
                              L:0, T:0, W: 50,
                              Data: {
                                Checked: 1
                              }
                           } } }
              },
              {
                Text:     { name: 'Enabled' }, 
                Controls: { value: { Editor: {
                              Type: 'weCheckBox',
                              L:0, T:0, W: 50,
                              Data: {
                                Checked: 1
                              }
                           } } }
              },
              {
                Text:      { name: 'Dialog' },
//                Collapsed: true,
                Items: new Array(
                  {
                    Text:     { name: '' },
                    H: 160, 
                    Controls: { value: { 
                                Label1: {
                                  Type: 'weLabel',
                                  L:0, T:0,  
                                  Data: {
                                    Text: 'Action:'
                                  }
                                },
                                Option1: {
                                  Type: 'weRadioButton',
                                  L:70, T:0, 
                                  Data: {
                                    AutoSize: true,
                                    Text: 'Log off',
                                    RadioGroup: 'options',
                                    Checked: 1
                                  }
                                }, 
                                Option2: {
                                  Type: 'weRadioButton',
                                  L:70, T:40, 
                                  Data: {
                                    Text: 'Shutdown',
                                    RadioGroup: 'options'
                                  }
                                }, 
                                Option3: {
                                  Type: 'weRadioButton',
                                  L:70, T:80, 
                                  Data: {
                                    Text: 'Restart',
                                    RadioGroup: 'options'
                                  }
                                },
                                Go1: {
                                  Type: 'weButton',
                                  L:70, T:120, W: 120, 
                                  Data: {
                                    Text: 'Proceed'
                                  },
                                  Events: {
                                    OnClick: function(e) { alert('Proceed clicked!'); }
                                  }
                                }
                              } }
                  }
                )
              },
              {
                Text:     { name: 'Color' }, 
                Controls: { value: { Editor: {
                              Type: 'weColorEdit',
                              L:0, T:0, W: 150,
                              Data: {
                                Text: 'FFAA00'
                              }
                           } } }
              },
              {
                Text:     { name: 'Option' },
                Controls: { value: { Editor: {
                              Type: 'weDropDownList',
                              L:0, T:0, W:190,
                              Data: {
                                Text: 'weDropDownList'
                              },
                              DropDown: {            
                                Type: 'weListBox',
                                Data: {
                                  Items: new Array(
                                    '1.',
                                    '2.',
                                    '3.',
                                    '4.'
                                  )
                                }
                              }
                           } } }
              }              
            ]
          } 
        }
      }
    } 

  });
  AppForm.Update();
}
