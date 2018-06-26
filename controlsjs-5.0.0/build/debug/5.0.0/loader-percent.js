/*!
 * Controls.js - loader-percent.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 * This version of Controls.js is licensed under the terms of GNU General Public License v3.
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 * The commercial license can be purchased at Controls.js website.
 */








// Debug ENABLED
var ngDEBUG=1;


/*!
 * Controls.js - libs.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */

var ngLibsURL=(typeof ngLibsURL !== 'undefined' ? ngLibsURL : 'controls/libs/');
if(typeof ngLib === 'undefined') ngLib=new Array();
if(typeof ngLib['ng_controls'] === 'undefined') ngLib['ng_controls']={ path: 'ng_controls/' };
if(typeof ngLib['ng_basic'] === 'undefined') ngLib['ng_basic']={ path: 'ng_basic/' };
if(typeof ngLib['ng_winxp'] === 'undefined') ngLib['ng_winxp']={ path: 'ng_winxp/' };
if(typeof ngLib['ng_winwineight'] === 'undefined') ngLib['ng_wineight']={ path: 'ng_wineight/' };
if(typeof ngLib['ng_wireframe'] === 'undefined') ngLib['ng_wireframe']={ path: 'ng_wireframe/' };
if(typeof ngLib['lib_knockout'] === 'undefined') ngLib['lib_knockout']={ path: 'lib_knockout/' };
if(typeof ngLib['lib_hammerjs'] === 'undefined') ngLib['lib_hammerjs']={ path: 'lib_hammerjs/' };

/*!
 * Controls.js - loader.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */

var ngOnAppLoading=(typeof ngOnAppLoading === 'undefined' ? null : ngOnAppLoading);
var ngOnAppLoaded=(typeof ngOnAppLoaded === 'undefined' ? null : ngOnAppLoaded);
var ngOnAppCreated=(typeof ngOnAppCreated === 'undefined' ? null : ngOnAppCreated);
var ngOnAppLoadProgress=(typeof ngOnAppLoadProgress === 'undefined' ? null : ngOnAppLoadProgress);
var ngOnAppFileLoad=(typeof ngOnAppFileLoad === 'undefined' ? null : ngOnAppFileLoad);
var ngOnAppFileLoaded=(typeof ngOnAppFileLoaded === 'undefined' ? null : ngOnAppFileLoaded);

function ngCreateHTMLFragment(htmlStr) {     
  var frag = document.createDocumentFragment();
  if(frag) {     
    var temp = document.createElement('div');
    temp.innerHTML = htmlStr;     
    while (temp.firstChild) frag.appendChild(temp.firstChild);
  }
  return frag; 
}

