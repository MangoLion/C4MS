if(typeof ngUserControls === 'undefined') ngUserControls = new Array();

var NIMGameDeviceSkin = {
  ControlImages: [
    'skin/skin_mobile.png?1'
  ],

  Images: {
    Stones: [
      { L: 0,   T: 0, ST: 51, W: 40, H: 40 },
      { L: 50,  T: 0, ST: 51, W: 40, H: 40 },
      { L: 100, T: 0, ST: 51, W: 40, H: 40 },
      { L: 150, T: 0, ST: 51, W: 40, H: 40 }
    ],
    
    NewGame: {
      L: 0, T: 100, oL: 50, W: 50, H: 50
    },

    Take: {
      L: 100, T: 100, oL: 150, W: 40, H: 40
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