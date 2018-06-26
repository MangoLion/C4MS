/*
 * Controls.js NIM Game
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

var Initialized = false;
var AppForm = null;
var NumPlayers;
var Player;
var TakeTimer=null;
//var ngAcceptMouseGestures=true;

function CreateStones(rows, nums)
{
  for(var j=0;j<rows.length;j++)
  {
    var r=rows[j];
    r.Controls.Dispose();
    var def = { };
    for(var i=0;i<nums[j];i++)
    {
      def['M'+i]={ 
        Type: 'nimStone', 
        Data: {
          StoneNum: i 
        }, 
        Events: {
          OnClick: StoneSelectClick,
          OnDblClick: StoneSelectDblClick
        } 
      };
    }
    r.Controls.AddControls(def);
    r.NumStones=nums[j];
    r.Update();
  }
}

function StoneSelectDblClick(e)
{
  StoneSelectClick(e);
  TakeStones();
}

function StoneSelectClick(e)
{
  var btn=e.Owner;
  var row=btn.Owner.Owner;
  
  var rows=[AppForm.Row1,AppForm.Row2,AppForm.Row3,AppForm.Row4];  
  for(var j=0;j<rows.length;j++)
  {
    var r=rows[j];    
    for(var i=r.NumStones-1;i>=0;i--)
    {
      var m=r.Controls['M'+i];
      if(m) m.Check(r===row ? i>=btn.StoneNum : 0);
    }
  }
  if(TakeTimer) clearTimeout(TakeTimer);
  TakeTimer=setTimeout(function() {
    TakeStones();
  },500);
}

function GetNumStones()
{
  return [AppForm.Row1.NumStones,AppForm.Row2.NumStones,AppForm.Row3.NumStones,AppForm.Row4.NumStones];
}

function SetNumStones(a)
{
  var rows=[AppForm.Row1,AppForm.Row2,AppForm.Row3,AppForm.Row4];  
  for(var j=0;j<rows.length;j++)
  {
    var r=rows[j];    
    for(var i=r.NumStones-1;i>=0;i--)
    {
      var m=r.Controls['M'+i];
      if((m)&&(i>=a[j]))
      {
        m.SetVisible(false);
        r.NumStones--;
      }
      else break;
    }
  }  
}

function WinningPosition(a) 
{
  var q=((a[0] ^ a[1] ^ a[2] ^ a[3])==0);
  var r=((a[0] | a[1] | a[2] | a[3])==1);
  return (q ^ r);
}

function ComputerDraught(a) 
{
  if(typeof a === 'undefined') a=GetNumStones();
  if (a[0]+a[1]+a[2]+a[3]!=0) 
  {
    var z,sp;
    
    z=Math.floor(Math.random()*4);
    if (WinningPosition(a)) {
      while (a[z]==0) z=(z+1)%4;
      a[z]--;
    }
    else {
      while (!WinningPosition(a)) {
        z=(z+1)%4;
        while (a[z]==0) z=(z+1)%4;
        sp=a[z];
        while (!WinningPosition(a) && a[z]!=0) a[z]--;
        if (!WinningPosition(a)) a[z]=sp;
      }
    }
    var t=new Date().getTime()+300;
    while(new Date().getTime()<t) {};
    SetNumStones(a);
    if (a[0]+a[1]+a[2]+a[3]==0)
      AppForm.YouWon.SetVisible(true);
  }
  else
    AppForm.IWon.SetVisible(true);
}
      
    
function BackgroundGesture(c,pi)
{
  if(pi.Gesture==='swipeleft') ResetGame(); 
} 

function ResetGame()
{
  var a=[];
  var numstones=0;
  for(var i=0;i<4;i++) {  
    a[i]=Math.floor(Math.random()*7)+1;
    for(var j=0;j<i;j++) if(a[j]===a[i]) { i--; break; }
    numstones+=a[i];    
  }  
  if(numstones>20) 
  {
    ComputerDraught(a); // Give user a chance :)
    for(var i=0;i<4;i++) // Make sure 1 stone is in every row   
      if(!a[i]) a[i]=1;
  }
  CreateStones([AppForm.Row1,AppForm.Row2,AppForm.Row3,AppForm.Row4],a);
  AppForm.IWon.SetVisible(false);
  AppForm.YouWon.SetVisible(false);
  AppForm.NewGame.SetVisible(false);
  AppForm.NumPlayers.SetVisible(true);
  AppForm.Player.SetVisible(false);
}

function NewGameClick(e)
{
  ResetGame();
}

function TakeStones()
{
  var taken=false;
  
  if(TakeTimer) clearTimeout(TakeTimer);
  TakeTimer=null;

  var rows=[AppForm.Row1,AppForm.Row2,AppForm.Row3,AppForm.Row4];  
  for(var j=0;j<rows.length;j++)
  {
    var r=rows[j];    
    for(var i=r.NumStones-1;i>=0;i--)
    {
      var m=r.Controls['M'+i];
      if((m)&&(m.Checked==1))
      {
        m.SetVisible(false);
        r.NumStones--;
        taken=true;
      }
    }
  }
  if(!taken) return;

  if(AppForm.NumPlayers.Visible) 
  {
    Player=1;
    NumPlayers=(AppForm.NumPlayers.Controls.Two.Checked==1 ? 2 : 1);
    AppForm.NewGame.SetVisible(true);
    AppForm.NumPlayers.SetVisible(false);
    AppForm.Player.Player=1;
    AppForm.Player.SetVisible(NumPlayers===2);
  }
  if(NumPlayers==1) ngApp.InvokeLater(function() { ComputerDraught(); });
  else
  {
    var a=GetNumStones();
    if (a[0]+a[1]+a[2]+a[3]==0)
      AppForm.YouWon.SetVisible(true);
  }
  if(NumPlayers==2)
  { 
    Player=(Player==2 ? 1 : 2);
    AppForm.Player.Player=Player;
    AppForm.Player.Update();
  }
}

function ThemeChanged(c)
{
  var dark=(AppForm.Theme.Controls.Dark.Checked==1);
  AppForm.Background.Dark=dark;

  if(Initialized) 
  {  
    var ol=document.getElementById(AppForm.Background.ID+'_L');
    var od=document.getElementById(AppForm.Background.ID+'_D');
    if((ol)&&(od))
    {
      if(dark)
      {
        ol.style.zIndex=1;
        od.style.zIndex=0; 
        od.className='Back';
        ol.className='BackHidden';
      }
      else
      {
        od.style.zIndex=1;
        ol.style.zIndex=0;
        ol.className='Back';
        od.className='BackHidden';
      }
    }
  }
  else AppForm.Background.Update();
  if(!ngCordova) ngApp.SetClientParam('theme',(dark ? 'dark' : 'light'));
}

function NumPlayersChanged(c)
{
  var two=(AppForm.NumPlayers.Controls.Two.Checked==1);
  if(!ngCordova) ngApp.SetClientParam('players',(two ? '2' : '1'));
}

function ParamsChanged(app)
{
  var theme=ngApp.Param('theme');
  if(theme=='dark')  AppForm.Theme.Controls.Dark.Check(1);
  if(theme=='light') AppForm.Theme.Controls.Light.Check(1);
  ThemeChanged();

  var players=ngApp.Param('players');
  if(players==1) AppForm.NumPlayers.Controls.One.Check(1);
  if(players==2) AppForm.NumPlayers.Controls.Two.Check(1);
  NumPlayersChanged();
}

function DeviceChanged(newdevice)
{
  if((ngDevice==='mobile')||(ngDevice==='mobile_landscape'))
  {
    if((newdevice==='mobile')||(newdevice==='mobile_landscape'))
    {    
      ngApp.InvokeLater(function() {
        var a=GetNumStones();
        AppForm.GamePanel.Dispose();
        AppForm.AddControls(ngRes('GamePanel'));
        CreateStones([AppForm.Row1,AppForm.Row2,AppForm.Row3,AppForm.Row4],[1,3,5,7]);
        SetNumStones(a);
        AppForm.GamePanel.Update();
      });
    }
  }
  return true;
}

function ngMain() 
{
  AppForm = new ngControls(ngRes('GameForm'));
  AppForm.AddControls(ngRes('GamePanel'));
  ResetGame();
  AppForm.Update();

  ngApp.PersistParam('theme');  
  ngApp.PersistParam('players');  
  ParamsChanged(ngApp);
  ngApp.OnParamsChanged = ParamsChanged; 
  
  ngApp.OnDeviceChanged = DeviceChanged;
  Initialized=true;
}