function ngLoadApplication(elm, callback, files)
{
  if((typeof ngOnAppLoading === 'function')&&(!ngOnAppLoading())) return false;
  
  var head=document.getElementsByTagName("head").item(0);
  if(!head) return false;

  var device, lastprogress=0, loadorder=0;
  var apploading=1,appparts=1,loadedparts=0,readyparts=0,apppath='',appdomain='', appimages={};
  var scriptsqueue=[];

  var ua=navigator.userAgent.toLowerCase();
  var cordova = (typeof window.cordova !== 'undefined');
  var winphone = (ua.indexOf("windows phone") != -1);
  var opera = (ua.indexOf("opera") != -1);
  var operaver;
  if(opera) operaver=parseFloat(window.opera.version());


  var oScripts = document.getElementsByTagName("script");
  var s,idx,out="";
  for (var i=0; i<oScripts.length; i++)
  {
    if(typeof oScripts[i].src !== 'undefined')
    {
      s=oScripts[i].src;
      idx=s.indexOf("apploader=");
      if(idx>=0) 
      {
        idx=s.indexOf("?");
        if(idx>=0)
        {
          apppath=s.substring(0,idx);
          idx=apppath.lastIndexOf('/');
          if(idx<=0) apppath='';
          else apppath=apppath.substring(0,idx+1);
          break;
        }
      }      
    }
  }
  if(apppath!='')
  {
    idx=apppath.indexOf('://');
    if(idx>=0) {
      for(idx+=3;idx<apppath.length;idx++)
        if(apppath.charAt(idx)=='/')
        {
          appdomain=apppath.substring(0,idx);
          break;
        }    
    }
    if(apppath.charAt(apppath.length-1)!='/') apppath+='/';
  }
  
  function loadappfiles(f)
  {
    var url,p,e,ext;
    
    // load CSS and images first  
    for(var i in f)
    {
      if(typeof f[i] === 'string') f[i]={ File: f[i] };
      if(typeof f[i].Type === 'undefined')
      {
        url=url_stripparams(f[i].File);
        p=url.lastIndexOf('/');
        if(p<0) p=url.lastIndexOf("\\");
        e=url.lastIndexOf('.');
        if(e>p)
        {
          ext=url.substring(e+1).toLowerCase();
          switch(ext)
          {
            case 'js':  f[i].Type=1; break;
            case 'css': f[i].Type=0; break;
            case 'png': 
            case 'jpg': 
            case 'gif': 
            case 'jpeg': 
            case 'bmp':
                        f[i].Type=2; break;
          }
        }
      }
      switch(f[i].Type)
      {
        case 0: ngLoadAppCSS(f[i].File, f[i]); break;
        case 2: ngLoadAppImg(f[i].File, f[i]); break;
      }
    }
    // Load scripts
    for(var i in f)
      if(f[i].Type===1) ngLoadAppScript(f[i].File, f[i], null, f[i].Async); 
  }

  function url_domain(url)
  {
    var idx=url.indexOf('://');
    if(idx<0) return window.location.hostname;
    url=url.substring(idx+3,url.length);
    idx=url.indexOf('/');
    if(idx>=0) url=url.substring(0,idx);
    idx=url.indexOf(':');
    if(idx>=0) url=url.substring(0,idx);
    return url;
  }
  
  function url_stripparams(url)
  {
    var i=url.indexOf('?');
    if(i>=0) url=url.substr(0,i);
    i=url.indexOf('#');
    if(i>=0) url=url.substr(0,i);
    return url;
  }
  
  function platform_url(url)
  {
    return (cordova && winphone && (url_domain(url)==window.location.hostname) ? url_stripparams(url) : url); 
  }
  
  function exec_script(code)
  {
    if(typeof Windows !== 'undefined') /* WinStoreApp */ {
      MSApp.execUnsafeLocalFunction(function () {
        window["eval"].call(window, code);
      });
    } else 
    {
      if(window.execScript) window.execScript(code); 
      else window["eval"].call(window, code);
    }
  }
  
  window.ngInitializeAppUnits = function() {
    if(typeof ngAppUnits === 'object')
    {
      for(var i in ngAppUnits)
        if(typeof ngAppUnits[i].LoadOrder==='undefined')
          ngAppUnits[i].LoadOrder=loadorder++;

      ngAppUnits.sort(function(u1,u2){ 
        if(typeof u1.Priority === 'undefined') u1.Priority=0.5;
        if(typeof u2.Priority === 'undefined') u2.Priority=0.5;
        if(u1.Priority<0) u1.Priority=0;
        if(u2.Priority<0) u2.Priority=0;
        if(u1.Priority>1.0) u1.Priority=1.0;
        if(u2.Priority>1.0) u2.Priority=1.0;
        if(u1.Priority>u2.Priority) return -1;
        if(u1.Priority<u2.Priority) return 1;
        return (u1.LoadOrder-u2.LoadOrder);
      });

      for(var i in ngAppUnits)
        if(!ngAppUnits[i].Initialized)
        {
          ngAppUnits[i].Initialized=true;
          if(typeof ngAppUnits[i].OnInit === 'function') ngAppUnits[i].OnInit();
        }
    }
  }
  
  function apppartloaded(type, url, data, notready)
  {
    loadedparts++;    
    if((apploading)&&(typeof ngOnAppLoadProgress === 'function')) 
    {
      var p=appparts>0 ? Math.round(loadedparts*100/appparts) : 0;
      if(p>lastprogress)
      {
        ngOnAppLoadProgress(p);
        lastprogress=p;
      }
    }
    if(!notready) apppartready(type, url, data)
  }
  
  function apppartready(type, url, data)
  {
    readyparts++;
    if((type>=0)&&(typeof ngOnAppFileLoaded === 'function')) ngOnAppFileLoaded(type, url, data);

    if(readyparts===appparts)
    {
      // Initialize application units
      ngInitializeAppUnits();

      if((apploading)&&(readyparts===appparts)) 
      {
        var startup = setTimeout(function() {
          clearTimeout(startup);
      
          if(typeof ngOnAppLoaded === 'function') ngOnAppLoaded();
          if(readyparts<appparts)
          {
            // ngOnAppLoaded added some files, clear callback and wait for files
            ngOnAppLoaded=null;
            return;
          }
          apploading=0;
          
          if(typeof ngApplication === 'function') 
          {
            new ngApplication((typeof ngStartParams === 'function' ? new ngStartParams() : {}), (elm && (typeof elm==='object' || elm!='') ? elm : 'ngApp'),false);
            if((ngApp)&&(apppath!='')) ngApp.AppPath=apppath;
            if(typeof ngOnAppCreated === 'function') ngOnAppCreated(ngApp);
          }
          
          if((callback)&&(!callback(ngApp))) return;
          if(ngApp) ngApp.Run();
        },100);
      }
    }
  }
  
  window.ngAppURL = function(url)
  {
    url=platform_url(url);
    var idx=url.indexOf("://");
    if((idx>=0)||(url=='')) return url;
    
    if(url.charAt(0)=='/') return appdomain+url;
    return apppath+url;
  }

  window.ngLoadAppCSS = function(url, data)
  {
    if((typeof ngOnAppFileLoad === 'function')&&(!ngOnAppFileLoad(0,url,data))) return;
    var o = document.createElement("link");  
    o.setAttribute("rel","stylesheet"); 
    o.setAttribute("type","text/css"); 
    o.setAttribute("href",ngAppURL(url)); 
    head.appendChild(o);
  }  
  
  window.ngLoadAppScript = function(url, data, loadcallback, async)
  {
    var asyncloader=(window.XMLHttpRequest)&&
                    ((typeof ngDEBUG === 'undefined')||(!ngDEBUG))&&
                    ((!opera)||((operaver>=11.1)&&(window.location.protocol!='file:')))&&
                    ((typeof Windows !== 'undefined') /* WinStoreApp */                     
                  || ((url_domain(url)==window.location.hostname)&&(window.location.hostname!='')));
    
    if((typeof ngOnAppFileLoad === 'function')&&(!ngOnAppFileLoad(1,url,data))) return;
    appparts++;
    
    if(!async) {
      var scriptdata={URL: url, Data: data, Async: asyncloader, LoadCallback: loadcallback };
      scriptsqueue.push(scriptdata);
      if((!asyncloader)&&(scriptsqueue.length>1)) return;    
    }    
    
    function loadscript(url, data, loadcallback, asyncloader)
    {
      function scripterror(isasync)
      {
        var c=(typeof console!=='undefined' ? console : null);
        if(c) c.error('Script "'+url+'" was not loaded!');
        scriptloaded(isasync);
      }
      
      var loaded = false;
      function scriptloaded(isasync,code)
      {                                       
        if(loaded) return;
        loaded = true;
  
        if(async)
        {
          if((typeof code!=='undefined')&&(code!=='')) {
            exec_script(code);             
          }
          if(typeof loadcallback === 'function') loadcallback(1,url,data);
          apppartloaded(1,url,data);
          return;
        }
        if(isasync===true) apppartloaded(1,url,data,true);
        var li=scriptsqueue[0];                      
        if(!li.Async)
        {                 
          if(isasync===true) return; 
          scriptsqueue.splice(0,1);
          if(typeof li.LoadCallback === 'function') li.LoadCallback(1,li.URL,li.Data);
          apppartloaded(1,li.URL,li.Data);   
        }
                            
        var code;
        while(scriptsqueue.length)
        {
          li=scriptsqueue[0];                      
          if(!li.Async) 
          { 
            loadscript(li.URL, li.Data, li.LoadCallback,false);
            break;
          }              
          code=li.code;
          if(typeof code==='undefined') break;
          if(code!=='') exec_script(code);  
          scriptsqueue.splice(0,1);
          if(typeof li.LoadCallback === 'function') li.LoadCallback(1,li.URL,li.Data);
          apppartready(1,li.URL,li.Data);
        }
      }

      var scripturl=ngAppURL(url);
      if(asyncloader) 
      {
        var xmlhttp=new XMLHttpRequest();       
        xmlhttp.onreadystatechange=function()
        {
          if(xmlhttp.readyState==4)
          {
            if((xmlhttp.status==200)||(xmlhttp.status==304)||(xmlhttp.status==0))
            { 
              if(!async) scriptdata.code=xmlhttp.responseText;
              scriptloaded(true,xmlhttp.responseText);
            }
            else
            { 
              if(!async) scriptdata.code='';
              scripterror(true);
            }
          }
        }
        xmlhttp.open('GET',scripturl,true);
        xmlhttp.send();
        return;
      }
    
      var o = document.createElement("script");
      o.onload = scriptloaded;
      o.onerror = scripterror; 
      o.onreadystatechange= function () {
        if(this.readyState != "loaded" && this.readyState != "complete") return;
        scriptloaded();
      }
      o.setAttribute("src",scripturl);
      head.appendChild(o);
    }
    
    loadscript(url, data, loadcallback, asyncloader);
  }  

  window.ngLoadAppImg = function(url, data, loadcallback)
  {
    if((typeof ngOnAppFileLoad === 'function')&&(!ngOnAppFileLoad(2,url,data))) return null;
    var i=appimages[url];
    if(typeof i === 'undefined')
    {
      i=new Image; 
      appparts++;
      var loaded = false;
      function imgloaded()
      {
        if(loaded) return;
        loaded = true;
        if(typeof loadcallback === 'function') loadcallback(2,url,data);
        apppartloaded(2,url,data);   
      }
      i.onload=imgloaded;
      i.onfailure=imgloaded;
      i.onerror=imgloaded;
      appimages[url]=i;
      i.src=ngAppURL(url);
    }
    return i;
  }

  // Fix for Internet Explorer on Windows Phone 8 which sometimes returns false screen dimensions right after page load.
  // Solution is to wait for a while.   
  var loadtimer=setTimeout(function() { 
    clearTimeout(loadtimer);

    if(!files) 
    {
      files=[];
      if(ngAppFiles) 
      {
        for(var i in ngAppFiles)
          files.push(ngAppFiles[i]);
      }
  
      if(typeof ngDetectDevice === 'function') // Devices present
      {
        if(typeof ngDevice === 'undefined') ngDevice=ngDetectDevice();
        if((typeof ngDevice !== 'undefined')&&(typeof ngAppDeviceFiles !== 'undefined'))
        {
          var devfiles=ngAppDeviceFiles[ngDevice];
          if(typeof devfiles !== 'undefined')
          {
            for(var i in devfiles)
              files.push(devfiles[i]);
          }
        }
      }
    }
    
    if(files) loadappfiles(files);
    apppartloaded(-1);
    
  },100);   
  return true;
}

