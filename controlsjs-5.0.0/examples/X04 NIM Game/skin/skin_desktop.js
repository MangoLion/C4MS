if(typeof ngUserControls === 'undefined') ngUserControls = new Array();

var NIMGameDeviceSkin = {
  ControlImages: [
    'skin/skin_desktop.png?2'
  ],

  Images: {
    Stones: [
      { L: 0,   T: 0, ST: 81, W: 80, H: 80 },
      { L: 80,  T: 0, ST: 81, W: 80, H: 80 },
      { L: 160, T: 0, ST: 81, W: 80, H: 80 },
      { L: 240, T: 0, ST: 81, W: 80, H: 80 }
    ],
    
    NewGame: {
      L: 0, T: 160, oL: 80, W: 80, H: 80
    },

    Take: {
      L: 160, T: 160, oL: 240, W: 80, H: 80
    }
    
  },
  
  OnInit: function() {
    // Init images
    for(var i=0;i<this.ControlImages.length;i++)
      this.ControlImages[i]=ngApp.AppPath+this.ControlImages[i];    

    var images=this.Images;

    ngRegisterControlType('nimStone', {
      Type: 'ngButton',
      style: {
        zIndex: 100
      },
      Events: {
        OnGetImg: function(c, idx) {
          if(!idx)
          {
            if(typeof c.StoneImgIdx === 'undefined')
              c.StoneImgIdx=Math.floor(Math.random()*images.Stones.length);
            return ((c.StoneImgIdx>=0)&&(c.StoneImgIdx<images.Stones.length) ? images.Stones[c.StoneImgIdx] : null); 
          }
          return null;          
        }
      }
    });

    ngRegisterControlType('nimNewGame', {
      Type: 'ngButton',
      style: {
        zIndex: 100
      },
      Data: {
        LeftImg: images.NewGame
      }
    });

    ngRegisterControlType('nimTake', {
      Type: 'ngButton',
      style: {
        zIndex: 100
      },
      Data: {
        LeftImg: images.Take
      }
    });
    
  } 
};

ngUserControls['NIMGameDeviceSkin'] = NIMGameDeviceSkin;