if(typeof ngUserControls === 'undefined') ngUserControls = new Array();

var NIMGameSkin = {
  ControlImages: [
    'skin/skin_common.png?1',
    'skin/back_dark.jpg?1',
    'skin/back_light.jpg?1'
  ],

  Images: {

    YouWon: {
      L: 0, T: 0, W: 200, H: 200
    },
    
    IWon: {
      L: 200, T: 0, W: 200, H: 200
    },
    
    BackLight: {
      L: 0, T: 200, oL: 50, SL: 50, W: 50, H: 50
    },          

    BackDark: {
      L: 100, T: 200, oL: 150, SL: 150, W: 50, H: 50
    },          

    OnePlayer: {
      L: 200, T: 200, oL: 250, SL: 250, W: 50, H: 50
    },          
    TwoPlayers: {
      L: 300, T: 200, oL: 350, SL: 350, W: 50, H: 50
    },
    
    Player1: {
      L: 0, T: 250, W: 55, H: 50
    },          
    Player2: {
      L: 60, T: 250, W: 55, H: 50
    },
    
    ControlsJS: {
      L: 150, T: 250, W: 200, H: 50
    }          
  },
  
  OnInit: function() {
    // Init images
    for(var i=0;i<this.ControlImages.length;i++)
      this.ControlImages[i]=ngApp.AppPath+this.ControlImages[i];    

    var images=this.Images;
    var backimg_dark=ng_URL(this.ControlImages[1]);
    var backimg_light=ng_URL(this.ControlImages[2]);

    ngRegisterControlType('nimIWon', {
      Type: 'ngButton',
      style: {
        zIndex: 100
      },
      Data: {
        Img: images.IWon
      }
    });

    ngRegisterControlType('nimYouWon', {
      Type: 'ngButton',
      style: {
        zIndex: 100
      },
      Data: {
        Img: images.YouWon
      }
    });

    ngRegisterControlType('nimControlsJS', {
      Type: 'ngButton',
      style: {
        zIndex: 100
      },
      Data: {
        Img: images.ControlsJS
      },
      Events: {
        OnClick: function(e) {
          var win = window.open('http://www.controlsjs.com', 'CONTROLSJS');
        }
      }
    });

    ngRegisterControlType('nimThemes', {
      Type: 'ngToolBar',
      ParentReferences: false,
      W: 100, H: 50,
      style: {
        zIndex: 100
      },
      Data: {
        OnThemeChanged: null
      },
      Controls: {
        Light: {
          Type: 'ngButton',
          Data: {
            RadioGroup: 'theme',
            Img: images.BackLight,
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              e.Owner.Check(1);
              var parent=e.Owner.Owner.Owner;
              if(parent.OnThemeChanged) parent.OnThemeChanged(parent);
            }
          }          
        }, 
        Dark: {
          Type: 'ngButton',
          Data: {
            RadioGroup: 'theme',
            Img: images.BackDark
          },
          Events: {
            OnClick: function(e) {
              e.Owner.Check(1);
              var parent=e.Owner.Owner.Owner;
              if(parent.OnThemeChanged) parent.OnThemeChanged(parent);
            }
          }          
        }
      }
    });

    ngRegisterControlType('nimNumPlayers', {
      Type: 'ngToolBar',
      ParentReferences: false,
      W: 100, H: 50,
      style: {
        zIndex: 100
      },
      Data: {
        OnNumPlayersChanged: null
      },
      Controls: {
        One: {
          Type: 'ngButton',
          Data: {
            RadioGroup: 'players',
            Img: images.OnePlayer,
            Checked: 1
          },
          Events: {
            OnClick: function(e) {
              e.Owner.Check(1);
              var parent=e.Owner.Owner.Owner;
              if(parent.OnNumPlayersChanged) parent.OnNumPlayersChanged(parent);
            }
          }          
        }, 
        Two: {
          Type: 'ngButton',
          Data: {
            RadioGroup: 'players',
            Img: images.TwoPlayers
          },
          Events: {
            OnClick: function(e) {
              e.Owner.Check(1);
              var parent=e.Owner.Owner.Owner;
              if(parent.OnNumPlayersChanged) parent.OnNumPlayersChanged(parent);
            }
          }          
        }
      }
    });
    
    ngRegisterControlType('nimPlayer', {
      Type: 'ngImage',
      style: {
        zIndex: 100
      },
      Events: {
        OnGetImg: function(c) {
          var p=ngVal(c.Player,1);
          return (p==2 ? images.Player2 : images.Player1);
        }
      }
    });

    ngRegisterControlType('nimBackground', {
      Type: 'ngText',
      L: 0, T: 0, R: 0, B: 0,
      Events: {
        DoAcceptGestures: function(o,gestures) {
          gestures.swipeleft=true;
        },
        OnGetText: function(c) {
          var dark = ngVal(c.Dark,false);
        
          var o=c.Elm();
          if(o) {
            var cw=ng_ClientWidth(o);
            var ch=ng_ClientHeight(o);
            var img=ng_PreloadImage(backimg_light);
            
            var sw=(cw/img.width);
            
            var sww=Math.round(img.width*sw);
            var swh=Math.round(img.height*sw);
            
            if((sww>=cw)&&(swh>=ch))
            {
              var w=sww;
              var h=swh;
            }
            else
            {
              var sh=(ch/img.height);
              
              var w=Math.round(img.width*sh);
              var h=Math.round(img.height*sh);
            }
            var l=(cw-w)/2;
            var t=((ch-h)/2)*0.4;
            return '<img id="'+this.ID+'_D" src="'+backimg_dark+'" class="'+(dark ? 'Back' : 'BackHidden')+'" style="position:absolute;left:'+l+'px;top:'+t+'px;width:'+w+'px;height:'+h+'px;" alt="" />'
                  +'<img id="'+this.ID+'_L" src="'+backimg_light+'" class="'+(dark ? 'BackHidden' : 'Back')+'" style="position:absolute;left:'+l+'px;top:'+t+'px;width:'+w+'px;height:'+h+'px;" alt="" />'
          }
          else return '';
        }
      }
    });
  } 
};

ngUserControls['NIMGameSkin'] = NIMGameSkin;