/*!
 * Controls.js - devices.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */

function ngDeviceReset(device)
{
  if((typeof ngDevices === 'object')&&(ngDevices))
  {
    if((typeof device==='undefined')||(typeof ngDevices[device] === 'object'))
    {
      var url=window.location.href;
      var i1=url.indexOf('?');
      var i2=url.indexOf('#');
      var url1='';
      var url2='',url3;
      if(i2>=0) 
      {
        url2=url.substr(i2);
        url=url.substr(0,i2);  
      }
      if(i1>=0) 
      { 
        url1=url.substr(i1+1);
        url=url.substr(0,i1);
      }
      i1=url1.indexOf('appdevice=');
      if(i1>=0)
      {
        i2=url1.indexOf('&',i1);
        if(i2>=0) url3=url1.substr(i2+1);
        else url3='';
        url1=url1.substr(0,i1);

        if(typeof device!=='undefined')
        {
          url1+='appdevice='+device;
        }
        else if(i1>0) url1=url1.substr(0,i1-1);
        if(url3!='') 
        {
          if(url1!='') url1+='&';
          url1+=url3;
        }
      }
      else
      {
        if(typeof device!=='undefined')
        {
          if(url1!='') url1+='&';
          url1+='appdevice='+device;
        }
      }          
      if(url1!='') url+='?'+url1;
      url+=url2;
      if(window.location.href==url)
        window.location.reload();
      else
        window.location.href=url;
    }  
  } 
}

function ngGetDeviceInfo()
{
  var width=0, height=0;
  if(typeof(window.innerWidth)=='number') {width=window.innerWidth; height=window.innerHeight;}
  else if(document.documentElement&&document.documentElement.clientWidth) {width=document.documentElement.clientWidth; height=document.documentElement.clientHeight;}
  else if(document.body&&document.body.clientWidth) {width=document.body.clientWidth; height=document.body.clientHeight;}

/*
  // Get DPI ... not working :(  
  var dpi_x, dpi_y;
  dpi_x = screen.deviceXDPI; // IE
  dpi_y = screen.deviceYDPI;
  if(typeof dpi_x === 'undefined')
  {
     var matchMedia = window.matchMedia || window.msMatchMedia;
     if (matchMedia) 
     {
       for(var i=1;i<600;i++)
       {
         if(matchMedia('(max-resolution: '+i+'dpi)').matches)
         {
           dpi_x=i; dpi_y=i;
           break;
         }
       }
     }*/
  /*
    var nd=document.createElement('div');
    nd.style.position="absolute";
    nd.style.left="-1in";
    nd.style.top="-1in";
    nd.style.width="1in";
    nd.style.height="1in";
    document.body.appendChild(nd);
    
    function getcompstyle(o,s)
    {
      var val;
      if(document.defaultView && document.defaultView.getComputedStyle)
      { 
        var cstyle=document.defaultView.getComputedStyle(o, '');
        if(cstyle) val = cstyle.getPropertyValue(s);
      }
      else if(o.currentStyle) 
      {
        s = s.replace(/\-(\w)/g, function (s, p){ return p.toUpperCase(); });
        val = o.currentStyle[s];
      }
      return val;
    }
    dpi_x = parseInt(getcompstyle(nd,'width'));
    dpi_y = parseInt(getcompstyle(nd,'height'));
    
    
    //dpi_x = parseInt(nd.offsetWidth);
    //dpi_y = parseInt(nd.offsetHeight);
    document.body.removeChild(nd);
*/
  //  if(dpi_x<=0) dpi_x=96;    // no DPI, assume default screen
  //  if(dpi_y<=0) dpi_y=dpi_x; // no horizontal DPI, set as vertical 
    
/*  }  
  if(typeof dpi_x === 'undefined') dpi_x=96;
  if(typeof dpi_y === 'undefined') dpi_y=96;
*/
  var colordepth=window.screen.colorDepth;
  if(typeof colordepth === 'undefined') colordepth=24;
  
  var scrwidth=screen.width;
  if(typeof scrwidth === 'undefined') scrwidth=width;  
  var scrheight=screen.height;
  if(typeof scrheight === 'undefined') scrheight=height;  

//  var inwidth=width / dpi_x;
//  var inheight=height / dpi_y;

  //var inscrwidth=scrwidth / dpi_x;
//  var inscrheight=scrheight / dpi_y;

  //var diagonal=Math.sqrt(inwidth*inwidth+inheight*inheight);
  //var scrdiagonal=Math.sqrt(inscrwidth*inscrwidth+inscrheight*inscrheight);
  var scrorientation=window.orientation;
  if(typeof scrorientation === 'undefined') scrorientation = (scrwidth>scrheight ? 90 : 0);
  var orientation=(width>height ? 90 : 0)  
  var landscape = (orientation==90);
  var scrlandscape = (Math.abs(scrorientation % 180)==90);
  return {
    ScreenWidth: scrwidth,
    ScreenHeight: scrheight,
//    ScreenWidthInInches: inscrwidth,
//    ScreenHeightInInches: inscrheight,
//    ScreenWidthInMillimeters: inscrwidth * 25.4, 
//    ScreenHeightInMillimeters: inscrheight * 25.4,
//    ScreenDiagonalInInches: scrdiagonal, 
//    ScreenDiagonalInMillimeters: scrdiagonal * 25.4,         
//    ScreenAspectRatio: (inscrheight > 0 ? inscrwidth/inscrheight : 0),
    ScreenOrientation: scrorientation,
    ScreenLandscape: scrlandscape,
    ScreenPortrait: !scrlandscape,
     
    Width: width,
    Height: height,
//    WidthInInches: inwidth,
//    HeightInInches: inheight,
//    WidthInMillimeters: inwidth * 25.4, 
//    HeightInMillimeters: inheight * 25.4,
//    DiagonalInInches: diagonal, 
//    DiagonalInMillimeters: diagonal * 25.4,    
//    AspectRatio: (inheight > 0 ? inwidth/inheight : 0),
    Orientation: orientation,
    Landscape: landscape,
    Portrait: !landscape,
     
//    PixelRatio: dpi_x/dpi_y,
//    ResolutionX: dpi_x,       
//    ResolutionY: dpi_y,
//    Resolution: (dpi_x > dpi_y ? dpi_x : dpi_y), 

    ColorDepth: colordepth,
    SupportsTouch: ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch) || navigator.msMaxTouchPoints ? true : false)
  };   
}

function ngDetectDevice()
{
  var device;
  if((typeof ngDevices === 'object')&&(ngDevices)) 
  {
    var di=ngGetDeviceInfo();
    var maxpts=0, minprops=10000;
    var defaultdevice;
    var ua=navigator.userAgent.toLowerCase();
    
    function evalprops(dev, props)
    {
      var req,neg,v,prefix,match;
      var pts=0,numprops=0;
      for(var p in props)
      {
        v=props[p];
        numprops++;
        prefix=p.substr(0,3);
        if(prefix=='Opt')
        {
          p=p.substring(3,p.length);
          prefix=p.substr(0,3);
          req=false;
        }
        else req=true;
        if(prefix=='Not')
        {
          p=p.substring(3,p.length);
          prefix=p.substr(0,3);
          neg=true;
        }
        else neg=false;
        match=false;
        switch(prefix)
        {
          case 'Min':
            p=p.substring(3,p.length);
            if(((!neg)&&(di[p]>=v))||((neg)&&(di[p]<v))) match=true;
            break;
          case 'Max':
            p=p.substring(3,p.length);
            if(((!neg)&&(di[p]<v))||((neg)&&(di[p]>=v))) match=true;
            break;
          default:
            switch(p)
            {
              case 'IsMobile':
                req=false;numprops--;
                break;
              case 'IExplorer':
                v=(eval("/*@cc_on!@*/false"))==v; 
                if(!neg==v) match=true;
                break;
              case 'FireFox':
                v=((ua.indexOf("firefox") != -1)==v);
                if(!neg==v) match=true;
                break;
              case 'Chrome':
                v=((ua.indexOf("chrome") != -1)==v);
                if(!neg==v) match=true;
                break;
              case 'Safari':
                v=((ua.indexOf("safari") != -1)==v);
                if(!neg==v) match=true;
                break;              
              case 'Opera': 
                v=((ua.indexOf("opera") != -1)==v);
                if(!neg==v) match=true;
                break;
              case 'UserAgent':
                v=(navigator.userAgent.indexOf(v) != -1);
                if(!neg==v) match=true;
                break;
              case 'UserAgentIC':
                v=(ua.indexOf(v.toLowerCase()) != -1);
                if(!neg==v) match=true;
                break;
              default:
                if(((!neg)&&(di[p]==v))||((neg)&&(di[p]!=v))) match=true;
                break;
            }
            break;
        }
        if(match) pts++;
        else if(req) { pts=-10000; break; } 
      } 
      if(!numprops) {
        if(typeof defaultdevice === 'undefined') defaultdevice=dev;
      }
      else
      {
        if((pts>=0)&&((pts>maxpts)||((pts==maxpts)&&(numprops<minprops))))
        {
          maxpts=pts;
          minprops=numprops;
          device=dev;
        }
      }
    }
    
    var devprops,hasobjects;
    for(var dev in ngDevices)
    {
      devprops=ngDevices[dev];
      hasobjects=false;
      for(var p in devprops)
        if(typeof devprops[p]==='object') 
        {
          hasobjects=true;
          evalprops(dev, devprops[p]);
        }        
      if(!hasobjects) evalprops(dev, devprops);        
    }
    if(typeof device==='undefined') device=defaultdevice;
  }
  return device;
}
  
function ngLoadAppDeviceCSS(device, url, data)
{
  if((typeof ngDevice === 'undefined')||(ngDevice!=device)) return;
  return ngLoadAppCSS(url,data);
}

function ngLoadAppDeviceScript(device, url, data, loadcallback, async)
{
  if((typeof ngDevice === 'undefined')||(ngDevice!=device)) return;
  return ngLoadAppScript(url,data,loadcallback,async);
}

function ngLoadAppDeviceImg(device, url, data, loadcallback)
{
  if((typeof ngDevice === 'undefined')||(ngDevice!=device)) return;
  return ngLoadAppImg(url,data,loadcallback);
}

/*!
 * Controls.js - progress-percent.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */

(function() {      
  var curprogress=0;
  var progress=0;
  var progress_timer=0;
    
  function anim_progress()
  {
    if(progress<curprogress) {
      progress++;
      var o=document.getElementById('ngLoadProgress');
      if(o) o.innerHTML=progress+' %';
    }
    else 
    {
      clearInterval(progress_timer);
      progress_timer=0;
    }            
  }   
  
  ngOnAppLoadProgress = function(p) {
    if(curprogress!=p) {
      curprogress=p;
      var i=1000/(curprogress-p);
      if(i<10) i=10;
      if(progress_timer) clearInterval(progress_timer);
      progress_timer=setInterval(anim_progress, i);
    }          
  }
})();
