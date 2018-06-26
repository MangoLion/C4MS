/*!
 * Controls.js - controls-notouch.js
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
 * Controls.js - basic.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */



/** 
 *  Variable: ngLibsURL
 *  Default main URL location of the libraries. 
 *  If not specified the URL is automaticaly detected based on location of ng_basic 
 *  library or controls.js script.
 */  
//var ngLibsURL;

/**
 *  Variable: ngHTTPProtocol
 *  Used protocol (http:// or https://).
 */
var ngHTTPProtocol='http://';

/**
 *  Variable: ngEmptyURL
 *  URL to non-existent content. 
 *   
 *  Usually used for reseting image URL.
 *   
 *  Default value: ngLibPath('ng_basic', 'empty.gif?nop');
 */ 

var ua=navigator.userAgent.toLowerCase();

/** 
 *  Variable: ngOpera
 *  TRUE if user is using the Opera browser.
 */  
var ngOpera = (ua.indexOf("opera") != -1);

/** 
 *  Variable: ngOperaVersion
 *  Float number identifying Opera browser version
 */
var ngOperaVersion = (ngOpera ? parseFloat(window.opera.version()) : undefined);

/** 
 *  Variable: ngIExplorer
 *  TRUE if user is using the Internet Explorer browser.
 */  
var ngIExplorer = eval("/*@cc_on!@*/false"); 
/** 
 *  Variable: ngIExplorerVersion
 *  Version of the Internet Explorer browser.
 */  
var ngIExplorerVersion = (ngIExplorer ? parseInt( ua.match( /msie (\d+)/ )[1] ) : undefined);

if((!ngIExplorer)&&(ua.match(/trident/))) // IE>=11 detection
{
  var v=ua.match( /rv\:(\d+)/ );
  if(!v) v=ua.match( /msie (\d+)/ );
  if(v)
  {  
    ngIExplorer = true;
    ngIExplorerVersion = parseInt(v[1]);
  }
}

/** 
 *  Variable: ngIExplorer6
 *  TRUE if user is using the Internet Explorer version 6 or lower.
 */  
var ngIExplorer6 = ngIExplorer && ( ngIExplorerVersion < 7 ); 
 
/** 
 *  Variable: ngFireFox
 *  TRUE if user is using the Firefox browser.
 */  
var ngFireFox = (ua.indexOf("firefox") != -1);
/** 
 *  Variable: ngFireFoxVersion
 *  Version of the Firefox browser.
 */  
var ngFireFoxVersion = (ngFireFox ? parseInt( ua.match( /firefox\/(.*)$/ )[1] ) : undefined);

/** 
 *  Variable: ngFireFox1x
 *  TRUE if user is using the Firefox browser version 1.x.
 */  
var ngFireFox1x = ((ngFireFox)&&(ua.indexOf("firefox/1.")!=-1));
/** 
 *  Variable: ngFireFox2x
 *  TRUE if user is using the Firefox browser version 2.x.
 */  
var ngFireFox2x = ((ngFireFox)&&(ua.indexOf("firefox/2.")!=-1));
/** 
 *  Variable: ngChrome
 *  TRUE if user is using the Chrome browser.
 */  
var ngChrome = (ua.indexOf("chrome") != -1);
/** 
 *  Variable: ngSafari
 *  TRUE if user is using the Safari browser.
 */  
var ngSafari = (ua.indexOf("safari") != -1);
/** 
 *  Variable: ngAndroid
 *  TRUE if device uses Android OS.
 */  
var ngAndroid = (ua.indexOf("android") != -1);
/** 
 *  Variable: ngiOS
 *  TRUE if device uses Apple iOS.
 */  
var ngiOS = ( ua.match(/(ipad|iphone|ipod)/g) ? true : false );
/** 
 *  Variable: ngWindowsPhone
 *  TRUE if device uses Windows Phone OS.
 */  
var ngWindowsPhone = (ua.indexOf("windows phone") != -1);
/** 
 *  Variable: ngFireFoxOS
 *  TRUE if device uses FireFox OS.
 */  
var ngFireFoxOS = ngFireFox && (ua.indexOf("mobile") != -1);
/** 
 *  Variable: ngCordova
 *  TRUE if running inside Apache Cordova (PhoneGap)
 */  
var ngCordova = (typeof window.cordova !== 'undefined');
/** 
 *  Variable: ngWinStoreApp
 *  TRUE if running as Windows Store App
 */  
var ngWinStoreApp = (typeof Windows !== 'undefined');
/** 
 *  Variable: ngSupportsTouch
 *  TRUE if browser supports touch.
 */  
var ngSupportsTouch = ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch) || navigator.msMaxTouchPoints ? true : false);
/** 
 *  Variable: ngUsingTouch
 *  TRUE if user uses touch as a primary input.
 */  
var ngUsingTouch = (ngSupportsTouch)&&(ngAndroid || ngiOS || ngWindowsPhone || (ua.indexOf("mobile") != -1) || (ua.indexOf("tablet") != -1));
/** 
 *  Variable: ngFirebug
 *  TRUE if Firebug present (useful for debug informations).
 */  
var ngFirebug = !!(window.console && (window.console.firebug || window.console.exception));

/** 
 *  Section: Debug Functions  
 */
var ngDEBUG = (typeof ngDEBUG === 'undefined' ? 0 : ngDEBUG);

/** 
 *  Function: ngASSERT
 *  Checks the given assertion and displays description if assertion is FALSE and debug is enabled.
 *  
 *  Syntax:
 *    void *ngASSERT* (boolean assertion [, mixed description])
 *  
 *  Parameters:
 *    assertion - if FALSE the description is displayed  
 *    description - description to be displayed
 *        
 *  Returns: 
 *    -
 */  
var ngASSERT;

/** 
 *  Function: ngDEBUGLOG
 *  Displays log message in console if debug is enabled.
 *  
 *  Syntax:
 *    void *ngDEBUGLOG* (args)
 *    
 *  Returns:
 *    -   
 */ 
var ngDEBUGLOG;
/** 
 *  Function: ngDEBUGWARN
 *  Displays warning message in console if debug is enabled.
 *  
 *  Syntax:
 *    void *ngDEBUGWARN* (args)
 *    
 *  Returns:
 *    -   
 */ 
var ngDEBUGWARN;
/** 
 *  Function: ngDEBUGERROR
 *  Displays error message in console if debug is enabled.
 *  
 *  Syntax:
 *    void *ngDEBUGERROR* (args)
 *    
 *  Returns:
 *    -   
 */ 
var ngDEBUGERROR;

(function() {
  if((ngDEBUG)&&(typeof console!=='undefined')) {
    var c=console;
    function bind(f, thisArg) {
      if ((typeof f.bind === 'undefined') || (typeof f.bind === 'unknown')) { // IE < 10
        if(typeof Function.prototype.bind === 'function') 
          return Function.prototype.bind.call(f, thisArg);
        else 
          return f;
      }
      else
        return f.bind(thisArg);
    }
    ngDEBUGLOG=bind(c.log, c);
    ngDEBUGWARN=bind(c.warn, c);
    ngDEBUGERROR=bind(c.error, c);
  
    if(c.assert) ngASSERT=bind(c.assert,c);
    else 
    {
      ngASSERT=function(cond,msg) {
        if(!cond) ngDEBUGERROR('Assertion failed' + (typeof msg==='undefined' ? '' : ': '+msg));
      }
    }
  }
  else
  {
    ngDEBUG=0;
    function nop() { };
    
    ngASSERT=nop;
    ngDEBUGLOG=nop;
    ngDEBUGLOGEX=nop;
    ngDEBUGWARN=nop;
    ngDEBUGERROR=nop;
  }
})();

/** 
 *  Function: ngHASDEBUG
 *  Tests if debug is enabled.   
 *  
 *  Syntax:
 *    mixed *ngHASDEBUG* ()
 *  
 *  Returns: 
 *    Debug state (0=disabled).
 */  
function ngHASDEBUG() {
  return ngDEBUG;
}

/** 
 *  Section: Helper Functions  
 */

/** 
 *  Function: ngHammerJS
 *  Checks if HammerJS library is present.  
 *  
 *  Syntax:
 *    bool *ngHammerJS* ()
 *  
 *  Returns: 
 *    TRUE if HammerJS library is present.
 */  
function ngHammerJS()
{
  return (typeof Hammer === 'function')&&((typeof ngHammerJSDisabled === 'undefined')||(!ngHammerJSDisabled))&&((!ngIExplorer)||(ngIExplorerVersion>=9))&&((!ngOpera)||(ngOperaVersion>=10.5));
}

var ngPointerStartEvents;

/** 
 *  Function: ngPtrStartEvents
 *  Gets input pointer start events (mousedown, touchstart, ...).   
 *  
 *  Syntax:
 *    array *ngPtrStartEvents* ()
 *  
 *  Returns: 
 *    List of supported events.
 */  
function ngPtrStartEvents()
{
  if(typeof ngPointerStartEvents === 'undefined')
  {
    if(ngHammerJS()) // HammerJS library is present
    {  
      if(!Hammer.READY) Hammer.event.determineEventTypes();
      ngPointerStartEvents=Hammer.EVENT_TYPES[Hammer.EVENT_START].split(' ');
    }
    else ngPointerStartEvents=['mousedown'];
  }
  return ngPointerStartEvents;
}

/** 
 *  Function: ngPtrHTMLStartEvents
 *  Renders supported pointer start events as HTML (onmousedown, ontouchstart, ...).   
 *  
 *  Syntax:
 *    mixed *ngPtrHTMLStartEvents* (mixed html, string event)
 *  
 *  Parameters:
 *    html - string or ngStringBuilder object
 *    event - event code as text
 *        
 *  Returns: 
 *    Rendered html.
 */  
function ngPtrHTMLStartEvents(html,ev)
{
  var evs=ngPtrStartEvents();
  if(typeof html==='object')
  {
    if((html)&&(html.append))
      for(var i=0;i<evs.length;i++)
        html.append(' on'+evs[i]+'="'+ev+'"');
  }
  else
    for(var i=0;i<evs.length;i++)
      html+=' on'+evs[i]+'="'+ev+'"';
  return html;
}

/**
 *  Variable: ngURLParams
 *  Parsed URL parameters. 
 *  Use function <ng_GET> to get values of parameters.
 */    
var ngURLParams = new Array();
var ngURLParamsParsed=false;

/** 
 *  Variable: ngURLDefaultEscaping
 *  Defines default URL escaping scheme.
 *  
 *  Constants:
 *    URL_ESCAPING_UTF8 - standard UTF-8 URL escaping (default)
 *    URL_ESCAPING_UNICODE - UNICODE URL escaping (uses %uXXXX)
 */ 
var ngURLDefaultEscaping = (typeof ngURLDefaultEscaping !== 'undefined' ? ngURLDefaultEscaping : 0);

var URL_ESCAPING_UTF8    = 0;
var URL_ESCAPING_UNICODE = 1;

/**
 * Variable: ngURLSafeChars
 * URL safe chars.
 * These characters aren't encoded in function <ng_URLEncode>.
 */
var ngURLSafeChars = { 45:1,46:1,95:1,126:1 };

/**
 * Variable: ngHashSafeChars
 * Hash(fragment) safe chars
 * These characters aren't encoded in function <ng_HashEncode>.
 */
var ngHashSafeChars = { 33: 1, 36: 1, 95: 1, 39: 1, 40: 1, 41: 1, 42: 1, 44: 1, 45: 1, 46: 1,
                        38: 1, 47: 1, 58: 1, 59: 1, 126:1 };                     
    
/**
 *  Class: ScreenPt
 *  This class represents screen point.  
 *  
 *  Syntax:
 *    new *ScreenPt* (int posx, int posy);
 */
/*
 *  Group: Properties
 */  
/*  Variable: x
 *  Screen X coordinate.
 */
/*  Variable: y
 *  Screen Y coordinate.
 */

function ScreenPt(posx, posy) {
  this.x=posx;
  this.y=posy;
}

/**
 *  Function: ngVal
 *  Substitutes undefined values with defaults.   
 *  
 *  Syntax:
 *    mixed *ngVal* (mixed val, mixed defval)
 *     
 *  Parameters: 
 *    val - value to be checked
 *    defval -  default value if val is undefined
 *    
 *  Returns:
 *    Function returns defval if type of val is undefined.  
 */               
function ngVal(v, defv)
{
  return (typeof v === 'undefined' ? defv : v);
}

/**
 *  Function: ngNullVal
 *  Substitutes undefined or null values with defaults.   
 *  
 *  Syntax:
 *    mixed *ngNullVal* (mixed val, mixed defval)
 *     
 *  Parameters: 
 *    val - value to be checked
 *    defval -  default value if val is undefined
 *    
 *  Returns:
 *    Function returns defval if type of val is undefined or if val is null  
 */               
function ngNullVal(v, defv)
{
  return ((typeof v === 'undefined') || (v === null) ? defv : v);
}

/**
 *  Function: ngLibPath
 *  Gets client library path.
 *  
 *  Syntax: string *ngLibPath* (string lib [, string file])
 *  
 *  Returns: 
 *    Client library path.         
 */
function ngLibPath(lib,file)
{
  if(lib=='') return ngVal(file,'');
  if(typeof ngLib === 'undefined') return '';
  lib=lib.toLowerCase();
  var l=ngLib[lib];
  if((!l)||(typeof l!=='object')) return '';
  return ng_URL(ngLibsURL+ngVal(l.path,'')+ngVal(file,''));                                 
}

/**
 *  Function: ngLibVersion
 *  Gets client library version.
 *  
 *  Syntax: mixed *ngLibVersion* (string id)
 *  
 *  Returns: 
 *    Used library version or FALSE if library is not found.         
 */
function ngLibVersion(lib)
{
  if((lib=='')||(typeof ngLib === 'undefined')) return false;
  lib=lib.toLowerCase();
  var l=ngLib[lib];
  if((!l)||(typeof l!=='object')) return false;
  return ngVal(l.version,false);                                 
} 
 
function ng_SetLibsURL(path)
{ 
  if(path!='')
  {
    if(path.charAt(path.length-1)=='/') path=path.substring(0,path.length-1);
    if(ngEmptyURL.substring(0,ngLibsURL.length)==ngLibsURL) {
      ngEmptyURL=ng_URL(path+ngEmptyURL.substring(ngLibsURL.length,ngEmptyURL.length));
    }
    ngLibsURL=path;
  }
}

function ng_DetectLibsURL(type,scripts)
{
  if(typeof ngLibsURL !== 'undefined') return;
  try
  {
    type=ngVal(type,0); 
    if(typeof scripts==='undefined') scripts=document.getElementsByTagName("script");
    var idx,s;
    for (var i=0; i<scripts.length; i++)
    {
      if(typeof scripts[i].src !== 'undefined')
      {
        s=scripts[i].src;

        switch(type)
        {
          case 0: idx=s.indexOf("ng_basic"); break;
          case 1: idx=s.indexOf("controls.js"); break;
          case 2: idx=s.indexOf("basic.js"); break;
          case 3: idx=s.indexOf("controls"); if((idx>=0)&&(s.indexOf(".js")<0)) idx=-1; break;          
        }        
        if(idx>=0) 
        {
          ngLibsURL=s.substring(0,idx);
          var protocolsep = "://";
          idx=ngLibsURL.indexOf(protocolsep);
          
          if (idx<0)
          {
            var loc = location.href;
            idx = loc.indexOf(protocolsep);
            if(ngLibsURL.charAt(0)=='/')
            {
              idx = loc.indexOf("/",idx+protocolsep.length);
              if (idx>0) loc = loc.substr(0,idx);
            }
            else
            {
               var idx2 = loc.lastIndexOf("/");
               if((idx+protocolsep.length)<idx2) loc = loc.substr(0,idx2+1);
            }
            ngLibsURL = loc + ngLibsURL;
          }
          return;
        }
      }
    }
  }
  catch(e) { }

  if(type!=4) ng_DetectLibsURL(++type,scripts); // ng_basic not found, detect cotrols 
  else ngLibsURL='libs/'; // not found :(, use default path
}

var ngPreloadedImages=new Array();
var ngPreloadImgCnt=0;
var ngPreloadImgCallback=null;

/**
 *  Function: ng_PreloadImage
 *  Pre-loads image into browser's memory.  
 *  
 *  If image was already pre-loaded the function simply returns existing 
 *  reference to the image class.  
 *    
 *  Syntax:
 *    image *ng_PreloadImage* (string url)
 *     
 *  Parameters: 
 *    url - image URL
 *    
 *  Returns:
 *    The image class (created by *new Image*) of the pre-loaded image.  
 */               
function ng_PreloadImage(url) 
{ 
  var i=ngPreloadedImages[url];
  if(typeof i === 'undefined')
  {
    i=new Image; 
    i.onload=ng_PreloadImgDone;
    i.onfailure=ng_PreloadImgDone
    i.onerror=ng_PreloadImgDone;
    ngPreloadImgCnt++; 
    ngPreloadedImages[url]=i;
    i.src=ng_URL(url); 
  } 
  return i;
}

function ng_PreloadImgDone()
{
  ngPreloadImgCnt--;
  if((ngPreloadImgCnt<=0)&&(typeof ngPreloadImgCallback === 'function')) 
  { 
    ngPreloadImgCnt=0;
    var f=ngPreloadImgCallback; 
    ngPreloadImgCallback=null;
    f();
  }
}

/**
 *  Function: ng_PreloadImagesBegin
 *  Starts preloading images block.    
 *  
 *  Syntax:
 *    void *ng_PreloadImagesBegin* ()
 *     
 *  Returns:
 *    -  
 *    
 *  See also:
 *    <ng_PreloadImagesEnd>, <ng_PreloadImage>
 */               
function ng_PreloadImagesBegin()
{
  ngPreloadImgCnt++;
}

/**
 *  Function: ng_PreloadImagesEnd
 *  Ends preloading images block and call callback function after all images are loaded.    
 *  
 *  Syntax:
 *    void *ng_PreloadImagesEnd* ([function callback])
 *     
 *  Parameters:
 *    callback - callback function called after all images loaded via <ng_PreloadImage> are loaded into browser
 *       
 *  Returns:
 *    -  
 *    
 *  See also:
 *    <ng_PreloadImagesBegin>, <ng_PreloadImage>   
 */               
function ng_PreloadImagesEnd(callback)
{
  ngPreloadImgCallback=ngAddEvent(ngPreloadImgCallback,callback);
  ng_PreloadImgDone();
}

/**
 *  Function: ng_ReloadImage
 *  Re-loads image in browser's memory.  
 *  
 *  Instead of <ng_PreloadImage> this function always creates new image class.
 *    
 *  Syntax:
 *    image *ng_ReloadImage* (string url)
 *     
 *  Parameters: 
 *    url - image URL
 *    
 *  Returns:
 *    The image class (created by *new Image*) of the loaded image.  
 */               
function ng_ReloadImage(url) 
{
  delete ngPreloadedImages[url];
  return ng_PreloadImage(url); 
}

/**
 *  Function: ng_AddURLParam
 *  Adds new parameter(s) to URL.
 *   
 *  This function properly handles parameter separators (? or &).  
 *  
 *  Syntax:
 *    string *ng_AddURLParam* (string url, string param)
 *    
 *  Parameters:
 *    url - original URL
 *    param - parameter(s) to be added to original URL
 *        
 *  Returns:
 *    URL with parameters.
 */          
function ng_AddURLParam(url, param)
{
  if(url.indexOf('?')!=-1) url=url+'&';
  else url=url+'?';
  url=url+param;
  return url
}

/**
 *  Function: ng_StripURLParams
 *  Strip parameters from URL.
 *  
 *  Syntax:
 *    string *ng_StripURLParams* (string url)
 *    
 *  Parameters:
 *    url - original URL
 *        
 *  Returns:
 *    URL without parameters.
 */          
function ng_StripURLParams(url)
{
  var i=url.indexOf('?');
  if(i>=0) url=url.substr(0,i);
  i=url.indexOf('#');
  if(i>=0) url=url.substr(0,i);
  return url;
}

function ng_URLCWP(url)
{
  return (ngrpc_domain(url)==window.location.hostname ? ng_StripURLParams(url) : url); // WindowsPhone local file system URL's don't support URL parameters
}

function ng_URLStd(url) { return url; }

/**
 *  Function: ng_URL
 *  Handles platform specific URL.
 *  
 *  Syntax:
 *    string *ng_URL* (string url)
 *    
 *  Parameters:
 *    url - original URL
 *        
 *  Returns:
 *    Platform compatible URL.
 */          
var ng_URL = (ngCordova && ngWindowsPhone ? ng_URLCWP : ng_URLStd);

/**
 *  Function: ng_unescape
 *  JavaScript unescape with proper handling of plus (+) character.   
 *  
 *  Syntax:
 *    string *ng_unescape* (string str [, int escscheme])
 *    
 *  Parameters:
 *    str - string to be unescaped
 *    escscheme - escaping scheme (uses ngURLDefaultEscaping if not specified)   
 *    
 *  Returns:
 *    Unescaped string.      
 */ 
function ng_unescape(str,escscheme)
{
  if(typeof escscheme === 'undefined')
  {
    if(new RegExp('%u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]').test(str)) escscheme=1; // %u detected, use UNICODE
    else escscheme=ngURLDefaultEscaping;
  }
  switch(escscheme)
  {
    case 0: // URL_ESCAPING_UTF8
      return ng_UTF8ParamDecode(str);
    case 1: // URL_ESCAPING_UNICODE
    	str=''+str;
      var i=str.indexOf('+');
    	while(i>=0)
    	{
    		str=str.substring(0,i)+'%20'+str.substring(i+1, str.length);
    		i=str.indexOf('+');
    	}
    	return unescape(str);
  }
  return str;	
}

/**
 *  Function: ng_htmlEncode
 *  Encodes special HTML characters (&, <, >, ") to its HTML form.
 *  
 *  Syntax:
 *    string *ng_htmlEncode* (string text [,bool replacecrlf=false])
 *    
 *  Parameters:
 *    text - text with special characters
 *    replacecrlf - if TRUE, function replaces CRLF (or CR or LF) with <br /> HTML tag 
 *    
 *  Returns:
 *    Text with encoded special HTML characters.
 */           
function ng_htmlEncode(s, replacecrlf) 
{
  var str = ''+s;
  if(str=='') return str;

  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  if(ngVal(replacecrlf,false))
    str = str.replace(/\r\n|[\r\n]/g,"\<br /\>");
  return str;
} 

/**
 *  Function: ng_htmlDecode
 *  Decode special HTML characters and remove HTML tags (&amp;, &lt;, &gt;, &quot;) to its native form.
 *  
 *  Syntax:
 *    string *ng_htmlDecode* (string text [,bool replacecrlf=false, bool replacespaces=false])
 *    
 *  Parameters:
 *    text - text with HTML encoded characters
 *    replacecrlf - if TRUE replaces CRLF with spaces 
 *    
 *  Returns:
 *    Text with decoded characters.
 */           
function ng_htmlDecode(s, replacecrlf, replacespaces) 
{
  var str = ''+s;
  if(str=='') return str;

  str = str.replace(/\<\/div\>\</g, "</div>\n<"); // turn </div><...> to </div>CR<...>
  if(ngVal(replacecrlf,false)) {
    str = str.replace(/\r\n|[\r\n]/g," "); // CRLF
  }
  str = str.replace(/\<br(|[/ \t].*?)\>/g, "\n"); // <br>
  str = str.replace(/\<p.*?\>/g, "\n"); // <p>
  str = str.replace(/\<\/p\>/g, "\n\n"); // </p>
  str = str.replace(/\<.*?\>/g, ""); // remove all tags
  if(replacespaces) 
  {
    str = str.replace(/[ \t]*([\r\n])/g, "$1"); // srip lineend whitespace
    str = str.replace(/[ \t]+/g, " "); // replace multiple spaces
  }
  str = str.replace(/&amp;/g, "&");
  str = str.replace(/&lt;/g, "<");
  str = str.replace(/&gt;/g, ">");
  str = str.replace(/&quot;/g, "\"");
  str = str.replace(/&nbsp;/g, " ");
  return str;
} 

/**
 *  Function: ng_sprintf
 *  Formats string (PHP like sprintf function).
 *  
 *  Syntax:
 *    string *ng_sprintf* (string format [, mixed arg1, mixed arg2, ...])
 *    
 *  Parameters:
 *    format - text with format characters
 *    arg1..N - arguments 
 *    
 *  Returns:
 *    Formated text.
 */           
function ng_sprintf()
{
  if(!arguments || arguments.length < 1) return;
  
  var str = arguments[0];
  str=str.replace(/\n/g, '\\n');
  str=str.replace(/\r/g, '\\r');
  var re = /([^%]*)%('.|0|\x20)?(-)?(\d+)?(\.\d+)?(%|b|c|d|u|f|o|s|x|X)(.*)/;
  var a,b,percent, numSubstitutions = 0, numMatches = 0
  a = b = percent = [];
  while (a = re.exec(str))
  {
    var leftpart = a[1], pPad = a[2], pJustify = a[3], pMinLength = a[4];
    var pPrecision = a[5], pType = a[6], rightPart = a[7];
  
    numMatches++;
    if(pType == '%') { subst = '_'; percent[percent.length]=leftpart.length; padding=''; }
    else
    {
      numSubstitutions++;
      if (numSubstitutions >= arguments.length)
      {
        ngDEBUGERROR("Error! Not enough function arguments (" + (arguments.length - 1)
           + ", excluding the string) for the number of substitution parameters in string \""+arguments[0]+"\".");
        break;
      }
      var param = arguments[numSubstitutions];
      var pad = '';
      if (pPad && pPad.substr(0,1) == "'") pad = pPad.substr(1,1);
      else if (pPad) pad = pPad;
      var justifyRight = true;
      if (pJustify && pJustify === '-') justifyRight = false;
      var minLength = -1;
      if (pMinLength) minLength = parseInt(pMinLength);
      var precision = -1;
      if (pPrecision && pType == 'f') precision = parseInt(pPrecision.substring(1));
      var subst = param;
      switch (pType)
      {
        case 'b': subst = parseInt(param).toString(2); break;
        case 'c': subst = String.fromCharCode(parseInt(param)); break;
        case 'd': subst = parseInt(param) ? parseInt(param) : 0; break;
        case 'u': subst = Math.abs(param); break;
        case 'o': subst = parseInt(param).toString(8); break;
        case 's': subst = '' + param; break;
        case 'x': subst = ('' + parseInt(param).toString(16)).toLowerCase(); break;
        case 'X': subst = ('' + parseInt(param).toString(16)).toUpperCase(); break;
        case 'f': 
          param=parseFloat(param);
          if(isNaN(param)) param=0;
          if (precision > -1)
          {
            var tmp = Math.round(param * Math.pow(10, precision)).toString();
            while(tmp.length<precision) tmp='0'+tmp;
            subst = tmp.substr(0, tmp.length - precision) + (precision > 0 ? '.' + tmp.substr(tmp.length - precision, precision) : '');
          }
          else
            subst = param;
          break;
      }
      var padLeft = minLength - subst.toString().length;
      if (padLeft > 0)
      {
        var arrTmp = new Array(padLeft+1);
        var padding = arrTmp.join(pad ? pad:' ');
      }
      else
      {
        var padding = '';
      }
    }
    str=leftpart+(justifyRight ? padding+subst : subst+padding)+rightPart;
  }
  for(var i=0;i<percent.length;i++)
    str=str.substring(0,percent[i])+'%'+str.substring(percent[i]+1,str.length);
  str=str.replace(/\\n/g, '\n');
  str=str.replace(/\\r/g, '\r');
  return str;
}

/**
 *  Function: ng_URLEncode
 *  Encodes special characters in URL.
 *  
 *  Function also properly handles UTF-8 characters (>255).
 * 
 *  Syntax:
 *    string *ng_URLEncode* (string url [, bool allasunicode=false, array safechars, int escscheme ])
 *    
 *  Parameters:
 *    url - url to be encoded
 *    allasunicode - encode all characters as UNICODE (applicable only if escscheme is URL_ESCAPING_UNICODE)
 *    safechars - list of characters which are not encoded
 *    escscheme - escaping scheme (uses ngURLDefaultEscaping if not specified)   
 *    
 *  Returns:
 *    URL with encoded characters.
 */            
function ng_URLEncode(str,allasunicode,safechars,escscheme) 
{ 
  var res=''; 
  str=''+str;
  switch(ngVal(escscheme,ngURLDefaultEscaping))
  {
    case 0: // URL_ESCAPING_UTF8
      res=ng_UTF8Encode(str,safechars);
      break;
    case 1: // URL_ESCAPING_UNICODE
      var len = str.length; 
      var charOrd;
      var hexValStr;
      
      if(typeof safechars === 'undefined')
        safechars = ngURLSafeChars;
       
      allasunicode=ngVal(allasunicode,false);
        
      for(var i = 0; i < len; i++) 
      { 
        charOrd = str.charCodeAt(i);
        if ((charOrd >= 65 && charOrd <= 90) || (charOrd >= 97 && charOrd <= 122) || (charOrd >= 48 && charOrd <= 57) || (safechars[charOrd])) 
        {
          res += str.charAt(i); 
        } 
        else 
        { 
          if (charOrd==37) { res +='%u0025'; continue; } // %
          if(allasunicode)
          {
            res += '%u';
            if (charOrd <= 255) res+='00'; 
          }
          else
          {
            res += '%'; 
            if (charOrd > 255) res += 'u';
          } 
          hexValStr = charOrd.toString(16); 
          if ((hexValStr.length) % 2 == 1) hexValStr = '0' + hexValStr; 
          res += hexValStr; 
        } 
      }
      break;
    default:
      res=str;
      break;
  } 
  return res;
}

/**
 *  Function: ng_HashEncode
 *  Encodes special characters in hash(fragment) part of URL.
 * 
 *  Syntax:
 *    string *ng_HashEncode* (string s [, array safechars, int escscheme ])
 *    
 *  Parameters:
 *    s - string to be encoded
 *    safechars - list of characters which are not encoded
 *    escscheme - escaping scheme (uses ngURLDefaultEscaping if not specified)   
 *    
 *  Returns:
 *    Encoded string.
 */            
function ng_HashEncode(s,safechars,escscheme)
{
  return ng_URLEncode(s,true,ngVal(safechars,ngHashSafeChars),escscheme);
}

/*
 * hex/dec encoding helpers 
 */ 
var utf8_decToHexChar=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var utf8_charCodeToDec={48:0,49:1,50:2,51:3,52:4,53:5,54:6,55:7,56:8,57:9,65:10,66:11,67:12,68:13,69:14,70:15,97:10,98:11,99:12,100:13,101:14,102:15};

function utf8_decToStrHex(dec) { 
  return utf8_decToHexChar[dec >> 4] + utf8_decToHexChar[dec & 0xF]; 
} 

function utf8_strHexToDec(s, i) {
  if (s.charCodeAt(i)==37) { // percent encoded char
    var h1=utf8_charCodeToDec[s.charCodeAt(++i)];
    if (typeof h1 != 'undefined') {
      var h2=utf8_charCodeToDec[s.charCodeAt(++i)];
      if (typeof h2 !== 'undefined') return ((h1<<4)+h2);
    }
  }
  return 0; // non-encoded char
}

/**
 *  Function: ng_UTF8Encode
 *  Encodes characters in url to utf-8 representation.
 *  
 *  Syntax:
 *    string *ng_UTF8Encode* (string url)
 *    
 *  Returns:
 *    URL with encoded characters.
 */            
function ng_UTF8Encode(str,safechars) {
  var len = str.length; 
  var res = new String();
  var chEn = new String();
  var charOrd = new Number(); 
  var pos = 0;

  if(typeof safechars === 'undefined')
    safechars = ngURLSafeChars;

  for(i=0; i<len; i++) {
    charOrd = str.charCodeAt(i);
    if ((charOrd >= 65 && charOrd <= 90) || (charOrd >= 97 && charOrd <= 122) || (charOrd >= 48 && charOrd <= 57) || (safechars[charOrd])) 
      continue;

    if(charOrd<128) chEn = '%'+ utf8_decToStrHex(charOrd); //reserved chars, percent encoded 
    else if(charOrd<2048) { //128 .. 2047 - 11 bit number, 2 byte UTF-8 starting with %C
      chEn = '%'+utf8_decToStrHex((charOrd >> 6) | 0xC0); //First byte: 110x.xxx (C and first 5bits in charOrd)
      chEn +='%'+utf8_decToStrHex((charOrd & 0x3F) | 0x80); //Second byte: 10xx.xxxx ("10" signature and rest 6 bits in charOrd) 
    }
      else if(charOrd<65536) { //2048 .. 65535 - 16 bit number, 3 byte UTF-8 starting with %E
        chEn = '%'+utf8_decToStrHex((charOrd >> 12) | 0xE0); //First byte: 1110.xxxx (E and first 4bits in charOrd)
        chEn +='%'+utf8_decToStrHex(((charOrd >> 6) & 0x3F) | 0x80); //Second byte: 10xx.xxxx (following 6 bits) 
        chEn +='%'+utf8_decToStrHex((charOrd & 0x3F) | 0x80); //Third byte: 10xxxxxx (last 6 bits) 
      }
        else { // 65536 .. 4194303 - 22 bit number, 4 byte UTF-8 starting with %F
          chEn = '%'+utf8_decToStrHex((charOrd >> 18) | 0xF0); //First byte: 1110.xxxx (F and first 4bits in charOrd)
          chEn +='%'+utf8_decToStrHex(((charOrd >> 12) & 0x3F) | 0x80); //Second byte: 10xx.xxxx (following 6 bits) 
          chEn +='%'+utf8_decToStrHex(((charOrd >> 6) & 0x3F) | 0x80); //Third byte: 10xx.xxxx (following 6 bits) 
          chEn +='%'+utf8_decToStrHex((charOrd & 0x3F) | 0x80); //Fourth byte: 10xxxxxx (last 6 bits) 
        }

    if(pos<i) res+=str.substring(pos, i);
    res+=chEn;
    pos=i+1;
  }

  if (pos) {
    if (pos<len) res+=str.substring(pos, len);
    return res;
  }  
  return str; 
}

/**
 *  Function: ng_UTF8Decode
 *  JavaScript decode URI with characters in utf-8 representation.
 *  
 *  Syntax:
 *    string *ng_UTF8Decode* (string str)
 *    
 *  Parameters:
 *    str - string to be decoded
 *    
 *  Returns:
 *    Decoded string.      
 */ 
function ng_UTF8Decode(str) {
  var len = str.length; 
  var res = new String(); 
  var charOrd=0,charCnt=0;
  var B1=0,B2=0,B3=0,B4=0;
  
  var i=0,pos=0;
  while (i<len) {
    B1=utf8_strHexToDec(str, i);
    if (B1) { // encoded char
      charOrd=0;charCnt=0;

      if (B1<128) { charCnt=3;charOrd=B1; } //ASCII encoded char (1 byte UTF-8)
      else if (B1<192) { charCnt=3; } // char is not UTF-8 (under C0)
        else if (B1<224) { //C0 .. E0 - 2 byte UTF-8 (f.i. %C2%B0)
          charCnt=6;
          B2 = utf8_strHexToDec(str, i+3);
          if ((B2>127) && (B2<192)) charOrd=(((B1 & 0x1F) << 6) | (B2 & 0x3F));
        }
          else if (B1<240) { //E0 .. F0 - 3 byte UTF-8
            charCnt=9;
            B2 = utf8_strHexToDec(str, i+3);
            if ((B2>127) && (B2<192)) {
              B3 = utf8_strHexToDec(str, i+6);
              if ((B3>127) && (B3<192)) charOrd=(((B1 & 0xF) << 12) | ((B2 & 0x3F) << 6) | (B3 & 0x3F));
            }
          }
            else { //F0 ... - 4 byte UTF-8
              charCnt=12;              
              B2 = utf8_strHexToDec(str, i+3);
              if ((B2>127) && (B2<192)) {
                B3 = utf8_strHexToDec(str, i+6);
                if ((B3>127) && (B3<192)) {
                  B4 = utf8_strHexToDec(str, i+9);
                  if ((B4>127) && (B4<192)) charOrd=(((B1 & 0x7) << 18) | ((B2 & 0x3F) << 12) | ((B3 & 0x3F) << 6) | (B4 & 0x3F));
                }
              }
            }

      if (charOrd) {
        if(pos<i) res+=str.substring(pos, i);
        res+=String.fromCharCode(charOrd);
        i+=charCnt;
        pos=i;
      }
      else i+=charCnt;
    }
    else i++;
  }
  
  if (pos) {
    if (pos<len) res+=str.substring(pos, len);
    return res;
  }
  
  return str;
}

/**
 *  Function: ng_UTF8ParamEncode
 *  Encodes characters in URI parameter to utf-8 representation.
 *  
 *  Syntax:
 *    string *ng_UTF8ParamEncode* (string url)
 *    
 *  Returns:
 *    URL with encoded characters.
 */            
function ng_UTF8ParamEncode(str) {
  return ng_UTF8Encode(str);
}

/**
 *  Function: ng_UTF8ParamDecode
 *  JavaScript decode URI parameter in utf-8 representation.
 *  
 *  Syntax:
 *    string *ng_UTF8ParamDecode* (string str)
 *    
 *  Parameters:
 *    str - string to be decoded
 *    
 *  Returns:
 *    Decoded string.      
 */ 
function ng_UTF8ParamDecode(str)
{
	str=''+str;
  var i=str.indexOf('+');
	while(i>=0)
	{
		str=str.substring(0,i)+'%20'+str.substring(i+1, str.length);
		i=str.indexOf('+');
	}
  return ng_UTF8Decode(str); 
}

/**
 *  Function: ng_inDOM
 *  Determines if element is present in browser's document object model (DOM).
 *  
 *  Syntax:
 *    bool *ng_inDOM* (object elm)
 *  
 *  Parameters:
 *    elm - element object
 *       
 *  Returns:
 *    TRUE if object is in DOM, FALSE if not.        
 */  
function ng_inDOM(e)
{
  if(typeof e==='object')
    while(e)
    {
      if(e.tagName == 'BODY') return true;
      e = e.parentNode;
    }
  return false;  
}

function ng_containsDOM(container, containee) 
{
  var isParent = false;
  do {
    if ((isParent = container == containee))
      break;
    containee = containee.parentNode;
  }
  while (containee != null);
  return isParent;
}

/**
 *  Function: ng_WindowWidth
 *  Returns window width.
 *  
 *  Syntax:
 *    int *ng_WindowWidth* ()
 *  
 *  Returns:
 *    Width of browser's window.        
 */  
function ng_WindowWidth()
{
  var width=0;
  if(typeof(window.innerWidth)=='number') {width=window.innerWidth;}
  else if(document.documentElement&&document.documentElement.clientWidth) {width=document.documentElement.clientWidth;}
  else if(document.body&&document.body.clientWidth) {width=document.body.clientWidth;}
  if(!width) width=100;
  return width;
}

/**
 *  Function: ng_WindowHeight
 *  Returns window height.
 *  
 *  Syntax:
 *    int *ng_WindowHeight* ()
 *  
 *  Returns:
 *    Height of browser's window.        
 */  
function ng_WindowHeight()
{
  var height=0;
  if(typeof(window.innerHeight)=='number'){height=window.innerHeight;}
  else if(document.documentElement&&document.documentElement.clientHeight){height=document.documentElement.clientHeight;}
  else if(document.body&&document.body.clientHeight){height=document.body.clientHeight;}
  if(!height) height=100;
  return height;
}

function ng_SetInnerHTML_Std(o, t, append) 
{
  if(append) 
  {
    if(t==='') return;
    t=o.innerHTML+t;
  }
  o.innerHTML = t;
}

function ng_SetInnerHTML_WinStore(o, t, append) 
{
  MSApp.execUnsafeLocalFunction(function () {
    if(append) 
    {
      if(t==='') return;
      t=o.innerHTML+t;
    }
    o.innerHTML = t;
  });
  //WinJS.Utilities.setInnerHTMLUnsafe(o, t);
}

/**
 *  Function: ng_SetInnerHTML
 *  Handles platform specific setting of element's innerHTML.
 *  
 *  Syntax:
 *    void *ng_SetInnerHTML* (element o, string content [, bool append=false])
 *    
 *  Parameters:
 *    o - DOM element which innerHTML should be updated
 *    content - text 
 *    append - if TRUE, the content is added to existing innerHTML     
 *    
 *  Returns:
 *    - 
 */      
var ng_SetInnerHTML = (ngWinStoreApp ? ng_SetInnerHTML_WinStore : ng_SetInnerHTML_Std); 

/**
 *  Function: ng_AppendInnerHTML
 *  Appends text to element's innerHTML. 
 *  The innerHTML is modified only if text is not empty.
 *  
 *  Syntax:
 *    void *ng_AppendInnerHTML* (element o, string content)
 *    
 *  Parameters:
 *    o - DOM element which innerHTML should be updated
 *    content - text 
 *    
 *  Returns:
 *    - 
 */      
function ng_AppendInnerHTML(o, t)
{
  ng_SetInnerHTML(o, t, true);
} 

/**
 *  Function: ng_DocumentDeselect
 *  Removes document selection.
 *  
 *  Syntax:
 *    void *ng_DocumentDeselect* ()
 *    
 *  Returns:
 *    - 
 */      
function ng_DocumentDeselect()
{
  if(document.selection && document.selection.empty) {
    document.selection.empty();
  } else if(window.getSelection) {
    var sel = window.getSelection();
    sel.removeAllRanges();
  }
}
  
/**
 *  Function: ng_DocumentScrollX
 *  Gets actual document horizontal scroll offset.
 *  
 *  Syntax:
 *    int *ng_DocumentScrollX* ()
 *    
 *  Returns:
 *    Horizontal scroll offset in pixels. 
 */      
function ng_DocumentScrollX()
{
  var scrOfX = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    scrOfX = document.documentElement.scrollLeft;
  }
  return scrOfX;
}

/**
 *  Function: ng_DocumentScrollY
 *  Gets actual document vertical scroll offset.
 *  
 *  Syntax:
 *    int *ng_DocumentScrollY* ()
 *    
 *  Returns:
 *    Vertical scroll offset in pixels. 
 */      
function ng_DocumentScrollY()
{
  var scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    scrOfY = window.pageYOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    scrOfY = document.body.scrollTop;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    scrOfY = document.documentElement.scrollTop;
  }
  return scrOfY;
}

/**
 *  Function: ng_findPosX
 *  Determines horizontal offset of the element relative to its super parent.  
 *  
 *  Syntax:
 *    int *ng_findPosX* (object obj)
 *    
 *  Parameters:
 *    obj - element object
 *    
 *  Returns:
 *    Horizontal position of element in pixels. 
 */         
function ng_findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}

/**
 *  Function: ng_findPosY
 *  Determines vertical offset of the element relative to its super parent.  
 *  
 *  Syntax:
 *    int *ng_findPosY* (object obj)
 *    
 *  Parameters:
 *    obj - element object
 *    
 *  Returns:
 *    Vertical position of element in pixels. 
 */         
function ng_findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}

/**
 *  Function: ng_findMousePosX
 *  Determines horizontal element offset to absolute mouse position.  
 *  
 *  Syntax:
 *    int *ng_findMousePosX* (object obj)
 *    
 *  Parameters:
 *    obj - element object
 *    
 *  Returns:
 *    Offset to be substracted from the absolute mouse position. 
 */         
function ng_findMousePosX(obj)
{
	var curleft = 0;
	if(obj.offsetParent)
	{
		while(obj.offsetParent)
		{
			curleft += obj.offsetLeft;
			curleft -= obj.scrollLeft;
			if(ngFireFox)
			{
			  if((ng_GetCurrentStyle(obj,'overflow')!=='auto')||((ngFireFox1x)||(ngFireFox2x)))
  			  curleft+=2*ng_GetCurrentStylePx(obj,'border-left-width');
  			else
  			  curleft+=ng_GetCurrentStylePx(obj,'border-left-width');
      }
      else
      {
        if((!ngOpera)) //Opera 10.5 still doesn't need this !!!
			    curleft +=ng_GetCurrentStylePx(obj,'border-left-width');
      }

			obj = obj.offsetParent;
		}
	}
	else if(obj.x) curleft += obj.x;
	curleft -= ng_DocumentScrollX();
	return curleft;
}

/**
 *  Function: ng_findMousePosY
 *  Determines vertical element offset to absolute mouse position.  
 *  
 *  Syntax:
 *    int *ng_findMousePosY* (object obj)
 *    
 *  Parameters:
 *    obj - element object
 *    
 *  Returns:
 *    Offset to be substracted from the absolute mouse position. 
 */         
function ng_findMousePosY(obj)
{
	var curtop = 0;
	if(obj.offsetParent)
	{
		while(obj.offsetParent)
		{
			curtop += obj.offsetTop;
			curtop -= obj.scrollTop;
			if(ngFireFox)
			{
			  if((ng_GetCurrentStyle(obj,'overflow')!=='auto')||((ngFireFox1x)||(ngFireFox2x)))
  			  curtop+=2*ng_GetCurrentStylePx(obj,'border-top-width');
  			else
  			  curtop+=ng_GetCurrentStylePx(obj,'border-top-width');
      }
      else
      {
        if(!ngOpera) //Opera 10.5 still doesn't need this !!!
			    curtop +=ng_GetCurrentStylePx(obj,'border-top-width');
      }
			obj = obj.offsetParent;
		}
	}
	else if(obj.y) curtop += obj.y;
  curtop -=ng_DocumentScrollY();
	return curtop;
}

/**
 *  Function: ng_ParentPosition
 *  Determines absolute position to parent object or document.  
 *  
 *  Syntax:
 *    int *ng_ParentPosition* (object obj[, object parent])
 *    
 *  Parameters:
 *    obj - element object
 *    parent - element object 
 *    
 *  Returns:
 *    Object with properties x and y. 
 */         
function ng_ParentPosition(o, parent)
{
  var n=o,pn;
  var pos=new Object; 
  pos.x=0;
  pos.y=0;    
  if(typeof parent === 'undefined') parent=document.body;
  while((n)&&(n!=parent))
  {
    pn=n.offsetParent;
		pos.x += n.offsetLeft + ng_GetCurrentStylePx(n,'border-left-width');
		pos.y += n.offsetTop + ng_GetCurrentStylePx(n,'border-top-width');
		if((pn)&&(pn!=parent))
		{
		  pos.x -= pn.scrollLeft;
		  pos.y -= pn.scrollTop;
    }
		if(ngFireFox)
		{
		  if((ng_GetCurrentStyle(n,'overflow')!=='auto')||((ngFireFox1x)||(ngFireFox2x)))
		  {
		    pos.x+=ng_GetCurrentStylePx(n,'border-left-width');
		    pos.y+=ng_GetCurrentStylePx(n,'border-top-width');
		  }
		  
    }
    else
    {
      if(ngOpera)
      {
		    pos.x -=ng_GetCurrentStylePx(n,'border-left-width');
		    pos.y -=ng_GetCurrentStylePx(n,'border-top-width');
		  }
    }
    n=pn;
  }
  return pos;
}


/**
 *  Function: ng_nullAttr
 *  Determines if element attribute is not defined.  
 *  
 *  Syntax:
 *    bool *ng_nullAttr* (object attr)
 *    
 *  Parameters:
 *    attr - element attribute
 *    
 *  Returns:
 *    TRUE if attribute is not set. 
 */         
function ng_nullAttr(v)
{
  if(typeof v === 'number') return false;
  if((typeof v === 'string')&&(v=='')) return true;
  if((typeof v==='object')&&(v==null)) return true;
  return false;
}

function ng_GetStylePx2(p)
{
  p=ngVal(p,'');
  if(p=='') return;  
  if((p.length>2)&&(p.substring(p.length-2)=='px')) p=ng_GetStylePx(p.substring(0,p.length-2));
  return p;
}

function ng_GetStylePx(v)
{
  var tv=typeof v;
  if(tv==='number') return v; 
  if((v=='')||(tv==='undefined')) return 0;
  v=parseInt(v,10);
  return (isNaN(v) ? 0 : v);
}

/**
 *  Function: ng_GetCurrentStyle
 *  Gets current (computed) style of element.
 *  
 *  Syntax:
 *    string *ng_GetCurrentStyle* (object elm, string style)
 *    
 *  Parameters:
 *    elm - object element
 *    style - name of the style, for example 'margin-right' 
 *    
 *  Returns:
 *    Value of requested style.
 *              
 */
function ng_GetCurrentStyle(o,s)
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

/**
 *  Function: ng_BeginMeasureElement
 *  Prepares element for dimension measurement.
 *  Makes sure all parent object have proper display style. 
 *  
 *  Syntax:
 *    array *ng_BeginMeasureElement* (object elm)
 *    
 *  Parameters:
 *    elm - object element
 *    
 *  Returns:
 *    List of modified objects.
 *    
 *  See also:  
 *  <ng_EndMeasureElement>              
 */
function ng_BeginMeasureElement(o)
{
  if((o)&&((!o.offsetHeight)||(!o.offsetWidth)))
  {
    if(typeof o.measure_info !== 'undefined') return o.measure_info;
    
    var arr = new Array();
    var p = o;
    var displaystyle=(ngIExplorer ? '' : 'inherit');
    //iterate through parent nodes
    while((p)&&(p!=document))
    {
      if(typeof p.measure_info !== 'undefined') break;
      if((p)&&(p.style)&&(p.style.display === 'none')) //if display is none save parent and change it to inherit
      {
        arr.push(p);
        p.style.display = displaystyle;
      }
      p = p.parentNode;
    }
    //compute height and width again
    var fix7=o.offsetLeft; //IE fix

    if(arr.length)
    {
      o.measure_info = arr;
      return arr;
    }    
  }
  return undefined;
}

/**
 *  Function: ng_EndMeasureElement
 *  Finishes element dimension measurement.
 *  Restores display states of parent object if modified. 
 *  
 *  Syntax:
 *    void *ng_EndMeasureElement* (object elm)
 *    
 *  Parameters:
 *    elm - object element
 *    
 *  Returns:
 *    -
 *    
 *  See also:  
 *  <ng_BeginMeasureElement>              
 */
function ng_EndMeasureElement(o)
{
  if((o)&&(typeof o.measure_info !== 'undefined')) 
  {
    var undefined;
    var arr=o.measure_info;
    o.measure_info=undefined; // cannot delete - not supported in IE<=7

    var p;
    for (var i = (arr.length - 1); i >= 0; i--)
    {
      p=arr[i];
      if((p)&&(p.style)) p.style.display = 'none';
    }
  }  
}

/**
 *  Function: ng_GetCurrentStylePx
 *  Extracts pixels value from current (computed) style of element.
 *  
 *  Syntax:
 *    int *ng_GetCurrentStylePx* (object elm, string style)
 *    
 *  Parameters:
 *    elm - object element
 *    style - name of the style, for example 'margin-right' 
 *    
 *  Returns:
 *    Pixels value of requested style.
 *              
 */
function ng_GetCurrentStylePx(o,s)
{
  return ng_GetStylePx(ng_GetCurrentStyle(o,s));
}

/**
 *  Function: ng_StyleWidth
 *  Gets element width defined by style property.
 *  
 *  Syntax:
 *    int *ng_StyleWidth* (object elm)
 *    
 *  Parameters:
 *    elm - object element
 *    
 *  Returns:
 *    Width in pixels.          
 */
function ng_StyleWidth(o) 
{ 
  return (typeof o.style.pixelWidth !== 'undefined' ? ng_GetStylePx(o.style.pixelWidth) : ng_GetStylePx(o.style.width)); 
}

/**
 *  Function: ng_StyleHeight
 *  Gets element height defined by style property.
 *  
 *  Syntax:
 *    int *ng_StyleHeight* (object elm)
 *    
 *  Parameters:
 *    elm - object element
 *    
 *  Returns:
 *    Height in pixels.          
 */
function ng_StyleHeight(o)
{
 return (typeof o.style.pixelHeight !== 'undefined' ? ng_GetStylePx(o.style.pixelHeight) : ng_GetStylePx(o.style.height));
}

/**
 *  Function: ng_SetStyleWidth
 *  Sets element width defined by style property.
 *  
 *  Syntax:
 *    void *ng_SetStyleWidth* (object elm, int v)
 *    
 *  Parameters:
 *    elm - object element
 *    v - width in pixels 
 *    
 *  Returns:
 *    -          
 */
function ng_SetStyleWidth(o,v)
{
  if(typeof o.style.pixelWidth !== 'undefined') o.style.pixelWidth=v;
  else o.style.width=v+'px';
}

/**
 *  Function: ng_SetStyleHeight
 *  Sets element height defined by style property.
 *  
 *  Syntax:
 *    void *ng_SetStyleHeight* (object elm, int v)
 *    
 *  Parameters:
 *    elm - object element
 *    v - height in pixels 
 *    
 *  Returns:
 *    -          
 */
function ng_SetStyleHeight(o,v)
{
  if(typeof o.style.pixelHeight !== 'undefined') o.style.pixelHeight=v;
  else o.style.height=v+'px';
}

/**
 *  Function: ng_OuterWidth
 *  Gets element outer width.
 *  
 *  Syntax:
 *    int *ng_OuterWidth* (object elm)
 *    
 *  Parameters:
 *    elm - object element
 *    
 *  Returns:
 *    Width in pixels.          
 */
function ng_OuterWidth(o)
{
  var fix7=o.offsetLeft; // IE7 measure fix
  var w=ng_GetStylePx(o.offsetWidth);
  if(!w)
  {
    ng_BeginMeasureElement(o);
    w=ng_GetStylePx(o.offsetWidth);
    ng_EndMeasureElement(o);
  }
  return w + ng_GetCurrentStylePx(o,'margin-left') + ng_GetCurrentStylePx(o,'margin-right');
}

/**
 *  Function: ng_OuterHeight
 *  Gets element outer height.
 *  
 *  Syntax:
 *    int *ng_OuterHeight* (object elm)
 *    
 *  Parameters:
 *    elm - object element
 *    
 *  Returns:
 *    Height in pixels.          
 */
function ng_OuterHeight(o)
{
  var fix7=o.offsetLeft; // IE7 measure fix
  var h=ng_GetStylePx(o.offsetHeight);
  if(!h)
  {
    ng_BeginMeasureElement(o);
    h=ng_GetStylePx(o.offsetHeight);
    ng_EndMeasureElement(o);
  }
  return h + ng_GetCurrentStylePx(o,'margin-top') + ng_GetCurrentStylePx(o,'margin-bottom');
}

/**
 *  Function: ng_SetOuterWidth
 *  Sets element outer width.
 *  
 *  Syntax:
 *    void *ng_SetOuterWidth* (object elm, int v)
 *    
 *  Parameters:
 *    elm - object element
 *    v - width in pixels 
 *    
 *  Returns:
 *    -          
 */
function ng_SetOuterWidth(o,v)
{
  v-=ng_GetCurrentStylePx(o,'margin-left') + ng_GetCurrentStylePx(o,'margin-right');
  v-=ng_GetCurrentStylePx(o,'border-left-width') + ng_GetCurrentStylePx(o,'border-right-width');
  v-=ng_GetCurrentStylePx(o,'padding-left') + ng_GetCurrentStylePx(o,'padding-right');
  ng_SetStyleWidth(o,v);
}

/**
 *  Function: ng_SetOuterHeight
 *  Sets element outer height.
 *  
 *  Syntax:
 *    void *ng_SetOuterHeight* (object elm, int v)
 *    
 *  Parameters:
 *    elm - object element
 *    v - height in pixels 
 *    
 *  Returns:
 *    -          
 */
function ng_SetOuterHeight(o,v)
{
  v-=ng_GetCurrentStylePx(o,'margin-top') + ng_GetCurrentStylePx(o,'margin-bottom');
  v-=ng_GetCurrentStylePx(o,'border-top-width') + ng_GetCurrentStylePx(o,'border-bottom-width');
  v-=ng_GetCurrentStylePx(o,'padding-top') + ng_GetCurrentStylePx(o,'padding-bottom');
  ng_SetStyleHeight(o,v);
}

/**
 *  Function: ng_ClientWidth
 *  Gets element client width.
 *  
 *  Syntax:
 *    int *ng_ClientWidth* (object elm)
 *    
 *  Parameters:
 *    elm - object element
 *    
 *  Returns:
 *    Width in pixels.          
 */
function ng_ClientWidth(o)
{
  if(!o) return 0;
  var fix7=o.offsetLeft; // IE7 measure fix
  var w=ng_GetStylePx(o.clientWidth);
  if(!w) 
  {
    ng_BeginMeasureElement(o);
    w=ng_GetStylePx(o.clientWidth);
    ng_EndMeasureElement(o);
    if(!w)
    {
      w=ng_StyleWidth(o);
      w+=ng_GetCurrentStylePx(o,'padding-left') + ng_GetCurrentStylePx(o,'padding-right');
    }
  }
  return w;
}

/**
 *  Function: ng_ClientHeight
 *  Gets element client height.
 *  
 *  Syntax:
 *    int *ng_ClientHeight* (object elm)
 *    
 *  Parameters:
 *    elm - object element
 *    
 *  Returns:
 *    Height in pixels.          
 */
function ng_ClientHeight(o)
{
  if(!o) return 0;  
  var fix7=o.offsetLeft; // IE7 measure fix
  var h=ng_GetStylePx(o.clientHeight);
  if(!h) 
  {
    ng_BeginMeasureElement(o);
    h=ng_GetStylePx(o.clientHeight);
    ng_EndMeasureElement(o);
    if(!h)
    {
      h=ng_StyleHeight(o);
      h+=ng_GetCurrentStylePx(o,'padding-top') + ng_GetCurrentStylePx(o,'padding-bottom');
    }
  }
  return h;
}

/**
 *  Function: ng_SetClientWidth
 *  Sets element client width.
 *  
 *  Syntax:
 *    void *ng_SetClientWidth* (object elm, int v)
 *    
 *  Parameters:
 *    elm - object element
 *    v - width in pixels 
 *    
 *  Returns:
 *    -          
 */
function ng_SetClientWidth(o,v)
{
  v-=ng_GetCurrentStylePx(o,'padding-left') + ng_GetCurrentStylePx(o,'padding-right');
  ng_SetStyleWidth(o,v);
}

/**
 *  Function: ng_SetClientHeight
 *  Sets element client height.
 *  
 *  Syntax:
 *    void *ng_SetClientHeight* (object elm, int v)
 *    
 *  Parameters:
 *    elm - object element
 *    v - height in pixels 
 *    
 *  Returns:
 *    -          
 */
function ng_SetClientHeight(o,v)
{
  v-=ng_GetCurrentStylePx(o,'padding-top') + ng_GetCurrentStylePx(o,'padding-bottom');
  ng_SetStyleHeight(o,v);
}

/**
 *  Function: ng_setLeftTop
 *  Sets element left, top. Optimized for IE if used.
 *  
 *  Syntax:
 *    void *ng_setLeftTop* (object obj, int left, int top)
 *    
 *  Parameters:
 *    obj - object element
 *    left - left position in pixels
 *    top - top position in pixels
 *    
 *  Returns:
 *    -         
 */
function ng_setLeftTopNotIE(o, l, t)
{
  o.style.left=l+'px';
  o.style.top=t+'px';
}

function ng_setLeftTopIE(o, l, t)
{
  o.style.pixelLeft=l;
  o.style.pixelTop=t;
}

var ng_setLeftTop = ngIExplorer ? ng_setLeftTopIE : ng_setLeftTopNotIE;

/**
 *  Function: ng_setBounds
 *  Sets element left, top, width and height. Optimized for IE if used.
 *  
 *  Syntax:
 *    void *ng_setBounds* (object obj, int left, int top, int width, int height)
 *    
 *  Parameters:
 *    obj - object element
 *    left - left position in pixels
 *    top - top position in pixels
 *    width - width of element in pixels
 *    height - height of element in pixels       
 *    
 *  Returns:
 *    -         
 */
function ng_setBoundsNotIE(o, l, t, w, h)
{
  o.style.left=l+'px';
  o.style.top=t+'px';
  o.style.width=w+'px';
  o.style.height=h+'px';
}

function ng_setBoundsIE(o, l, t, w, h)
{
  o.style.pixelLeft=l;
  o.style.pixelTop=t;
  o.style.pixelWidth=w;
  o.style.pixelHeight=h;
}

var ng_setBounds = ngIExplorer ? ng_setBoundsIE : ng_setBoundsNotIE;

function ng_ProcessURLParams2(url, septag)
{
  if(url=='') return;
  var vars = url.split(septag);
  for(var i=0;i<vars.length;i++)
  {
    s=vars[i].split('=');
    if(s[0].substr(0,4)=='amp;') s[0]=s[0].substr(4);
    ngURLParams[ ng_unescape(s[0]) ] = (s.length>1 ? ng_unescape(s[1]) : null);
  }
}

function ng_ProcessURLParams(url)
{
  ngURLParams = new Array();
  url=ngVal(url,window.location.href);
  var i1=url.indexOf('?');
  var i2=url.indexOf('#');
  var url1='';
  var url2='';
  if(i2>=0) 
  {
    url2=url.substr(i2+1);
    url=url.substr(0,i2);  
  }
  if(i1>=0) url1=url.substr(i1+1);
  ng_ProcessURLParams2(url1,'&');
  ng_ProcessURLParams2(url2,'@');
  ngURLParamsParsed=true;
}


/**
 *  Function: ng_GET
 *  Gets value of page URL parameter. 
 *   
 *  Syntax:
 *    string *ng_GET* (string paramname)
 *    
 *  Parameters:
 *    paramname - parameter name
 *    
 *  Returns:
 *    Value of the parameter.
 *    
 *  Example:
 *    > http://server/?P1=a&P2=b&amp;P3=c#P4=d@P5=e
 *    
 *    > var p1=ng_GET('P1');   
 */       
function ng_GET(p)
{
  if(!ngURLParamsParsed) ng_ProcessURLParams();
  return ngURLParams[p];
}

/**
 *  Function: ng_GetURLSafeCharsEncoded
 *  Gets array, where keys are url encoded URL safe chars (RFC1738) and values are just URL safe chars  
 *  
 *  Syntax:
 *    array *ng_GetURLSafeCharsEncoded* ()
 *   
 *  Returns:
 *    Value of global variable ngURLSafeCharsEncoded      
 */
function ng_GetURLSafeCharsEncoded()
{
  if(typeof ngURLSafeCharsEncoded=='undefined')
  {
    ngURLSafeCharsEncoded = {};
    for(var k in ngURLSafeChars)
      ngURLSafeCharsEncoded['%' + parseInt(k).toString(16)] = String.fromCharCode(k);
  }
  return ngURLSafeCharsEncoded;
}

/**
 *  Function: ng_Redirect
 *  Redirects user to specified URL.
 *   
 *  Syntax:
 *    void *ng_Redirect* (string url, bool topframe = true)
 *    
 *  Parameters:
 *    url - target url
 *    topframe - redirect  
 *    
 *  Returns:
 *    TRUE if location was set.
 */       
function ng_Redirect(url, topframe)
{
  url=ng_URL(url);
  topframe=ngVal(topframe, true);
  try {
    var p=parent;
    if((topframe)&&(p!=window))
    {
      while(p)
      {
        if(p.parent==p) break;
        p=p.parent;
      }
      p.location.href=url;
    }
    else document.location.href=url;
    return true;  
  }
  catch(e) {
    return false;
  }
}

/**
 *  Function: ng_InIFRAME
 *  Tests if page is opened in IFRAME.
 *   
 *  Syntax:
 *    bool *ng_InIFRAME* (void)
 *    
 *  Parameters:
 *    - 
 *    
 *  Returns:
 *    TRUE if page is in IFRAME.
 */       
function ng_InIFRAME()
{
  return (parent!=window);
}

/**
 *  Function: ng_SetByRef
 *  Sets value as reference into object property.
 *   
 *  Syntax:
 *    void *ng_SetByRef* (object obj, string prop [, mixed value])
 *    
 *  Parameters:
 *    obj - object where property will be set
 *    prop - property name
 *    value - value of property     
 *    
 *  Returns:
 *    - 
 */       
function ng_SetByRef(obj,prop,val)
{
  if((!obj)||(!prop)||(prop=='')) return;
  if(typeof obj['_byRef'] === 'undefined') obj['_byRef']=new Object;
  obj['_byRef'][prop]=true;
  if(arguments.length>2) 
    obj[prop]=val;
}

/**
 *  Function: ng_SetByVal
 *  Sets copy of given value into object property.
 *   
 *  Syntax:
 *    void *ng_SetByVal* (object obj, string prop [, mixed value])
 *    
 *  Parameters:
 *    obj - object where property will be set
 *    prop - property name
 *    value - value of property     
 *    
 *  Returns:
 *    - 
 */       
function ng_SetByVal(obj,prop,val)
{
  if((!obj)||(!prop)||(prop=='')) return;
  if(obj['_byRef']) delete obj['_byRef'][prop];
  if(arguments.length>2) 
    obj[prop]=ng_CopyVar(val);
}

/**
 *  Function: ng_CopyVar
 *  Creates true copy of variable.
 *   
 *  Syntax:
 *    mixed *ng_CopyVar* (mixed var)
 *    
 *  Parameters:
 *    var - variable to be copied 
 *    
 *  Returns:
 *    New variable. 
 */       
function ng_CopyVar(o)
{                                    
  var ri={ cnt: 0, src: [], dst: [] };
  var r=ng_copyvar_int(o,ri);
  if((ri.cnt!=0)&&(ri.src.length))
    ng_copyvar_fixref(r,ri);
  return r; 
}

function ng_type_date(d) { 
  return Object.prototype.toString.call(d) === '[object Date]';
}

function ng_copyvar_int(o, ri)
{
  if((o)&&(typeof o === 'object'))
  {
    if(ng_type_date(o)) return new Date(o);

    var r;
    if(typeof o.length === 'number') // array 
    { 
      var ix;
      r=new Array; 
      for(var i in o) 
      {
        if(!o.hasOwnProperty(i)) continue;
        ix=(typeof i!=='number' ? parseInt(i) : i);
        if((isNaN(ix))||(ix<0)||(ix>=o.length)) // probably not array at all
        {
          r=null;
          break;
        }  
        r[i]=ng_copyvar_int(o[i],ri);
      }
      if(r) return r;
    }
    r=new Object;
    ri.src[ri.src.length]=o;
    ri.dst[ri.dst.length]=r;
    var oref=o['_byRef'];
    if(oref)
    {
      for(var i in o) 
        if(!oref[i]) r[i]=ng_copyvar_int(o[i],ri);
        else { r[i]=o[i]; ri.cnt++; }
    }
    else for(var i in o) r[i]=ng_copyvar_int(o[i],ri);
    
    if(typeof r.__clone === 'function') r.__clone(o);
    return r;
  }    
  return o;
}

function ng_copyvar_fixref(o, ri)
{
  if((!o)||(typeof o !== 'object')||(ng_type_date(o))) return;

  if(typeof o.length === 'number') // array 
  { 
    var ix;
    var arr=true; 
    for(var i in o) 
    {
      if(!o.hasOwnProperty(i)) continue;
      ix=(typeof i!=='number' ? parseInt(i) : i);
      if((isNaN(ix))||(ix<0)||(ix>=o.length)) // probably not array at all
      {
        arr=false;
        break;
      }  
      ng_copyvar_fixref(o[i],ri);
    }
    if(arr) return;
  }
  var oref=o['_byRef'];
  if(oref)
  {
    for(var i in o)
    { 
      if(!oref[i]) ng_copyvar_fixref(o[i],ri);
      else 
      {
        for(var j=0;j<ri.src.length;j++)
          if(o[i]==ri.src[j]) {
            o[i]=ri.dst[j];
            break;
          } 
        ri.cnt--; 
      }
      if(!ri.cnt) break;
    }
  }
  else 
    for(var i in o) 
    {
      ng_copyvar_fixref(o[i],ri);
      if(!ri.cnt) break;
    }
}

var merge_undefined;

/**
 *  Function: ng_MergeVar
 *  Merges two variables.
 *   
 *  Syntax:
 *    void *ng_MergeVar* (mixed dst, mixed var [, bool allowundefined=false, function callback])
 *    
 *  Parameters:
 *    dst - destination variable 
 *    var - variable to be merged
 *    allowundefined - if FALSE (default), undefined values in parameter var are ignored
 *    callback - optional callback function 
 *    
 *  Returns:
 *    - 
 */       
function ng_MergeVar(d,o,allowundefined,callback)
{  
  if((!d)||(typeof d !== 'object')||(ng_type_date(d))||(typeof o!=='object')||(ng_type_date(o))) return;
  if(!ngVal(allowundefined,false)) o=ng_CleanUndefined(ng_CopyVar(o));
  
  if((typeof callback === 'function')&&(!ngVal(callback(d,o),true))) return;
  if((typeof d.__merge === 'function')&&(!ngVal(d.__merge(o),true))) return;
  
  var dref=d['_byRef'];
  
  var ex={};
  for(var i in d) ex[i]=true;
  if((o)&&((dref)||o['_byRef']))
  {
    var oref=o['_byRef'];
    for(var i in o) {
      if(ex[i]!==true) {
        if(((!oref)||(!oref[i]))
         &&((!dref)||(!dref[i]))) d[i]=ng_CopyVar(o[i]);
        else d[i]=o[i];
      }
      else
      { 
        if(((!oref)||(!oref[i]))
           &&((!dref)||(!dref[i]))&&(!ng_IsArrayVar(d[i]))) ng_MergeVar(d[i],o[i],true,callback);
      }
    }
  }
  else
  {
    for(var i in o) 
    {
      if(ex[i]!==true) d[i]=ng_CopyVar(o[i]);
      else 
      {
        if(!ng_IsArrayVar(d[i])) ng_MergeVar(d[i],o[i],true,callback);
      }
    }
  }
}

/**
 *  Function: ng_CleanUndefined
 *  Removes all undefined properties in object.
 *   
 *  Syntax:
 *    mixed *ng_CleanUndefined* (mixed obj)
 *    
 *  Parameters:
 *    obj - object to be cleaned
 *     
 *  Returns:
 *    Input obj parameter.      
 */  
function ng_CleanUndefined(d)
{
  if((!d)||(typeof d !== 'object')||(ng_type_date(d))) return d;
  var dref=d['_byRef'];
  var del=[];
  for(var i in d) 
  {
    if(typeof d[i]==='undefined') del.push(i); // don't delete in foreach
    else if(((!dref)||(!dref[i]))&&(!ng_IsArrayVar(d[i]))) ng_CleanUndefined(d[i]);
  }
  for(var i=del.length-1;i>=0;i--)
    delete d[del[i]];
  return d;
}

/**
 *  Function: ng_VarEquals
 *  Tests if value of one variable equals to value of second variable.
 *  Function handles date types and objects. 
 *   
 *  Syntax:
 *    bool *ng_VarEquals* (mixed a, mixed b [, bool noobj=false])
 *    
 *  Parameters:
 *    a - first variable 
 *    b - second variable
 *    noobj - if TRUE don't compare objects  
 *    
 *  Returns:
 *    TRUE if values of variables are equal.    
 *  
 */       
function ng_VarEquals(a,b,noobj)
{
  if(a===b) return true;  
  if(typeof a !== typeof b) return (a==b);
  if(typeof a !=='object') return false;   

  var adate=ng_type_date(a);
  var bdate=ng_type_date(b);
  if(adate || bdate)
    return ((adate==bdate)&&(a.getTime() == b.getTime()));

  if(a || b)
  {
    if((!a)||(!b)||(noobj)) return false;

    if(typeof a.__equals === 'function') return ngVal(a.__equals(b),false);
    if(typeof b.__equals === 'function') return ngVal(b.__equals(a),false);

    var keys={};
    for(var i in a) keys[i]=true;      
    for(var i in b) keys[i]=true;      
    delete keys._byRef;

    var aref=a['_byRef'];
    var bref=b['_byRef'];
    for(var i in keys)
      if(!ng_VarEquals(a[i],b[i],((aref)&&(aref[i]))||((bref)&&(bref[i])))) return false;
  }
  return true;
}

/**
 *  Function: ng_IsArrayVar
 *  Detects if variable is indexed array.
 *   
 *  Syntax:
 *    bool *ng_IsArrayVar* (mixed var)
 *    
 *  Parameters:
 *    var - variable to be checked 
 *    
 *  Returns:
 *    TRUE if variable is indexed array. 
 */       
function ng_IsArrayVar(o)
{
  if((typeof o !== 'object')||(!o)) return false;

  if(typeof o.length === 'number') // array 
  { 
    var ix;
    var arr=true; 
    for(var i in o) 
    {
      if(!o.hasOwnProperty(i)) continue;
      ix=(typeof i!=='number' ? parseInt(i) : i);
      if((isNaN(ix))||(ix<0)||(ix>=o.length)) // probably not array at all
      {
        arr=false;
        break;
      }  
    }
    if(arr) return true;
  }
  return false;
}

/**
 *  Function: ng_EmptyVar
 *  Detects if variable is empty (not set).
 *   
 *  Syntax:
 *    bool *ng_EmptyVar* (mixed var)
 *    
 *  Parameters:
 *    var - variable to be checked 
 *    
 *  Returns:
 *    TRUE if variable is empty. 
 */       
function ng_EmptyVar(o)
{
  switch(typeof o)
  {
    case 'undefined': return true;
    case 'string': return (o=='');
    case 'integer': return (o==0);
    case 'object':
      if(!o) return true;
      if(o.length>0) return false;
      for(var i in o)
        return false;
      return true;
    case 'boolean': return (!o);
  }
  return false;
}

/**
 *  Function: ngAddEvent
 *  Adds new function to existing event handler (callback).  
 * 
 *  Syntax:
 *    function *ngAddEvent* (function oldevent, function appendevent)
 *    
 *  Parameters:
 *    oldevent - old event handler
 *    appendevent - function to be added to existing event handler
 *    
 *  Returns:
 *    New event handler function that calls both event handlers (oldevent 
 *    function and than appendevent function).               
 */
function ngAddEvent(ev, fce) {
  if(typeof(fce)=='function') // only functions can be added to event handlers 
  {              
    if(typeof(ev)=='function') return function() { var r1=ev.apply(this,arguments); var r2=fce.apply(this,arguments); return ((typeof r1 === typeof r2) && (r1 == r2) ? r1 : undefined); } // add new function to functions chain
    return fce; // event handler not set, return added function
  }
  return ev;
}

function ngObjAddEvent(ev, fce, once) {
  var swap=false;
  if(typeof fce === 'string')
  {
    var c=fce;
    fce=ev;
    ev=c;
    swap=true;
  }
  if(ng_IsArrayVar(fce))
  {
    if(swap) {
      for(var i=fce.length-1;i>=0;i--)
        ngObjAddEvent.apply(this,[fce[i],ev,once]);
    }
    else
    {
      for(var i=0;i<fce.length;i++)
        ngObjAddEvent.apply(this,[ev,fce[i],once]);
    }
    return;
  }
  if(typeof fce === 'function') // only functions can be added to event handlers 
  { 
    if(typeof this[ev] === 'function') 
    { 
      var evlist=this[ev].events;
      if(typeof evlist === 'undefined') {
        var oldfnc=this[ev];
        if((once)&&(fce===oldfnc)) return;
        
        evlist=[];
        this[ev]=function() {
          var r,ret,undefined;
          for(var i=0;i<evlist.length;i++)
          {
            r=evlist[i].apply(this,arguments);
            if(!i) ret=r;
            else if(r !== ret) ret=undefined;
          }
          return ret;
        }      
        this[ev].events=evlist;
        evlist.push(oldfnc);
      }
      if(once)
      {
        for(var i=0;i<evlist.length;i++)
          if(evlist[i]===fce) return;
      }
      if(swap) evlist.splice(0,0,fce);
      else     evlist.push(fce);
      // add new function to functions chain
    }
    else this[ev]=fce; // event handler not set, return added function
  }
}

function ngObjRemoveEvent(ev, fce) 
{
  if(ng_IsArrayVar(fce))
  {
    for(var i=0;i<fce.length;i++)
      ngObjRemoveEvent.apply(this,[ev,fce[i]]);
    return;
  }
  if(typeof(fce)=='function') // only functions can be added to event handlers 
  { 
    if(!this[ev]) return;
    if(this[ev]===fce) { this[ev] = null; return; }
    var evlist=this[ev].events;
    if(typeof evlist !== 'undefined') 
    {
      for(var i=evlist.length-1;i>=0;i--) 
        if(evlist[i]===fce) evlist.splice(i,1);
      if(!evlist.length) 
      {
        this[ev]=null;
        delete this[ev].events;
      } 
      else if(evlist.length==1)
      {
        this[ev]=evlist[0];
        delete this[ev].events;
      }
    } 
  }
}

// --- ngCookies ---------------------------------------------------------------

function ngSetCookie(name, value, expires, path, domain, secure, escapevalue)
{
  escapevalue = ngVal(escapevalue, true);
  var cookie_string = name+'='+(escapevalue ? ng_URLEncode(value) : value);
  if (typeof expires !== 'undefined') cookie_string+='; expires='+expires.toGMTString();
  if(path) cookie_string += '; path='+escape(path);
  if(domain) cookie_string += '; domain='+escape(domain);
  if(secure) cookie_string += '; secure';  
  document.cookie = cookie_string;
}

function ngCookieExpires(delta)
{
  var expires = new Date();  // current date & time
  expires.setTime(expires.getTime() + delta*1000);
  return expires;
}

function ngDeleteCookie(cookie_name, path, domain, secure)
{
  ngSetCookie(cookie_name, '', ngCookieExpires(-1), path, domain, secure);
}

function ngGetCookie(cookie_name)
{ 
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
  return( results ? ng_unescape(results[2]) : undefined);
}

function ngSetCookieByURL(name, value, expires, url, escapevalue)
{
  var secure=false,domain,path;
  var idx=url.indexOf("://");
  if(idx>=0) 
  {
    if(url.substring(0,idx) == 'https') secure=true;
    url=url.substring(idx+3,url.length);

    idx=url.indexOf('/');
    if(idx>=0)
    {
      domain=url.substring(0,idx);
      url=url.substring(idx,url.length);
      idx=url.indexOf('?');
      if(idx>=0) url=url.substring(0,idx);
      path=url;
    }
    else domain=url;

    if(typeof domain === 'string')
    {
      idx=domain.indexOf('.');
      if(idx>=0) domain=domain.substring(idx+1,domain.length);
      else domain=undefined;
    }
  }
  else
  {
    idx=url.indexOf('?');
    if(idx>=0) url=url.substring(0,idx);
    path=url;
  }

  ngSetCookie(name, value, expires, path, undefined, secure, escapevalue);
}

// --- ngRPC -------------------------------------------------------------------

var rpcNone            = 0;
var rpcAuto            = 1;
var rpcScript          = 2;
var rpcIFrame          = 3;
var rpcHttpRequest     = 4;
var rpcHttpRequestPOST = 5;
var rpcHttpRequestGET  = 6;
var rpcJSON            = 7;
var rpcJSONPOST        = 8;
var rpcJSONGET         = 9;
var rpcData            = 10;
var rpcDataPOST        = 11;
var rpcDataGET         = 12;
var rpcUser            = 99;

var rpcMaxGetLength    = 2000;

var ngOnRPCCreated     = null;
var ngOnAnyRPCRequest  = null;

var ngRPCLastID = 0;
var ngRPCByID = new Array();

function getRPCByID(rpcid)
{
  rpcid=''+ngVal(rpcid,'');
  if((rpcid=='')||(!ngRPCByID)) return null;
  return ngVal(ngRPCByID[rpcid],null);
}

var rpcHeadElement = null;

function ngrpc_sendScriptRequest(url)
{
  if((this.OnSendRequest)&&(!ngVal(this.OnSendRequest(this, url, null),false))) return true;

  if(!rpcHeadElement)
  {
    rpcHeadElement = document.getElementsByTagName("head").item(0);
    if(!rpcHeadElement) return false;
  } 
  var sid=this.id+'S';
  var o = document.getElementById(sid);
  if(o) rpcHeadElement.removeChild(o); 
  o = document.createElement("script");  
  o.setAttribute("src",ng_URL(url)); 
  o.setAttribute("id",sid); 
  rpcHeadElement.appendChild(o);
  if(this.OnRequestSent) this.OnRequestSent(this, url, null);
  return true;
}

function ngrpc_sendIFrameRequest(url, params)
{
  var fid=this.id+'F';
  var ifrm = document.getElementById(fid);
  if(!ifrm)
  {
    ifrm = document.createElement('iframe');
    ifrm.id = fid;
    ifrm.style.visibility = "hidden";
    document.body.appendChild(ifrm);
    var fix7=document.body.offsetLeft; // IE7 fix
  }
  var doc = (ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document);
  if (!doc) return false;

  try
  {
    doc.open();
    doc.write('<html><body><form action="'+ng_URL(url)+'" method="'+(ng_EmptyVar(this.HTTPMethod) ? "POST" : this.HTTPMethod)+'" id="'+this.id+'">');
    var v;
    if(typeof params==='object')
    {
      // In URL_ESCAPING_UTF8 iframe encodes values itself, so no standard encoding is required
      if(ngURLDefaultEscaping==0) /* URL_ESCAPING_UTF8 */ ngURLDefaultEscaping=-1; // None
      try
      {
        for(var i in params)
        {                                        
          v=this.EncodeParam(i,params[i]);
          if(typeof v === 'undefined') continue;          
          doc.write('<input type="hidden" name="'+ng_htmlEncode(i)+'" value="'+ng_htmlEncode(v)+'" />');
        }
      }
      finally
      {
        if(ngURLDefaultEscaping==-1) /* URL_ESCAPING_UTF8 */ ngURLDefaultEscaping=0; // None
      }
    }
    if((this.OnIFrameRequest)&&(!ngVal(this.OnIFrameRequest(this,doc,url),false))) return false;
    doc.write('</form></body></html>');
    doc.close();
  }
  catch(e)
  {
    return false;
  }
  
  if((this.OnSendRequest)&&(!ngVal(this.OnSendRequest(this, url, doc),false))) return true;

  var frm=doc.getElementById(this.id);
  if(frm) 
  { 
    frm.submit(); 
    if(this.OnRequestSent) this.OnRequestSent(this, url, doc);
    return true; 
  }
  return false;          
}

function ngrpc_sendHttpRequest(url, callback, reqinfo)
{
  reqinfo.URL=url;
  if(this.OnSendRequest)
  {
    if(!ngVal(this.OnSendRequest(this, reqinfo.URL, reqinfo),false)) return true;
  }
  reqinfo.PostParams=ngVal(reqinfo.PostParams,null);
  reqinfo.ReqHeaders=ngVal(reqinfo.ReqHeaders,null);
  reqinfo.Method = ngVal(reqinfo.Method, (ng_EmptyVar(this.HTTPMethod) ? (typeof reqinfo.PostParams === 'string' ? 'POST' : 'GET') : this.HttpMethod));
  var xmlhttp=null;
  try {
    if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari      
    else 
    {
      try { xmlhttp=new ActiveXObject('Msxml2.XMLHTTP'); }   // code for IE6, IE5
      catch (e) { xmlhttp=new ActiveXObject('Microsoft.XMLHTTP'); }
    }
    if((!xmlhttp)&&(window.createRequest)) xmlhttp = window.createRequest();
  }
  catch(e)
  {
    return false;
  }
  if(!xmlhttp) return false;
  reqinfo.XMLHttp=xmlhttp;
  if(callback)
  {
    var rpc=this;
    xmlhttp.onreadystatechange=function()
    {
      if((rpc.OnHTTPReadyStateChanged)&&(!ngVal(rpc.OnHTTPReadyStateChanged(rpc,xmlhttp),false))) return;
      if(xmlhttp.readyState==4) 
      {
        if((xmlhttp.status==200)||(xmlhttp.status==304)||(xmlhttp.status==0)) callback(rpc, xmlhttp.responseText, xmlhttp);
        else if(rpc.OnHTTPRequestFailed) rpc.OnHTTPRequestFailed(rpc,xmlhttp);                   
      }      
    }
  }
  if(typeof reqinfo.PostParams === 'string')
  {
    if(!reqinfo.ReqHeaders) reqinfo.ReqHeaders=new Object;
    if(typeof reqinfo.ReqHeaders['Content-type'] === 'undefined')
      reqinfo.ReqHeaders['Content-type'] = 'application/x-www-form-URLencoded';
    if(typeof reqinfo.ReqHeaders['Content-length'] === 'undefined')
      reqinfo.ReqHeaders['Content-length'] = reqinfo.PostParams.length;
    if(typeof reqinfo.ReqHeaders['Connection'] === 'undefined')
      reqinfo.ReqHeaders['Connection'] = 'close';
  }
  
  if((this.OnHTTPRequest)&&(!ngVal(this.OnHTTPRequest(this,reqinfo),false))) return false;
  xmlhttp.open(reqinfo.Method,ng_URL(reqinfo.URL),(callback ? true : false));
  if(reqinfo.ReqHeaders)
  {
    for(var i in reqinfo.ReqHeaders)
      xmlhttp.setRequestHeader(i,reqinfo.ReqHeaders[i]);
  }
  xmlhttp.send(reqinfo.PostParams);
  if(this.OnRequestSent) this.OnRequestSent(this, reqinfo.URL, reqinfo);
  return (callback ? true : xmlhttp.responseText);
}

function ngrpc_EncodeParam(n,v)
{
  if(typeof v === 'undefined') return v;
  if(this.OnEncodeParam) v=this.OnEncodeParam(this,n,v);
  else 
  {
    if((typeof v === 'object')&&(v))
    {
      if(typeof v.GetText === 'function') v=v.GetText();
      else if(typeof v.toString === 'function') v=v.toString();
    }
    v=ng_URLEncode(v);
  }
  return v;
}

function ngrpc_GetURLParams()
{
  var v,urlparams='';
  for(var i in this.Params)
  {
    v=this.EncodeParam(i,this.Params[i]);
    if(typeof v === 'undefined') continue; 
    if(urlparams!='') urlparams+='&'
    urlparams+=i+'='+v;
  }
  return urlparams;
}

function ngrpc_domain(url)
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

function ngrpc_sendRequest(url, nocache)
{
  if(this.Type == rpcNone) return false;

  url=ngVal(url, this.URL);
  nocache=ngVal(nocache, this.nocache);

  if((this.OnRequest)||(ngOnAnyRPCRequest))
  {
    var reqinfo = {
      URL: url,
      nocache: nocache
    };
    if((this.OnRequest)&&(!ngVal(this.OnRequest(this,reqinfo),false))) return false;
    if((ngOnAnyRPCRequest)&&(!ngVal(ngOnAnyRPCRequest(this,reqinfo),false))) return false;
    url=reqinfo.URL;
    nocache=reqinfo.nocache;
  }
  if(nocache) url=ng_AddURLParam(url,'_t='+new Date().getTime()); 

  var v,params='';
  var type=this.Type;
  switch(this.Type)
  {
    case rpcAuto:
    case rpcScript:
    case rpcHttpRequest:
    case rpcHttpRequestPOST:
    case rpcHttpRequestGET:
    case rpcJSON:
    case rpcJSONPOST:
    case rpcJSONGET:
    case rpcData:
    case rpcDataPOST:
    case rpcDataGET:
      params=this.GetURLParams();
      if((type===rpcAuto)||(type===rpcHttpRequest)||(type===rpcJSON)||(type===rpcData)) // determine req. type by params length 
      {        
        if((type===rpcAuto)&&(!ngWinStoreApp)&&(ngrpc_domain(url)!=window.location.hostname))
        {
          type=rpcScript;
        }
        else
        {
          type=rpcHttpRequest;
          var i=url.indexOf('?');
          if(i>=0) 
          {
            params=ng_AddURLParam(url.substr(i,url.length),params);
            if((params.length)&&(params.charAt(0)=='?')) params=params.substr(1,params.length);
            url=url.substr(0,i);
          }
          if(params.length>rpcMaxGetLength) 
          {
            switch(this.Type)
            {
              case rpcAuto:
              case rpcHttpRequest:
                type=rpcHttpRequestPOST;
                break;
              case rpcJSON:
                type=rpcJSONPOST;
                break;
              case rpcData:
                type=rpcDataPOST;
                break;
            }
          }
          else
          {
            switch(this.Type)
            {
              case rpcAuto:
              case rpcHttpRequest:
                type=rpcHttpRequestGET;
                break;
              case rpcJSON:
                type=rpcJSONGET;
                break;
              case rpcData:
                type=rpcDataGET;
                break;
            }
          }
        }
      }
      break;
  }
  switch(type)
  {
    case rpcScript:
      if(params!='') url=ng_AddURLParam(url, params);
      return this.sendScriptRequest(url);

    case rpcIFrame:
      return this.sendIFrameRequest(url,this.Params);

    case rpcHttpRequestPOST:    
    case rpcHttpRequestGET:    
    case rpcJSONPOST:
    case rpcJSONGET:
    case rpcDataPOST:
    case rpcDataGET:
      var ri={ ReqHeaders: { RPC: 1 } };
      if((type===rpcHttpRequestGET)||(type===rpcJSONGET)||(type===rpcDataGET))
      {
        if(params!='') url=ng_AddURLParam(url, params);
      }
      else ri.PostParams=params;
      return this.sendHttpRequest(url, function(rpc, response, xmlhttp) {
        if((rpc.OnReceivedData)&&(!ngVal(rpc.OnReceivedData(rpc, response, xmlhttp),false))) 
          return;

        switch(type)
        {
          case rpcHttpRequestGET:
          case rpcHttpRequestPOST:    
            if(ngWinStoreApp) {
              MSApp.execUnsafeLocalFunction(function () {
                  window["eval"].call(window, '(function() {'+response+'})();');
              });
            } else {
              new Function(response)();
            }
            break;
          case rpcJSONGET:
          case rpcJSONPOST:
            try {
              var data=JSON.parse(response);
            } 
            catch(e) 
            { 
              if(rpc.OnHTTPRequestFailed) rpc.OnHTTPRequestFailed(rpc,xmlhttp);
              break;
            }
            if(rpc.OnReceivedJSON) rpc.OnReceivedJSON(rpc, data, xmlhttp); 
            break;
          case rpcDataGET:
          case rpcDataPOST:
            break;
        }
      }, ri);
      
    case rpcUser:
      if(!this.OnSendRequest) return false;
      if(!ngVal(this.OnSendRequest(this, url),false)) return false;
      if(this.OnRequestSent) this.OnRequestSent(this, url, null);
      return  true;
  }
  return false;
} 

function ngrpc_clearParams()
{
  this.Params=new Object;
}

function ngrpc_SetParam(n,v)
{
  if((typeof n==='undefined')||(n=='')) return;
  this.Params[n]=v;
}

function ngrpc_GetParam(n)
{
  return this.Params[n];
}

/**
 *  Class: ngRPC
 *  Remote Procedure Call.
 *   
 *  This class is used for asynchronous communication with server.
 *  
 *  Syntax:
 *    new *ngRPC* ([string id='', string url='', bool nocache=false])
 *    
 *  Parameters:
 *    id - unique ID of RPC class  
 *    url - request URL      
 *    nocache - if TRUE, unique timestamp is added to every request to prevent caching results  
 */   
function ngRPC(id,url,nocache)
{
  if(ngVal(id,'')=='')
  {
    ngRPCLastID++;
    id='ngRPC'+ngRPCLastID;
  }
  this.id=id+'_RPC';
  ngRPCByID[id]=this;
  
  this.sendScriptRequest = ngrpc_sendScriptRequest;
  this.sendIFrameRequest = ngrpc_sendIFrameRequest;
  this.sendHttpRequest = ngrpc_sendHttpRequest;
  this.GetURLParams = ngrpc_GetURLParams;
  this.EncodeParam = ngrpc_EncodeParam;

  /*
   *  Group: Properties
   */
  /*  Variable: nocache
   *  If TRUE, unique timestamp is added to every request to prevent caching
   *  of results.
   *  
   *  Default value: *false*  
   */ 
  this.nocache=ngVal(nocache,false);
  /*  Variable: Type
   *  Type of RPC call.
   *  
   *  Type: integer
   *  Default value: *rpcAuto*  
   */ 
  this.Type=rpcAuto;
  /*  Variable: HTTPMethod
   *  Used http method (if http request). If empty, autodetect.
   *  
   *  Type: string
   *  Default value: *''* (autodetect)  
   */ 
  this.HTTPMethod='';
  /*  Variable: URL
   *  Default RPC URL.
   *  
   *  Type: string
   *  Default value: *''*  
   */ 
  this.URL=ngVal(url,'');
  /*  Variable: Params
   *  RPC Parameters.
   *  
   *  Type: object
   *  Default value: *{ }*  
   */ 
  this.Params=new Object;
    
  /*
   *  Group: Methods
   */
  /*  Function: SetParam
   *  Sets request parameter.
   *  
   *  Syntax:
   *    void *SetParam* (string name, mixed value)
   *    
   *  Parameters:
   *    name - parameter name
   *    value - parameter value
   *    
   *  Returns:
   *    -
   */          
  this.SetParam = ngrpc_SetParam;
  /*  Function: GetParam
   *  Gets value of request parameter.
   *  
   *  Syntax:
   *    mixed *GetParam* (string name)
   *    
   *  Parameters:
   *    name - parameter name
   *    
   *  Returns:
   *    Value of parameter.
   */          
  this.GetParam = ngrpc_GetParam;
  /*  Function: sendRequest
   *  Sends request to the server.
   *  
   *  Syntax:
   *    void *sendRequest* (string url)
   *    
   *  Parameters:
   *    url - URL with parameters
   *    
   *  Returns:
   *    -
   */          
  this.sendRequest = ngrpc_sendRequest;
  /*  Function: clearParams
   *  Clears RPC parameters.
   *  
   *  Syntax:
   *    void *clearParams* ()
   *    
   *  Returns:
   *    -
   */          
  this.clearParams = ngrpc_clearParams;
  
  /*
   *  Group: Events
   */
  /*  Function: AddEvent
   *  Adds new function to the event handler (callback).   
   *   
   *  Syntax:
   *    void *AddEvent* (string event, function handler)
   *    
   *    void *AddEvent* (function handler, string event)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.AddEvent = ngObjAddEvent;
  /*  Function: RemoveEvent
   *  Removes function from the event handler (callback).   
   *   
   *  Syntax:
   *    void *RemoveEvent* (string event, function handler)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.RemoveEvent = ngObjRemoveEvent;
  /*
   *  Event: OnEncodeParam
   */     
  this.OnEncodeParam = null;
  /*
   *  Event: OnRequest
   */     
  this.OnRequest = null;
  /*
   *  Event: OnSendRequest
   */     
  this.OnSendRequest = null;
  /*
   *  Event: OnRequestSent
   */       
  this.OnRequestSent = null;
  /*
   *  Event: OnIFrameRequest
   */     
  this.OnIFrameRequest = null;
  /*
   *  Event: OnHTTPRequest
   */     
  this.OnHTTPRequest = null;
  /*
   *  Event: OnHTTPReadyStateChanged
   */     
  this.OnHTTPReadyStateChanged = null;
  /*
   *  Event: OnHTTPRequestFailed
   */     
  this.OnHTTPRequestFailed = null;
  /*
   *  Event: OnReceivedJSON
   */     
  this.OnReceivedJSON = null;
  /*
   *  Event: OnReceivedData
   */     
  this.OnReceivedData = null;
  
  if(ngOnRPCCreated) ngOnRPCCreated(this);
}

/**
 *  Class: ngRDS
 *  Remote Data Service based on <ngRPC> class.
 *   
 *  This class is used for getting asynchronous data from server.
 *  
 *  Syntax:
 *    new *ngRDS* ([string id='', string url='', function callback = null, bool nocache=false])
 *    
 *  Parameters:
 *    id - unique ID of RPC class  
 *    url - request URL
 *    callback - function which is called after data was received       
 *    nocache - if TRUE, unique timestamp is added to every request to prevent caching results  
 */   
function ngRDS(id,url,callback,nocache)
{
  this.__rpc=ngRPC;
  this.__rpc(id,url,nocache);
  delete this.__rpc;

  this.Type=rpcJSON;
  if(typeof callback === 'function')
  {
    this.OnReceivedJSON = function(rpc, response, xmlhttp) {
      callback(rpc, response, xmlhttp);
    }; 
    this.OnReceivedData = function(rpc, response, xmlhttp) {
      if((rpc.Type===rpcJSON)||(rpc.Type===rpcJSONGET)||(rpc.Type===rpcJSONPOST)) return true;
      callback(rpc, response, xmlhttp);
    };
  }
}

// --- ngStringBuilder ---------------------------------------------------------

/**
 *  Class: ngStringBuilder
 *  This class realizes fast concatenation of strings.
 *  
 *  Standard JavaScript string concatenation is quite slow. This class utilizes
 *  the fact that array joining is much faster than standard string 
 *  concatenation.    
 *    
 *  Syntax:
 *    new *ngStringBuilder* (mixed value)
 *   
 *  The statement:  
 *    > s = s1 + s2 + s3;
 *     
 *  can be replaced with:
 *    > var sb = new ngStringBuilder(s1);
 *    > sb.append(s2);
 *    > sb.append(s3);
 *    > s = sb.toString();
 *  
 */ 
// Initializes a new instance of the StringBuilder class
// and appends the given value if supplied
function ngStringBuilder(value)
{
  this.strings = new Array("");

  /** 
   *  Function: append 
   *  Appends the given value to the end of this instance.
   *  
   *  Syntax:
   *    <ngStringBuilder> *append* (mixed value)
   *    
   *  Parameters:
   *    value - string, array or other ngStringBuilder class
   *             
   *  Returns: 
   *    This instance of ngStringBuilder. 
   *    Helps function chaining - sb.append('a').append('b').append('c').
   */                     
  this.append = function (value)
  {
    if(value) 
    {
      if(typeof value === 'string') this.strings.push(value);
      else
      {
        if(value.strings)  for(var i=0;i<value.strings.length;i++) this.strings.push(value.strings[i]);
        else               for(var i=0;i<value.length;i++) this.strings.push(value[i]);
      }
    }
    return this;
  }
  
  /**
   *  Function: clear
   *  Clears the string buffer.
   *  
   *  Syntax:
   *    void *clear* ()
   *  
   *  Returns:
   *    -
   */                     
  this.clear = function ()
  {
    this.strings.length = 1;
  }
  
  /**
   *  Function: empty
   *  Tests if string buffer is empty.
   *  
   *  Syntax:
   *    bool *empty* ()
   *    
   *  Returns:
   *    TRUE if string buffer is empty.
   */                     
  this.empty = function ()
  {
    return (this.strings.length <= 1);
  }
  
  /**
   *  Function: toString
   *  Converts this instance to a String.
   *  
   *  Syntax:
   *    string *toString* ()
   *    
   *  Returns:
   *    String with concatenated values.
   *    
   *  See also:
   *    <append>         
   */                     
  this.toString = function ()
  {
    return this.strings.join("");
  }

  this.append(value);
}

(function() {
  var url=document.location.href;
  var idx=url.indexOf("://");
  if(idx>=0) 
  {
    ngHTTPProtocol=url.substring(0,idx+3);
    if(ngHTTPProtocol=='file://') ngHTTPProtocol='http://';
  }    
})();

ng_DetectLibsURL();

ngEmptyURL = ngLibPath('ng_basic', 'empty.gif?nop');

/*!
 * Controls.js - types.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */


// --- English Resources -------------------------------------------------------
if(typeof ngc_Lang === 'undefined') ngc_Lang=new Array();
if(typeof ngc_Lang['en'] === 'undefined') ngc_Lang['en']=new Array();

ngc_Lang['en']['decimal_separator'] = '.';
ngc_Lang['en']['thousands_separator'] = ',';

ngc_Lang['en']['date_format']           = 'M/d/yyyy';
ngc_Lang['en']['date_shortformat']     = 'M/d/yy';
ngc_Lang['en']['date_format_parse']     = 'M/d/y';
ngc_Lang['en']['time_format']           = 'hh:mm:ss a';
ngc_Lang['en']['time_shortformat']      = 'hh:mm a';
ngc_Lang['en']['time_format_parse']     = ngc_Lang['en']['time_shortformat_parse'] = ['h:m:s a','h:m:sa','h:m a','h:ma','H:m:s','H:m'];
ngc_Lang['en']['datetime_format']       = 'M/d/yy hh:mm:ss a';
ngc_Lang['en']['datetime_shortformat']  = 'M/d/yy hh:mm a';
ngc_Lang['en']['datetime_format_parse'] = ngc_Lang['en']['datetime_shortformat_parse'] = ['M/d/y h:m:s a','M/d/y h:m:sa','M/d/y h:m a','M/d/y h:ma','M/d/y H:m:s','M/d/y H:m'];

ngc_Lang['en']['calendar_months']       = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
ngc_Lang['en']['calendar_months_short'] = new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
ngc_Lang['en']['calendar_days']         = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
ngc_Lang['en']['calendar_days_short']   = new Array('Su','Mo','Tu','We','Th','Fr','Sa');
ngc_Lang['en']['calendar_days_letter']  = new Array('S','M','T','W','T','F','S');

// --- Czech Resources -------------------------------------------------------
if(typeof ngc_Lang['cz'] === 'undefined') ngc_Lang['cz']=new Array();

ngc_Lang['cz']['decimal_separator'] = ',';
ngc_Lang['cz']['thousands_separator'] = ' ';

ngc_Lang['cz']['date_format']           = 'd.M.yyyy';
ngc_Lang['cz']['date_shortformat']     = 'd.M.yy';
ngc_Lang['cz']['date_format_parse']     = 'd.M.y';
ngc_Lang['cz']['time_format']           = 'HH:mm:ss';
ngc_Lang['cz']['time_shortformat']      = 'HH:mm';
ngc_Lang['cz']['time_format_parse']     = ngc_Lang['cz']['time_shortformat_parse'] = ['H:m:s','H:m'];
ngc_Lang['cz']['datetime_format']       = 'd.M.yyyy HH:mm:ss';
ngc_Lang['cz']['datetime_shortformat']  = 'd.M.yyyy HH:mm';
ngc_Lang['cz']['datetime_format_parse'] = ngc_Lang['cz']['datetime_shortformat_parse'] = ['d.M.y H:m:s','d.M.y H:m'];

ngc_Lang['cz']['calendar_months']       = new Array('Leden','Únor','Březen','Duben','Květen','Červen','Červenec','Srpen','Září','Říjen','Listopad','Prosinec');
ngc_Lang['cz']['calendar_months_short'] = new Array('Led','Úno','Bře','Dub','Kvě','Čer','Čnc','Srp','Zář','Říj','Lis','Pro');
ngc_Lang['cz']['calendar_days']         = new Array('Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota');
ngc_Lang['cz']['calendar_days_short']   = new Array('Ne','Po','Út','St','Čt','Pá','So');
ngc_Lang['cz']['calendar_days_letter']  = new Array('N','P','Ú','S','Č','P','S');

// --- Slovak Resources -------------------------------------------------------
if(typeof ngc_Lang['sk'] === 'undefined') ngc_Lang['sk']=new Array();

ngc_Lang['sk']['decimal_separator'] = ',';
ngc_Lang['sk']['thousands_separator'] = ' ';

ngc_Lang['sk']['date_format']           = 'd.M.yyyy';
ngc_Lang['sk']['date_shortformat']     = 'd.M.yy';
ngc_Lang['sk']['date_format_parse']     = 'd.M.y';
ngc_Lang['sk']['time_format']           = 'HH:mm:ss';
ngc_Lang['sk']['time_shortformat']      = 'HH:mm';
ngc_Lang['sk']['time_format_parse']     = ngc_Lang['sk']['time_shortformat_parse'] = ['H:m:s','H:m'];
ngc_Lang['sk']['datetime_format']       = 'd.M.yyyy HH:mm:ss';
ngc_Lang['sk']['datetime_shortformat']  = 'd.M.yyyy HH:mm';
ngc_Lang['sk']['datetime_format_parse'] = ngc_Lang['sk']['datetime_shortformat_parse'] = ['d.M.y H:m:s','d.M.y H:m'];

ngc_Lang['sk']['calendar_months']       = new Array('Január','Február','Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December');
ngc_Lang['sk']['calendar_months_short'] = new Array('Jan','Feb','Mar','Apr','Máj','Jún','Júl','Aug','Sep','Okt','Nov','Dec');
ngc_Lang['sk']['calendar_days']         = new Array('Nedeľa','Pondelok','Utorok','Streda','Štvrtok','Piatok','Sobota');
ngc_Lang['sk']['calendar_days_short']   = new Array('Ne','Po','Ut','St','Št','Pi','So');
ngc_Lang['sk']['calendar_days_letter']  = new Array('N','P','Ú','S','Č','P','S');

// --- Resources Utils ---------------------------------------------------------
var ngTypesLang = 'en';

function ngTypesTxt(t,defval)
{
  if((typeof ngApp === 'object')&&(ngApp)&&(typeof ngApp.Text === 'function')) return ngApp.Text(t, defval); // Use Controls resources
  var l=ngc_Lang[ngTypesLang];
  if(typeof l === 'undefined') l=ngc_Lang['en'];
  if(typeof l === 'undefined') return ngVal(defval, t); 
  return ngVal(l[t],ngVal(defval, t));  
} 

// --- Limits ------------------------------------------------------------------

var SBYTE_MIN  = -127;
var SBYTE_MAX  = 127;
var BYTE_MIN   = 0;
var BYTE_MAX   = 255;
var SHORT_MIN  = -32767;
var SHORT_MAX  = 32767;
var USHORT_MIN = 0;
var USHORT_MAX = 65535;
var LONG_MIN   = -2147483647;
var LONG_MAX   = 2147483647;
var ULONG_MIN  = 0;
var ULONG_MAX  = 4294967295;
  
/**
 *  Variable: ng_SIUnits
 *  Definitions of SI units.    
 *  
 */       
var ng_SIUnits = ng_SIUnits || [ 
  { name: 'yotta', prefix: 'Y',  ex: Math.pow(10,24),  binex: Math.pow(1024,8), notcommon: true  },
  { name: 'zetta', prefix: 'Z',  ex: Math.pow(10,21),  binex: Math.pow(1024,7), notcommon: true  },
  { name: 'exa',   prefix: 'E',  ex: 1e18,  binex: 1152921504606847000, notcommon: true  },
  { name: 'peta',  prefix: 'P',  ex: 1e15,  binex: 1125899906842624},
  { name: 'tera',  prefix: 'T',  ex: 1e12,  binex: 1099511627776},
  { name: 'giga',  prefix: 'G',  ex: 1e9,   binex: 1073741824},
  { name: 'mega',  prefix: 'M',  ex: 1e6,   binex: 1048576},
  { name: 'kilo',  prefix: 'k',  ex: 1e3,   binex: 1024},
  { name: 'hekto', prefix: 'h',  ex: 1e2,   binex: 0,  notcommon: true },
  { name: 'deka',  prefix: 'da', ex: 1e1,   binex: 0,  notcommon: true },
  { name: '',      prefix: '',   ex: 1,     binex: 1},
  { name: 'deci',  prefix: 'd',  ex: 1e-1,  binex: 0,  notcommon: true },
  { name: 'centi', prefix: 'c',  ex: 1e-2,  binex: 0},
  { name: 'mili',  prefix: 'm',  ex: 1e-3,  binex: 0},
  { name: 'mikro', prefix: 'µ',  ex: 1e-6,  binex: 0},
  { name: 'nano',  prefix: 'n',  ex: 1e-9,  binex: 0},
  { name: 'piko',  prefix: 'p',  ex: 1e-12, binex: 0},
  { name: 'femto', prefix: 'f',  ex: 1e-15, binex: 0},
  { name: 'atto',  prefix: 'a',  ex: 1e-18, binex: 0, notcommon: true  },
  { name: 'zepto', prefix: 'z',  ex: 1e-21, binex: 0, notcommon: true  },
  { name: 'yokto', prefix: 'y',  ex: 1e-24, binex: 0, notcommon: true  }
];

function ng_GetDecimalSeparator() {

  var detected_ds;

  return function() {
    var ds=ngTypesTxt('decimal_separator','');
    if(ds!='') return ds;
    
    if(typeof detected_ds==='undefined') 
    {
      var n = 1.1;
      if(typeof n.toLocaleString === 'function')     
        detected_ds = n.toLocaleString().substring(1, 2);
      else
        detected_ds = '.';
    }
    return detected_ds;
  }
} 

/**
 *  Function: ng_DecimalSeparator
 *  Gets decimal separator according to current application language.    
 *  
 *  Syntax:
 *    mixed *ng_DecimalSeparator* ()
 *  
 *  Parameters:
 *    - 
 *  
 *  Returns:
 *    Decimal separator.
 */       
var ng_DecimalSeparator = ng_DecimalSeparator || ng_GetDecimalSeparator();

/**
 *  Function: ng_decodeSIUnits
 *  Decodes given units to units with exponent (square, quadratic).    
 *  
 *  Syntax:
 *    object *ng_decodeSIUnits* (string units)
 *  
 *  Parameters:
 *    units - units string to decode 
 *  
 *  Returns:
 *    Decoded units.
 */       
function ng_decodeSIUnits(units)
{
  units=''+units;
  if(units.length>1)
  {
    switch(units.charAt(units.length-1))
    {
      case '2':      
      case '²':
        return { units: units.substring(0,units.length-1), exp: 2 }; 
      case '3':
      case '³':
        return { units: units.substring(0,units.length-1), exp: 3 }; 
    }
  } 
  return { units: units, exp: 1 };
}

/**
 *  Function: ng_CompareSIUnits
 *  Compares two decoded units.    
 *  
 *  Syntax:
 *    bool *ng_CompareSIUnits* (object u1, object u2)
 *  
 *  Parameters:
 *    u1 - first decoded units 
 *    u2 - second decoded units 
 *  
 *  Returns:
 *    TRUE if units are identical.
 */       
function ng_CompareSIUnits(u1,u2)
{
  u1=ng_decodeSIUnits(u1);
  u2=ng_decodeSIUnits(u2);
  return ((u1.units==u2.units)&&(u1.exp==u2.exp));
}

/**
 *  Function: ng_StripSIUnits
 *  Strips units from given string.    
 *  
 *  Syntax:
 *    string *ng_StripSIUnits* (string v, string units)
 *  
 *  Parameters:
 *    v - string with units 
 *    units - dimension units 
 *  
 *  Returns:
 *    String without units.
 */       
function ng_StripSIUnits(v,units)
{  
  var s=ng_StripSuffix(v,units);
  if(s!=v) return s;
  s=ng_StripSuffix(v,units+'2');
  if(s!=v) return s;
  s=ng_StripSuffix(v,units+'3');
  if(s!=v) return s;
  s=ng_StripSuffix(v,units+'²');
  if(s!=v) return s;
  s=ng_StripSuffix(v,units+'³');
  if(s!=v) return s;
  return v;
}

/**
 *  Function: ng_getSIUnits
 *  Gets SI units definition from given string with units.    
 *  
 *  Syntax:
 *    string *ng_getSIUnits* (string v, string units[, mixed def=null])
 *  
 *  Parameters:
 *    v - string with units 
 *    units - dimension units 
 *    def - default value, used if SI units definition not founds      
 *  
 *  Returns:
 *    SI units definition or default value if not found.
 */       
function ng_getSIUnits(v,units,def)
{
  if(ngVal(units,'')!='')
  {
    var u,id=-1;
    v=''+v;
    for(var i=0;i<ng_SIUnits.length;i++)
    {
      if(ng_SIUnits[i].prefix=='') { id=i; continue; }
      u=ng_SIUnits[i].prefix+units;
      if(ng_CompareSIUnits(v.substr(-u.length,u.length),u)) return ng_SIUnits[i]; 
    }
    if(id>=0) {
      u=ng_SIUnits[id].prefix+units;
      if(ng_CompareSIUnits(v.substr(-u.length,u.length),u)) return ng_SIUnits[id];
    } 
  }
  return ngVal(def,null);
}

function ng_parseHMS(v,sep,def)
{
  v=ng_toString(v);
  sep=ngVal(sep,':');
  var it=v.split(sep);
  if(it.length>3) return ngVal(def,null);
  for(var i=0;i<it.length;i++)
  {
    if(i==it.length-1)
    {
      if(!ng_isNumber(it[i])) return ngVal(def,null);
      p=ng_toFloat(it[i]);
      if(((p<0)||(p>=60))&&(i>0)) return ngVal(def,null); 
    }
    else
    {
      if(!ng_isInteger(it[i])) return ngVal(def,null);
      p=ng_toInteger(it[i]);
      if(((p<0)||(p>=60))&&(i>0)) return ngVal(def,null); 
    }
    it[i]=p;
  }  
  return it;
}


/** 
 *  Group: Type validation functions    
 */
 
/**
 *  Function: ng_typeString
 *  Tests if type of given variable is a string.   
 *  
 *  Syntax:
 *    bool *ng_typeString* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is a string
 */       
function ng_typeString(n) { 
   return (typeof n==='string') || (Object.prototype.toString.call(n) === '[object String]');
} 

/**
 *  Function: ng_typeNumber
 *  Tests if type of given variable is a number.   
 *  
 *  Syntax:
 *    bool *ng_typeNumber* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is a number
 */       
function ng_typeNumber(n) { 
   return (typeof n==='number');
} 

/**
 *  Function: ng_typeNumberInt
 *  Tests if type of given variable is an integer number.   
 *  
 *  Syntax:
 *    bool *ng_typeNumberInt* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is an integer number
 */       
function ng_typeNumberInt(n) { 
   return ((typeof n==='number')&&(!isNaN(n))&&(n%1===0)); 
} 
 
/**
 *  Function: ng_typeNumberFloat
 *  Tests if type of given variable is a float number.   
 *  
 *  Syntax:
 *    bool *ng_typeNumberFloat* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is a float number
 */       
function ng_typeNumberFloat(n) { 
   return ((typeof n==='number')&&(!isNaN(n))&&(n%1!==0)); 
} 

/**
 *  Function: ng_typeDate
 *  Tests if type of given variable is a date object.   
 *  
 *  Syntax:
 *    bool *ng_typeDate* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is a date object
 */       
function ng_typeDate(d) { 
  return Object.prototype.toString.call(d) === '[object Date]';
}

/**
 *  Function: ng_typeObject
 *  Tests if type of given variable is a valid object.   
 *  
 *  Syntax:
 *    bool *ng_typeObject* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is a valid object
 */       
function ng_typeObject(o) {
  return ((typeof o==='object')&&(o!==null));
}

/**
 *  Function: ng_typeArray
 *  Tests if type of given variable is an indexed array.   
 *  
 *  Syntax:
 *    bool *ng_typeArray* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is an indexed array
 */       
function ng_typeArray(v) {
  return ng_IsArrayVar(v);
}

/** 
 *  Group: Value validation functions    
 */
 
/**
 *  Function: ng_isEmpty
 *  Tests if given variable is undefined.   
 *  
 *  Syntax:
 *    bool *ng_isEmpty* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is undefined
 */       
function ng_isEmpty(n)
{ 
  return (typeof n==='undefined');
} 

/**
 *  Function: ng_isNull
 *  Tests if given variable is Null.   
 *  
 *  Syntax:
 *    bool *ng_isNull* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is Null
 */       
function ng_isNull(n)
{ 
  return (n===null);
} 

/**
 *  Function: ng_isEmptyOrNull
 *  Tests if given variable is undefined or Null.   
 *  
 *  Syntax:
 *    bool *ng_isEmptyOrNull* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if type of variable is undefined or Null
 */       
function ng_isEmptyOrNull(n)
{ 
  return (ng_isEmpty(n) || ng_isNull(n));
} 

/**
 *  Function: ng_isInvalid
 *  Tests if given variable has invalid value according its type.   
 *  
 *  Syntax:
 *    bool *ng_isInvalid* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable has invalid value
 */       
function ng_isInvalid(n)
{
  return ((n===null)
        ||(typeof n === 'undefined')
        ||((typeof n === 'number')&&(isNaN(n)))
        ||((ng_typeDate(n))&&(isNaN(n.getTime())))); 
} 

/**
 *  Function: ng_isNumber
 *  Tests if given variable is, or can be lossless converted to, a number.    
 *  
 *  Syntax:
 *    bool *ng_isNumber* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be a number
 */       
function ng_isNumber(v) 
{
  v=ng_toNumber(v);
  return (!isNaN(v));
}

/**
 *  Function: ng_isInteger
 *  Tests if given variable is, or can be lossless converted to, an integer number.    
 *  
 *  Syntax:
 *    bool *ng_isInteger* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be an integer number
 */       
function ng_isInteger(v) 
{
  v=ng_toNumber(v);
  if(isNaN(v)) return false;
  return ng_typeNumberInt(v);
}

/**
 *  Function: ng_isFloat
 *  Tests if given variable is, or can be lossless converted to, a float number.    
 *  
 *  Syntax:
 *    bool *ng_isFloat* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be a float number
 */       
function ng_isFloat(v) 
{
  v=ng_toNumber(v);
  if(isNaN(v)) return false;
  return ng_typeNumberFloat(v);
}

/**
 *  Function: ng_isSByte
 *  Tests if given variable is, or can be lossless converted to, a signed byte.    
 *  
 *  Syntax:
 *    bool *ng_isSByte* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be a signed byte
 */       
function ng_isSByte(v) {
  var n=ng_toNumber(v);
  return (!isNaN(n) && ng_typeNumberInt(n) && !isNaN(ng_toSByte(v)));
} 

/**
 *  Function: ng_isByte
 *  Tests if given variable is, or can be lossless converted to, a byte.    
 *  
 *  Syntax:
 *    bool *ng_isByte* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be a byte
 */       
function ng_isByte(v) {
  var n=ng_toNumber(v);
  return (!isNaN(n) && ng_typeNumberInt(n) && !isNaN(ng_toByte(v)));
} 

/**
 *  Function: ng_isShort
 *  Tests if given variable is, or can be lossless converted to, a short.    
 *  
 *  Syntax:
 *    bool *ng_isShort* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be a short
 */       
function ng_isShort(v) {
  var n=ng_toNumber(v);
  return (!isNaN(n) && ng_typeNumberInt(n) && !isNaN(ng_toShort(v)));
} 

/**
 *  Function: ng_isUShort
 *  Tests if given variable is, or can be lossless converted to, a unsigned short.    
 *  
 *  Syntax:
 *    bool *ng_isUShort* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be a unsigned short
 */       
function ng_isUShort(v) {
  var n=ng_toNumber(v);
  return (!isNaN(n) && ng_typeNumberInt(n) && !isNaN(ng_toUShort(v)));
} 

/**
 *  Function: ng_isLong
 *  Tests if given variable is, or can be lossless converted to, a long.    
 *  
 *  Syntax:
 *    bool *ng_isLong* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be a long
 */       
function ng_isLong(v) {
  var n=ng_toNumber(v);
  return (!isNaN(n) && ng_typeNumberInt(n) && !isNaN(ng_toLong(v)));
} 

/**
 *  Function: ng_isULong
 *  Tests if given variable is, or can be lossless converted to, a unsigned long.    
 *  
 *  Syntax:
 *    bool *ng_isULong* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be a unsigned long
 */       
function ng_isULong(v) {
  var n=ng_toNumber(v);
  return (!isNaN(n) && ng_typeNumberInt(n) && !isNaN(ng_toULong(v)));
} 

/** 
 *  Function: ng_isDate
 *  Tests if given variable is, or can be lossless converted to, a date object.    
 *  
 *  Syntax:
 *    bool *ng_isDate* (mixed var [, string format])
 *  
 *  Parameters:
 *    var - variable to test
 *    format - optional date and time format string, use default if not specified     
 *  
 *  Returns:
 *    TRUE if variable can be date object
 */       
function ng_isDate(v,format) {
  return(ng_toDate(v,null,format)!==null);
}

/** 
 *  Function: ng_isNVARCHAR
 *  Tests if given variable is, or can be lossless converted to, a NVARCHAR.    
 *  
 *  Syntax:
 *    bool *ng_isNVARCHAR* (mixed var [, int size])
 *  
 *  Parameters:
 *    var - variable to test    
 *    size - optional size limit 
 *  
 *  Returns:
 *    TRUE if variable can be NVARCHAR
 */       
function ng_isNVARCHAR(v,size) {
  v=ng_toNVARCHAR(v,undefined,null);
  if(v===null) return false;
  if(!ng_isEmpty(size)) {
    size=ngVal(size,0);
    if(v.length>size) 
      return false;
  }
  return true;
}

/** 
 *  Function: ng_isDECIMAL
 *  Tests if given variable is, or can be lossless converted to, a DECIMAL.    
 *  
 *  Syntax:
 *    bool *ng_isDECIMAL* (mixed var, int digits, int frac_digits)
 *  
 *  Parameters:
 *    var - variable to test    
 *    digits - total number of digits 
 *    frac_digits - number of digits in fraction part of number  
 *  
 *  Returns:
 *    TRUE if variable can be DECIMAL
 */       
function ng_isDECIMAL(v, digits, frac_digits) {
  return(ng_toDECIMAL(v, digits, frac_digits,null)!==null);
}

/**
 *  Function: ng_isDateISO8601
 *  Tests if given variable is, or can be lossless converted from, date string in ISO 8601 format.    
 *  
 *  Syntax:
 *    bool *ng_isDateISO8601* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can be in ISO 8601 date format.
 */       
function ng_isDateISO8601(v) {
  return(ng_parseDateISO8601(v,null)!==null);
}

/**
 *  Function: ng_isSIUnits
 *  Tests if given variable is, or can be lossless converted from, string with SI units.    
 *  
 *  Syntax:
 *    bool *ng_isSIUnits* (mixed var, string units [, mixed allowedpref])
 *  
 *  Parameters:
 *    var - variable to test
 *    units - dimension units
 *    allowedpref - optional list of allowed SI prefixes       
 *  
 *  Returns:
 *    TRUE if variable can be a string with SI units
 */       
function ng_isSIUnits(v, units, allowedpref) {
  return(ng_parseSIUnits(v, units, null, allowedpref)!==null);
}

/**
 *  Function: ng_isDistance
 *  Tests if given variable represents, or can be lossless converted to, a distance.    
 *  
 *  Syntax:
 *    bool *ng_isDistance* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can represent a distance.
 */       
function ng_isDistance(v) {
  return(ng_parseDistance(v, null)!==null);
}

/**
 *  Function: ng_isArea
 *  Tests if given variable represents, or can be lossless converted to, an area.    
 *  
 *  Syntax:
 *    bool *ng_isArea* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can represent an area.
 */       
function ng_isArea(v) {
  return(ng_parseArea(v, null)!==null);
}

/**
 *  Function: ng_isSeconds
 *  Tests if given variable represents, or can be lossless converted to, seconds.    
 *  
 *  Syntax:
 *    bool *ng_isSeconds* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can represent seconds.
 */       
function ng_isSeconds(v) {
  return(ng_parseSeconds(v, null)!==null);
}

/**
 *  Function: ng_isMinutes
 *  Tests if given variable represents, or can be lossless converted to, minutes.    
 *  
 *  Syntax:
 *    bool *ng_isMinutes* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can represent minutes.
 */       
function ng_isMinutes(v) {
  return(ng_parseMinutes(v, null)!==null);
}

/**
 *  Function: ng_isHex
 *  Tests if given variable represents hexadecimal numbers.    
 *  
 *  Syntax:
 *    bool *ng_isHex* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if variable can represent hexadecimal numbers.
 */       
function ng_isHex(s) {
 return (/^([0-9]|A|B|C|D|E|F)+$/i).test(''+s);  
}

/**
 *  Function: ng_isDigits
 *  Tests if value of given variable contains only digits.    
 *  
 *  Syntax:
 *    bool *ng_isDigits* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if value of variable contains only digits
 */       
function ng_isDigits(s) {
 return /^[0-9]+$/.test(''+s);  
}

/**
 *  Function: ng_isEmail
 *  Tests if value of given variable is e-mail.    
 *  
 *  Syntax:
 *    bool *ng_isEmail* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if value is e-mail
 */       
function ng_isEmail(s)
{
  var regexp = "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
  return (new RegExp(regexp)).test((''+s).toLowerCase());
}

/**
 *  Function: ng_isURL
 *  Tests if value of given variable is URL.    
 *  
 *  Syntax:
 *    bool *ng_isURL* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if value is URL
 */       
function ng_isURL(s) {
  return ((''+s).toLowerCase().indexOf('://')>=0);
}

/**
 *  Function: ng_isWWW
 *  Tests if value of given variable is web address.    
 *  
 *  Syntax:
 *    bool *ng_isWWW* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if value is web address
 */       
function ng_isWWW(s)
{
  if(ng_isURL(s)) return true;
  s=(''+s).toLowerCase();
  if((s=='localhost')||(s=='127.0.0.1')) return true;
  var i=s.indexOf('.');
  if(i<1) return false;
  var j=s.lastIndexOf('.');
  if(j<0) return false;
  var s=s.substring(j+1,s.length);
  var tdns=['aero','asia','biz','cat','com','coop','gov','info','int','jobs','mobi','museum','name','net','org','pro','tel','travel','xxx'];    
  return ((s.length==2)||(ng_inArray(s,tdns)));
}

/**
 *  Function: ng_isIP4
 *  Tests if value of given variable is IP4 address.    
 *  
 *  Syntax:
 *    bool *ng_isIP4* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if value is IP4 address
 */       
function ng_isIP4(s) {
  return (/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i).test(''+s)
}

/**
 *  Function: ng_isIP6
 *  Tests if value of given variable is IP6 address.    
 *  
 *  Syntax:
 *    bool *ng_isIP6* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if value is IP6 address
 */       
function ng_isIP6(s)
{
  var regexp = "^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$";
  return (new RegExp(regexp)).test(s);
}

/**
 *  Function: ng_isUnicode
 *  Tests if value of given variable is unicode string.    
 *  
 *  Syntax:
 *    bool *ng_isUnicode* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if value is unicode string
 */       
function ng_isUnicode(s)
{
  var c;
  s=''+s;
  for(var i=0;i<s.length;s++) 
  { 
    c=s.charCodeAt(i);
    if(c>255) return true;
  }
  return false;    
}

/**
 *  Function: ng_isASCII
 *  Tests if value of given variable is ASCII string.    
 *  
 *  Syntax:
 *    bool *ng_isASCII* (mixed var)
 *  
 *  Parameters:
 *    var - variable to test    
 *  
 *  Returns:
 *    TRUE if value is a ASCII string
 */       
function ng_isASCII(s)
{
  var c;
  s=''+s;
  for(var i=0;i<s.length;s++) 
  { 
    c=s.charCodeAt(i);
    if(c>127) return false;
  }
  return true;    
}
 
/** 
 *  Group: Conversions functions    
 */
 
/**
 *  Function: ng_toBool
 *  Converts given variable to boolean.    
 *  
 *  Syntax:
 *    bool *ng_toBool* (mixed var)
 *  
 *  Parameters:
 *    var - variable to convert    
 *  
 *  Returns:
 *    Converted value.
 */       
function ng_toBool(v)
{
  if((ng_typeString(v))&&(v.length>0))
  {
    var c=v.toLowerCase();
    if((c=='0')||(c=='false')||(c=='f')||(c=='n')||(c=='no')||(c=='off')||(c=='disabled')) return false;
    return true;
  }  
  return !!v;
}

/**
 *  Function: ng_toString
 *  Converts given variable to string.    
 *  
 *  Syntax:
 *    mixed *ng_toBool* (mixed var [,mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toString(v,def)
{
  if(ng_isEmptyOrNull(v)) return ngVal(def,'');
  if(ng_typeDate(v))
  {
    return ng_FormatDateTime(v,undefined,ngVal(def,''));
  }
  if(ng_typeObject(v))
  {
    if(typeof v.FormatString === 'function') return v.FormatString(v,def);
    if((typeof JSON !== "undefined")&&(typeof JSON.stringify === "function"))
    {
      try {
        return JSON.stringify(v);
      }
      catch(e) { }
    }
    return ngVal(def,''); 
  }
  if(ng_isFloat(v))
  {
    return ((''+v).replace('.',ng_DecimalSeparator())); 
  }
  return ''+v;
}

/**
 *  Function: ng_toObject
 *  Converts given variable to object.    
 *  
 *  Syntax:
 *    mixed *ng_toObject* (mixed var [,mixed def=null])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toObject(v,def)
{
  if(ng_typeDate(v)) 
  {
    if(ng_isInvalid(v)) return ngVal(def,null);
    return {
      year:     v.getFullYear(),
      mon:      v.getMonth()+1,
      mday:     v.getDate(),
      hour:     v.getHours(),
      min:      v.getMinutes(),
      sec:      v.getSeconds(),
      ms:       v.getMilliseconds(),
      tzoffset: v.getTimezoneOffset()
    };
  }
  if(typeof v==='object') return v;
  if(ng_typeString(v))
  {
    if((typeof JSON !== "undefined")&&(typeof JSON.parse === "function"))
    {
      try {
        return window.JSON.parse(v);
      }
      catch(e) { }
    }
  }
  return ngVal(def,null);
}

/**
 *  Function: ng_toNumber
 *  Converts given variable to number.    
 *  
 *  Syntax:
 *    mixed *ng_toNumber* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toNumber(v,def) 
{
  if(ng_isEmptyOrNull(v)) return ngVal(def,NaN);
  if(ng_typeString(v)) 
  {
    v=(''+v).replace(ng_DecimalSeparator(), '.');
    if(v=='') return ngVal(def,NaN);
  } 
  v = (+v);
  return(isNaN(v) ? ngVal(def,NaN) : v);
} 

/**
 *  Function: ng_toSByte
 *  Converts given variable to signed byte.    
 *  
 *  Syntax:
 *    mixed *ng_toSByte* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toSByte(v,def)
{
  v=parseInt(v,10);
  return((isNaN(v))||(v<SBYTE_MIN)||(v>SBYTE_MAX) ? ngVal(def,NaN) : v);
}

/**
 *  Function: ng_toByte
 *  Converts given variable to byte.    
 *  
 *  Syntax:
 *    mixed *ng_toByte* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toByte(v,def)
{
  v=parseInt(v,10);
  return((isNaN(v))||(v<BYTE_MIN)||(v>BYTE_MAX) ? ngVal(def,NaN) : v);
}

/**
 *  Function: ng_toShort
 *  Converts given variable to short.    
 *  
 *  Syntax:
 *    mixed *ng_toShort* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toShort(v,def)
{
  v=parseInt(v,10);
  return((isNaN(v))||(v<SHORT_MIN)||(v>SHORT_MAX) ? ngVal(def,NaN) : v);
}

/**
 *  Function: ng_toUShort
 *  Converts given variable to unsigned short.    
 *  
 *  Syntax:
 *    mixed *ng_toUShort* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toUShort(v,def)
{
  v=parseInt(v,10);
  return((isNaN(v))||(v<USHORT_MIN)||(v>USHORT_MAX) ? ngVal(def,NaN) : v);
}

/**
 *  Function: ng_toLong
 *  Converts given variable to long.    
 *  
 *  Syntax:
 *    mixed *ng_toLong* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toLong(v,def)
{
  v=parseInt(v,10);
  return((isNaN(v))||(v<LONG_MIN)||(v>LONG_MAX) ? ngVal(def,NaN) : v);
}

/**
 *  Function: ng_toULong
 *  Converts given variable to unsigned long.    
 *  
 *  Syntax:
 *    mixed *ng_toULong* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toULong(v,def)
{
  v=parseInt(v,10);
  return((isNaN(v))||(v<ULONG_MIN)||(v>ULONG_MAX) ? ngVal(def,NaN) : v);
}

/**
 *  Function: ng_toInteger
 *  Converts given variable to integer number.    
 *  
 *  Syntax:
 *    mixed *ng_toInteger* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toInteger(v,def)
{
  v=parseInt(v,10);
  return(isNaN(v) ? ngVal(def,NaN) : v);
}

/**
 *  Function: ng_toFloat
 *  Converts given variable to float number.    
 *  
 *  Syntax:
 *    mixed *ng_toFloat* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toFloat(v,def)
{
  if(typeof v==='object') return ngVal(def,NaN);
  v=parseFloat((''+v).replace(ng_DecimalSeparator(), '.')); 
  return(isNaN(v) ? ngVal(def,NaN) : v);
}

/**
 *  Function: ng_toDate
 *  Converts given variable to date object.    
 *  
 *  Syntax:
 *    mixed *ng_toDate* (mixed var [,mixed def=null, format=undefined])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails
 *    format - optional parsing format       
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toDate(v,def,format)
{
  if(ng_isEmptyOrNull(v)) return ngVal(def,null); 
  if(ng_typeDate(v))
  {
    return (isNaN(v.getTime()) ? ngVal(def,null) : v);
  }  
  if(ng_typeString(v)) 
  {
    var d=ng_ParseDateTime(v, format, null);
    if((ng_isInvalid(d))&&(typeof format==='undefined')) 
    {
      d=ng_ParseDate(v, format, null);
      if(ng_isInvalid(d)) d=ng_ParseTime(v, format, null); 
    }
    return (ng_isInvalid(d) ? ngVal(def,null) : d); 
  }
  if(ng_typeObject(v)) 
  {
    var d=new Date(0);
    if(!ng_isInvalid(v.year))
    {
      var y=v.year+'';
      if (y.length < 4)
      {
        if(parseInt($y,10) > 70) y=''+(y-0+1900); 
        else                     y=''+(y-0+2000);
      } 
      d.setFullYear(y);
    }
    if(!ng_isInvalid(v.mon))  d.setMonth(v.mon-1);
    if(!ng_isInvalid(v.mday)) d.setDate(v.mday);
    if(!ng_isInvalid(v.hour)) d.setHours(v.hour);
    if(!ng_isInvalid(v.min))  d.setMinutes(v.min);
    if(!ng_isInvalid(v.sec))  d.setSeconds(v.sec);
    if(!ng_isInvalid(v.ms))   d.setMilliseconds(Number("0." + v.ms) * 1000);
    if(!ng_isInvalid(v.tzoffset))
    {
      var offset = (d.getTimezoneOffset()-v.tzoffset) * 60 * 1000;
      if(offset!=0) d.setTime(d.getTime()-offset);
    }

    return (ng_isInvalid(d) ? ngVal(def,null) : d);    
  }
  v=ng_fromUnixTimestamp(v);
  return (ng_isInvalid(v) ? ngVal(def,null) : v);    
}

/**
 *  Function: ng_toDateOnly
 *  Converts given variable to date object .    
 *  
 *  Syntax:
 *    mixed *ng_toDateOnly* (mixed var [,mixed def=null, format=undefined])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails
 *    format - optional parsing format       
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toDateOnly(v,def,format)
{
  var dt=ng_toDate(v,def,format);
  if((!ng_typeDate(dt))||(ng_isInvalid(dt))) return ngVal(def,null);
  return ng_ExtractDate(dt);
}

/**
 *  Function: ng_toNVARCHAR
 *  Converts given variable to NVARCHAR.    
 *  
 *  Syntax:
 *    mixed *ng_toNVARCHAR* (mixed var [, int size, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    size - optional size limit 
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toNVARCHAR(v,size,def)
{
  if((!ng_typeDate(v))&&(ng_typeObject(v))) return ngVal(def,'');
  v=ng_toString(v,null);
  if(ng_isInvalid(v)) return ngVal(def,'');
  v=ng_RTrim(v);
  if(typeof size==='undefined') return v;
  if(size<0) size=0;
  return v.substring(0,size); 
}

/**
 *  Function: ng_toDECIMAL
 *  Converts given variable to DECIMAL.    
 *  
 *  Syntax:
 *    mixed *ng_toDECIMAL* (mixed var, int digits, int frac_digits [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    digits - total number of digits 
 *    frac_digits - number of digits in fraction part of number  
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toDECIMAL(v, digits, frac_digits, def)
{
  function str_repeat(c,n)
  {
    var s='';
    for(var i=n;i>0;i--)
      s=s+c;
    return s;
  }
  
  if(frac_digits>0) digits++;
  
  var i;
  if(ng_typeString(v))
  {     
    v=ng_Trim(v.replace(ng_DecimalSeparator(), '.'));
    if(v!='')
    {
      var ov=v;
      var sgn=0;
      if(v.length>0)
      {
        if(v.charAt(0)=='+') sgn=1;
        else if(v.charAt(0)=='-') sgn=-1;
      }
      if(sgn) v=v.substr(1,v.length);
      var l=v.length;
      for(i=0;i<l;i++) // strip zeros
        if(v.charAt(i)!='0') break;
      v=v.substr(i,v.length);
      if((i==l)||(v.charAt(0)=='.')) v='0'+v; // add leading zero
  
      if(new RegExp("^-?(0|([1-9]\d*))(\.\d+)?$").test(v))
      {
        var i=v.indexOf('.');
        var l=v.length;
        if(i==l-1) { v=v.substr(0,l-1); i=-1; }
        if(i<0)
        { 
          if(frac_digits>0)
            v+='.'+str_repeat('0',frac_digits);
        }
        else
        {        
          var fd=l-(i+1);
          if(fd!=frac_digits)
          {
            if(fd<frac_digits) v+=str_repeat('0',frac_digits-fd);
            else
            {
              // round
              var n,r=0;
              for(var j=l-1;(j>i)&&(fd>=frac_digits);j--)
              {
                n=parseInt(v.charAt(j));
                if(r) 
                {
                  n++;
                  v=v.substr(0,j)+n+v.substr(j+1,v.length);
                }
                if(n<5) r=0;
                else r=1;
                fd--;
              }
              if(!frac_digits)
              {
                if((r)&&(i>0))
                {
                  n=parseInt(v.charAt(i-1));
                  n++;
                  v=v.substr(0,i-1)+n;
                }
                else v=v.substr(0,i);
              }
              else v=v.substr(0,i+1+frac_digits);
            }
          }
        }        
        if(v.length>digits) return ngVal(def,'');
        if(sgn<0) v='-'+v;
        return v;
      }
      v=ov;              
    }
  }

  v=ng_toNumber(v);
  if(isNaN(v)) return ngVal(def,'');
  v=''+v.toFixed(frac_digits);

  var sgn=0;
  if(v.length>0)
  {
    if(v.charAt(0)=='+') sgn=1;
    else if(v.charAt(0)=='-') sgn=-1;
  }
  if(sgn) v=v.substr(v,1,v.length);

  var i=v.indexOf('.');
  if(i<0) 
  {
    if(frac_digits>0)
      v=v+'.'+str_repeat('0',frac_digits);
  }
  else 
  {
    var l=v.length;
    var fd=l-(i+1);
    if(fd<frac_digits) v=v+str_repeat('0',frac_digits-fd);
  }
  if(v.length>digits) return ngVal(def,'');
  if(sgn<0) v='-'+v;
  return v;
}

/**
 *  Function: ng_toUTCDate
 *  Converts given variable to UTC date.    
 *  
 *  Syntax:
 *    mixed *ng_toUTCDate* (mixed var [,mixed def=null])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toUTCDate(d,def)
{
  d=ng_toDate(d);
  if(ng_isInvalid(d)) return ngVal(def, null);

  d=new Date(d.getTime()); 
  var offset = d.getTimezoneOffset() * 60 * 1000;
  d.setTime(d.getTime()+offset);
  return (ng_isInvalid(d) ? ngVal(def, null) : d);
}

/**
 *  Function: ng_fromUTCDate
 *  Converts given variable from UTC date.    
 *  
 *  Syntax:
 *    mixed *ng_fromUTCDate* (mixed var [,mixed def=null])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_fromUTCDate(d,def)
{
  d=ng_toDate(d);
  if(ng_isInvalid(d)) return ngVal(def, null);
  
  d=new Date(d.getTime()); 
  var offset = d.getTimezoneOffset() * 60 * 1000;
  d.setTime(d.getTime()-offset);
  return (ng_isInvalid(d) ? ngVal(def, null) : d);
}

/**
 *  Function: ng_toUnixTimestamp
 *  Converts given variable to UNIX timestamp.    
 *  
 *  Syntax:
 *    mixed *ng_toUnixTimestamp* (mixed var [,mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toUnixTimestamp(d,def)
{
  d=ng_toDate(d);
  if(ng_isInvalid(d)) return ngVal(def,NaN);
  return Math.round(d.getTime() / 1000);
}

/**
 *  Function: ng_fromUnixTimestamp
 *  Converts UNIX timestamp to date.    
 *  
 *  Syntax:
 *    mixed *ng_fromUnixTimestamp* (mixed var [,mixed def=null])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_fromUnixTimestamp(d,def)
{
  d=ng_toNumber(d);
  if(isNaN(d)) return ngVal(def,null);
  return new Date(d*1000);
}

/**
 *  Function: ng_formatDateISO8601
 *  Converts given variable to date string in ISO 8601 format.     
 *  
 *  Syntax:
 *    mixed *ng_formatDateISO8601* (mixed var [, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_formatDateISO8601(d,def) { 
  function LZ(x) { return(x<10 ? '0'+x : x); }
  d=ng_toDate(d);  
  if(ng_isInvalid(d)) return ngVal(def,'');
  return d.getUTCFullYear()+'-'
  + LZ(d.getUTCMonth()+1)+'-'
  + LZ(d.getUTCDate())+'T'
  + LZ(d.getUTCHours())+':'
  + LZ(d.getUTCMinutes())+':'
  + LZ(d.getUTCSeconds())+'Z';
} 

/**
 *  Function: ng_parseDateISO8601
 *  Converts given variable from date string in ISO 8601 format to date.     
 *  
 *  Syntax:
 *    mixed *ng_parseDateISO8601* (mixed var [, mixed def=null])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_parseDateISO8601(s,def) {
  s=''+s;
  var regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
      "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?" +
      "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
  var d = s.match(new RegExp(regexp));

  function SLZ(s)
  {
    s=''+s;
    for(var i=0;i<s.length;i++)
      if(s.charAt(i)!='0')
      {
        s=s.substring(i,s.length);
        break;
      }
    return s;
  }

  if(d===null) return ngVal(def,null);
  
  var offset = 0;
  var date = new Date(0, 0, 1);

  var y=parseInt(d[1],10);
  var m=parseInt(SLZ(d[3]),10);
  var day=parseInt(SLZ(d[5]),10);
  
  if((isNaN(y))||(isNaN(m))||(isNaN(day))||(y<1000)||(m<1)||(m>12)||(day<1)||(day>ng_DaysInMonth(m,y)))
    return ngVal(def,null);
    
  date.setFullYear(y);
  date.setMonth(m - 1);   
  date.setDate(day);
  
  var hh=parseInt(SLZ(d[7]),10); 
  var mm=parseInt(SLZ(d[8]),10); 
  var ss=parseInt(SLZ(d[10]),10); 
  var uu=parseInt(SLZ(d[12]),10);

  if((!isNaN(hh))||(!isNaN(mm))||(!isNaN(ss))||(!isNaN(uu))||(d[14]))
  {
    if(isNaN(hh)) hh=0;
    else if((hh<0)||(hh>23)) return ngVal(def,null);
    if(isNaN(mm)) mm=0;
    else if((mm<0)||(mm>59)) return ngVal(def,null);
    if(isNaN(ss)) ss=0;
    else if((ss<0)||(ss>59)) return ngVal(def,null);
    
    date.setHours(hh); 
    date.setMinutes(mm); 
    date.setSeconds(ss); 
    if(!isNaN(uu)) date.setMilliseconds(ng_toNumber("0." + d[12]) * 1000); 
    if (d[14]) {
        offset = (ng_toNumber(d[16]) * 60) + ng_toNumber(d[17]);
        offset *= ((d[15] == '-') ? 1 : -1);
    }  
  }
  offset -= date.getTimezoneOffset();
  date.setTime(Number(Number(date) + (offset * 60 * 1000)));
  return date;
}

/**
 *  Function: ng_parseSIUnits
 *  Converts given variable from string with SI units to number.    
 *  
 *  Syntax:
 *    mixed *ng_parseSIUnits* (mixed var, string units [, mixed def=NaN, mixed allowedpref, bool binary=false])
 *  
 *  Parameters:
 *    var - variable to convert
 *    units - dimension units
 *    def - default value, used if conversion fails      
 *    allowedpref - optional list of allowed SI prefixes
 *    binary - if TRUE, use binary exponents        
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_parseSIUnits(v, units, def, allowedpref, binary)
{
  if(ng_typeNumber(v)) return v;
  var un=ng_decodeSIUnits(units);
  var u=ng_getSIUnits(v,units,null);
  if(u===null) 
  {
    v=ng_toNumber(v);
    return (isNaN(v) ? ngVal(def,NaN) : v); 
  }
  if(ng_typeString(allowedpref))
  {
    var a=[];
    a.push(allowedpref);
    allowedpref=a;
  }
  if((u.prefix!='')&&(allowedpref)&&(!ng_inArray(u.prefix,allowedpref)))
    return ngVal(def,NaN);
  v=ng_StripSIUnits(v,u.prefix+units);
  v=ng_toNumber(v);
  if(isNaN(v)) return ngVal(def,NaN);
  if(binary) {
    if((un.exp!=1)||(u.binex==0)) return ngVal(def,NaN);
    v*=u.binex;
  }
  else v*=Math.pow(u.ex,un.exp);   
  return (isNaN(v) ? ngVal(def,NaN) : v); 
}

/**
 *  Function: ng_formatSIUnits
 *  Converts given variable to string followed by SI units.    
 *  
 *  Syntax:
 *    mixed *ng_formatSIUnits* (mixed var, string units [, mixed def='', mixed allowedpref, int precision, function formatfnc, mixed userdata, bool binary=false])
 *  
 *  Parameters:
 *    var - variable to convert
 *    units - dimension units
 *    def - default value, used if conversion fails      
 *    allowedpref - optional list of allowed SI prefixes
 *    precision - optional required output number precision
 *    formatfnc - optional formating function callback
 *    userdata - user data passed to formating function           
 *    binary - if TRUE, use binary exponents        
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 *    
 *  Callback:
 *    mixed function (number var,object si_def, string units, mixed def, array allowedpref, mixed userdata)
 *    
 *    Returns formated value.       
 */       
function ng_formatSIUnits(v, units, def, allowedpref, precision, formatfnc, userdata, binary)
{
  if(ng_typeString(v)) 
  {
    var s=ng_parseSIUnits(v, units);
    if(!isNaN(s)) v=s;
  }
  v=ng_toNumber(v);
  if(isNaN(v)) return ngVal(def,'');

  if(ng_typeString(allowedpref)) 
  {
    var a=[];
    a.push(allowedpref);
    allowedpref=a;
  }
  var u,fu=null;
  var mul=1,fmul=1;
  var un=ng_decodeSIUnits(units);
  if((binary)&&(un.exp!=1)) return ngVal(def,'');
  for(var i=ng_SIUnits.length-2;i>=0;i--)
  {
    if(binary)
    {
      if(ng_SIUnits[i].binex==0) continue;
      else mul=ng_SIUnits[i].binex;
    }
    else mul=Math.pow(ng_SIUnits[i].ex,un.exp);
    if((v>=mul)&&(((allowedpref)&&((ng_SIUnits[i].prefix=='')||(ng_inArray(ng_SIUnits[i].prefix,allowedpref))))||((!allowedpref)&&(!ng_SIUnits[i].notcommon))))
    {
      fu=ng_SIUnits[i];
      fmul=mul;
    }
  }
  if(!ng_typeObject(fu)) return ng_toString(v)+' '+units;
  v/=fmul;
  if(isNaN(v)) return ngVal(def,'');
  if(typeof formatfnc==='function') return formatfnc(v,fu,units,def,allowedpref, userdata);
  if(typeof precision!=='undefined') return ng_toString(ng_toFloat(v.toFixed(precision)))+' '+fu.prefix+units; 
  return ng_toString(v)+' '+fu.prefix+units;  
}

/**
 *  Function: ng_parseBytes
 *  Converts given variable from bytes with units to number.     
 *  
 *  Syntax:
 *    mixed *ng_parseBytes* (mixed var [, mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_parseBytes(v, def) {
  return ng_parseSIUnits(ng_Unformat3Num(v), 'B', def, false, true);
}

/**
 *  Function: ng_formatBytes
 *  Converts given variable to distance with units.     
 *  
 *  Syntax:
 *    mixed *ng_formatBytes* (mixed var [, mixed def='', int precision, function formatfnc, mixed userdata])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *    precision - optional required output number precision
 *    formatfnc - optional formating function callback
 *    userdata - user data passed to formating function           
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 *    
 *  Callback:
 *    mixed function (number var,object si_def, string units, mixed def, array allowedpref, mixed userdata)
 *    
 *    Returns formated value.       
 */       
function ng_formatBytes(v, def, precision, formatfnc, userdata) {
  return ng_Format3Num(ng_formatSIUnits(v, 'B', def, false, precision,formatfnc, userdata, true));
}

/**
 *  Function: ng_parseDistance
 *  Converts given variable from distance with units to number.     
 *  
 *  Syntax:
 *    mixed *ng_parseDistance* (mixed var [, mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_parseDistance(v, def) {
  return ng_parseSIUnits(ng_Unformat3Num(v), 'm', def, ['m','c','d','k']);
}

/**
 *  Function: ng_formatDistance
 *  Converts given variable to distance with units.     
 *  
 *  Syntax:
 *    mixed *ng_formatDistance* (mixed var [, mixed def='', int precision, function formatfnc, mixed userdata])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *    precision - optional required output number precision
 *    formatfnc - optional formating function callback
 *    userdata - user data passed to formating function           
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 *    
 *  Callback:
 *    mixed function (number var,object si_def, string units, mixed def, array allowedpref, mixed userdata)
 *    
 *    Returns formated value.       
 */       
function ng_formatDistance(v, def, precision, formatfnc, userdata) {
  precision=ngVal(precision,2);
  return ng_Format3Num(ng_formatSIUnits(v, 'm', def, ['m','c','k'], precision, formatfnc, userdata));
}

/**
 *  Function: ng_parseArea
 *  Converts given variable from area with units to number.     
 *  
 *  Syntax:
 *    mixed *ng_parseArea* (mixed var [, mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_parseArea(v, def) {
  return ng_parseSIUnits(ng_Unformat3Num(v), 'm²', def, ['m','c','d','k']);
}

/**
 *  Function: ng_formatArea
 *  Converts given variable to area with units.     
 *  
 *  Syntax:
 *    mixed *ng_formatArea* (mixed var [, mixed def='', int precision, function formatfnc, mixed userdata])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *    precision - optional required output number precision
 *    formatfnc - optional formating function callback
 *    userdata - user data passed to formating function           
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 *    
 *  Callback:
 *    mixed function (number var,object si_def, string units, mixed def, array allowedpref, mixed userdata)
 *    
 *    Returns formated value.       
 */       
function ng_formatArea(v, def, precision, formatfnc, userdata) {
  precision=ngVal(precision,2);
  return ng_Format3Num(ng_formatSIUnits(v, 'm²', def, ['m','c','k'], precision, formatfnc, userdata));
}

/**
 *  Function: ng_parseSeconds
 *  Converts given variable from string time to number of seconds.    
 *  
 *  Syntax:
 *    mixed *ng_parseSeconds* (mixed var [, mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_parseSeconds(v,def)
{
  var hms=ng_parseHMS(v);
  if(hms===null) return ngVal(def,NaN);
  var s=0;
  var j=0;
  for(var i=hms.length-1;i>=0;i--)
  {
    switch(j++)
    {
      case 0: s+=hms[i]; break;
      case 1: s+=hms[i]*60; break;
      case 2: s+=hms[i]*3600; break;
    }
  }
  if(ng_isInvalid(s)) return ngVal(def,NaN);
  return s;
}

/**
 *  Function: ng_formatSeconds
 *  Converts given variable from number of seconds to string time.    
 *  
 *  Syntax:
 *    mixed *ng_formatSeconds* (mixed var [, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_formatSeconds(v,def,ms)
{
  if(!ng_isNumber(v)) return ngVal(def,'');
  var h=Math.floor(v/3600);
  v-=h*3600;
  var m=Math.floor(v/60);
  v-=m*60;
  var s=Math.floor(v);
  v-=s;
  if((ng_isInvalid(h))||(ng_isInvalid(m))||(ng_isInvalid(s)))  return ngVal(def,'');
  return ng_sprintf('%02d:%02d:%02d',h,m,s)+(v>0 && !ng_isInvalid(v) && ms ? (''+ng_toFloat(v.toFixed(3))).substr(1,4) : '');
}
  
/**
 *  Function: ng_parseMinutes
 *  Converts given variable from string time to number of minutes.    
 *  
 *  Syntax:
 *    mixed *ng_parseMinutes* (mixed var [, mixed def=NaN])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_parseMinutes(v,def)
{
  var hms=ng_parseHMS(v);
  if(hms===null) return ngVal(def,NaN);
  var s=0;
  var j=(hms.length==3 ? -1 : 0);
  for(var i=hms.length-1;i>=0;i--)
  {
    switch(j++)
    {
      case -1: s+=hms[i]/60; break;
      case  0: s+=hms[i]; break;
      case  1: s+=hms[i]*60; break;
    }    
  }
  if(ng_isInvalid(s)) return ngVal(def,NaN);
  return s;
}

/**
 *  Function: ng_formatMinutes
 *  Converts given variable from number of minutes to string time.    
 *  
 *  Syntax:
 *    mixed *ng_formatMinutes* (mixed var [, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_formatMinutes(v,def,ms)
{
  if(!ng_isNumber(v)) return ngVal(def,'');
  var m=Math.floor(v/60);
  v-=m*60;
  var s=Math.floor(v);
  v-=s;
  if((ng_isInvalid(m))||(ng_isInvalid(s)))  return ngVal(def,'');
  return ng_sprintf('%02d:%02d',m,s)+(v>0 && !ng_isInvalid(v) && ms ? (''+ng_toFloat(v.toFixed(3))).substr(1,4) : '');
}
  
/**
 *  Function: ng_formatWWW
 *  Converts given variable to web address.    
 *  
 *  Syntax:
 *    mixed *ng_formatWWW* (mixed var [, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_formatWWW(s,def)
{
  if(!ng_isWWW(s)) return ngVal(def,'');
  return (ng_isURL(s) ? s : 'http://'+s);
}

/**
 *  Function: ng_toASCII
 *  Converts given variable to ASCII string.    
 *  
 *  Syntax:
 *    mixed *ng_toASCII* (mixed var [, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toASCII(s,def) {
  return(ng_isASCII(s) ? s : ngVal(def,''));
}

/**
 *  Function: ng_toNonUnicode
 *  Converts given variable to non-unicode string.    
 *  
 *  Syntax:
 *    mixed *ng_toNonUnicode* (mixed var [, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toNonUnicode(s,def) {
  return(!ng_isUnicode(s) ? s : ngVal(def,''));
}

/**
 *  Function: ng_toHex
 *  Converts given variable to hexadecimal.    
 *  
 *  Syntax:
 *    mixed *ng_toHex* (mixed var [, int padding, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    padding - size of 0 padding 
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_toHex(v,p,def)
{
  p=ng_toNumber(p);
  if(ng_typeString(v))
  {
    var c,s='';
    if((isNaN(p))||(p>=4)) p=4;
    else p=2;
    for(var i=0;i<v.length;i++)
    {
      c=v.charCodeAt(i);
      if((c>255)&&(p==2)) c=255;
      s+=(0x10000+c).toString(16).substr(-p).toUpperCase();
    }
    return s;
  }
  v=ng_toNumber(v);
  if(isNaN(v)) return ngVal(def,'');

  v=v.toString(16).toUpperCase();
  if((isNaN(p))||(p<1)) p=1;
  while(v.length < p) v='0'+v; 
  return v;
}

/**
 *  Function: ng_Hex2Str
 *  Decodes hexadecimal encoded string.    
 *  
 *  Syntax:
 *    mixed *ng_Hex2Str* (mixed var [, int padding, mixed def=''])
 *  
 *  Parameters:
 *    var - variable to convert
 *    padding - size of 0 padding 
 *    def - default value, used if conversion fails      
 *  
 *  Returns:
 *    Converted value or default value if conversion fails.
 */       
function ng_Hex2Str(v,p,def)
{
  v=''+v;
  p=ng_toNumber(p);
  if((isNaN(p))||(p>=4)) p=4;
  else p=2;
  var l=v.length/p;
  var s='';
  var c;
  for(var i=0;i<l;i++)
  {
    c=parseInt(v.substr(i*p,p), 16);
    if(isNaN(c)) return ngVal(def,'');
    s+=String.fromCharCode(c); 
  }
  return s;
} 

/** 
 *  Group: Array functions    
 */
 
/**
 *  Function: ng_idxInArray
 *  Finds given value in indexed array.   
 *  
 *  Syntax:
 *    int *ng_idxInArray* (mixed value, array arr [, int fromidx=0, int toidx=arr.length, function cmpfnc, mixed userdata])
 *  
 *  Parameters:
 *    value - value to find  
 *    arr - array to scan 
 *    fromidx - start scan array from this index
 *    toidx - end scan array if reached to this index 
 *    cmdfnc - compare function callback
 *    userdata - user data passed to compare function           
 *  
 *  Returns:
 *    Index of value in array of -1 if value not found.
 *    
 *  Callback:
 *    bool function (v1,v2,userdata)
 *    
 *    Returns true if v1 is equal to v2.       
 */       
function ng_idxInArray(value, arr, fromidx, toidx, cmpfnc, userdata)
{
  if(typeof cmpfnc!=='function') cmpfnc=function(a,b) { return a===b; }
  var t=ngVal(toidx,arr.length);
  if(t>arr.length) t=arr.length;
  for(var i=ngVal(fromidx,0);i<t;i++) 
    if(cmpfnc(arr[i],value,userdata)) return i; 
  return -1; 
} 

/**
 *  Function: ng_inArray
 *  Tests if given value is in indexed array.   
 *  
 *  Syntax:
 *    int *ng_inArray* (mixed value, array arr [, int fromidx=0, int toidx=arr.length, function cmpfnc, mixed userdata])
 *  
 *  Parameters:
 *    value - value to find  
 *    arr - array to scan 
 *    fromidx - start scan array from this index
 *    toidx - end scan array if reached to this index 
 *    cmdfnc - compare function callback
 *    userdata - user data passed to compare function           
 *  
 *  Returns:
 *    TRUE if value is present in array.
 *    
 *  Callback:
 *    bool function (v1,v2,userdata)
 *    
 *    Returns true if v1 is equal to v2.       
 */       
function ng_inArray(value, arr, fromidx, toidx,cmpfnc,userdata) {
  return (ng_idxInArray(value, arr, fromidx, toidx, cmpfnc,userdata)>=0);
}

/** 
 *  Group: DateTime functions    
 */
 
/**
 *  Function: ng_DefaultDateFormat
 *  Gets default date format according to selected language.  
 *  
 *  Syntax:
 *    string *ng_DefaultDateFormat* (bool parse [, bool shortfmt=false])
 *  
 *  Parameters: 
 *    parse - if TRUE, return date and time format for parsing purposes.
 *    shortfmt - if TRUE,  return date and time short format    
 *     
 *  Returns:
 *    Default date format.
 *     
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_DefaultDateFormat(parse,shortfmt)
{
  var s=ngTypesTxt('date_'+(shortfmt ? 'short' : '')+'format'+(parse ? '_parse' : ''),'');
  if(s=='') s=ngTypesTxt('date_'+(shortfmt ? 'short' : '')+'format','');
  if((s=='')&&(shortfmt)) return ng_DefaultDateFormat(parse,false);
  return s;
}

/**
 *  Function: ng_DefaultTimeFormat
 *  Gets default time format according to selected language.  
 *  
 *  Syntax:
 *    string *ng_DefaultTimeFormat* (bool parse [, bool shortfmt=false])
 *  
 *  Parameters: 
 *    parse - if TRUE, return date and time format for parsing purposes.
 *    shortfmt - if TRUE,  return date and time short format    
 *        
 *  Returns:
 *    Default time format.
 *     
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_DefaultTimeFormat(parse,shortfmt)
{
  var s=ngTypesTxt('time_'+(shortfmt ? 'short' : '')+'format'+(parse ? '_parse' : ''),'');
  if(s=='') s=ngTypesTxt('time_'+(shortfmt ? 'short' : '')+'format','');
  if((s=='')&&(shortfmt)) return ng_DefaultTimeFormat(parse,false);
  return s;
}

/**
 *  Function: ng_DefaultDateTimeFormat
 *  Gets default date and time format according to selected language.  
 *  
 *  Syntax:
 *    string *ng_DefaultDateTimeFormat* (bool parse [, bool shortfmt=false])
 *    
 *  Parameters:
 *    parse - if TRUE, return date and time format for parsing purposes.
 *    shortfmt - if TRUE,  return date and time short format    
 *  
 *  Returns:
 *    Default date and time format.
 *     
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_DefaultDateTimeFormat(parse,shortfmt)
{
  var s=ngTypesTxt('datetime_'+(shortfmt ? 'short' : '')+'format'+(parse ? '_parse' : ''),'');
  if(s=='') s=ngTypesTxt('datetime_'+(shortfmt ? 'short' : '')+'format','');
  if((s=='')&&(shortfmt)) return ng_DefaultDateTimeFormat(parse,false);
  return s;
}

/**
 *  Variable: ng_DateFormat
 *  Gets default date format function.
 *  
 *  Default value: <ng_DefaultDateFormat>   
 */
var ng_DateFormat     = ng_DefaultDateFormat;
/**
 *  Variable: ng_TimeFormat
 *  Gets default time format function.
 *  
 *  Default value: <ng_DefaultTimeFormat>   
 */
var ng_TimeFormat     = ng_DefaultTimeFormat;
/**
 *  Variable: ng_DateTimeFormat
 *  Gets default date and time format function.
 *  
 *  Default value: <ng_DefaultDateTimeFormat>   
 */
var ng_DateTimeFormat = ng_DefaultDateTimeFormat;


/**
 *  Function: ng_ExtractDate
 *  Extracts date part from datetime variable.   
 *  
 *  Syntax:
 *    date *ng_ExtractDate* (date d)
 *  
 *  Parameters:
 *    -    
 *  
 *  Returns:
 *    Date without time part.
 */       
function ng_ExtractDate(dt)
{
  if(!ng_typeDate(dt)) return;
  return new Date(dt.getFullYear(),dt.getMonth(),dt.getDate());
} 

/**
 *  Function: ng_LeapYear
 *  Detects if year is a leap year.   
 *  
 *  Syntax:
 *    bool *ng_LeapYear* (int year)
 *  
 *  Parameters:
 *    -    
 *  
 *  Returns:
 *    TRUE if year is a leap year.
 */       
function ng_LeapYear(y)
{
  return (((y%4 == 0)&&(y%100 != 0))||(y%400 == 0)); 
}

/**
 *  Function: ng_DaysInMonth
 *  Determines number of days in month.   
 *  
 *  Syntax:
 *    bool *ng_LeapYear* (int month[, int year])
 *  
 *  Parameters:
 *    -    
 *  
 *  Returns:
 *    Number of days.
 */       
function ng_DaysInMonth(m,y)
{
  switch (m)
  {
  /*	The February case, check for leap year */
    case 2:
      if(typeof y === 'undefined') y=new Date().getFullYear();
      return (ng_LeapYear(y) ? 29 : 28);
  /* Months with 31 days */
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    default:
      return 30;
  }
}

// Field        | Full Form          | Short Form
// -------------+--------------------+-----------------------
// Year         | yyyy (4 digits)    | yy (2 digits), y (2 or 4 digits)
// Month        | MMM (name or abbr.)| MM (2 digits), M (1 or 2 digits)
//              | NNN (abbr.)        |
// Day of Month | dd (2 digits)      | d (1 or 2 digits)
// Day of Week  | EE (name)          | E (abbr)
// Hour (1-12)  | hh (2 digits)      | h (1 or 2 digits)
// Hour (0-23)  | HH (2 digits)      | H (1 or 2 digits)
// Hour (0-11)  | KK (2 digits)      | K (1 or 2 digits)
// Hour (1-24)  | kk (2 digits)      | k (1 or 2 digits)
// Minute       | mm (2 digits)      | m (1 or 2 digits)
// Second       | ss (2 digits)      | s (1 or 2 digits)
// Microsecond  | u                  | 
// AM/PM        | a                  |

/**
 *  Function: ng_FormatTime
 *  Formats time to string.   
 *  
 *  Syntax:
 *    string *ng_FormatTime* (date d [, string format, mixed def])
 *  
 *  Parameters:
 *    -    
 *  
 *  Returns:
 *    Formated time.
 *     
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_FormatTime(date, format, def) 
{
  if((typeof format==='undefined')||(format=='')) format=ng_TimeFormat(false);
  return ng_FormatDateTime(date, format, def);
}

/**
 *  Function: ng_FormatDate
 *  Formats date to string.   
 *  
 *  Syntax:
 *    string *ng_FormatDate* (date d [, string format, mixed def])
 *  
 *  Parameters:
 *    d - date
 *    format - format string
 *    def - returned value if d is not date      
 *    
 *  Returns:
 *    Formated date.
 *     
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_FormatDate(date, format, def) 
{
  if((typeof format==='undefined')||(format=='')) format=ng_DateFormat(false);
  return ng_FormatDateTime(date, format, def);
}
/**
 *  Function: ng_FormatDateTime
 *  Formats date and time to string.   
 *  
 *  Syntax:
 *    string *ng_FormatDateTime* (date d [, string format, mixed def])
 *  
 *  Parameters:
 *    d - date
 *    format - format string
 *    def - returned value if d is not date      
 *
 *  Format strings:
 *   yyyy - year (4 digits)
 *   yy - year (2 digits)
 *   y - year (2 or 4 digits)
 *   MM - month (2 digits)
 *   M - month (1 or 2 digits)  
 *   MMM - full name of month
 *   NNN - short name of month
 *   d - day of month (1 or 2 digits)
 *   dd - day of month (2 digits)
 *   E - short name of day of week       
 *   EE - full name of day of week   
 *   HH - hour 0-23 (2 digits)
 *   H - hour 0-23 (1 or 2 digits)
 *   hh - hour 1-12 (2 digits)
 *   h - hour 1-12 (1 or 2 digits)
 *   kk - hour 1-24 (2 digits)
 *   k - hour 1-24 (1 or 2 digits)
 *   KK - hour 0-11 (2 digits)
 *   K - hour 0-11 (1 or 2 digits)
 *   mm - minute (2 digits)
 *   m - minute (1 or 2 digits)
 *   ss - second (2 digits)
 *   s - second (1 or 2 digits)
 *   u - microsecond   
 *   a - AM/PM      
 *  
 *  Returns:
 *    Formated date and time.
 */       
function ng_FormatDateTime(date, format,def) 
{
  date=ng_toDate(date);
  if(date===null) return ngVal(def,'');

  if(ng_IsArrayVar(format))
  {
    if(!format.length) format='';
    else format=format[0];
  }

  var y=date.getFullYear();
  var M=date.getMonth()+1;
  var d=date.getDate();
  var E=date.getDay();
  var H=date.getHours();
  var m=date.getMinutes();
  var s=date.getSeconds();
  var u=date.getMilliseconds();

  if((typeof format==='undefined')||(format=='')) format=ng_DateTimeFormat(false);
  format+='';
  var h=H;
  if(H>12) h=H-12;
  else if(!H) h=12;	
  var K=(H>11 ? H-12 : H);

  function LZ(x) { return(x<10 ? '0'+x : x); }  
  
  var res='';
  var token,c,i=0;
  while(i < format.length) 
  {
    c=format.charAt(i);
    token='';
    while ((format.charAt(i)==c) && (i < format.length)) 
      token += format.charAt(i++);

    switch(token)
    {
      case 'y': 
      case 'yyyy': res+=y; break;
      case 'yy': 	 res+=(''+y).substring(2,4); break;
      case 'M':    res+=M; break;
      case 'MM':   res+=LZ(M); break;
      case 'MMM':  res+=ngTypesTxt('calendar_months')[M-1]; break;
      case 'NNN':  res+=ngTypesTxt('calendar_months_short')[M-1]; break;
      case 'd':    res+=d; break;
      case 'dd':   res+=LZ(d); break;
      case 'E':    res+=ngTypesTxt('calendar_days_short')[E]; break;
      case 'EE':   res+=ngTypesTxt('calendar_days')[E]; break;
      case 'H':    res+=H; break;
      case 'HH':   res+=LZ(H); break;
      case 'h':    res+=h; break;
      case 'hh':   res+=LZ(h); break;
      case 'K':    res+=K; break;
      case 'k':    res+=H+1; break;
      case 'KK':   res+=LZ(K); break;
      case 'kk':   res+=LZ(H+1); break;
      case 'm':    res+=m; break; 
      case 'mm':   res+=LZ(m); break;
      case 's':    res+=s; break;
      case 'ss':   res+=LZ(s); break;
      case 'a':    res+=(H>11 ? 'PM' : 'AM'); break;
      case 'u':    res+=u; break;
      default:     res+=token; break;
    }		
  }
  return res;
}

/**
 *  Function: ng_ParseTime
 *  Parses time from string.   
 *  
 *  Syntax:
 *    date *ng_ParseTime* (string s [, string format, mixed def])
 *  
 *  Parameters:
 *    s - string to be parsed
 *    format - format string
 *    def - returned value if d is not time      
 *  
 *  Returns:
 *    Parsed time.
 *    
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_ParseTime(date, format,def) 
{
  if((typeof format==='undefined')||(format=='')) format=ng_TimeFormat(true);
  return ng_ParseDateTime(date, format,def);
}

/**
 *  Function: ng_ParseDate
 *  Parses date from string.   
 *  
 *  Syntax:
 *    date *ng_ParseDate* (string s [, string format, mixed def])
 *  
 *  Parameters:
 *    s - string to be parsed
 *    format - format string
 *    def - returned value if d is not date      
 *  
 *  Returns:
 *    Parsed date.
 *     
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_ParseDate(date, format, def) 
{
  if((typeof format==='undefined')||(format=='')) format=ng_DateFormat(true);
  var d=ng_ParseDateTime(date, format);
  if(ng_isInvalid(d)) return def;
  d=ng_ExtractDate(d);
  if(ng_isInvalid(d)) return def;
  return d;
}

/**
 *  Function: ng_ParseDateTime
 *  Parses date and time from string.   
 *  
 *  Syntax:
 *    date *ng_ParseDateTime* (string s [, string format, mixed def])
 *  
 *  Parameters:
 *    s - string to be parsed
 *    format - format string
 *    def - returned value if d is not datetime      
 *  
 *  Returns:
 *    Parsed date and time.
 *     
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_ParseDateTime(val, format, def) 
{
  if((typeof format==='undefined')||(format=='')) format=ng_DateTimeFormat(true);
  
  if(ng_IsArrayVar(format))
  {
    for(var i=0;i<format.length;i++)
    {
      var d=ng_ParseDateTime(val,format[i],null);
      if((d!==null)&&(ng_typeDate(d))) return d;      
    }
    return def;
  }
  
  val+='';
  format+='';
  var token2="";
  var c,x,y,token;

  var now=new Date();
  var year=now.getFullYear(),month,date,hh=0,mm=0,ss=0,uu=0;
  var ampm="",names,name;

  function getInt(str,i,minlength,maxlength) 
  {
    var token,i;
    for(var x=maxlength; x>=minlength; x--) 
    {
      token=str.substring(i,i+x);
      if(token.length < minlength) return null;
      if(ng_isDigits(token)) return token; 
    }
    return null;
  }

  var i_val=0;
  var i_format=0;
  while (i_format < format.length) 
  {		
    c=format.charAt(i_format);
    token="";
    while ((format.charAt(i_format)==c) && (i_format < format.length)) 
      token += format.charAt(i_format++);
      
    switch(token)
    {
      case 'yyyy':
      case 'yy':
      case 'y':
        if (token=='yyyy') { x=4;y=4; }
        if (token=='yy')   { x=2;y=2; }
        if (token=='y')    { x=2;y=4; }
        year=getInt(val,i_val,x,y);
        if(year==null) return def; 
        i_val += year.length;
        if(year.length==2) 
        {
          if(year > 70) year=1900+(year-0); 
          else          year=2000+(year-0); 
        }
        break;
      case 'MMM':
      case 'NNN':
        month=0;
        if(token=='MMM') names=ngTypesTxt('calendar_months');
        else             names=ngTypesTxt('calendar_months_short');

        for(var i=0; i<names.length; i++) 
        {
          name=names[i];
          if (val.substring(i_val,i_val+name.length).toLowerCase()==name.toLowerCase()) 
          {
            month=i+1;
            i_val += name.length;
            break;
           }
        }
        if ((month < 1)||(month>12)) return def;
        break;
      case 'EE':
      case 'E':
        if(token=='E') names=ngTypesTxt('calendar_days_short');
        else           names=ngTypesTxt('calendar_days');
        for(var i=0; i<names.length; i++) 
        {
          name=names[i];
          if(val.substring(i_val,i_val+name.length).toLowerCase()==name.toLowerCase()) 
          {
            i_val += name.length;
            break;
          }  				
        }
        break;
      case 'MM':
      case 'M':
        month=getInt(val,i_val,token.length,2);
        if((month==null)||(month<1)||(month>12)) return def;
        i_val+=month.length;
        break;
      case 'dd':
      case 'd':
         date=getInt(val,i_val,token.length,2);
        if((date==null)||(date<1)||(date>31)) return def;
        i_val+=date.length;
        break;
      case 'hh':
      case 'h':
        hh=getInt(val,i_val,token.length,2);
        if((hh==null)||(hh<1)||(hh>12)) return def;
        i_val+=hh.length;
        break;
      case 'HH':
      case 'H':
        hh=getInt(val,i_val,token.length,2);
        if((hh==null)||(hh<0)||(hh>23)) return def;
        i_val+=hh.length;
        break;
      case 'KK':
      case 'K':
        hh=getInt(val,i_val,token.length,2);
        if((hh==null)||(hh<0)||(hh>11)) return def;
        i_val+=hh.length;
        break;
      case 'kk':
      case 'k':
        hh=getInt(val,i_val,token.length,2);
        if((hh==null)||(hh<1)||(hh>24)) return def;
        i_val+=hh.length; hh--;
        break;
      case 'mm':
      case 'm':
        mm=getInt(val,i_val,token.length,2);
        if((mm==null)||(mm<0)||(mm>59)) return def;
        i_val+=mm.length;
        break;
      case 'ss':
      case 's':
        ss=getInt(val,i_val,token.length,2);
        if((ss==null)||(ss<0)||(ss>59)) return def;
        i_val+=ss.length;
        break;
      case 'a':
        if(val.substring(i_val,i_val+2).toLowerCase()=='am')      ampm='AM';
        else if(val.substring(i_val,i_val+2).toLowerCase()=='pm') ampm='PM';
        else return def;
        i_val+=2;
        break;
      case 'u':
        uu=getInt(val,i_val,1,3);
        if((uu==null)||(uu<0)) return def;
        i_val+=uu.length;
        break;
      default:
        if(val.substring(i_val,i_val+token.length)!=token) return def;
        else i_val+=token.length;
        break;
    }
  }
  if(i_val != val.length) return def; // not all parsed

  var no_date=ng_isEmpty(date);
  var no_month=ng_isEmpty(month);
/*  var no_hh=ng_isEmpty(hh);
  var no_mm=ng_isEmpty(mm);
  var no_ss=ng_isEmpty(ss);
  var no_uu=ng_isEmpty(uu);
  
  if((no_hh)&&(no_mm)&&(no_ss)&&(no_uu))
  {
    hh=now.getHours();
    mm=now.getMinutes();
    ss=now.getSeconds();
    uu=now.getMilliseconds();
  }
  else
  {
    if(no_hh) hh=0;
    if(no_mm) mm=0;
    if(no_ss) ss=0;
    if(no_uu) uu=0;    
  //}*/

  if(no_date)
  {
    if(no_month) date=now.getDate();
    else date=1;
  }
  if(no_month) month=now.getMonth()+1;

  // Is valid month?
  if((month==2)&&(date>28)) 
  {
    if((!ng_LeapYear(year))||(date>29)) return def;		
  }
  if((date>30)&&((month==4)||(month==6)||(month==9)||(month==11))) return def;

  if((hh<12)&&(ampm=='PM'))      hh=hh-0+12;
  else if((hh>11)&&(ampm=='AM')) hh-=12;
  return new Date(year,month-1,date,hh,mm,ss,uu);
}


/**
 *  Function: ng_ParseJSONDateTime
 *  Parses date string formated by JSON encoder.   
 *  
 *  Syntax:
 *    date *ng_ParseJSONDateTime* (string s [ mixed def])
 *  
 *  Parameters:
 *    s - string to be parsed
 *    def - returned value if d is not datetime      
 *  
 *  Returns:
 *    Parsed date and time.
 */       
function ng_ParseJSONDateTime(val,def) 
{
  var ISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
  var a = ISO.exec(val);
  if(a) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));

  var MS = /^\/Date\(([+-]?[0-9]*)(([+-]?)([0-9]{2})([0-9]{2}))?\)\/$/;
  a = MS.exec(val);
  if(a) {
    var offset = 0;
    if (a[2]) {
      offset = (ng_toNumber(a[4]) * 60) + ng_toNumber(a[5]);
      offset *= ((a[3] == '-') ? 1 : -1);
    }
    // TODO: Check timezones
    var date=new Date(parseInt(a[1]))
    offset -= date.getTimezoneOffset();
    date.setTime(Number(Number(date) + (offset * 60 * 1000)));
    
    return date;
  }
  return def;
}
    
/**
 *  Function: ng_GetDateFormat
 *  Tries to figure out the date format from given text date. 
 *  
 *  Syntax:
 *    date *ng_GetDateFormat* (string s [, bool preferEuro=true])
 *  
 *  Parameters:
 *    -    
 *  
 *  Returns:
 *    Date format.
 *     
 *  See also:
 *    Format strings in <ng_FormatDateTime>.   
 */       
function ng_GetDateFormat(val, preferEuro) 
{
  if(val=='') return '';
  preferEuro=ngVal(preferEuro,true);
  var generalFormats=new Array('y-M-d','MMM d, y','MMM d,y','y-MMM-d','d-MMM-y','MMM d');
  var monthFirst=new Array('M/d/y','M-d-y','M.d.y','MMM-d','M/d','M-d');
  var dateFirst =new Array('d/M/y','d-M-y','d.M.y','d-MMM','d/M','d-M');
  var checkList=new Array(generalFormats,preferEuro?dateFirst:monthFirst,preferEuro?monthFirst:dateFirst);
  var d=null;
  for (var i=0; i<checkList.length; i++) 
  {
    var l=checkList[i];
    for (var j=0; j<l.length; j++) 
    {
      d=ng_ParseDate(val,l[j]);
      if(typeof d !== 'undefined') return l[j]; 
    }
  }
  return '';
}

/** 
 *  Group: String functions    
 */
 
/**
 *  Function: ng_Trim
 *  Trims leading and trailing spaces.   
 *  
 *  Syntax:
 *    string *ng_Trim* (string s)
 *  
 *  Parameters:
 *    s - string to be trimmed     
 *  
 *  Returns:
 *    Trimmed string.
 */       
function ng_Trim(s) {
  if (s===true) return '1';
  if ((s===false) || (s===null)) return '';

  var t = typeof(s);
  if ((t!='string') && (t!='number')) return t;

  return (''+s).replace(/^\s+|\s+$/g,"");
}

/**
 *  Function: ng_LTrim
 *  Trims leading spaces.   
 *  
 *  Syntax:
 *    string *ng_LTrim* (string s)
 *  
 *  Parameters:
 *    s - string to be trimmed     
 *  
 *  Returns:
 *    Trimmed string.
 */       
function ng_LTrim(s) {
  return (''+s).replace(/^\s+/,"");
}

/**
 *  Function: ng_RTrim
 *  Trims trailing spaces.   
 *  
 *  Syntax:
 *    string *ng_RTrim* (string s)
 *  
 *  Parameters:
 *    s - string to be trimmed     
 *  
 *  Returns:
 *    Trimmed string.
 */       
function ng_RTrim(s) {
  return (''+s).replace(/\s+$/,"");
}

/**
 *  Function: ng_StripPrefix
 *  Strips given prefix from a string.   
 *  
 *  Syntax:
 *    string *ng_StripPrefix* (string s, string prefix [, bool caseinsensitive=false])
 *  
 *  Parameters:
 *    s - string      
 *    prefix - prefix string
 *    caseinsensitive - if TRUE, prefix is tested without case sensitivity  
 *  
 *  Returns:
 *    String without prefix.
 */       
function ng_StripPrefix(v, pref, caseinsensitive)
{
  v=''+v;
  pref=''+pref;
  var p=v.substring(0,pref.length);
  if(caseinsensitive) { p=p.toLowerCase(); pref=pref.toLowerCase(); }
  return (p==pref ? v.substring(pref.length,v.length) : v);
}

/**
 *  Function: ng_StripSuffix
 *  Strips given suffix from a string.   
 *  
 *  Syntax:
 *    string *ng_StripSuffix* (string s, string suffix [, bool caseinsensitive=false])
 *  
 *  Parameters:
 *    s - string      
 *    suffix - suffix string
 *    caseinsensitive - if TRUE, suffix is tested without case sensitivity  
 *  
 *  Returns:
 *    String without suffix.
 */       
function ng_StripSuffix(v, suff, caseinsensitive)
{
  v=''+v;
  suff=''+suff;
  if(v.length<suff.length) return v;
  var s=v.substring(v.length-suff.length,v.length);
  if(caseinsensitive) { s=s.toLowerCase(); suff=suff.toLowerCase(); }
  return (s==suff ? v.substring(0,v.length-suff.length) : v);
}

/**
 *  Function: ng_AddPrefix
 *  Adds given prefix to a string (if not already present).   
 *  
 *  Syntax:
 *    string *ng_AddPrefix* (string s, string prefix [, bool caseinsensitive=false])
 *  
 *  Parameters:
 *    s - string      
 *    prefix - prefix string
 *    caseinsensitive - if TRUE, prefix is tested without case sensitivity  
 *  
 *  Returns:
 *    String with prefix.
 */       
function ng_AddPrefix(v, pref, caseinsensitive) {
  return ''+pref+ng_StripPrefix(v,pref,caseinsensitive); 
}

/**
 *  Function: ng_AddSuffix
 *  Adds given suffix to a string (if not already present).   
 *  
 *  Syntax:
 *    string *ng_AddSuffix* (string s, string suffix [, bool caseinsensitive=false])
 *  
 *  Parameters:
 *    s - string      
 *    suffix - suffix string
 *    caseinsensitive - if TRUE, suffix is tested without case sensitivity  
 *  
 *  Returns:
 *    String with suffix.
 */       
function ng_AddSuffix(v, suff, caseinsensitive) {
  return ng_StripSuffix(v,suff,caseinsensitive)+suff; 
}

/**
 *  Function: ng_AddSlash
 *  Adds slash '/' to end of a string (if not already present).   
 *  
 *  Syntax:
 *    string *ng_AddSlash* (string s)
 *  
 *  Parameters:
 *    s - string      
 *  
 *  Returns:
 *    String with slash '/'.
 */       
function ng_AddSlash(v) {
  return ng_AddSuffix(v,'/');
}

/**
 *  Function: ng_StripSlash
 *  Strips slash '/' from end of a string.   
 *  
 *  Syntax:
 *    string *ng_StripSlash* (string s)
 *  
 *  Parameters:
 *    s - string      
 *  
 *  Returns:
 *    String without slash '/'.
 */       
function ng_StripSlash(v) {
  return ng_StripSuffix(v,'/');
}

/**
 *  Function: ng_AddBackslash
 *  Adds backslash '\' to end of a string (if not already present).   
 *  
 *  Syntax:
 *    string *ng_AddBackslash* (string s)
 *  
 *  Parameters:
 *    s - string      
 *  
 *  Returns:
 *    String with backslash '\'.
 */       
function ng_AddBackslash(v) {
  return ng_AddSuffix(v,"\\");
}

/**
 *  Function: ng_StripBackslash
 *  Strips backslash '\' from end of a string.   
 *  
 *  Syntax:
 *    string *ng_StripBackslash* (string s)
 *  
 *  Parameters:
 *    s - string      
 *  
 *  Returns:
 *    String without backslash '\'.
 */       
function ng_StripBackslash(v) {
  return ng_StripSuffix(v,"\\");
}

/**
 *  Function: ng_StripQuotes
 *  Strips quotes from quoted string.   
 *  
 *  Syntax:
 *    string *ng_StripQuotes* (string s [, string quotestr])
 *  
 *  Parameters:
 *    s - string
 *    quotestr - optional quote string definition, if not specified  ' or " is used         
 *  
 *  Returns:
 *    String without quotes.
 */       
function ng_StripQuotes(v,q) 
{
  if(ng_isEmpty(q))
  {
    var o=ng_StripQuotes(v,'"');
    if(o.length<v.length) return o;
    return ng_StripQuotes(v,"'");
  }
  q=''+q;
  if((v.length>=q.length*2)&&(v.substring(0,q.length)==q)&&(v.substring(v.length-q.length,v.length)==q))
    return v.substring(q.length,v.length-q.length);
  return v;
}        

/**
 *  Function: ng_QuoteStr
 *  Adds quotes to string.   
 *  
 *  Syntax:
 *    string *ng_QuoteStr* (string s [, string quotestr])
 *  
 *  Parameters:
 *    s - string
 *    quotestr - optional quote string definition, if not specified  ' or " is used         
 *  
 *  Returns:
 *    String with quotes.
 */       
function ng_QuoteStr(v,q)
{
  v=ng_StripQuotes(v,q);
  if(ng_isEmpty(q)) q='"';
  q=''+q;
  return q+v+q;
} 

/**
 *  Function: ng_Unformat3Num
 *  Removes thousands separator from string.    
 *  
 *  Syntax:
 *    string *ng_Unformat3Num* (mixed var [, string separator=ngTxt('thousands_separator')])
 *  
 *  Parameters:
 *    var - variable to convert
 *    separator - thousands separator      
 *  
 *  Returns:
 *    String without thousands separator.
 */       
function ng_Unformat3Num(v,sep)
{
  if(!ng_typeString(v)) return v;
  if(typeof sep==='undefined')
    sep=ngTypesTxt('thousands_separator',' ');
  return ng_Format3Num(v,'',sep);
}

/**
 *  Function: ng_Format3Num
 *  Adds thousands separator to string.    
 *  
 *  Syntax:
 *    string *ng_Format3Num* (mixed var [, string separator=ngTxt('thousands_separator')])
 *  
 *  Parameters:
 *    var - variable to convert
 *    separator - thousands separator      
 *  
 *  Returns:
 *    String with thousands separator.
 */       
function ng_Format3Num(v,sep,rsep)
{
  if(typeof sep==='undefined')
    sep=ngTypesTxt('thousands_separator',' ');
  if((ng_isInvalid(v))||(ng_typeObject(v))) return '';    
  v=ng_toString(v);
  rsep=ngVal(rsep,sep);
  var from=v.lastIndexOf(ng_DecimalSeparator());
  if((from<0)&&(sep!='.')&&(rsep!='.')) from=v.lastIndexOf('.');
  if(from<0) {
    var c;
    for(from=v.length-1;from>=0;from--)
    {
      c=v.charAt(from);
      if((c>='0')&&(c<='9')) break;
    }
  }
  else from--;
  var s='',j=0,c;
  for(var i=v.length-1;i>=0;i--)
  {
    c=v.charAt(i);
    if(i<=from)
    {
      if(c==rsep) continue;
      if((!(j++%3))&&(i<from)) s=sep+s;
    }
    s=c+s;
  }
  return s;
}

/*!
 * Controls.js - calendar.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */


/** 
 *  Group: Calendar 
 */

// --- English Resources -------------------------------------------------------
if(typeof ngc_Lang === 'undefined') ngc_Lang=new Array();
if(typeof ngc_Lang['en'] === 'undefined') ngc_Lang['en']=new Array();

ngc_Lang['en']['calendar']              = 'Calendar';
ngc_Lang['en']['calendar_today']        = 'Today';
ngc_Lang['en']['calendar_tomorrow']     = '+1';
ngc_Lang['en']['calendar_tomorrow_alt'] = 'Tomorrow';
ngc_Lang['en']['calendar_nextweek']     = '+7';
ngc_Lang['en']['calendar_nextweek_alt'] = 'In A Week';
ngc_Lang['en']['calendar_nextmonth']    = 'Next Month';
ngc_Lang['en']['calendar_prevmonth']    = 'Previous Month';
ngc_Lang['en']['calendar_nextyear']     = 'Next Year';
ngc_Lang['en']['calendar_prevyear']     = 'Previous Year';

// --- Czech Resources -------------------------------------------------------
if(typeof ngc_Lang['cz'] === 'undefined') ngc_Lang['cz']=new Array();

ngc_Lang['cz']['calendar']              = 'Kalendář';
ngc_Lang['cz']['calendar_today']        = 'Dnes';
ngc_Lang['cz']['calendar_tomorrow']     = '+1';
ngc_Lang['cz']['calendar_tomorrow_alt'] = 'Zítra';
ngc_Lang['cz']['calendar_nextweek']     = '+7';
ngc_Lang['cz']['calendar_nextweek_alt'] = 'Za týden';
ngc_Lang['cz']['calendar_nextmonth']    = 'Následující měsíc';
ngc_Lang['cz']['calendar_prevmonth']    = 'Předcházející měsíc';
ngc_Lang['cz']['calendar_nextyear']     = 'Následující rok';
ngc_Lang['cz']['calendar_prevyear']     = 'Předcházející rok';

// --- Slovak Resources -------------------------------------------------------
if(typeof ngc_Lang['sk'] === 'undefined') ngc_Lang['sk']=new Array();

ngc_Lang['sk']['calendar']              = 'Kalendár';
ngc_Lang['sk']['calendar_today']        = 'Dnes';
ngc_Lang['sk']['calendar_tomorrow']     = '+1';
ngc_Lang['sk']['calendar_tomorrow_alt'] = 'Zajtra';
ngc_Lang['sk']['calendar_nextweek']     = '+7';
ngc_Lang['sk']['calendar_nextweek_alt'] = 'Za týždeň';
ngc_Lang['sk']['calendar_nextmonth']    = 'Nasledujúci mesiac';
ngc_Lang['sk']['calendar_prevmonth']    = 'Predchádzajúci mesiac';
ngc_Lang['sk']['calendar_nextyear']     = 'Nasledujúci rok';
ngc_Lang['sk']['calendar_prevyear']     = 'Predchádzajúci rok';

// --- ngCalendar --------------------------------------------------------------

var ngcalSelectNone = 0;
var ngcalSelectSingle = 1;
var ngcalSelectMulti = 2;
var ngcalSelectMultiExt = 3;
var ngcalSelectRange = 4;

function ngcal_NextMonth(changeyear)
{
  var y,m,s;

  s=this.CurrentDate;
  y = s.getFullYear();
  m = s.getMonth()+1;
  if(m>11) { m=0; if(ngVal(changeyear,true)) y++; }
  this.CurrentDate = new Date(y,m,1);
  this.UpdateCalendar();
}

function ngcal_PrevMonth(changeyear)
{
  var y,m,s;

  s=this.CurrentDate;
  y = s.getFullYear();
  m = s.getMonth()-1;
  if(m<0) { m=11; if(ngVal(changeyear,true)) y--; }
  this.CurrentDate = new Date(y,m,1);
  this.UpdateCalendar();
}

function ngcal_NextYear()
{
  var y,m,s;

  s=this.CurrentDate;
  y = s.getFullYear()+1;
  m = s.getMonth();
  this.CurrentDate = new Date(y,m,1);
  this.UpdateCalendar();
}

function ngcal_PrevYear()
{
  var y,m,s;

  s=this.CurrentDate;
  y = s.getFullYear()-1;
  m = s.getMonth();
  this.CurrentDate = new Date(y,m,1);
  this.UpdateCalendar();
}

function ngcal_IsDayEnabled(date)
{
  var enabled=true;
  if((this.MinDate)&&(date<this.MinDate)) enabled=false;
  if((enabled)&&(this.MaxDate)&&(date>this.MaxDate)) enabled=false;
  if((enabled)&&(ngVal(this.BlockedDates[date],false))) enabled=false;
  if((enabled)&&(ngVal(this.BlockedWeekDays[date.getDay()],false))) enabled=false;
  if(this.OnIsDayEnabled) enabled=this.OnIsDayEnabled(this, date, enabled);
  return enabled;
}

var ngcal_CurrentDay='';

function ngcal_DE(e, elm)
{
  if(!e) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  if(ngcal_CurrentDay!='') 
  {
    var o=document.getElementById(ngcal_CurrentDay);
    ngcal_DL(e,o);
  }
  ngcal_CurrentDay=elm.id;
  var o=document.getElementById(elm.id);
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i<0) cn=cn+'_Focus';
    o.className=cn;
  }
  ngc_EnterImg(elm.id+'I');
}

function ngcal_DL(e, elm)
{
  if(!e) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  if(ngcal_CurrentDay==elm.id) ngcal_CurrentDay='';
  var o=document.getElementById(elm.id);
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i>=0) cn=cn.substring(0,i);
    o.className=cn; 
  }
  ngc_LeaveImg(elm.id+'I');
}

function ngcal_DayFromElmId(id)
{
  var cid='',row='',col='';
  var i=id.lastIndexOf('_D');
  if(i>=0)
  {
    cid=id.substring(0,i);
    var ii=ng_Expand2Id(id.substring(i+2,id.length));
    if(ii.id1!='') row=parseInt(ii.id1);
    if(ii.id2!='') col=parseInt(ii.id2);
  }
  return { id: cid, row: row, col: col };
}

function ngcal_MD(e,elm)
{
  if(!e) e=window.event;

  var ii=ngcal_DayFromElmId(elm.id);
  if((ii.id=='')||(ii.row=='')||(ii.col=='')) return;

  var c=ngGetControlById(ii.id, 'ngCalendar');
  if(!c) return;
    
  if(!c.Enabled) return;

  ii.row--;
  ii.col--;
  var date=c.DisplayedDates[ii.row*7+ii.col];
  e.cal=this;
  e.caldate=date;
  e.calrow=ii.row;
  e.calcol=ii.col;
  if((this.OnDayClick)&&(!ngVal(this.OnDayClick(e),false))) return;
  
  if(!c.SelectType) return;

  var shift=ngVal(e.shiftKey,false);
  var ctrl=ngVal(e.ctrlKey,false);

  // Handle select
  if((c.SelectType==3)&&(!ctrl)) // Single
    c.SelectedDates = new Array();

  if((c.CurrentDate.getMonth()!=date.getMonth())||(!c.IsDayEnabled(date))) return; // Select only enabled
  c.BeginUpdate();                                                    
  var s=(c.SelectType==ngcalSelectRange ? true : !(typeof c.SelectedDates[date]!=='undefined'));
  if(((c.SelectType==2)||(c.SelectType==3))&&(shift)&&(c.last_selected!=null))
  {
    if(c.SelectType==3) s=true;
    var changed=false;
    var d=date;
    if(d<=c.last_selected)
    {
      for(;d<=c.last_selected;)
      {
        if((changed)||((typeof c.SelectedDates[d]!=='undefined')!=s))
        { 
          changed=true;
          if(s) c.SelectedDates[d]=d;
          else delete c.SelectedDates[d]; 
        }
        d.setDate(d.getDate()+1);        
      }  
    }
    else
    {
      for(;d>=c.last_selected;)
      {
        if((changed)||((typeof c.SelectedDates[d]!=='undefined')!=s))
        { 
          changed=true;
          if(s) c.SelectedDates[d]=d;
          else delete c.SelectedDates[d]; 
        }
        d.setDate(d.getDate()-1);        
      }  
    }
    if(changed) c.SelectChanged();
  }
  else c.SelectDate(date,s,ctrl);
  c.EndUpdate();
}

function ngcal_SelectChanged()
{
  if(this.OnSelectChanged) this.OnSelectChanged(this);
  this.UpdateCalendar();
}

function ngcal_ClearSelected()
{
  for(var i in this.SelectedDates)
  {    
    this.SelectedDates = new Array();
    this.last_selected = null; 
    this.SelectChanged();
    break;
  }
}

function ngcal_SelectDate(date, state, ctrl)
{
  if(this.SelectType==0) return;
  date=ngVal(date,null);
  if(!date) return;
  state=ngVal(state,true);
  date=ng_ExtractDate(date);

  if(this.SelectType==ngcalSelectRange)
  {
    if(!state) return;
    if(date<this.SelectFrom)    { this.SelectFrom=date; this.SelectChanged(); } 
    else if(date>this.SelectTo) { this.SelectTo=date;   this.SelectChanged(); }
    else
    {
      if(((this.SelectFrom-date)!=0)||((this.SelectTo-date)!=0))
      {
        this.SelectFrom=date;
        this.SelectTo=date;
        this.SelectChanged();
      }
    }
    return;
  }

  if((state)&&((this.SelectType==1)||((this.SelectType==3)&&(!ngVal(ctrl,false)))))
    this.SelectedDates = new Array();

  if((typeof this.SelectedDates[date]!=='undefined')!=state)
  { 
    if(state) this.last_selected=date;
    if(state) this.SelectedDates[date]=date;
    else delete this.SelectedDates[date];
    this.SelectChanged();
  }  
  
  // Handle dropdown
  if(state)
  {
    var dd=ngVal(this.DropDownOwner,null);        
    if((dd)&&(this.SelectType==1))
    { 
      if(typeof dd.SetDate === 'function') dd.SetDate(date);
      else if(typeof dd.SetText === 'function') dd.SetText(this.FormatDate(date));
      if(dd.HideDropDown) dd.HideDropDown();
      dd.SetFocus();
    }
  }  
}

function ngcal_GetSelected()
{
  var items=new Array();
  if(this.SelectType==ngcalSelectRange)
  {
    items[items.length]=this.SelectFrom;
    items[items.length]=this.SelectTo;
  }
  else
  {
    for(var d in this.SelectedDates)
    {
      if(typeof this.SelectedDates[d]==='undefined') continue;    
      items[items.length]=this.SelectedDates[d];
    }
  }
  return items;
}

function ngcal_SetSelected(dates)
{
  // Convert to array
  if((typeof dates === 'string')||(ng_typeDate(dates)))
  {
    var a=new Array();
    a[0]=dates;
    dates=a;
  }
  dates=ngVal(dates,null);
  if(!dates) return;
  this.BeginUpdate();
  this.ClearSelected()
  var d,f=0,rs=0;
  for(var i=0;i<dates.length;i++)
  {
    d=dates[i];
    if(typeof d==='string') d=this.ParseDate(d);
    if(typeof d!=='undefined')
    {
      d=ng_ExtractDate(d);
      if(this.SelectType==ngcalSelectRange)
      {
        if(!rs) this.SelectFrom=d;
        else if(rs==1) this.SelectTo=d;
        else if(rs>1) break;
        rs++;
      }
      else this.SelectedDates[d]=d;
      if(!f) { this.CurrentDate=d; f=1; } 
    }
  }
  if(rs==1) this.SelectTo=this.SelectFrom;
  this.SelectChanged();
  this.EndUpdate();
}

function ngcal_BeginUpdate()
{
  this.update_cnt++;
}

function ngcal_EndUpdate()
{
  this.update_cnt--;
  if(this.update_cnt<=0) { this.update_cnt=0; if(this.need_update) this.UpdateCalendar(); }
}

function ngcal_DayImgDrawProps(id, s, enabled,o)
{
  var v=ngc_ImgProps(id,s,enabled,o);
  if(ngcal_CurrentDay==id.substring(0,id.length-1)) { v.aL=v.oL; v.aT=v.oT; }
  else { v.aL=v.L; v.aT=v.T; }
  return v;
}

function ngcal_UpdateCalendar()
{
  if(this.update_cnt>0) { this.need_update=true; return; }
  this.need_update=false;

  var o=this.Elm();
  if(!o) return;
  var cclass=this.BaseClassName;
  var calid=this.ID;
  var now_date = ng_ExtractDate(new Date());
  var cur_month = this.CurrentDate.getMonth()+1;
  var cur_year = this.CurrentDate.getFullYear();
  var cur_day = this.CurrentDate.getDate();
  var daysinmonth = new Array(0,31,28,31,30,31,30,31,31,30,31,30,31);
  if(ng_LeapYear(cur_year)) daysinmonth[2] = 29;

  var current_month = new Date(cur_year,cur_month-1,1);
  var display_date = current_month;
  var display_year = cur_year;
  var display_month = cur_month;
  var display_day = 1;
  
  if((this.SelectType==ngcalSelectRange)&&(this.SelectFrom>this.SelectTo))
  {
    var t=this.SelectFrom;
    this.SelectFrom=this.SelectTo;
    this.SelectTo=t;
  }
  
  var weekday = current_month.getDay();
  var offset  = (weekday >= this.WeekStartDay) ? weekday-this.WeekStartDay : 7-this.WeekStartDay+weekday ;
  if (offset > 0) 
  {
    display_month--;
    if (display_month < 1) { display_month = 12; display_year--; }
    display_day = daysinmonth[display_month]-offset+1;
  }
  
  var o=this.Elm();
  if(!o) return;
  var w=ng_ClientWidth(o);
  
  var to=document.getElementById(this.ID+'_Tab');
  var ho=document.getElementById(this.ID+'_Head');
  if((ho)&&(to))
  {
    var hw=ng_ClientWidth(to);
    var h=0,bo,tw,th=0,bh,bw,l=0;
    if(this.Navigation)
    {
      tw=hw;
      bo=(this.PrevMonBtn.Visible ? this.PrevMonBtn.Elm() : null);
      if(bo)
      {
        bo.style.left='0px';
        bo.style.top='0px';
        bw=ng_ClientWidth(bo);
        tw-=bw;
        l=bw;
        bh=ng_ClientHeight(bo);
        if(bh>th) th=bh;
      } 

      bo=(this.NextMonBtn.Visible ? this.NextMonBtn.Elm() : null);
      if(bo)
      {
        bo.style.top='0px';
        bw=ng_ClientWidth(bo);
        tw-=bw;        
        bo.style.left=(hw-bw)+'px';
        bh=ng_ClientHeight(bo);
        if(bh>th) th=bh;
      }

      bo=document.getElementById(this.ID+'_MON');
      if(bo) 
      {
        if(this.YearNavigation) ng_SetInnerHTML(bo,ngTxt('calendar_months')[cur_month-1]); 
        else ng_SetInnerHTML(bo,ngTxt('calendar_months')[cur_month-1]+' '+cur_year);
        bo.style.left=l+'px';
        bo.style.width=tw+'px';
        bh=ng_ClientHeight(bo);
        if(bh>th) th=bh;        
      }       
      h+=th;

      if(this.YearNavigation)
      {
        th=0;
        tw=hw;
        bo=(this.PrevYearBtn.Visible ? this.PrevYearBtn.Elm() : null);
        if(bo)
        {
          bo.style.display="block";
          bo.style.left='0px';
          bo.style.top=h+'px';
          bw=ng_ClientWidth(bo);
          tw-=bw;
          l=bw;
          bh=ng_ClientHeight(bo);
          if(bh>th) th=bh;
        } 
  
        bo=(this.NextYearBtn.Visible ? this.NextYearBtn.Elm() : null);
        if(bo)
        {
          bo.style.display="block";
          bo.style.top=h+'px';
          bw=ng_ClientWidth(bo);
          tw-=bw;        
          bo.style.left=(hw-bw)+'px';
          bh=ng_ClientHeight(bo);
          if(bh>th) th=bh;
        }
  
        bo=document.getElementById(this.ID+'_YEAR');
        if(bo) 
        {
          bo.style.display="block";
          ng_SetInnerHTML(bo,cur_year);
          bo.style.top=h+'px';
          bo.style.left=l+'px';
          bo.style.width=tw+'px';
          bh=ng_ClientHeight(bo);
          if(bh>th) th=bh;        
        }       
        h+=th;
      }
      else
      {
        bo=(this.PrevYearBtn.Visible ? this.PrevYearBtn.Elm() : null);
        if(bo) bo.style.display="none";
        bo=(this.NextYearBtn.Visible ? this.NextYearBtn.Elm() : null);
        if(bo) bo.style.display="none";
        bo=document.getElementById(this.ID+'_YEAR');
        if(bo) bo.style.display="none";
      }
    }     
    if(h>0) ho.style.height=h+'px';
    ho.style.display=(h ? '' : 'none');
  }
  
  var row,col,cid,image,now,enabled,selected,cn,alt,text;
  for(row=0;row<6;row++)
  {
    for(col=0;col<=6;col++)
    {      
      cid=this.ID+'_D'+(row+1)+'_'+(col+1);
      od = document.getElementById(cid);
      if(!od) continue;       

      display_date = new Date(display_year,display_month-1,display_day);
      this.DisplayedDates[row*7+col]=display_date;
      if(this.SelectType==ngcalSelectRange)
        selected=(display_date>=this.SelectFrom)&&(display_date<=this.SelectTo);
      else 
        selected=(typeof this.SelectedDates[display_date]!=='undefined');
      if((!this.Enabled)||(display_month != cur_month)) enabled=false;
      else enabled=this.IsDayEnabled(display_date);
      now=((display_date-now_date)==0);
      cn=cclass+'Days '+cclass+(now ? 'Now' : 'Day');
      if(selected) cn+='Selected';
      if(!enabled) cn+='Disabled';
      if(ngcal_CurrentDay==cid) cn+='_Focus';
      
      if(this.OnGetDayImg) image=this.OnGetDayImg(this, display_date, col, row);
      else image=(now && this.ImgNow ? this.ImgNow : this.ImgDay);
      if(image) ngc_ChangeImage(ngcal_DayImgDrawProps(cid+'I', (selected ? 1 : 0), enabled, image));

      if(this.OnGetDayAlt) alt=ngVal(this.OnGetGetDayAlt(this, display_date, col, row),'');
      else alt=this.FormatDate(display_date);
      if(this.OnGetDayText) text=ngVal(this.OnGetGetDayText(this, display_date, col, row),'');
      else text=display_day;

      ng_SetInnerHTML(od,text);
      od.title=alt;
      od.className=cn;
      od.onmouseover = function(e) { ngcal_DE(e,this); }
      od.onmouseout  = function(e) { ngcal_DL(e,this); }
      od.onclick = function(e) { ngcal_MD(e,this); }
      od.onselectstart = function() {  return false; } 
      od.style.cursor = (enabled ? 'pointer' : 'default');
      
      display_day++;
      if (display_day > daysinmonth[display_month]) 
      {
        display_day=1;
        display_month++;
      }
      if (display_month > 12) 
      {
        display_month=1;
        display_year++;
      }
    }
  }
}

function ngcal_DoUpdate(o)
{
  var cclass=this.BaseClassName;

  var html=new ngStringBuilder;
  html.append('<table id="'+this.ID+'_Tab" cellspacing="0" border="0" cellpadding="0">');

  html.append('<tr><td id="'+this.ID+'_Head" class="'+cclass+'Header" colspan="7" align="left" valign="top"><div style="position:absolute;">');
  var id,b,cn;
  for(var i=0;i<6;i++)
  {
    switch(i)
    {
      case 0: b=this.PrevMonBtn; cn="PrevMon"; break;
      case 1: id=this.ID+'_MON'; cn="Month"+(this.Enabled ? '' : 'Disabled'); b=null; break;
      case 2: b=this.NextMonBtn; cn="NextMon"; break;
      case 3: b=this.PrevYearBtn; cn="PrevYear"; break;
      case 4: id=this.ID+'_YEAR'; cn="Year"+(this.Enabled ? '' : 'Disabled'); b=null; break;
      case 5: b=this.NextYearBtn; cn="NextYear"; break;
    }
    if(b)
    {
      if(b.ID=='') b.Attach(this.ID+'_B'+(i+1));
      id=b.ID;
      b.Enabled=this.Enabled;
      if(typeof b.className !== 'undefined') cn=b.className;      
    }
    html.append('<div id="'+id+'" class="'+cclass+cn+'" style="position:absolute;"></div>');
  }
  html.append('</div>&nbsp;</td></tr>');

  var dp,w,image,hilite,alt,text;  
  // Day names
  var days=ngTxt('calendar_days_short');
  var days_title=ngTxt('calendar_days');
  html.append('<tr id="'+this.ID+'_WeekDays" class="'+cclass+'WeekDaysRow">');
  for(var i=0;i<7;i++)
  {
    html.append('<td>');
    w=(this.WeekStartDay+i)%7;    
    hilite=(ngVal(this.HiliteWeekDays[w],false));
    if(this.OnGetWeekDayImg) image=this.OnGetWeekDayImg(this, w);
    else image=this.ImgWeekDay;
    if(image)
    {
      dp=ngc_ImgProps(this.ID+'_WD'+dp, (hilite ? 1 : 0), this.Enabled, image);
      ngc_Img(html,dp,"position:absolute;",ngVal(image.Attrs,''));
    }
    cn='WeekDay';
    if(hilite) cn+='Hilite';
    if(!this.Enabled) cn+='Disabled';
    
    if(this.OnGetWeekDayAlt) alt=ngVal(this.OnGetGetWeekDayAlt(this,w),'');
    else alt=days_title[w];
    if(this.OnGetWeekDayText) text=ngVal(this.OnGetGetWeekDayText(this,w),'');
    else text=days[w];
        
    html.append('<div class="'+cclass+'WeekDays '+cclass+cn+'" title="'+ng_htmlEncode(alt)+'">'+text+'</div></td>')
  }
  html.append('</tr>');
  
  var dd=1,cid, row, col;
  for(row=1;row<=6;row++)
  {
    html.append('<tr>');
    for(col=1;col<=7;col++)
    {
      html.append('<td>');
      cid=this.ID+'_D'+row+'_'+col;
      if(this.OnGetDayImg) image=this.OnGetDayImg(this, null, col-1, row-1);
      else image=this.ImgDay;
      if(image)
      {
        dp=ngcal_DayImgDrawProps(cid+'I', 0, this.Enabled, image);
        ngc_Img(html,dp,"position:absolute;",ngVal(image.Attrs,''));
      }
      html.append('<div id="'+cid+'"></div></td>');
    }
    html.append('</tr>');
  }
  if((this.FastNavigation)&&(this.FastButtons)&&(this.FastButtons.length>0))
  {    
    html.append('<tr><td id="'+this.ID+'_Foot" class="'+cclass+'Footer" colspan="7" align="left" valign="top"><div style="position: absolute;">');
    var b,ci;
    for(var i=0;i<this.FastButtons.length;i++)
    {
      cn=cclass+'FastBtn';
      b=this.FastButtons[i];
      if(!b) continue;
      b.Enabled=this.Enabled;
      b.Parent=this;
      if(!b.Visible) continue;
      if(b.ID=='') b.Attach(this.ID+'_FB'+(i+1));
      if(typeof b.className !== 'undefined') 
      {
        cn=b.className;
        ci=cn.indexOf(' ');
        b.BaseClassName=(ci>=0 ? cn.substr(0,ci) : cn);
      }
      html.append('<div id="').append(b.ID).append('" class="').append(cn).append('" style="position: absolute; z-index:1;"></div>');
    }
    html.append('</div></td></tr>');
  }
  
  html.append('</table>');
  
  var hasframe=(!ng_EmptyVar(this.Frame));
  if(hasframe){
    html.append('<div id="'+this.ID+'_F" style="position: absolute;left:0px;top:0px;z-index:800;"></div>');
  }
  
  ng_SetInnerHTML(o, html.toString());
  for(var i=0;i<6;i++)
  {
    switch(i)
    {
      case 0: b=this.PrevMonBtn; break;
      case 1: b=null; break;
      case 2: b=this.NextMonBtn; break;
      case 3: b=this.PrevYearBtn; break;
      case 4: b=null; break;
      case 5: b=this.NextYearBtn; break;
    }
    if(b) 
    {
      b.Parent=this;      
      b.Update();
    }
  }
  this.UpdateCalendar();
  
  o.style.width='';
  o.style.height='';
  var w=ng_ClientWidth(o);

  if((this.FastNavigation)&&(this.FastButtons)&&(this.FastButtons.length>0))
  {    
    var b,bw,bh,img,bo,mh=0,bl=0,bt=0;
    for(var i=0;i<this.FastButtons.length;i++)
    {
      b=this.FastButtons[i];
      if(!b) continue;
      b.Update();
      bo=b.Elm();
      if(!bo) continue;
      bw=ng_OuterWidth(bo);
      if((bl+bw>w)&&(bl>0)) { bt+=mh; bl=0; mh=0; }
      bo.style.left=bl+'px';
      bo.style.top=bt+'px';      
      bh=ng_OuterHeight(bo);
      if(bh>mh) mh=bh;
      bl+=bw;    
    }
    bt+=mh;
    bo=document.getElementById(this.ID+'_Foot');
    if(bo) bo.style.height=bt+'px';
  }
  var h=ng_ClientHeight(o);

  ng_SetClientWidth(o,w);
  ng_SetClientHeight(o,h);
  var cbw=ng_StyleWidth(o);
  var cbh=ng_StyleHeight(o);
  if((this.Bounds.W!=cbw)||(this.Bounds.H!=cbh))
  {
    this.Bounds.W=cbw;
    this.Bounds.H=cbh;
    this.SetBounds();
  }
  var dd=ngVal(this.DropDownOwner,null);
  if(dd) this.MaxHeight=h;
  
  if(hasframe){
    var f=document.getElementById(this.ID+'_F');
    if(f)
    {
      var frame=new ngStringBuilder;
      ngc_ImgBox(frame, this.ID, 'ngCalendar', (this.ControlHasFocus ? 1 : 0), this.Enabled, 0,0,w,h,false, this.Frame);
      ng_SetInnerHTML(f,frame.toString());
    }
  }
  return true;
}

var ngcal_LeaveTimer = null;

function ngcal_DoMouseEnter(e, mi, elm)
{
  if(ngcal_LeaveTimer) clearTimeout(ngcal_LeaveTimer); ngcal_LeaveTimer=null;
  if((mi)&&(mi.Object)&&(mi.Object!=this)) ngcal_DoLeave(mi.Object.ID);
  if(this.OnMouseEnter) this.OnMouseEnter(this);
}

function ngcal_DoLeave(lid)
{
  if(ngcal_LeaveTimer) clearTimeout(ngcal_LeaveTimer); ngcal_LeaveTimer=null;
  var l=ngGetControlById(lid, 'ngCalendar');
  if(lid)
  {
    if(ngcal_CurrentDay!='')
    {
      var o=document.getElementById(ngcal_CurrentDay);
      if(o) ngcal_DL(null,o);    
    }
    if(l.OnMouseLeave) l.OnMouseLeave(l);
  }
}

function ngcal_DoMouseLeave(e)
{
  ngcal_LeaveTimer=setTimeout("ngcal_DoLeave('"+this.ID+"');",100);
}

function ngcal_DoDropDown(edit)
{
  if(typeof edit.GetDate === 'function') this.SetSelected(edit.GetDate());
  else this.SetSelected(edit.GetText());
  this.SetVisible(true);
  this.SetFocus();
}

function ngcal_FormatDate(d)
{
  if(this.OnFormatDate) return this.OnFormatDate(this, d);
  var format=this.DateFormat;
  if(format=='') 
  {
    var dd=ngVal(this.DropDownOwner,null);        
    if(dd) format=ngVal(dd.DateFormat,'');
  }
  return ng_FormatDate(d,format);
}

function ngcal_ParseDate(d)
{
  if(this.OnParseDate) return this.OnParseDate(this, d);
  var format=this.DateFormat;
  if(format=='') 
  {
    var dd=ngVal(this.DropDownOwner,null);        
    if(dd) format=ngVal(dd.DateFormat,'');
  }
  return ng_ParseDate(d,format);
}

/**
 *  Class: ngCalendar
 *  This class implements a generic calendar control. 
 *
 *  Syntax:
 *    new *ngCalendar* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngCalendar(id)
{
  ngControl(this, id, 'ngCalendar');

  /*
   *  Group: Properties
   */
  /*  Variable: CurrentDate
   *  ...
   *  Type: date
   *  Default value: *new Date()*   
   */
  this.CurrentDate = new Date();

  /*  Variable: WeekStartDay
   *  ...
   *  Type: int
   *  Default value: *1*   
   */
  this.WeekStartDay = 1;
  /*  Variable: HiliteWeekDays
   *  ...
   *  Type: array
   *  Default value: *{0:true}*   
   */
  this.HiliteWeekDays = {0: true};

  /*  Variable: DateFormat
   *  ...
   *  Type: string
   */
  this.DateFormat = '';
  
  /*  Variable: ImgWeekDay
   *  ...
   *  Type: object
   */
  this.ImgWeekDay = null;
  /*  Variable: ImgDay
   *  ...
   *  Type: object
   */
  this.ImgDay = null;
  /*  Variable: ImgNow
   *  ...
   *  Type: object
   */
  this.ImgNow = null;
  
  var b=new ngButton();
  b.Text = '&lt;';
  b.Alt = ngTxt('calendar_prevmonth');
  b.OnClick = function(e) { if(e.Owner.Parent) e.Owner.Parent.PrevMonth(); };
  /*  Variable: PrevMonBtn
   *  ...
   *  Type: object
   */
  this.PrevMonBtn = b;
   
  b=new ngButton();
  b.Text = '&gt;';
  b.Alt = ngTxt('calendar_nextmonth');
  b.OnClick = function(e) { if(e.Owner.Parent) e.Owner.Parent.NextMonth(!e.Owner.Parent.YearNavigation); };
  /*  Variable: NextMonBtn
   *  ...
   *  Type: object
   */
  this.NextMonBtn = b;

  b=new ngButton();
  b.Text = '&lt;';
  b.Alt = ngTxt('calendar_prevyear');
  b.OnClick = function(e) { if(e.Owner.Parent) e.Owner.Parent.PrevYear(!e.Owner.Parent.YearNavigation); };
  /*  Variable: PrevYearBtn
   *  ...
   *  Type: object
   */
  this.PrevYearBtn = b;
   
  b=new ngButton();
  b.Text = '&gt;';
  b.Alt = ngTxt('calendar_nextyear');
  b.OnClick = function(e) { if(e.Owner.Parent) e.Owner.Parent.NextYear(); };
  /*  Variable: NextYearBtn
   *  ...
   *  Type: object
   */
  this.NextYearBtn = b;
  

  b=new ngButton();
  b.Text = ngTxt('calendar_today');
  b.Alt = ngTxt('calendar_today');
  b.OnClick = function(e) { if(e.Owner.Parent) e.Owner.Parent.SelectDate(new Date()); };
  /*  Variable: TodayBtn
   *  ...
   *  Type: object
   */
  this.TodayBtn = b;
  
  b=new ngButton();
  b.Text = ngTxt('calendar_tomorrow');
  b.Alt = ngTxt('calendar_tomorrow_alt');
  b.OnClick = function(e) { if(e.Owner.Parent) { var d=new Date(); d.setDate(d.getDate()+1); e.Owner.Parent.SelectDate(d); } };
  /*  Variable: TomorrowBtn
   *  ...
   *  Type: object
   */
  this.TomorrowBtn = b;

  b=new ngButton();
  b.Text = ngTxt('calendar_nextweek');
  b.Alt = ngTxt('calendar_nextweek_alt');
  b.OnClick = function(e) { if(e.Owner.Parent) { var d=new Date(); d.setDate(d.getDate()+7); e.Owner.Parent.SelectDate(d); } };
  /*  Variable: NextWeekBtn
   *  ...
   *  Type: object
   */
  this.NextWeekBtn = b;
  
  /*  Variable: FastButtons
   *  ...
   *  Type: array
   *  Default value: *new Array(this.TodayBtn, this.TomorrowBtn, this.NextWeekBtn)*   
   */
  this.FastButtons = new Array(this.TodayBtn, this.TomorrowBtn, this.NextWeekBtn);
  
  /*  Variable: Navigation
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.Navigation = true;
  /*  Variable: YearNavigation
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.YearNavigation = false;
  /*  Variable: FastNavigation
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.FastNavigation = true;
  
  /*  Variable: DisplayedDates
   *  ...
   *  Type: array
   *  Default value: *{}*   
   */
  this.DisplayedDates = new Array();
  
  /*  Variable: SelectedDates
   *  ...
   *  Type: array
   *  Default value: *{}*   
   */
  this.SelectedDates = new Array();
  /*  Variable: SelectType
   *  ...
   *  Type: enum
   *  
   *  Constants:
   *   ngcalSelectNone - ...
   *   ngcalSelectSingle - ...
   *   ngcalSelectMulti - ...
   *   ngcalSelectMultiExt - ... 
   *   ngcalSelectRange - ...
   *           
   *  Default value: *ngcalSelectSingle*   
   */
  this.SelectType = ngcalSelectSingle;
  /*  Variable: SelectFrom
   *  ...
   *  Type: date
   *  Default value: *new Date()*   
   */
  this.SelectFrom = new Date();
  /*  Variable: SelectTo
   *  ...
   *  Type: date
   *  Default value: *new Date()*   
   */
  this.SelectTo = new Date();

  /*  Variable: BlockedDates
   *  ...
   *  Type: array
   *  Default value: *{}*   
   */
  this.BlockedDates = new Array();
  /*  Variable: BlockedWeekDays
   *  ...
   *  Type: array
   *  Default value: *{}*   
   */
  this.BlockedWeekDays = new Array();
  /*  Variable: MinDate
   *  ...
   *  Type: date
   *  Default value: *null*   
   */
  this.MinDate = null;
  /*  Variable: MaxDate
   *  ...
   *  Type: date
   *  Default value: *null*   
   */
  this.MaxDate = null;
  /*  Variable: Frame
   *  ...
   *  Type: object
   */
  this.Frame = new Object;
    
  /*
   *  Group: Methods
   */
  /*  Function: FormatDate
   *  Formats date to string.   
   *   
   *  Syntax:
   *    string *FormatDate* (date d)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   *     
   *  See also:
   *    Format strings in <ng_FormatDateTime>.   
   */
  this.FormatDate = ngcal_FormatDate;
  /*  Function: ParseDate
   *  Parses date from string.   
   *   
   *  Syntax:
   *    date *ParseDate* (string s)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   *     
   *  See also:
   *    Format strings in <ng_FormatDateTime>.   
   */
  this.ParseDate = ngcal_ParseDate;

  /*  Function: NextMonth
   *  Moves calendar page to next month.     
   *   
   *  Syntax:
   *    void *NextMonth* ([bool changeyear = true])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.NextMonth = ngcal_NextMonth;
  /*  Function: PrevMonth
   *  Moves calendar page to previous month.     
   *   
   *  Syntax:
   *    void *PrevMonth* ([bool changeyear = true])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.PrevMonth = ngcal_PrevMonth;
  /*  Function: NextYear
   *  Moves calendar page to next year.     
   *   
   *  Syntax:
   *    void *NextYear* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.NextYear = ngcal_NextYear;
  /*  Function: PrevYear
   *  Moves calendar page to previous year.     
   *   
   *  Syntax:
   *    void *PrevYear* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.PrevYear = ngcal_PrevYear;

  /*  Function: ClearSelected
   *  Clears selected dates.     
   *   
   *  Syntax:
   *    void *ClearSelected* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.ClearSelected = ngcal_ClearSelected;
  /*  Function: SelectDate
   *  Adds/removes date to/from selection/     
   *   
   *  Syntax:
   *    void *SelectDate* (date d, bool state, bool ctrlkey)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.SelectDate = ngcal_SelectDate;
  /*  Function: GetSelected
   *  Gets selected dates as indexed array.     
   *   
   *  Syntax:
   *    array *GetSelected* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.GetSelected = ngcal_GetSelected;
  /*  Function: SetSelected
   *  Sets selected dates from array. Items can be a date types or string types.     
   *   
   *  Syntax:
   *    void *SetSelected* (array dates)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.SetSelected = ngcal_SetSelected;
  
  this.last_selected = null; 
  this.SelectChanged = ngcal_SelectChanged; 

  /*  Function: IsDayEnabled
   *  Determines if specified date is available for selection.     
   *   
   *  Syntax:
   *    bool *IsDayEnabled* (date d)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.IsDayEnabled=ngcal_IsDayEnabled;
      
  this.DoUpdate = ngcal_DoUpdate;

  this.need_update=false;
  this.update_cnt=0;
  /*  Function: BeginUpdate
   *  Prevents the updating of the calendar until the <EndUpdate> method is called.     
   *   
   *  Syntax:
   *    void *BeginUpdate* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   *    
   *  See also: 
   *    <EndUpdate>         
   */
  this.BeginUpdate = ngcal_BeginUpdate;
  /*  Function: EndUpdate
   *  Performs the repaints deferred by a call to <BeginUpdate>.     
   *   
   *  Syntax:
   *    void *EndUpdate* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   *       
   *  See also: 
   *    <BeginUpdate>         
   */
  this.EndUpdate = ngcal_EndUpdate;
  /*  Function: UpdateCalendar
   *  Repaints the calendar page. Faster then updating whole control by calling
   *  Update() method.      
   *   
   *  Syntax:
   *    void *UpdateCalendar* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.UpdateCalendar = ngcal_UpdateCalendar;
  
  this.DoDropDown = ngcal_DoDropDown;
  this.DoMouseEnter = ngcal_DoMouseEnter;
  this.DoMouseLeave = ngcal_DoMouseLeave;
  
  /*
   *  Group: Events
   */
  /*
   *  Event: OnFormatDate
   */     
  this.OnFormatDate = null;
  /*
   *  Event: OnParseDate
   */     
  this.OnParseDate = null;
  
  /*
   *  Event: OnDayClick
   */     
  this.OnDayClick = null;  
  /*
   *  Event: OnIsDayEnabled
   */     
  this.OnIsDayEnabled = null;
  /*
   *  Event: OnSelectChanged
   */     
  this.OnSelectChanged = null;
  
  /*
   *  Event: OnGetWeekDayImg
   */     
  this.OnGetWeekDayImg = null;
  /*
   *  Event: OnGetWeekDayText
   */     
  this.OnGetWeekDayText = null;
  /*
   *  Event: OnGetWeekDayAlt
   */     
  this.OnGetWeekDayAlt = null;

  /*
   *  Event: OnGetDayImg
   */     
  this.OnGetDayImg = null;
  /*
   *  Event: OnGetDayText
   */     
  this.OnGetDayText = null;
  /*
   *  Event: OnGetDayAlt
   */     
  this.OnGetDayAlt = null;

  /*
   *  Event: OnMouseEnter
   */     
  this.OnMouseEnter = null;
  /*
   *  Event: OnMouseLeave
   */     
  this.OnMouseLeave = null;
 
  ngControlCreated(this);
}

// --- Controls Registration ---------------------------------------------------

/*  Class: ngEditDate
 *  Standard edit date control (based on <ngEdit>).
 */
/*<>*/
function Create_ngEditDate(def, ref, parent)
{
  var c=ngCreateControlAsType(def, 'ngEdit', ref, parent);
  if(!c) return;
  /*
   *  Group: Properties
   */
  /*  Variable: DateFormat
   *  ...
   *  Type: string
   */
  c.DateFormat = '';        
  /*
   *  Group: Methods
   */
  /*  Function: FormatDate
   *  Formats date to string.
   *   
   *  Syntax:
   *    string *FormatDate* (date d)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.FormatDate = function(d)
  {
    if(this.OnFormatDate) return this.OnFormatDate(this, d);
    return ng_FormatDate(d,this.DateFormat);
  }        
  /*  Function: ParseDate
   *  Parses date from string.
   *   
   *  Syntax:
   *    date *ParseDate* (string s)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.ParseDate = function(d)
  {
    if(this.OnParseDate) return this.OnParseDate(this, d);
    return ng_ParseDate(d,this.DateFormat);
  }
  /*  Function: GetDate
   *  Gets edited date.
   *   
   *  Syntax:
   *    date *GetDate* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -
   */              
  c.GetDate = function()
  {
    return this.ParseDate(this.GetText());
  }
  /*  Function: SetDate
   *  Sets edited date.
   *   
   *  Syntax:
   *    void *SetDate* (date d)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -
   */              
  c.SetDate = function(d)
  {
    this.SetText(this.FormatDate(d));
  }                 
  /*
   *  Group: Events
   */
  /*
   *  Event: OnFormatDate
   */     
  c.OnFormatDate = null;
  /*
   *  Event: OnParseDate
   */     
  c.OnParseDate = null;
  return c;
}

// --- Controls Registration ---------------------------------------------------

/*  Class: ngEditTime
 *  Standard edit date control (based on <ngEdit>).
 */
/*<>*/
function Create_ngEditTime(def, ref, parent)
{
  var c=ngCreateControlAsType(def, 'ngEdit', ref, parent);
  if(!c) return;
  /*
   *  Group: Properties
   */
  /*  Variable: TimeFormat
   *  ...
   *  Type: string
   */
  c.TimeFormat = '';        
  /*
   *  Group: Methods
   */
  /*  Function: FormatTime
   *  Formats date to string.
   *   
   *  Syntax:
   *    string *FormatTime* (date d)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.FormatTime = function(d)
  {
    if(this.OnFormatTime) return this.OnFormatTime(this, d);
    return ng_FormatTime(d,this.TimeFormat);
  }        
  /*  Function: ParseTime
   *  Parses date from string.
   *   
   *  Syntax:
   *    date *ParseTime (string s)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.ParseTime = function(d)
  {
    if(this.OnParseTime) return this.OnParseTime(this, d);
    return ng_ParseTime(d,this.DateFormat);
  }
  /*  Function: GetDate
   *  Gets edited date.
   *   
   *  Syntax:
   *    date *GetDate* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -
   */              
  c.GetDate = function()
  {
    return this.ParseTime(this.GetText());
  }
  /*  Function: SetDate
   *  Sets edited date.
   *   
   *  Syntax:
   *    void *SetDate* (date d)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -
   */              
  c.SetDate = function(d)
  {
    this.SetText(this.FormatTime(d));
  }                 
  /*
   *  Group: Events
   */
  /*
   *  Event: OnFormatDate
   */     
  c.OnFormatTime = null;
  /*
   *  Event: OnParseDate
   */     
  c.OnParseTime = null;
  return c;
}

if(typeof ngUserControls === 'undefined') ngUserControls = new Array();
ngUserControls['calendar'] = {

  OnInit: function() {
    ngRegisterControlType('ngCalendar', function() { return new ngCalendar; });
    ngRegisterControlType('ngEditDate', Create_ngEditDate);
    ngRegisterControlType('ngEditTime', Create_ngEditTime);
  }
};

/*!
 * Controls.js - clipboard.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */



function ngclip_SetTextNone(text)
{
  // not supported
  return false;
}

function ngclip_SetTextIE(text)
{
  try { 
    window.clipboardData.setData('Text',text);
    return true;
  } catch(e) { }
  return false;  
}

function ngClipboard()
{
  
  if(ngIExplorer)
  {
    this.SetText = ngclip_SetTextIE;
    this.IsSupported = true;
  }
  else
  {
    this.IsSupported = false;
    this.SetText = ngclip_SetTextNone;
  }  
}

if(typeof ngUserControls === 'undefined') ngUserControls = new Array();
ngUserControls['clipboard'] = {
  OnInit: function() {
    if((typeof ngApp === 'object')&&(ngApp)) ngApp.Clipboard = new ngClipboard;
  }
};

/*!
 * Controls.js - controls.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */



/** 
 *  Variable: ngControlsVer
 *  Main version of the Controls framework.
 */  
var ngControlsVer    = 5;
/** 
 *  Variable: ngControlsSubVer
 *  Subversion of the Controls framework.
 */  
var ngControlsSubVer = 0;
/** 
 *  Variable: ngControlsAPIVersion
 *  Version of the Controls framework evaluated as string.
 */  
var ngControlsVersion = ngControlsVer+'.'+ngControlsSubVer;
/** 
 *  Variable: ngControlsAPICopyright
 *  Controls framework copyright information.
 */  
var ngControlsCopyright = 'Copyright &copy 2008-2014 Position s.r.o.';

/** 
 *  Variable: ngApp
 *  Reference to running <ngApplication> object.
 */  
var ngApp = null;
/** 
 *  Variable: ngc_Lang
 *  Application languages resource strings/objects.
 */  
/*<>*/ 
if(typeof ngc_Lang === 'undefined') ngc_Lang=new Array();
if(typeof ngc_Lang['en'] === 'undefined') ngc_Lang['en']=new Array();
ngc_Lang['en']['ngAppOldControlsVersion']='Application requires newer version of Controls.js!\nRequired %s.%s, used %s.%s.\n\nApplication terminated!';

/** 
 *  Variable: ngIE6AlignFix
 *  If TRUE, the controls API fixes right align property in IE6. Turn off
 *  if you don't care about pixels precision and prefer slightly faster rendering.   
 *  
 *  Default value: *true*
 */  
var ngIE6AlignFix = true;

/**
 *  Function: ngLang
 *  Defines resource string/object.
 *  
 *  Syntax: *ngLang* (string id, mixed data [,string lng])
 *  
 *  Returns: 
 *  -       
 */
function ngLang(id,data,lng)
{
  if(typeof id==='undefined') return;
  if(typeof lng === 'undefined') lng=ng_cur_lng;
  lng=''+lng;
  if(lng=='') return;
  if(lng=='cs') lng='cz';
  if(typeof ngc_Lang      === 'undefined') ngc_Lang=new Array();
  if(typeof ngc_Lang[lng] === 'undefined') ngc_Lang[lng]=new Array();
  ngc_Lang[lng][id]=data;
}

var ng_cur_lng = 'en';
var ng_cur_lng_stack = new Array();

/**
 *  Function: ngBeginLang
 *  Begins block of locale definition with id lngid.
 *  
 *  Syntax: *ngLang* (string lngid)
 *  
 *  Returns: 
 *  -       
 */
function ngBeginLang(lng)
{
  ng_cur_lng_stack.push(ng_cur_lng);
  ng_cur_lng=lng;
}

/**
 *  Function: ngBeginLang
 *  End block of locale definition.
 *  
 *  Syntax: *ngLang* (string lngid)
 *  
 *  Returns: 
 *  Actual locale id.       
 */
function ngEndLang()
{
  if(ng_cur_lng_stack.length>0) ng_cur_lng=ng_cur_lng_stack.pop();
  return ng_cur_lng;
}

/**
 *  Function: ngTxt
 *  Gets locale text.
 *  
 *  Syntax: string *ngTxt* (string id [, mixed defaultvalue])
 *  
 *  Returns: 
 *  Locale text.         
 */
function ngTxt(t, defval)
{
  var lang=((typeof ngApp === 'object') && ngApp ? ngApp.Lang : 'en'); 

  function gettxt(def,t)
  {
    var l=def[lang];
    var txt=(typeof l === 'undefined' ? l : l[t]);
    if((typeof txt==='undefined')&&(lang!='en')) 
    {
      l=def['en'];
      txt=(typeof l === 'undefined' ? l : l[t]);
    }
    return txt;
  }
  var txt;
  if((typeof ngDevice !== 'undefined')&&(typeof ngc_Lang['DEV_'+ngDevice] !== 'undefined'))
  {
    txt=gettxt(ngc_Lang['DEV_'+ngDevice],t);
    if(typeof txt==='undefined') txt=gettxt(ngc_Lang,t);     
  }  
  else txt=gettxt(ngc_Lang,t);
  
  if(typeof txt==='undefined') 
  {
    txt=defval;
    if(typeof txt==='undefined') txt=t;
  }
  return txt;
}

/**
 *  Function: ngRes
 *  Gets locale resource object.
 *  
 *  Syntax: object *ngRes* (string id)
 *  
 *  Returns: 
 *  Locale resource object.         
 */
function ngRes(rid)
{
  var lang=((typeof ngApp === 'object') && ngApp ? ngApp.Lang : 'en'); 

  function getres(def,rid)
  {
    var le=def['en'];
    var eres=(typeof le === 'undefined' ? le : le[rid]);  
    if(lang=='en') return ng_CopyVar(eres); 

    var l=def[lang];
    var res=(typeof l === 'undefined' ? l : l[rid]);
    if(typeof res === 'undefined') return ng_CopyVar(eres);
    if(typeof eres === 'undefined') return ng_CopyVar(res);

    var r=ng_CopyVar(res);
    ng_MergeDef(r,eres,true);
    return r;  
  }

  if((typeof ngDevice !== 'undefined')&&(typeof ngc_Lang['DEV_'+ngDevice] !== 'undefined'))
  {
    var dres=getres(ngc_Lang['DEV_'+ngDevice],rid);
    if(typeof dres !== 'undefined') return dres;
  }
  return getres(ngc_Lang,rid);   
}

// --- Functions ---------------------------------------------------------------

function ng_Expand2Id(eid)
{
  var id1='';
  var id2='';
  if(typeof eid === 'string')
  {
    var i=eid.indexOf('_');
    if(i>=0)
    {
      id1=eid.substring(0,i);
      id2=eid.substring(i+1,eid.length);
    }
  }
  return {id1: id1, id2: id2};
}

function ng_OutlineHTML(t,c)
{
  c=ngVal(c,'');
  if(c=='') return t;
  
  var html=new ngStringBuilder;
  for(var i=0;i<3;i++)
    for(var j=0;j<3;j++)
    {
      if((i!=1)||(j!=1)) 
      {
        html.append("<span style=\"position: absolute; left:"+(i-1)+"px; top:"+(j-1)+"px; color: "+c+"\">");
        html.append(t);
        html.append("</span>")
      }
    }
  html.append("<span style=\"position: absolute; left:0px; top:0px;\">");
  html.append(t);
  html.append("</span><span style=\"visibility:hidden;margin-left:2px;\">"+t+"</span>");
  return html.toString();
}

function ng_Align(o)
{
  var ret=0,aret=0;
  var o,l,t,r,b;

  if(typeof o==='string') o=document.getElementById(o);
  if(!o) return 0;
  l=o.getAttribute('FL');
  r=o.getAttribute('FR');
  t=o.getAttribute('FT');
  b=o.getAttribute('FB');
  if((!ng_nullAttr(l))&&(!ng_nullAttr(r))) ret|=4;
  else
  {
    if(!ng_nullAttr(r)) ret|=1;
    else
    {
      if((o.style.left!='')&&(o.style.right!='')) aret|=4;
      else  if(o.style.right!='') aret|=1;
    }
  }

  if((!ng_nullAttr(t))&&(!ng_nullAttr(b))) ret|=8;
  else
  {
    if(!ng_nullAttr(b)) ret|=2;
    else
    {
      if((o.style.top!='')&&(o.style.bottom!='')) aret|=8;
      else  if(o.style.bottom!='') aret|=2;
    }
  }
  
  if(ret)
  {
    var po=o.parentNode;
    if(ret & 5)
    {
      var pw,w;
      if((po)&&(po!=document.body)) pw=ng_ClientWidth(po);
      else pw=ng_WindowWidth();
      if(ret & 4)
      {
        w=(pw-r-l);
        if(w<0) w=0;
        ng_SetOuterWidth(o,w)
      }
      else if(ret & 1) 
      {
        w=ng_OuterWidth(o);
        o.style.pixelLeft=(pw-r-w);
      }
    } 
    
    if(ret & 10)
    {
      var ph,h;
      if((po)&&(po!=document.body)) ph=ng_ClientHeight(po);
      else ph=ng_WindowHeight();
      if(ret & 8)
      {
        h=(ph-b-t);
        if(h<0) h=0;
        ng_SetOuterHeight(o,h);
      }
      else if(ret & 2) 
      {
        h=ng_OuterHeight(o);
        o.style.pixelTop=(ph-b-h);
      }
    }
  } 
  return ret|aret;
}

function ng_SetOpacity(o,v)
{
  if(typeof o==='string') o=document.getElementById(o);
  if(!o) return;
  if(v<0) v=0;
  if(v>1) v=1;
  o.style.opacity=v;
  o.style.filter='alpha(opacity=' + v*100 + ')';
}

function ng_CanSelectElm(e)
{
  if((e)&&(e.style.visibility!=='hidden')&&(e.style.display!=='none')&&(!e.disabled)) 
  {
    switch(e.nodeName)
    {
      case 'INPUT':
      case 'TEXTAREA':
        return true;
    }
  }
  return false;
}

function ng_CanFocusElm(e)
{
  if((e)&&(e.style.visibility!=='hidden')&&(e.style.display!=='none')&&(!e.disabled)) 
  {
    if((ngIExplorer)&&(e.attributes.tabIndex)&&(e.attributes.tabIndex.specified)) return true; 

    switch(e.nodeName)
    {
      case 'A':
      case 'AREA':
      //case 'BODY': // IE only :( 
      case 'BUTTON':
      case 'FRAME':
      case 'IFRAME':
      // case 'IMG': // ??? MS says it is
      case 'INPUT':
      case 'OBJECT':
      case 'SELECT':
      case 'TEXTAREA':
        return true;
    }
    if(e.getAttribute("tabIndex")!==null)
      return true;
  }
  return false;
}

// --- Images ------------------------------------------------------------------

var ng_CreateImageHTML = function(id,url,left,top,width, height, style, attr, innerHTML) 
{
  if(ngIExplorer6) ng_CreateImageHTML=ng_CreateImageHTMLIE6;
  else             ng_CreateImageHTML=ng_CreateImageHTMLNotIE6;
  return ng_CreateImageHTML(id,url,left,top,width, height, style, attr, innerHTML);
}

function ng_CreateImageHTMLNotIE6(id,url,left,top,width, height, style, attr, innerHTML)
{
  if(typeof attr==='undefined') attr='';
  if(typeof style==='undefined') style='';
  if(typeof innerHTML==='undefined') innerHTML='';
  if(url!='')
    style = "background: transparent url('"+url+"') no-repeat scroll "+(-left)+"px "+(-top)+(top==0 ? "pt" : "px")+";" + style;
  else 
    if(ngIExplorer) style = "background: transparent url('"+ngEmptyURL+"');" + style;
  return '<span id="'+id+'" unselectable="on" style="font-size:0;line-height:0;overflow:hidden;width:'+width+'px;height:'+height+'px;'+style+'" '+attr+'>'+innerHTML+'</span>';
}

function ng_CreateImageHTMLIE6(id,url,left,top,width, height, style, attr, innerHTML)
{
  if(typeof attr==='undefined') attr='';
  if(typeof style==='undefined') style='';
  if(typeof innerHTML==='undefined') innerHTML='';
  if(url!='')
    innerHTML = '<span id="'+id+'_png" unselectable="on" style="position:absolute;font-size:0;line-height:0;left:'+(-left)+'px;top:'+(-top)+'px;width:'+(left+width)+'px;height:'+(top+height)+'px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+url+'\');"></span>'+innerHTML; 
  else 
    style = "background: transparent url('"+ngEmptyURL+"');" + style;
  return '<span id="'+id+'" unselectable="on" style="font-size:0;line-height:0;overflow:hidden;width:'+width+'px;height:'+height+'px;'+style+'" '+attr+'>'+innerHTML+'</span>';
}

function ng_CreateImageHTMLSW(id,l,w,url,left,top,width,height, style, attr, innerHTML)
{
  if(typeof attr==='undefined') attr='';
  if(typeof style==='undefined') style='';
  if(typeof innerHTML==='undefined') innerHTML='';
  if((typeof width === 'undefined')||(url==''))
  {
    if((ngIExplorer6)&&(url!='')) 
    {
      var img=ng_PreloadImage(url);
      if(!img) return '';
      width=img.width;
    }
    else
    {
      if(url!='')
        style = "background: transparent url('"+url+"') repeat-x scroll "+(-left)+"px "+(-top)+(top==0 ? "pt" : "px")+";" + style;
      else 
        if(ngIExplorer) style = "background: transparent url('"+ngEmptyURL+"');" + style;
      return '<span id="'+id+'_1" unselectable="on" style="font-size:0;line-height:0;overflow:hidden;width:'+w+'px;height:'+height+'px;'+style+'left:'+l+'px;" '+attr+'>'+innerHTML+'</span>';
    }
  }
  if(width<=0) return '';
  var html=new ngStringBuilder;
  var i=1;
  while(w>0)
  {
    if(w<width) width=w;
    html.append(ng_CreateImageHTML(id+'_'+i,url,left,top,width,height,style+'left:'+l+'px;',attr,innerHTML))
    w-=width;
    l+=width;    
    i++;
  }
  return html.toString();
}

function ng_CreateImageHTMLSH(id,t,h,url,left,top,width,height, style, attr,innerHTML)
{
  if(typeof attr==='undefined') attr='';
  if(typeof style==='undefined') style='';
  if(typeof innerHTML==='undefined') innerHTML='';
  if((typeof height==='undefined')||(url==''))
  {
    if((ngIExplorer6)&&(url!='')) 
    {
      var img=ng_PreloadImage(url);
      if(!img) return '';
      height=img.height;
    }
    else
    {
      if(url!='')
        style = "background: transparent url('"+url+"') repeat-y scroll "+(-left)+"px "+(-top)+(top==0 ? "pt" : "px")+";" + style;
      else 
        if(ngIExplorer) style = "background: transparent url('"+ngEmptyURL+"');" + style;
      return '<span id="'+id+'_1" unselectable="on" style="font-size:0;line-height:0;overflow:hidden;width:'+width+'px;height:'+h+'px;'+style+'top:'+t+'px" '+attr+'>'+innerHTML+'</span>';
    }
  }
  if(height<=0) return '';
  var html=new ngStringBuilder;
  var i=1;
  while(h>0)
  {
    if(h<height) height=h;
    html.append(ng_CreateImageHTML(id+'_'+i,url,left,top,width,height,style+'top:'+t+'px;',attr,innerHTML))
    h-=height;
    t+=height;    
    i++;
  }
  return html.toString();
}

function ng_SwapImageHTML(id, left, top)
{
  var o;
  if((typeof left==='undefined')||(typeof top==='undefined')) return;
  if(ngIExplorer6)
  {
    o=document.getElementById(id+'_png');
    if(o)
    {        
      o.style.pixelLeft=-left;
      o.style.pixelTop=-top;
      return;
    }
  }     
  o=document.getElementById(id);
  if(o) o.style.backgroundPosition=(-left)+"px "+(-top)+(top==0 ? "pt" : "px");
}

function ng_CreateBoxHTML(id, url, left, top, width, height, innersize, images, style, innerHTML)
{
  var img;
  var html=new ngStringBuilder;
  
  var noimg = {L:0,T:0,W:0,H:0};
  style='position:absolute;'+style;
  var dp=new Object;
  dp.Left =(typeof images.Left === 'undefined' ? noimg : images.Left);
  dp.Top =(typeof images.Top === 'undefined' ? noimg : images.Top);
  dp.Right =(typeof images.Right === 'undefined' ? noimg : images.Right);
  dp.Bottom =(typeof images.Bottom === 'undefined' ? noimg : images.Bottom);
  dp.LeftTop =(typeof images.LeftTop === 'undefined' ? noimg : images.LeftTop);
  dp.RightTop =(typeof images.RightTop === 'undefined' ? noimg : images.RightTop);
  dp.LeftBottom =(typeof images.LeftBottom === 'undefined' ? noimg : images.LeftBottom);
  dp.RightBottom =(typeof images.RightBottom === 'undefined' ? noimg : images.RightBottom);

  if(innersize)
  {
    width+=dp.Left.W;
    width+=dp.Right.W;
    height+=dp.Top.H;
    height+=dp.Bottom.H;
  }
  img=dp.LeftTop;
  if(img.W) html.append(ng_CreateImageHTML(id+'_LT', ngVal(img.Src,url), img.L,img.T,img.W,img.H, style+"left:"+left+"px;top: "+top+"px;"));
  
  img=dp.Top;
  if(img.W) html.append(ng_CreateImageHTMLSW(id+'_T', dp.LeftTop.W,(width-dp.LeftTop.W-dp.RightTop.W), ngVal(img.Src,url), img.L,img.T,img.W,img.H, style+"top: "+top+"px;"));

  img=dp.RightTop;
  if(img.W) html.append(ng_CreateImageHTML(id+'_RT', ngVal(img.Src,url), img.L,img.T,img.W,img.H, style+"left:"+(left+width-img.W)+"px;top: "+top+"px;"));

  img=dp.Left;
  if(img.W) html.append(ng_CreateImageHTMLSH(id+'_L',top+(dp.LeftTop.H ? dp.LeftTop.H : dp.Top.H),(height-(dp.LeftTop.H ? dp.LeftTop.H : dp.Top.H)-(dp.LeftBottom.H ? dp.LeftBottom.H : dp.Bottom.H)), ngVal(img.Src,url), img.L,img.T,img.W,img.H, style+"left: "+left+"px;"));

  img=dp.Right;
  if(img.W) html.append(ng_CreateImageHTMLSH(id+'_R',top+(dp.RightTop.H ? dp.RightTop.H : dp.Top.H),(height-(dp.RightTop.H ? dp.RightTop.H : dp.Top.H)-(dp.RightBottom.H ? dp.RightBottom.H : dp.Bottom.H)), ngVal(img.Src,url), img.L,img.T,img.W,img.H, style+"left: "+(left+width-img.W)+"px;"));

  img=dp.LeftBottom;
  if(img.W) html.append(ng_CreateImageHTML(id+'_LB', ngVal(img.Src,url), img.L,img.T,img.W,img.H, style+"left:"+left+"px;top: "+(top+height-img.H)+"px;"));
  
  img=dp.Bottom;
  if(img.W) html.append(ng_CreateImageHTMLSW(id+'_B', dp.LeftBottom.W,(width-dp.LeftBottom.W-dp.RightBottom.W), ngVal(img.Src,url), img.L,img.T,img.W,img.H, style+"top: "+(top+height-img.H)+"px;")); 

  img=dp.RightBottom;
  if(img.W) html.append(ng_CreateImageHTML(id+'_RB', ngVal(img.Src,url), img.L,img.T,img.W,img.H, style+"left:"+(left+width-img.W)+"px;top: "+(top+height-img.H)+"px;"));
  
  if(typeof innerHTML !== 'undefined')
  {
    html.append('<div id="'+id+'_C" style="'+style+'overflow:auto; left:'+(left+dp.Left.W)+'px;top:'+(top+dp.Top.W)+'px;width:'+(width-dp.Left.W-dp.Right.W)+'px;height:'+(height-dp.Top.H-dp.Bottom.H)+'px;">');
    html.append(innerHTML);
    html.append('</div>');
  }  
  return html.toString();
}

var ssNone       = 0;
var ssDefault    = 1;
var ssAuto       = 2;
var ssBoth       = 3;
var ssHorizontal = 4;
var ssVertical   = 5;

function ng_SetScrollBars(o, v)
{
  if(o) 
    switch(v)
    {
      case ssNone:       o.style.overflow='hidden'; o.style.overflowX='hidden'; o.style.overflowY='hidden'; break;
      case ssAuto:       o.style.overflow='auto';   o.style.overflowX='auto';   o.style.overflowY='auto';   break;
      case ssBoth:       o.style.overflow='scroll'; o.style.overflowX='scroll'; o.style.overflowY='scroll'; break;
      case ssHorizontal: o.style.overflow='scroll'; o.style.overflowX='scroll'; o.style.overflowY='hidden'; break;  
      case ssVertical:   o.style.overflow='scroll'; o.style.overflowX='hidden'; o.style.overflowY='scroll'; break;
      case ssDefault:    o.style.overflow='visible'; o.style.overflowX='visible'; o.style.overflowY='visible'; break;
    }
}

function ng_GetScrollBars(o)
{
  var ox=ng_GetCurrentStyle(o,'overflow-x');
  var oy=ng_GetCurrentStyle(o,'overflow-y');
  if((ox=='')||(oy=='')) 
  {
    var of=ng_GetCurrentStyle(o,'overflow');
    if(of=='') of='hidden';
    if(ox=='') ox=of;
    if(oy=='') oy=of;
  }
  var sb=ssNone;
  if((ox=='auto')||(oy=='auto')) sb=ssAuto;
  else {
    if((ox=='scroll')&&(oy=='scroll')) sb=ssBoth;
    else {
      if((ox=='visible')&&(oy=='visible')) sb=ssDefault;
      else {          
        if(ox=='scroll') sb=ssHorizontal;
        else if(oy=='scroll') sb=ssVertical;
      }
    }          
  }
  return sb;
}

// --- Controls ----------------------------------------------------------------

var ngControlsIDs = new Array();
var ngControlImages = '';
var ngRegisteredControlTypes = new Array();
var ngMouseInControls = new Array();

/**
 *  Function: ngGetControlById
 *  Gets control object by ID.  
 * 
 *  Syntax:
 *    object *ngGetControlById* (string id [, string ctrltype])
 *     
 *  Parameters:
 *    id - control ID
 *    ctrltype - control type 
 *      
 *  Returns:
 *    Reference to control object.
 */  
function ngGetControlById(id, type)
{
  if(id=='') return null;
  var c=ngControlsIDs[id];
  if(!c) return null;
  if((typeof type !== 'undefined')&&(ngVal(c.CtrlType,-1)!=type)) return null;  
  return c;
}

/**
 *  Function: ngGetControlByElement
 *  Gets control object by DOM element.  
 * 
 *  Syntax:
 *    object *ngGetControlByElement* (mixed elm [, string ctrltype])
 *     
 *  Parameters:
 *    elm - DOM element or element id
 *    ctrltype - control type 
 *      
 *  Returns:
 *    Reference to element's parent control object.
 */  
function ngGetControlByElement(elm, type)
{
  if(typeof elm==='string') elm=document.getElementById(elm);
  if(!elm) return null;  
  var c,p=elm;
  while((p)&&(p!==document))
  {
    c=ngGetControlById(p.id, type);
    if(c) break;
    p=p.parentNode;
  }
  return c;
}

function ngRegisterControlType(type, def)
{
  if(typeof type!=='string') return;
  
  switch(typeof def)
  {
    case 'function':
      if(typeof ngRegisteredControlTypes[type] === 'function') {
        ngDEBUGWARN('Duplicated registration of component type "%s".',ngVal(type,''),def);
      }
      ngRegisteredControlTypes[type]=def;
      break;
    case 'object':
      if((typeof def.Type==='undefined')||(def.Type==type)) break;

      ngRegisterControlType(type, function(cdef,ref,parent) {
        var fdef=ng_CopyVar(def);
        var newtype=fdef.Type;
        delete fdef.Type;
        ng_MergeDef(cdef, fdef, true);
        return ngCreateControlAsType(cdef, newtype, ref, parent);
      });
      break;
    case 'string':
      ngRegisterControlType(type, function(cdef,ref,parent) {
        return ngCreateControlAsType(cdef, def, ref, parent);
      });
      break; 
  }
}

ngRegisterControlType('ngPanel', function() { return new ngPanel; });
ngRegisterControlType('ngText', function() { return new ngText; });
ngRegisterControlType('ngImage', function() { return new ngImage; });
ngRegisterControlType('ngImageMap', function() { return new ngImageMap; });
ngRegisterControlType('ngButton', function() { return new ngButton; });
ngRegisterControlType('ngGroup', function() { return new ngGroup; });
ngRegisterControlType('ngEdit', function() { return new ngEdit; });
ngRegisterControlType('ngMemo', function() { return new ngMemo; });
ngRegisterControlType('ngPages', function() { return new ngPages; });
ngRegisterControlType('ngToolBar', function() { return new ngToolBar; });
ngRegisterControlType('ngProgressBar', function() { return new ngProgressBar; });
ngRegisterControlType('ngWebBrowser', function() { return new ngWebBrowser; });
ngRegisterControlType('ngSysAction', function() { return new ngSysAction; });

// Derived controls
ngRegisterControlType('ngFrame', ngFrame_Create);
ngRegisterControlType('ngRadioButton', ngRadioCheckBox_Create);
ngRegisterControlType('ngCheckBox', ngRadioCheckBox_Create);
ngRegisterControlType('ngDropDownList', function(def, ref, parent) { return ngDropDown_Create(def, ref, parent, 'ngEdit', true); });
ngRegisterControlType('ngDropDown', function(def, ref, parent) { return ngDropDown_Create(def, ref, parent, 'ngEdit', false); });
ngRegisterControlType('ngEditNum', ngEditNum_Create);

// --- Control creation --------------------------------------------------------

var ngCtrlCnt=1;

function ngCreateControlId(baseid)
{
  var id='';
  baseid=ngVal(baseid,'');
  for(var i=0;i<100;i++)
  {
    id=baseid+ngCtrlCnt;
    ngCtrlCnt++;
    if(!ngGetControlById(id)) break;
  }
  return id;
}

var ngOnCreateControl = null;

function ngControlCreated(obj)
{
  if(ngOnCreateControl) ngOnCreateControl(obj);
}

// --- ngCreateControls --------------------------------------------------------

if(typeof ngUserControls === 'undefined') ngUserControls = new Array(); 

function ngUsrCtrlSetImages(obj, images)
{
  if((typeof obj !== 'object')||(!obj)) return;
  if(typeof obj._noMerge==='undefined') obj._noMerge=true;      
  if(typeof obj.Src==='undefined') obj.Src=images;
  for(var i in obj)
    if(typeof obj[i] === 'object') ngUsrCtrlSetImages(obj[i], images); 
}

function ngUsrCtrlSetImagesArray(obj, images)
{
  if((typeof obj !== 'object')||(!obj)) return;
  if(typeof obj._noMerge==='undefined') obj._noMerge=true;      
  if(typeof obj.Src==='undefined') obj.Src=images[0];
  else if(typeof obj.Src==='number') obj.Src=images[obj.Src];
  for(var i in obj)
    if(typeof obj[i] === 'object') ngUsrCtrlSetImagesArray(obj[i], images); 
}

function ngInitUserControls()
{
  if(typeof ngUserControls === 'undefined') return;
  var uc;
  for(var i in ngUserControls)
  {
    uc=ngUserControls[i];
    if(typeof uc === 'undefined') continue;
    if(typeof uc.OnInit === 'function') uc.OnInit();
    if((typeof uc.ControlImages === 'string')&&(ngControlImages!=uc.ControlImages)) 
    {
      uc.ControlImages=ng_URL(uc.ControlImages);
      ng_PreloadImage(uc.ControlImages);
      ngUsrCtrlSetImages(uc.Images, uc.ControlImages);
    }
    else if((typeof uc.ControlImages === 'object')&&(typeof uc.ControlImages.length === 'number')) 
    {
      for(var j=0;j<uc.ControlImages.length;j++)
      {
        uc.ControlImages[j]=ng_URL(uc.ControlImages[j]);
        if(ngControlImages!=uc.ControlImages[j]) ng_PreloadImage(uc.ControlImages[j]);
      }
      if(uc.ControlImages.length>0) ngUsrCtrlSetImagesArray(uc.Images, uc.ControlImages);
    }
  } 
}


/**
 *  Function: ng_MergeDef
 *  Merges two control definitions.
 *   
 *  Syntax:
 *    void *ng_MergeDef* (mixed dst, mixed def [, bool allowundefined=false, function callback])
 *    
 *  Parameters:
 *    dst - destination definition 
 *    def - definition to be merged
 *    allowundefined - if FALSE (default), undefined values in parameter var are ignored
 *    callback - optional callback function 
 *    
 *  Returns:
 *    - 
 */       
function ng_MergeDef(dst,def,allowundefined,callback)
{
  function merge_events(d,o,before)
  {
    var isdarr,isoarr,j;
    var isdfnc,isofnc;
    
    for(var i in o)
    {
      if((typeof d[i]==='undefined')||(d[i]===null)) { d[i]=o[i]; continue; }
      isdarr=ng_IsArrayVar(d[i]);
      isdfnc=(typeof d[i]==='function');
      if((isdarr)||(isdfnc))
      {
        isoarr=ng_IsArrayVar(o[i]);
        isofnc=(typeof o[i]==='function');
        if((isoarr)||(isofnc))
        {
          if(isdfnc) d[i]=[d[i]];
          if(isofnc)
          {
            if(!before) d[i].splice(0,0,o[i]);
            else d[i].push(o[i]);
          }
          else
          {
            if(!before)
            {
              for(j=0;j<o[i].length;j++)
                d[i].splice(j,0,o[i][j]);
            }
            else
            {
              for(j=0;j<o[i].length;j++)
                d[i].push(o[i][j]);
            }
          }
        }
      }      
    }
  }
  
  def=ng_CopyVar(def);
  if(!ngVal(allowundefined,false)) def=ng_CleanUndefined(def);
  ng_MergeVar(dst,def,true,function(d,o) {
    
    if((typeof callback === 'function')&&(!ngVal(callback(d,o),true))) return false;
    if(d._noMerge===true) return false;      
        
    if((typeof d.Events === 'object')&&(typeof o.Events === 'object')&&(d.Events)&&(o.Events))
    {
      merge_events(d.Events,o.Events,false);
      delete o.Events;
    }    
    if((typeof d.AfterEvents === 'object')&&(typeof o.AfterEvents === 'object')&&(d.AfterEvents)&&(o.AfterEvents))
    {
      merge_events(d.AfterEvents,o.AfterEvents,false);
      delete o.AfterEvents;
    }    
    if((typeof d.BeforeEvents === 'object')&&(typeof o.BeforeEvents === 'object')&&(d.BeforeEvents)&&(o.BeforeEvents))
    {
      merge_events(d.BeforeEvents,o.BeforeEvents,true);
      delete o.BeforeEvents;
    }    
    return true;  
  });
}

/**
 *  Function: ngCreateControl
 *  Creates control by definition. 
 * 
 *  Syntax:
 *    object *ngCreateControl* (object def, object ref, mixed parent)
 *     
 *  Parameters:
 *    def - control definition
 *    ref - reference owner (object where reference to control is stored)
 *    parent - string ID or object of parent DIV element 
 *      
 *  Returns:
 *    Reference to new control object.
 */  
function ngCreateControl(d,ref,parent)
{
  var j,c,uc;
  c=null; uc=null;

  d.CtrlInheritanceDepth=ngVal(d.CtrlInheritanceDepth,0)+1;
  try
  {
    for(j in ngUserControls)
    {
      uc=ngUserControls[j];
      if(typeof uc.OnCreateControl === 'function') c=uc.OnCreateControl(d, ref, parent);
      if(c) break;
    }
    if(!c)
    {
      var createfnc=ngRegisteredControlTypes[d.Type];
      if(typeof createfnc === 'function') c=createfnc(d, ref, parent);
    }
  }
  finally
  {
    d.CtrlInheritanceDepth--;  
  }
  if(!c) 
  {
    ngDEBUGWARN('Component type "%s" not found.',ngVal(d.Type,''),d);
    return null;
  }
  
  c.CtrlInheritedFrom[c.CtrlInheritedFrom.length] = d.Type;
  c.DefType = d.Type;
  c.Owner = ref;
  
  if(typeof d.Data !== 'undefined')
    for(var i in d.Data)
      c[i]=d.Data[i];

  if(!d.CtrlInheritanceDepth) // do it only on top component
  {  
    if(typeof d.BeforeEvents !== 'undefined')
      for(var i in d.BeforeEvents)
        c.AddEvent(d.BeforeEvents[i],i);
  
    if(typeof d.AfterEvents !== 'undefined') // alias to d.Events
      for(var i in d.AfterEvents)
        c.AddEvent(i,d.AfterEvents[i]);  

    if(typeof d.Events !== 'undefined')
      for(var i in d.Events)
        c.AddEvent(i,d.Events[i]);  

    if(typeof d.OverrideEvents !== 'undefined') // alias to d.Data
      for(var i in d.OverrideEvents)
        c[i]=d.OverrideEvents[i];

    // Handle string resources
    if((typeof c.ngText !== 'undefined')&&(ngVal(c.Text,'')==''))
      c.Text=ngTxt(c.ngText);
    if((typeof c.ngTextD !== 'undefined')&&(!c.OnGetText))
      c.OnGetText = ngc_GetResText;      
  
    if((typeof c.ngAlt !== 'undefined')&&(ngVal(c.Alt,'')==''))
      c.Alt=ngTxt(c.ngAlt);
    if((typeof c.ngAltD !== 'undefined')&&(!c.OnGetAlt))
      c.OnGetAlt = ngc_GetResAlt;
  
    if((typeof c.ngHint !== 'undefined')&&(ngVal(c.Hint,'')==''))
      c.Hint=ngTxt(c.ngHint);
    if((typeof c.ngHintD !== 'undefined')&&(!c.OnGetHint))
      c.OnGetHint = ngc_GetResHint;
  }

  if(uc)
    for(j in ngUserControls)
    {
      uc=ngUserControls[j];
      if(typeof uc.OnControlCreated === 'function') uc.OnControlCreated(d,c,ref);
    }
  return c;      
}

/**
 *  Function: ngCreateControlAsType
 *  Creates control by definition and type. Control type is passed as parameter
 *  and type in definition is ignored.     
 * 
 *  Syntax:
 *    object *ngCreateControlAsType* (object def, string ctrltype, object ref, mixed parent)
 *     
 *  Parameters:
 *    def - control definition
 *    ctrltype - control type 
 *    ref - reference owner (object where reference to control is stored)
 *    parent - string ID or object of parent DIV element 
 *      
 *  Returns:
 *    Reference to new control object.
 */  
function ngCreateControlAsType(def,type, ref,parent)
{
  var oldtype = def.Type;
  def.Type = type;
   
  var ret = ngCreateControl(def,ref,parent);
  def.Type = oldtype;
  if(ret) ret.DefType=def.Type;
  return ret;
}

var ngCreateControlsOptions = null;
var ngCreateControlsLevel = 0;

function ngCreateControls(defs,ref,parent,options)
{
  var uc,i,j,c,d,oc,celm,parentCtrl=null;
  if(typeof ref === 'undefined') ref=new Object;
  if(typeof defs === 'undefined') return ref;
  if(typeof options === 'undefined') 
  {
    if(ngCreateControlsOptions) options = ngCreateControlsOptions;
    else options = new Object;
  }
  var oldoptions=ngCreateControlsOptions;
  ngCreateControlsOptions=options;
  try
  {  
    if(!options.CreatedControls) ng_SetByRef(options,'CreatedControls',new Array());
    ngCreateControlsLevel++;
    try
    {
      if(typeof parent === 'undefined') parent=ngApp.Elm();
      if(typeof parent === 'string') parentCtrl=ngGetControlById(parent);
      else
      {    
        if((typeof parent === 'object')&&(parent))
        {
          if(typeof parent.Elm === 'function')
          {
            parentCtrl=parent;
            parent=parent.Elm();
          }
          else if(ngVal(parent.id,'')!='') parentCtrl=ngGetControlById(parent.id);
        }  
      }    
      for(i in defs)
      {                            
        if((options.ModifyControls)&&(typeof options.ModifyControls[i]!=='undefined'))
        {
          d=options.ModifyControls[i];
          delete options.ModifyControls[i];
          if((typeof d !== 'object')||(!d)) continue;
    
          ng_MergeDef(d,defs[i]);
          defs[i]=d;
        }
        else 
        {
          d=defs[i];
          if((typeof d !== 'object')||(!d)) continue;
        }
        if(typeof parent !== 'undefined') d.parent=ngVal(d.parent,parent);
        if(d.OnCreating)
        {
          oc=d.OnCreating;
          delete d.OnCreating;
          if(!ngVal(oc(d,ref,parent,options),false)) continue;
        }
        if((options.OnCreating)&&(!ngVal(options.OnCreating(d,ref,parent,options),false))) continue;
        c=ngCreateControl(d,ref,parent);
        if((c)&&(i!=''))
        {
          ngAddChildControl(parentCtrl,c);
  
          var cinfo=new Object;
          cinfo.Control=c;
          cinfo.Options=null;
          cinfo.OnCreated=d.OnCreated;
          cinfo.Ref=ref;
          delete d.OnCreated;
          celm=c.Create(d, ref);
          d.OnCreated=cinfo.OnCreated;
    
          if((ngHASDEBUG())&&(typeof ref[i]!=='undefined')&&(ref[i]!==null)) 
          {
            ngDEBUGWARN('Reference "%s" was overwritten by %o. References: %o',i,c,ref);
          }
          ref[i]=c;
  
          cinfo.OnCreated=d.OnCreated;
          options.CreatedControls[options.CreatedControls.length]=cinfo;
  
          var prefs=ngVal(d.ParentReferences,true);
          if(!prefs)
          {
            var nref;
            if(typeof c.Controls !== 'undefined') nref=c.Controls;
            else
            {
              nref=new Object;
              c.Controls=nref;
            }
            nref.Owner=ngVal(nref.Owner, c);
            if(typeof nref.Dispose     !=='function') nref.Dispose     = function()                { ngDisposeControls(this); }
            if(typeof nref.AddControls !=='function') nref.AddControls = function(defs, newparent) { ngCreateControls(defs,this,ngVal(newparent, ng_EmptyVar(this.Owner) ? undefined : this.Owner.ID)); }
          }
          if(typeof d.Controls !== 'undefined')
          {
            var oldmodify=options.ModifyControls;
            if((!prefs)&&(options.ModifyControls)) delete options.ModifyControls; // reset modify controls
            try
            {
              if(typeof d.ModifyControls !== 'undefined')
              {
                ng_MergeDef(d.ModifyControls, options.ModifyControls, true);
                options.ModifyControls=d.ModifyControls;
              }   
              ngCreateControls(d.Controls,(prefs ? ref : nref),c.ID,options);
            }
            finally
            {
              if(cinfo.OnCreated) cinfo.Options = ng_CopyVar(options);
              if((!oldmodify)&&(ngHASDEBUG())&&(options.ModifyControls))
              {
                for(var q in options.ModifyControls)
                  ngDEBUGWARN('Component referenced by "%s" doesn\'t have an subcomponent "%s" which should be modified.',i,q,ref); 
              }
              options.ModifyControls=oldmodify;
            }
          }
          else if(cinfo.OnCreated) cinfo.Options = ng_CopyVar(options);  
        }
        else if(i!='') ngDEBUGWARN('Component referenced by "%s" was not created.',i,ref);
      }
    }
    catch(e)
    {
      ngDEBUGERROR(e);
    }
    ngCreateControlsLevel--;
    if(!ngCreateControlsLevel)
    {
      var cinfo,c;
      for(var i=0;i<options.CreatedControls.length;i++)
      {
        cinfo=options.CreatedControls[i];
        oc=cinfo.OnCreated;
        cinfo.OnCreated=null;
        if(oc) 
        {
          ngCreateControlsOptions=cinfo.Options;
          c=cinfo.Control;
          c.OnCreated=oc;
          oc(c,cinfo.Ref,cinfo.Options);
        }
        if(options.OnCreated) options.OnCreated(c,cinfo.Ref,cinfo.Options);
      }
    }
  }
  finally
  {
    ngCreateControlsOptions=oldoptions;
  }
  return ref;
}

function ngCloneRefs(ref,lref)
{
  var c;
  if(ngHASDEBUG())
  {
    for(var i in lref)
    {
      c=lref[i];
      c.Owner=ref;
      if((typeof ref[i]!=='undefined')&&(ref[i]!==null)) 
      {
        ngDEBUGWARN('Reference "%s" was overwritten by %o. References: %o',i,c,ref);
      }
      ref[i]=c;
    }
  }
  else
  {
    for(var i in lref)
    {
      c=lref[i];
      c.Owner=ref;
      ref[i]=c;
    }
  }
}

function ngUpdateControls(ref)
{
  if(typeof ref === 'undefined') return;
  var c,p;
  var upd_id=new Array();
  var upd=new Array();
  for(var i in ref)
  {
    c=ref[i];
    if(c)
    {
      upd[upd.length]=c;
      upd_id[c.ID]=true;
    }
  }
  for(var i=0;i<upd.length;i++)
  {
    c=upd[i];
    p=c.ParentControl;
    while(p)
    {
      if(upd_id[p.ID]) break;
      p=p.ParentControl;
    }
    if((!p)&&(typeof c.Update==='function')) c.Update(true); 
  }
}

function ngReleaseControls(ref)
{
  if(typeof ref === 'undefined') return;
  var c;
  for(var i in ref)
  {
    c=ref[i];
    if((c)&&(typeof c.Release==='function')) c.Release();
  }
}

function ngDisposeControls(ref)
{
  if(typeof ref === 'undefined') return;
  var c;
  for(var i in ref)
  {
    c=ref[i];
    if((c)&&(typeof c === 'object')&&(i!='Owner')&&(i!='Parent'))
    {
      if(typeof c.Dispose==='function') c.Dispose();
      try {
        delete ref[i];
      }
      catch(e) { }
    }
  }
}

function ngCreateControlHTML(props)
{
  if(typeof props==='undefined') props=new Object;
  if(typeof props==='string') 
  {
    var np=new Object;
    np.id=props;
    props=np; 
  }
  var id=ngVal(props.id,'');

  if(id=='') id=ngCreateControlId(props.Type);
  
  var left=props.L;
  var top=props.T;
  var right=props.R;
  var bottom=props.B;

  var width=props.W;
  var height=props.H;
  if(typeof left === 'number') left+='px';
  if(typeof right === 'number') right+='px';
  if(typeof top === 'number') top+='px';
  if(typeof bottom === 'number') bottom+='px';
  if(typeof width === 'number') width+='px';
  if(typeof height === 'number') height+='px';
  
  var attrs='';
  var html='<DIV id="'+id+'"'; 

  if(typeof props.className !== 'undefined') html+=' class="'+props.className+'"';
  
  html+=' style="position: absolute; display:none;';
  if(typeof top !== 'undefined') html+='top: '+top+';';
  if(typeof left !== 'undefined') html+='left: '+left+';';
  if(typeof width !== 'undefined') html+='width: '+width+';';
  if(typeof height !== 'undefined') html+='height: '+height+';';
  
  if((typeof props.B !== 'undefined')||(typeof props.R !== 'undefined')) 
  {
    if(ngIExplorer6)
    {
      var alignfix=ngVal(props.IE6AlignFix, ngIE6AlignFix);
      if((alignfix)||((typeof props.T !== 'undefined')&&(typeof props.B !== 'undefined')))
      {          
        if(typeof props.T !== 'undefined') attrs+='FT="'+props.T+'" '; 
        if(typeof props.B !== 'undefined') attrs+='FB="'+props.B+'" '; 
      }
      else
      {
        if(typeof bottom !== 'undefined') html+='bottom: '+bottom+';';
      }
       
      if((alignfix)||((typeof props.L !== 'undefined')&&(typeof props.R !== 'undefined')))
      {          
        if(typeof props.R !== 'undefined') attrs+='FR="'+props.R+'" ';
        if(typeof props.L !== 'undefined') attrs+='FL="'+props.L+'" ';
      }
      else
      {
        if(typeof right !== 'undefined') html+='right: '+right+';';
      }
    }
    else
    {
      if(typeof bottom !== 'undefined') html+='bottom: '+bottom+';';
      if(typeof right !== 'undefined') html+='right: '+right+';';
    }
  }
  html+=ngVal(props.style,'')+'" '+attrs+ngVal(props.attrs,'')+'>';
  if(typeof props.innerHTML !== 'undefined') html+=props.innerHTML;
  html+='</DIV>';
  return html;
}

// --- ngControl (abstract) ----------------------------------------------------
 
function ngc_Elm()
{
  return document.getElementById(this.ID);
}

function ngc_CtrlInheritsFrom(type)
{
  if(typeof this.CtrlInheritedFrom !== 'undefined') 
    for(var i=0;i<this.CtrlInheritedFrom.length;i++)
      if(this.CtrlInheritedFrom[i]==type) return true;
  return false;  
}

function ngc_Create(props, ref)
{
  if(typeof props==='undefined') props=new Object;
  var parent=props.parent;
  var id=ngVal(props.id,'');

  if((parent)&&(typeof parent === 'string')) parent=document.getElementById(parent);
  if(!parent) return null;

  if(id=='') id=ngCreateControlId(props.Type);

  var f = document.getElementById(id);  
  var nd = f;
  if(!nd) 
  {
    if(props.OnCreateHTMLElement) 
    {
      nd=props.OnCreateHTMLElement(props,ref,this);
      if(!nd) return null;
    } 
    else nd=document.createElement('div');
    nd.id=id;
    nd.style.display='none';          
  }
  else
  {
    p=f.getAttribute('FT'); if(!ng_nullAttr(p)) { this.Bounds.T=p; }
    else this.Bounds.T=ng_GetStylePx(f.style.top);
    p=f.getAttribute('FB'); if(!ng_nullAttr(p)) { this.Bounds.B=p; }
    else this.Bounds.B=ng_GetStylePx(f.style.bottom);
    p=f.getAttribute('FL'); if(!ng_nullAttr(p)) { this.Bounds.L=p; }
    else this.Bounds.L=ng_GetStylePx(f.style.left);
    p=f.getAttribute('FR'); if(!ng_nullAttr(p)) { this.Bounds.R=p; }
    else this.Bounds.R=ng_GetStylePx(f.style.right);

    if((ngVal(this.Bounds.L,'') == '')||(ngVal(this.Bounds.R,'') == ''))
    { this.Bounds.W=ng_StyleWidth(f); }
    if((ngVal(this.Bounds.T,'') == '')||(ngVal(this.Bounds.B,'') == ''))
    { this.Bounds.H=ng_StyleHeight(f); }
    
    ng_SetInnerHTML(f,'');
  }
  nd.style.position='absolute';
  if(typeof props.className !== 'undefined') nd.className=props.className;
  
  var sb=ngVal(props.ScrollBars,this.ScrollBars);
  ng_SetScrollBars(nd, ngVal(sb, ssNone));
  this.ScrollBars=sb;   
  
  if(typeof props.L !== 'undefined') this.Bounds.L=props.L;
  if(typeof props.T !== 'undefined') this.Bounds.T=props.T;
  if(typeof props.R !== 'undefined') this.Bounds.R=props.R;
  if(typeof props.B !== 'undefined') this.Bounds.B=props.B;
  if(typeof props.W !== 'undefined') this.Bounds.W=props.W;
  if(typeof props.H !== 'undefined') this.Bounds.H=props.H;
  
  if(typeof props.innerHTML !== 'undefined') ng_SetInnerHTML(nd,props.innerHTML);
  if(typeof props.Opacity !== 'undefined') ng_SetOpacity(nd,props.Opacity);
  if(typeof props.style !== 'undefined')
  {
    for(var i in props.style) 
      nd.style[i]=props.style[i]; 
  }
  
  if(!f) parent.appendChild(nd);

  if(id!='') ngControlsIDs[id]=this;
  if(this.Visible) {
    if((this.IsPopup===true)&&(!ngc_ActivatePopup(this))) this.Visible=false;
  }
  else ngc_DeactivatePopup(this);
  this.Attach(nd);
  this.SetBounds();
  if(this.DoCreate) this.DoCreate(props, ref, nd,parent);
  
  if(props.OnCreated) props.OnCreated(this, ref);
  return nd;
}

function ngc_SetBounds(props)
{
  var changed=false;
  if(typeof props!=='undefined') 
  {
    if(typeof this.Bounds === 'undefined') this.Bounds=new Object;
    for(var i in props)
    {
      switch(i)
      {
        case 'L':
        case 'T':
        case 'R':
        case 'B':
        case 'W':
        case 'H':
          if((this.Bounds[i]!=props[i])||(typeof this.Bounds[i]!==typeof props[i])) { this.Bounds[i]=props[i]; changed=true; } 
          break;
        case 'IE6AlignFix':
          if(this.IE6AlignFix!=props.IE6AlignFix) { this.IE6AlignFix=props.IE6AlignFix; if(ngIExplorer6) changed=true; }
          break;
      }
    }
  }
  else changed=true;
  if(changed)
  {
    var o = this.Elm();
    if(o) 
    {
      props=this.Bounds;
      if(typeof props==='undefined') return changed;
      props.IE6AlignFix=this.IE6AlignFix;
      ng_SetBounds(o, props);
      delete props.IE6AlignFix;
    }
  }
  return changed;  
}

function ngc_SetScrollBars(v)
{
  this.ScrollBars=v;
  ng_SetScrollBars(this.Elm(),v);
}

function ngc_SetPopup(p)
{  
  if(this.IsPopup!=p)
  {
    if(this.Visible) 
    {
      if(p) ngc_ActivatePopup(this);
      else  ngc_DeactivatePopup(this);
    }
    this.IsPopup=p;
  }
}

function ngc_SetOpacity(v)
{
  ng_SetOpacity(this.Elm(),v);
}

function ngc_Attach(o)
{
  var id;
  if(typeof o === 'undefined') o=this.ID;
  if(typeof o === 'string') {
    id=o;
    o=document.getElementById(id);
  }
  else id=o.id;
  var oid=this.ID;
  if(id!=this.ID)
  {
    if(this.ID!='') delete ngControlsIDs[this.ID];
    if(id!='') ngControlsIDs[id]=this;
    this.ID=id; 
  }
  if(o) 
  {
    if(o.className!='') 
    {
      var bcls=o.className;  
      var bi=bcls.indexOf(' ');
      if(bi>=0) bcls=bcls.substr(0,bi);  
      this.BaseClassName=bcls;
    }
    if(this.DoSetVisible) this.DoSetVisible(o, this.Visible);
    else
    {
      o.style.display=(this.Visible ? 'block' : 'none');
    }    

    var t=this.CtrlType;
    o.onmouseover = function(e) { ngc_Enter(e, this, t); }
    o.onmouseout  = function(e) { ngc_Leave(e, this, t); }
    o.style.webkitTapHighlightColor='rgba(0,0,0,0)';
    o.style.webkitTapHighlightColor='transparent'; /* For some Androids */
    o.style.msTouchAction='none';
  }
  if((id!='')&&(this.DoAttach)) this.DoAttach(o,oid);
  
  var has_scroll=((typeof this.ScrollBars !== 'undefined')&&(this.ScrollBars!==ssNone)); 
  if((o)&&(!o.ngpointers)&&((this.DoAcceptGestures)||(has_scroll)||(typeof this.Gestures !== 'undefined'))) 
  {  
    var gestures=((typeof this.Gestures === 'object')&&(this.Gestures) ? ng_CopyVar(this.Gestures) : {});
    if((has_scroll)&&(typeof gestures.drag === 'undefined')) gestures.drag=true;
    if(this.DoAcceptGestures) this.DoAcceptGestures(o,gestures);
    if(!ng_EmptyVar(gestures)) {
      var g=[];
      for(var i in gestures) 
        if(gestures[i]) g.push(i);
      if(g.length>0) 
        ngc_PtrListener(this, o, 'control', g);
    }
  }
}

function ngc_Release()
{
  var c,cc=this.ChildControls;
  if(typeof cc !== 'undefined')
    for(var i=cc.length-1;i>=0;i--)
    {
      c=cc[i];
      if((c)&&(typeof c.Release === 'function')) c.Release();
    }

  var o=this.Elm();
  if(o)
  {
    var mi = ngMouseInControls[this.ID];
    if((typeof mi !== 'undefined')&&(mi.Object==this)) ngc_Leave(null, mi.Element, this.CtrlType);
    if(this.DoRelease) this.DoRelease(o);
    else
    {
      o.style.display='none'; 
      ng_SetInnerHTML(o,'');
    }
  } 
}

function ngc_Dispose()
{
  var cc=this.ChildControls;
  if(typeof cc !== 'undefined')
  {
    var c;
    for(var i=cc.length-1;i>=0;i--) 
    {
      c=cc[i];
      if((c)&&(typeof c.Dispose === 'function')) c.Dispose();
    }
  }

  var id=this.ID; 
  if((!this.DoDispose)||(ngVal(this.DoDispose(),false)))
  {
    ngRemoveChildControl(this.ParentControl,this);
    var o=this.Elm();
    if(o) 
    {
      o.style.display='none'; 
      ng_SetInnerHTML(o,'');
      if(o.parentNode) o.parentNode.removeChild(o);
    }
    try
    {
      for(var i in this)
        delete this[i];
    }
    catch(e)
    {
    }
  }  
  if(id!='') delete ngControlsIDs[id];
}

function ngc_Enable()
{
  this.SetEnabled(true);
}

function ngc_Disable()
{
  this.SetEnabled(false);
}

function ngc_SetEnabled(v,p)
{
  v=ngVal(v,true);
  if(this.Enabled!=v)
  {
    if((this.OnSetEnabled)&&(!ngVal(this.OnSetEnabled(this,v,p),false))) return;

    p=ngVal(p,this);
    if(typeof this.SetChildControlsEnabled === 'function')
    {
      this.SetChildControlsEnabled(v,p);
    }
    else
    {
      var cc=this.ChildControls;
      if(typeof cc !== 'undefined')
        for(var i=0;i<cc.length;i++) cc[i].SetEnabled(v,p);
    }

    if(this.DoSetEnabled) this.DoSetEnabled(v);
    else 
    {
      this.Enabled=v;
      if(this.Update) this.Update();
    }
    if(this.OnEnabledChanged) this.OnEnabledChanged(this,p);
  }
}

function ngc_SetFocus(state)
{
  var o=this.Elm();
  if(o) { try { if(ngVal(state,true)) o.focus(); else o.blur(); } catch(e) { } }
}

function ngc_SetVisible(v)
{
  v=ngVal(v,true);
  if(this.Visible!=v)
  {
    var pa=true;
    if((this.OnSetVisible)&&(!ngVal(this.OnSetVisible(this,v),false))) return;
    if(this.ID!='')
    {
      var o = this.Elm();
      if(o)
      {
        if(v) {
          if((this.IsPopup===true)&&(!ngc_ActivatePopup(this))) return;
        }
        else ngc_DeactivatePopup(this);
        if(this.DoSetVisible) this.DoSetVisible(o, v);
        else 
        { 
          o.style.display=(v ? 'block' : 'none'); 
          o.style.visibility=(v ? 'visible' : 'hidden'); // IE7 sometimes don't hide elements if display is none 
        }
        if((!v)&&(!ngIExplorer))
        {
          function blur_hidden(c)
          {
            if(c.SetFocus) c.SetFocus(false);
            var cc=c.ChildControls;
            if(typeof cc !== 'undefined')
              for(var i=0;i<cc.length;i++)
                blur_hidden(cc[i]);
          }
          blur_hidden(this);
        }
        // IE7 redraw fix
        var fix7=document.body.offsetLeft;
      }
    }
    if(this.Visible!=v)
    {
      this.Visible=v;
      if(v) this.Update(true);

      // IE7 redraw fix
      var o=this.Elm();
      if(o) { var fix7=o.offsetLeft; }

      if(this.OnVisibleChanged) this.OnVisibleChanged(this);
    }
    else ngc_DeactivatePopup(this);
  }
}

function ngc_Align(o)
{
  var r=0;
  if(typeof o === 'undefined') o=this.Elm();
  if(typeof o === 'string') o=document.getElementById(o);
  if(typeof this.DoResize !== 'function') r=ng_Align(o);
  else if(o) r=this.DoResize(o);
  return r;
}

function ngc_Update(recursive)
{
  if(!this.Visible) return;
  var p=this.ParentControl;
  while(p)
  {
    if(!p.Visible) return;
    p=p.ParentControl;
  }
  if((this.OnUpdate)&&(!ngVal(this.OnUpdate(this),false))) return;

  var o=this.Elm();
  if(o)
  {
    o.style.display = (this.Visible ? 'block' : 'none');
    if(ngIExplorer6) 
    {
      var cw=ng_ClientWidth(o);
      var ch=ng_ClientHeight(o);
    }
    var ret=true;
    if(this.DoUpdate) ret=ngVal(this.DoUpdate(o),false);
  }
  if(ret)
  {
    if(ngVal(recursive,true))
    {
      var cc=this.ChildControls;
      if(typeof cc !== 'undefined')
      {      
        var c;
        for(var i=0;i<cc.length;i++) 
        { 
          c=cc[i]; 
          if(c.Update) c.Update(true);
        }
      }
    }    
  }       

  if(!ret) return;
  
  if(o)
  {
    ret=this.Align(o);
    if(ngIExplorer6) 
    {
      if((this.DoUpdate)&&((ret & 4)||(ret & 8))) this.DoUpdate(o);

      var nw,nh;      
      ng_BeginMeasureElement(o);
      for(var i=0;i<2;i++)
      {
        nw=ng_ClientWidth(o);
        nh=ng_ClientHeight(o);
        if((cw!=nw)||(ch!=nh))
        {
          var cc=this.ChildControls;
          if(typeof cc !== 'undefined')
          {      
            for(var i=0;i<cc.length;i++) 
            {
              ret=cc[i].Align();
              if((ret & 4)||(ret & 8)) cc[i].Update();
            } 
          }
        } else break;
        cw=nw; ch=nh;        
      }
      ng_EndMeasureElement(o);
    }
    // IE7 redraw fix
    var fix7=o.offsetLeft;
  }
  this.Attach();
  if(this.OnUpdated) this.OnUpdated(this,o);
}

function ngc_Enter(e, elm, type)
{
  if(!e) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  var o=ngGetControlByElement(elm, type);
  if(o)
  {
    var pi=o.PointerInfo;
    if((pi)&&(pi.Touch)&&(pi.EndTime)&&((new Date().getTime()-pi.EndTime)<200))
    {
      return;
    }
    var mi = ngMouseInControls[o.ID];
    if((typeof mi !== 'undefined')&&(mi.Element)&&(mi.Object)&&(ng_inDOM(mi.Element)))
    {
      if(mi.Object===o) return; // already in control  
      ngc_Leave(e, mi.Element, mi.Object.CtrlType); 
    }        

    try {
      mi=new Object();
      mi.Object=o;
      mi.Element=o.Elm();
      mi.EnterElement=elm;
      ngMouseInControls[o.ID] = mi;

      if(o.DoMouseEnter) o.DoMouseEnter(e, mi, mi.Element);
      else if(o.OnMouseEnter) o.OnMouseEnter(o);
    }
    finally {
      o.MouseInControl=true;
    }
  }
}

function ngc_Leave(e, elm, type)
{
  if(!e) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  var o=ngGetControlByElement(elm, type);
  if(o)
  {
    var mi = ngMouseInControls[o.ID];
    if(typeof mi === 'undefined') return; 
    delete ngMouseInControls[o.ID]; 

    try {
      mi.LeaveElement=elm;
      if(o.DoMouseLeave) o.DoMouseLeave(e, mi, mi.Element);
      else if(o.OnMouseLeave) o.OnMouseLeave(o);
    }
    finally {
      o.MouseInControl=false;
    }
  }
}

function ngc_Focus(e, elm, type)
{
  if(!e) e=window.event;
  var o=ngGetControlByElement(elm, type);
  if((o)&&(!o.ControlHasFocus))
  {
    o.ControlHasFocus=true;
    if(o.DoFocus) o.DoFocus(e, elm);
    else if(o.OnFocus) o.OnFocus(o);
  }
}

function ngc_Blur(e, elm, type)
{
  if(!e) e=window.event;
  if(ngIExplorer) 
  {
    // IE fires onfocus and onblur events even tabindex attribute is not set (DIVs with dimensions)
    // check if new focused item is child element and if yes refocus original

    var ai=document.activeElement;
    if((ai)&&(!ng_CanFocusElm(ai))) 
    {
      var p=ai.parentNode;
      while((p)&&(p!=document))
      {
        if(p==elm)
        {
          elm.focus();
          return;          
        }
        p=p.parentNode;
      }    
    }
  }
  var o=ngGetControlByElement(elm, type);  
  if((o)&&(o.ControlHasFocus))
  {
    try {
      if(o.DoBlur) o.DoBlur(e, elm);
      else if(o.DoBlur) o.DoBlur(o);
    }
    finally {
      o.ControlHasFocus=false;
    }
  }
}

function ngc_CtrlBringToFront(c)
{
  var cc=this.ChildControls;
  if((typeof cc === 'undefined')||(!cc.length)) return;
  
  for(var i=0;i<cc.length;i++)
    if(cc[i]==c)
    {
      cc.splice(i,1);
      cc.splice(0,0,c);
      break;
    }
}

function ngc_CtrlSendToBack(c)
{
  var cc=this.ChildControls;
  if((typeof cc === 'undefined')||(!cc.length)) return;
  
  for(var i=0;i<cc.length;i++)
    if(cc[i]==c)
    {
      cc.splice(i,1);
      cc[cc.length]=c;
      break;
    }
}

function ngc_ctrlInsert(cc,c,p,o)
{
  if(c==p) return;
  var fix=-1,dix=-1;
  for(var i=0;i<cc.length;i++)
  {
    if(cc[i]==p) fix=i;
    if(cc[i]==c) dix=i;
    if((fix>=0)&&(dix>=0))
    {
      cc.splice(dix,1);
      if(dix<fix) fix--;
      cc.splice(fix+o,0,c);
      break;
    }
  }
}

function ngc_CtrlInsertAfter(c,p)
{
  var cc=this.ChildControls;
  if((typeof cc === 'undefined')||(!cc.length)) return;

  ngc_ctrlInsert(cc,c,p,1);
}

function ngc_CtrlInsertBefore(c,p)
{
  var cc=this.ChildControls;
  if((typeof cc === 'undefined')||(!cc.length)) return;

  ngc_ctrlInsert(cc,c,p,0);
}

function ngc_GetResText() 
{ 
  return ngTxt(this.ngTextD); 
}

function ngc_GetResAlt() 
{ 
  return ngTxt(this.ngAltD); 
}

function ngc_GetResHint() 
{ 
  return ngTxt(this.ngHintD); 
}

function ngc_GetText()
{
  if(this.OnGetText) return ngVal(this.OnGetText(this),'');
  else return this.Text;
}

function ngc_GetAlt()
{
  if(this.OnGetAlt) return ngVal(this.OnGetAlt(this),'');
  else return this.Alt;
}

function ngc_GetImg()
{
  if(this.OnGetImg) return this.OnGetImg(this);
  else return this.Img;
}

function ngc_GetHint()
{
  if(this.OnGetHint) return ngVal(this.OnGetHint(this),'');
  else return this.Hint;
}

function ngc_SetText(text)
{
  if(this.OnSetText) text=this.OnSetText(text,this);
  if(text!=this.Text)
  {
    this.Text=text;
    this.Update();
  }
}

/**
 *  Class: ngControl
 *  This is an abstract class for all visual controls. 
 *
 *  Syntax:
 *    new *ngControl* (object obj, string id, string ctrltype)
 *    
 *  Parameters:
 *    obj - implementation of control object
 *    id - control ID
 *    ctrltype -  control type
 */    
function ngControl(obj, id, type)
{
  /*
   *  Group: Definition
   */
  /*
   *  Variable: Type
   *  ...
   *  Type: string
   */
  /*<>*/
  /*
   *  Variable: L
   *  ...
   *  Type: integer/string
   */
  /*<>*/
  /*
   *  Variable: T
   *  ...
   *  Type: integer/string
   */
  /*<>*/
  /*
   *  Variable: W
   *  ...
   *  Type: integer/string
   */
  /*<>*/
  /*
   *  Variable: H
   *  ...
   *  Type: integer/string
   */
  /*<>*/
  /*
   *  Variable: R
   *  ...
   *  Type: integer/string
   */
  /*<>*/
  /*
   *  Variable: B
   *  ...
   *  Type: integer/string
   */
  /*<>*/
  /*
   *  Variable: ScrollBars
   *  ...
   *  Type: integer
   *  Default value: *ssNone*
   */
  /*<>*/
  /*
   *  Variable: Data
   *  ...
   *  Type: object
   */
  /*<>*/
  /*
   *  Variable: style
   *  ...
   *  Type: object
   */
  /*<>*/
  /*
   *  Variable: Opacity
   *  ...
   *  Type: double
   */
  /*<>*/
  /*
   *  Variable: className
   *  ...
   *  Type: string
   */
  /*<>*/
  /*
   *  Variable: innerHTML
   *  ...
   *  Type: string
   */
  /*<>*/
  /*
   *  Variable: id
   *  ...
   *  Type: string
   */
  /*<>*/
  /*
   *  Variable: parent
   *  ...
   *  Type: string/object
   */
  /*<>*/
  /*
   *  Variable: Controls
   *  ...
   *  Type: object
   */
  /*<>*/
  /*
   *  Variable: ParentReferences
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  /*<>*/
  /*
   *  Variable: IE6AlignFix
   *  ...
   *  Type: bool
   *  Default value: global variable *IE6AlignFix*
   */
  /*<>*/
  /*
   *  Event: OnCreated
   */
  /*<>*/
  /*
   *  Event: OnCreateHTMLElement
   */
  /*<>*/

  /*
   *  Group: Properties
   */

  /*  Variable: ID
   *  Control identificator.
   *  Type: string
   */
  obj.ID = ngVal(id,''); 

  /*  Variable: CtrlType
   *  Control type. 
   *  Type: string  
   */
  obj.CtrlType = type;

  /*  Variable: CtrlInheritedFrom
   *  Control inheritance info. 
   *  Type: array  
   */
  obj.CtrlInheritedFrom = [ ];

  /*  Variable: BaseClassName
   *  Control CSS base class. 
   *  Type: string  
   */
  obj.BaseClassName = type;

  /*  Variable: Enabled
   *  Controls whether the control responds to mouse, keyboard. 
   *  Type: bool  
   */
  obj.Enabled = true;

  /*  Variable: Visible
   *  Determines whether the control is visible. 
   *  Type: bool  
   */
  obj.Visible = true;

  /*  Variable: Bounds
   *  Specifies the position of the control. 
   *  Type: object
   */
  obj.Bounds = new Object;

  /*  Variable: Owner
   *  If present, contains reference to object which holds reference to the
   *  control.
   *  Type: object   
   */
  //obj.Owner = null;
  /*  Variable: ParentControl
   *  If present, contains reference to the parent of the control.
   *  Type: object   
   */
  //obj.ParentControl = null;

  /*  Variable: ChildControls
   *  If present, contains references to child controls.
   *  Type: array  
   */
  //obj.ChildControls = new Array();
  /*  Variable: Gestures
   *  If present, the properties of object represents gestures and values 
   *  specifies if gesture is enabled or not (true/false).
   *  Type: object  
   */
  //obj.Gestures = undefined;


  /*
   *  Group: Methods
   */
  
  /*  Function: Enable
   *  Enables control.   
   *   
   *  Syntax:
   *    void *Enable* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Enable = ngc_Enable;

  /*  Function: Disable
   *  Disables control.   
   *   
   *  Syntax:
   *    void *Disable* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Disable = ngc_Disable;

  /*  Function: SetEnabled
   *  Sets enabled state of the control.   
   *   
   *  Syntax:
   *    void *SetEnabled* (bool enabled [, object parent])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.SetEnabled = ngc_SetEnabled;

  /*  Function: SetVisible
   *  Sets control visibility.   
   *   
   *  Syntax:
   *    void *SetVisible* (bool visible)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.SetVisible = ngc_SetVisible;

  /*  Function: SetFocus
   *  Sets focus on the control.   
   *   
   *  Syntax:
   *    void *SetFocus* ([bool state=true])
   *     
   *  Parameters:              
   *    state - control is focused if TRUE or blured if FALSE    
   *     
   *  Returns:
   *    -     
   */
  obj.SetFocus = ngc_SetFocus;

  /*  Function: Elm
   *  Gets access to container DIV element object.
   *   
   *  Syntax:
   *    object *Elm* ()
   *   
   *  Returns:
   *    Element object.     
   */
  obj.Elm = ngc_Elm;
    
  /*  Function: CtrlInheritsFrom
   *  Checks if control is inherited from given type.
   *   
   *  Syntax:
   *    bool *CtrlInheritsFrom* (string type)
   *   
   *  Returns:
   *    TRUE if control is an ancestor of given type.      
   */
  obj.CtrlInheritsFrom = ngc_CtrlInheritsFrom;
  
  /*  Function: Create
   *  Creates control DIV container.
   *   
   *  Syntax:
   *    void *Create* (props, ref)
   *   
   *  Returns:
   *    -     
   */
  obj.Create = ngc_Create;

  /*  Function: Dispose
   *  Destroys the control.     
   *   
   *  Syntax:
   *    void *Dispose* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Dispose = ngc_Dispose;

  /*  Function: SetBounds
   *  Updates or sets position of the control.   
   *   
   *  Syntax:
   *    void *SetBounds* ([object props])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.SetBounds = ngc_SetBounds;

  /*  Function: SetScrollBars
   *  Sets scroll bars apperance.   
   *   
   *  Syntax:
   *    void *SetScrollBars* (integer type)
   *     
   *  Parameters:
   *    type - ssNone, ssAuto, ssBoth, ssVertical, ssHorizontal   
   *   
   *  Returns:
   *    -     
   */
  obj.SetScrollBars = ngc_SetScrollBars;
  /*  Function: SetPopup
   *  Sets if control work as popup.   
   *   
   *  Syntax:
   *    void *SetPopup* (bool state)
   *     
   *  Parameters:
   *    state - if TRUE, control work as popup      
   *   
   *  Returns:
   *    -     
   */
  obj.SetPopup = ngc_SetPopup;
  /*  Function: SetOpacity
   *  Sets control opacity.   
   *   
   *  Syntax:
   *    void *SetOpacity* (double opacity)
   *     
   *  Parameters:
   *    opacity - control opacity from interval <0,1>   
   *   
   *  Returns:
   *    -     
   */
  obj.SetOpacity = ngc_SetOpacity;
  
  /*  Function: Align
   *  Aligns control to its position.
   *      
   *  Syntax:
   *    int *Align* (object elm)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    Align flags.     
   */
  obj.Align = ngc_Align;

  /*  Function: Attach
   *  Attaches control to DIV container.
   *   
   *  Syntax:
   *    void *Attach* ([mixed id])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Attach = ngc_Attach;

  /*  Function: Release
   *  Clears control's DIV container.    
   *   
   *  Syntax:
   *    void *Release* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Release = ngc_Release;

  /*  Function: Update
   *  Redraws control.   
   *   
   *  Syntax:
   *    void *Update* (bool recursive)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Update = ngc_Update;
  
  /*
   *  Group: Events
   */
  /*  Function: AddEvent
   *  Adds new function to the event handler (callback).   
   *   
   *  Syntax:
   *    void *AddEvent* (string event, function handler)
   *    
   *    void *AddEvent* (function handler, string event)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.AddEvent = ngObjAddEvent;
  /*  Function: RemoveEvent
   *  Removes function from the event handler (callback).   
   *   
   *  Syntax:
   *    void *RemoveEvent* (string event, function handler)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.RemoveEvent = ngObjRemoveEvent;

  /*
   *  Event: OnSetEnabled
   */     
  obj.OnSetEnabled     = null;
  /*
   *  Event: OnEnabledChanged
   */     
  obj.OnEnabledChanged = null;
  /*
   *  Event: OnSetVisible
   */     
  obj.OnSetVisible     = null;
  /*
   *  Event: OnVisibleChanged
   */     
  obj.OnVisibleChanged = null;
  /*
   *  Event: OnUpdate
   */     
  obj.OnUpdate         = null;
  /*
   *  Event: OnUpdated
   */     
  obj.OnUpdated        = null;
  /*
   *  Event: OnMouseEnter
   */
  obj.OnMouseEnter     = null;

  /*
   *  Event: OnMouseLeave
   */
  obj.OnMouseLeave     = null;
}

function ngcs_Create(props, ref)
{
  var id=ngVal(props.ID,'');
  if(id=='') 
  {
    if(typeof props.Data === 'object') id=ngVal(props.Data.ID,'');
    if(id=='') id=ngCreateControlId(props.Type);
  }
  this.ID=id;
  if(id!='') ngControlsIDs[id]=this;

  if(this.DoCreate) this.DoCreate(props, ref);  
  if(props.OnCreated) props.OnCreated(this, ref);
  return null;
}

/**
 *  Class: ngSysControl
 *  This is an abstract class for all non-visual controls. 
 *
 *  Syntax:
 *    new *ngSysControl* (object obj, string id, string ctrltype)
 *    
 *  Parameters:
 *    obj - implementation of control object
 *    id - control ID
 *    ctrltype -  control type
 */    
function ngSysControl(obj, id, type)
{
  /*
   *  Group: Properties
   */

  /*  Variable: ID
   *  Control identificator.
   *  Type: string
   */
  obj.ID = ngVal(id,''); 

  /*  Variable: CtrlType
   *  Control type. 
   *  Type: string  
   */
  obj.CtrlType = type;
  /*  Variable: CtrlInheritedFrom
   *  Control inheritance info. 
   *  Type: array  
   */
  obj.CtrlInheritedFrom = [ ];

  /*  Variable: Enabled
   *  Controls whether the control responds to mouse, keyboard. 
   *  Type: bool  
   */
  obj.Enabled = true;

  /*  Variable: Owner
   *  If present, contains reference to object which holds reference to the
   *  control.
   *  Type: object   
   */
  //obj.Owner = null;
  /*  Variable: ParentControl
   *  If present, contains reference to the parent of the control.
   *  Type: object   
   */
  //obj.ParentControl = null;

  /*  Variable: ChildControls
   *  If present, contains references to child controls.
   *  Type: array  
   */
  //obj.ChildControls = new Array();


  /*
   *  Group: Methods
   */
  
  /*  Function: CtrlInheritsFrom
   *  Checks if control is inherited from given type.
   *   
   *  Syntax:
   *    bool *CtrlInheritsFrom* (string type)
   *   
   *  Returns:
   *    TRUE if control is an ancestor of given type.      
   */
  obj.CtrlInheritsFrom = ngc_CtrlInheritsFrom;
  /*  Function: Enable
   *  Enables control.   
   *   
   *  Syntax:
   *    void *Enable* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Enable = ngc_Enable;

  /*  Function: Disable
   *  Disables control.   
   *   
   *  Syntax:
   *    void *Disable* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Disable = ngc_Disable;

  /*  Function: SetEnabled
   *  Sets enabled state of the control.   
   *   
   *  Syntax:
   *    void *SetEnabled* (bool enabled [, object parent])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.SetEnabled = ngc_SetEnabled;

  /*  Function: Elm
   *  Gets access to container DIV element object.
   *   
   *  Syntax:
   *    object *Elm* ()
   *   
   *  Returns:
   *    Element object.     
   */
  obj.Elm = function() { return null; }
    
  /*  Function: Create
   *  Creates control.
   *   
   *  Syntax:
   *    void *Create* (props, ref)
   *   
   *  Returns:
   *    -     
   */
  obj.Create = ngcs_Create;
  /*  Function: Dispose
   *  Destroys the control.     
   *   
   *  Syntax:
   *    void *Dispose* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.Dispose = ngc_Dispose;
  
  /*
   *  Group: Events
   */
  /*  Function: AddEvent
   *  Adds new function to the event handler (callback).   
   *   
   *  Syntax:
   *    void *AddEvent* (string event, function handler)
   *    
   *    void *AddEvent* (function handler, string event)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.AddEvent = ngObjAddEvent;
  /*  Function: RemoveEvent
   *  Removes function from the event handler (callback).   
   *   
   *  Syntax:
   *    void *RemoveEvent* (string event, function handler)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  obj.RemoveEvent = ngObjRemoveEvent;

  /*
   *  Event: OnSetEnabled
   */     
  obj.OnSetEnabled     = null;
  /*
   *  Event: OnEnabledChanged
   */     
  obj.OnEnabledChanged = null;
}

// --- ngControl - children ----------------------------------------------------

function ngAddChildControl(parentobj, obj)
{
  if((!parentobj)||(!obj)) return;
  if(typeof parentobj.ChildControls === 'undefined') parentobj.ChildControls = new Array();
  parentobj.ChildControls[parentobj.ChildControls.length]=obj;
  if(!obj.ParentControl) obj.ParentControl=parentobj;
}

function ngRemoveChildControl(parentobj, obj)
{
  if((!parentobj)||(!obj)) return;
  var cc=parentobj.ChildControls;
  if(typeof cc === 'undefined') return;
  var c;
  for(var i=cc.length-1;i>=0;i--)
  {
    c=cc[i];
    if(c==obj) cc.splice(i,1);
  }
  if(!cc.length) delete parentobj.ChildControls;
  if(obj.ParentControl==parentobj) obj.ParentControl=null;
}

function ngSavePropState(parentobj, prop, recursive, states)
{
  if(!parentobj) return null;
  if(typeof prop==='undefined') prop='Enabled';
  if(typeof states==='undefined') 
  {
    states=new Object;
    states['_Prop']=prop;
    states['_Parent']=parentobj;
  }
  
  var v=parentobj[prop];
  states[parentobj.ID]=v;
  if((ngVal(recursive,false))&&(typeof parentobj.ChildControls !== 'undefined'))
  {
    var c,nc=new Array();
    for(var i=0;i<parentobj.ChildControls.length;i++)
    {
      ngSavePropState(parentobj.ChildControls[i],prop,true,states);
    }
  }
  return states;  
}

function ngRestorePropState(states, update)
{
  var c;
  var prop=states['_Prop'];
  for(var i in states)
  {
    if(i.charAt(0)=='_') continue;
    c=ngGetControlById(i);
    if(c)
    {
      c[prop]=states[i];
    }
  }
  c=states['_Parent'];
  if((c)&&(ngVal(update,true))) c.Update(true);
}

function ngcReattachChildren(c)
{
  if(typeof c.ChildControls !== 'undefined')
  {
    var cc;
    for(var i=0;i<c.ChildControls.length;i++)
    {
      cc=c.ChildControls[i];
      ngcReattachChildren(cc);
      cc.Attach();
    }
  }
}

// --- ngControl - popups ------------------------------------------------------

var ngc_ActivePopups = {};
var ngc_PopupsInitialized = false;

function ngc_HidePopups()
{
  for(var popupgrp in ngc_ActivePopups)
  {
    var dd=ngc_ActivePopups[popupgrp];
    if(dd) ngc_HidePopup(dd);
  } 
} 

function ngc_GetPopupGroup(ctrl)
{
  var popupgrp=ctrl.PopupGroup;
  if((typeof popupgrp==='undefined')||(popupgrp=='')) popupgrp='default';
  return popupgrp; 
}

function ngc_HidePopup(ctrl)
{
  if(!ctrl) return false;
  var popupgrp=ngc_GetPopupGroup(ctrl);

  var ret=false;
  var dd=ngc_ActivePopups[popupgrp];
  if(dd===ctrl)
  {
    ctrl.SetVisible(false);
    if(!ctrl.Visible) ret=true;
    if((ret)&&(ngc_ActivePopups[popupgrp]===ctrl)) // safe check if SetVisible don't call ngc_DeactivatePopup 
      ngc_ActivePopups[popupgrp]=null;
  }
  return ret;
}

function ngc_DeactivatePopup(ctrl)
{
  if(!ctrl) return;
  var popupgrp=ngc_GetPopupGroup(ctrl);
  
  var dd=ngc_ActivePopups[popupgrp];
  if(dd===ctrl) ngc_ActivePopups[popupgrp]=null;
}

function ngc_IsActivePopup(ctrl)
{
  if(!ctrl) return false;
  var popupgrp=ngc_GetPopupGroup(ctrl);
  var dd=ngc_ActivePopups[popupgrp];
  return(dd===ctrl);
}

function ngc_ActivatePopup(ctrl)
{
  if(!ctrl) return;
  var popupgrp=ngc_GetPopupGroup(ctrl);

  if(!ngc_PopupsInitialized)
  {
    ngc_PopupsInitialized=true;
                                 
    function onmousewheel(e)
    {
      for(var popupgrp in ngc_ActivePopups)
      {
        var dd=ngc_ActivePopups[popupgrp];
        if(dd) 
        {
          if (!e) e = window.event;
          var t = e.target || e.srcElement || e.originalTarget;

          if(t)
          {
            if((!dd.OnIsInsidePopup)||(!ngVal(dd.OnIsInsidePopup(dd,t,1,e),true)))
            {  
              if(typeof dd.IsInsidePopup === 'function')
              {
                if(!ngVal(dd.IsInsidePopup(t,1,e),true)) t=null;
              }
              else
              { 
                var ad=(dd ? dd.Elm() : null);
                while(t)
                {
                  if(t===ad) break;
                  t=t.parentNode;
                }
              }
            }
          }
          if(!t) ngc_HidePopup(dd);
        }
      }
    }
    
    function onresize(e) 
    {
      ngc_HidePopups();
    }
    
    function onpointerdown(pi)
    {
      var ret=true;
      for(var popupgrp in ngc_ActivePopups)
      {
        var dd=ngc_ActivePopups[popupgrp];
        if(dd) 
        {
          var t=pi.GetTarget();
          if(t) 
          {
            if(t)
            {  
              if((!dd.OnIsInsidePopup)||(!ngVal(dd.OnIsInsidePopup(dd,t,0,pi),true)))
              {
                if(typeof dd.IsInsidePopup === 'function')
                {
                  if(!ngVal(dd.IsInsidePopup(t,0,pi),true)) t=null;
                }
                else
                { 
                  var ad=(dd ? dd.Elm() : null);
                  while(t)
                  {
                    if(t===ad) break;
                    t=t.parentNode;
                  }
                }
              }
            }
            if(!t)
            {
              if(typeof dd.DoClickOutside === 'function')
              {
                if(ngVal(dd.DoClickOutside(pi),false)) ngc_HidePopup(dd);
              }
              else if((!dd.OnClickOutside)||(ngVal(dd.OnClickOutside(dd,pi),false)))
                ngc_HidePopup(dd);
              ret=false;
              ng_DocumentDeselect();  
              pi.EventPreventDefault();
              pi.StopPropagation=true;
              ngc_disabledocselect(pi.StartElement);
            }
          }
        }      
      }
      return ret;  
    }    

    document.onmousewheel = ngAddEvent(document.onmousewheel, onmousewheel);
    if (window.addEventListener) 
      window.addEventListener('DOMMouseScroll', onmousewheel, false);    
    window.onresize = ngAddEvent(window.onresize, onresize);  
    ngOnPointerDown = ngAddEvent(ngOnPointerDown,onpointerdown);
  }
  
  var dd=ngc_ActivePopups[popupgrp];
  if(typeof dd==='undefined') // not initialized
  {
    ngc_ActivePopups[popupgrp]=null;
    dd=null;
  }
  if(dd!==ctrl) ngc_HidePopup(dd); 
  if(ngc_ActivePopups[popupgrp]!==null) return false; // cannot hide previous Popup

  ngc_ActivePopups[popupgrp]=ctrl;
  return true;
}

// --- Pointer events ----------------------------------------------------------

var ngOnPointerDown = null; 

var ngDblClickMouseTimeout = 500;
var ngDblClickMouseThreshold = 10;
var ngDblClickTouchTimeout = 500;
var ngDblClickTouchThreshold = 20;

var ngCurrentPtrControl = null;
var ngCurrentPtrDblClick = null;
var ngPtrIgnoredEvent = null;

var ngPointersInitialized = false;
var ngAcceptMouseGestures;

var ngc_docselectinfo=null;

function ngc_enabledocselect()
{
  var dsi=ngc_docselectinfo;
  if(dsi)
  {
    ngc_docselectinfo=null;
    if(typeof dsi.oldonselect != 'undefined') document.onselectstart=dsi.oldonselect;
    if(dsi.elm) dsi.elm.style.MozUserSelect=dsi.oldmozuserselect;    
  }
}

function ngc_disabledocselect(elm)
{
  ngc_enabledocselect();
  var dsi={
     elm: elm,
     oldonselect: document.onselectstart
  }
  document.onselectstart =  function () { return false; };
  if(elm)
  {
    dsi.oldmozuserselect=elm.style.MozUserSelect;
    elm.style.MozUserSelect="none";
  }
  ngc_docselectinfo=dsi;
}

function ngc_ptrevignore(e)
{
  if((e)&&(e.gesture)) e=e.gesture.srcEvent;
  if((e)&&(ngIExplorerVersion<=8)) {
    e={ ts: new Date().getTime(),
        type: e.type, 
        button: e.button,
        clientX: e.clientX, 
        clientY: e.clientY,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        srcElement: e.srcElement 
      }
  }
  ngPtrIgnoredEvent=e;
}

function ngc_ptrevisignored(e)
{
  var ie=ngPtrIgnoredEvent;
  if((e)&&(e.gesture)) e=e.gesture.srcEvent;
  if(ie)
  {
    if(ie===e) return true;
    if(ngIExplorerVersion<=8) {
      // in IE<=8 window.event returns always new instance :(
      if((ie.type===e.type)&&(ie.clientX===e.clientX)&&(ie.clientY===e.clientY)&&(ie.altKey===e.altKey)&&(ie.ctrlKey===e.ctrlKey)&&(ie.srcElement===e.srcElement)&&(ie.button===e.button)) 
      {
        if((new Date().getTime()-ie.ts)<500) return true;
      }
    }
  }
  return false;
}
  
function ngc_ptrstart(c, eid, elm, e, gestures)
{
  if(!e) e = window.event;

  if(ngc_ptrevisignored(e)) return;

  var touch=((e.gesture)&&(Hammer)&&((e.gesture.pointerType===Hammer.POINTER_TOUCH)||(e.gesture.pointerType===Hammer.POINTER_PEN)));
  ngUsingTouch=touch;

  if((!e.gesture)&&((e.button!=0) && (!ngIExplorer || e.button!=1))) // not left click
    return;        

  var pos=ngc_DoGetPointerPos(c,e,null);

  function gettarget()
  {
     var e=this.Event;
    if((this.TargetEvent!=e)
     ||(typeof this.TargetX==='undefined')||(typeof this.TargetY==='undefined')
     ||(this.TargetX!=this.X)||(this.TargetY!=this.Y))
    {
      var target;
      if(document.elementFromPoint) target=document.elementFromPoint(this.X, this.Y);
      else target = e.target || e.srcElement || e.originalTarget;
      this.Target=target;
      this.TargetX=this.X;
      this.TargetY=this.Y;
      this.TargetEvent=e;
    }
    return this.Target;
  }
  
  function gettargetctrl(type)
  {
    var ot=this.Target;
    var target=this.GetTarget();
    if(typeof type!=='undefined') 
      return ngGetControlByElement(target,type);
      
    if((!this.TargetControl)||(ot!==this.Target))      
      this.TargetControl=ngGetControlByElement(target);
    return this.TargetControl;
  }

  function inelm(p,ielm)
  {                                         
    var t=p.GetTarget();
    var tc;
    while(t)
    {
      if(t==ielm) return true;
      tc=ngGetControlById(t.id);
      if(tc) 
      {
        p.TargetControl=tc;        
        break;
      }
      t=t.parentNode;
    }
    return false;
  }    

  function insrcelm()
  {
    return inelm(this,this.SrcElement);
  }
  
  function indstelm()
  {
    return inelm(this,this.DstElement);
  }
  
  function preventdefault()
  {
    if(e) {
      if(e.gesture)
        e.gesture.preventDefault();
      else
      {
        if(e.preventDefault)
          e.preventDefault();
        else
          e.returnValue = false;
      }
    }
  }
  
  function stoppropagation()
  {
    var e=this.Event;
    if(e) {
      if((e.gesture)&&(e.gesture.stopPropagation)) e.gesture.stopPropagation();
      if(e.stopPropagation) e.stopPropagation();
      else e.cancelBubble = true;
    }
  }
  var pi={ 
      Owner: c,
      X: pos.x,
      Y: pos.y,
      StartX: pos.x,
      StartY: pos.y,        
      StartElement: elm,
      StartTime: new Date().getTime(),
      StartEvent: e,
      StartEventID: eid,
      Event: e,
      EventID: eid,        
      CanFocus: true,
      Gestures: ng_CopyVar(gestures),
      Touch: touch,
      PointerType: (e.gesture ? e.gesture.pointerType : 'mouse'),
      GetTarget: gettarget,
      GetTargetControl: gettargetctrl,
      SrcTarget: e.target || e.srcElement || e.originalTarget,
      SrcElement: elm,
      DstElement: elm,
      IsInSrcElement: insrcelm,           
      IsInDstElement: indstelm,
      PreventDefault: true,
      PreventSelect: true,
      DocumentDeselect: true,
      //StopPropagation: undefined,
      EventPreventDefault: preventdefault, 
      EventStopPropagation: stoppropagation,
      OnGesture: null,          
      OnPointerUp: null
  };    
  if(pi.SrcTarget)
  {
    if(pi.SrcTarget.onclick) pi.PreventDefault=false;
    else 
    {
      if(ng_CanFocusElm(pi.SrcTarget)) pi.PreventDefault=false;
      if(ng_CanSelectElm(pi.SrcTarget)) pi.PreventSelect=false;
    }
  }

  if((ngOnPointerDown)&&(!ngVal(ngOnPointerDown(pi),false))) 
  {
    if(pi.StopPropagation) ngc_ptrevignore(e);
    return;
  }
  if(c) 
  {
    var dci=c.DblClickInfo;
    if(dci) 
    {
      var threshold = (pi.Touch ? ngDblClickTouchThreshold : ngDblClickMouseThreshold);
      if((Math.abs(pi.X-dci.X)<threshold)&&(Math.abs(pi.Y-dci.Y)<threshold))
      {            
        if(dci.Timer) clearTimeout(dci.Timer);
        pi.DblClickInfo=dci;
      }
      delete c.DblClickInfo;
    }
    if((c.DoPointerDown)&&(!ngVal(c.DoPointerDown(pi),false))) 
    {
      if(pi.StopPropagation) ngc_ptrevignore(e);
      return;
    }
    if((c.OnPointerDown)&&(!ngVal(c.OnPointerDown(c, pi),false))) 
    {
      if(pi.StopPropagation) ngc_ptrevignore(e);
      return;
    }
    if(c.Enabled)
    {
      ngCurrentPtrControl=c;
  
      c.PointerInfo = pi;
      if(touch) 
      {
        c.Touching = true;
        delete c.MouseDown;
      } 
      else 
      {
        c.MouseDown = true;
        delete c.Touching;
      }
    }
    if(pi.Touch) 
    {  
      ngc_Enter(e, elm, c.CtrlType);
    }
    if(c.Enabled)
    {    
      if(c.DoPtrStart) c.DoPtrStart(pi);
      if(c.OnPtrStart) c.OnPtrStart(c, pi);
    }
  }
  if((pi.CanFocus)&&(pi.PreventDefault)) 
  {
    var ai=document.activeElement;
    var doblur=true;
    var p=pi.SrcTarget;
    var focuselm=null;
    while((p)&&(p!=document))
    {
      if(ng_CanFocusElm(p))
      {
        if(ngIExplorer) {
          try { // p.focus in IExplorer scrolls content to top-left, use setActive instead
            p.setActive();
          }
          catch(ex) {
            p.focus();
          }
        }
        else p.focus();
        doblur=false; 
        break;
      }
      if(p==ai) {doblur=false; break;}
      p=p.parentNode;
    }            
    if((doblur)&&(ai)) ai.blur();
  }            
  if(pi.DocumentDeselect) ng_DocumentDeselect();
  if(pi.PreventSelect) ngc_disabledocselect(pi.StartElement);
  if(pi.PreventDefault) pi.EventPreventDefault();
  if((typeof pi.StopPropagation === 'undefined')||(pi.StopPropagation)) ngc_ptrevignore(e);
}

function ngc_ptrend(e)
{
  ngc_enabledocselect();
  var c=ngCurrentPtrControl;
  if(c)
  {
    ngCurrentPtrControl = null;
  }
  else    
  {
    c=ngCurrentPtrDblClick; // IE<9 doesn't fire MouseDown on double click
    if(!c) return false;
  }

  if(!e) e=window.event;

  ngc_ptrevignore(null);
  ngCurrentPtrDblClick = null;
  
  var pi=c.PointerInfo;
  if(pi) 
  {
    pi.Event=e;
    pi.EndEvent=e;
    pi.EndEventID=pi.EventID;
    c.GetPointerPos(e);    
    pi.EndX=pi.X;
    pi.EndY=pi.Y;
    pi.EndTime=new Date().getTime();
    if((pi.Touch)&&(c.MouseInControl)) 
    {
      ngc_Leave(e, pi.StartElement, c.CtrlType);
    }
  }
  
  var ret=false;
  if(pi.OnPointerUp) pi.OnPointerUp(pi);
  
  if((!c.OnPointerUp)||(ngVal(c.OnPointerUp(c, pi),false))) 
  {
    ret=true;             

    if((pi)&&((pi.Gestures.tap)||(pi.Gestures.doubletap)))
    { 
      if((pi.GetTargetControl()==c)||(pi.EndTime-pi.StartTime<200))
      {
        var dci=null;
        if((pi.Gestures.doubletap)&&(c.DoPtrDblClick)) 
        {
          dci=pi.DblClickInfo;
          if(!dci)
          {          
            if(typeof pi.Click === 'undefined') pi.Click=true;
            if(pi.DblClick!==false) {
              dci={
                StartElement: pi.StartElement,
                StartTime: pi.StartTime,
                EndTime: pi.EndTime,
                X: pi.X,
                Y: pi.Y
              };
            }
          }
          else
          {
            ngCurrentPtrDblClick=null; 
            if(dci.Timer) clearTimeout(dci.Timer);

            pi.DblClickStartTime=dci.StartTime;
            pi.DblClickEndTime=dci.EndTime;
            pi.DblClickStartElement=dci.StartElement;

            // clear selection caused by double click
            ng_DocumentDeselect();
            
            if(typeof pi.DblClick === 'undefined') pi.DblClick=true;

            dci=null;
          }
        }
        else if(typeof pi.Click === 'undefined') pi.Click=true;
      }
    }

    if(c.DoPtrEnd) c.DoPtrEnd(pi);
    if(c.OnPtrEnd) c.OnPtrEnd(c, pi);
    
    var doclick=((pi.Click)&&(c.DoPtrClick));
    if(dci)
    {
      ngCurrentPtrDblClick=c;
      c.DblClickInfo=dci;
      dci.Timer=setTimeout(function () {
        clearTimeout(dci.Timer);
        delete c.DblClickInfo;
        ngCurrentPtrDblClick=null; 
        if((doclick)&&(c.DoPtrClick)) c.DoPtrClick(pi);
      },Math.round((pi.Touch ? ngDblClickTouchTimeout : ngDblClickMouseTimeout)/2));
    }
    else 
    {
      if(doclick)
      {
        var timer=setTimeout(function () {
          clearTimeout(timer);
          if(c.DoPtrClick) c.DoPtrClick(pi);
        },1);
      }
    }
              
    if((pi.DblClick)&&(c.DoPtrDblClick)) 
    {
      c.DoPtrDblClick(pi);
    }        
  }
  delete c.MouseDown;
  delete c.Touching;
  return ret;
}
             
function ngc_HandleScrollGesture(c,pi,elm)
{
  if(pi.Gesture==='drag') 
  {
    var dx=Math.round(pi.X-pi.StartX);
    var dy=Math.round(pi.Y-pi.StartY);
    if((dx)||(dy)) {
    
      if(typeof pi.ScrollControl === 'undefined')
      {
        var e=(elm ? elm : c.Elm());
        if(!e) return false;
               
        var st;
        if(elm) 
        {
          if(typeof e.sbtype!=='undefined') st=e.sbtype; // has saved scroll bar type (Android)
          else
          { 
            st=ng_GetScrollBars(e);
            if(ngAndroid) e.sbtype=st; // ScrollBars are set to ssNone on Android, save scroll bar type
          }
        }
        else
        {         
          st=c.ScrollBars;
          if(typeof st==='undefined') {                                        
            st=ng_GetScrollBars(e);
            c.ScrollBars=st;
          }
        }

        if((st===ssNone)||(st===ssDefault)) return false;

        if(ngAndroid) {
          // Android doesn't support scrollTop/Left if CSS overflow is set to scroll or auto :(
          ng_SetScrollBars(e,ssNone);
        }

        if((e.scrollHeight > e.clientHeight)||(e.scrollWidth > e.clientWidth)) // has overflow content
        {
          var ost=e.scrollTop;
          var osl=e.scrollLeft;      
  
          if((st===ssAuto)||(st===ssBoth)||(st===ssHorizontal))
            e.scrollLeft=osl-dx;
          if((st===ssAuto)||(st===ssBoth)||(st===ssVertical))
            e.scrollTop=ost-dy;
  
          pi.ScrollControl = c;
          pi.ScrollElm  = e;
          pi.ScrollTop  = ost;      
          pi.ScrollLeft = osl;
          pi.ScrollType=st;
          return true;
        }
      }
      else
        if(pi.ScrollControl === c)
        {
          var st=pi.ScrollType;
          if(st===ssNone) return false;
          
          var stop,sleft;
          if((st===ssAuto)||(st===ssBoth)||(st===ssHorizontal))
            sleft = pi.ScrollLeft-dx;
          if((st===ssAuto)||(st===ssBoth)||(st===ssVertical))
            stop = pi.ScrollTop -dy;
          if(sleft<0) sleft=0;
          if(stop<0) stop=0;
            
          if(((typeof sleft!=='undefined')||(typeof stop!=='undefined'))
           &&((sleft != pi.ScrollLeft)||(stop != pi.ScrollTop)))
          {
            if(pi.ScrollTimer) clearTimeout(pi.ScrollTimer);
            pi.ScrollTimer=setTimeout(function() {
              clearTimeout(pi.ScrollTimer); pi.ScrollTimer=null;
              if(typeof stop!=='undefined') pi.ScrollElm.scrollTop=stop;
              if(typeof sleft!=='undefined') pi.ScrollElm.scrollLeft=sleft;
            },1);            
          }

          if((Math.abs(dx)>20)||(Math.abs(dy)>20)) 
          {
            delete pi.Gestures.tap;
            delete pi.Gestures.doubletap;
            pi.Scroll=true;
          }
          return true;
        }
    }
  }
  else
  {
    if(pi.ScrollControl === c)
    {
      var st=pi.ScrollType;
      if(st===ssNone) return false;
      if(pi.Gesture==='swipe') return true;
      if((st!==ssVertical)&&((pi.Gesture==='swipeleft')||(pi.Gesture==='swiperight'))) return true;
      if((st!==ssHorizontal)&&((pi.Gesture==='swipeup')||(pi.Gesture==='swipedown'))) return true;
    }
  }
  return false;
}
             
function ngc_ptrgesture(e,gesture)
{
  if(e.ngGestureHandled) return false;

  var c=ngCurrentPtrControl;
  if(!c) return false;
  
  var pi=c.PointerInfo;
  if(!pi) return false;
   
  gesture=ngVal(gesture,e.type);

  pi.Event=e;
  pi.Gesture=gesture;
  
  if(pi.OnGesture) pi.OnGesture(pi);

  var ret=false;
  if(gesture==='drag') 
  {
    if(!c.Visible)
    {
      ngc_ptrend(e);
      return false;
    }
    c.GetPointerPos(e);    
    if(pi.Touch)
    {
      var tc=pi.GetTargetControl();
      if((c.MouseInControl)&&(tc!=c))  ngc_Leave(e, c.Elm(), c.CtrlType);
      if((!c.MouseInControl)&&(tc==c)) ngc_Enter(e, c.Elm(), c.CtrlType);
    }                
    if(pi.Gestures.drag)
    {
      if(c.DoPtrDrag) ret=ngVal(c.DoPtrDrag(pi),true);
      if(c.OnPtrDrag) ret=ngVal(c.OnPtrDrag(c, pi),true) || ret;
      if(ret) return false;
    }
  }

  if(!pi.Touch) 
  {
    if(typeof ngAcceptMouseGestures !== 'undefined') {
      if(!ngAcceptMouseGestures) return false;
    }
  }

  var accept;
  var p=c;
  try
  {
    while((p)&&(pi.Gesture!=''))
    {
      accept=true;
      if((typeof p.AcceptGestures !== 'undefined')&&(!p.AcceptGestures)) accept=false;             
      if(!pi.Touch) 
      {
        if(typeof p.AcceptMouseGestures !== 'undefined') {
          if(!p.AcceptMouseGestures) accept=false;
        }
        else if(typeof ngAcceptMouseGestures === 'undefined') accept=false;
      }
      if(accept) {
        ret=false;
        if(p.DoGesture) ret=ngVal(p.DoGesture(pi),true) || ret;
        if(p.OnGesture) ret=ngVal(p.OnGesture(p,pi),true) || ret;
        if(!ret) ret=ngc_HandleScrollGesture(p,pi);
        if(ret) break;
      }    
      p=p.ParentControl;
    }
    if(ret) e.ngGestureHandled=true; 
  }
  finally 
  {  
    delete pi.Gesture;
  }
  return ret;
}

function ngc_PtrListener(c, elm, eid, gestures, ev)
{
  if(typeof elm==='string') elm=document.getElementById(elm);
  if(!elm) return;

  if((typeof gestures === 'undefined')||(!gestures)) gestures=[];
  else if(typeof gestures==='string') gestures=gestures.split(' ');
  if(typeof eid==='undefined') eid='';

  if(c.DoAcceptPtrGestures) c.DoAcceptPtrGestures(elm,eid,gestures,ev);
  
  var gstates={};
  for(var i=0;i<gestures.length;i++)
  {
    if(gstates[gestures[i]]) { // duplicate gesture
      gestures.splice(i,1);
      i--;
      continue;
    }
    gstates[gestures[i]]=true;
  }

  if(!gstates['touch'])
  {
    gstates['touch']=true;
    gestures.push('touch');
  }
  if(!gstates['drag'])
  {
    gestures.push('drag');
  }
  if(!gstates['release'])
  {
    gstates['release']=true;
    gestures.push('release');
  }

  function mousedown(e)
  {
    ngc_ptrstart(c,eid,elm,e,gstates);
  }

  if(!elm.ngpointers)
  {
    elm.ngpointers={}; // must be object for IE<8 which serialize 'common' element property values into innerHTML
    if(!ngPointersInitialized) ngc_InitPointers();
    if(!c.GetPointerPos) c.GetPointerPos = ngc_GetPointerPos;    
  
    if(ngHammerJS()) // HammerJS library is present
    {
      var opts={ drag_min_distance : 1, hold_threshold: 30 };
      if(c.DoGetPtrOptions) c.DoGetPtrOptions(eid, opts);

      var ous=Hammer.defaults.stop_browser_behavior.userSelect;
      try
      {
        Hammer.defaults.stop_browser_behavior.userSelect=''; // allow mouse selection by default
        elm.hammer=Hammer(elm, opts);
      }
      finally
      {
        Hammer.defaults.stop_browser_behavior.userSelect=ous;
      }
  
      function touch(e)
      {           
        if(!e.gesture) return;
                
        switch(e.type)
        {
          case 'touch':
            ngc_ptrstart(c,eid,elm,e,gstates);
            break;
          case 'release':
            if(!e.ngReleaseHandled) {
              e.ngReleaseHandled=true;
              ngc_ptrend(e);
            }
            break;
          case 'tap':
          case 'doubletap':
            // ignore, handled by ptrstart/end
            break;
          default:
            ngc_ptrgesture(e);
            break;
        }
      }
      for(var t=0; t<gestures.length; t++) 
          elm.addEventListener(gestures[t], touch, false);

      if(ev)
      {    
        // Check if hammer is not already registered on some parent node,
        // if yes, event delegation is not needed 
        var found=false;
        var p=elm.parentNode;
        while(p)
        {
          if(p.ngpointers) { found=true; break; }
          p=p.parentNode;
        }
        if(!found) elm.hammer.eventStartHandler(ev);
        return;
      }
    }
    else
    {    
      if(!ev) 
      {
        if(elm.addEventListener) { // W3C DOM
          elm.addEventListener('mousedown',mousedown,false);
        }
        else 
        if(elm.attachEvent) // IE DOM 
        {  
          elm.attachEvent("onmousedown",mousedown);
        }
        else { // No much to do
          elm['onmousedown']=ngAddEvent(elm['onmousedown'],mousedown);
        }
      }
    }
  }
  
  if(ev) mousedown(ev);
}

function ngc_PtrEvents(c, eid, gestures, elm)
{
  if(!c) return '';
  
  if(typeof gestures === 'undefined') gestures='';
  else if(typeof gestures!=='string') gestures=gestures.join(' ');
  if(typeof eid==='undefined') eid='';
  if(typeof elm==='undefined') elm=c.Elm();

  function mousedown(e)
  {
    ngc_ptrev(e,elm,gestures,eid);
  }

  if(!c.GetPointerPos) c.GetPointerPos = ngc_GetPointerPos;
  var evs = ngPtrStartEvents();
  for(var k in evs)
  {
    if(elm.addEventListener) { // W3C DOM
      elm.addEventListener(evs[k],mousedown,false);
    }
    else 
    if(elm.attachEvent) // IE DOM 
    {  
      elm.attachEvent('on'+evs[k],mousedown);
    }
    else { // No much to do
      elm['on'+evs[k]]=ngAddEvent(elm['onmousedown'],mousedown);
    }
  }
}

function ngc_PtrEventsHTML(c, eid, gestures)
{
  if(!c) return '';
  
  if(typeof gestures === 'undefined') gestures='';
  else if(typeof gestures!=='string') gestures=gestures.join(' ');
  if(typeof eid==='undefined') eid='';

  if(!c.GetPointerPos) c.GetPointerPos = ngc_GetPointerPos;    
  return ngPtrHTMLStartEvents('','ngc_ptrev(event,this,\''+gestures+'\',\''+eid+'\')');
}

function ngc_ptrev(e,elm,gestures,eid)
{
  if(elm.hammer) return; // hammer will handle pointer, nothing to do

  var c=ngGetControlByElement(elm);
  if(!c) return;
  if(!e) e = window.event;
  ngc_PtrListener(c, elm, eid, gestures, e);
}
  
function ngc_DoGetPointerPos(c,e,pi) 
{
  var ret;
  if (!e) e = window.event;
  if (!e) return;
  if((c)&&(typeof pi === 'undefined')) pi=c.PointerInfo;
  
  if((e.gesture)&&(Hammer)) // Hammer event
  {
    var px=e.gesture.center.pageX;
    var py=e.gesture.center.pageY;
    if(c) 
    {
      if(e.gesture.pointerType===Hammer.POINTER_MOUSE)
      {
        c.MouseX=px;
        c.MouseY=py;
      }
      else
      {
        c.TouchX=px;
        c.TouchY=py;    
      }
    }
    if(pi) {
      pi.X=px;
      pi.Y=py;
    }
    return new ScreenPt(px,py);      
  }
  else
  {
    var ox,oy;
    
    if(c) {
      ox = c.MouseX;
      oy = c.MouseY;
    }
    else {
      ox = 0;
      oy = 0;
    }
    
    var px = (e.clientX ? e.clientX : e.offsetX);
    var py = (e.clientY ? e.clientY : e.offsetY);

    // IE fix, include frame size if not in fullscreen
    if((ngIExplorer)&&(ngIExplorerVersion<=7)&&(screen.width>document.body.offsetWidth)) // fixed in IE8  
    {
      px-=2;
      py-=2;
    }
    // firefox fix:
    if(isNaN(px)) px=ox;                    
    if(isNaN(py)) py=oy;
    
    if(c) {
      c.MouseX = px; 
      c.MouseY = py;
    }
    if(pi) {
      pi.X=px;
      pi.Y=py;
    }                    
    return new ScreenPt(px,py);      
  }                    
}

function ngc_GetPointerPos(e) 
{
  return ngc_DoGetPointerPos(this,e)
}

function ngc_InitPointers()
{
  if(ngPointersInitialized) return;

  if(!ngHammerJS()) // HammerJS library is NOT present
  {
    function doc_mouse_down(e)
    {
      ngc_ptrstart(null, 'document', document.body, e, ['touch']);
    }
    
    function mouse_up(e)
    {
      ngc_ptrend(e);
    }
    
    function mouse_move(e)
    {
      var c=ngCurrentPtrControl;
      if(!c) return;

      if(!e) e=window.event;
      if((ngIExplorer)&&(ngIExplorerVersion<9)&&(!e.button)) // detected mouse up outside window for IE<9
      {
        mouse_up(e);
        return;
      }
      if(c.MouseDown)
      {
        ngc_ptrgesture(e,'drag');
      }
    }
    
    function mouse_out(e)
    {
      if (!e) e = window.event;
    
      if((ngCurrentPtrControl)&&(!ngIExplorer)&&(!e.relatedTarget)) // moved outside window, stop mousedown  
      {
        mouse_up(e);
      }
      return true;
    }
    
    document.onmousedown   = ngAddEvent(doc_mouse_down, document.onmousedown); // handle top-level/document mouse down
    document.onmousemove   = ngAddEvent(mouse_move, document.onmousemove); 
    document.onmouseup     = ngAddEvent(mouse_up, document.onmouseup);
    document.onmouseout    = ngAddEvent(document.onmouseout, mouse_out);
  }
  else
  {
    function touch(e)
    {
      if((e.gesture)&&(e.type==='touch'))
        ngc_ptrstart(null,'document',document.body,e,['touch']);
    }
    document.hammer=Hammer(document); 
    document.addEventListener('touch', touch, false); // handle top-level/document touch
  }  
  ngPointersInitialized = true;
}

// --- Control images ----------------------------------------------------------

function ngc_ChangeImage(dp)
{
  ng_SwapImageHTML(dp.id, dp.aL, dp.aT);
  var o=document.getElementById(dp.id);
  if(o) 
  {
    if((dp.L!=dp.oL)||(dp.T!=dp.oT))
    {
      o.setAttribute('L',dp.L);
      o.setAttribute('T',dp.T);
      o.setAttribute('oL',dp.oL);
      o.setAttribute('oT',dp.oT);
    }
    else
    {
      if(!ng_nullAttr(o.getAttribute('L'))) o.setAttribute('L','');
      if(!ng_nullAttr(o.getAttribute('T'))) o.setAttribute('T','');
      if(!ng_nullAttr(o.getAttribute('oL'))) o.setAttribute('oL','');
      if(!ng_nullAttr(o.getAttribute('oT'))) o.setAttribute('oT','');
    }
    return true;
  }          
  return false;
}

function ngc_ChangeImageS(dp)
{
  var i,id=dp.id;
  for(i=1;i<1000;i++)
  {
    dp.id=id+'_'+i;
    if(!ngc_ChangeImage(dp)) break;
  }
  dp.id=id;
  return(i>1);
}

function ngc_ChangeImg(id,state,enabled,image)
{
  if(image)
  {
    var dp=ngc_ImgProps(id, state, enabled, image);
    ngc_ChangeImage(dp);
  }  
}

function ngc_ChangeImgS(id,state,enabled,image)
{
  if(image)
  {
    var dp=ngc_ImgProps(id, state, enabled, image);
    ngc_ChangeImageS(dp);
  }  
}

function ngc_ChangeBox(id,state,enabled,images)
{
  if(!images) return;
  if(typeof images.Left !== 'undefined')
    ngc_ChangeImgS(id+'_L',state,enabled,images.Left);
  if(typeof images.Top !== 'undefined')
    ngc_ChangeImgS(id+'_T',state,enabled,images.Top);
  if(typeof images.Right !== 'undefined')
    ngc_ChangeImgS(id+'_R',state,enabled,images.Right);
  if(typeof images.Bottom !== 'undefined')
    ngc_ChangeImgS(id+'_B',state,enabled,images.Bottom);
  if(typeof images.LeftTop !== 'undefined') 
    ngc_ChangeImg(id+'_LT',state,enabled,images.LeftTop);
  if(typeof images.RightTop !== 'undefined')
    ngc_ChangeImg(id+'_RT',state,enabled,images.RightTop);
  if(typeof images.LeftBottom !== 'undefined')
    ngc_ChangeImg(id+'_LB',state,enabled,images.LeftBottom);
  if(typeof images.RightBottom !== 'undefined')
    ngc_ChangeImg(id+'_RB',state,enabled,images.RightBottom);
}

function ngc_EnterImg(id)
{
  var o=document.getElementById(id);
  if(o)
  {
    var l=o.getAttribute('oL');
    var t=o.getAttribute('oT');
    if((!ng_nullAttr(l))&&(!ng_nullAttr(t))) ng_SwapImageHTML(id, l, t)
    return true;
  }
  else return false;
}

function ngc_LeaveImg(id)
{
  var o=document.getElementById(id);
  if(o)
  {
    var l=o.getAttribute('L');
    var t=o.getAttribute('T');
    if((!ng_nullAttr(l))&&(!ng_nullAttr(t))) ng_SwapImageHTML(id, l, t)
    return true;
  }
  return false;
}

function ngc_EnterImgS(id)
{
  for(var i=1;i<1000;i++)
    if(!ngc_EnterImg(id+'_'+i)) break;
}

function ngc_LeaveImgS(id)
{
  for(var i=1;i<1000;i++)
    if(!ngc_LeaveImg(id+'_'+i)) break;
}

function ngc_EnterBox(id)
{
  ngc_EnterImg(id+'_LT');
  ngc_EnterImgS(id+'_T');
  ngc_EnterImg(id+'_RT');
  ngc_EnterImgS(id+'_L');
  ngc_EnterImgS(id+'_R');
  ngc_EnterImg(id+'_LB');
  ngc_EnterImgS(id+'_B');
  ngc_EnterImg(id+'_RB');
}

function ngc_LeaveBox(id)
{
  ngc_LeaveImg(id+'_LT');
  ngc_LeaveImgS(id+'_T');
  ngc_LeaveImg(id+'_RT');
  ngc_LeaveImgS(id+'_L');
  ngc_LeaveImgS(id+'_R');
  ngc_LeaveImg(id+'_LB');
  ngc_LeaveImgS(id+'_B');
  ngc_LeaveImg(id+'_RB');
}

function ngc_Img(html,dp,style,attrs,innerHTML)
{
  html.append(ng_CreateImageHTML(dp.id,dp.Src,dp.aL,dp.aT,dp.W,dp.H,style,(((dp.L!=dp.oL)||(dp.T!=dp.oT)) ? ' L="'+dp.L+'" T="'+dp.T+'" oL="'+dp.oL+'" oT="'+dp.oT+'" ' : '')+attrs,innerHTML));
}

function ngc_ImgSW(html,dp,l,w,style,attrs,innerHTML)
{
  html.append(ng_CreateImageHTMLSW(dp.id,l,w,dp.Src,dp.aL,dp.aT,dp.W, dp.H,"position:absolute;"+style,(((dp.L!=dp.oL)||(dp.T!=dp.oT)) ? ' L="'+dp.L+'" T="'+dp.T+'" oL="'+dp.oL+'" oT="'+dp.oT+'" ' : '')+attrs,innerHTML));
}

function ngc_ImgSH(html,dp,t,h,style,attrs,innerHTML)
{
  html.append(ng_CreateImageHTMLSH(dp.id,t,h,dp.Src,dp.aL,dp.aT,dp.W, dp.H,"position:absolute;"+style,(((dp.L!=dp.oL)||(dp.T!=dp.oT)) ? ' L="'+dp.L+'" T="'+dp.T+'" oL="'+dp.oL+'" oT="'+dp.oT+'" ' : '')+attrs,innerHTML));
}

function ngc_ImgBox(html, id, type, s, enabled, left, top, width, height, innersize, images, style, attrs, innerHTML, dp)
{
  var img;
  var ltstyle,tstyle,rtstyle,lstyle,rstyle,lbstyle,bstyle,rbstyle,cstyle;
  var ltattrs,tattrs,rtattrs,lattrs,rattrs,lbattrs,battrs,rbattrs,cattrs;
  var sz,d1,d2;
  
  var noimg = {L:0,T:0,aL:0,aT:0,oT:0,oL:0,W:0,H:0};
  var gstyle='position:absolute;';
  if(typeof style==='string') gstyle+=style;
  if(typeof style==='object')
  {
    ltstyle=ngVal(style.LeftTop,''); 
    tstyle=ngVal(style.Top,''); 
    rtstyle=ngVal(style.RightTop,''); 
    lstyle=ngVal(style.Left,''); 
    rstyle=ngVal(style.Right,''); 
    lbstyle=ngVal(style.LeftBottom,''); 
    bstyle=ngVal(style.Bottom,''); 
    rbstyle=ngVal(style.RightBottom,''); 
    cstyle=ngVal(style.Content,''); 
  }
  else ltstyle=tstyle=rtstyle=lstyle=rstyle=lbstyle=bstyle=rbstyle=cstyle='';
  var gattrs='';
  if(typeof attrs==='string') gattrs+=attrs;
  if(typeof attrs==='object')
  {
    ltattrs=ngVal(attrs.LeftTop,''); 
    tattrs=ngVal(attrs.Top,''); 
    rtattrs=ngVal(attrs.RightTop,''); 
    lattrs=ngVal(attrs.Left,''); 
    rattrs=ngVal(attrs.Right,''); 
    lbattrs=ngVal(attrs.LeftBottom,''); 
    battrs=ngVal(attrs.Bottom,''); 
    rbattrs=ngVal(attrs.RightBottom,''); 
    cattrs=ngVal(attrs.Content,''); 
  }
  else ltattrs=tattrs=rtattrs=lattrs=rattrs=lbattrs=battrs=rbattrs=cattrs='';

  if(typeof dp==='undefined') dp=new Object;
  dp.Left =(typeof images.Left === 'undefined' ? noimg : ngc_ImgProps(id+'_L', s, enabled, images.Left));
  dp.Top =(typeof images.Top === 'undefined' ? noimg : ngc_ImgProps(id+'_T', s, enabled, images.Top));
  dp.Right =(typeof images.Right === 'undefined' ? noimg : ngc_ImgProps(id+'_R', s, enabled, images.Right));
  dp.Bottom =(typeof images.Bottom === 'undefined' ? noimg : ngc_ImgProps(id+'_B', s, enabled, images.Bottom));
  dp.LeftTop =(typeof images.LeftTop === 'undefined' ? noimg : ngc_ImgProps(id+'_LT', s, enabled, images.LeftTop));
  dp.RightTop =(typeof images.RightTop === 'undefined' ? noimg : ngc_ImgProps(id+'_RT', s, enabled, images.RightTop));
  dp.LeftBottom =(typeof images.LeftBottom === 'undefined' ? noimg : ngc_ImgProps(id+'_LB', s, enabled, images.LeftBottom));
  dp.RightBottom =(typeof images.RightBottom === 'undefined' ? noimg : ngc_ImgProps(id+'_RB', s, enabled, images.RightBottom));

  if(innersize)
  {
    width+=dp.Left.W;
    width+=dp.Right.W;
    height+=dp.Top.H;
    height+=dp.Bottom.H;
  }
  sz=dp.LeftTop.W+dp.RightTop.W;
  if(sz>width)
  {
    d1=Math.round((sz-width)/2);
    d2=(sz-width)-d1;
    dp.LeftTop.W-=d1;
    dp.RightTop.W-=d2;
    dp.RightTop.L+=d2;
    dp.RightTop.oL+=d2;
    dp.RightTop.aL+=d2;        
  }
  sz=dp.LeftBottom.W+dp.RightBottom.W;
  if(sz>width)
  {
    d1=Math.round((sz-width)/2);
    d2=(sz-width)-d1;
    dp.LeftBottom.W-=d1;
    dp.RightBottom.W-=d2;
    dp.RightBottom.L+=d2;
    dp.RightBottom.oL+=d2;
    dp.RightBottom.aL+=d2;        
  }
  sz=dp.LeftTop.H+dp.LeftBottom.H;
  if(sz>height)
  {
    d1=Math.round((sz-height)/2);
    d2=(sz-height)-d1;
    dp.LeftTop.H-=d1;
    dp.LeftBottom.H-=d2;
    dp.LeftBottom.T+=d2;
    dp.LeftBottom.oT+=d2;
    dp.LeftBottom.aT+=d2;        
  }
  sz=dp.RightTop.H+dp.RightBottom.H;
  if(sz>height)
  {
    d1=Math.round((sz-height)/2);
    d2=(sz-height)-d1;
    dp.RightTop.H-=d1;
    dp.RightBottom.H-=d2;
    dp.RightBottom.T+=d2;
    dp.RightBottom.oT+=d2;
    dp.RightBottom.aT+=d2;        
  }
  
  img=dp.LeftTop;
  if(img.W) ngc_Img(html,img,gstyle+ltstyle+"left:"+left+"px;top: "+top+"px;",gattrs+ltattrs);
  
  img=dp.Top;
  if(img.H) ngc_ImgSW(html,img,dp.LeftTop.W,(width-dp.LeftTop.W-dp.RightTop.W),gstyle+tstyle+"top: "+top+"px;",gattrs+tattrs);

  img=dp.RightTop;
  if(img.W) ngc_Img(html,img,gstyle+rtstyle+"left:"+(left+width-img.W)+"px;top: "+top+"px;",gattrs+rtattrs);

  img=dp.Left;
  if(img.W) ngc_ImgSH(html,img,top+(dp.LeftTop.H ? dp.LeftTop.H : dp.Top.H),(height-(dp.LeftTop.H ? dp.LeftTop.H : dp.Top.H)-(dp.LeftBottom.H ? dp.LeftBottom.H : dp.Bottom.H)),gstyle+lstyle+"left: "+left+"px;",gattrs+lattrs);

  img=dp.Right;
  if(img.W) ngc_ImgSH(html,img,top+(dp.RightTop.H ? dp.RightTop.H : dp.Top.H),(height-(dp.RightTop.H ? dp.RightTop.H : dp.Top.H)-(dp.RightBottom.H ? dp.RightBottom.H : dp.Bottom.H)),gstyle+rstyle+"left: "+(left+width-img.W)+"px;",gattrs+rattrs);

  img=dp.LeftBottom;
  if(img.W) ngc_Img(html,img,gstyle+lbstyle+"left:"+left+"px;top: "+(top+height-img.H)+"px;",gattrs+lbattrs);
  
  img=dp.Bottom;
  if(img.H) ngc_ImgSW(html,img,dp.LeftBottom.W,(width-dp.LeftBottom.W-dp.RightBottom.W),gstyle+bstyle+"top: "+(top+height-img.H)+"px;",gattrs+battrs);

  img=dp.RightBottom;
  if(img.W) ngc_Img(html,img,gstyle+rbstyle+"left:"+(left+width-img.W)+"px;top: "+(top+height-img.H)+"px;",gattrs+rbattrs);
  
  if(typeof innerHTML !== 'undefined')
  {
    html.append('<div id="'+id+'_CB" style="'+gstyle+cstyle+'left:'+(left+dp.Left.W)+'px;top:'+(top+dp.Top.H)+'px;width:'+(width-dp.Left.W-dp.Right.W)+'px;height:'+(height-dp.Top.H-dp.Bottom.H)+'px;" '+gattrs+cattrs+'>');
    html.append(innerHTML);
    html.append('</div>');
  }  
}

function ngc_ImgProps(id, s, enabled, o)
{
  var v=new Object;
  v.id=id;
  v.W=o.W;
  v.H=o.H;
  v.Src=ngVal(o.Src,ngControlImages);
  if(!enabled)
  {
    switch(s)
    {
      case 0: 
      case false:
        v.L=o.DL; v.T=o.DT;
        v.oL=o.oDL; v.oT=o.oDT;
        break;
      case 1:
      case true:
        v.L=o.DSL; v.T=o.DST;
        v.oL=o.oDSL; v.oT=o.oDST;
        break;
      case 2:
        v.L=o.DGL; v.T=o.DGT;
        v.oL=o.oDGL; v.oT=o.oDGT;
        break;
    }
    v.L=ngVal(v.L, o.DL);
    v.T=ngVal(v.T, o.DT);
    v.oL=ngVal(v.oL, o.oDL);
    v.oT=ngVal(v.oT, o.oDT);
    
    if((typeof v.L === 'undefined')&&(typeof v.T === 'undefined')) enabled=true;
    else
    {
      v.L=ngVal(v.L, o.L);
      v.T=ngVal(v.T, o.T);
    }
  }
  if(enabled)
  {
    switch(s)
    {
      case 0: 
      case false:
        v.L=o.L; v.T=o.T;
        v.oL=o.oL; v.oT=o.oT;
        break;
      case 1:
      case true:
        v.L=o.SL; v.T=o.ST;
        v.oL=o.oSL; v.oT=o.oST;
        break;
      case 2:
        v.L=o.GL; v.T=o.GT;
        v.oL=o.oGL; v.oT=o.oGT;
        break;
    }
    v.L=ngVal(v.L, o.L);
    v.T=ngVal(v.T, o.T);
    v.oL=ngVal(v.oL, o.oL);
    v.oT=ngVal(v.oT, o.oT);
  }
  v.oL=ngVal(v.oL, v.L);
  v.oT=ngVal(v.oT, v.T);
  
  v.aL=v.L; v.aT=v.T;

  return v;
}

function ngc_ImgDrawProps(id, type, ctrlid, s, enabled, o)
{
  return ngc_ImgProps(id, s, enabled, o);
}

// --- ngApplication -----------------------------------------------------------

var APPPARAM_SERVER = 1
var APPPARAM_CLIENT = 2;
var APPPARAM_URL    = 4;

function nga_Elm()
{
  var appid=ngVal(this.ElmID,'ngApp');
  if(appid=='') appid='ngApp';
  
  var o=document.getElementById(appid);
  if(!o) o=document.body;
  return o;
}

function nga_GetLang()
{
  var l=ngc_Lang[this.Lang];
  if(typeof l === 'undefined') { this.Lang='en'; l=ngc_Lang['en']; }
  return l;
}

function nga_Text(t, defval)
{
  return ngTxt(t, defval);
}

function nga_Resource(rid)
{
  return ngRes(rid);
}

nga_RunTimer=null;
function nga_DoRunFinal()
{
  if((ngApp.OnRun)&&(!ngVal(ngApp.OnRun(),false))) return;

  if(typeof ngMain === 'function') ngMain();
  
  ngApp.SetOnParamsChanged = nga_SetOnParamsChanged;
  ngApp.SetOnParamsChanged(ngApp.OnParamsChanged);
  
  if(ngApp.OnRunFinished) ngApp.OnRunFinished();
  if(ngApp.OnRunInternalFinished) ngApp.OnRunInternalFinished();

  var o=document.getElementById('ngAppLoading');
  if(o) o.className='ngAppLoaded'; 

  // IE7 Fix redraw
  var fix7=document.body.offsetLeft;  
}

function nga_DoRun()
{
  if(nga_RunTimer) clearTimeout(nga_RunTimer); nga_RunTimer=null;

  // Language detection
  var lng=ngVal(ngApp.StartParams.Lang,'');
  if(lng=='') lng=ngVal(ng_GET('lang'),'');
  
  if(lng=='cs') lng='cz';
  if((lng=='')||(typeof ngc_Lang[lng]==='undefined'))
  {
    if (navigator.userLanguage) // Explorer
      lng = navigator.userLanguage;
    else if (navigator.language) // FF
      lng = navigator.language;
    if(lng=='cs') lng='cz';
    if((lng=='')||(typeof ngc_Lang[lng]==='undefined')) 
    {
      if((lng=='cz')&&(typeof ngc_Lang['sk']!=='undefined')) lng='sk';
      else
      {
        if((lng=='sk')&&(typeof ngc_Lang['cz']!=='undefined')) lng='cz';
        else lng='en';
      }
    }
  }
  ngApp.Lang=lng;

  // Controls version check
  var reqver,reqsubver;
  if(typeof ngApp.StartParams.ReqControlsVer === 'undefined') 
  {
    reqver=ngControlsVer;
    reqsubver=ngControlsSubVer;
  }
  else
  {
    reqver=parseInt(ngApp.StartParams.ReqControlsVer);
    reqsubver=parseInt(ngVal(ngApp.StartParams.ReqControlsSubVer,0));
  }
  if((reqver>ngControlsVer)||((reqver==ngControlsVer)&&(reqsubver>ngControlsSubVer)))
  {
    var o=document.getElementById('ngAppLoading');
    if(o) o.style.display='none';
        
    alert(ng_sprintf(ngTxt('ngAppOldControlsVersion'),reqver,reqsubver,ngControlsVer,ngControlsSubVer));
    return;
  }  

  ng_PreloadImagesBegin();
  ngControlImages=ng_URL(ngControlImages);
  ngInitUserControls();
  if(ngControlImages!='') ng_PreloadImage(ngControlImages);

  try{ window.focus(); } catch(e) { } // FF3 fix
  
  if(typeof ngInit === 'function') ngInit();
  ng_PreloadImagesEnd(nga_DoRunFinal);
}

function nga_Run()
{
  nga_RunTimer=setTimeout("nga_DoRun();",100);
}

function nga_SetTitle(t)
{
  if(ngVal(t,'')!='') { try { document.title=this.Text(t); } catch(e) { } }
}

function nga_MessageBox(text,yesno)
{
  if(!ngVal(yesno,false)) alert(this.Text(text));
  else return confirm(this.Text(text));
}

function ng_SetBounds(o,props)
{
  var left=props.L;
  var top=props.T;
  var right=props.R;
  var bottom=props.B;
  var width=props.W;
  var height=props.H;
  
  if(typeof left === 'number')   left+='px';
  if(typeof right === 'number')  right+='px';
  if(typeof top === 'number')    top+='px';
  if(typeof bottom === 'number') bottom+='px';
  if(typeof width === 'number')  width =(width <=0 ? '0px' : width+'px');
  if(typeof height === 'number') height=(height<=0 ? '0px' : height+'px'); 

  if(typeof top !== 'undefined') o.style.top=top;
  else o.style.top='';
  if(typeof left !== 'undefined') o.style.left=left;
  else o.style.left='';
  
  if((typeof props.B !== 'undefined')||(typeof props.R !== 'undefined')) 
  {
    if(ngIExplorer6)
    {
      var alignfix=ngVal(props.IE6AlignFix, ngIE6AlignFix);
      if((typeof props.B !== 'undefined')&&((alignfix)||(typeof props.T !== 'undefined')))
      {          
        if((typeof props.T === 'undefined')||(typeof props.H === 'undefined'))
        {
          if(typeof props.T !== 'undefined') o.setAttribute('FT',props.T); 
          else if(!ng_nullAttr(o.getAttribute('FT'))) o.setAttribute('FT',''); 
          if(typeof props.B !== 'undefined') o.setAttribute('FB',props.B);
          else if(!ng_nullAttr(o.getAttribute('FB'))) o.setAttribute('FB','');
        } 
      }
      else
      {
        if(!ng_nullAttr(o.getAttribute('FT'))) o.setAttribute('FT',''); 
        if(!ng_nullAttr(o.getAttribute('FB'))) o.setAttribute('FB',''); 

        if(typeof bottom !== 'undefined') o.style.bottom=bottom;
        else o.style.bottom='';
      }
       
      if((typeof props.R !== 'undefined')&&((alignfix)||(typeof props.L !== 'undefined')))
      {          
        if((typeof props.L === 'undefined')||(typeof props.W === 'undefined'))
        {
          if(typeof props.L !== 'undefined') o.setAttribute('FL',props.L); 
          else if(!ng_nullAttr(o.getAttribute('FL'))) o.setAttribute('FL',''); 
          if(typeof props.R !== 'undefined') o.setAttribute('FR',props.R);
          else if(!ng_nullAttr(o.getAttribute('FR'))) o.setAttribute('FR','');
        } 
      }
      else
      {
        if(!ng_nullAttr(o.getAttribute('FL'))) o.setAttribute('FL',''); 
        if(!ng_nullAttr(o.getAttribute('FR'))) o.setAttribute('FR',''); 

        if(typeof right !== 'undefined') o.style.right=right;
        else o.style.right='';
      }
    }
    else
    {
      if(typeof bottom !== 'undefined') o.style.bottom=bottom;
      else o.style.bottom='';
      if(typeof right !== 'undefined') o.style.right=right;
      else o.style.right='';
    }
  }
  else
  {
    if(!ng_nullAttr(o.getAttribute('FT'))) o.setAttribute('FT',''); 
    if(!ng_nullAttr(o.getAttribute('FB'))) o.setAttribute('FB',''); 
    if(!ng_nullAttr(o.getAttribute('FL'))) o.setAttribute('FL',''); 
    if(!ng_nullAttr(o.getAttribute('FR'))) o.setAttribute('FR',''); 
  }
  if(typeof width !== 'undefined') o.style.width=width;
  else o.style.width='';
  if(typeof height !== 'undefined') o.style.height=height;
  else o.style.height='';

  ng_SetAutoResize(o);
}

var ngAutoRSync=1;
var ngAutoResize=null;
var ngAutoResizeRefs=null;
var ngAutoResizeCnt=0;
var ngAutoResizeTimer=null;

function ng_StartAutoResize(o,ref)
{
  if(typeof o === 'string') o=document.getElementById(o);
  if((!o)||(o.id=='')) return;  

  if(!ngAutoResize) ngAutoResize=new Array(); 
  if(!ngAutoResizeRefs) ngAutoResizeRefs=new Array(); 
  if(typeof ngAutoResize[o.id] === 'undefined') 
  {
    ngAutoResizeCnt++;
    ngAutoResize[o.id]=ngAutoRSync;
  }
  var r=ngAutoResizeRefs[o.id];
  if(typeof r === 'undefined') 
  {
    r=new Array;
    ngAutoResizeRefs[o.id]=r;
  }
  r[ref]=true;     
}

function ng_EndAutoResize(o,ref)
{
  if(typeof o === 'string') o=document.getElementById(o);
  if((!o)||(o.id=='')) return;  

  if((ngAutoResize)&&(typeof ngAutoResize[o.id] !== 'undefined'))
  {
    var r=ngAutoResizeRefs[o.id];
    if(typeof r !== 'undefined') delete r[ref];
    var cnt=0;
    for(var i in r)
    {
      if(typeof r[i]!=='undefined') { cnt=1; break; }
    }
    if(!cnt)
    {
      ngAutoResizeCnt--;
      delete ngAutoResize[o.id];
      if(ngAutoResizeCnt<=0) { ngAutoResize=null; ngAutoResizeRefs=null; }
    }
  }
}

function ng_SetAutoResize(o)
{
  if(typeof o === 'string') o=document.getElementById(o);
  if((!o)||(o.id=='')) return;  
  var r=o.getAttribute('FR');
  var b=o.getAttribute('FB');
  if((!ng_nullAttr(r))||(!ng_nullAttr(b))||((o.style.left!='')&&(o.style.right!=''))||((o.style.top!='')&&(o.style.bottom!='')))
  {
    ng_StartAutoResize(o,'bounds');
    ng_Align(o.id);
  }
  else
  {
    ng_EndAutoResize(o,'bounds');
  }  
}

function nga_OnResize(e)
{
  if((typeof ngApp === 'undefined')||(!ngApp))
  {
    if(ngAutoResizeTimer) clearTimeout(ngAutoResizeTimer); ngAutoResizeTimer=null;
    if((ngAutoResize)&&(ngAutoResizeCnt>0)) ngAutoResizeTimer=setTimeout("nga_DoResize()", 100);
    return;
  }
  var ae=ngApp.Elm();
  if(ae)
  {
    var aw=ng_ClientWidth(ae);
    var ah=ng_ClientHeight(ae);
    if((aw===ngApp.LastResizeW)&&(ah===ngApp.LastResizeH)) return;

    if(ngApp.MobileKeyboardTimer) clearTimeout(ngApp.MobileKeyboardTimer);
    delete ngApp.MobileKeyboardTimer;    

    ngApp.LastResizeW=aw;
    ngApp.LastResizeH=ah;
  }
  
  if(ngAutoResizeTimer) clearTimeout(ngAutoResizeTimer); ngAutoResizeTimer=null;
  if((ngApp.OnDeviceChanged)||((ngAutoResize)&&(ngAutoResizeCnt>0))) ngAutoResizeTimer=setTimeout("nga_DoResize()", 100);
}

function nga_DoResizeElement(id)
{
  var o=document.getElementById(id);
  if((!o)||(ngAutoResize[id]==ngAutoRSync)) return; 

  var pobjs=new Array();
  var p=o.parentNode;
  while(p)
  {
    if(ngAutoResize[p.id]) pobjs[pobjs.length]=p.id;
    p=p.parentNode;
  }
  
  for(var i=pobjs.length-1;i>=0;i--)
    nga_DoResizeElement(pobjs[i]);
  
  c=ngGetControlById(id);
  if(!c) 
  {
    r=ng_Align(o);
    ngAutoResize[id]=ngAutoRSync;
    return;
  }
  po=c.ParentControl;
  while(po)
  {
    if(typeof ngAutoResize[po.ID] !== 'undefined') return; 
    po=po.ParentControl;
  }
  nga_DoResizeControl(c,true);
}

function nga_DoResizeControl(c,doupdate)
{
  var update=false;
  if(typeof ngAutoResize[c.ID] !== 'undefined')
  { 
    if(doupdate)
    {
      var r=c.Align(c.ID);
      if(((r&4)||(r&8))&&(c.Update)) { update=true; doupdate=false; }
    }
    ngAutoResize[c.ID]=ngAutoRSync;
  }
  if((typeof c.ChildControls !== 'undefined')&&(c.ChildControls.length>0))
  {
    for(var i=0;i<c.ChildControls.length;i++)
      nga_DoResizeControl(c.ChildControls[i],doupdate);
  }
  if(update) c.Update();
}

function nga_DoResize(e)
{
  if(ngAutoResizeTimer) clearTimeout(ngAutoResizeTimer); ngAutoResizeTimer=null;
  if((ngApp.OnDeviceChanged)&&(typeof ngDetectDevice === 'function'))
  {
    var device = ngDetectDevice();
    if(ngDevice!=device)
    {
      if(ngVal(ngApp.OnDeviceChanged(device),false))
        ngDevice=device;    
    }
  }
  if((!ngAutoResize)||(ngAutoResizeCnt<=0)) return;

  ngAutoRSync++;
  for(var i in ngAutoResize)
    nga_DoResizeElement(i);
}

function nga_GetRPC()
{
  if(!this.RPC) this.RPC=new ngRPC('ngApp');
  return this.RPC;
}

function nga_sendRPCRequest(url,nocache)
{
  var lngmodified=false,devmodified=false,dbgmodified=false;
  if(typeof this.Params === 'object')
  {  
    if((typeof ngDevice !== 'undefined')&&(typeof this.Params.appdevice === 'undefined')) {
      this.Params.appdevice=ngDevice;      
      devmodified=true;
    }
  
    if((typeof this.Params.lang === 'undefined')&&(typeof ngApp === 'object')) {
      this.Params.lang=ngApp.Lang;
      lngmodified=true;
    }
    
    if((ngHASDEBUG())&&(typeof this.Params.appdebug === 'undefined')) {
      this.Params.appdebug=ngDEBUG;      
      dbgmodified=true;
    }
  }
  var ret=this.sendRequestDefault(url, nocache);
  if(lngmodified) delete this.Params.lang;
  if(devmodified) delete this.Params.appdevice;
  if(dbgmodified) delete this.Params.appdebug;
  
  return ret;
}

function nga_AddRPCLang(rpc)
{
  rpc.sendRequestDefault = rpc.sendRequest;
  rpc.sendRequest = nga_sendRPCRequest;
  return true;
}


function nga_BuildURLParams(url, type)
{
  var hash='';
  var v,client,t,pi;
  if(typeof this.ParamInfo !== 'undefined')
  {
    for(var i in this.ParamInfo)
    {
      pi = this.ParamInfo[i];
      if((typeof pi === 'undefined')||(!pi)) continue;

      t=ngVal(pi.Type, APPPARAM_URL);
      if(!(t & type)) continue;
      
      v=this.Param(i);
      if(!ngVal(pi.Persist,false)) continue;

      client=t & APPPARAM_CLIENT;
      if(typeof pi.Encode === 'function') 
      {
        if((typeof v==='undefined')||(typeof v==='function')) continue;
        v=pi.Encode(i)+'='+pi.Encode(v);
      }
      else
      {
        if(this.OnEncodeParam) v=this.OnEncodeParam(this, i, v);
        else
        {
          if((typeof v==='undefined')||(typeof v==='function')) continue;
                
          if(client) v=ng_HashEncode(i)+'='+ng_HashEncode(v);          
          else       v=ng_URLEncode(i)+'='+ng_URLEncode(v);
        }
      }

      if((typeof v==='undefined')||(typeof v==='function')) continue;      
      if(client)
      {
        if(hash!='') hash+='@';
        hash+=v;
      }
      else url=ng_AddURLParam(url,v)
    }
  }
  if(hash!='') 
  {
    if(url.indexOf('#')!=-1) url=url+'@';
    else url=url+'#';
    url=url+hash;
  }
  return url;
}

function nga_CallURL(url)
{
  url=this.BuildURLParams(url,APPPARAM_CLIENT | APPPARAM_URL);
  if(this.OnCallURL) url=this.OnCallURL(this, url);
  return url;
}

function nga_Call(url)
{
  url=this.CallURL(url);
  if(this.OnCall) url=this.OnCall(this, url);
  if(url=='') return;
  ng_Redirect(url,false);
}

function nga_CallServerURL(url)
{
  url=this.BuildURLParams(url,APPPARAM_SERVER);
  if(this.OnCallServerURL) url=this.OnCallServerURL(this, url);
  return url;
}

function nga_CallServer(url, nocache)
{
  this.CallServerEx(url,undefined,nocache);
}

function nga_CallServerEx(url, params, nocache)
{
  url=this.CallServerURL(url);
  if(this.OnServerCall) url=this.OnServerCall(this, url, nocache, params);
  if(url=='') return;
  var rpc=this.GetRPC();
  var oldparams=rpc.Params;
  if(typeof params!=='undefined') rpc.Params=params;  
  rpc.sendRequest(url, nocache);
  rpc.Params=oldparams;
}

function nga_Param(p)
{
  if(!this.params_parsed) 
  {
    this.params_parsed=true;
    this.ParseParams();
  }
  var v=ng_GET(p);
  if(this.OnGetParam) v=this.OnGetParam(this,p,v);
  return v;
}

function nga_SetParam(p, v, type)
{
  if(!this.params_parsed) 
  {
    this.params_parsed=true;
    this.ParseParams();
  }
  if(typeof p === 'object')
  {
    this.BeginUpdateParams();
    for(var i in p) this.SetParam(i,p[i],type);
    this.EndUpdateParams();
    return;
  }
  if(p=='') return;
  
  this.BeginUpdateParams();
  if(this.OnSetParam) v=this.OnSetParam(this,p,v,type);
  var changed=false;
  if(ngURLParams[p] != v) changed=true;
  ngURLParams[p] = v;
  if(typeof v === 'undefined')
  {
    if(typeof this.ParamInfo !== 'undefined') 
    {
      var pi = this.ParamInfo[p];
      if(typeof pi !=='undefined' && (pi.Type & APPPARAM_CLIENT)&&(changed)) this.params_changed=true;
    }
  }
  else
  {
    if(typeof type !== 'undefined')
    {
      if(typeof this.ParamInfo === 'undefined') this.ParamInfo=new Array();
      var pi = this.ParamInfo[p];
      if(typeof pi === 'undefined') { pi=new Object; this.ParamInfo[p] = pi; }
      pi.Type=type;
      if((pi.Type & APPPARAM_CLIENT)&&(changed)) this.params_changed=true;
    }
  }
  this.EndUpdateParams();
}

function nga_SetParamEncodingFnc(param, encodefnc, decodefnc)
{
  if(typeof this.ParamInfo === 'undefined') this.ParamInfo=new Array();
  var pi = this.ParamInfo[param];
  if(typeof pi === 'undefined') { pi=new Object; this.ParamInfo[param] = pi; }
  pi.Encode=encodefnc;
  pi.Decode=decodefnc;
}

function nga_SetClientParam(p, v)
{
  this.SetParam(p,v,APPPARAM_CLIENT);
}

function nga_SetURLParam(p, v)
{
  this.SetParam(p,v,APPPARAM_URL);
}

function nga_SetServerParam(p,v)
{
  this.SetParam(p,v,APPPARAM_SERVER);
}

function nga_ParamType(p)
{
  if(typeof this.ParamInfo === 'undefined') return undefined;
  var pi = this.ParamInfo[p];
  if((typeof pi === 'undefined')||(!pi)) return undefined;
  return ngVal(pi.Type,APPPARAM_URL); 
}

function nga_PersistParam(p, v)
{
  if(typeof p === 'object')
  {
    for(var i=0;i<p.length;i++)
      this.PersistParam(p[i],v);
    return;
  }
  if(p=='') return;
  v=ngVal(v,true);
  
  if(typeof this.ParamInfo === 'undefined')
  {
    if(v) this.ParamInfo = new Array();
    else return;
  }
  var pi = this.ParamInfo[p];
  if((typeof pi === 'undefined')||(!pi))
  {
    if(v) { pi=new Object; this.ParamInfo[p] = pi; }
    else return;
  }
  pi.Persist = v;
}

function nga_SetParamType(p, type)
{
  type=ngVal(type,APPPARAM_URL);
  if(typeof p === 'object')
  {
    for(var i=0;i<p.length;i++)
      this.SetParamType(p[i],type);
    return;
  }
  if(p=='') return;

  if(typeof this.ParamInfo === 'undefined') this.ParamInfo = new Array();
  var pi = this.ParamInfo[p];
  if((typeof pi === 'undefined')||(!pi)) { pi=new Object; this.ParamInfo[p] = pi; }
  pi.Type = type;
}

function nga_BeginUpdateParams()
{
  this.params_update_cnt++;
}

function nga_EndUpdateParams()
{
  this.params_update_cnt--;
  if(this.params_update_cnt<=0)
  {
    if(this.params_changed) this.UpdateParams();
    this.params_update_cnt = 0;
  }
}

function nga_ParseParams2(url, septag)
{
  var arr=new Array();
  if(url=='') return arr;
  var vars = url.split(septag);
  var s;
  for(var i=0;i<vars.length;i++)
  {
    s=vars[i].split('=');
    if(s[0].substr(0,4)=='amp;') s[0]=s[0].substr(4);
    arr[ ng_unescape(s[0]) ] = (s.length>1 ? s[1] : null);
  }
  return arr;
}

function nga_ParseParams(url)
{
  ngURLParams = new Array();
  var url=ngVal(url,window.location.href);
  var i1=url.indexOf('?');
  var i2=url.indexOf('#');
  var url1='';
  var url2='';
  if(i2>=0) 
  {
    url2=url.substr(i2+1);
    url=url.substr(0,i2);  
  }
  if(i1>=0) url1=url.substr(i1+1);
  var urlparams=nga_ParseParams2(url1,'&');
  for(var i in urlparams)
    ngURLParams[i]=urlparams[i];

  var clientparams=nga_ParseParams2(url2,'@');
  for(var i in clientparams)
    ngURLParams[i]=clientparams[i];

  var pi,v;
  if(typeof this.ParamInfo === 'undefined') this.ParamInfo = new Array();
  for(var i in urlparams)
  {
    pi = this.ParamInfo[i];
    if(typeof pi === 'undefined') 
    { 
      pi=new Object;
      this.ParamInfo[i]=pi;
    }  
    pi.Type=APPPARAM_URL;

    v=urlparams[i];
    if(typeof pi.Decode === 'function') 
    {
      if((typeof v==='undefined')||(typeof v==='function')) continue;
      v=pi.Decode(v);
    }  
    else 
    {
      if(this.OnDecodeParam) v=this.OnDecodeParam(this, i, v); 
      else 
      {
        if((typeof v==='undefined')||(typeof v==='function')) continue;
        v=ng_unescape(v);
      }
    }
    if((typeof v==='undefined')||(typeof v==='function')) continue;
    ngURLParams[i]=v;
  }

  for(var i in clientparams)
  {
    pi = this.ParamInfo[i];
    if(typeof pi === 'undefined') 
    {
      pi=new Object; 
      this.ParamInfo[i]=pi;
    }
    pi.Type=APPPARAM_CLIENT;

    v=clientparams[i];
    if(typeof pi.Decode === 'function') 
    {
      if((typeof v==='undefined')||(typeof v==='function')) continue;
      v=pi.Decode(v);
    }
    else 
    {
      if(this.OnDecodeParam) v=this.OnDecodeParam(this, i, v); 
      else 
      {
        if((typeof v==='undefined')||(typeof v==='function')) continue;
        v=ng_unescape(v);
      }
    }
    if((typeof v==='undefined')||(typeof v==='function')) continue;
    ngURLParams[i]=v;
  }

  ngURLParamsParsed=true;
  this.LocationHash = window.location.hash;
}

function nga_UpdateParams()
{
  this.params_changed=false;
  if(typeof this.ParamInfo === 'undefined') return;
  
  var params='';
  var pi,v;
  for(var i in this.ParamInfo)
  {
    pi = this.ParamInfo[i];
    if((typeof pi === 'undefined')||(!pi)) continue;    
    if(!(ngVal(pi.Type,APPPARAM_URL)&APPPARAM_CLIENT)) continue;
    v=this.Param(i);
    if(!ngVal(pi.Persist,false)) 
    {
      delete this.ParamInfo[i];
      delete ngURLParams[i];
      continue;
    }
    if(typeof pi.Encode === 'function') 
    {
      if((typeof v === 'undefined')||(typeof v === 'function')) continue;
      v=pi.Encode(i)+'='+pi.Encode(v);
    }
    else 
    {
      if(this.OnEncodeParam) v=this.OnEncodeParam(this, i, v);
      else 
      {
        if((typeof v === 'undefined')||(typeof v === 'function')) continue;
        v=ng_HashEncode(i)+'='+ng_HashEncode(v);
      }
    }
    if((typeof v === 'undefined')||(typeof v === 'function')) continue;
    if(params!='') params+='@';
    params+=v;
  }
  if((params!='')||(window.location.hash!='')) params='#'+params;

  if(window.location.hash!=params)
  {
    ngApp.LocationHash = params;
    try
    {
      window.location.hash=params;
    }
    catch(e)
    {
    }
    var o=document.getElementById('ngAppHistFix');
    if((o)&&(ngIExplorer)) nga_WriteIFRAMEHistory(o,params);
    nga_CheckParamChange();
  }    
}

function nga_WriteIFRAMEHistory(elm, hash)
{
  if(ngWinStoreApp) return;
  
  var doc=(elm.contentDocument ? elm.contentDocument : elm.contentWindow.document);
  if(doc)
  {
    doc.open();
    doc.write('<html><body onload="if(parent) { if(parent.window.location.hash!=\''+hash+'\') { parent.window.location.hash=\''+hash+'\'; parent.nga_CheckParamChange(); } }"></body></html>');
    doc.close();
  }           
}

var nga_CheckParamChangeMode;
 
function nga_CheckParamChange()
{
  if(typeof nga_CheckParamChangeMode==='undefined')
  {
    nga_CheckParamChangeMode=0; // timer
    if(('onhashchange' in window)&&((!ngIExplorer)||(ngIExplorerVersion>7))) // supported from IE8
    {
      window.onhashchange = ngAddEvent(window.onhashchange,nga_CheckParamChange);
      nga_CheckParamChangeMode=1; // event
    }
  }  
  if((typeof ngApp !== 'object') || (!ngApp)) return;
  if(ngApp.url_history_timer) clearTimeout(ngApp.url_history_timer); ngApp.url_history_timer=null;
  try
  {
    if(ngApp.LocationHash!=window.location.hash)
    { 
      ngApp.DoParamsChanged();
    }
    if(!nga_CheckParamChangeMode)
      ngApp.url_history_timer=setTimeout('nga_CheckParamChange()',300);
  }
  catch(e)
  {
  }
}

function nga_DoParamsChanged()
{
  this.ParseParams();
  if(this.OnInternalParamsChanged) this.OnInternalParamsChanged(this);
  if(this.OnParamsChanged) this.OnParamsChanged(this);
}

function nga_SetOnParamsChanged2(fnc)
{
  this.OnParamsChanged=fnc;
}

function nga_InitParamsChanged()
{
  var o=document.getElementById('ngAppHistFix');
  if(!o)
  {
    if(ngIExplorer) // IE history fix (todo: check IE8)
    {
      o = document.createElement("iframe");
    }
    if(ngOpera) // Opera history fix
    {
      o=document.createElement("img");
      o.src="javascript:location.href='javascript:nga_CheckParamChange();';";
    }
    if(o) 
    {
      var parent=(typeof ngApp !== 'undefined' ? ngApp.Elm() : document.body);

      o.id="ngAppHistFix";      
      o.style.visibility="hidden";
      o.style.position="absolute";
      o.style.left="0px";
      o.style.top="0px";
      o.style.width="0px";
      o.style.height="0px";
      parent.appendChild(o);
      if(ngIExplorer) nga_WriteIFRAMEHistory(o, ngApp.LocationHash);
    }
    nga_CheckParamChange();
  }
}

function nga_SetOnParamsChanged(fnc)
{
  this.OnParamsChanged=fnc;  
  if(typeof fnc === 'function') nga_InitParamsChanged();
}

function nga_FloatVersion(strver)
{
  strver = strver.replace(/[^0-9.]/g, '');
  return parseFloat(strver);
}

function nga_RegisterAPI(id, api, version, owner)
{
  if(ngVal(id,'')=='') return false;
  if(typeof api !== 'object') return false;
  api.StrVersion=ngVal(version,ngVal(api.StrVersion,ngVal(''+api.Version,'1.0')));
  api.Version=nga_FloatVersion(api.StrVersion);
    
  if(typeof owner==='undefined') 
  {
    if((typeof ngCurModule !== 'undefined')&&(ngCurModule)) owner=ngCurModule;
    else owner=this;
  }
  if(typeof api.Owner==='undefined') api.Owner=owner;
  
  var apidock=this.APIs[id];
  if(typeof apidock==='undefined')
  {
    apidock=new Object;
    apidock.ID=id;
    apidock.Versions=new Array();
    this.APIs[id]=apidock;
  }
  var lapi,i;
  for(i=0;i<apidock.Versions.length;i++)
  {   
    lapi=apidock.Versions[i];
    if(lapi.Version==api.Version)  
    {  
      if(lapi.Owner==api.Owner) // already exists
        return false;
      break;
    }
    if(lapi.Version<api.Version) break;
  }
  if(typeof api.AddEvent === 'undefined' )    api.AddEvent    = ngObjAddEvent;
  if(typeof api.RemoveEvent === 'undefined' ) api.RemoveEvent = ngObjRemoveEvent;

  apidock.Versions.splice(i,0,api);
  return true;
}

function nga_UnregisterAPI(id, owner, version)
{
  if(ngVal(id,'')=='') return false;
  var apidock=this.APIs[id];
  if(typeof apidock==='undefined') return false;
  
  version=ngVal(version,'');
  
  if((typeof owner==='undefined')&&(version=='')) // delete all
  {
    delete this.APIs[id];
    return true;
  }
  
  var ver=(version!='' ? nga_FloatVersion(version) : 0); 

  var api,i,ret=false;
  for(var i=apidock.Versions.length-1;i>=0;i--)
  {   
    api=apidock.Versions[i];
    if(((typeof owner!=='undefined')&&(api.Owner==owner))
    ||((version!='')&&(api.Version==ver)))
    {
      ret=true;
      apidock.Versions.splice(i,1);
    }
  }
  if(!apidock.Versions.length) delete this.APIs[id];
  return ret;
}

function nga_GetAPIAll(id, minreqversion, maxreqversion)
{
  var found=new Array();
  var apidock=this.APIs[id];
  if(typeof apidock==='undefined') return found; // API not exists
  var apis=apidock.Versions;

  if(!apis.length) return found; // no APIs versions
  
  minreqversion=ngVal(minreqversion,'');
  maxreqversion=ngVal(maxreqversion,'');

  var j,api=null;
  var minreqver=(minreqversion!='' ? nga_FloatVersion(minreqversion) : 0);  
  var maxreqver=(maxreqversion!='' ? nga_FloatVersion(maxreqversion) : 0);  
  var owners=new Array();  
  for(var i=0;i<apis.length;i++)
  {
    api=apis[i];
    if((maxreqversion!='')&&(api.Version>maxreqver)) continue;
    if((minreqversion!='')&&(api.Version<minreqver)) // not found
      break;
    for(j=owners.length-1;j>=0;j--)
      if(owners[j]==api.Owner) break;
    if(j>=0) continue; // owner already used
    found[found.length]=api;
    owners[owners.length]=api.Owner;
  }
  return found;
}

function nga_GetAPIAllByStrVersion(id, strver)
{
  var found=new Array();
  var apidock=this.APIs[id];
  if(typeof apidock==='undefined') return found; // API not exists
  
  var j,api,apis=apidock.Versions;
  var owners=new Array();  
  for(var i=0;i<apis.length;i++)
  {
    api=apis[i];
    if(api.StrVersion!=strver) continue; 

    for(j=owners.length-1;j>=0;j--)
      if(owners[j]==api.Owner) break;
    if(j>=0) continue; // owner already used
    found[found.length]=api;
    owners[owners.length]=api.Owner;
  }
  return found;
}

function nga_GetAPI(id, minreqversion, maxreqversion)
{
  var apidock=this.APIs[id];
  if(typeof apidock==='undefined') return null; // API not exists
  var apis=apidock.Versions;

  if(!apis.length) return null; // no APIs versions
  
  minreqversion=ngVal(minreqversion,'');
  maxreqversion=ngVal(maxreqversion,'');

  if((minreqversion=='')&&(maxreqversion=='')) // take top most version
    return apis[0];
  
  var api=null;
  var minreqver=(minreqversion!='' ? nga_FloatVersion(minreqversion) : 0);  
  var maxreqver=(maxreqversion!='' ? nga_FloatVersion(maxreqversion) : 0);  
  for(var i=0;i<apis.length;i++)
  {
    api=apis[i];
    if((maxreqversion!='')&&(api.Version>maxreqver)) continue;
    if((minreqversion!='')&&(api.Version<minreqver)) // not found
      return null;
    break;
  }
  return api;
}

function nga_GetAPIByStrVersion(id, strver)
{
  var apidock=this.APIs[id];
  if(typeof apidock==='undefined') return null; // API not exists
  
  var apis=apidock.Versions;
  for(var i=0;i<apis.length;i++)
    if(apis[i].StrVersion==strver) return apis[i];
  return null;
}

function nga_ProcessInvokeLater()
{
  if(!ngApp) return;
  clearTimeout(ngApp.invokelater_timer);
  ngApp.invokelater_timer=null;
  
  if(ngApp.invokelater_events.length>0)
  {
    var fnc=ngApp.invokelater_events[0];
    ngApp.invokelater_events.splice(0,1);
    if(typeof fnc==='function') fnc();
    if(ngApp.invokelater_events.length>0)
      ngApp.invokelater_timer=setTimeout("nga_ProcessInvokeLater()",1);    
  }
}

function nga_InvokeLater(fnc)
{
  if(typeof fnc!=='function') return;
  
  if(!this.invokelater_timer)
    this.invokelater_timer=setTimeout("nga_ProcessInvokeLater()",1);
  this.invokelater_events.push(fnc);
}

/**
 *  Class: ngApplication
 *  This class encapsulates web application.  
 *
 *  Syntax:
 *    new *ngApplication* ([object startparams = { }, string elm = 'ngApp', bool autorun=true])
 *    
 *  Parameters:
 *    startparams - application startup parameters 
 *    elm - application container DIV id 
 *    autorun - run application after object creation
 */
function ngApplication(startparams, elm, autorun)
{
  ngApp=this;

  if(typeof startparams !== 'undefined') this.StartParams=startparams;
  else this.StartParams=new Object;
   
  if(ngIExplorer6) // fix background image cache in IE6
  {
    try {
      document.execCommand("BackgroundImageCache", false, true);
    } catch(e) {}
  }

  /*
   *  Group: Properties
   */  
  /*  Variable: AppPath
   *  ...
   *  Type: string
   */
  this.AppPath='';    
  try
  {
    var path=''+window.location.href;
    var i=path.lastIndexOf('#'); // strip parameters
    if(i>=0) path=path.substring(0,i);
    var i=path.lastIndexOf('?');
    if(i>=0) path=path.substring(0,i);
    i=path.lastIndexOf('.php');
    if(i<0) i=path.lastIndexOf('.html');
    if(i<0) i=path.lastIndexOf('.asp');
    if(i<0) i=path.lastIndexOf('.jsp');
    if(i>0) { 
      i=path.lastIndexOf('/'); // strip script name
      if(i>0)
      {
        if(path.charAt(i-1)=='/') path+='/';
        else path=path.substring(0,i+1);
        this.AppPath=path;
      }
    }
    else
    {
      if(path.length>0)
      {
        if(path.charAt(path.length-1)!='/') path+='/';
        this.AppPath=path;
      }
    }
  }
  catch(e)
  {
  }

   
  /*  Variable: Lang
   *  ...
   *  Type: string
   */
  this.Lang='';
  /*  Variable: ElmID
   *  ...
   *  Type: string
   */
  if(typeof elm==='object') elm=elm.id;
  this.ElmID = ngVal(elm,'ngApp');
  
  /*  Variable: StartParams
   *  ...
   *  Type: object
   */
  //this.StartParams=new Object;
  /*  Variable: LocationHash
   *  ...
   *  Type: string
   */
  this.LocationHash = '';
  try
  {
    this.LocationHash = window.location.hash;
  }
  catch(e)
  {
  }
  /*  Variable: MobileKeyboardFix
   *  ...
   *  Type: bool
   */
  this.MobileKeyboardFix=true;

  /*
   *  Group: Methods
   */
  /*  Function: GetLang
   *  Gets existing application language.   
   *   
   *  Syntax:
   *    string *GetLang* ()
   *     
   *  Returns:
   *    -     
   */
  this.GetLang=nga_GetLang;
  /*  Function: Text
   *  Gets resource string by application language.   
   *   
   *  Syntax:
   *    string *Text* (string restext, string defval)
   *     
   *  Returns:
   *    -     
   */
  this.Text=nga_Text;
  /*  Function: Resource
   *  Gets resource by application language.   
   *   
   *  Syntax:
   *    object *Resource* (string resid)
   *     
   *  Returns:
   *    -     
   */ 
  this.Resource=nga_Resource;
  /*  Function: Run
   *  Executes the application.   
   *   
   *  Syntax:
   *    void *Run* ()
   *     
   *  Returns:
   *    -     
   */
  this.Run=nga_Run;
  /*  Function: SetTitle
   *  Sets application title.   
   *   
   *  Syntax:
   *    void *SetTitle* (string restext)
   *     
   *  Returns:
   *    -     
   */
  this.SetTitle=nga_SetTitle;
  /*  Function: MessageBox
   *  Displays a message to user.    
   *   
   *  Syntax:
   *    bool *MessageBox* (string restext [, bool yesno=false])
   *     
   *  Returns:
   *    -     
   */
  this.MessageBox=nga_MessageBox;
  /*  Function: Alert
   *  Displays a message to user.    
   *   
   *  Syntax:
   *    void *Alert* (string restext)
   *     
   *  Returns:
   *    -     
   */
  this.Alert=nga_MessageBox;
  /*  Function: Confirm
   *  Displays a message with Yes or No buttons to user.    
   *   
   *  Syntax:
   *    bool *Confirm* (string restext)
   *     
   *  Returns:
   *    -     
   */
  this.Confirm=function(t) { return this.MessageBox(t,true); }

  this.params_parsed = false;
  
  /*  Function: Param
   *  Gets application input parameter (from URL).    
   *   
   *  Syntax:
   *    string *Param* (string paramname)
   *     
   *  Returns:
   *    -     
   */
  this.Param = nga_Param;

  /*  Function: SetParam
   *  Sets application parameter value (and optionaly its type).    
   *   
   *  Syntax:
   *    void *SetParam* (mixed param, string value[, int type])
   *     
   *  Returns:
   *    -     
   */
  this.SetParam = nga_SetParam;
  /*  Function: SetClientParam
   *  Sets application client parameter value.    
   *   
   *  Syntax:
   *    void *SetClientParam* (mixed param, string value)
   *     
   *  Returns:
   *    -     
   */
  this.SetClientParam = nga_SetClientParam;
  /*  Function: SetURLParam
   *  Sets application URL parameter value.    
   *   
   *  Syntax:
   *    void *SetURLParam* (mixed param, string value)
   *     
   *  Returns:
   *    -     
   */
  this.SetURLParam = nga_SetURLParam;
  /*  Function: SetServerParam
   *  Sets application server parameter value.    
   *   
   *  Syntax:
   *    void *SetServerParam* (mixed param, string value)
   *     
   *  Returns:
   *    -     
   */
  this.SetServerParam = nga_SetServerParam;

  /*  Function: ParamType
   *  Gets application parameter type.    
   *   
   *  Syntax:
   *    enum *ParamType* (string paramname)
   *     
   *  Constants:
   *    APPPARAM_SERVER - ...
   *    APPPARAM_CLIENT - ...
   *    APPPARAM_URL - ...  
   *        
   *  Returns:
   *    -     
   */
  this.ParamType = nga_ParamType;
  /*  Function: SetParamType
   *  Sets application parameter type.    
   *   
   *  Syntax:
   *    void *SetParamType* (mixed param, enum paramtype)
   *     
   *  Returns:
   *    -     
   */
  this.SetParamType=nga_SetParamType;

  /*  Function: SetParamEncodingFnc
   *  Sets application parameter encoding and decoding functions.    
   *   
   *  Syntax:
   *    void *SetParamEncodingFnc* (string paramname, function encodefnc, function decodefnc)
   *     
   *  Returns:
   *    -     
   */
  this.SetParamEncodingFnc = nga_SetParamEncodingFnc;

  /*  Function: PersistParam
   *  Sets application parameter persistence.    
   *   
   *  Syntax:
   *    void *PersistParam* (mixed param [, bool persistent=true])
   *     
   *  Returns:
   *    -     
   */
  this.PersistParam = nga_PersistParam; 

  /*  Function: ParseParams
   *  Parse application parameters from browser's or given URL.    
   *   
   *  Syntax:
   *    void *ParseParams* ([string url])
   *     
   *  Returns:
   *    -     
   */
  this.ParseParams = nga_ParseParams;
  /*  Function: UpdateParams
   *  Update application client parameters.    
   *   
   *  Syntax:
   *    void *UpdateParams* ()
   *     
   *  Returns:
   *    -     
   */
  this.UpdateParams = nga_UpdateParams;
  this.DoParamsChanged = nga_DoParamsChanged;
  
  this.params_changed = false;
  this.params_update_cnt = 0;
  /*  Function: BeginUpdateParams
   *  Prevents the updating of application client parameters until the <EndUpdateParams> method is called.    
   *   
   *  Syntax:
   *    void *BeginUpdateParams* ()
   *     
   *  Returns:
   *    -     
   */
  this.BeginUpdateParams = nga_BeginUpdateParams;
  /*  Function: EndUpdateParams
   *  Performs application client parameters update deferred by a call to <BeginUpdateParams>.    
   *   
   *  Syntax:
   *    void *EndUpdateParams* ()
   *     
   *  Returns:
   *    -     
   */
  this.EndUpdateParams = nga_EndUpdateParams;
  
  this.url_history_timer=null;
  this.invokelater_events = new Array();

  /*  Function: InvokeLater
   *  Invokes event after all remaining JavaScript code is executed 
   *  and flow is returned back to browser.
   *   
   *  Syntax:
   *    void *InvokeLater* (function event)
   *     
   *  Parameters:
   *    event - event to be called   
   *      
   *  Returns:
   *    -     
   */
  this.InvokeLater=nga_InvokeLater;

  this.BuildURLParams = nga_BuildURLParams;
  this.CallURL = nga_CallURL;

  /*  Function: Call
   *  Call application on another URL.
   *   
   *  Syntax:
   *    void *Call* (string url)
   *     
   *  Returns:
   *    -     
   */
  this.Call=nga_Call;
   
  this.RPC=null;
  this.CallServerURL = nga_CallServerURL;
  
  ngOnRPCCreated=ngAddEvent(ngOnRPCCreated, nga_AddRPCLang);
  
  /*  Function: CallServer
   *  Call server on specified URL.
   *   
   *  Syntax:
   *    void *CallServer* (string url, bool nocache)
   *     
   *  Returns:
   *    -     
   */
  this.CallServer=nga_CallServer;
  /*  Function: CallServerEx
   *  Call server on specified URL with parameters.
   *   
   *  Syntax:
   *    void *CallServerEx* (string url, object parameters, bool nocache)
   *     
   *  Returns:
   *    -     
   */
  this.CallServerEx=nga_CallServerEx;
  this.GetRPC=nga_GetRPC;
  
  /*  Function: Elm
   *  Gets access to application container DIV element object.
   *   
   *  Syntax:
   *    object *Elm* ()
   *   
   *  Returns:
   *    Element object.     
   */
  this.Elm = nga_Elm;
  
  this.AddEvent = ngObjAddEvent;
  this.RemoveEvent = ngObjRemoveEvent;
  this.SetOnParamsChanged = nga_SetOnParamsChanged2;
  
  this.APIs = new Object;

  /*  Function: RegisterAPI
   *  Registers new application API.
   *  
   *  Syntax:
   *    bool *RegisterAPI* (string id, object api, string version, mixed owner)
   *              
   *  Returns:
   *    TRUE if API was successfuly registered.      
   */
  this.RegisterAPI = nga_RegisterAPI;

  /*  Function: UnregisterAPI
   *  Unregisters existing application API.
   *  
   *  Syntax:
   *    bool *UnregisterAPI* (string id [, mixed owner, string version])
   *              
   *  Returns:
   *    TRUE if API was successfuly unregistered.      
   */
  this.UnregisterAPI = nga_UnregisterAPI;

  /*  Function: GetAPI
   *  Gets application API by selected id.
   *  
   *  Syntax:
   *    object *GetAPI* (string id [, string minreqversion, string maxreqversion])
   *              
   *  Returns:
   *    API object or null if not found.      
   */
  this.GetAPI = nga_GetAPI;

  /*  Function: GetAPIAll
   *  Gets all application API by selected id.
   *  
   *  Syntax:
   *    array *GetAPIAll* (string id [, string minreqversion, string maxreqversion])
   *              
   *  Returns:
   *    list of APIs      
   */
  this.GetAPIAll = nga_GetAPIAll;

  /*  Function: GetAPIByStrVersion
   *  Gets exact application API by its string version.
   *  
   *  Syntax:
   *    object *GetAPIByStrVersion* (string id, string strversion)
   *              
   *  Returns:
   *    API object or null if not found.      
   */
  this.GetAPIByStrVersion = nga_GetAPIByStrVersion;

  /*  Function: GetAPIAllByStrVersion
   *  Gets all APIs which matches exact string version.
   *  
   *  Syntax:
   *    array *GetAPIAllByStrVersion* (string id, string strversion)
   *              
   *  Returns:
   *    list of APIs      
   */
  this.GetAPIAllByStrVersion = nga_GetAPIAllByStrVersion;
  
  /*
   *  Group: Events
   */
  /*
   *  Event: OnRun
   */     
  this.OnRun = null;
  /*
   *  Event: OnRunFinished
   */     
  this.OnRunFinished = null;
  this.OnRunInternalFinished = null;
  
  /*
   *  Event: OnParamsChanged
   */     
  this.OnParamsChanged = null;
  this.OnInternalParamsChanged = null;
  
  /*
   *  Event: OnSetParam
   */     
  this.OnSetParam = null;
  /*
   *  Event: OnGetParam
   */     
  this.OnGetParam = null;
  /*
   *  Event: OnDecodeParam
   */     
  this.OnDecodeParam = null;
  /*
   *  Event: OnEncodeParam
   */     
  this.OnEncodeParam = null;
  
  /*
   *  Event: OnCallURL
   */     
  this.OnCallURL = null;
  /*
   *  Event: OnCall
   */     
  this.OnCall = null;
  /*
   *  Event: OnCallServerURL
   */     
  this.OnCallServerURL = null;
  /*
   *  Event: OnServerCall
   */     
  this.OnServerCall = null;
  
  /*
   *  Event: OnMapParamsChanged
   */     
  //this.OnMapParamsChanged = null; - defined in controls_map.js  

  /*
   *  Event: OnDeviceChanged
   */     
  this.OnDeviceChanged = null

  var ae=this.Elm();
  if(ae) {
    ngApp.LastResizeW=ng_ClientWidth(ae);
    ngApp.LastResizeH=ng_ClientHeight(ae);
  }
  window.onresize = ngAddEvent(window.onresize, nga_OnResize);
  
  if(ngVal(autorun,true)) this.Run(); 
}

// --- ngControls --------------------------------------------------------------

/**
 *  Class: ngControls
 *  This class represents references to a group of controls. 
 *
 *  Syntax:
 *    new *ngControls* (object defs [, mixed parent])
 *    
 *  Parameters:
 *    defs - controls definition
 *    parent - parent DIV container 
 */
function ngControls(defs,parent)
{
  if(typeof parent==='undefined')
  {
    var appid;
    if(typeof ngApp !== 'undefined') appid=ngApp.ElmID;
    else appid='ngApp';
    var o=document.getElementById(appid);
    if(o) parent=o;
  }
  if(typeof defs === 'object') ngCreateControls(defs,this,parent);
  
  /*
   *  Group: Methods
   */

  /*  Function: Update
   *  Redraws all controls.   
   *   
   *  Syntax:
   *    void *Update* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Update = function() { ngUpdateControls(this); }

  /*  Function: Release
   *  Clears all control's DIV containers.    
   *   
   *  Syntax:
   *    void *Release* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Release = function() { ngReleaseControls(this); }

  /*  Function: Dispose
   *  Destroys all controls.    
   *   
   *  Syntax:
   *    void *Dispose* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Dispose = function() { ngDisposeControls(this); }

  /*  Function: AddControls
   *  Adds controls.    
   *   
   *  Syntax:
   *    void *AddControls* (defs, parent)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.AddControls = function(defs, parent) { ngCreateControls(defs,this,parent); }
}

// --- ngPanel -----------------------------------------------------------------

function ngp_DoRelease(o)
{
  o.style.display='none';
}

/**
 *  Class: ngPanel
 *  This class implements a generic panel control. 
 *
 *  Syntax:
 *    new *ngPanel* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */

function ngPanel(id)
{
  ngControl(this, id, 'ngPanel');
  this.DoRelease = ngp_DoRelease;  
  ngControlCreated(this);
}

// --- ngFrame -----------------------------------------------------------------

/*  Class: ngFrame
 *  Standard frame control (based on <ngPanel>).
 */
/*
 *  Group: Definition
 */
/*  Variable: ParentReferences
 *  ...
 *  Type: bool
 *  Default value: *false*         
 */
/*<>*/

function ngFrame_Create(def, ref, parent)
{
  def.ParentReferences=ngVal(def.ParentReferences, false);
  return ngCreateControlAsType(def, 'ngPanel', ref, parent);
}

// --- ngText ------------------------------------------------------------------

function ngt_DoCreate(d, ref, elm, parent)
{
  var as='';
  if((typeof d.W === 'undefined')&&((typeof d.L === 'undefined')||(typeof d.R === 'undefined')))
    as='horizontal';
  if((typeof d.H === 'undefined')&&((typeof d.T === 'undefined')||(typeof d.B === 'undefined')))
    as=(as == 'horizontal' ? 'auto' : 'vertical');

  if(as!='')
  {    
    if((!d.Data)||(typeof d.Data.AutoSizeMode === 'undefined')) this.AutoSizeMode=as;
    if((!d.Data)||(typeof d.Data.AutoSize === 'undefined')) this.AutoSize=true;    
  }  
}

function ngt_DoUpdate(o)
{
  var cclass=this.BaseClassName;

  var text=this.GetText();
  var alt=this.GetAlt();
  if(this.HTMLEncode) text=ng_htmlEncode(text);

  if((this.AutoSize)&&(ngIExplorer)&&(ng_GetStylePx(o.style.height)==0)) o.style.height='1px';  // IE7 Measure fix

  var dstyle='';
  if((this.AutoSize)&&((this.AutoSizeMode=='auto')||(this.AutoSizeMode=='horizontal')))
    dstyle+='white-space: nowrap; ';  
  if((!this.AutoSize)||(this.AutoSizeMode=='vertical')) dstyle+='width:'+ng_ClientWidth(o)+'px; ';
  if((!this.AutoSize)||(this.AutoSizeMode=='horizontal')) dstyle+='height:'+ng_ClientHeight(o)+'px; ';
  
  var html=new ngStringBuilder;
  html.append('<span id="'+this.ID+'_T" class="'+cclass+'Text'+(this.Enabled ? '': 'Disabled')+'" style="position:absolute;'+dstyle+'text-align:'+this.TextAlign+';"');
  if(alt!='') html.append(' title="'+ng_htmlEncode(alt)+'"');
  html.append('>');
  html.append(text);
  html.append('</span>');
  ng_SetInnerHTML(o,html.toString());
  if(this.AutoSize)
  {
    var o2=document.getElementById(this.ID+'_T');
    if(o2) 
    {
      if((this.AutoSizeMode=='auto')||(this.AutoSizeMode=='horizontal'))
      {
        var tw=ng_ClientWidth(o2);
        if((typeof this.MinWidth !== 'undefined')&&(tw<this.MinWidth)) tw=this.MinWidth;
        ng_SetStyleWidth(o,tw);
        ng_SetStyleWidth(o2,tw);;
      }
      
      if((this.AutoSizeMode=='auto')||(this.AutoSizeMode=='vertical'))
      {
        var th=ng_ClientHeight(o2);
        if((typeof this.MinHeight !== 'undefined')&&(th<this.MinHeight)) th=this.MinHeight;
        ng_SetStyleHeight(o,th);
        ng_SetStyleHeight(o2,th); 
      }
      var changed=false;
      if((typeof this.Bounds.T === 'undefined')||(typeof this.Bounds.B === 'undefined'))
      {
        var cbh=ng_StyleHeight(o);
        if(this.Bounds.H!=cbh)
        {
          this.Bounds.H=cbh;
          changed=true;
        }
      }
      if((typeof this.Bounds.L === 'undefined')||(typeof this.Bounds.R === 'undefined'))
      {
        var cbw=ng_StyleWidth(o);
        if(this.Bounds.W!=cbw)
        {
          this.Bounds.W=cbw;
          changed=true;
        }
      }
      if(changed) this.SetBounds();
    }          
  }
  return true;
}

function ngt_DoPtrStart(pi)
{
  if((this.CanSelect)&&(pi.EventID=='control')) 
  {
    pi.PreventDefault=false;
    pi.DocumentDeselect=false;
    pi.PreventSelect=false;
  }
  else pi.StopPropagation=false;
}

function ngt_DoAcceptGestures(o,gestures)
{
  gestures.touch=true;
}

/**
 *  Class: ngText
 *  This class implements a generic static text control. 
 *
 *  Syntax:
 *    new *ngText* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */

function ngText(id)
{
  ngControl(this, id, 'ngText');
  this.DoCreate = ngt_DoCreate;
  this.DoUpdate = ngt_DoUpdate;
  this.DoPtrStart = ngt_DoPtrStart;
  this.DoAcceptGestures=ngt_DoAcceptGestures;
  
  /*
   *  Group: Properties
   */

  /*  Variable: TextAlign
   *  ...
   *  Type: string
   *  Default value: *'left'*   
   */
  this.TextAlign = 'left';

  /*  Variable: AutoSize
   *  ...
   *  Type: bool
   */
  this.AutoSize = false;

  /*  Variable: AutoSizeMode
   *  ...
   *  Type: string
   *  Default value: *'auto'*   
   */
  this.AutoSizeMode='auto';
  /*  Variable: MinWidth
   *  ...
   *  Type: integer
   *  Default value: *undefined*   
   */
  // this.MinWidth = undefined;
  /*  Variable: MinHeight
   *  ...
   *  Type: integer
   *  Default value: *undefined*   
   */
  // this.MinHeight = undefined;
  
  /*  Variable: Text
   *  ...
   *  Type: string
   */
  this.Text = '';
  
  /*  Variable: Alt
   *  ...
   *  Type: string
   */
  this.Alt = '';

  /*  Variable: HTMLEncode
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.HTMLEncode = false;
  /*  Variable: CanSelect
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.CanSelect = true;
    
  /*
   *  Group: Methods
   */
  /*  Function: SetText
   *  Sets new text content.   
   *   
   *  Syntax:
   *    void *SetText* (string text)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.SetText = ngc_SetText;  
  /*  Function: GetText
   *  Gets text content.   
   *   
   *  Syntax:
   *    string *GetText* (void)
   *     
   *  Returns:
   *    Text content.     
   */
  this.GetText=ngc_GetText;
  
  /*  Function: GetAlt
   *  Gets alt text.   
   *   
   *  Syntax:
   *    string *GetAlt* (void)
   *     
   *  Returns:
   *    Alt text.     
   */
  this.GetAlt=ngc_GetAlt;
  
  /*
   *  Group: Events
   */
  /*
   *  Event: OnSetText
   */     
  this.OnSetText = null;
  /*
   *  Event: OnGetText
   */     
  this.OnGetText = null;
  /*
   *  Event: OnGetAlt
   */     
  this.OnGetAlt = null;
    
  ngControlCreated(this);
}

// --- ngImage -----------------------------------------------------------------

function ngi_DoCreate(d, ref, elm, parent)
{
  if(((typeof d.Data === 'undefined')||(typeof d.Data.AutoSize === 'undefined'))
   &&((typeof d.W !== 'undefined')||((typeof d.L !== 'undefined')&&(typeof d.R !== 'undefined')))
   &&((typeof d.H !== 'undefined')||((typeof d.T !== 'undefined')&&(typeof d.B !== 'undefined'))))
    this.AutoSize=false;
}

function ngi_DoUpdate(o)
{
  var alt=this.GetAlt();
  var image=this.GetImg();  
  
  var html=new ngStringBuilder;
  if(image)
  {
    var dp=ngc_ImgProps(this.ID+'_I', 0, this.Enabled, image);
    if(typeof dp.W === 'undefined') 
    {
      ngc_ImgSW(html,dp,0,ng_ClientWidth(o),"position:absolute;",(alt!='' ? 'title="'+ng_htmlEncode(alt)+'"' : '')+ngVal(image.Attrs,''));
      if(this.AutoSize)
      {                   
        ng_SetClientHeight(o,dp.H);
        var cbh=ng_StyleHeight(o);
        if(this.Bounds.H!=cbh)
        {
          this.Bounds.H=cbh;
          this.SetBounds();
        }
      }
    }
    else
    {
      if(typeof dp.H === 'undefined')
      {
        ngc_ImgSH(html,dp,0,ng_ClientHeight(o),"position:absolute;",(alt!='' ? 'title="'+ng_htmlEncode(alt)+'"' : '')+ngVal(image.Attrs,''));
        if(this.AutoSize)
        {                   
          ng_SetClientWidth(o,dp.W);
          var cbw=ng_StyleWidth(o);
          if(this.Bounds.W!=cbw)
          {
            this.Bounds.W=cbw;
            this.SetBounds();
          }
        }
      }
      else 
      {
        ngc_Img(html,dp,"position:absolute;",(alt!='' ? 'title="'+ng_htmlEncode(alt)+'"' : '')+ngVal(image.Attrs,''));
        if(this.AutoSize)
        {                   
          ng_SetClientWidth(o,dp.W);
          ng_SetClientHeight(o,dp.H);
          var cbw=ng_StyleWidth(o);
          var cbh=ng_StyleHeight(o);
          if((this.Bounds.W!=cbw)||(this.Bounds.H!=cbh))
          {
            this.Bounds.W=cbw;
            this.Bounds.H=cbh;
            this.SetBounds();
          }
        }
      }      
    }    
  }
  ng_SetInnerHTML(o,html.toString());
  return true;
}

/**
 *  Class: ngImage
 *  This class implements a generic image control. 
 *
 *  Syntax:
 *    new *ngImage* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngImage(id)
{
  ngControl(this, id, 'ngImage');
  this.DoCreate = ngi_DoCreate;
  this.DoUpdate = ngi_DoUpdate;

  /*
   *  Group: Properties
   */
  /*  Variable: Alt
   *  ...
   *  Type: string
   */
  this.Alt = '';
  /*  Variable: Img
   *  ...
   *  Type: object
   */
  this.Img = null;
  /*  Variable: AutoSize
   *  ...
   *  Type: bool
   */
  this.AutoSize = true;

  /*
   *  Group: Methods
   */
  /*  Function: GetAlt
   *  Gets alt text.   
   *   
   *  Syntax:
   *    string *GetAlt* (void)
   *     
   *  Returns:
   *    Alt text.     
   */
  this.GetAlt=ngc_GetAlt;

  /*  Function: GetImg
   *  Gets image.   
   *   
   *  Syntax:
   *    object *GetImg* (void)
   *     
   *  Returns:
   *    The image.     
   */
  this.GetImg=ngc_GetImg;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnGetAlt
   */     
  this.OnGetAlt = null;
  /*
   *  Event: OnGetImg
   */     
  this.OnGetImg = null;

  ngControlCreated(this);
}

// --- ngImageMap --------------------------------------------------------------

function ngimgmap_DoCreate(d, ref, elm, parent)
{
  if(((typeof d.W !== 'undefined')||((typeof d.L !== 'undefined')&&(typeof d.R !== 'undefined')))&&(d.Data)&&(typeof d.Data.AutoSize === 'undefined'))
    this.AutoSize=false;
}

function imgm_DoPtrStart(pi)
{
  var eid=pi.EventID;
  if(eid.substr(0,3)==='shp')
  {
    var inelm=pi.IsInSrcElement();
    if(!inelm) // elementFromPoint has problem to detect area elements (FireFox) 
    {      
      pi.SrcElement=document.getElementById(this.ID+'_HM');
    }
    if(pi.Touch) {
      var bi=parseInt(eid.substring(3,eid.length));
      imgm_EnterShape(this,bi);
      pi.InShapeElm=true;
    }
  }
}

function imgm_DoPtrDrag(pi)
{
  var eid=pi.EventID;
  if(eid.substr(0,3)==='shp')
  {
    if(pi.Touch) 
    {
      var bi=parseInt(eid.substring(3,eid.length));
      var inelm=pi.IsInSrcElement();
      if((inelm)&&(!pi.InShapeElm))
      {
        imgm_EnterShape(this,bi);
        pi.InShapeElm=true;
      }
      else if((!inelm)&&(pi.InShapeElm))
      {
        imgm_LeaveShape(this,bi);
        pi.InShapeElm=false;
      }
    }
    return true;
  }
  return false;
}

function imgm_DoPtrEnd(pi)
{
  var eid=pi.EventID;
  if(eid.substr(0,3)==='shp')
  {    
    if((pi.Touch)&&(pi.InShapeElm)) {
      var bi=parseInt(eid.substring(3,eid.length));    
      imgm_LeaveShape(this,bi);
    }
    delete pi.InShapeElm;
  }
}

function imgm_DoPtrClick(pi)
{
  var eid=pi.EventID;
  if(eid.substr(0,3)==='shp')
  {
    if((pi.EndTime-pi.StartTime>=200)&&(!pi.IsInSrcElement())) return;
    var bi=parseInt(eid.substring(3,eid.length));
    var e=pi.Event;
    e.Owner=this;
    e.imap=this;
    e.imapshpidx=bi;
    if((bi>=0)&&(bi<this.Shapes.length))
    {
      var s=ngVal(this.Shapes[bi],null);
      e.imapshp=s;
      if((s)&&(s.OnClick)&&(!ngVal(s.OnClick(e),false))) return;
      if(this.OnShapeClick) this.OnShapeClick(e);
    }
  }
}

function imgm_LeaveShape(p,bi)
{
  if((bi>=0)&&(bi<p.Shapes.length))
  {
    var s=ngVal(p.Shapes[bi],null);
    ngc_ChangeImg(p.ID+'_I', 0, p.Enabled, p.GetImg());      
    var o=p.Elm();
    try { if(o) o.style.cursor=ngVal(p.Cursor,'default'); } catch(e) { }

    if((s)&&(s.OnMouseLeave)&&(!ngVal(s.OnMouseLeave(s,p,bi),false))) return;
    if(p.OnMouseShapeLeave) p.OnMouseShapeLeave(p,bi);
  }
}

function imgm_EnterShape(p,bi)
{
  if((bi>=0)&&(bi<p.Shapes.length))
  {
    var s=ngVal(p.Shapes[bi],null);
    var img=(s ? ngVal(s.Img,null) : null);
    ngc_ChangeImg(p.ID+'_I', 0, p.Enabled, img);      
    var clickev=((p.OnShapeClick)||((s)&&(s.OnClick)))&&(p.Enabled);
    var o=p.Elm();
    try { if(o) o.style.cursor=(s && s.Cursor ? s.Cursor : (clickev ? 'pointer' : 'default')); } catch(e) { }

    if((s)&&(s.OnMouseEnter)&&(!ngVal(s.OnMouseEnter(s,p,bi),false))) return;
    if(p.OnMouseShapeEnter) p.OnMouseShapeEnter(p,bi);
  }
}

function imgm_MO(e,o,id,bi)
{
  if(!e) e=windows.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  var p=ngGetControlById(id);
  if(p) imgm_EnterShape(p,bi)
}

function imgm_MU(e,o,id,bi)
{
  if(!e) e=windows.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  var p=ngGetControlById(id);
  if(p) imgm_LeaveShape(p,bi)
}

function imgm_nop() { }

function ngimgmap_DoMouseEnter(e, mi, elm)
{
  ngc_EnterImg(this.ID+'_I');
  if(this.OnMouseEnter) this.OnMouseEnter(this);
}

function ngimgmap_DoMouseLeave(e, mi)
{
  if(this.OnMouseLeave) this.OnMouseLeave(this);
  ngc_LeaveImg(this.ID+'_I');
  var o=this.Elm();
  try { if(o) o.style.cursor=ngVal(this.Cursor,'default'); } catch(e) { }
}

function ngimgmap_DoUpdate(o)
{
  var salt;
  
  var alt=this.GetAlt();
  var image=this.GetImg();  
  
  var html=new ngStringBuilder;
  if(image)
  {
    var dp=ngc_ImgProps(this.ID+'_I', 0, this.Enabled, image);
    ngc_Img(html,dp,"position:absolute;",(alt!='' ? 'title="'+ng_htmlEncode(alt)+'"' : '')+ngVal(image.Attrs,''));
    if(this.AutoSize)
    {
      ng_SetClientWidth(o,dp.W);
      ng_SetClientHeight(o,dp.H);
      var cbw=ng_StyleWidth(o);
      var cbh=ng_StyleHeight(o);
      if((this.Bounds.W!=cbw)||(this.Bounds.H!=cbh))
      {
        this.Bounds.W=cbw;
        this.Bounds.H=cbh;
        this.SetBounds();
      }
    }
  }
  var w=ng_ClientWidth(o);
  var h=ng_ClientHeight(o);

  var imgmap=new ngStringBuilder();
  for(var i=0;i<this.Shapes.length;i++)
  {
    var s=this.Shapes[i];
    if(ngVal(s.Coords,'')=='') continue;
    
    if(this.OnGetShapeAlt) salt=ngVal(this.OnGetShapeAlt(this,i),'');
    else salt=ngVal(s.Alt,'');
    
    var clickev=((this.OnShapeClick)||(s.OnClick))&&(this.Enabled);
    imgmap.append('<area shape="'+ngVal(s.Shape,'rect')+'" coords="'+s.Coords+'" title="'+ng_htmlEncode(salt)+'"');
    if(clickev)
    {
      imgmap.append(' '+ngc_PtrEventsHTML(this,'shp'+i,'tap drag')); 
    }
    imgmap.append(' onmouseover="imgm_MO(event,this,\''+this.ID+'\','+i+');" onmouseout="imgm_MU(event,this,\''+this.ID+'\','+i+')" />');    
  }
  if(!imgmap.empty())
  {
    if(ngFireFox1x) imgmap.append('<area href="javascript:imgm_nop();" shape="rect" coords="0,0,'+w+','+h+'" />');
    
    html.append('<img id="'+this.ID+'_HM" src="'+ngEmptyURL+'" style="position:absolute; width:'+w+'px; height:'+h+'px; z-index: 10;" alt="'+ng_htmlEncode(alt)+'" border="0" usemap="#'+this.ID+'_IMAP" />');
    html.append('<map id="'+this.ID+'_IM" name="'+this.ID+'_IMAP">');
    html.append(imgmap);
    html.append('</map>');
  }
  ng_SetInnerHTML(o,html.toString());
  return true;
}

/**
 *  Class: ngImageMap
 *  This class implements a generic imagemap control. 
 *
 *  Syntax:
 *    new *ngImageMap* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngImageMap(id)
{
  ngControl(this, id, 'ngImageMap');

  this.DoCreate = ngimgmap_DoCreate;
  this.DoUpdate = ngimgmap_DoUpdate;
  this.DoMouseEnter = ngimgmap_DoMouseEnter;
  this.DoMouseLeave = ngimgmap_DoMouseLeave;
  this.DoPtrStart = imgm_DoPtrStart;
  this.DoPtrDrag = imgm_DoPtrDrag;
  this.DoPtrEnd = imgm_DoPtrEnd;
  this.DoPtrClick = imgm_DoPtrClick;

  /*
   *  Group: Properties
   */
  /*  Variable: Alt
   *  ...
   *  Type: string
   */
  this.Alt = '';
  /*  Variable: Img
   *  ...
   *  Type: object
   */
  this.Img = null;
  /*  Variable: Cursor
   *  ...
   *  Type: string
   */
//  this.Cursor = undefined;
  /*  Variable: AutoSize
   *  ...
   *  Type: bool
   */
  this.AutoSize = true;
  
  /*  Variable: Shapes
   *  ...
   *  Type: array
   */
  this.Shapes = new Array();
  /*
   *  Group: Methods
   */
  /*  Function: GetAlt
   *  Gets alt text.   
   *   
   *  Syntax:
   *    string *GetAlt* (void)
   *     
   *  Returns:
   *    Alt text.     
   */
  this.GetAlt=ngc_GetAlt;

  /*  Function: GetImg
   *  Gets image.   
   *   
   *  Syntax:
   *    object *GetImg* (void)
   *     
   *  Returns:
   *    The image.     
   */
  this.GetImg=ngc_GetImg;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnGetAlt
   */     
  this.OnGetAlt = null;
  /*
   *  Event: OnGetImg
   */     
  this.OnGetImg = null;
  
  /*
   *  Event: OnGetShapeAlt
   */     
  this.OnGetShapeAlt = null;

  /*
   *  Event: OnShapeClick   
   */       
  this.OnShapeClick = null;  
  /*
   *  Event: OnMouseEnter   
   */       
  this.OnMouseEnter = null;  
  /*   
   *  Event: OnMouseLeave   
   */       
  this.OnMouseLeave = null;

  /*
   *  Event: OnMouseShapeEnter   
   */       
  this.OnMouseShapeEnter = null;  
  /*   
   *  Event: OnMouseShapeLeave   
   */       
  this.OnMouseShapeLeave = null;
    
  ngControlCreated(this);
}

// --- ngSysAction -------------------------------------------------------------

var ngact_RadioGroups = new Array();

function ngact_CheckRadioGroup()
{
  var state=ngVal(this.Checked,0);
  if((typeof this.RadioGroup !== 'undefined')&&(state)&&(ngact_RadioGroups[this.RadioGroup]!=this))
  {
    var uncheck=ngact_RadioGroups[this.RadioGroup];
    ngact_RadioGroups[this.RadioGroup]=this;
    if((uncheck)&&(typeof uncheck.Check==='function')) uncheck.Check(0);
  }
}

function ngact_Check(state)
{
  state=ngVal(state,1);
  if(ngVal(this.Checked,0)!=state)
  {
    this.Checked=state;
    if(this.OnCheckChanged) this.OnCheckChanged(this);
    if(this.Checked==state) 
    {
      var cc=this.ActionControls;
      if(cc)
      {      
        var c;
        this.in_action_check = true;
        for(var i=0;i<cc.length;i++) 
        { 
          c=cc[i]; 
          if(c.Control.ActionCheck) c.Control.ActionCheck(state, c.Data);
        }
        this.in_action_check = false;
      }
    }  
  }
}

function ngact_Click(e)
{
  if(typeof e === 'undefined') e=new Object;
  e.Owner = this;
  e.action = this;
  if(!this.Enabled) return;
  if((this.OnClick)&&(!ngVal(this.OnClick(e),false))) return;

  var cc=this.ActionControls;
  if(cc)
  {      
    var c;
    this.in_action_click = true;
    for(var i=0;i<cc.length;i++) 
    { 
      c=cc[i]; 
      if(c.Control.ActionClick) c.Control.ActionClick(e,c.Data);
    }
    this.in_action_click = false;
  }
}

function ngact_AddControl(ctrl,data)
{
  if(!ctrl) return;

  data=ngVal(data,null);
  if(!this.ActionControls) this.ActionControls=new Array();
  var cc=this.ActionControls;
  if(cc)
  {      
    var c;
    for(var i=0;i<cc.length;i++) 
    { 
      c=cc[i];
      if((c.Control==ctrl)&&(c.Data==data)) return;
    }
    cc[cc.length] = { Control: ctrl, Data: data };
  } 
}

function ngact_RemoveControl(ctrl, data)
{
  if((!ctrl)||(!this.ActionControls)) return;

  data=ngVal(data,null);
  var cc=this.ActionControls;
  if(cc)
  {      
    var c;
    for(var i=cc.length-1;i>=0;i--) 
    { 
      c=cc[i];
      if((c.Control==ctrl)&&(c.Data==data)) cc.splice(i, 1);
    }
    if(!cc.length) this.ActionControls=null;
  }   
}

function ngact_SetVisible(v)
{
  v=ngVal(v,true);
  if(this.Visible!=v)
  {
    if((this.OnSetVisible)&&(!ngVal(this.OnSetVisible(this,v),false))) return;
    this.Visible=v;
    if(this.OnVisibleChanged) this.OnVisibleChanged(this);
    if(this.Visible==v)
    {
      var cc=this.ActionControls;
      if(cc)
      {      
        var c;
        this.in_action_visible = true;
        for(var i=0;i<cc.length;i++) 
        { 
          c=cc[i]; 
          if(c.Control.ActionSetVisible) c.Control.ActionSetVisible(v, c.Data);
        }
        this.in_action_visible = false;
      }
    }
  }
}

function ngact_Update()
{
  if((this.OnUpdate)&&(!ngVal(this.OnUpdate(this),false))) return;

  var cc=this.ActionControls;
  if(cc)
  {      
    var c;
    for(var i=0;i<cc.length;i++) 
    { 
      c=cc[i]; 
      if(c.Control.ActionUpdate) c.Control.ActionUpdate(c.Data);
    }
  }
  
  if(this.OnUpdated) this.OnUpdated(this,null);
}

/**
 *  Class: ngSysAction
 *  This class implements action non-visual control. 
 *
 *  Syntax:
 *    new *ngSysAction* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngSysAction(id, text)
{
  ngSysControl(this, id, 'ngSysAction');

  /*
   *  Group: Properties
   */
  /*  Variable: Text
   *  ...
   *  Type: string
   */
  this.Text = ngVal(text,'');

  /*  Variable: Alt
   *  ...
   *  Type: string
   */
  this.Alt = '';
  
  /*  Variable: Checked
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  //this.Checked = undefined;
  //optional:
  /*  Variable: RadioGroup
   *  ...
   *  Type: string
   *  Default value: *undefined*   
   */
  // this.RadioGroup = undefined;
  
  /*  Variable: Img
   *  ...
   *  Type: object
   */
  //this.Img = undefined;
  /*  Variable: Visible
   *  Determines whether the control is visible. 
   *  Type: bool  
   */
  this.Visible = true;
  

  this.ActionControls = null;
    
  /*
   *  Group: Methods
   */
  /*  Function: Check
   *  Sets new button check state.   
   *   
   *  Syntax:
   *    void *Check* (int newval)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Check = ngact_Check;

  /*  Function: Click
   *  Clicks the button.   
   *   
   *  Syntax:
   *    void *Click* ([event ev])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Click = ngact_Click;

  /*  Function: SetText
   *  Sets new button text.   
   *   
   *  Syntax:
   *    void *SetText* (string text)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.SetText = ngc_SetText;
  
  this.Update = ngact_Update;
  this.GetImg = ngc_GetImg;
  this.GetText = ngc_GetText;
  this.GetAlt = ngc_GetAlt;
  this.SetVisible = ngact_SetVisible;
  this.AddControl = ngact_AddControl;
  this.RemoveControl = ngact_RemoveControl;
  this.CheckRadioGroup = ngact_CheckRadioGroup;
  this.in_action_check = false;
  this.in_action_click = false;
  this.in_action_visible = false;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnSetText
   */     
  this.OnSetText = null;
  /*
   *  Event: OnGetText
   */     
  this.OnGetText = null;
  /*
   *  Event: OnGetAlt
   */     
  this.OnGetAlt = null;
  
  /*
   *  Event: OnCheckChanged
   */     
  this.OnCheckChanged = null;
      
  /*
   *  Event: OnClick
   */     
  this.OnClick = null;
    
  /*
   *  Event: OnGetImg
   */     
  this.OnGetImg = null;
  /*
   *  Event: OnSetVisible
   */     
  this.OnSetVisible     = null;
  /*
   *  Event: OnVisibleChanged
   */     
  this.OnVisibleChanged = null;  
  /*
   *  Event: OnUpdate
   */     
  this.OnUpdate = null;

  ngControlCreated(this);
}

// --- ngButton ----------------------------------------------------------------

var ngb_RadioGroups = new Array();

function ngb_SimpleRect(b)
{
  var r=new Object;
  if(b.AutoSize)
  {
    var img;
    r.W=0;
    r.H=0;
    for(var j=-1;j<3;j++)
    {
      img=b.GetImg(j)
      if(!img) continue; 
      if(j!=1) r.W+=img.W;
      if(img.H>r.H) r.H=img.H;
    }
  } 
  else 
  {
    r.W=b.Bounds.W;
    r.H=b.Bounds.H;
  }
  return r;
}

function ngb_GetClassName(cls)
{  
  if(this.OnGetClassName) 
  {
    var text=this.GetText();

    var c=this.OnGetClassName(this, cls, text);
    if(ngVal(c,'')!='') cls=c;
  }
  if(!this.Enabled) cls+='Disabled';
  else
  {
    switch(this.Checked)
    {
      case true:
      case 1: cls+='Checked'; break;
      case 2: cls+='Grayed'; break;
    }
  }
  return this.BaseClassName+cls;
}

function ngb_Check(state)
{
  var action = this.GetAction();  
  if((action)&&(!action.in_action_check))
  {
    action.Check(state);
    return;
  }
  state=ngVal(state,1);
  if(ngVal(this.Checked,0)!=state)
  {
    this.Checked=state;
    if(this.OnCheckChanged) this.OnCheckChanged(this);
    if(this.Checked==state) this.Update();  
  }
}

function ngb_Click(e)
{
  var action = this.GetAction();  
  if((action)&&(!action.in_action_click)) 
  {
    action.Click(e);
    return;
  }
  
  if(typeof e === 'undefined') e=new Object;
  e.Owner = this;
  e.btn = this;

  if((!this.Enabled)||(ngVal(this.ReadOnly,false))) return;
  if((this.OnClick)&&(!ngVal(this.OnClick(e),false))) return;
}

function ngb_GetClickInfo(e,elm)
{
  e.Owner=ngGetControlByElement(elm,'ngButton');
  e.btn=e.Owner;
  e.btnObj=elm;
}

function ngb_GetImg(idx)
{
  var image=null;
  if(this.OnGetImg) image=this.OnGetImg(this, idx);
  else 
  {
    switch(idx) 
    {
      case -1: image=this.Img; break;
      case 0: image=this.LeftImg; break;
      case 1: image=this.MiddleImg; break;
      case 2: image=this.RightImg; break;
    }
  }
  return ngVal(image,null);
}

function ngb_DoCreate(d, ref, elm, parent)
{
  if(((typeof d.W !== 'undefined')||((typeof d.L !== 'undefined')&&(typeof d.R !== 'undefined')))&&(d.Data)&&(typeof d.Data.AutoSize === 'undefined'))
    this.AutoSize=false;
}

function ngb_SetAction(ac)
{
  if(typeof ac === 'string') 
  {
    ac=ngGetControlById(ac);
    if(!ac) return null;
  }
  ac=ngVal(ac,null);
  
  var oac=ngVal(this.Action,null);
  if(oac == ac) return ac;

  if((oac)&&(oac.RemoveControl)) oac.RemoveControl(this);  
  this.Action=ac;
  if((ac)&&(ac.AddControl)) ac.AddControl(this);
  this.SyncAction();
  this.Update();
  return ac;    
}

function ngb_GetAction()
{
  var ac=ngVal(this.Action,null);
  if(typeof ac === 'string') ac=this.SetAction(ac);
  return ac;
}

function ngb_SyncAction(action)
{
  if(typeof action === 'undefined') action = this.GetAction();
  if(action)
  {
    this.Visible = action.Visible;
    this.Enabled = action.Enabled;
    this.Checked = action.Checked;
    this.Img = action.GetImg();
    this.Text = action.GetText();
    this.Alt = action.GetAlt();
  }
}

function ngb_DoUpdate(o)
{
  var action = this.GetAction();
  this.SyncAction(action);
  
  var cclass=this.BaseClassName;

  var state=ngVal(this.Checked,0);
  var imgstate=state;
  if(action) action.CheckRadioGroup();
  else
    if((typeof this.RadioGroup !== 'undefined')&&(state)&&(ngb_RadioGroups[this.RadioGroup]!=this))
    {
      var uncheck=ngb_RadioGroups[this.RadioGroup];
      ngb_RadioGroups[this.RadioGroup]=this;
      if(uncheck && typeof uncheck.Check=='function') uncheck.Check(0);
    }
  
  var html=new ngStringBuilder;  
  var image,dp,bdp,event;
  if((ngIExplorer)&&(ng_GetStylePx(o.style.height)==0)) o.style.height='1px';  // IE7 Measure fix
  var w=ng_ClientWidth(o),aw=-1,tw=0,ctw=0,th=0,lw=0,rw=0;  

  var text=this.GetText();  
  var alt=this.GetAlt();
  if(this.HTMLEncode) text=ng_htmlEncode(text);
    
  var btnimage=this.GetImg(-1);
  if(btnimage) 
  {
    bdp=ngc_ImgProps(this.ID+'_I', imgstate, this.Enabled, btnimage);
    if(bdp.H>th) th=bdp.H;
  }

  var txtclass=this.GetClassName('Btn');

  // Measure text
  if(text!='')
  {
    ng_SetInnerHTML(o,'<div id="'+this.ID+'_T" class="'+txtclass+'" style="position:absolute; visibility: hidden; white-space: nowrap;"><div class="'+cclass+'Text">'+text+'</div></div>');
    var o2=document.getElementById(this.ID+'_T');
    if(o2) 
    {
      ng_BeginMeasureElement(o2);
      ctw=ng_ClientWidth(o2)
      tw=ng_OuterWidth(o2);
      var mh=ng_OuterHeight(o2);
      ng_EndMeasureElement(o2);
      if(mh>th) th=mh;
    }
  } 
  if(this.AutoSize) 
  { 
    aw=tw; 
    if(btnimage) aw+=this.ImgIndent+bdp.W; 
  }

  var images=null;
  image=this.GetImg(0);
  if(image)
  {
    if(!images) images=new ngStringBuilder;    
    dp=ngc_ImgProps(this.ID+'_IL', imgstate, this.Enabled, image);
    ngc_Img(images,dp,"position:absolute; left: 0px;",ngVal(image.Attrs,''));
    lw=dp.W;
    if(dp.H>th) th=dp.H;
  }

  image=this.GetImg(2);
  if(image)
  {
    if(!images) images=new ngStringBuilder;    
    dp=ngc_ImgProps(this.ID+'_IR', imgstate, this.Enabled, image);
    rw=dp.W;
  }

  var bw=(aw>=0 ? aw+lw+rw : w);
  if((typeof this.MinWidth !== 'undefined')&&(bw<this.MinWidth))
  {
    bw=this.MinWidth;
    if(aw>=0) aw=bw-lw-rw;
  }

  if(image)
  {
    ngc_Img(images,dp,"position:absolute; left: "+(aw>=0 ? lw+aw : (bw-rw))+"px;",ngVal(image.Attrs,''));
    if(dp.H>th) th=dp.H;
  }

  image=this.GetImg(1);
  if(image)
  {
    if(!images) images=new ngStringBuilder;    
    dp=ngc_ImgProps(this.ID+'_IM', imgstate, this.Enabled, image);
    ngc_ImgSW(images,dp,lw,(aw>=0 ? aw : bw-lw-rw),'',ngVal(image.Attrs,''));
    if(dp.H>th) th=dp.H;
  }
  
  var hasclick=(this.Enabled)&&(action ? (action.OnClick)||(this.OnClick) : this.OnClick);
  var hasdblclick=(this.OnDblClick)&&(this.Enabled);
  var gestures='';
  if(hasclick) gestures='tap';
  if(hasdblclick)  
  {
    if(gestures!='') gestures+=' ';
    gestures+='doubletap';
  }
  html.append('<span '+ngc_PtrEventsHTML(this,'btn',gestures)+(alt!='' ? ' title="'+ng_htmlEncode(alt)+'"' : '')+' style="position:absolute; left:0px;top:0px;width:'+bw+'px;height:'+th+'px;');
  if(typeof this.Cursor !== 'undefined')
  {
    if(this.Cursor!='') html.append('cursor:'+this.Cursor+';');
  } 
  else html.append(hasclick || hasdblclick ? 'cursor:pointer;' : 'cursor:default;');
  html.append('">');
  if(btnimage)
  {
    var l=0,il;
    switch(this.TextAlign)
    {
      case 'right':
        if(this.ImgAlign=='right') { l=bw-rw-tw-bdp.W-this.ImgIndent; il=bw-rw-bdp.W; }
        else { il=bw-rw-tw-bdp.W-this.ImgIndent; l=bw-rw-tw;  }
        break;
      case 'center':
        l=Math.round((bw-(tw+this.ImgIndent+bdp.W))/2);
        if(this.ImgAlign=='right') { il=l+tw+this.ImgIndent; }
        else { il=l; l+=this.ImgIndent+bdp.W; }
        break;
      default:
        if(this.ImgAlign=='right') { l=lw; il=lw+tw+this.ImgIndent; }
        else { il=lw; l=lw+bdp.W+this.ImgIndent; }
        break;
    }
    html.append('<span id="'+this.ID+'_T" class="'+txtclass+'" style="white-space: nowrap;position: absolute; z-index:1;left:'+l+'px;top:0px;width:'+(aw-(tw-ctw)-bdp.W-this.ImgIndent)+'px;'+(th>0 ? 'line-height: '+th+'px;' : '')+'"><div class="'+cclass+'Text">'+text+'</div></span>');
    ngc_Img(html,bdp,"position:absolute;z-index:1;left: "+il+"px;top:"+Math.round((th-bdp.H)/2)+"px;",'');
  }
  else html.append('<span id="'+this.ID+'_T" class="'+txtclass+'" style="white-space: nowrap;text-align:'+this.TextAlign+';position: absolute; z-index:1;left:0px;top:0px;width:'+(bw-(tw-ctw))+'px;'+(th>0 ? 'line-height: '+th+'px;' : '')+'"><div class="'+cclass+'Text">'+text+'</div></span>');
  if(images)
  {
    html.append('<span style="position: absolute;z-index:0;left:0px;">');
    html.append(images);
    html.append('</span>');
  }
  html.append('</span>');
  ng_SetInnerHTML(o,html.toString());

  var cbw=this.Bounds.W;
  if(this.AutoSize) 
  {
    if(ng_ClientWidth(o)!=bw)
    {
      ng_SetClientWidth(o,bw);
      cbw=ng_StyleWidth(o);
    }  
  }
  ng_SetClientHeight(o,th);
  var cbh=ng_StyleHeight(o);
  if((cbw!=this.Bounds.W)||(cbh!=this.Bounds.H))
  {
    this.Bounds.W=cbw;  
    this.Bounds.H=cbh;
    this.SetBounds();
  }
  return true;
}

function ngb_DoMouseEnter(e, mi, elm)
{
  var o=document.getElementById(this.ID+'_T');
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i<0) cn=cn+'_Focus';
    o.className=cn;
  }
  ngc_EnterImg(this.ID+'_I');
  ngc_EnterImg(this.ID+'_IL');
  ngc_EnterImgS(this.ID+'_IM');
  ngc_EnterImg(this.ID+'_IR');
  if(this.OnMouseEnter) this.OnMouseEnter(this);
}

function ngb_DoMouseLeave(e, mi)
{
  if(this.OnMouseLeave) this.OnMouseLeave(this);

  var o=document.getElementById(this.ID+'_T');
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i>=0) cn=cn.substring(0,i);
    o.className=cn; 
  }
  ngc_LeaveImg(this.ID+'_I');
  ngc_LeaveImg(this.ID+'_IL');
  ngc_LeaveImgS(this.ID+'_IM');
  ngc_LeaveImg(this.ID+'_IR');
}

function ngb_DoPtrClick(pi)
{
  if(pi.EventID!=='btn') return;
  ngb_GetClickInfo(pi.Event,pi.StartElement);
  this.Click(pi.Event);
}

function ngb_DoPtrDblClick(pi)
{
  if(pi.EventID!=='btn') return;
  ngb_GetClickInfo(pi.Event,pi.StartElement);
  if(this.OnDblClick) this.OnDblClick(pi.Event);
}

function ngb_SetText(text)
{
  var action = this.GetAction();  
  if(action)
  {
    action.SetText(text);
    return;
  }

  if(this.OnSetText) text=this.OnSetText(text,this);
  if(text!=this.Text)
  {
    this.Text=text;
    this.Update();
  }
}

function ngb_SetVisible(s)
{
  var action = this.GetAction();  
  if((action)&&(!action.in_action_visible))
  {
    action.SetVisible(s);
    return;
  }
  this.DefaultSetVisible(s);
}

function ngb_SetEnabled(s)
{
  var action = this.GetAction();  
  if(action)
  {
    action.SetEnabled(s);
    return;
  }
  this.DefaultSetEnabled(s);
}

/**
 *  Class: ngButton
 *  This class implements a generic button control. 
 *
 *  Syntax:
 *    new *ngButton* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngButton(id, text)
{
  ngControl(this, id, 'ngButton');

  /*
   *  Group: Properties
   */
  /*  Variable: Action
   *  ...
   *  Type: mixed
   */
  this.Action = null;
  /*  Variable: Text
   *  ...
   *  Type: string
   */
  this.Text = ngVal(text,'');

  /*  Variable: TextAlign
   *  ...
   *  Type: string
   *  Default value: 'center'   
   */
  this.TextAlign = 'center';

  /*  Variable: Alt
   *  ...
   *  Type: string
   */
  this.Alt = '';

  /*  Variable: HTMLEncode
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.HTMLEncode = false;

  /*  Variable: AutoSize
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.AutoSize = true;
  /*  Variable: MinWidth
   *  ...
   *  Type: integer
   *  Default value: *undefined*   
   */
  // this.MinWidth = undefined;
  
  /*  Variable: Checked
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.Checked = 0;
  //optional:
  /*  Variable: RadioGroup
   *  ...
   *  Type: string
   *  Default value: *undefined*   
   */
  // this.RadioGroup = undefined;

  /*  Variable: Cursor
   *  ...
   *  Type: string
   *  Default value: *'pointer'*   
   */
  // this.Cursor = 'pointer';

  /*  Variable: ReadOnly
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  // this.ReadOnly = false;

  this.DoMouseEnter = ngb_DoMouseEnter;
  this.DoMouseLeave = ngb_DoMouseLeave;
  this.DoPtrClick = ngb_DoPtrClick;
  this.DoPtrDblClick = ngb_DoPtrDblClick;

  /*  Variable: Img
   *  ...
   *  Type: object
   */
  this.Img = null;
  /*  Variable: ImgAlign
   *  ...
   *  Type: string
   *  Default value: *'left'*   
   */
  this.ImgAlign = 'left';
  
  /*  Variable: ImgIndent
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.ImgIndent = 0;
  
  /*  Variable: LeftImg
   *  ...
   *  Type: object
   */
  this.LeftImg = null;

  /*  Variable: MiddleImg
   *  ...
   *  Type: object
   */
  this.MiddleImg = null;

  /*  Variable: RightImg
   *  ...
   *  Type: object
   */
  this.RightImg = null;

  /*
   *  Group: Methods
   */
  /*  Function: Check
   *  Sets new button check state.   
   *   
   *  Syntax:
   *    void *Check* (int newval)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Check = ngb_Check;

  /*  Function: Click
   *  Clicks the button.   
   *   
   *  Syntax:
   *    void *Click* ([event ev])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Click = ngb_Click;

  /*  Function: SetText
   *  Sets new button text.   
   *   
   *  Syntax:
   *    void *SetText* (string text)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.SetText = ngb_SetText;
  /*  Function: GetText
   *  Gets text content.   
   *   
   *  Syntax:
   *    string *GetText* (void)
   *     
   *  Returns:
   *    Text content.     
   */
  this.GetText=ngc_GetText;
  
  /*  Function: GetAlt
   *  Gets alt text.   
   *   
   *  Syntax:
   *    string *GetAlt* (void)
   *     
   *  Returns:
   *    Alt text.     
   */
  this.GetAlt=ngc_GetAlt;
  
  this.GetImg = ngb_GetImg;
  this.GetClassName = ngb_GetClassName;
  this.DoCreate = ngb_DoCreate;
  this.DoUpdate = ngb_DoUpdate;
  this.DefaultSetVisible = this.SetVisible;
  this.SetVisible = ngb_SetVisible;
  this.DefaultSetEnabled = this.SetEnabled;
  this.SetEnabled = ngb_SetEnabled;
  
  this.GetAction = ngb_GetAction;
  this.SetAction = ngb_SetAction;
  this.SyncAction = ngb_SyncAction;
  this.ActionSetVisible = this.SetVisible;
  this.ActionCheck = this.Check;
  this.ActionClick = this.Click;
  this.ActionUpdate = this.Update;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnSetText
   */     
  this.OnSetText = null;
  /*
   *  Event: OnGetText
   */     
  this.OnGetText = null;
  /*
   *  Event: OnGetAlt
   */     
  this.OnGetAlt = null;
  
  /*
   *  Event: OnCheckChanged
   */     
  this.OnCheckChanged = null;
      
  /*
   *  Event: OnDblClick
   */     
  this.OnDblClick = null;
  /*
   *  Event: OnClick
   */     
  this.OnClick = null;
  
  /*
   *  Event: OnMouseEnter
   */     
  this.OnMouseEnter = null;
  /*
   *  Event: OnMouseLeave
   */     
  this.OnMouseLeave = null;
  
  /*
   *  Event: OnGetImg
   */     
  this.OnGetImg = null;
  
  /*
   *  Event: OnGetClassName
   */     
  this.OnGetClassName = null;
    
  ngControlCreated(this);
}

// --- ngCheckBox --------------------------------------------------------------

/*  Class: ngCheckBox
 *  Standard check box control (based on <ngButton>).
 */
/*
 *  Group: Properties
 */
/*  Variable: AllowGrayed
 *  ...
 *  Type: bool
 *  Default value: *false*         
 */
/*<>*/

/*  Class: ngRadioButton
 *  Standard radio button control (based on <ngButton>).
 */
/*
 *  Group: Properties
 */
/*  Variable: AllowGrayed
 *  ...
 *  Type: bool
 *  Default value: *false*         
 */
/*<>*/

function ngRadioCheckBox_Create(d, ref, parent)
{
  var c=ngCreateControlAsType(d, 'ngButton', ref, parent);
  if(!c) return c;
  c.OnClick = function(e) 
  { 
    var b=e.Owner;
    if((!b)||(b.Action)) return;
    if(typeof b.RadioGroup !== 'undefined') b.Check(1);
    else 
    {            
      var s=ngVal(b.Checked,0);
      switch(s)
      {
        case 0:
        case false:
          if(ngVal(b.AllowGrayed,false)) s=2;
          else s=1;
          break;
        case 1:
        case true:
          s=0;
          break;
        default:
          s=1;
          break;
      }
      b.Check(s);
    } 
  }
  if(typeof c.ReadOnly === 'undefined')    c.ReadOnly=false;
  if(typeof c.AllowGrayed === 'undefined') c.AllowGrayed=false;
  if((d.Type == 'ngRadioButton')&&(typeof c.RadioGroup === 'undefined')) c.RadioGroup='default';
  return c;
}

// --- ngGroup ------------------------------------------------------------------

function ngg_DoUpdate(o)
{
  var cclass=this.BaseClassName;

  var frame=document.getElementById(this.ID+'_F');
  if(!frame) return true;

  var html=new ngStringBuilder;
  var w=ng_ClientWidth(o);
  var h=ng_ClientHeight(o);  
  var l=0,t=0;
  
  var text=this.GetText();
  if(this.HTMLEncode) text=ng_htmlEncode(text);

  var dp=new Object;
  ngc_ImgBox(html, this.ID, 'ngGroup', 0, this.Enabled, 0,0,w,h,false, this.Frame, '', '', undefined, dp);

  if(this.ControlsInside)
  {
    this.ControlsPanel.Bounds.T=dp.Top.H;
    this.ControlsPanel.Bounds.L=dp.Left.W;
    this.ControlsPanel.Bounds.R=dp.Right.W;
    this.ControlsPanel.Bounds.B=dp.Bottom.H;
  }
  else
  {
    this.ControlsPanel.Bounds.T=0;
    this.ControlsPanel.Bounds.L=0;
    this.ControlsPanel.Bounds.R=0;
    this.ControlsPanel.Bounds.B=0;
  }  
  this.ControlsPanel.SetBounds();
  
  if(text!='') html.append('<div id="'+this.ID+'_C" class="'+cclass+(this.Enabled ? "Caption" : "CaptionDisabled")+'" style="position: absolute; left: '+l+'px;top: '+t+'px;">'+text+'</div>');
  ng_SetInnerHTML(frame,html.toString());
  return true;
}

function ngg_SetClientRect(v)
{
  if(!ngVal(v,false)) return;

  var noimg = {L:0,T:0,aL:0,aT:0,oT:0,oL:0,W:0,H:0};
  var dp=new Object;
  
  if(typeof v.W !== 'undefined') 
  {
    dp.Left =((!this.ControlsInside) || typeof this.Frame.Left == 'undefined' ? noimg : ngc_ImgProps(this.ID+'_L', 0, this.Enabled, this.Frame.Left));
    dp.Right =((!this.ControlsInside) || typeof this.Frame.Right == 'undefined' ? noimg : ngc_ImgProps(this.ID+'_R', 0, this.Enabled, this.Frame.Right));
    this.Bounds.W=v.W+dp.Left.W+dp.Right.W;
    delete this.Bounds.R;
  }
  
  if(typeof v.H !== 'undefined')
  {
    dp.Top =((!this.ControlsInside) || typeof this.Frame.Top == 'undefined' ? noimg : ngc_ImgProps(this.ID+'_B', 0, this.Enabled, this.Frame.Top));
    dp.Bottom =((!this.ControlsInside) || typeof this.Frame.Bottom == 'undefined' ? noimg : ngc_ImgProps(this.ID+'_B', 0, this.Enabled, this.Frame.Bottom));

    this.Bounds.H=v.H+dp.Top.H+dp.Bottom.H;
    delete this.Bounds.B;
  }  
}

function ngg_GetClientRect()
{
  var w,h;  
  if(ngVal(this.ControlsPanel,false))
  {
    var o=this.ControlsPanel.Elm();
    if(o)
    {
      w=ng_ClientWidth(o);
      h=ng_ClientHeight(o);
    }
  }  
  return { W: w, H: h};
}

function ngg_DoRelease(o)
{
  o.style.display='none';
  var frame=document.getElementById(this.ID+'_F');
  if(frame) ng_SetInnerHTML(frame,'');
}

function ngg_DoCreate(def, ref, elm, parent)
{
  var cclass=this.BaseClassName;

  if((typeof def.CW !== 'undefined')||(typeof def.CH !== 'undefined'))
  {
    this.SetClientRect({W: def.CW, H: def.CH});
    this.SetBounds();
  }
  var ldefs=new Object;
  if(typeof def.ControlsPanel === 'object') ldefs.ControlsPanel = ng_CopyVar(def.ControlsPanel);
  else ldefs.ControlsPanel = new Object;
  ng_MergeDef(ldefs.ControlsPanel, {
    Type: 'ngPanel',
    className: cclass+'ControlsPanel',
    id: this.ID+'_P',
    ScrollBars: ssAuto,
    L:0,T:0,R:0,B:0
  }); 
  ldefs.ControlsPanel.Controls=def.Controls;
  ldefs.ControlsPanel.ModifyControls=def.ModifyControls;
  
  var lref=ngCreateControls(ldefs,undefined,this.ID);
  if(!ngVal(def.ParentReferences,true)) 
  {
    this.Controls = new Object;
    this.Controls.Owner = this; 
    this.Controls.AddControls = function(defs, newparent) { ngCreateControls(defs,this,ngVal(newparent,ldefs.ControlsPanel.id)); }
    ref=this.Controls;
  }  
  this.ControlsPanel=lref.ControlsPanel;
  this.ControlsPanel.Owner=this;
  delete lref.ControlsPanel;
  ngCloneRefs(ref,lref);

  delete def.Controls;
  delete def.ModifyControls;

  var nd=document.createElement('div');
  nd.id=this.ID+'_F';
  nd.style.position="absolute";
  nd.style.zIndex="800";
  elm.appendChild(nd);
//  ng_AppendInnerHTML(elm,'<div id="'+this.ID+'_F" style="position: absolute;z-index:800;"></div>');
}

/**
 *  Class: ngGroup
 *  This class implements a generic group control. 
 *
 *  Syntax:
 *    new *ngGroup* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngGroup(id)
{
  ngControl(this, id, 'ngGroup');

  /*
   *  Group: Definition
   */
  /*
   *  Variable: CW
   *  ClientRect width.
   *  Type: integer
   */
  /*<>*/
  /*
   *  Variable: CH
   *  ClientRect height.
   *  Type: integer
   */
  /*<>*/
  /*
   *  Variable: ControlsPanel
   *  Controls panel definition.
   *  Type: object
   */
  /*<>*/
  /*
   *  Group: Properties
   */
  /*  Variable: Text
   *  ...
   *  Type: string
   */
  this.Text = '';
  /*  Variable: HTMLEncode
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.HTMLEncode = false;
  /*  Variable: Frame
   *  ...
   *  Type: object
   */
  this.Frame = new Object;
  /*  Variable: ControlsInside
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.ControlsInside = true;
  
  /*
   *  Group: Methods
   */
  /*  Function: GetText
   *  Gets text content.   
   *   
   *  Syntax:
   *    string *GetText* (void)
   *     
   *  Returns:
   *    Text content.     
   */
  this.GetText=ngc_GetText;
  /*  Function: GetClientRect
   *  Gets client rectangle dimensions.   
   *   
   *  Syntax:
   *    object *GetClientRect* ()
   *     
   *  Returns:
   *    Rectangle dimensions in format { W: width, H: height }.     
   */
  this.GetClientRect = ngg_GetClientRect;
  
  /*  Function: SetClientRect
   *  Sets client rectangle dimensions.   
   *   
   *  Syntax:
   *    void *SetClientRect* (object rect)
   *     
   *  Parameters:
   *    rect - { W: width, H: height }
   *  Returns:
   *    -     
   */
  this.SetClientRect = ngg_SetClientRect;

  this.DoCreate = ngg_DoCreate;
  this.DoRelease = ngg_DoRelease;
  this.DoUpdate = ngg_DoUpdate;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnGetText
   */     
  this.OnGetText = null;

  ngControlCreated(this);
}

// --- ngEdit ------------------------------------------------------------------

var ngHintHideOnFocus = 0;
var ngHintHideOnInput = 1;

var ngDefaultHintStyle; // = undefined... autodetect by platform;

var ngeDropDownEdit = 0;
var ngeDropDownList = 1;

var KEY_BACK = 8;
var KEY_TAB = 9;
var KEY_RETURN = 13;
var KEY_SHIFT = 16;
var KEY_CONTROL = 17;
var KEY_MENU = 18;
var KEY_PAUSE = 19;
var KEY_CAPITAL = 20;
var KEY_ESC = 27;
var KEY_PRIOR = 33;
var KEY_NEXT = 34;
var KEY_HOME = 35;
var KEY_END = 36;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_INSERT = 45;
var KEY_DELETE = 46;
var KEY_LWIN = 91;
var KEY_RWIN = 92;
var KEY_APPS = 93;
var KEY_NUMPAD0 = 96;  
var KEY_NUMPAD1 = 97;  
var KEY_NUMPAD2 = 98;  
var KEY_NUMPAD3 = 99;  
var KEY_NUMPAD4 = 100;  
var KEY_NUMPAD5 = 101;  
var KEY_NUMPAD6 = 102;  
var KEY_NUMPAD7 = 103;  
var KEY_NUMPAD8 = 104;  
var KEY_NUMPAD9 = 105;
var KEY_MULTIPLY = 106;
var KEY_ADD = 107;  
var KEY_SUBSTRACT = 109;  
var KEY_DECIMAL = 110;  
var KEY_DIVIDE = 111;  
var KEY_F1 = 112;  
var KEY_F2 = 113;  
var KEY_F3 = 114;  
var KEY_F4 = 115;  
var KEY_F5 = 116;  
var KEY_F6 = 117;  
var KEY_F7 = 118;  
var KEY_F8 = 119;  
var KEY_F9 = 120;  
var KEY_F10 = 121;  
var KEY_F11 = 122;  
var KEY_F12 = 123;  
var KEY_NUMLOCK = 144;  
var KEY_SCROLL = 145;  

function nge_HintStyle(c)
{
  // FireFox on Android doesn't process key events :(
  // therefore hint must be hidden on focus.
  // Default browser and Doplhin has problems with hint style, phone keyboard and showing keyboard  
  if((ngAndroid)&&(!ngChrome)) return ngHintHideOnFocus;
  
  // Password requires input type changing which cause to lose caret position, 
  // thus hint style must be ngHintHideOnFocus. 
  if(c)
  {
    if(c.Password) return ngHintHideOnFocus;
    if((c.MaxLength>0)&&(ngWindowsPhone)) return ngHintHideOnFocus; // Windows Phone doesn't handle dynamic changing of length attribute properly
    if(typeof c.HintStyle!=='undefined') return c.HintStyle;
  }
  if(typeof ngDefaultHintStyle!=='undefined') return ngDefaultHintStyle;

  return ngHintHideOnInput;
}

function nge_SuggestionResults(id,txt,data)
{
  var c=ngGetControlById(id);
  if((!c)||(!ngVal(c.Suggestion,false))) return;
  
  if(txt!=c.GetText()) return;
  
  var dd=c.DropDownControl;
  if(!dd) return;
  
  if((c.OnSuggestionData)&&(!ngVal(c.OnSuggestionData(c,txt,data),false))) return;

  if(c.OnSuggestionResults)
  {
    var res=new Object;
    res.found=false;
    res.needupdate=false;
    
    if(!ngVal(c.OnSuggestionResults(c,txt,data,res),false)) return;
    
    if((dd.Visible)&&(res.needupdate)&&(res.found))
    {
      dd.SetItemFocus(null);
      dd.Update();
    }
    c.SuggestionFound=res.found;
  }
  else
  {
    if((typeof data==='undefined')||(data.length==0)) c.SuggestionFound=false;
    else
    {
      dd.Clear();
      dd.AddItems(data);
      if(dd.Visible)
      {
        dd.SetItemFocus(null);
        dd.Update();
      }
      c.SuggestionFound=true;
    }
  }  
  if(c.SuggestionFound) 
  {
    var dd=c.DropDownControl;
    if(dd) dd.SetItemFocus(null);
    c.DropDown();
  } 
  else 
  {
    c.HideDropDown();
  }
}

function nge_Suggestion(id)
{
  var c=ngGetControlById(id);
  if((!c)||(!ngVal(c.Suggestion,false))) return;
  if(c.SuggestionTimer) clearTimeout(c.SuggestionTimer);
  c.SuggestionTimer=null;
  
  var txt=c.GetText();
  if(txt=='') { c.HideDropDown(); c.SuggestionLastSearch=''; return; }
  if(ngVal(c.SuggestionLastSearch,'')!=txt)
  {
    if(c.OnSuggestionSearch) 
    {
      var res=new Object;
      res.found=false;
      res.needupdate=false;
      
      if(!ngVal(c.OnSuggestionSearch(c,txt,res),false)) return;
      
      var dd=c.DropDownControl;
      if((dd)&&(dd.Visible)&&(res.needupdate)&&(res.found))
      {
        dd.SetItemFocus(null);
        dd.Update();
      }
      c.SuggestionFound=res.found;
      c.SuggestionLastSearch=txt;
    }
    else
    {
      c.SuggestionLastSearch=txt;

      var url=ngVal(c.SuggestionURL,'');
      var ignorecase=ngVal(c.SuggestionIgnoreCase,true);
      var partial=ngVal(c.SuggestionPartial,2);
      if(c.OnSuggestionURL) url=c.OnSuggestionURL(c,url);
      else 
      {
        if(url!='')
        {
          url=ng_AddURLParam(url,"S="+ng_URLEncode(c.ID));
          if((typeof c.SuggestionType !== 'undefined')&&(c.SuggestionType!='')) url=ng_AddURLParam(url,"T="+ng_URLEncode(c.SuggestionType));
          url=ng_AddURLParam(url,"Q="+ng_URLEncode(txt)+"&IC="+(ignorecase ? '1' : '0')+"&P="+partial);
        }
      }
      if(url!='') // Server suggestions
      {
        if(!c.SuggestionRPC) c.SuggestionRPC=new ngRPC(c.ID);
        c.SuggestionRPC.sendRequest(url);
        return;        
      }
      else // Client suggestions
      {        
        var found=false;
        var needupdate=false;
        var dd=c.DropDownControl;
        if(dd)
        {
          if(ignorecase) txt=txt.toLowerCase();
          var cid='';
          if(dd.Columns.length>0) cid=ngVal(c.SuggestionSearchColumn,dd.Columns[0].ID);
    
          var t,v;
          if(c.OnSuggestionCompareItem) partial=-1;
          else if(partial==-1) partial=2;
          dd.Scan(function(list, it, parent, userdata) {
            if(dd.Columns.length>0) t=ngVal(it.Text[cid],'');
            else t=it.Text;
            if(ignorecase) t=t.toLowerCase();
            switch(partial)
            {
              case -1:
                v=ngVal(c.OnSuggestionCompareItem(c,txt,t,list,it,parent),false);
                break;
              case 1:
                if(txt.length>t.length) return false;
                v=(t.substring(0,txt.length)==txt);
                break;
              case 2:
                v=(t.indexOf(txt)>=0)
                break;
              default:
                v=(t==txt);
                break;
            }        
            if(it.Visible!=v)
            {
              it.Visible=v;
              needupdate=true;
            }
            if(it.Visible) found=true;  
            return true;
          });
          if((dd.Visible)&&(needupdate)&&(found))
          {
            dd.SetItemFocus(null);
            dd.Update();
          }
        } 
        c.SuggestionFound=found;
      }
    }
    if(c.SuggestionFound)
    {
      var dd=c.DropDownControl;
      if(dd) dd.SetItemFocus(null);
      c.DropDown();
    }
    else c.HideDropDown();
  }
  else c.HideDropDown();
}

function nge_SuggestionRefresh(forcerequery, delay)
{
  var dd=this.DropDownControl;
  if(!dd) return;

  if(this.SuggestionTimer) clearTimeout(this.SuggestionTimer);

  if(ngVal(forcerequery,false)) this.SuggestionLastSearch=''; 

  var o=dd.Elm();
  if((o)&&(o.style.height!=''))
  {
    o.style.display='none';
    o.style.height='';
  }
  if(typeof delay==='undefined') delay=ngVal(this.SuggestionDelay,200);
  this.SuggestionTimer=setTimeout("nge_Suggestion('"+this.ID+"')",delay);
}

function nge_GetCaretPos() 
{
  var to=(this.ControlHasFocus ? document.getElementById(this.ID+'_T') : null);
  if(!to) return; // undefined
  
  var pos = 0;
  // IE Support
  if (document.selection) {
    to.focus();
    var Sel = document.selection.createRange ();
    Sel.moveStart ('character', -to.value.length);
    pos = Sel.text.length;
  }
  // Firefox support
  else if (to.selectionStart || to.selectionStart == '0')
    pos = to.selectionStart;
  return pos;
}


function nge_SetCaretPos(pos)
{
  var to=document.getElementById(this.ID+'_T');
  if(!to) return;

  if(to.setSelectionRange)
  {
    to.focus();
    to.setSelectionRange(pos,pos);
  }
  else if (to.createTextRange) {
    var range = to.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

function nge_TextChanged(event, elm, edit)
{
  if(typeof edit==='undefined') edit=ngGetControlById(elm.id.substring(0,elm.id.length-2), 'ngEdit');
  if(edit)
  {
    var v=elm.value;    
    
    if((!edit.HintVisible)&&(edit.Text!=v))
    {      
      edit.Text=v;
      if(edit.OnTextChanged) edit.OnTextChanged(edit);
      elm.className = edit.GetClassName('Input');
    }

    if(((v == '')&&((!edit.HasFocus)||(nge_HintStyle(edit)===ngHintHideOnInput))) || (edit.HintVisible))
    {
      var hint=edit.GetHint();
      if(hint!='') { 
        nge_ShowHint(edit,elm,hint);
        edit.SetCaretPos(0);
      }
      else nge_HideHint(edit,elm);
    }
  }
}

function nge_KeyDown(e,elm)
{
  if(!e) e=window.event;
  var edit=ngGetControlById(elm.id.substring(0,elm.id.length-2), 'ngEdit');
  if((edit)&&(edit.Enabled))
  {
    e.Owner=edit;
    if((edit.OnKeyDown)&&(!ngVal(edit.OnKeyDown(e),false))) return false;
    if(edit.HintVisible)
    {
      switch(e.keyCode)
      {
        case 35: // End
        case 36: // Home
        case 37: // Left
        case 39: // Right
        case 38: // Up
        case 40: // Down
        case 8:  // Backspace
        case 46: // Delete
        case 33: // PgUp 
        case 34: // PgDown 
          if(e.preventDefault) e.preventDefault();
          e.returnValue = false;
          break;
      }
    } 

    if(ngVal(edit.Suggestion,false)) // Suggestion keys 
    {
      var dd=edit.DropDownControl;
      switch(e.keyCode)
      {
        case 33: // PgUp 
        case 34: // PgDown 
        case 38: // Up
        case 40: // Down
          if((dd)&&(dd.Visible)) 
          {
            var o=dd.Elm();
            if((o)&&(o.onkeydown)) o.onkeydown(e);
            edit=null;
            break;
          }
          break;
        case 37: // Left
        case 39: // Right
          if((dd)&&(dd.Visible))
          {
            var it=dd.GetItemFocus();
            if((it)&&(typeof it.Items !== 'undefined')&&(it.Items.length>0)) 
            {
              if(e.keyCode==37) dd.Collapse(it);
              else dd.Expand(it);
              if(e.preventDefault) e.preventDefault();
              e.returnValue = false;
            }
          }
          break;                 
      }
    }    
  }
}

function nge_DefFormButton2(ctrl, t)
{
  var c,cc=ctrl.ChildControls;
  if(typeof cc !== 'undefined')
  {
    for(var i=0;i<cc.length;i++) 
    {
      c=cc[i];
      if((c)&&(c.Click)&&(c.Enabled)&&(c.Visible)&&(ngVal(c.FormID,'')==''))
      {
        if(((t)&&(ngVal(c.Default,false)))||((!t)&&(ngVal(c.Cancel,false)))) {          
          var timer=setTimeout(function () { // Fire Click later
            clearTimeout(timer);
            if(typeof c.Click==='function') c.Click(); 
          },10); 
          return true; 
        }
      }
    }

    for(var i=0;i<cc.length;i++) 
    {
      c=cc[i];
      if((ngVal(c.FormID,'')=='')&&(c.Visible)&&(nge_DefFormButton2(c,t))) return true;
    }
  }
  return false;
}

function nge_DefFormButton(ctrl, t)
{
  var p=ctrl.ParentControl;
  if(p)
  {    
    var c,cc=p.ChildControls;
    if(typeof cc !== 'undefined')
      for(var i=0;i<cc.length;i++) 
      {
        c=cc[i];
        if((c)&&(c!=ctrl)&&(c.Click)&&(c.Enabled)&&(c.Visible)&&(ngVal(c.FormID,'')==''))
        {
          if(((t)&&(ngVal(c.Default,false)))||((!t)&&(ngVal(c.Cancel,false)))) 
          { 
            var timer=setTimeout(function () { // Fire Click later
              clearTimeout(timer); 
              if(typeof c.Click==='function') c.Click();
            },10);
            return true;
          } 
        }
      }
      
    if((ngVal(p.FormID,'')=='')&&(nge_DefFormButton(p, t))) return true;

    if(typeof cc !== 'undefined')
      for(var i=0;i<cc.length;i++) 
      {
        c=cc[i];
        if((c)&&(c!=ctrl)&&(c.Visible)&&(ngVal(c.FormID,'')=='')&&(nge_DefFormButton2(c,t))) return true;
      }
  }
  return false;
}

function nge_KeyPress(e,elm)
{
  if(!e) e=window.event;
  var edit=ngGetControlById(elm.id.substring(0,elm.id.length-2), 'ngEdit');
  if((edit)&&(edit.Enabled))
  {
    e.Owner=edit;
    if((edit.OnKeyPress)&&(!ngVal(edit.OnKeyPress(e,elm),false))) return false;
  }
}

function nge_KeyUpHint(edit,elm,clsid)
{
  if(edit.HintVisible)
  {
    var hint=edit.GetHint();
    if(hint!='') {
      var val=elm.value;
      var s=0,ev,eh;
      for(ev=val.length-1,eh=hint.length-1;(ev>=0)&&(eh>=0);ev--,eh--)
        if(val.charAt(ev)!=hint.charAt(eh)) break;

      if((ev>=0)||(eh>=0)) 
      {
        if(eh>=0) {
          for(s=0;(s<ev)&&(s<hint.length);s++)          
            if(val.charAt(s)!=hint.charAt(s)) break;
          if(s===hint.length) {
            ev=val.length-1;
          }
        }        
        nge_HideHint(edit,elm,val.substr(s,ev-s+1));
      }
    }
    else nge_HideHint(edit,elm);
  }
}

function nge_KeyUp(e,elm)
{
  if(!e) e=window.event;
  var edit=ngGetControlById(elm.id.substring(0,elm.id.length-2), 'ngEdit');
  if((edit)&&(edit.Enabled))
  {
    e.Owner=edit;
    nge_KeyUpHint(edit,elm,'Input');

    if((edit.OnKeyUp)&&(!ngVal(edit.OnKeyUp(e,elm),false))) return false;
    
    nge_TextChanged(e,elm,edit);
    if(ngVal(edit.Suggestion,false)) // Suggestion keys
    {
      var dd=edit.DropDownControl;
      switch(e.keyCode)
      {
        case 35: // End
        case 36: // Home
        case 37: // Left
          break;
        case 9:  // Tab
          if(!dd) break;
        case 27: // Esc
          if(edit.SuggestionTimer) clearTimeout(edit.SuggestionTimer);
          edit.SuggestionTimer=null;
          edit.HideDropDown();
          break;
        case 39: // Right
        case 13: // Enter
          if((dd)&&(dd.Visible))
          {
            var fi=dd.GetItemFocus();
            if(fi) 
            {
              if((e.keyCode==39)&&(fi)&&(typeof fi.Items !== 'undefined')&&(fi.Items.length>0)) 
                break;
              dd.SetItemFocus(null);
              if(edit.SuggestionTimer) clearTimeout(edit.SuggestionTimer);
              edit.SuggestionTimer=null;
              dd.SelectDropDownItem(fi);
              edit=null;
            }
          }     
          break;           
        case 33: // PgUp 
        case 34: // PgDown 
        case 38: // Up
        case 40: // Down
          if((dd)&&(dd.Visible)) 
          {
            var o=dd.Elm();
            if((o)&&(o.onkeyup)) o.onkeyup(e);
            edit=null;
            break;
          }
          if(e.keyCode!=40) break;
        default:
          if(elm.value=='')
          {
            if(edit.SuggestionTimer) clearTimeout(edit.SuggestionTimer);
            edit.SuggestionTimer=null;
            edit.HideDropDown();
          }
          else 
          {
            edit.SuggestionRefresh();
          }
          if(e.keyCode==40) edit=null;
          break; 
      }
    }
    if((e.keyCode==40)&&(edit)) edit.DropDown(); // Down
    if((e.keyCode==13)&&(edit)) // Enter
    {
      var handled=false;
      if(edit.Buttons)
      {
        var btn;
        for(var i=0;i<edit.Buttons.length;i++)
        {
          btn=edit.Buttons[i];
          if((ngVal(btn.Default,false))&&(typeof btn.Click === 'function'))
          {
            var timer=setTimeout(function () { // Fire Click later
              clearTimeout(timer); 
              if(typeof btn.Click==='function') btn.Click(e);
            },10); 
            handled=true;
            break;
          }
        }
      }    
      if((!handled)&&(nge_DefFormButton(edit, 1))) handled=true;
      if((!handled)&&(edit.Buttons)&&(edit.Buttons.length>0)&&(typeof edit.Buttons[0].Click === 'function'))
      {
        btn=edit.Buttons[0];
        var timer=setTimeout(function () { // Fire Click later
          clearTimeout(timer); 
          if(typeof btn.Click==='function') btn.Click(e);
        },10); 
        handled=true;
      }
      if(handled)
      {
        edit.SetFocus(false);
        if(e.stopPropagation) e.stopPropagation();         
        else e.cancelBubble = true;
      }    
    }
    if((e.keyCode==27)&&(edit)) // Escape
    {
      var handled=false;
      if(edit.Buttons)
      {
        var btn;
        for(var i=0;i<edit.Buttons.length;i++)
        {
          btn=edit.Buttons[i];
          if((ngVal(btn.Cancel,false))&&(typeof btn.Click === 'function'))
          {
            var timer=setTimeout(function () { // Fire Click later
              clearTimeout(timer); 
              if(typeof btn.Click==='function') btn.Click(e);
            },10); 
            handled=true;
            break;
          }
        }
      }    
      if((!handled)&&(nge_DefFormButton(edit, 0))) handled=true;
      if(handled)
      {
        edit.SetFocus(false);
        if(e.stopPropagation) e.stopPropagation();         
        else e.cancelBubble = true;
      } 
    }
  }
}

function nge_SetText(text)
{
  if(this.OnSetText) text=this.OnSetText(text,this);
  if(text!=this.Text)
  {
    this.Text=text;
    var o=document.getElementById(this.ID+'_T');
    if(o) 
    {
      var hintvisible=false;
      if(text=='') 
      {    
        var hint=this.GetHint();
        if((hint!='')&&((!this.HasFocus)||(nge_HintStyle(this)===ngHintHideOnInput))) {
          hintvisible=true;
          nge_ShowHint(this,o,hint);
        }
        else o.value=text;
      }
      else o.value=text;
      if((this.HintVisible)&&(!hintvisible)) nge_HideHint(this,o);
    }
    if(this.OnTextChanged) this.OnTextChanged(this);
    if(o) o.className = this.GetClassName('Input',hint);
  }
}

function nge_DoAcceptGestures(o,gestures)
{
  gestures.tap=true;
}

function nge_DoGesture(pi)
{
  if((pi.Owner===this)&&(pi.Gesture==='drag'))
  {
    if(this.HasFocus)
      return true;
  }
  return false;
}


function nge_DoPtrStart(pi)
{
  if(pi.EventID==='control')
  {
    if((this.DropDownType==ngeDropDownList)&&(this.DropDownControl))
    {
      pi.CanFocus=false;
      pi.PreventDefault=true;
      pi.PreventSelect=true;
    }
    else
    {
      pi.PreventDefault=false;
    }    
  }
}

function nge_DoPtrClick(pi)
{
  if(pi.EventID==='control')
  {                     
    if((this.DropDownType==ngeDropDownList)&&(this.DropDownControl)) 
    {
      if(this.DropDownControl.Visible) this.HideDropDown();
      else this.DropDown();
    }
    else
    {
      if((this.HintVisible)&&(nge_HintStyle(this)===ngHintHideOnInput)) this.SetCaretPos(0);
    }    
  }
}

function nge_DoUpdateImages()
{
  var image, focus=(this.HasFocus ? 1 : 0);
  if(this.OnGetImg) image=this.OnGetImg(this, 0);
  else image=this.LeftImg;

  ngc_ChangeImg(this.ID+'_IL', focus, this.Enabled, image);

  if(this.OnGetImg) image=this.OnGetImg(this, 2);
  else image=this.RightImg;
  ngc_ChangeImg(this.ID+'_IR', focus, this.Enabled, image);

  if(this.OnGetImg) image=this.OnGetImg(this, 1);
  else image=this.MiddleImg;
  ngc_ChangeImgS(this.ID+'_IM', focus, this.Enabled, image);
}

var ngMobileKeyboardActive=0;

function nge_BeginMobileKeyboard()
{
  // Mobile keyboards sometimes forces application resize or hides part of the application.
  // To prevent this add temporary margin to application's container.
  var ae=((typeof ngApp !== 'undefined')&&(ngApp) ? ngApp.Elm() : null);
  if((ae)&&(ngVal(ngApp.MobileKeyboardFix,true))) {
    if(ngMobileKeyboardActive===2)
    {
      ngMobileKeyboardActive=1;
      return;
    }
    ngMobileKeyboardActive=1;
    ngApp.SavedAppHeight=ae.style.height;
    ngApp.SavedAppBottom=ae.style.bottom;
    ngApp.SavedAppMarginBottom=ae.style.marginBottom;

    // Disable MobileKeyboard mode if there will be no resize during following 3secs
    if(ngApp.MobileKeyboardTimer) clearTimeout(ngApp.MobileKeyboardTimer);
    ngApp.MobileKeyboardTimer=setTimeout(function() {
      delete ngApp.MobileKeyboardTimer;
      clearTimeout(ngApp.MobileKeyboardTimer);
      nge_EndMobileKeyboard();
    },3000);
        
    ng_SetClientHeight(ae,ng_ClientHeight(ae));
    ae.style.bottom='';
    ae.style.marginBottom=ng_WindowHeight();
  }
}

function nge_EndMobileKeyboard()
{
  var ae=((typeof ngApp !== 'undefined')&&(ngApp) ? ngApp.Elm() : null);
  if((ae)&&(typeof ngApp.SavedAppHeight!=='undefined'))
  {
    if(ngApp.MobileKeyboardTimer) clearTimeout(ngApp.MobileKeyboardTimer);
    delete ngApp.MobileKeyboardTimer;
    
    if(ngMobileKeyboardActive===2) return;
    ngMobileKeyboardActive=2;
    ngApp.InvokeLater(function() {
      if(ngMobileKeyboardActive!==2) return;
      ngMobileKeyboardActive=0;
      ae.style.bottom=ngApp.SavedAppBottom;
      ae.style.height=ngApp.SavedAppHeight;
      ae.style.marginBottom=ngApp.SavedAppMarginBottom;
      delete ngApp.SavedAppBottom;
      delete ngApp.SavedAppHeight;
      delete ngApp.SavedAppMarginBottom;
    });
  }

}

function nge_DoFocus(e, elm)
{
  this.HasFocus=true;
  this.DoUpdateImages();
  nge_BeginMobileKeyboard();

  if(this.HintVisible) this.SetCaretPos(0);
  if((this.DropDownControl)&&(this.DropDownControl.Visible)) this.HideDropDown();
  if((this.OnFocus)&&(this.Enabled)) this.OnFocus(this);
  
  if((this.Text == '')&&(nge_HintStyle(this)===ngHintHideOnFocus)) 
  {
    nge_HideHint(this,elm,'')
  }  
}

function nge_DoSetEnabled(v)
{
  this.Enabled=v;
  if((!v)&&(this.ControlHasFocus))
  {
    this.SetFocus(false);
    this.HasFocus=false;
    if(this.OnBlur) this.OnBlur(this);
  }
  if(this.Update) this.Update();
}

function nge_DoBlur(e, elm)
{
  this.HasFocus=false;
  nge_EndMobileKeyboard();

  if((this.OnBlur)&&(this.Enabled)) this.OnBlur(this);
  if((this.Text == '')&&(!this.HintVisible))
  {
    var o=document.getElementById(this.ID+'_T');
    if(o) 
    {
      var hint=this.GetHint();
      if(hint!='') {
        nge_ShowHint(this,o,hint);
      }
    }
  }
  this.DoUpdateImages();
}

function nge_ShowHint(c,o,hint)
{
  c.HintVisible=true; 
  o.className = c.GetClassName('Input',hint);
  o.value=hint;
  if(ngIExplorer && ngIExplorerVersion<=8)
  {
    if(o.getAttribute("type")!=="text")
    {
      var pwd=c.Password;
      var hasfocus=c.HasFocus;
      c.Password=false;
      c.Update();
      c.Password=pwd;
      if(hasfocus)
        ngApp.InvokeLater(function() {
          var o=document.getElementById(c.ID+'_T')
          if(o) o.focus();
        });
      return;
    }
  }
  else
    o.setAttribute("type","text");
  o.removeAttribute("maxlength");
}

function nge_HideHint(c,o,val)
{
  c.HintVisible=false;
  o.className = c.GetClassName('Input');
  if(c.Password) {
    if(ngIExplorer && ngIExplorerVersion<=8)
    {
      c.Update();
      ngApp.InvokeLater(function() {
        var o=document.getElementById(c.ID+'_T')
        if(o) o.focus();
      });
      return;
    }
    else
      o.setAttribute("type","password");
  }
  if(c.MaxLength>0) o.setAttribute("maxlength",c.MaxLength);
  if(typeof val !== 'undefined') o.value=(c.MaxLength>0 ? val.substr(0,c.MaxLength) : val);
}

function nge_OnDropDownSetVisible(l,v)
{
  if(!v) // hiding dropdown
  {
    if(!l.__hidingdropdown)
    {
      l.__hidingdropdown=true;
      try
      {
        var e=l.DropDownOwner;
        if(e)
        {
          if((e.OnHideDropDown)&&(!ngVal(e.OnHideDropDown(e,l),false))) return false;
          if(typeof l.DoHideDropDown === 'function') 
          {
            l.DoHideDropDown(this);
            return false;
          }
        }
      }
      finally
      {
        delete l.__hidingdropdown;
      }
    }
  }
  return true;
}

function nge_HideDropDown()
{
  var l=this.DropDownControl;
  if(l) l.SetVisible(false);
}

function nge_IsInsidePopup(t,intype,e)
{
  var ad=this.Elm();
  var ac=((intype!==1) && this.DropDownOwner ? this.DropDownOwner.Elm() : null); // edit is not considered as inside when mouse wheel is used
  while(t)
  {
    if((t===ac)||(t===ad)) break;
    t=t.parentNode;
  }      
  return (t ? true : false);
}

function nge_DropDown()
{
  if((!this.Enabled)||(this.ReadOnly)) return;
  var l=this.DropDownControl;
  if(!l) return;
  
  if((this.OnDropDown)&&(!ngVal(this.OnDropDown(this,l),false))) return;

  var po=this.Elm();
  var o=l.Elm();
  if((o)&&(po)) 
  {
    if(!l.Visible)
    {
      o.style.left='-10000px';
      o.style.top='-10000px';
    }

    if(typeof l.DoDropDown === 'function') l.DoDropDown(this);
    else
    {
      l.SetVisible(true);
      l.SetFocus();
    }
    if(!l.Visible) return;
    
    o=l.Elm();
    if(!o) return;

    ng_BeginMeasureElement(po);
    var ew=ng_OuterWidth(po); 
    var eh=ng_OuterHeight(po); 
    ng_EndMeasureElement(po);

    ng_BeginMeasureElement(o);
    var lw=ng_OuterWidth(o); 
    var lh=ng_OuterHeight(o);
    ng_EndMeasureElement(o);

    var pos=ng_ParentPosition(po,ngApp ? ngApp.Elm() : undefined);

    if(typeof this.DropDownWidth !== 'undefined')
    {
      if(this.DropDownWidth>0) ng_SetOuterWidth(o,this.DropDownWidth);
    }
    else if(lw<ew) { ng_SetOuterWidth(o,ew); lw=ew; }
    var maxh=ngVal(l.MaxHeight,150);
    if(lh>maxh) { ng_SetOuterHeight(o,maxh); lh=maxh; } 

    if(((pos.x+lw<=ng_WindowWidth()-20)&&(this.DropDownAlign=='left'))||((pos.x+ew-lw)<0))
    {
      o.style.left=pos.x+'px';
    }
    else o.style.left=(pos.x+ew-lw)+'px'; 
    
    if((pos.y+eh+lh>ng_WindowHeight()-20)&&((pos.y-lh)>=0))
    {
      o.style.top=(pos.y-lh)+'px';
    }
    else o.style.top=(pos.y+eh)+'px';
    o.style.zIndex='100000';
    
    l.Update();
    if(typeof l.DoDropDownFinished === 'function') l.DoDropDownFinished(this);
  }
}

function nge_SetDropDownControl(l)
{
  var ol=this.DropDownControl;
  if(ol)
  {
    ol.RemoveEvent('OnSetVisible',nge_OnDropDownSetVisible);
    ol.RemoveEvent('IsInsidePopup',nge_IsInsidePopup);

    if(typeof ol.SetDropDownOwner === 'function') ol.SetDropDownOwner(null);
    delete ol.DropDownOwner;
  }
  this.DropDownControl=l;
  if(l)
  {
    l.DropDownOwner=this;
    l.IsPopup=true;
    l.AddEvent(nge_OnDropDownSetVisible,'OnSetVisible');
    l.AddEvent('IsInsidePopup',nge_IsInsidePopup);
    
    if(typeof l.SetDropDownOwner === 'function') l.SetDropDownOwner(this);
  }
}

function nge_GetClassName(cls, hint)
{
  if(typeof hint === 'undefined') hint=this.GetHint();
  var text=this.GetText();

  if(this.OnGetClassName) 
  {
    var c=this.OnGetClassName(this, cls, text, hint);
    if(ngVal(c,'')!='') cls=c;
  }
  if(((this.DefaultText!='')&&(text==this.DefaultText))||(this.HintVisible)) cls+='Hint';
  if(!this.Enabled) cls+='Disabled';
  return this.BaseClassName+cls;
}

function nge_DoUpdate(o)
{
  var html=new ngStringBuilder;
  
  var cclass=this.BaseClassName;
  
  var image,dp;
  if((ngIExplorer)&&(ng_GetStylePx(o.style.height)==0)) o.style.height='1px';  // IE7 Measure fix
  var width=ng_ClientWidth(o);
  var w=width,th=0,lw=0,rw=0,bw=0,bl=0;
  var alt=this.GetAlt();
  var hint=(((!this.ControlHasFocus)||(nge_HintStyle(this)===ngHintHideOnInput)) ? this.GetHint() : '');

  var images=null;
  if(this.OnGetImg) image=this.OnGetImg(this, 0);
  else image=this.LeftImg;
  if(image)
  {
    if(!images) images=new ngStringBuilder;    
    dp=ngc_ImgProps(this.ID+'_IL', (this.ControlHasFocus ? 1 : 0), this.Enabled, image);
    ngc_Img(images,dp,"position:absolute; left: 0px;",ngVal(image.Attrs,''));
    lw=dp.W;
    if(dp.H>th) th=dp.H;
  }

  if(this.OnGetImg) image=this.OnGetImg(this, 2);
  else image=this.RightImg;
  if(image)
  {
    if(!images) images=new ngStringBuilder;    
    dp=ngc_ImgProps(this.ID+'_IR', (this.ControlHasFocus ? 1 : 0), this.Enabled, image);
    ngc_Img(images,dp,"position:absolute; left: "+(width-dp.W)+"px;",ngVal(image.Attrs,''));
    rw=dp.W;
    if(dp.H>th) th=dp.H;
  }

  if(this.OnGetImg) image=this.OnGetImg(this, 1);
  else image=this.MiddleImg;
  if(image)
  {
    if(!images) images=new ngStringBuilder;    
    dp=ngc_ImgProps(this.ID+'_IM', (this.ControlHasFocus ? 1 : 0), this.Enabled, image);
    ngc_ImgSW(images,dp,lw,width-lw-rw,'',ngVal(image.Attrs,''));
    if(dp.H>th) th=dp.H;
  }
  var readonly=(!this.Enabled)||(this.ReadOnly)||(this.DropDownType == ngeDropDownList);
  // If focused, we cannot use innerHTML because the input element must not be removed from DOM   
  var to=(this.ControlHasFocus ? document.getElementById(this.ID+'_T') : null);
  if(to) {
    var ts=o.firstChild; // get top span
    if(!ts) to=null;
    if(to && ngIExplorer && ngIExplorerVersion<=8)
    {
      var inptype = to.getAttribute("type");
      if(((this.Password)&&(!this.HintVisible) && inptype!=='password') || inptype!=='text') to=null;
    }
  }
  if(to) // updating DOM
  {
    if(alt!='') ts.setAttribute("title",alt);
    else        ts.removeAttribute("title");
  }
  else html.append('<span '+(alt!='' ? ' title="'+ng_htmlEncode(alt)+'"' : '')+'>');
  
  if((this.Buttons)&&(this.Buttons.length>0))
  {    
    var b,img,a,br;
    for(var i=0;i<this.Buttons.length;i++)
    {
      b=this.Buttons[i];
      b.Enabled=this.Enabled;
      if((b.BaseClassName=='')||(b.BaseClassName==b.CtrlType)) b.BaseClassName=cclass+'Button'; 
      if(!b.Visible) continue;
      if(b.ID=='') b.Attach(this.ID+'_B'+(i+1));
      br=ngb_SimpleRect(b);
      if(br.H>th) th=br.H;
      a=ngVal(b.ButtonAlign,'');
      if(a=='left')
      {
        b.Bounds.L=(lw+bl);
        lw+=br.W;
      }
      else 
      {
        b.Bounds.L=(w-rw-bw-br.W);
        bw+=br.W;
      }
      b.Bounds.T=0;
      b.Bounds.W=br.W;
      html.append('<div id="'+b.ID+'" class="'+b.BaseClassName+'" style="position: absolute; z-index:1; left:'+b.Bounds.L+'px; top: 0px; width: '+br.W+'px; height: '+br.H+'px"></div>');
    }
  }
  
  ng_SetClientHeight(o,th);
  var cbh=ng_StyleHeight(o);
  if(this.Bounds.H!=cbh)
  {
    this.Bounds.H=cbh;
    this.SetBounds();
  }

  var tw=(w-bw-bl-lw-rw-2);
  if(tw<0) tw=0;
  if(to) // updating DOM
  {
    // remove all except the input element
    var nx,n=ts.lastChild;
    while(n)
    {
      nx=n.previousSibling;
      if(n!=to) ts.removeChild(n);
      n=nx;      
    }      
    
    // create DOM before input element
    var temp = document.createElement('div');
    ng_SetInnerHTML(temp,html.toString());     

    // insert DOM before input element
    n=temp.firstChild;
    while(n)
    {
      nx=n.nextSibling;
      ts.insertBefore(n, to);
      n=nx;
    }
    
    // update input element
    to.className=this.GetClassName('Input',hint);
    
    if(!ngIExplorer || ngIExplorerVersion>8)
    {
      if((this.Password)&&(!this.HintVisible))    to.setAttribute("type","password");
      else                                        to.setAttribute("type","text");
    }
    
    if((this.MaxLength>0)&&(!this.HintVisible)) to.setAttribute("maxlength",this.MaxLength);
    else                                        to.removeAttribute("maxlength");
    
    if(readonly)
    {
      to.setAttribute("readonly","readonly");
      if(ngIExplorer) this.SetFocus(false);
    }
    else to.removeAttribute("readonly");

    to.style.textAlign=this.TextAlign;
    to.style.left=(lw+bl)+'px';
    to.style.top=this.OffsetTop+'px';
    to.style.width=tw+'px';
    if((this.HintVisible)&&(to.value!=hint)) 
    {
      to.value=hint;
      this.SetCaretPos(0);
    }

    if(images)
    {
      html.clear();
      html.append('<span style="position: absolute;z-index:0;left:0px;">');
      html.append(images);
      html.append('</span>');
      
      // create DOM after input element
      temp = document.createElement('div');
      ng_SetInnerHTML(temp,html.toString());     
  
      // append DOM after input element
      n=temp.firstChild;
      while(n)
      {
        nx=n.nextSibling;
        ts.appendChild(n);
        n=nx;
      }    
    }
  }
  else
  {
    this.HintVisible=(this.Text=='')&&(hint!='');
    html.append('<input type=');
    if((this.Password)&&(!this.HintVisible)) html.append('"password" ');
    else html.append('"text" ');
    if(readonly) html.append('readonly="readonly" ');
    html.append('id="'+this.ID+'_T" class="'+this.GetClassName('Input',hint));
    html.append('" style="border:0px; white-space: nowrap;text-align:'+this.TextAlign+';position: absolute; z-index:1;left:'+(lw+bl)+'px;top:'+this.OffsetTop+'px;width:'+(tw)+'px;');
    if(readonly) html.append("cursor: default;");
    html.append('" value="'+ng_htmlEncode(this.Text=='' ? hint : this.Text)+'" ');
    if((this.MaxLength>0)&&(!this.HintVisible)) html.append('maxlength="'+this.MaxLength+'" ');
    html.append('onkeydown="nge_KeyDown(event,this)" onkeyup="nge_KeyUp(event,this)" onkeypress="nge_KeyPress(event,this)" onchange="nge_TextChanged(event,this)"');
    html.append(' onfocus="ngc_Focus(event,this,\'ngEdit\')" onblur="ngc_Blur(event,this,\'ngEdit\')"');
    html.append(' />');
    if(images)
    {
      html.append('<span style="position: absolute;z-index:0;left:0px;">');
      html.append(images);
      html.append('</span>');
    }
    html.append('</span>');
    ng_SetInnerHTML(o,html.toString());
  }  

  if((this.Buttons)&&(this.Buttons.length>0))
  {    
    var b,biw,img;
    for(var i=0;i<this.Buttons.length;i++)
    {
      b=this.Buttons[i];
      b.Parent=this;
      b.Update();
    }
  }
  return true;
}

function nge_SetFocus(state)
{
  state=ngVal(state,true);
  if(state==this.HasFocus) return;
  
  var o=document.getElementById(this.ID+'_T');
  if(o) 
  { 
    try { 
      if(state) 
      {
        o.focus();
        if((this.SelectOnFocus)&&(!this.HintVisible)) o.select();
      } 
      else o.blur(); 
    } catch(e) { } 
  }
}

function nge_SetReadOnly(ro)
{
  ro=ngVal(ro,true);
  if(ro==this.ReadOnly) return;

  this.ReadOnly=ro;
  var o=document.getElementById(this.ID+'_T');
  if(o) 
  {
    if(ro) 
    {
      o.setAttribute("readonly","readonly");
      o.style.cursor='default';
      if((ngIExplorer)&&(this.ControlHasFocus)) this.SetFocus(false);
    }
    else   
    {
      o.removeAttribute("readonly");
      o.style.cursor='';
    }
  } 
}

function nge_DoMouseEnter(e, mi, elm)
{
  var o=document.getElementById(this.ID+'_T');
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i<0) cn=cn+'_Focus';
    o.className=cn;
  }
  ngc_EnterImg(this.ID+'_IL');
  ngc_EnterImgS(this.ID+'_IM');
  ngc_EnterImg(this.ID+'_IR');
  if(this.OnMouseEnter) this.OnMouseEnter(this);
}

function nge_DoMouseLeave(e, mi)
{
  if(this.OnMouseLeave) this.OnMouseLeave(this);

  var o=document.getElementById(this.ID+'_T');
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i>=0) cn=cn.substring(0,i);
    o.className=cn; 
  }
  ngc_LeaveImg(this.ID+'_IL');
  ngc_LeaveImgS(this.ID+'_IM');
  ngc_LeaveImg(this.ID+'_IR');
}

function nge_DoCreate(d, ref, elm, parent)
{
  if((typeof d.DropDown !== 'undefined')&&(typeof this.SetDropDownControl === 'function'))
  {
    ng_MergeDef(d.DropDown, {
      L: 0, T: 0,
      id: this.ID+'_DD',
      Data: {
        Visible: false
      }
    });   
    var lref=ngCreateControls({ Control: d.DropDown });
    if(typeof lref.Control !== 'undefined') // dropdown successfuly created
    {
      lref.Control.Owner=this;
      this.SetDropDownControl(lref.Control);
    }
  }
  if(typeof d.Buttons === 'object')
  {
    var ldefs=new Object;
    var b;
    for(var i=0;i<d.Buttons.length;i++)
    {
      b=ng_CopyVar(d.Buttons[i]);
      ldefs['B'+i]=b;      
    }
    var lref=ngCreateControls(ldefs,undefined,null);
    if((typeof this.Buttons !== 'object')||(!this.Buttons)) this.Buttons=new Array();
    for(var i=0;i<d.Buttons.length;i++)
    {
      b=lref['B'+i];
      if(b) 
      {
        b.Owner=this;
        this.Buttons[this.Buttons.length]=b;
      }
    }    
    if(!this.Buttons.length) this.Buttons=null; 
  }
}

function nge_DoDispose()
{
  this.HideDropDown();
  if(this.DropDownControl) this.DropDownControl.Dispose();
  return true;
}

/**
 *  Class: ngEdit
 *  This class implements a generic edit control. 
 *
 *  Syntax:
 *    new *ngEdit* ([string id, string text=''])
 *    
 *  Parameters:
 *    id - parent element
 *    text - edit text 
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngEdit(id, text)
{
  ngControl(this, id, 'ngEdit');
  this.DoCreate = nge_DoCreate;
  this.DoDispose = nge_DoDispose;  
  this.DoAcceptGestures = nge_DoAcceptGestures;
  this.DoGesture = nge_DoGesture; 
  
  /*
   *  Group: Definition
   */
  /*
   *  Variable: DropDown
   *  ...
   *  Type: object
   */
  /*<>*/
  
  /*
   *  Group: Properties
   */
  /*  Variable: Text
   *  ...
   *  Type: string
   */
  this.Text = ngVal(text,'');
  /*  Variable: DefaultText
   *  ...
   *  Type: string
   */
  this.DefaultText = '';
  /*  Variable: TextAlign
   *  ...
   *  Type: string
   *  Default value: *'left'*   
   */
  this.TextAlign = 'left';
  /*  Variable: Alt
   *  ...
   *  Type: string
   */
  this.Alt = '';
  /*  Variable: Hint
   *  ...
   *  Type: string
   */
  this.Hint = '';
  /*  Variable: HintStyle
   *  ...
   *  Type: integer
   */
  //this.HintStyle = undefined;  
  /*  Variable: ReadOnly
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.ReadOnly = false;
  /*  Variable: Password
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.Password = false;
  /*  Variable: MaxLength
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MaxLength = 0;

  /*  Variable: LeftImg
   *  ...
   *  Type: object
   */
  this.LeftImg = null;
  /*  Variable: MiddleImg
   *  ...
   *  Type: object
   */
  this.MiddleImg = null;
  /*  Variable: RightImg
   *  ...
   *  Type: object
   */
  this.RightImg = null;
  /*  Variable: OffsetTop
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.OffsetTop = 0;

  /*  Variable: HasFocus
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.HasFocus=false;

  /*  Variable: SelectOnFocus
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.SelectOnFocus=true;
  
  /*  Variable: Buttons
   *  ...
   *  Type: array
   *  Default value: *null*   
   */
  this.Buttons = null;

  /*  Variable: DropDownType
   *  ...
   *  Type: enum
   *  
   *  Constants:
   *  ngeDropDownEdit - ...
   *  ngeDropDownList - ...
   *           
   *  Default value: *ngeDropDownEdit*   
   */
  this.DropDownType = ngeDropDownEdit;

  /*  Variable: DropDownControl
   *  ...
   *  Type: object
   *  Default value: *null*   
   */
  this.DropDownControl = null;

  /*  Variable: DropDownWidth
   *  ...
   *  Type: integer
   *  Default value: *undefined*   
   */
  this.DropDownWidth = undefined;
  /*  Variable: DropDownAlign
   *  ...
   *  Type: string
   *  Default value: *'left'*   
   */
  this.DropDownAlign = 'left';

  /*  Variable: Suggestion
   *  ...
   *  Type: bool
   *  Default value: *false*         
   */
  //this.Suggestion=false;
  
  /*  Variable: SuggestionDelay
   *  ...
   *  Type: int
   *  Default value: *200*         
   */
  //this.SuggestionDelay=200;
  
  /*  Variable: SuggestionSearchColumn
   *  ...
   *  Type: string
   *  Default value: *''*         
   */
  //this.SuggestionSearchColumn='';
  
  /*  Variable: SuggestionIgnoreCase
   *  ...
   *  Type: bool
   *  Default value: *true*         
   */
  //this.SuggestionIgnoreCase=true;
  
  /*  Variable: SuggestionPartial
   *  ...
   *  Type: int
   *  Default value: *2*         
   */
  //this.SuggestionPartial=2
  
  /*  Variable: SuggestionURL
   *  ...
   *  Type: string
   *  Default value: *''*         
   */
  //this.SuggestionURL='';
  
  /*  Variable: SuggestionType
   *  ...
   *  Type: string
   *  Default value: *''*         
   */
  //this.SuggestionType='';

  /*
   *  Group: Methods
   */
  /*  Function: SetText
   *  Sets edit text.   
   *   
   *  Syntax:
   *    void *SetText* (string text)
   *     
   *  Returns:
   *    -     
   */
  this.SetText = nge_SetText;
  /*  Function: GetText
   *  Gets edit text.   
   *   
   *  Syntax:
   *    string *GetText* ()
   *     
   *  Returns:
   *    -     
   */
  this.GetText = ngc_GetText;
  /*  Function: GetAlt
   *  Gets alt text.   
   *   
   *  Syntax:
   *    string *GetAlt* (void)
   *     
   *  Returns:
   *    Alt text.     
   */
  this.GetAlt=ngc_GetAlt;
  /*  Function: GetHint
   *  Gets hint text.   
   *   
   *  Syntax:
   *    string *GetHint* (void)
   *     
   *  Returns:
   *    Hint text.     
   */
  this.GetHint=ngc_GetHint;
  
  /*  Function: SetReadOnly
   *  Sets readonly state of control.   
   *   
   *  Syntax:
   *    void *SetReadOnly* ([bool ro=true])
   *     
   *  Parameters:
   *    ro - readonly state
   *             
   *  Returns:
   *    -     
   */
  this.SetReadOnly=nge_SetReadOnly;

  /*  Function: GetCaretPos
   *  Gets caret position.   
   *   
   *  Syntax:
   *    int *GetCaretPos* ()
   *     
   *  Returns:
   *    Caret position or undefined if edit is not focused.     
   */
  this.GetCaretPos = nge_GetCaretPos;
  
  /*  Function: SetCaretPos
   *  Sets caret position.   
   *   
   *  Syntax:
   *    void *SetCaretPos* (int pos)
   *     
   *  Parameters:
   *    ro - caret position
   *       
   *  Returns:
   *    -     
   */
  this.SetCaretPos = nge_SetCaretPos;

  this.GetClassName = nge_GetClassName;
  this.DoMouseEnter = nge_DoMouseEnter;
  this.DoMouseLeave = nge_DoMouseLeave;
  this.DoSetEnabled = nge_DoSetEnabled;
  this.DoFocus = nge_DoFocus;
  this.DoBlur = nge_DoBlur;
  this.DoPtrStart = nge_DoPtrStart;
  this.DoPtrClick = nge_DoPtrClick;

  /*  Function: SetDropDownControl
   *  Assigns drop down control to edit box.   
   *   
   *  Syntax:
   *    void *SetDropDownControl* (object control)
   *     
   *  Returns:
   *    -     
   */
  this.SetDropDownControl = nge_SetDropDownControl;
  /*  Function: DropDown
   *  Shows drop down.   
   *   
   *  Syntax:
   *    void *DropDown* ()
   *     
   *  Returns:
   *    -     
   */
  this.DropDown = nge_DropDown;
  /*  Function: HideDropDown
   *  Hides drop down.   
   *   
   *  Syntax:
   *    void *HideDropDown* ()
   *     
   *  Returns:
   *    -     
   */
  this.HideDropDown = nge_HideDropDown;
  
  /*  Function: SuggestionRefresh
   *  Refreshes suggestion content.   
   *   
   *  Syntax:
   *    void *SuggestionRefresh* ([bool forcerequery=false, delay=undefined])
   *     
   *  Returns:
   *    -     
   */
  this.SuggestionRefresh = nge_SuggestionRefresh;

  this.DoUpdateImages = nge_DoUpdateImages;
  this.DoUpdate = nge_DoUpdate;
  this.SetFocus = nge_SetFocus;
  
  /*
   *  Group: Events
   */
  /*
   *  Event: OnSetText
   */     
  this.OnSetText = null;
  /*
   *  Event: OnGetText
   */     
  this.OnGetText = null;
  
  /*
   *  Event: OnTextChanged
   */     
  this.OnTextChanged = null;
  /*
   *  Event: OnGetAlt
   */     
  this.OnGetAlt = null;
  /*
   *  Event: OnGetHint
   */     
  this.OnGetHint = null;
  /*
   *  Event: OnGetClassName
   */     
  this.OnGetClassName = null;
  
  /*
   *  Event: OnDropDown
   */     
  this.OnDropDown = null;
  /*
   *  Event: OnHideDropDown
   */     
  this.OnHideDropDown = null;
  /*
   *  Event: OnClickOutside
   */
  this.OnClickOutside = null;
  
  /*
   *  Event: OnKeyDown
   */     
  this.OnKeyDown = null;
  /*
   *  Event: OnKeyUp
   */     
  this.OnKeyUp = null;
  /*
   *  Event: OnKeyPress
   */     
  this.OnKeyPress = null;
  
  /*
   *  Event: OnMouseEnter
   */     
  this.OnMouseEnter = null;
  /*
   *  Event: OnMouseLeave
   */     
  this.OnMouseLeave = null;
  
  /*
   *  Event: OnFocus
   */     
  this.OnFocus = null;
  /*
   *  Event: OnBlur
   */     
  this.OnBlur = null;

  /*
   *  Event: OnGetImg
   */     
  this.OnGetImg = null;
    
  /*
   *  Event: OnSuggestionSetText
   */
  // c.OnSuggestionSetText=null;             
  /*
   *  Event: OnSuggestionSearch
   */
  // c.OnSuggestionSearch=null;             
  /*
   *  Event: OnSuggestionCompareItem
   */
  // c.OnSuggestionCompareItem=null;             
  /*
   *  Event: OnSuggestionURL
   */
  // c.OnSuggestionURL=null;             
  /*
   *  Event: OnSuggestionResults
   */
  // c.OnSuggestionResults=null;
  /*
   *  Event: OnSuggestionData
   */
  // c.OnSuggestionData=null;
               
  ngControlCreated(this);
}

// --- ngDropDown --------------------------------------------------------------

function ngDropDown_Add(c)
{
  var b=new ngButton;
  c.DropDownButton=b;
  b.OnPtrStart=function(b,pi)
  {
    if(pi.EventID==='btn')
    {
      pi.CanFocus=false;
      pi.PreventDefault=true;
    }
  }

  b.OnClick = function(ci) 
  {         
    var e=(ci.Owner ? ci.Owner.Parent : null);
    if(e) 
    {
      var l=e.DropDownControl;
      if((l)&&(l.Visible)) e.HideDropDown();
      else e.DropDown();
    } 
  }
  c.Buttons=new Array(b);
}
/*  Class: ngDropDown
 *  Standard drop down control (based on <ngEdit>).
 */
/*<>*/
/*  Class: ngDropDownList
 *  Standard drop down list control (based on <ngEdit>).
 */
/*<>*/
function ngDropDown_Create(def, ref, parent,basetype,dropdownlist)
{
  var c=ngCreateControlAsType(def, ngVal(basetype,'ngEdit'), ref, parent);
  if(!c) return c;

  if(dropdownlist) 
  {
    c.DropDownType=ngeDropDownList;
    c.SelectOnFocus=true;
  }
  ngDropDown_Add(c);
  if(typeof def.DropDown === 'undefined') def.DropDown=new Object; 
  return c;
}

// --- ngEditNum ---------------------------------------------------------------

function ngedn_GetText(e)
{
  var n=parseInt(e.Text);
  if((e.Text=='')||(isNaN(n))) 
  {
    n=ngVal(e.DefaultNum,0);
    e.Text=''+n;
  }
  if((typeof this.MinNum !== 'undefined')&&(n<e.MinNum)) e.Text=''+e.MinNum;
  if((typeof this.MaxNum !== 'undefined')&&(n>e.MaxNum)) e.Text=''+e.MaxNum;
  return e.Text;
}              

/*  Class: ngEditNum
 *  Standard edit number control with spin buttons (based on <ngEdit>).
 */
/*<>*/

function ngEditNum_Create(def, ref, parent)
{
  /*
   *  Group: Definition
   */
  /*  Variable: ArrowsAlign
   *
   *  Constants: 
   *    'left' - ...  
   *    'right' - ...         
   *    'both' - ...         
   */
  /*<>*/
  var align=ngVal(def.ArrowsAlign, 'right');
  /*  Variable: Arrows
   *
   *  Constants:
   *    'none' - ...
   *    'leftright' - ...                    
   *    'updown' - ...                  
   */
  /*<>*/
  var type=ngVal(def.Arrows,'leftright');
  
  var c=ngCreateControlAsType(def, 'ngEdit', ref, parent);
  if(!c) return c;
  c.TextAlign=(align=='both' ? 'center' : 'right');
  c.OnGetText = ngedn_GetText;
  
  c.AddEvent('OnKeyUp',function(e,elm) {
    switch(e.keyCode)
    {
      case 38: this.DoUp();   return false;
      case 40: this.DoDown(); return false;
    }
    return true;
  });
  /*
   *  Group: Properties
   */
  /*  Variable: Step
   *  ...
   *  Type: integer
   *  Default value: *1*         
   */
  /*<>*/
  c.Step=1;
  /*  Variable: StepRound
   *  ...
   *  Type: bool
   *  Default value: *false*         
   */
  /*<>*/
  /*  Variable: MinNum
   *  ...
   *  Type: integer
   */
  /*<>*/
  /*  Variable: MaxNum
   *  ...
   *  Type: integer
   */
  /*<>*/
  /*  Variable: DefaultNum
   *  ...
   *  Type: integer
   *  Default value: *0*         
   */
  /*<>*/
  c.DefaultNum=0;
  
  /*
   *  Group: Methods
   */
  /*  Function: DoUp
   *  Increase value by <Step>.
   *   
   *  Syntax:
   *    void *DoUp* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.DoUp = function() {
    var n=this.GetNum();
    var nn=n;
    if(ngVal(this.StepRound,false)) nn=Math.ceil(n/this.Step)*this.Step;
    if(n==nn) n+=this.Step;
    else n=nn;
    this.SetNum(n);
  }
  /*  Function: DoDown
   *  Decrease value by <Step>.
   *   
   *  Syntax:
   *    void *DoDown* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.DoDown = function() {
    var n=this.GetNum();
    var nn=n;
    if(ngVal(this.StepRound,false))  nn=Math.floor(n/this.Step)*this.Step;
    if(n==nn) n-=this.Step;
    else n=nn;
    this.SetNum(n);
  }
  /*  Function: GetNum
   *  Gets number.
   *   
   *  Syntax:
   *    int *GetNum* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.GetNum = function() {
    if(this.OnGetNum) return this.OnGetNum(this);
    var n=parseInt(this.GetText());
    if(isNaN(n)) return undefined;
    if((typeof this.MinNum !== 'undefined')&&(n<this.MinNum)) n=this.MinNum;
    if((typeof this.MaxNum !== 'undefined')&&(n>this.MaxNum)) n=this.MaxNum;
    return n;
  };
  /*  Function: SetNum
   *  Sets number.
   *   
   *  Syntax:
   *    void *SetNum* (int n)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.SetNum = function(n) {
    if(isNaN(n)) n=this.DefaultNum; 
    n=ngVal(n,this.DefaultNum);
    n=ngVal(n,0);
    if(this.OnSetNum) { this.OnSetNum(this,n); return; }
    if((typeof this.MinNum !== 'undefined')&&(n<this.MinNum)) n=this.MinNum;
    if((typeof this.MaxNum !== 'undefined')&&(n>this.MaxNum)) n=this.MaxNum;
    this.SetText(''+n);
  }
  /*  Variable: ButtonUp
   *  ...
   *  Type: <ngButton>
   */
  c.ButtonUp=null;
  /*  Variable: ButtonDown
   *  ...
   *  Type: <ngButton>
   */
  c.ButtonDown=null;
  if(type!='none')
  {
    c.ButtonUp=new ngButton();
    if(align=='left') c.ButtonUp.ButtonAlign='left';
    c.ButtonUp.OnClick = function(ci) 
    {     
      var e=(ci.Owner ? ci.Owner.Parent : null);
      if(!e) return;
      if((e.OnUp)&&(!ngVal(e.OnUp(ci, e.GetNum()),false))) return;
      e.DoUp();
      if(!ci.Owner.Touching) e.SetFocus();
    }          
    c.ButtonDown=new ngButton();
    if((align=='left')||(align=='both')) c.ButtonDown.ButtonAlign='left';
    c.ButtonDown.OnClick = function(ci) 
    {     
      var e=(ci.Owner ? ci.Owner.Parent : null);
      if(!e) return;
      if((e.OnDown)&&(!ngVal(e.OnDown(ci, e.GetNum()),false))) return;
      e.DoDown();
      if(!ci.Owner.Touching) e.SetFocus();
    }
    if(align=='left') c.Buttons=new Array(c.ButtonDown,c.ButtonUp);
    else              c.Buttons=new Array(c.ButtonUp,c.ButtonDown);      
  }

  /*
   *  Group: Events
   */
  /*
   *  Event: OnGetNum
   */
  /*
   *  Event: OnSetNum
   */
  /*
   *  Event: OnUp
   */
  /*
   *  Event: OnDown
   */
  return c;
}

// --- ngMemo ------------------------------------------------------------------

function ngem_TextChanged(event, elm, edit)
{
  if(typeof edit==='undefined') edit=ngGetControlById(elm.id.substring(0,elm.id.length-2), 'ngMemo');
  if(edit)
  {
    var v=elm.value;
    if((!edit.HintVisible)&&(edit.Text!=v))
    {
      edit.Text=v;
      if(edit.OnTextChanged) edit.OnTextChanged(edit);
      elm.className = edit.GetClassName('Input');
    }
    
    if(((v == '')&&((!edit.HasFocus)||(nge_HintStyle(edit)===ngHintHideOnInput))) || (edit.HintVisible))
    {
      var hint=edit.GetHint();
      if(hint!='') { 
        edit.HintVisible=true;
        elm.className = edit.GetClassName('Input',hint);
        elm.value=hint;
        edit.SetCaretPos(0);
      }
      else edit.HintVisible=false;
    }
  }
}

function ngem_KeyPress(e,elm)
{
  if(!e) e=window.event;
  var edit=ngGetControlById(elm.id.substring(0,elm.id.length-2), 'ngMemo');
  if((edit)&&(edit.Enabled))
  {
    e.Owner=edit;
    if((edit.OnKeyPress)&&(!ngVal(edit.OnKeyPress(e),false))) return false;
  }
}

function ngem_KeyDown(e,elm)
{
  if(!e) e=window.event;
  var edit=ngGetControlById(elm.id.substring(0,elm.id.length-2), 'ngMemo');
  if((edit)&&(edit.Enabled))
  {
    e.Owner=edit;
    if((edit.OnKeyDown)&&(!ngVal(edit.OnKeyDown(e),false))) return false;

    if(edit.HintVisible)
    {
      switch(e.keyCode)
      {
        case 35: // End
        case 36: // Home
        case 37: // Left
        case 39: // Right
        case 38: // Up
        case 40: // Down
        case 8:  // Backspace
        case 46: // Delete
        case 33: // PgUp 
        case 34: // PgDown 
          if(e.preventDefault) e.preventDefault();
          e.returnValue = false;
          break;
      }
    } 
    
    if(e.keyCode==13)
    {
      // prevent parent window(s) fire default button
      var pc=edit.ParentControl;
      while(pc)
      {
        if(pc.CtrlType=='ngWindow') pc.IgnoreDefFormBtn=true; 
        pc=pc.ParentControl;
      }
    }
  }
  return false;
}

function ngem_KeyUp(e,elm)
{
  if(!e) e=window.event;
  var edit=ngGetControlById(elm.id.substring(0,elm.id.length-2), 'ngMemo');
  if((edit)&&(edit.Enabled))
  {
    e.Owner=edit;
    nge_KeyUpHint(edit,elm,'Input');
    
    if((edit.OnKeyUp)&&(!ngVal(edit.OnKeyUp(e),false))) return false;    
    ngem_TextChanged(e,elm,edit);
    if((e.keyCode==27)&&(edit))
    {
      nge_DefFormButton(edit, 0);
    }
  }
}

function ngem_SetText(text)
{
  if(this.OnSetText) text=this.OnSetText(text,this);
  if(text!=this.Text)
  {
    this.Text=text;
    var o=document.getElementById(this.ID+'_T');
    if(o) 
    {
      this.HintVisible=false;
      if(text=='') 
      {    
        var hint=this.GetHint();
        if((hint!='')&&((!this.HasFocus)||(nge_HintStyle(this)===ngHintHideOnInput))) {
          this.HintVisible=true;
          o.value = hint;
        }
        else o.value=text;
      }
      else o.value=text;
    }
    if(this.OnTextChanged) this.OnTextChanged(this);
    if(o) o.className = this.GetClassName('Input', hint);
  }
}

function ngem_DoFocus(e, elm)
{
  this.HasFocus=true;
  this.DoUpdateImages();
  nge_BeginMobileKeyboard();

  if(this.HintVisible) this.SetCaretPos(0);
  if((this.OnFocus)&&(this.Enabled)) this.OnFocus(this);

  if((this.Text == '')&&(nge_HintStyle(this)===ngHintHideOnFocus)) 
  {
    this.HintVisible=false;
    elm.value='';
    elm.className = this.GetClassName('Input');
  }  
}

function ngem_DoBlur(e, elm)
{
  this.HasFocus=false;
  nge_EndMobileKeyboard()
  if((this.OnBlur)&&(this.Enabled)) this.OnBlur(this);
  if((this.Text == '')&&(!this.HintVisible))
  {
    var o=document.getElementById(this.ID+'_T');
    if(o) 
    {
      var hint=this.GetHint();
      if(hint!='') {
        this.HintVisible=true; 
        o.className = this.GetClassName('Input',hint);
        o.value=hint;
      }
    }
  }
  this.DoUpdateImages();
}

function ngem_DoUpdateImages()
{  
  ngc_ChangeBox(this.ID, (this.HasFocus ? 1 : 0), this.Enabled, this.Frame);
}

function ngem_DoUpdate(o)
{
  var html=new ngStringBuilder;

  var cclass=this.BaseClassName;

  var l=0,t=0;
  var w=ng_ClientWidth(o);
  var h=ng_ClientHeight(o);

  var dp=new Object;
  ngc_ImgBox(html, this.ID, 'ngMemo', (this.HasFocus ? 1 : 0), this.Enabled, 0,0,w,h,false, this.Frame, '', { Content: 'class="'+cclass+'Back"' }, '', dp);

  var alt=this.GetAlt();
  var hint=(((!this.ControlHasFocus)||(nge_HintStyle(this)===ngHintHideOnInput)) ? this.GetHint() : '');
  
  l+=dp.Left.W; w-=(dp.Left.W + dp.Right.W);
  t+=dp.Top.H;  h-=(dp.Top.H + dp.Bottom.H);
  if(w<0) w=0;
  if(h<0) h=0;
  
  var readonly=(!this.Enabled)||(this.ReadOnly);
  // If focused, we cannot use innerHTML because the input element must not be removed from DOM   
  var to=(this.ControlHasFocus ? document.getElementById(this.ID+'_T') : null);
  if(to) // updating DOM
  {
    // remove all except the input element
    var nx,n=o.lastChild;
    while(n)
    {
      nx=n.previousSibling;
      if(n!=to) o.removeChild(n);
      n=nx;      
    }      

    // create DOM before input element
    var temp = document.createElement('div');
    ng_SetInnerHTML(temp,html.toString());     

    // insert DOM before input element
    n=temp.firstChild;
    while(n)
    {
      nx=n.nextSibling;
      o.insertBefore(n, to);
      n=nx;
    }    
    
    // update input element
    to.className=this.GetClassName('Input',hint);
    if(alt!='')  to.setAttribute("title",alt);
    else         to.removeAttribute("title"); 
    if(readonly)
    {
      to.setAttribute("readonly","readonly");
      if(ngIExplorer) this.SetFocus(false);
    }
    else to.removeAttribute("readonly");
    to.style.textAlign=this.TextAlign;
    to.style.left=l+'px';
    to.style.top=t+'px';
    to.style.width=w+'px';
    to.style.height=h+'px';
    if((this.HintVisible)&&(to.value!=hint)) 
    {
      to.value=hint;
      this.SetCaretPos(0);
    }
  }
  else
  {   
    this.HintVisible=(this.Text=='')&&(hint!='');
    html.append('<textarea ');
    if(alt!='') html.append('title="'+ng_htmlEncode(alt)+'" ');
    if(readonly) html.append('readonly="readonly" ');
    html.append('id="'+this.ID+'_T" class="'+this.GetClassName('Input',hint));
    html.append('" style="border:0px; margin:0px 0px 0px 0px; padding: 0px 0px 0px 0px; overflow: auto; text-align:'+this.TextAlign+';position: absolute; z-index:1;left:'+l+'px;top:'+t+'px;width:'+w+'px;height:'+h+'px;" ');
    html.append('onkeydown="ngem_KeyDown(event,this)" onkeyup="ngem_KeyUp(event,this)" onkeypress="ngem_KeyPress(event,this)" onchange="ngem_TextChanged(event,this)"');
    html.append(' onfocus="ngc_Focus(event,this,\'ngMemo\')" onblur="ngc_Blur(event,this,\'ngMemo\')"');
    html.append('>');
    html.append(ng_htmlEncode(this.Text == '' ? hint : this.Text));
    html.append('</textarea>');
  
    ng_SetInnerHTML(o,html.toString());
  }
  return true;
}

function ngem_DoMouseEnter(e, mi, elm)
{
  var o=document.getElementById(this.ID+'_T');
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i<0) cn=cn+'_Focus';
    o.className=cn;
  }
  ngc_EnterBox(this.ID);
  if(this.OnMouseEnter) this.OnMouseEnter(this);
}

function ngem_DoMouseLeave(e, mi)
{
  if(this.OnMouseLeave) this.OnMouseLeave(this);

  var o=document.getElementById(this.ID+'_T');
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i>=0) cn=cn.substring(0,i);
    o.className=cn; 
  }
  ngc_LeaveBox(this.ID);
}

function ngem_DoAcceptGestures(o,gestures)
{
  gestures.drag=true;
  gestures.tap=true;
}

function ngem_DoPtrStart(pi)
{
  if(pi.EventID==='control')
  {
    pi.PreventDefault=false;
  }
}

function ngem_DoPtrClick(pi)
{
  if(pi.EventID==='control')
  {
    if((this.HintVisible)&&(nge_HintStyle(this)===ngHintHideOnInput)) this.SetCaretPos(0);
  }
}

/**
 *  Class: ngMemo
 *  This class implements a generic memo control. 
 *
 *  Syntax:
 *    new *ngMemo* ([string id, string text=''])
 *    
 *  Parameters:
 *    id - parent element
 *    text - memo text 
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngMemo(id, text)
{
  ngControl(this, id, 'ngMemo');

  this.DoAcceptGestures = ngem_DoAcceptGestures;
  this.DoGesture = nge_DoGesture; 
  this.DoPtrStart = ngem_DoPtrStart;
  this.DoPtrClick = ngem_DoPtrClick;

  /*
   *  Group: Properties
   */
  /*  Variable: Text
   *  ...
   *  Type: string
   */
  this.Text = ngVal(text,'');
  /*  Variable: DefaultText
   *  ...
   *  Type: string
   */
  this.DefaultText = '';
  /*  Variable: TextAlign
   *  ...
   *  Type: string
   *  Default value: *'left'*   
   */
  this.TextAlign = 'left';
  /*  Variable: Alt
   *  ...
   *  Type: string
   */
  this.Alt = '';
  /*  Variable: Hint
   *  ...
   *  Type: string
   */
  this.Hint = '';
  /*  Variable: HintStyle
   *  ...
   *  Type: integer
   */
  //this.HintStyle = undefined;  
  /*  Variable: ReadOnly
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.ReadOnly = false;
  /*  Variable: Frame
   *  ...
   *  Type: object
   */
  this.Frame = new Object;

  /*  Variable: HasFocus
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.HasFocus=false;

  /*  Variable: SelectOnFocus
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.SelectOnFocus=true;
  
  /*
   *  Group: Methods
   */
  /*  Function: SetText
   *  Sets memo text.   
   *   
   *  Syntax:
   *    void *SetText* (string text)
   *     
   *  Returns:
   *    -     
   */
  this.SetText = ngem_SetText;
  /*  Function: GetText
   *  Gets memo text.   
   *   
   *  Syntax:
   *    string *GetText* ()
   *     
   *  Returns:
   *    Memo text.     
   */
  this.GetText = ngc_GetText;
  /*  Function: GetAlt
   *  Gets alt text.   
   *   
   *  Syntax:
   *    string *GetAlt* (void)
   *     
   *  Returns:
   *    Alt text.     
   */
  this.GetAlt=ngc_GetAlt;
  /*  Function: GetHint
   *  Gets hint text.   
   *   
   *  Syntax:
   *    string *GetHint* (void)
   *     
   *  Returns:
   *    Hint text.     
   */
  this.GetHint=ngc_GetHint;
  
  /*  Function: SetReadOnly
   *  Sets readonly state of control.   
   *   
   *  Syntax:
   *    void *SetReadOnly* ([bool ro=true])
   *     
   *  Parameters:
   *    ro - readonly state
   *             
   *  Returns:
   *    -     
   */
  this.SetReadOnly=nge_SetReadOnly;

  /*  Function: GetCaretPos
   *  Gets caret position.   
   *   
   *  Syntax:
   *    int *GetCaretPos* ()
   *     
   *  Returns:
   *    Caret position or undefined if edit is not focused.     
   */
  this.GetCaretPos = nge_GetCaretPos;
    
  /*  Function: SetCaretPos
   *  Sets caret position.   
   *   
   *  Syntax:
   *    void *SetCaretPos* (int pos)
   *     
   *  Parameters:
   *    ro - caret position
   *       
   *  Returns:
   *    -     
   */
  this.SetCaretPos = nge_SetCaretPos;

  this.GetClassName = nge_GetClassName;
  this.DoMouseEnter = ngem_DoMouseEnter;
  this.DoMouseLeave = ngem_DoMouseLeave;
  this.DoSetEnabled = nge_DoSetEnabled;
  this.DoFocus = ngem_DoFocus;
  this.DoBlur = ngem_DoBlur;

  this.DoUpdateImages = ngem_DoUpdateImages;
  this.DoUpdate = ngem_DoUpdate;
  this.SetFocus = nge_SetFocus;
  
  /*
   *  Group: Events
   */
  /*
   *  Event: OnSetText
   */     
  this.OnSetText = null;
  /*
   *  Event: OnGetText
   */     
  this.OnGetText = null;
  
  /*
   *  Event: OnTextChanged
   */     
  this.OnTextChanged = null;
  /*
   *  Event: OnGetAlt
   */     
  this.OnGetAlt = null;
  /*
   *  Event: OnGetHint
   */     
  this.OnGetHint = null;
  /*
   *  Event: OnGetClassName
   */     
  this.OnGetClassName = null;
  
  /*
   *  Event: OnKeyDown
   */     
  this.OnKeyDown = null;
  /*
   *  Event: OnKeyUp
   */     
  this.OnKeyUp = null;
  /*
   *  Event: OnKeyPress
   */     
  this.OnKeyPress = null;
  
  /*
   *  Event: OnMouseEnter
   */     
  this.OnMouseEnter = null;
  /*
   *  Event: OnMouseLeave
   */     
  this.OnMouseLeave = null;
  
  /*
   *  Event: OnFocus
   */     
  this.OnFocus = null;
  /*
   *  Event: OnBlur
   */     
  this.OnBlur = null;

  ngControlCreated(this);
}

// --- ngPages -----------------------------------------------------------------

var ngpg_CurrentPageId='';

function ngpg_DoPtrClick(pi)
{
  var eid=pi.EventID;
  if(eid.substr(0,4)!=='page') return;
  var pg=eid.substring(4,eid.length);
  var e=pi.Event;
  e.Owner=this;
  e.pages=this;
  e.page=pg;
  if((this.OnClick)&&(!ngVal(this.OnClick(e),false))) return;
  if(pg!='') this.SetPage(parseInt(pg));
}

function ngpg_DoPtrDblClick(pi)
{
  var eid=pi.EventID;
  if(eid.substr(0,4)!=='page') return;
  var pg=eid.substring(4,eid.length);
  var e=pi.Event;
  e.Owner=this;
  e.pages=this;
  e.page=pg;
  if((this.OnDblClick)&&(!ngVal(this.OnDblClick(e),false))) return;
}

function ngpg_DoPtrStart(pi)
{
  if(pi.Touch)
  {    
    var eid=pi.EventID;
    if(eid.substr(0,4)==='page') 
    {
      ngpg_EnterPg(pi.Event,pi.SrcElement);
    }
  }
}

function ngpg_DoPtrDrag(pi)
{
  if(pi.Touch)
  { 
    var eid=pi.EventID;
    if(eid.substr(0,4)==='page') 
    {
      if(!pi.IsInSrcElement()) 
      {      
        if(ngpg_CurrentPageId==pi.SrcElement.id)
          ngpg_LeavePg(pi.Event,pi.SrcElement);
      }
      else
      {
        if(ngpg_CurrentPageId!=pi.SrcElement.id)
          ngpg_EnterPg(pi.Event,pi.SrcElement);
      }
    }
  }
  return false;
}

function ngpg_DoPtrEnd(pi)
{
  if(pi.Touch) 
  {
    var eid=pi.EventID;
    if(eid.substr(0,4)==='page') 
    {
      if(pi.IsInSrcElement()) 
      {      
        if(ngpg_CurrentPageId==pi.SrcElement.id)
          ngpg_LeavePg(pi.Event,pi.SrcElement);
      }
    }
  }
}

function ngpg_EnterPg(e,elm)
{
  if(!e) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  var cn=elm.className;
  if(ngpg_CurrentPageId!='') 
  {
    var o=document.getElementById(ngpg_CurrentPageId);
    ngpg_LeavePg(e,o);
  }
  ngpg_CurrentPageId=elm.id;
  var i=cn.indexOf('_Focus');
  if(i<0) cn=cn+'_Focus';
  elm.className=cn; 
  ngc_EnterImg(elm.id+'_IL');
  ngc_EnterImgS(elm.id+'_IM');
  ngc_EnterImg(elm.id+'_IR');
}

function ngpg_LeavePg(e,elm)
{
  if(!e) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  var cn=elm.className;
  if(ngpg_CurrentPageId==elm.id) ngpg_CurrentPageId='';
  var i=cn.indexOf('_Focus');
  if(i>=0) cn=cn.substring(0,i);
  elm.className=cn; 
  ngc_LeaveImg(elm.id+'_IL');
  ngc_LeaveImgS(elm.id+'_IM');
  ngc_LeaveImg(elm.id+'_IR');
}

function ngpg_ChangePageState(p, s)
{
  var pid=this.ID+'_'+p;  
  var o=document.getElementById(pid);
  if(o)
  {            
    var co=this.Elm();
    if(!co) return;
    var cclass=this.BaseClassName;

    var cn='';
    var pimage=(this.PageImages.length ? this.PageImages[p % this.PageImages.length] : new Object);
    
    var enabled=((this.Enabled)&&(this.Pages[p])&&(ngVal(this.Pages[p].Enabled,true)));
    if(!enabled) cn='PageDisabled';
    else cn=(s ? 'PageSelected' : 'Page');
    
    var i=o.className.indexOf('_Focus');
    if(i>=0) cn+='_Focus'; 
    o.className=cclass + cn;
    if(pimage.LeftImg) ngc_ChangeImage(ngpg_ImgDrawProps(pid+'_IL', s, enabled, pimage.LeftImg));        
    if(pimage.MiddleImg) ngc_ChangeImageS(ngpg_ImgDrawProps(pid+'_IM', s, enabled, pimage.MiddleImg));        
    if(pimage.RightImg) ngc_ChangeImage(ngpg_ImgDrawProps(pid+'_IR', s, enabled, pimage.RightImg));
  }        
}

function ngpg_GetPageByText(txt)
{
  if(ngVal(txt,'')=='') return -1;
  var pg,text;
  for(i=0;i<this.Pages.length;i++)
  {
    pg=this.Pages[i];

    if(this.OnGetText) text=ngVal(this.OnGetText(this, i),'');
    else text=ngVal((pg ? pg.Text : ''),'');

    if(text == txt) return i;
  }
  return -1;
}

function ngpg_GetPageById(id)
{
  if(ngVal(id,'')=='') return -1;
  var pg;
  for(i=0;i<this.Pages.length;i++)
  {
    pg=this.Pages[i];
    if(!pg) continue;
    if(pg.id == id) return i;
  }
  return -1;
}

function ngpg_GetIdByPage(page)
{
  if (ngVal(page, -1)<0) return '';

  if (typeof(this.Pages[page])=='undefined') return '';
  if (typeof(this.Pages[page].id)=='undefined') return '';

  return this.Pages[page].id;
}

function ngpg_GetPageObjById(id)
{
  var idx=this.GetPageById(id);
  if(idx<0) return null;
  return this.Pages[idx];
}

function ngpg_GetPageByControl(ctrl)
{
  var i,p=ctrl.ParentControl;
  while(p)
  {
    for(i=0;i<this.Pages.length;i++)
      if(p==this.Pages[i].ControlsPanel) return i;
    p=p.ParentControl;
  }  
  return -1;
}

function ngpg_GetPageObjByControl(ctrl)
{
  var idx=this.GetPageByControl(ctrl);
  if(idx<0) return null;
  return this.Pages[idx];
}

function ngpg_SetPageByControl(ctrl)
{
  var idx=this.GetPageByControl(ctrl);
  if(idx<0) return false;
  this.SetPage(idx);
  return (this.Page==idx);
}

function ngpg_SetPage(p)
{
  if(typeof p === 'string')  
  {
    var s=p;
    p=this.GetPageById(s);
    if(p<0) p=this.GetPageByText(s);
    if(p<0) p=s;
  }
  p=parseInt(p);
  if((p<0)||(p>=this.Pages.length)||(isNaN(p))) return;
  if(p!=this.Page)
  {
    if((this.OnPageChanging)&&(!ngVal(this.OnPageChanging(this,p),false))) return;

    var op=this.Page;
    this.Page=p;
    
    var pg=this.Pages[op];
    if((typeof pg!=='undefined')&&(pg.ControlsPanel))
      pg.ControlsPanel.SetVisible(false); 

    if(this.PagesVisible)
    {
      if(this.row1pages[p])
      {
        this.ChangePageState(p,1);
        this.ChangePageState(op,0);
      }
      else this.Update();
    }

    pg=this.Pages[p];
    if((typeof pg!=='undefined')&&(pg.ControlsPanel))
      pg.ControlsPanel.SetVisible(true); 
    
    if(this.OnPageChanged) this.OnPageChanged(this,op);
  }
}

function ngpg_ImgDrawProps(id, s, enabled,o)
{
  var v=ngc_ImgProps(id,s,enabled,o);
  if(ngpg_CurrentPageId==id.substring(0,id.length-3)) { v.aL=v.oL; v.aT=v.oT; }
  else { v.aL=v.L; v.aT=v.T; }
  return v;
}

function ngpg_DoRelease(o)
{
  o.style.display='none';
  this.row1pages = new Array();
} 

function ngpg_DoUpdate(o)
{
  var frame=document.getElementById(this.ID+'_F');
  if(!frame) return true;
  
  var cclass=this.BaseClassName;

  var html=new ngStringBuilder;
  var w=ng_ClientWidth(o);
  var h=ng_ClientHeight(o);

  this.row1pages = new Array();
  if(this.PagesVisible)
  {
    var i,j,dp,pid,image,pimage,x,y, tx, txtclass, tw, rh=0, th,tl,mw, s, text, alt;
  
    var swapy = (this.PagesVAlign == 'bottom');
    var swapx = (this.PagesAlign == 'right');
  
    var pw=w-this.PagesIndent;
    if((this.PagesSize>0)&&(pw>this.PagesSize)) pw=this.PagesSize;
    if(this.PagesSize<0) pw+=this.PagesSize;
    if(swapx)
    {
      if(swapy) image=this.Frame.LeftBottom;
      else image=this.Frame.LeftTop;
    }
    else
    {
      if(swapy) image=this.Frame.RightBottom;
      else image=this.Frame.RightTop;
    }
    if(typeof image !== 'undefined') pw-=image.W;
  
  
    var tab,pg,enabled;
    var row = new Object;
    row.Tabs = new Array();
    var rows = new Array();
    rows[0]=row;
    var selrow = 0;
    
    y=0; x=0;
    for(i=0,j=0;i<this.Pages.length;i++)
    {
      pg=this.Pages[i];
      if((pg)&&(!ngVal(pg.Visible,true))) continue;
      s=(i==this.Page ? 1 : 0);

      if(this.OnGetText) text=ngVal(this.OnGetText(this, i),'');
      else text=ngVal((pg ? pg.Text : ''),'');
      if(this.HTMLEncode) text=ng_htmlEncode(text);

      if(this.OnGetAlt) alt=ngVal(this.OnGetAlt(this, i),'');
      else alt=ngVal((pg ? pg.Alt : ''),'');
                         
      enabled=(this.Enabled)&&(ngVal(pg.Enabled,true)); 
      if(enabled) 
      {
        if(s) txtclass='PageSelected';
        else  txtclass='Page';
      }
      else txtclass='PageDisabled';
      txtclass=cclass+txtclass;
      
      pid=this.ID+'_'+i;
      pimage=(this.PageImages.length ? this.PageImages[j] : new Object);
  
      tab = new Object;
      tab.Enabled = enabled;
      tab.Page = i;
      tab.Text = text;
      tab.Alt = alt;
      tab.id=pid;
      tab.txtclass=txtclass;
  
      th=0;
      tw=0;
      tx=0;
      mw=0;
  
      image=pimage.LeftImg;
      if(image)
      {
        dp=ngpg_ImgDrawProps(pid+'_IL', s, enabled, image);
        dp.Attrs=image.Attrs;
        mw+=dp.W;
        tab.LeftImg = dp;
      } else tab.LeftImg = null;
      image=pimage.MiddleImg;
      if(image)
      {
        dp=ngpg_ImgDrawProps(pid+'_IM', s, enabled, image);
        dp.Attrs=image.Attrs;
        tab.MiddleImg = dp;
      } else tab.MiddleImg = null;
      image=pimage.RightImg;
      if(image)
      {
        dp=ngpg_ImgDrawProps(pid+'_IR', s, enabled, image);
        dp.Attrs=image.Attrs;
        mw+=dp.W;
        tab.RightImg = dp;      
      } else tab.RightImg = null;
      image=pimage.Separator;
      if(image)
      {
        dp=ngpg_ImgDrawProps(pid+'_IS', s, this.Enabled, image);
        dp.Attrs=image.Attrs;
        tab.Separator = dp;
      }
      else tab.Separator = null;

      // Measure text
      if(text!='')
      {
        ng_SetInnerHTML(frame,'<div id="'+this.ID+'_T" class="'+txtclass+'" style="position:absolute; visibility: hidden; white-space: nowrap;"><div class="'+cclass+'PageText">'+text+'</div></div>');
        var o2=document.getElementById(this.ID+'_T');
        if(o2) 
        {       
          if(typeof pg.W!=='undefined') tw=pg.W-mw;
          else
          {             
            tw=ng_ClientWidth(o2);
            if((typeof pg.MinWidth!=='undefined')&&(tw+mw<pg.MinWidth)) tw=pg.MinWidth-mw;
          }            
          th=ng_ClientHeight(o2);
        }
      }
  
      dp = tab.LeftImg;
      if(dp)
      {
        tx+=dp.W;
        if(dp.H>th) th=dp.H;
      }
      tl=tx;
      dp = tab.MiddleImg;
      if((dp)&&(dp.H>th)) th=dp.H;
      tx+=tw;
      dp = tab.RightImg;
      if(dp)
      {
        if(dp.H>th) th=dp.H;
        tx+=dp.W;
      }
  
      dp=tab.Separator;
      if((dp)&&(dp.H>th)) th=dp.H;
  
      tab.w=tx; 
      tab.tw=tw;
      tab.th=th;
      
      if((x+tx>pw)&&(row.Tabs.length>0))
      { 
        dp=row.Tabs[row.Tabs.length-1];
        if(dp.Separator) { x-=dp.Separator.W; dp.w-=dp.Separator.W; }
        dp.Separator=null;

        row.h=rh;
        row.w=x;
        row=new Object;
        row.Tabs = new Array();
        rows[rows.length]=row;
        if((this.MaxRows>0)&&(rows.length>this.MaxRows)) break;
        y=y+rh; // changed from y+=rh - IE9 strange bug
        x=0; rh=0; 
      }
      if(image) { tx+=image.W;  tab.w=tx; }
      if(th>rh) rh=th;
      row.Tabs[row.Tabs.length] = tab;
      if(s) selrow=rows.length-1;
      
      x+=tx;
      j++; if(j>=this.PageImages.length) j=0;
    }
    if(row.Tabs.length>0)
    {
      dp=row.Tabs[row.Tabs.length-1];
      if(dp.Separator) { x-=dp.Separator.W; dp.w-=dp.Separator.W; }    
      dp.Separator=null;
      
      row.h=rh;
      row.w=x;
    } else rows.length=rows.length-1;
    y-=(this.RowOverlap * (rows.length-1));
    var ch=y+rh;                      
    for(i=0;i<this.Pages.length;i++)
    {
      pg=this.Pages[i];
      if((pg)&&(pg.ControlsPanel))
      { 
        if(swapy) 
        {
          if(pg.ControlsPanel.Bounds.B != ch) 
          {
            pg.ControlsPanel.Bounds.B = ch;
            pg.ControlsPanel.SetBounds();
          }
        }
        else 
        {
          if(pg.ControlsPanel.Bounds.T != ch)
          {
            pg.ControlsPanel.Bounds.T = ch;
            pg.ControlsPanel.SetBounds();
          }
        }    
      }
    }

    if(swapy) { ngc_ImgBox(html, this.ID, 'ngPages', 0, this.Enabled, 0,0,w,h-y,false, this.Frame); y=h; }
    else      { ngc_ImgBox(html, this.ID, 'ngPages', 0, this.Enabled, 0,y,w,h-y,false, this.Frame); y=0; }
            
    dp=new Array(rows.length);
    for(j=selrow,i=0;i<rows.length;i++)
    {
      dp[rows.length-i-1]=rows[j++];
      if(j>=rows.length) j=0;
    }
    rows=dp;
    
    // Draw tabs
    for(i=0;i<rows.length;i++)
    {
      row=rows[i];
      if((!swapy)||(i>0)) row.h-=this.RowOverlap;
      if((rows.length>1)&&(row.Tabs.length>0))
      {    
        tw=Math.floor((pw-row.w)/row.Tabs.length);
        tx=0;
        x=0;      
        for(j=0;j<row.Tabs.length;j++)
        {
          tab=row.Tabs[j];
          tab.tw+=tw;
          tab.w+=tw;
          if(tab.LeftImg) tx+=tab.LeftImg.W;
          tx+=tab.tw;
          if(tab.RightImg) tx+=tab.RightImg.W;
          if(tab.Separator) tx+=tab.Separator.W;
        } 
        tx=pw-tx;   
        if(tx>0)
        {
          x=Math.floor(row.Tabs.length/(tx));
          if(x<=0) x=1;
          for(j=0;(j<row.Tabs.length)&&(tx>0);j++)
          {
            tab=row.Tabs[j];
            if(!(j%x)) { tab.tw++; tab.w++; tx--; }
          }
         }  
      }
      if(swapy) y-=row.h;
      x=this.PagesIndent;
      for(j=0;j<row.Tabs.length;j++)
      {
        tab=row.Tabs[j];
        if(i==rows.length-1) this.row1pages[tab.Page]=true;
        tx=0;
        html.append('<div style="position:absolute; left:'+(swapx ? w-x-tab.w : x)+'px; top:'+y+'px;">');
  
        if(swapx)
        {
          image=tab.Separator;
          if(image) { ngc_Img(html,image,"position:absolute; left: "+tx+"px;",ngVal(image.Attrs,''));  tx+=image.W; }
        }
        html.append('<div id="'+tab.id+'" class="'+tab.txtclass+'" ');
        if(tab.Alt!='') html.append('title="'+tab.Alt+'" ');
        if(tab.Enabled) 
        {
          if(typeof this.Cursor !== 'undefined')
          {
            if(this.Cursor!='') html.append('style="cursor:'+this.Cursor+';" ');
          }
          else html.append('style="cursor:pointer;" ');
          html.append(ngc_PtrEventsHTML(this,'page'+tab.Page,'tap drag'+(this.OnDblClick ? ' doubletap' : ''))+' ');
        }
        else html.append('style="cursor:default;" ');
        html.append('onmouseover="ngpg_EnterPg(event,this);" onmouseout="ngpg_LeavePg(event,this);">');
        image=tab.LeftImg;
        if(image) { ngc_Img(html,image,"position:absolute; left: "+tx+"px;",ngVal(image.Attrs,'')); tx+=image.W; tl=tx; }
        else tl=0;
        image=tab.MiddleImg;
        if(image) { ngc_ImgSW(html,image,tx,tab.tw,"",ngVal(image.Attrs,'')); tx+=tab.tw; }
        image=tab.RightImg;
        if(image) { ngc_Img(html,image,"position:absolute; left: "+tx+"px;",ngVal(image.Attrs,''));  tx+=image.W; }
        html.append('<div id="'+tab.id+'_T" style="position:absolute; left:'+tl+'px; overflow: hidden; top:0px; width:'+tab.tw+'px; text-align: '+this.TextAlign+'; white-space: nowrap;'+(tab.th>0 ? 'line-height:'+tab.th+'px;' : '')+'"><div class="'+cclass+'PageText">'+tab.Text+'</div></div>');
        html.append('</div>');
        
        if(!swapx)
        {
          image=tab.Separator;
          if(image) { ngc_Img(html,image,"position:absolute; left: "+tx+"px;",ngVal(image.Attrs,''));  tx+=image.W; }
        }
        html.append('</div>');
        x+=tx;
      }
      if(!swapy) y+=row.h;
    }
  } else ngc_ImgBox(html, this.ID, 'ngPages', 0, this.Enabled, 0,0,w,h, false, this.Frame); 
   
  ng_SetInnerHTML(frame,html.toString());
  return true;
}

function ngpg_DoCreate(d, ref, elm, parent)
{
  if((typeof d.Pages !== 'undefined')&&(typeof this.Pages === 'object'))
  {
    var pg,p,pgclass=this.BaseClassName+'ControlsPanels';
    for(var i in d.Pages)
    {
      p=d.Pages[i];
      pg = new Object;
      var cntrls=p.Controls;
      delete p.Controls;
      ng_MergeDef(pg,p);
      p.Controls=cntrls;

      this.Pages[i]=pg;

      var ldefs=new Object;
      ldefs.ControlsPanel = new Object;
      ng_MergeDef(ldefs.ControlsPanel, p.ControlsPanel);
      ng_MergeDef(ldefs.ControlsPanel, d.ControlsPanel);
        
      ng_MergeDef(ldefs.ControlsPanel, {
        Type: 'ngPanel',
        className: pgclass,
        id: this.ID+'_P'+i,
        ScrollBars: ssAuto,
        L:0,T:0,R:0,B:0,
        Data: {
          Visible: false
        }
      });
      ldefs.ControlsPanel.Controls=p.Controls;
      ldefs.ControlsPanel.ModifyControls=p.ModifyControls;
      if(i==this.Page) ldefs.ControlsPanel.Data.Visible=true;
      
      var lref=ngCreateControls(ldefs,undefined,this.ID);
      if(!ngVal(d.ParentReferences,true)) 
      {
        (function (pg,pgid,pages) {
          pg.Controls = new Object;
          pg.Controls.Owner = pages;
          pg.Controls.AddControls = function(defs, newparent) { ngCreateControls(defs,pg,ngVal(newparent,pgid)); }
        })(pg,ldefs.ControlsPanel.id,this);
        ref=pg.Controls;
      }
      pg.ControlsPanel=lref.ControlsPanel;
      pg.ControlsPanel.Owner=this;
      delete lref.ControlsPanel;
      ngCloneRefs(ref,lref);
    }
  }
  var nd=document.createElement('div');
  nd.id=this.ID+'_F';
  nd.style.position="absolute";
  nd.style.zIndex="800";
  elm.appendChild(nd);

//  ng_AppendInnerHTML(elm,'<div id="'+this.ID+'_F" style="position: absolute;z-index:800;"></div>');
}

/**
 *  Class: ngPages
 *  This class implements a generic page control. 
 *
 *  Syntax:
 *    new *ngPages* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngPages(id)
{
  ngControl(this, id, 'ngPages');
  this.DoCreate = ngpg_DoCreate;
  /*
   *  Group: Definition
   */
  /*
   *  Variable: Pages
   *  ...
   *  Type: array
   */
  /*<>*/
  /*
   *  Variable: ControlsPanel
   *  Controls panel definition.
   *  Type: object
   */
  /*<>*/

  /*
   *  Group: Properties
   */
  /*  Variable: Page
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.Page = 0;
  /*  Variable: PagesVisible
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.PagesVisible = true;
  /*  Variable: PagesIndent
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.PagesIndent = 0;  
  /*  Variable: PagesSize
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.PagesSize = 0;  
  /*  Variable: MaxRows
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MaxRows = 0;  
  /*  Variable: PagesAlign
   *  ...
   *  Type: string
   *  Default value: *'left'*   
   */
  this.PagesAlign = 'left';
  /*  Variable: PagesVAlign
   *  ...
   *  Type: string
   *  Default value: *'top'*   
   */
  this.PagesVAlign = 'top';
  /*  Variable: TextAlign
   *  ...
   *  Type: string
   *  Default value: *'center'*   
   */
  this.TextAlign = 'center';
  /*  Variable: HTMLEncode
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.HTMLEncode = false;

  /*  Variable: Pages
   *  ...
   *  Type: array
   */
  this.Pages = new Array();
    
  /*  Variable: RowOverlap
   *  ...
   *  Type: int
   *  Default value: *0*   
   */    
  this.RowOverlap = 0;
  /*  Variable: PageImages
   *  ...
   *  Type: array
   */
  this.PageImages = new Array();
  /*  Variable: Frame
   *  ...
   *  Type: object
   */
  this.Frame = new Object;

  /*
   *  Group: Methods
   */
  /*  Function: SetPage
   *  Sets current page index.   
   *   
   *  Syntax:
   *    void *SetPage* (mixed page)
   *     
   *  Returns:
   *    -     
   */
  this.SetPage = ngpg_SetPage;
  
  /*  Function: GetPageById
   *  Gets page index by page id.   
   *   
   *  Syntax:
   *    int *GetPageById* (string id)
   *     
   *  Returns:
   *    Page index or -1 if not found.
   */
  this.GetPageById = ngpg_GetPageById;
  
  /*  Function: GetIdByPage
   *  Gets page id by page index.
   *
   *  Syntax:
   *    string *GetIdByPage* (int page)
   *
   *  Returns:
   *    Page id or empty string if not found.
   */
  this.GetIdByPage = ngpg_GetIdByPage;
  
  /*  Function: GetPageObjById
   *  Gets page object by page id.   
   *   
   *  Syntax:
   *    object *GetPageObjById* (string id)
   *     
   *  Returns:
   *    Page object or null if not found.
   */
  this.GetPageObjById = ngpg_GetPageObjById;
  
  /*  Function: GetPageByText
   *  Gets page index by page text caption.   
   *   
   *  Syntax:
   *    int *GetPageByText* (string text)
   *     
   *  Returns:
   *    Page index or -1 if not found.
   */
  this.GetPageByText = ngpg_GetPageByText;
  
  /*  Function: GetPageByControl
   *  Gets page index by control placed on page.   
   *   
   *  Syntax:
   *    int *GetPageByControl* (object control)
   *     
   *  Returns:
   *    Page index or -1 if not found.
   */
  this.GetPageByControl = ngpg_GetPageByControl;

  /*  Function: GetPageObjByControl
   *  Gets page object by control placed on page.   
   *   
   *  Syntax:
   *    int *GetPageObjByControl* (object control)
   *     
   *  Returns:
   *    Page object or null if not found.
   */
  this.GetPageObjByControl = ngpg_GetPageObjByControl;

  /*  Function: SetPageByControl
   *  Sets page by control placed on page.   
   *   
   *  Syntax:
   *    bool *SetPageByControl* (object control)
   *     
   *  Returns:
   *    TRUE if page was successfuly set.
   */
  this.SetPageByControl = ngpg_SetPageByControl;

  this.row1pages = new Array();
  this.ChangePageState = ngpg_ChangePageState;
  this.DoRelease = ngpg_DoRelease;
  this.DoPtrStart = ngpg_DoPtrStart;
  this.DoPtrDrag = ngpg_DoPtrDrag;
  this.DoPtrEnd = ngpg_DoPtrEnd;
  this.DoUpdate = ngpg_DoUpdate;
  this.DoPtrClick = ngpg_DoPtrClick;
  this.DoPtrDblClick = ngpg_DoPtrDblClick;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnPageChanging
   */     
  this.OnPageChanging = null;
  /*
   *  Event: OnPageChanged
   */     
  this.OnPageChanged = null;
  
  /*
   *  Event: OnGetText
   */     
  this.OnGetText = null;
  /*
   *  Event: OnGetAlt
   */     
  this.OnGetAlt = null;
  
  /*
   *  Event: OnClick
   */     
  this.OnClick = null;
  /*
   *  Event: OnDblClick
   */     
  this.OnDblClick = null;

  ngControlCreated(this);
}

// --- ngToolBar ---------------------------------------------------------------

function ngtb_DoCreate(d, ref, elm, parent)
{
  if(typeof d.Data==='undefined') d.Data=new Object;
  var vertical=ngVal(d.Data.Vertical,this.Vertical);
  if(vertical)
  {
    if((typeof d.W === 'undefined')&&((typeof d.L === 'undefined')||(typeof d.R === 'undefined'))&&(typeof d.Data.AutoSize === 'undefined'))
      this.AutoSize=true;
  }
  else
  {
    if((typeof d.H === 'undefined')&&((typeof d.T === 'undefined')||(typeof d.B === 'undefined'))&&(typeof d.Data.AutoSize === 'undefined'))
      this.AutoSize=true;
  }
}

function ngtb_DoRelease(o)
{
  o.style.display='none';
}

function ngtbc_OnSetVisible(c,v)
{
  if((!ngVal(c.ToolBarAutoUpdate,true))||(ngVal(c.ToolBarIgnore,false))||(!c.ParentControl)) return true;
  
  if(c.ID!='')
  {
    var o = c.Elm();
    if(o)
    {
      if(c.DoSetVisible) c.DoSetVisible(o, v);
      else 
      { 
        o.style.display=(v ? 'block' : 'none'); 
        o.style.visibility=(v ? 'visible' : 'hidden'); // IE7 sometimes don't hide elements if display is none 
      }
      // IE7 redraw fix
      var fix7=document.body.offsetLeft;
    }
  }
  if(c.Visible!=v)
  {
    c.Visible=v;
    c.ParentControl.Update();
    if(c.OnVisibleChanged) c.OnVisibleChanged(c);
  }
  return false;
}

function ngtbc_DoUpdate(o)
{
  var parent=this.ParentControl;
  if((ngVal(this.ToolBarAutoUpdate,true))&&(parent)&&(!parent.tb_update)&&(!ngVal(this.ToolBarIgnore,false)))
  {
    var changed=false;
    if(this.tb_indent!=this.ToolBarIndent) changed=true;
    else
    {
      var cw,ch;
      var vpadding=ngVal(this.ToolBarVPadding,parent.VPadding);
      var hpadding=ngVal(this.ToolBarHPadding,parent.HPadding);

      if((typeof this.ToolBarWidth!=='undefined')||(typeof this.ToolBarHeight!=='undefined'))
      {
        if(typeof this.ToolBarWidth!=='undefined') cw=this.ToolBarWidth;
        else cw=ng_OuterWidth(o);
        if(typeof this.ToolBarHeight!=='undefined') ch=this.ToolBarHeight;
        else ch=ng_OuterHeight(o);
      }
      else
      {
        ng_BeginMeasureElement(o);
        cw=ng_OuterWidth(o);
        ch=ng_OuterHeight(o);
        ng_EndMeasureElement(o);
      }

      if(parent.Vertical) ch+=ngVal(this.ToolBarIndent,0);
      else                cw+=ngVal(this.ToolBarIndent,0);
      if((this.tb_height!=ch+vpadding)||(this.tb_width!=cw+hpadding)) changed=true;
    }
    if(changed)
    {    
      this.ParentControl.Update();
      return true;
    }  
  }

  if(typeof this.ngc_DoUpdate==='function') 
    return this.ngc_DoUpdate(o);

  return true;
}

function ngtb_RegisterControl(c)
{
  if((typeof c!=='object')||(!c)||(c.tb_fncregistered)) return;
  
  if(c.DoUpdate!=ngtbc_DoUpdate)
  {
    c.ngc_DoUpdate=c.DoUpdate;
    c.DoUpdate=ngtbc_DoUpdate;
    c.AddEvent(ngtbc_OnSetVisible,'OnSetVisible');
  }
  c.tb_fncregistered=true;
}

function ngtb_UnreegisterControl(c)
{
  if((typeof c!=='object')||(!c)) return;
  
  if(c.DoUpdate==ngtbc_DoUpdate)
  {
    if(typeof c.ngc_DoUpdate === 'function') 
    {
      c.DoUpdate=c.ngc_DoUpdate;
      delete c.ngc_DoUpdate;
    } 
    c.RemoveEvent(ngtbc_OnSetVisible,'OnSetVisible');
  }
  if(typeof c.tb_fncregistered!=='undefined')
    c.tb_fncregistered=false;
}

function ngtb_Update(recursive)
{
  if(!this.Visible) return;
  var p=this.ParentControl;
  while(p)
  {
    if(!p.Visible) return;
    p=p.ParentControl;
  }

  if(this.tb_update) return;
  this.tb_update=true;

  recursive=ngVal(recursive,true);
  
  var onupdated=this.OnUpdated;
  this.OnUpdated=null;
  try
  {
    this.ngc_Update(recursive);
  
    this.tb_update=false;
  
    var to=this.Elm();
    if(!to) return;  
  
    var cc=this.ChildControls;
    if(typeof cc === 'undefined') return;
  
    to.style.display = (this.Visible ? 'block' : 'none');
  
    if((this.AutoSize)&&(ngIExplorer)) // IE7 Measure fix
    {
      if(this.Vertical) 
      {
        if(ng_GetStylePx(to.style.width)==0) to.style.width='1px';
      }
      else 
      {
        if(ng_GetStylePx(to.style.height)==0) to.style.height='1px';
      }
    }
  
    var w=ng_ClientWidth(to);
    var h=ng_ClientHeight(to);
  
    var o,c,cw,ch,x=0,y=0,mw=0,mh=0,sw=0,sh=0,wrap,ix,iy;
    var vpadding,hpadding,lastnowrap=-1;
    
    this.tb_update=true;
    for(var i=0;i<cc.length;i++) 
    {
      c=cc[i];
      if(ngVal(c.ToolBarIgnore,false)) continue;
      if(!c.tb_fncregistered) ngtb_RegisterControl(c);
      if(!c.Visible) continue;    
      if(!recursive) c.Update(false);
      o=c.Elm();
      if(!o) continue;
      hpadding=ngVal(c.ToolBarHPadding,this.HPadding);
      vpadding=ngVal(c.ToolBarVPadding,this.VPadding);
      if((this.Vertical)&&(!y)) hpadding=0;
      if((!this.Vertical)&&(!x)) vpadding=0;
      if((typeof c.ToolBarWidth!=='undefined')||(typeof c.ToolBarHeight!=='undefined'))
      {
        if(typeof c.ToolBarWidth!=='undefined') cw=c.ToolBarWidth;
        else cw=ng_OuterWidth(o);
        if(typeof c.ToolBarHeight!=='undefined') ch=c.ToolBarHeight;
        else ch=ng_OuterHeight(o);
      }
      else
      {
        ng_BeginMeasureElement(o);
        cw=ng_OuterWidth(o);
        ch=ng_OuterHeight(o);
        ng_EndMeasureElement(o);
      }
  
      wrap=false;
      if(this.Vertical)
      {
        ix=ngVal(c.ToolBarIndent,0); iy=0;
        cw+=ix;
        
        if(((this.Wrapable)&&(y+ch>h))||(ngVal(c.ToolBarBreak,false))) { x+=mw+hpadding; y=0; mw=0; wrap=true; }
        if(cw>mw) mw=cw;
      }
      else
      {
        iy=ngVal(c.ToolBarIndent,0); ix=0;
        ch+=iy;
              
        if(((this.Wrapable)&&(x+cw>w))||(ngVal(c.ToolBarBreak,false))) { y+=mh+vpadding; x=0; mh=0; wrap=true; }
        if(ch>mh) mh=ch;
      }
      if((wrap)&&(ngVal(c.ToolBarNoWrap,false)))
      {
        var oldi=i--;
        for(;i>=0;i--)
        {
          c=cc[i];
          if((ngVal(c.ToolBarIgnore,false))||(!c.Visible)||(ngVal(c.ToolBarNoWrap,false))) continue;
          break;
        }
        if((i>0)&&(i!=lastnowrap)) { lastnowrap=i; continue; }
        i=oldi;
        c=cc[i];
      }
  
      if(this.HAlign == 'right') c.Bounds.R = x+ix;
      else c.Bounds.L = x+ix;
      if(this.VAlign == 'bottom') c.Bounds.B = y+iy;
      else c.Bounds.T = y+iy;
      c.SetBounds();
  
      if(x+cw>sw) sw=x+cw;
      if(y+ch>sh) sh=y+ch;  
  
      c.tb_indent=c.ToolBarIndent;
      c.tb_width=cw+hpadding;
      c.tb_height=ch+vpadding;
      if(this.Vertical) y+=ch+vpadding;
      else x+=cw+hpadding;
    }
    if(this.AutoSize)
    {
      var changed=false; 
      if(this.Vertical) 
      {
        ng_SetClientWidth(to,sw);
        var cbw=ng_StyleWidth(to);
        if(this.Bounds.W!=cbw)
        {
          changed=true;
          this.Bounds.W=cbw;
          this.SetBounds();
        }
      }
      else 
      {
        ng_SetClientHeight(to,sh);
        var cbh=ng_StyleHeight(to);
        if(this.Bounds.H!=cbh)
        {
          changed=true;
          this.Bounds.H=cbh;
          this.SetBounds();
        }
      }
      if((ngIExplorer6)&&(changed)&&((this.HAlign=='right')||(this.VAlign=='bottom'))) this.ngc_Update(recursive);
    }
    this.tb_update=false;
    this.OnUpdated=onupdated;
    if(this.OnUpdated) this.OnUpdated(this,to);
  } finally {  
    this.OnUpdated=onupdated;
  }
}

/**
 *  Class: ngToolBar
 *  This class implements a generic toolbar control. 
 *
 *  Syntax:
 *    new *ngToolBar* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngToolBar(id)
{
  ngControl(this, id, 'ngToolBar');

  /*
   *  Group: Properties
   */
  /*  Variable: AutoSize
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.AutoSize = false;
  /*  Variable: Vertical
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.Vertical = false;
  
  /*  Variable: VPadding
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.VPadding = 0;
  /*  Variable: HPadding
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.HPadding = 0;

  /*  Variable: VAlign
   *  ...
   *  Type: string
   *  Default value: *'top'*   
   */
  this.VAlign = 'top';
  /*  Variable: HAlign
   *  ...
   *  Type: string
   *  Default value: *'left'*   
   */
  this.HAlign = 'left';
  /*  Variable: Wrapable
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.Wrapable = true;

  /*
   *  Group: Methods
   */
  /*  Function: CtrlBringToFront
   *   
   *  Syntax:
   *    void *CtrlBringToFront* (object ctrl)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.CtrlBringToFront=ngc_CtrlBringToFront;
  /*  Function: CtrlSendToBack
   *   
   *  Syntax:
   *    void *CtrlSendToBack* (object ctrl)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.CtrlSendToBack=ngc_CtrlSendToBack;
  /*  Function: CtrlInsertAfter
   *   
   *  Syntax:
   *    void *CtrlInsertAfter* (object ctrl, object whichctrl)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.CtrlInsertAfter=ngc_CtrlInsertAfter;
  /*  Function: CtrlInsertBefore
   *   
   *  Syntax:
   *    void *CtrlInsertBefore* (object ctrl, object whichctrl)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.CtrlInsertBefore=ngc_CtrlInsertBefore;

  /*
   *  Group: Child Controls Properties
   */
  /*  Variable: ToolBarIgnore
   *  ...
   *  Type: bool
   *  Default value: *false*         
   */
  /*<>*/
  /*  Variable: ToolBarAutoUpdate
   *  ...
   *  Type: bool
   *  Default value: *true*         
   */
  /*<>*/
  /*  Variable: ToolBarIndent
   *  ...
   *  Type: integer
   *  Default value: *0*         
   */
  /*<>*/
  /*  Variable: ToolBarHPadding
   *  ...
   *  Type: integer
   *  Default value: *undefined*         
   */
  /*<>*/
  /*  Variable: ToolBarVPadding
   *  ...
   *  Type: integer
   *  Default value: *undefined*         
   */
  /*<>*/
  /*  Variable: ToolBarWidth
   *  ...
   *  Type: integer
   *  Default value: *undefined*         
   */
  /*<>*/
  /*  Variable: ToolBarHeight
   *  ...
   *  Type: integer
   *  Default value: *undefined*         
   */
  /*<>*/
  /*  Variable: ToolBarBreak
   *  ...
   *  Type: bool
   *  Default value: *false*         
   */
  /*<>*/
  /*  Variable: ToolBarNoWrap
   *  ...
   *  Type: bool
   *  Default value: *false*         
   */
  /*<>*/

  this.DoCreate = ngtb_DoCreate;
  this.DoRelease = ngtb_DoRelease;
  this.ngc_Update = this.Update;
  this.Update = ngtb_Update;

  ngControlCreated(this);
}

// --- ngProgressBar -----------------------------------------------------------

function npb_DoUpdate(o)
{
  var p=(this.process_cnt ? 25 : this.Position);
  if(p<0) p=0;
  if(p>100) p=100;
  
  var html=new ngStringBuilder;
  var image,dp;
  if((ngIExplorer)&&(ng_GetStylePx(o.style.height)==0)) o.style.height='1px';  // IE7 Measure fix
  var w=ng_ClientWidth(o);
  var th=0,lw=0,rw=0;
  
  image=this.LeftImg;
  if(image)
  {
    dp=ngc_ImgProps(this.ID+'_IL', 0, this.Enabled, image);
    ngc_Img(html,dp,"position:absolute; left: 0px;",ngVal(image.Attrs,''));
    lw=dp.W;
    if(dp.H>th) th=dp.H;
  }
  image=this.RightImg;
  if(image)
  {
    dp=ngc_ImgProps(this.ID+'_IR', 0, this.Enabled, image);
    ngc_Img(html,dp,"position:absolute; left: "+(w-dp.W)+"px;",ngVal(image.Attrs,''));
    rw=dp.W;
    if(dp.H>th) th=dp.H;
  }

  var pw=w-lw-rw;
  image=this.MiddleImg;
  if(image)
  {
    dp=ngc_ImgProps(this.ID+'_IM', 0, this.Enabled, image);
    ngc_ImgSW(html,dp,lw,pw,'',ngVal(image.Attrs,''));
    if(dp.H>th) th=dp.H;
  }  

  image=this.BarImg;
  if(image)
  {
    dp=ngc_ImgProps(this.ID+'_B', 0, this.Enabled, image);
    if(dp.H>0)
    {
      var step=dp.W;
      if(typeof step==='undefined') step=Math.floor((pw+9)/10);
      if(p==100) p=pw;
      else
      {
        p=(pw*p/100.0);
        if((!this.Smooth) || (this.process_cnt))
        {
          p/=step;
          p=Math.round(p);
          p*=step;
        }
        p=Math.round(p);
        if(p>pw) p=pw;
      }
      ngc_ImgSW(html,dp,lw,p,'',ngVal(image.Attrs,''));
      if(dp.H>th) th=dp.H;
    }
  }  
  ng_SetClientHeight(o,th);
  var cbh=ng_StyleHeight(o);
  if(this.Bounds.H!=cbh)
  {  
    this.Bounds.H=cbh;
    this.SetBounds();
  }
  ng_SetInnerHTML(o,html.toString());
  return true;
}

function npb_SetPosition(p)
{
  if(p==this.Position) return;
  
  this.Position=p;
  if(!this.process_cnt) this.Update();
}

function npb_UpdateProcess(cid)
{
  var c=ngGetControlById(cid, 'ngProgressBar');
  if(c)
  {
    if(c.process_timer) clearTimeout(c.process_timer); c.process_timer=null;

    var o=c.Elm();
    if(o) 
    {
      var dp,lw=0;
      var w=ng_ClientWidth(o);
      
      var image=c.LeftImg;
      if(image)
      {
        dp=ngc_ImgProps(c.ID+'_IL', 0, c.Enabled, image);
        lw=dp.W;
        w-=dp.W;
      }
      image=c.RightImg;
      if(image)
      {
        dp=ngc_ImgProps(c.ID+'_IR', 0, c.Enabled, image);
        w-=dp.W;
      }    
      image=c.BarImg;
      if(image)
      {
        dp=ngc_ImgProps(c.ID+'_B', 0, c.Enabled, image);
  
        var p=c.process_pos;
        var s=(w/10);
        if(s<=0) s=1;
        p+=s*c.process_dir;
        var step=dp.W;
        if(typeof step==='undefined') step=Math.floor((w+9)/10);
        var pw=(w/4);
        pw=Math.round(pw/step);
        pw*=step;
        if(p>w-pw) { p=w-pw; c.process_dir*=-1; }
        if(p<0) { p=0; c.process_dir*=-1; }
        p=(c.process_dir==1 ? Math.ceil(p) : Math.floor(p));
        c.process_pos=p;
        var bid=c.ID+'_B_';
        lw+=p;
        for(var i=1;i<100;i++)
        {
          o=document.getElementById(bid+i);
          if(!o) break;        
          ng_setLeftTop(o,lw,0);
          lw+=dp.W;
        }
        c.process_timer=setTimeout("npb_UpdateProcess('"+c.ID+"')",120);
      }    
    }
  }
}

function npb_BeginProcess()
{
  this.process_cnt++;
  if(this.process_cnt==1)
  {
    this.Update();
    this.process_pos = 0;
    this.process_dir = 1;
    this.process_timer=setTimeout("npb_UpdateProcess('"+this.ID+"')",120);
  }
}

function npb_EndProcess()
{
  this.process_cnt--;
  if(this.process_cnt<=0)
  {
    if(this.process_timer) clearTimeout(this.process_timer); this.process_timer=null;
    this.process_cnt=0;
    this.Update();
  }
}

function npb_DoDispose()
{
  if(this.process_timer) clearTimeout(this.process_timer); this.process_timer=null;
  return true;
}

function ngpb_OnVisibleChanged(c)
{
  if(c.Visible)
  {
    if(this.process_cnt>0)
    {
      this.process_timer=setTimeout("npb_UpdateProcess('"+this.ID+"')",120);
    }
  }
  else
  {
    if(this.process_timer) clearTimeout(this.process_timer); this.process_timer=null;
  }
}


/**
 *  Class: ngProgressBar
 *  This class implements a generic progress bar control. 
 *
 *  Syntax:
 *    new *ngProgressBar* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngProgressBar(id)
{
  ngControl(this, id, 'ngProgressBar');
  
  this.DoDispose = npb_DoDispose;
  this.OnVisibleChanged=ngpb_OnVisibleChanged
  
  /*
   *  Group: Properties
   */
  /*  Variable: Position
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.Position = 0;
  /*  Variable: Smooth
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.Smooth = false;
  
  /*  Variable: LeftImg
   *  ...
   *  Type: object
   */
  this.LeftImg = null;
  /*  Variable: MiddleImg
   *  ...
   *  Type: object
   */
  this.MiddleImg = null;
  /*  Variable: RightImg
   *  ...
   *  Type: object
   */
  this.RightImg = null;
  /*  Variable: BarImg
   *  ...
   *  Type: object
   */
  this.BarImg = null;

  /*
   *  Group: Methods
   */
  /*  Function: SetPosition
   *  Sets position of progress in interval 0-100.   
   *   
   *  Syntax:
   *    void *SetPosition* (int pos)
   *     
   *  Returns:
   *    -     
   */
  this.SetPosition = npb_SetPosition;

  this.process_cnt = 0;
  this.process_timer = null;

  /*  Function: BeginProcess
   *  Starts waiting animation.   
   *   
   *  Syntax:
   *    void *BeginProcess* ()
   *     
   *  Returns:
   *    -     
   */
  this.BeginProcess = npb_BeginProcess;
  /*  Function: EndProcess
   *  Ends waiting animation.   
   *   
   *  Syntax:
   *    void *EndProcess* ()
   *     
   *  Returns:
   *    -     
   */
  this.EndProcess = npb_EndProcess;

  this.DoUpdate = npb_DoUpdate;
  
  // events
  ngControlCreated(this);
}

// --- ngWebBrowser ------------------------------------------------------------

function ngwb_DoCreate(def, ref, elm, parent)
{
  var url=(ngIExplorer && (ngIExplorerVersion < 8) ? 'javascript:' : 'about:blank');
  ng_SetInnerHTML(elm,'<iframe src="'+url+'" id="'+this.ID+'_F" style="position: absolute;" frameborder="0" allowtransparency="yes"></iframe>');
}

function ngwb_DoUpdate(o)
{
  var frame=this.GetBrowser();
  if(!frame) return true;

  var w=ng_ClientWidth(o);
  var h=ng_ClientHeight(o);
  ng_SetClientWidth(frame,w);
  ng_SetClientHeight(frame,h);

  var url=this.GetURL();
  if(frame.src!=this.opened_url) 
  {
    frame.src=url;
    this.opened_url=frame.src;
  }  
  return true;
}

function ngwb_SetURL(url)
{
  if((this.OnSetURL)&&(!ngVal(this.OnSetURL(this,url),false))) return;
  this.URL=url;
  var br=this.GetBrowser()
  if(br)
  {
    br.src=url;
    this.opened_url=br.src;
  }    
}

function ngwb_GetURL()
{
  var url=this.URL;
  if(this.OnGetURL) url=this.OnGetURL(this,url);
  return url;
}

function ngwb_GetBrowser()
{
  var frame=document.getElementById(this.ID+'_F');
  return frame;
}

function ngwb_GetDocument()
{
  var br=this.GetBrowser()
  if(!br) return null;
  try
  {
    return (br.contentDocument ? br.contentDocument : br.contentWindow.document);
  }
  catch(e)
  {
    return null;
  }
}

function ngwb_SetHTML(html, allowdelayed)
{
  if(this.OnSetHTML)
  {
    html=this.OnSetHTML(this,html);
    if(html=='') return;
  }
  if(this.opened_url!='') this.SetURL('about:blank');
  
  var doc=this.GetDocument();
  if(doc)
  {
    try
    {
      doc.open();
      if(typeof html==='object')
      {
        if(html)
          for(var i in html)
            doc.write(html[i]);
      } 
      else doc.write(html);
      doc.close();
      return;
    }
    catch(e)
    { 
    }
  }
  if(ngVal(allowdelayed, true))
  {
    // we don't have access to document, try it later
    var c=this;
    this.set_html_timeout=setTimeout(function(e) {
      if(c.set_html_timeout) clearTimeout(c.set_html_timeout); c.set_html_timeout=null;
      c.SetHTML(html,false); 
    },200);
  }
}

/**
 *  Class: ngWebBrowser
 *  This class implements a web browser control. 
 *
 *  Syntax:
 *    new *ngWebBrowser* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */

function ngWebBrowser(id)
{
  ngControl(this, id, 'ngWebBrowser');
  this.DoCreate = ngwb_DoCreate;
  this.DoUpdate = ngwb_DoUpdate;
  
  /*
   *  Group: Properties
   */
  /*  Variable: URL
   *  ...
   *  Type: string
   */
  this.URL = '';
    
  /*
   *  Group: Methods
   */
  /*  Function: SetURL
   *  Sets browser URL.   
   *   
   *  Syntax:
   *    void *SetURL* (string url)
   *     
   *  Returns:
   *    -     
   */
  this.SetURL = ngwb_SetURL;
  /*  Function: GetURL
   *  Gets browser URL.   
   *   
   *  Syntax:
   *    string *GetURL* ()
   *     
   *  Returns:
   *    The URL.
   */
  this.GetURL = ngwb_GetURL;
  /*  Function: SetHTML
   *  Sets HTML code directly into browser.   
   *   
   *  Syntax:
   *    void *SetHTML* (string html [, bool allowdelayed=true])
   *     
   *  Returns:
   *    -     
   */
  this.SetHTML = ngwb_SetHTML;
  /*  Function: GetBrowser
   *  Gets browser IFRAME element.
   *   
   *  Syntax:
   *    object *GetBrowser* ()
   *     
   *  Returns:
   *    IFRAME element.
   */
  this.GetBrowser = ngwb_GetBrowser;
  /*  Function: GetDocument
   *  Gets browser document object.   
   *   
   *  Syntax:
   *    object *GetDocument* ()
   *     
   *  Returns:
   *    Document object.
   */
  this.GetDocument = ngwb_GetDocument;
  
  /*
   *  Group: Events
   */
  /*
   *  Event: OnSetURL
   */     
  this.OnSetURL = null;
  /*
   *  Event: OnGetURL
   */     
  this.OnGetURL = null;
  /*
   *  Event: OnSetHTML
   */     
  this.OnSetHTML = null;
    
  ngControlCreated(this);
}

/*!
 * Controls.js - dialogs.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */


/** 
 *  Group: Dialogs 
 */

// --- English resources -------------------------------------------------------
if(typeof ngc_Lang === 'undefined') ngc_Lang=new Array();
if(typeof ngc_Lang['en'] === 'undefined') ngc_Lang['en']=new Array();
ngc_Lang['en']['mbOK']='OK';
ngc_Lang['en']['mbCancel']='Cancel';
ngc_Lang['en']['mbYes']='Yes';
ngc_Lang['en']['mbNo']='No';

ngc_Lang['en']['ngAbout']='About';
ngc_Lang['en']['ngAboutVersion']='Version %s';
ngc_Lang['en']['ngAboutBrowser']='Browser: %s';
ngc_Lang['en']['ngAboutWindow']='Window: %s';
ngc_Lang['en']['ngAboutLanguage']='Language: %s';
ngc_Lang['en']['ngAboutUserControls']='User Controls: %s';
ngc_Lang['en']['ngAboutSystemInfo']='System Info';
ngc_Lang['en']['ngAboutComponents']='Used Components';
ngc_Lang['en']['ngAboutLibraries']='Libraries';
ngc_Lang['en']['ngAboutTrademarks']='Legal Trademarks';
ngc_Lang['en']['ngAboutReleaseNotes']='Release Notes';

// --- Czech resources ---------------------------------------------------------
if(typeof ngc_Lang['cz'] === 'undefined') ngc_Lang['cz']=new Array();
ngc_Lang['cz']['mbOK']='OK';
ngc_Lang['cz']['mbCancel']='Storno';
ngc_Lang['cz']['mbYes']='Ano';
ngc_Lang['cz']['mbNo']='Ne';

ngc_Lang['cz']['ngAbout']='O aplikaci';
ngc_Lang['cz']['ngAboutVersion']='Verze %s';
ngc_Lang['cz']['ngAboutBrowser']='Prohlížeč: %s';
ngc_Lang['cz']['ngAboutWindow']='Okno: %s';
ngc_Lang['cz']['ngAboutLanguage']='Jazyk: %s';
ngc_Lang['cz']['ngAboutSystemInfo']='Systémové informace';
ngc_Lang['cz']['ngAboutComponents']='Použité komponenty';
ngc_Lang['cz']['ngAboutLibraries']='Knihovny';
ngc_Lang['cz']['ngAboutTrademarks']='Ochranné známky';
ngc_Lang['cz']['ngAboutReleaseNotes']='Poznámky k verzi';

// --- Slovak resources ---------------------------------------------------------
if(typeof ngc_Lang['sk'] === 'undefined') ngc_Lang['sk']=new Array();
ngc_Lang['sk']['mbOK']='OK';
ngc_Lang['sk']['mbCancel']='Storno';
ngc_Lang['sk']['mbYes']='Áno';
ngc_Lang['sk']['mbNo']='Nie';

ngc_Lang['sk']['ngAbout']='O aplikácii';
ngc_Lang['sk']['ngAboutVersion']='Verzia %s';
ngc_Lang['sk']['ngAboutBrowser']='Prehliadač: %s';
ngc_Lang['sk']['ngAboutWindow']='Okno: %s';
ngc_Lang['sk']['ngAboutLanguage']='Jazyk: %s';
ngc_Lang['sk']['ngAboutSystemInfo']='Systémové informácie';
ngc_Lang['sk']['ngAboutComponents']='Použité komponenty';
ngc_Lang['sk']['ngAboutLibraries']='Knižnice';
ngc_Lang['sk']['ngAboutTrademarks']='Ochranné známky';
ngc_Lang['sk']['ngAboutReleaseNotes']='Poznámky k verzii';


var mbNone   =  0;
var mbCancel =  1;
var mbOK     =  2;
var mbYes    =  4;
var mbNo     =  8;

var mbDefButton1 = 256; 
var mbDefButton2 = 512;
var mbDefButton3 = 768;
var mbDefButton4 = 1024;

var mbDefButtonMask = mbDefButton1|mbDefButton2|mbDefButton3|mbDefButton4;

var mbMinimalWidth  = 180;
var mbMinimalHeight = 0;


// --- Dialog create helper fnc ------------------------------------------------

/** 
 *  Group: Functions   
 */
/**
 *  Function: ngMessageDlg
 *  Creates dialog.
 *  
 *  Syntax:
 *    object *ngMessageDlg* (string type, string text, string caption [, function onclose = undefined, object def = {}])
 *
 *  Parameters:
 *    type - dialog control type
 *    text - message text
 *    caption - dialog caption
 *    onclose - on close function callback 
 *    def - dialog definition
 *               
 *  Returns:
 *    Created dialog.
 *    
 *  Definition specials:
 *    DlgLangTxt - if true (default) uses proper locale for caption and text (ngTxt). 
 *    DlgHtmlEncode - if true (default) encodes HTML special characters in caption and text
 *    DlgShowDialog - if true (default) shows dialog after creation   
 */
function ngMessageDlg(type, text, caption, onclose, def)
{
  if(typeof def==='undefined') def=new Object;  
  ng_MergeDef(def, {
    DlgLangTxt: true, 
    DlgHtmlEncode: true,
    DlgShowDialog: true,
    Type: type,
    Data: {
      Text: caption
    },
    Events: {
      OnClose: onclose
    },
    Controls: {
      Message: {
        Data: {
          Text: text
        }
      }
    }     
  });
  if(def.DlgLangTxt)
  {
    if(typeof caption!=='undefined') caption=ngTxt(caption);
    if(typeof text!=='undefined')    text   =ngTxt(text);
  }  
  if(def.DlgHtmlEncode)
  {
    caption = ng_htmlEncode(caption);
    text = ng_htmlEncode(text);
    text = text.replace(/\n/g, "<br/>");
  }
    
  var win=ngCreateWindow(def);
  if((win)&&(def.DlgShowDialog)) win.Show();
  return win;
}

// --- ngMessageDlg ------------------------------------------------------------

function dlgbx_BtnClick(e)
{
  var b=e.Owner;
  if(typeof b.DialogResult !== 'undefined')
  {
    b.Owner.Owner.DialogResult=b.DialogResult;
    b.Owner.Owner.Close();
  }
}

function dlgbx_Center()
{
  var o=this.Elm();
  if(!o) return;
  var po=o.offsetParent;
  if((po)&&(po==document.body)) po=null;
  var pw=(po ? ng_ClientWidth(po) : ng_WindowWidth()); 
  var ph=(po ? ng_ClientHeight(po) : ng_WindowHeight()); 

  var b=this.Bounds;
  
  b.L=Math.round((pw-b.W)/2);
  b.T=Math.round(0.40*ph-(b.H/2));
  if(b.T<0) b.T=0;
  
  this.SetBounds();
}

function dlgbx_CalcAutoSize()
{
  if(!ngVal(this.ControlsPanel,false)) return;
 
  var o=this.Elm();
  if(!o) return;
  var po=o.offsetParent;
  if((po)&&(po==document.body)) po=null;
  var pw=(po ? ng_ClientWidth(po) : ng_WindowWidth()); 
  var ph=(po ? ng_ClientHeight(po) : ng_WindowHeight()); 

  var cmw=ng_OuterWidth(o)-ng_ClientWidth(this.ControlsPanel.Elm());

  // set to max size (eliminate scrollbars)
  ng_SetClientWidth(o,pw);
  ng_SetClientHeight(o,ph);
   
  var w=0,h=0,bw=0,minx=0,miny=0;

  // calculate size and position of msg box components
  var msg=ngVal(this.Controls.Message,null);
  var content=ngVal(this.Controls.Content,null); 
  var btns=ngVal(this.Controls.Buttons,null);
  var fnote=ngVal(this.Controls.Footnote,null);

  // calculate right/bottom margin by minimal left/top position of components   
  var cc=this.ControlsPanel.ChildControls;
  if(typeof cc !== 'undefined')
  {
    minx=10000,miny=10000;
    var l,t;
    for(var i=0;i<cc.length;i++) 
    {
      if(cc[i]==btns) continue;
      o=cc[i].Elm();
      l=ng_GetCurrentStylePx(o,'left');
      if(l<minx) minx=l;
      if(cc[i]!=content)
      {
        t=ng_GetCurrentStylePx(o,'top');
        if(t<miny) miny=t;
      }      
    }
  }
  
  // message
  o=(msg ? msg.Elm() : null);
  if((o)&&(msg.Visible))
  {
    var ml=ng_GetCurrentStylePx(o,'left');
    var mw=ng_OuterWidth(o)
    if(ml+mw+minx+cmw>pw) // text width overflows maximal allowed width 
    {
      mw=pw-cmw-minx-ml;
      msg.AutoSizeMode='vertical';
      msg.SetBounds({W: mw});
      msg.Update(false); 
    } 
    w=ml+mw;        
    h=ng_GetCurrentStylePx(o,'top')+ng_OuterHeight(o);
  }  
  // put content under message
  o=(content ? content.Elm() : null);
  if((o)&&(content.Visible))
  {
    content.SetBounds({ T: h });  
    h+=ng_OuterHeight(o);
  }
  // center buttons and put them under content/message
  o=(btns ? btns.Elm() : null)
  if(o)
  {
    var cc=btns.ChildControls;
    if((btns.Visible)&&(typeof cc !== 'undefined')&&(cc.length>0))
    {
      bw=ng_OuterWidth(o);
      if(btns.CenterButtons)
      {
        o.style.marginLeft=(-Math.round(bw/2))+'px';  
        btns.SetBounds({ L: '50%', T: h });
      }
      else btns.SetBounds({ T: h });
      h+=ng_OuterHeight(o);
      btns.SetVisible(true);
    }
    else btns.SetVisible(false);
  }
  // put footnote under buttons
  o=(fnote ? fnote.Elm() : null);
  if((o)&&(fnote.Visible))
  {
    fnote.SetBounds({ T: h });  
    h+=ng_OuterHeight(o);
  }

  // add margin
  if(w<bw) w=bw+2*minx;  
  else     w+=minx;
  h+=miny;
  
  // check minimal dialog size
  if(w<mbMinimalWidth)  w=mbMinimalWidth;
  if(h<mbMinimalHeight) h=mbMinimalHeight;

  this.SetClientRect({W: w, H: h });

  // check parent size
  if(this.Bounds.W>pw) this.Bounds.W=pw;
  if(this.Bounds.H>ph) this.Bounds.H=ph;

  if(this.Bounds.W<this.MinWidth) this.MinWidth=this.Bounds.W;
  if(this.Bounds.H<this.MinHeight) this.MinHeight=this.Bounds.H;
  this.SetBounds();
  this.Update();
}

// --- ngAboutDlg --------------------------------------------------------------

function ngAboutBrowser()
{
  var browser='';
  if(ngIExplorer) 
  {
    browser='Internet Explorer '+ngIExplorerVersion;        
    if((ngIExplorer6)&&(ngIE6AlignFix)) browser+=' (align fix)';
  }
  if(ngFireFox)
  {
    if(ngFireFox1x) browser='FireFox 1.x';
    else if(ngFireFox2x) browser='FireFox 2.x';
    else browser='FireFox';
  }
  if(ngOpera)  browser='Opera'+ngOperaVersion;
  if(ngSafari) browser='Safari';
  if(ngChrome) browser='Chrome';
  
  if(browser=='')
  {
    browser=navigator.userAgent;
    var i=browser.indexOf('(');
    if(i>=0) browser=browser.substr(0,i);
  }
  return browser;
} 

// --- Controls Registration ---------------------------------------------------

if(typeof ngUserControls === 'undefined') ngUserControls = new Array();
ngUserControls['dialogs'] = {

  OnInit: function() {

    /*  Class: ngMessageDlg
     *  Basic message dialog (based on <ngWindow>).
     */
    /*<>*/
    /*
     *  Group: Definition
     */
    /*
     *  Variable: DlgButtons
     *  ...
     *  Type: integer
     *  Default value: *mbOK*       
     */
    /*
     *  Variable: DialogType
     *  ...
     *  Type: string
     *  Default value: *'ngWindow'*       
     */

    /*
     *  Group: Properties
     */
    /*
     *  Variable: DialogResult
     *  ...
     *  Type: integer
     */    
    ngRegisterControlType('ngMessageDlg', function(def,ref,parent) {      
      ng_MergeDef(def, {
        DialogType: 'ngWindow',
        W: 200, H: 150,
        CloseBtn: false,
        Data: {          
          DialogResult: mbNone,
          
          AutoSize: true,
          Centered: true,
          Visible: false,
          Sizeable: false,
          Modal: true,
          DisposeOnClose: true,
          
          // override standard dialog functions
          Center: dlgbx_Center,            
          CalcAutoSize: dlgbx_CalcAutoSize
        },
        /*
         *  Group: Controls
         */  
        Controls: {
          /*  Object: Message
           *  <ngText>     
           */     
          Message: {
            Type: 'ngText',
            L: 15, T: 15, 
            Data: {
              AutoSize: true
            }
          },
          /*  Object: Content
           *  <ngPanel>     
           */     
          Content: {
            Type: 'ngPanel',
            L: 15, R: 15, H: 15
          },            
          /*  Object: Buttons
           *  <ngToolBar>     
           */     
          Buttons: {
            Type: 'ngToolBar',
            H: 23,
            Data: {
              CenterButtons: true,
              Vertical: true,
              AutoSize: true,
              HPadding: 10
            },
            Controls: {
              /*  Object: OK
               *  <ngButton>     
               */     
              OK: {
                Type: 'ngButton',
                W: 80,
                Data: {
                  ngText: 'mbOK',
                  Default: true,
                  DialogResult: mbOK
                }              
              },
              /*  Object: Yes
               *  <ngButton>     
               */     
              Yes: {
                Type: 'ngButton',
                W: 80,
                Data: {
                  ngText: 'mbYes',
                  Default: true,
                  DialogResult: mbYes
                }              
              },
              /*  Object: No
               *  <ngButton>     
               */     
              No: {
                Type: 'ngButton',
                W: 80,
                Data: {
                  ngText: 'mbNo',
                  DialogResult: mbNo
                }              
              },
              /*  Object: Cancel
               *  <ngButton>     
               */     
              Cancel: {
                Type: 'ngButton',
                W: 80,
                Data: {
                  ngText: 'mbCancel',
                  Cancel: true,
                  DialogResult: mbCancel
                }
              }              
            }                                        
          }
/*       ,Footnote: {
            Type: 'ngPanel',
            L: 15, R: 15, H: 15
          }*/
        }
      });
      var b,btns=def.Controls.Buttons.Controls;
      var revertbtn=def.Controls.Buttons.Data.HAlign==='right' ? true : false;
      var bcnt=0;
      def.DlgButtons=ngVal(def.DlgButtons, mbOK);
      if(!(def.DlgButtons & mbOK))     delete btns.OK;
      if(!(def.DlgButtons & mbYes))    delete btns.Yes;
      if(!(def.DlgButtons & mbNo))     delete btns.No;
      if(!(def.DlgButtons & mbCancel)) delete btns.Cancel;

      if(revertbtn)
      {
        for(var i in btns) bcnt++;

        var t=new Array();
        for(var l in btns) t.push(l);
        var tb=new Object;
        for(var j=t.length-1;j>=0;j--)
          tb[t[j]]=btns[t[j]];
        btns=tb;
        def.Controls.Buttons.Controls=tb;
      }
      
      var defbtn = def.DlgButtons & mbDefButtonMask;
      switch(defbtn)
      {
        case mbDefButton1: defbtn=!revertbtn ? 1 : bcnt; break;
        case mbDefButton2: defbtn=!revertbtn ? 2 : bcnt-1; break;
        case mbDefButton3: defbtn=!revertbtn ? 3 : bcnt-2; break;
        case mbDefButton4: defbtn=!revertbtn ? 4 : bcnt-3; break;
        default:           defbtn=-1; break;
      }
      var defresult=undefined;
      var cancel=false;
      bcnt=0;
      for(var i in btns)
      {
        b=btns[i];
        bcnt++;
        if(typeof b.Data === 'undefined') b.Data=new Object;
        if(defbtn!=-1) 
        {
          if(bcnt==defbtn)
          {
            b.Data.Default=true;
            if(typeof b.Data.Cancel!=='undefined') b.Data.Cancel=false;
          }
          else if(typeof b.Data.Default!=='undefined') b.Data.Default=undefined;
        }
        if(typeof b.Data.DialogResult !== 'undefined')
        {
          if(!b.Data.OnClick) b.Data.OnClick=dlgbx_BtnClick;
          if(b.Data.DialogResult == mbCancel) // cancel found, assign close btn  
          {
            def.Data.DialogResult=mbCancel;
            def.CloseBtn=true;
            defresult=mbNone;
          }
          if(typeof defresult==='undefined') defresult=b.Data.DialogResult;
          else if(defresult != b.Data.DialogResult) defresult=mbNone;
        }
      }
      if(bcnt==1) // one button
      {
        if(typeof b.Data.Default==='undefined') b.Data.Default=true;
        if(typeof b.Data.Cancel ==='undefined') b.Data.Cancel=true;
      }
      if(ngVal(defresult,mbNone)!=mbNone) // one action, assign close btn
      {
        def.Data.DialogResult=defresult;
        def.CloseBtn=true;
      }
      if(def.DialogType == 'ngMessageDlg') def.DialogType='ngWindow';

      var c=ngCreateControlAsType(def, def.DialogType, ref, parent);
      if(!c) return c;

      if(c.CloseButton) c.CloseButton.AddEvent(function() {
        c.DialogResult=(ngVal(defresult,mbNone)!=mbNone ? defresult : mbCancel);
      }, 'OnClick');

      return c;
    });

    /*  Class: ngAboutDlg
     *  Application about dialog (based on <ngMessageDlg>).
     */
    /*<>*/
    ngRegisterControlType('ngAboutDlg', function(def,ref,parent) {
      var appname=ngTxt('ngAppName',document.title);
      var sp=ngVal(ngApp.StartParams, null);
      var appver=(sp ? ngVal(sp.Version,'') : '');
      var appcopy=ngTxt('ngAppCopyright','');
      if(appver!='') 
      {
        var i=appver.indexOf('.');
        if(i<0) appver+='.0';
        appver=ng_sprintf(ngTxt('ngAboutVersion'),appver);
      }      

      ng_MergeDef(def, {
        DialogType: 'ngMessageDlg',
        DlgButtons: mbOK,

        /*
         *  Group: Definition
         */
        /*
         *  Variable: AboutSystemInfo
         *  ...
         *  Type: array
         *  Default value: *null*       
         */
        AboutSystemInfo: null,
        /*
         *  Variable: AboutComponents
         *  ...
         *  Type: array
         *  Default value: *null*       
         */
        AboutComponents: null,
        /*
         *  Variable: AboutLibraries
         *  ...
         *  Type: array
         *  Default value: *null*       
         */
        AboutLibraries: null,
        /*
         *  Variable: AboutTrademarks
         *  ...
         *  Type: array
         *  Default value: *null*       
         */
        AboutTrademarks: null,
        /*
         *  Variable: AboutReleaseNotes
         *  ...
         *  Type: array
         *  Default value: *null*       
         */
        AboutReleaseNotes: null,

        Data: {
          /*
           *  Group: Properties
           */
          /*
           *  Variable: AppName
           *  ...
           *  Type: string
           */
          AppName: appname,
          /*
           *  Variable: AppVersion
           *  ...
           *  Type: string
           */
          AppVersion: appver,
          /*
           *  Variable: AppCopyright
           *  ...
           *  Type: string
           */
          AppCopyright: appcopy,
          /*
           *  Variable: AppText
           *  ...
           *  Type: string
           */
          AppText: '',
                        
          ngText: 'ngAbout'      
        },
        /*
         *  Group: Controls
         */  
        Controls: {
          Message: {
            Data: {
              MinWidth: 260
            },
            Events: {
              OnGetText: function(c) {
                c=c.ParentControl.ParentControl;
                var txt='<b>'+c.AppName+'</b>';
                if(c.AppVersion!='') txt+='<br /><i>'+c.AppVersion+'</i>';
                if(c.AppCopyright!='') txt+='<br />&nbsp;<br />'+appcopy;
                if(c.AppText!='') txt+='<br />&nbsp;<br />'+c.AppText;
                return txt;
              }
            }
          },
          Content: {
            H: 125, 
            Controls: {
              /*  Object: AppInfo
               *  <ngList>     
               */     
              AppInfo: {
                Type: 'ngList',
                L:0, T: 20, R: 0, H: 90,
                Data: {
                  Items: [ 
                    { id: 'SystemInfo',   Text: '<b>'+ngTxt('ngAboutSystemInfo')+'</b>',   Collapsed: true },
                    { id: 'Components',   Text: '<b>'+ngTxt('ngAboutComponents')+'</b>',   Collapsed: true },
                    { id: 'Libraries',    Text: '<b>'+ngTxt('ngAboutLibraries')+'</b>',    Visible: false },
                    { id: 'Trademarks',   Text: '<b>'+ngTxt('ngAboutTrademarks')+'</b>',   Visible: false },
                    { id: 'ReleaseNotes', Text: '<b>'+ngTxt('ngAboutReleaseNotes')+'</b>', Visible: false }
                  ]
                },
                Events: {
                  OnClick: function(e) {
                    if((e.listPart==1)&&(typeof e.listItem.Collapsed !=='undefined'))
                    {
                      e.list.ToggleCollapsed(e.listItem);
                      
                      // auto scroll items in bottom half of the list
                      var lo=e.list.Elm();
                      var o=e.listObj;
                      if((lo)&&(o)&&(!e.listItem.Collapsed))
                      {                   
                        var loh=ng_ClientHeight(lo);
                        if(o.offsetTop>lo.scrollTop+loh/2)
                          lo.scrollTop=o.offsetTop;
                      }
                    }
                    return true;
                  }                  
                }
              }              
            }
          },
          Buttons: {
            R: 15,
            Data: {
              CenterButtons: false
            }
          }            
        }
      });      
      
      // Languages
      var langs='';
      var alangs=new Array;
      for(var i in ngc_Lang)
        alangs[alangs.length]=i;

      if(alangs.length>0)
      {
        alangs.sort();
        for(var i=0;i<alangs.length;i++)
        {
          if(alangs[i]==ngApp.Lang) continue;
          if(langs!='') langs+=', ';
          langs+=alangs[i];
        }
        langs=" ("+langs+")";
      }
      else langs='none';
      
      // Window
      var window=ng_WindowWidth()+'x'+ng_WindowHeight();
      
      var items=def.Controls.Content.Controls.AppInfo.Data.Items;
      items[0].Collapsed=true;
      items[0].Items=[ ng_sprintf(ngTxt('ngAboutBrowser'),ngAboutBrowser()), ng_sprintf(ngTxt('ngAboutWindow'),window), ng_sprintf(ngTxt('ngAboutLanguage'),ngApp.Lang+langs) ];
      
      function ngAboutAddInfo(f,t)
      {
        if((typeof f === 'object')&&(f)&&(f.length>0))
        {
          t.Collapsed=true;
          if(!ngVal(t.Visible,true)) t.Visible=true;
          if(typeof t.Items==='undefined') t.Items=new Array();
          for(var i=0;i<f.length;i++)
            t.Items[t.Items.length]=(typeof f[i]==='string' ? { Text: f[i] } : f[i]);        
        }
      }
      
      ngAboutAddInfo(def.AboutSystemInfo,items[0]);

      // Components
      items[1].Collapsed=true;
      items[1].Items=[ { Text: 'Controls v'+ngControlsVersion+'<br /><small>'+ngControlsCopyright+'</small>' } ];

      // ngMapAPI
      if(typeof ngMapAPIVersion !== 'undefined')
      {
        var l=items[1].Items.length;
        var mapcopy=ngVal(ngMapAPICopyright,'');
        items[1].Items[l]= { Text: 'ngMapAPI v'+ngMapAPIVersion+'<br /><small>'+mapcopy+'</small>' };
      }

      // User Controls
      if(typeof ngUserControls !== 'undefined')
      {
        var actrls=new Array();
        for(var i in ngUserControls)
          actrls[actrls.length]=i;
        
        if(actrls.length>0)
        {
          var ctrls='',uc,uccopy,ucver,ucname;
          actrls.sort();
          for(var i=0;i<actrls.length;i++)
          {
            if(i>0) ctrls+=', ';
            uc=ngUserControls[actrls[i]];
            if(uc)
            {
              ucver=ngVal(uc.Version,'');
              ucver+=ngVal(uc.SubVersion,(ucver!='' ? '.0' : ''));
              uccopy=ngVal(uc.Copyright,'');
              ucname=ngVal(uc.Name,(uccopy!='' ? actrls[i] : ''));
              if(ucname!='')
              {              
                if(ucver!='') ucname+=' v'+ucver;
                if(uccopy!='') ucname+='<br /><small>'+uccopy+'</small>';
                items[1].Items[items[1].Items.length]= { Text: ucname };
              }
            }
            ctrls+=actrls[i];
          }
          items[1].Items[0].Collapsed=true;
          items[1].Items[0].Items=[ { Text: ng_sprintf(ngTxt('ngAboutUserControls'),ctrls) } ];
        }
      }
      
      
      ngAboutAddInfo(def.AboutComponents,items[1]);
      
      // Libraries
      if(typeof ngLib !== 'undefined') 
      {
        items[2].Collapsed=true;
        items[2].Items = new Array;
        items[2].Visible=(items[2].Visible)||(!ng_EmptyVar(ngLib));
        var libitems=items[2].Items;
        for(var i in ngLib)
        {
          var txt=i;
          var ver=(typeof ngLib[i] === 'object' ? ngVal(ngLib[i].version,'') : '');
          if(ver!='') txt+=' v'+ver;
          libitems[libitems.length] = { Text: txt };
        }
      }

      ngAboutAddInfo(def.AboutLibraries,items[2]);
      ngAboutAddInfo(def.AboutTrademarks,items[3]);      
      ngAboutAddInfo(def.AboutReleaseNotes,items[4])

      if(def.DialogType == 'ngAboutDlg') def.DialogType='ngMessageDlg';  
      return ngCreateControlAsType(def, def.DialogType, ref, parent);
    });
  }
}
/*!
 * Controls.js - lists.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */


/**
 *  Group: Lists
 */

// --- ngList ------------------------------------------------------------------

var nglUnchecked = 0;
var nglChecked = 1;
var nglGrayed = 2;

var nglSelectNone = 0;
var nglSelectSingle = 1;
var nglSelectMulti = 2;
var nglSelectMultiExt = 3;

var nglClickRow = 0;
var nglClickText = 1;
var nglClickCheckImg = 2;
var nglClickTreeImg = 3;
var nglClickItemImg = 4;

var nglSortAsc = 0;
var nglSortDesc = 1;

var ngl_LeaveListTimer = null;

var ngl_CurrentRowId='';
var ngl_FocusTime=0;

function ngl_BeginUpdate()
{
  this.update_cnt++;
}

function ngl_EndUpdate()
{
  this.update_cnt--;
  if(this.update_cnt<=0) { this.update_cnt=0; if(this.need_update) this.Update(); }
}

function ngl_do_add(list,it,parent)
{
  this.need_update=true;
  if(typeof it==='undefined') return false;
  if(list!=this) ng_SetByRef(it,'Parent',list);
  if((this.OnAdd)&&(!ngVal(this.OnAdd(this,it,parent),false))) { delete it.Parent; return false; }

  var action = this.GetItemAction(it);
  this.SyncItemAction(it,action);

  if((!action)&&(typeof it.RadioGroup !== 'undefined')&&(ngVal(it.Checked,0)))
  {
    this.radio_groups[it.RadioGroup]=it;
  }
  if((typeof it.Checked !== 'undefined')&&(it.Checked!=0)&&(it.Checked!=false))
    this.CheckChanged();
  return true;
}

function ngl_Add(it, parent)
{
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if(typeof it === 'string') { var o=new Object; o.Text=it; it=o; }
  if(typeof list.Items === 'undefined') list.Items=new Array();
  if(!this.do_add(list,it,parent)) return -1;

  var idx=list.Items.length;
  list.Items[idx]=it;

  if(typeof it.Items!=='undefined')
  {
    var items=it.Items;
    delete it.Items;
    for(var j in items)
      this.Add(items[j],it);
  }
  return idx;
}

function ngl_AddItems(items, parent)
{
  if(!items) return;
  this.BeginUpdate();
  for(var j in items)
    this.Add(items[j], parent);
  this.EndUpdate();
}

function ngl_SetItems(items)
{
  this.BeginUpdate();
  this.Clear();
  this.AddItems(items);
  this.EndUpdate();
}

function ngl_Insert(idx, it, parent)
{
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if(typeof it === 'string') { var o=new Object; o.Text=it; it=o; }
  if(typeof list.Items === 'undefined') list.Items=new Array();
  if(!this.do_add(list,it,parent)) return -1;

  if(idx<0) idx=0;
  if(idx>list.Items.length) idx=list.Items.length;
  list.Items.splice(idx,0,it);

  if(typeof it.Items!=='undefined')
  {
    var items=it.Items;
    delete it.Items;
    for(var j in items)
      this.Add(items[j],it);
  }
  return idx;
}

function ngl_Replace(idx, it, parent)
{
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if((typeof list.Items === 'undefined')||(idx<0)||(idx>list.Items.length)) return null;

  if(!this.do_add(list,it,parent)) return null;

  var delit=null;
  if(idx<list.Items.length) {
    delit=list.Items[idx];
    this.do_remove(delit, parent);
  }

  list.Items[idx]=it;
  if(typeof it.Items!=='undefined')
  {
    var items=it.Items;
    delete it.Items;
    for(var j in items)
      this.Add(items[j],it);
  }
  return delit;
}

function ngl_IndexOf(it, parent)
{
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if(typeof list.Items !== 'undefined')
    for(var i=0;i<list.Items.length;i++)
      if(list.Items[i]==it) return i;
  return -1;
}

function ngl_do_remove(it, parent)
{
  if(typeof it==='undefined') return;
  this.need_update=true;
  if(this.SelCount>0) this.SelectItem(it,false);

  if((typeof it.RadioGroup !== 'undefined')&&(typeof this.radio_groups[it.RadioGroup] !== 'undefined')&&(this.radio_groups[it.RadioGroup]==it))
  {
    this.radio_groups[it.RadioGroup]=null;
  }

  if((typeof it.Checked !== 'undefined')&&(it.Checked!=0)&&(it.Checked!=false))
    this.CheckChanged();

  if(this.OnRemove) this.OnRemove(this,it,parent);
  it.Parent=null;
  if((typeof it.Controls !== 'undefined')&&(typeof this.ItemsControls !== 'undefined'))
  {
    if(this.Columns.length>0)
    {
      var cid,ctrls,ctrl;
      for(var i=0;i<this.Columns.length;i++)
      {
        cid=this.Columns[i].ID;
        if(typeof it.Controls[cid]!=='undefined')
        {
          ctrls=it.Controls[cid];
          for(var c in ctrls)
          {
            if((c=='Owner')||(c=='Parent')) continue;
            ctrl=ctrls[c];
            this.RemoveItemControl(ctrl);
            if((ctrl)&&(typeof ctrl.Dispose === 'function')) ctrl.Dispose();
          }
          delete it.Controls[cid];
        }
      }
    }
    else
    {
      var ctrl;
      for(var c in it.Controls)
      {
        if((c=='Owner')||(c=='Parent')) continue;
        ctrl=it.Controls[c];
        this.RemoveItemControl(ctrl);
        if((ctrl)&&(typeof ctrl.Dispose === 'function')) ctrl.Dispose();
      }
    }
  }
  if(it.Controls) delete it.Controls;
}

function ngl_Remove(it, parent)
{
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if(typeof list.Items === 'undefined') return -1;

  var idx=-1;
  for(var i=0;i<list.Items.length;i++)
    if(list.Items[i]==it) { idx=i; break; };

  if(idx>=0)
  {
    this.do_remove(it, parent);
    list.Items.splice(idx,1);
  }
  return idx;
}

function ngl_Delete(idx, parent)
{
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if((typeof list.Items === 'undefined')||(idx<0)||(idx>=list.Items.length)) return null;

  var it=list.Items[idx];
  this.do_remove(it, parent);

  list.Items.splice(idx,1);
  return it;
}

function ngl_GetPath(parent, path, create, oncreatefnc, userdata)
{
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;

  var cname='';
  create=ngVal(create,true);
  oncreatefnc=ngVal(oncreatefnc, null);
  if(this.Columns.length>0) cname=this.Columns[0].ID;
  this.BeginUpdate();
  try
  {
    var s=0,name,found,nit,ngname;
    for(var i=0;i<=path.length;i++)
    {
      if((i!=path.length)&&(path.charAt(i)!="\\")) continue;
      name=path.substr(s,i-s);
      if(name!='')
      {
        if(name.charAt(0)=='$') { ngname=true; name=name.substr(1,name.length-1); }
        else ngname=false;
        found=null;
        if((list)&&(typeof list.Items !== 'undefined'))
        {
          if(this.Columns.length>0)
          {
            if(ngname)
            {
              for(var j=0;j<list.Items.length;j++)
                if(list.Items[j].ngText[cname] == name) { found = list.Items[j]; break; }
            }
            else
            {
              for(var j=0;j<list.Items.length;j++)
                if(list.Items[j].Text[cname] == name) { found = list.Items[j]; break; }
            }
          }
          else
          {
            if(ngname)
            {
              for(var j=0;j<list.Items.length;j++)
                if(list.Items[j].ngText == name) { found = list.Items[j]; break; }
            }
            else
            {
              for(var j=0;j<list.Items.length;j++)
                if(list.Items[j].Text == name) { found = list.Items[j]; break; }
            }
          }
        }
        if(found) list = found;
        else {
          if((create)&&(list))
          {
            nit=new ngListItem;
            if(this.Columns.length>0)
            {
              if(ngname)
              {
                nit.ngText=new Object;
                nit.Text=new Object;
                nit.ngText[cname]=name;
                nit.Text[cname]=ngTxt(name);
              }
              else
              {
                nit.Text=new Object;
                nit.Text[cname]=name;
              }
            }
            else
            {
              if(ngname)
              {
                nit.ngText=name;
                nit.Text=ngTxt(name);
              }
              else nit.Text=name;
            }
            if((oncreatefnc)&&(!ngVal(oncreatefnc(this, list, nit, userdata),false))) { list=null; break; }
            this.Add(nit,list);

            list=nit;
          }
          else { list=null; break; }
        }
      }
      s=i+1;
    }
  }
  catch(e)
  {
  }
  this.EndUpdate();
  return list;
}

function ngl_Scan(fnc, parent, userdata)
{
  if(typeof fnc !== 'function') return false;
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if(typeof list.Items !== 'undefined')
    for(var i=0;i<list.Items.length;i++)
    {
      if(typeof list.Items[i] === 'undefined') continue;
      if(!fnc(this, list.Items[i], list, userdata)) return false;
      if(!this.Scan(fnc, list.Items[i], userdata)) return false;
    }
  return true;
}

function ngl_ScanVisible(fnc, parent, userdata)
{
  if(typeof fnc !== 'function') return false;
  var list=parent;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if(typeof list.Items !== 'undefined')
    for(var i=0;i<list.Items.length;i++)
    {
      var pi=list.Items[i];
      if(typeof pi === 'undefined') continue;
      if(!ngVal(pi.Visible,true)) continue;
      if(!fnc(this, pi, list, userdata)) return false;

      if((ngVal(pi.Collapsed,false))||(typeof pi.Items === 'undefined')||(!pi.Items.length)) continue;
      if(!this.Scan(fnc, pi, userdata)) return false;
    }
  return true;
}

function ngl_Clear(parent)
{
  var list=parent;
  if(!list)
  {
    list=this;
    this.ClearSelected();
    this.ItemsControls = undefined;
  }
  if(typeof list.Items !== 'undefined')
  {
    for(var i=list.Items.length-1;i>=0;i--)
    {
      if(typeof list.Items[i] === 'undefined') continue;
      this.do_remove(list.Items[i], list);
      if(typeof list.Items[i].Items !== 'undefined')
        this.Clear(list.Items[i]);
    }
    delete list.Items;
  }
  if(list==this) this.Items=new Array();
}

function ngl_ItemId(it)
{
  if(typeof it==='undefined') return '';
  var id='';
  do
  {
    var idx=this.IndexOf(it,it.Parent);
    if(idx<0) return '';
    id=idx+(id=='' ? '' : '_'+id);
    it=it.Parent;
  }
  while(it);
  return id;
}

function ngl_ItemById(id)
{
  var r=new Object;
  var list,idx=new Array();
  for(var j=0,i=id.length-1;i>=0;i--)
    if(id.charAt(i)=='_')
    {
      idx[j++]=parseInt(id.substring(i+1,id.length));
      id=id.substring(0,i);
      list=ngGetControlById(id, 'ngList');
      if(list)
      {
        r.list=list;
        r.item=list;
        for(i=idx.length-1;i>=0;i--)
          r.item=((r.item)&&(r.item.Items)&&(idx[i]>=0)&&(idx[i]<r.item.Items.length) ? r.item.Items[idx[i]] : null);
        if(r.item==list) r.item=null;
        return r;
      }
    }
  r.list=null;
  r.item=null;
  return r;
}

function nglist_ItemById(id)
{
  var result = this;
  if (id.charAt(id.length - 1) != '_')
    id += '_';
  var i = 0;
  while (id.length > 0)
  {
    if (id.charAt(i) == '_')
    {
      var item_id = parseInt(id.substring(0, i));
      id = id.substring(i + 1);
      if (!item_id.isNaN && result.Items && (item_id >= 0) && (item_id < result.Items.length) && (result.Items[item_id] !== null))
        result = result.Items[item_id];
      else
      {
        result = null;
        return result;
      }
      i = 0;
    }
    else
      i++;
  }
  return (result == this ? null : result);
}

function ngl_UpdateCollapsed(it,recursion,setall,id,level,collapsed)
{
  var list=it;
  if((typeof list === 'undefined')||(list===null)) list=this;
  level=ngVal(level,0);

  if(typeof list.Items === 'undefined') return level;
  var image,statechanged=false;
  if((typeof setall !== 'undefined')&&(list!=this)&&(ngVal(it.Collapsed,false)!=setall)&&((list.Items.length>0)||(typeof it.Collapsed !== 'undefined')))
  {
    statechanged=true;
    if(setall)
    {
      if((it.OnCollapsing)&&(!ngVal(it.OnCollapsing(this,it),false))) statechanged=false;
      if((statechanged)&&(this.OnCollapsing)&&(!ngVal(this.OnCollapsing(this,it),false))) statechanged=false;
    }
    else
    {
      if((it.OnExpanding)&&(!ngVal(it.OnExpanding(this,it),false))) statechanged=false;
      if((statechanged)&&(this.OnExpanding)&&(!ngVal(this.OnExpanding(this,it),false))) statechanged=false;
    }
    if(statechanged) it.Collapsed=setall;
  }
  if(list.Items.length==0) return level;

  if(this.update_cnt>0)
  {
    this.need_update=true;
    if(typeof setall !== 'undefined')
      for(var i=0;i<list.Items.length;i++)
      {
        if(typeof list.Items[i]==='undefined') continue;
        this.UpdateCollapsed(list.Items[i], true, setall, id+i, level+1, collapsed);
      }
    return level;
  }
  if(typeof id==='undefined') id=(list==this ? '' : this.ItemId(it));

  var l=level;
  if(this.Columns.length>0)
  {
    if(typeof collapsed === 'undefined')
    {
      collapsed=false;
      var p=list;
      while((!collapsed)&&(p))
      {
        collapsed=ngVal(p.Collapsed,false);
        p=p.Parent;
      }
    }
    collapsed=((collapsed)||(ngVal(list.Collapsed,false)));
    var o=document.getElementById(this.ID+'_G'+id+'_0');
    if(o) o.style.display=(collapsed ? 'none' : '');

    if(this.OnGetTreeImg) image=this.OnGetTreeImg(this, list, id);
    else image=this.TreeImg;
    if(image) ngc_ChangeImage(ngl_TreeImgDrawProps(this.ID+'_'+id+'T', collapsed, this.Enabled, image));

    if(list!=this) id+='_'

    for(var i=0;i<list.Items.length;i++)
    {
      if(typeof list.Items[i]==='undefined') continue;
      l=this.UpdateCollapsed(list.Items[i], true, setall, id+i, level+1, collapsed);
      if(l>level+1)
      {
        if((i+1)<list.Items.length)
        {
          var o=document.getElementById(this.ID+'_G'+id+(i+1));
          if(o) o.style.display=(collapsed ? 'none' : '');
        }
      }
    }
  }
  else
  {
    var o=document.getElementById(this.ID+'_G'+id);
    if(o) o.style.display=(ngVal(list.Collapsed,false) ? 'none' : 'block');

    if(this.OnGetTreeImg) image=this.OnGetTreeImg(this, list, id);
    else image=this.TreeImg;
    if(image) ngc_ChangeImage(ngl_TreeImgDrawProps(this.ID+'_'+id+'T', ngVal(list.Collapsed,false), this.Enabled, image));
    if(list!=this) id+='_'
    if((ngVal(recursion,false))||(typeof setall !== 'undefined'))
      for(var i=0;i<list.Items.length;i++)
      {
        if(typeof list.Items[i]==='undefined') continue;
        this.UpdateCollapsed(list.Items[i], true, setall, id+i, level+1, collapsed);
      }
  }
  if(statechanged)
  {
    if(setall)
    {
      if(it.OnCollapsed) it.OnCollapsed(this,it);
      if(this.OnCollapsed) this.OnCollapsed(this,it);
    }
    else
    {
      if(it.OnExpanded) it.OnExpanded(this,it);
      if(this.OnExpanded) this.OnExpanded(this,it);
    }
    this.UpdateColumns();    
  }
  this.UpdateFrame();
  
  return l;
}

function ngl_Collapse(it)
{
  if((typeof it === 'undefined')||(ngVal(it.Collapsed,false))) return;
  if((it.OnCollapsing)&&(!ngVal(it.OnCollapsing(this,it),false))) return;
  if((this.OnCollapsing)&&(!ngVal(this.OnCollapsing(this,it),false))) return;
  it.Collapsed=true;
  this.UpdateCollapsed(it,false);
  this.UpdateColumns();    
  if(it.OnCollapsed) it.OnCollapsed(this,it);
  if(this.OnCollapsed) this.OnCollapsed(this,it);
}

function ngl_Expand(it)
{
  if((typeof it === 'undefined')||(!ngVal(it.Collapsed,false))) return;
  if((it.OnExpanding)&&(!ngVal(it.OnExpanding(this,it),false))) return;
  if((this.OnExpanding)&&(!ngVal(this.OnExpanding(this,it),false))) return;
  it.Collapsed=false;
  this.UpdateCollapsed(it,false);
  this.UpdateColumns();    
  if(it.OnExpanded) it.OnExpanded(this,it);
  if(this.OnExpanded) this.OnExpanded(this,it);
}

function ngl_CollapseAll(it)
{
  this.UpdateCollapsed(it,true,true);
}

function ngl_ExpandAll(it)
{
  this.UpdateCollapsed(it,true,false);
}

function ngl_ToggleCollapsed(it)
{
  if(typeof it === 'undefined') it=new Object;
  if((it!=this)&&(it.Items)&&((it.Items.length>0)||(typeof it.Collapsed !== 'undefined')))
  {
    if(it.Collapsed) this.Expand(it);
    else this.Collapse(it);
  }
}

function ngl_GetRowClassName(it, selected, id)
{
  var cn='Row';
  if(this.OnGetRowClassName)
  {
    var c=this.OnGetRowClassName(this, it, id);
    if(ngVal(c,'')!='') cn=c;
  }
  if(it)
  {
    if((!this.Enabled)||(!ngVal(it.Enabled,true))) cn+='Disabled';
    else
    {
      switch(it.Checked)
      {
        case true:
        case 1: cn+='Checked'; break;
        case 2: cn+='Grayed'; break;
      }
    }
  }
  cn=this.BaseClassName+cn;
  if((this.Enabled)&&(ngVal(selected,false))) cn=this.BaseClassName+'Selected '+cn;
  return cn;
}

function ngl_CheckedChanged(lid)
{
  var l=ngGetControlById(lid, 'ngList');
  if(l)
  {
    clearTimeout(l.checked_changed_timer);
    l.checked_changed_timer=null;
    if(l.OnCheckChanged) l.OnCheckChanged(l);
  }
}

function ngl_do_checked(it)
{
  var c=it.Checked;
  if(this.OnItemCheckChanged) this.OnItemCheckChanged(this,it);
  if(it.Checked==c)
  {
    var action = this.GetItemAction(it);
    if(action) action.CheckRadioGroup();
    else
      if((typeof it.RadioGroup !== 'undefined')&&(ngVal(it.Checked,0))&&(this.radio_groups[it.RadioGroup]!=it))
      {
        var uncheck=this.radio_groups[it.RadioGroup];
        this.radio_groups[it.RadioGroup]=it;
        if(uncheck) this.CheckItem(uncheck,0);
      }
    this.CheckChanged();
  }
}

function ngl_CheckChanged()
{
  clearTimeout(this.checked_changed_timer);
  this.checked_changed_timer=null;
  if(this.OnCheckChanged)
  {
    this.checked_changed_timer = setTimeout("ngl_CheckedChanged('"+this.ID+"')",(this.CheckedChangedDelay>0 ? this.CheckedChangedDelay : 1));
  }
}

function ngl_UpdateChecked(it,recursion,setall,id,level)
{
  var list=it;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if((typeof it==='undefined')||(it===null)) { it={ Checked: setall, CheckGroup: true }; recursion=true; id=''; }
  if(typeof id==='undefined') id=(list==this ? '' : this.ItemId(it));

  level=ngVal(level,0);
  if(((this.ShowCheckboxes)||(typeof it.Checked!=='undefined'))&&(typeof setall !== 'undefined')&&(ngVal(it.Checked,0)!=setall))
  {
    it.Checked=setall;
    this.do_checked(it);
  }

  var undefined;
  var state=ngVal(it.Checked,0);
  if((typeof list.Items !== 'undefined')&&(list.Items.length>0))
  {
    recursion=ngVal(recursion,false);
    var checkgroup=ngVal(it.CheckGroup,false);
    if((checkgroup)||(typeof setall !== 'undefined')||(recursion))
    {
      if((!level)&&(checkgroup)&&(state!=2)) setall=state;
      if(!checkgroup) setall=undefined;
      var s,gstate;
      for(var i=0;i<list.Items.length;i++)
      {
        if(typeof list.Items[i] === 'undefined') continue;
        s=this.UpdateChecked(list.Items[i],recursion,setall,(id!='' ? id+'_'+i : undefined),level+1);
        if((this.ShowCheckboxes)||(typeof list.Items[i].Checked!=='undefined'))
        {
          if(typeof gstate === 'undefined') gstate=s;
          else if(s!=gstate) gstate=2;
        }
      }
      if((checkgroup)&&(typeof gstate!=='undefined')) state=gstate;
    }
  }

  if((list!=this)&&(id!=''))
  {
    if(this.update_cnt>0) this.need_update=true;
    else
    {
      var o=document.getElementById(this.ID+'_'+id);
      if(o)
      {
        var cn=this.GetRowClassName(it, this.selected[id], id);
        var i=o.className.indexOf('_Focus');
        if(i>=0) cn+='_Focus';
        o.className=cn;
      }
      var image;
      if(this.OnGetCheckImg) image=this.OnGetCheckImg(this, it, id);
      else image=(typeof it.Checked === 'undefined' && (!this.ShowCheckboxes) ? null : this.CheckImg);
      if(image)
      {
        ngc_ChangeImage(ngl_CheckImgDrawProps(this.ID+'_'+id+'C', state, this.Enabled, image));
      }

      if(!level)
      {
        var pstate;
        it=list.Parent;
        while((it)&&(ngVal((it.CheckGroup),false)))
        {
          for(var i=0;i<it.Items.length;i++)
          {
            if((this.ShowCheckboxes)||(typeof it.Items[i].Checked!=='undefined'))
            {
              if(typeof pstate==='undefined') pstate=ngVal(it.Items[i].Checked,0);
              else if(ngVal(it.Items[i].Checked,0)!=pstate) { pstate=2; break; }
            }
          }
          if((typeof pstate!=='undefined')&&((this.ShowCheckboxes)||(typeof it.Checked!=='undefined'))&&(pstate!=ngVal(it.Checked,0)))
          {
            it.Checked=pstate;
            this.do_checked(it);
            this.UpdateChecked(it,false);
          }
          it=it.Parent;
        }
      }
    }
  }
  return state;
}

function ngl_CheckItem(it, state)
{
  if(!it) return;

  var action = this.GetItemAction(it);
  if((action)&&(!action.in_action_check))
  {
    action.Check(state);
    return;
  }
  state=ngVal(state,1);
  if(ngVal(it.Checked,0)!=state)
  {
    it.Checked=state;
    this.do_checked(it);
    if(it.Checked==state) this.UpdateChecked(it);
  }
}

function ngl_CheckAll(it)
{
  this.UpdateChecked(it,true,true);
}

function ngl_UncheckAll(it)
{
  this.UpdateChecked(it,true,false);
}

function ngl_GetChecked()
{
  var ret=new Array();
  this.Scan(function (list, item, parent, userData) {
    if (item.Checked) ret.push(item);
    return true;
  }); 
  return ret;
}

function ngl_SetItemVisible(it, state)
{
  if(!it) return;

  var action = this.GetItemAction(it);
  if((action)&&(!action.in_action_visible))
  {
    action.SetVisible(state);
    return;
  }
  state=ngVal(state,true);
  if(ngVal(it.Visible,true)!=state)
  {
    it.Visible=state;
    if(this.OnSetItemVisible) this.OnSetItemVisible(this,it);
    if(it.Visible==state)
    {
      if(this.update_cnt>0) this.need_update=true;
      else
      {
        if((this.Columns.length>0)&&(!ngIExplorer)) this.Update();
        else
        {
          var o=document.getElementById(this.ID+'_'+this.ItemId(it));
          if(o)
          {
            o.style.display=(it.Visible ? 'block' : 'none');
          }
        }
      }
    }
  }
}

function ngl_SetItemEnabled(it, state)
{
  if(!it) return;

  var action = this.GetItemAction(it);
  if(action)
  {
    action.SetEnabled(state);
    return;
  }
  state=ngVal(state,true);
  if(ngVal(it.Enabled,true)!=state)
  {
    it.Enabled=state;
    if(this.OnSetItemEnabled) this.OnSetItemEnabled(this,it);
    if(it.Enabled==state) this.Update();
  }
}

function ngl_SelectChanged()
{
  var o,changed=false;
  var update=(this.update_cnt<=0);

  var cnt=0;
  var nd=new Array();
  for(var id in this.selected)
  {
    if(!ngVal(this.selected[id],false)) continue;
    cnt++;
    nd[id]=true;
    if(!ngVal(this.draw_selected[id],false))
    {
      changed=true;
      if(update)
      {
        o=document.getElementById(this.ID+'_'+id);
        if(o)
        {
          var cn=o.className;
          var i=cn.indexOf(this.BaseClassName+'Selected ');
          if(i<0) cn=this.BaseClassName+'Selected '+cn;
          o.className=cn;
          if(this.OnRedrawSelected) this.OnRedrawSelected(this,o,true,id);
        }
      }
    }
  }
  this.SelCount = cnt;

  for(var id in this.draw_selected)
  {
    if((!ngVal(this.selected[id],false))&&(ngVal(this.draw_selected[id],false)))
    {
      changed=true;
      if(update)
      {
        o=document.getElementById(this.ID+'_'+id);
        if(o)
        {
          var cn=o.className;
          var sclass=this.BaseClassName+'Selected ';
          var i=cn.indexOf(sclass);
          if(i>=0) cn=cn.substring(i+sclass.length,cn.length);
          o.className=cn;
          if(this.OnRedrawSelected) this.OnRedrawSelected(this,o,false,id);
        }
      }
    }
  }
  this.draw_selected=nd;
  if((changed)&&(this.OnSelectChanged))
  {
    this.OnSelectChanged(this);
    if(this.update_cnt>0) this.need_update=true;
  }
}

function ngl_SelectItem(it, state)
{
  if(!it) return;
  state=ngVal(state,true);
  var id=this.ItemId(it);
  if(id=='') return;
  if(ngVal(this.selected[id],false)!=state)
  {
    if(state)
    {
      this.last_selected=id;
      this.selected[id]=true;
    }
    else delete this.selected[id];
    this.SelectChanged();
  }
}

function ngl_ClearSelected()
{
  this.last_selected='';
  this.selected = new Array();
  this.SelectChanged();
}

function ngl_GetSelected()
{
  var ii,items=new Array();
  for(var id in this.selected)
  {
    if(!ngVal(this.selected[id],false)) continue;

    ii=ngl_ItemById(this.ID+'_'+id);
    if(ii.item) items[items.length]=ii.item;
  }
  return items;
}

function ngl_IsItemSelected(it)
{
  var id=this.ItemId(it);
  if(id=='') return false;
  return ngVal(this.selected[id],false);
}

function ngl_GetItemFocus()
{
  var ii=ngl_ItemById(ngl_CurrentRowId);
  return (ii.list==this ? ii.item : null);
}

function ngl_SetItemFocus(it)
{
  if(!it)
  {
    var ii=ngl_ItemById(ngl_CurrentRowId);
    if(ii.list==this)
    {
      var o=document.getElementById(ngl_CurrentRowId);
      if(o) ngl_LeaveRow(false,o,(this.OnEnterRow!=null)||(this.OnLeaveRow!=null));
    }
    return;
  }
  var id=this.ItemId(it);
  if(id=='') return;

  var p=it.Parent;
  while(p)
  {
    if(p.Collapsed) this.Expand(p);
    p=p.Parent;
  }
  id=this.ID+'_'+id;
  if(id!=ngl_CurrentRowId)
  {
    ngl_FocusTime=new Date().getTime();
    var o=document.getElementById(id);
    if(o) ngl_EnterRow(false,o,(this.OnEnterRow!=null)||(this.OnLeaveRow!=null));

    var lo=this.ContentElm;
    if((lo)&&(o))
    {
      var oh=ng_ClientHeight(o);
      var loh=ng_ClientHeight(lo);
      var hh=0;
      var fhdr=document.getElementById(this.ID+'_FH');
      if(fhdr) hh=ng_ClientHeight(fhdr);

      if((o.offsetTop<lo.scrollTop+hh)||(o.offsetTop+oh>lo.scrollTop+loh))
      {
        var sc=o.offsetTop-hh;
        if(sc<0) sc=0;
        lo.scrollTop=sc;
      }
    }
  }
}

var ngl_ActSortList=null;
function ngl_SortFnc(a,b)
{
  var l=ngl_ActSortList;
  if(l.OnCompareItem) return l.OnCompareItem(l,a,b);
  var t1='',t2='';
  if(l.Columns.length>0)
  {
    t1=(typeof a.Text==='object' ? a.Text[l.SortColumn] : '');
    t2=(typeof b.Text==='object' ? b.Text[l.SortColumn] : '');
  }
  else
  {
    t1=a.Text;
    t2=b.Text;
  }
  t1=ngVal(t1,'');
  t2=ngVal(t2,'');
  if(!l.SortCaseSensitive)
  {
    if(typeof t1 === 'string') t1=t1.toLowerCase();
    if(typeof t2 === 'string') t2=t2.toLowerCase();
  }

  var r=0;
  if(t1<t2) r=-1;
  else if(t1>t2) r=1;
  if(l.SortDir==1) r=-r;
  return r;
}

function ngl_Sort(it, recursion, level, itemid)
{
  var list=it;
  if((typeof list === 'undefined')||(list===null)) list=this;
  if((typeof list.Items !== 'undefined')&&(list.Items.length>0))
  {
    level=ngVal(level,0);
    if(!level)
    {
      ngl_ActSortList=this;
      if((this.Columns.length>0)&&(ngVal(this.SortColumn,'')=='')) this.SortColumn=this.Columns[0].ID;
    }
    if(ngVal(itemid,'')=='')
    {
      itemid=this.ItemId(list);
      if(itemid!='') itemid+='_';
    }

    if(ngVal(recursion,true))
      for(var i=0;i<list.Items.length;i++)
        this.Sort(list.Items[i],true,level+1,itemid+i+'_');

    if(this.SelCount>0)
    {
      var saveselected=new Array();

      for(var i=0;i<list.Items.length;i++)
      {
        if(ngVal(this.selected[itemid+i],false))
        {
          saveselected.push(list.Items[i]);
          delete this.selected[itemid+i];
        }
      }
    }

    list.Items.sort(ngl_SortFnc)
    if((this.SelCount>0)&&(saveselected.length>0))
    {
      for(var i=0;i<list.Items.length;i++)
        for(var j=0;j<saveselected.length;j++)
          if(list.Items[i]==saveselected[j])
          {
            saveselected.splice(j,1);
            this.selected[itemid+i]=true;
            break;
          }
    }
    if(!level)
    {
      ngl_ActSortList=null;
      this.Update();
    }
  }
}

function ngl_FindCompare(fi, key, text)
{
  if(typeof text !== 'string')
  {
    return (text==key);
  }
  if(fi.ignorecase) text=text.toLowerCase();
  switch(fi.partial)
  {
    case 1:
      key=''+key;
      if(key.length>text.length) return false;
      return (text.substring(0,key.length)==key);
    case 2:
      key=''+key;
      return (text.indexOf(key)>=0)
    default:
      return (text==key);
  }
}

function ngl_FindItemCallback(list, it, parent, fi)
{
  var key,text;
  if(typeof fi.fromitem !== 'undefined')
  {
    if(fi.fromitem==it) delete fi.fromitem;
    return true;
  }
  if(list.Columns.length>0)
  {
    var col;
    for(var i=0;i<fi.cols.length;i++)
    {
      col=fi.cols[i];
      if(list.OnGetText) text=ngVal(list.OnGetText(list, it, col),'');
      else text=(typeof it.Text==='object' ? ngVal(it.Text[col.ID],'') : '');
      if(!ngl_FindCompare(fi, fi.key[i], text)) return true;
    }

  }
  else
  {
    if(list.OnGetText) text=ngVal(list.OnGetText(list, it),'');
    else text=ngVal(it.Text,'');
    if(!ngl_FindCompare(fi, fi.key, text)) return true;
  }
  fi.found=it;
  return false;
}

function ngl_FindItem(key, partial, ignorecase, visibleonly, fromitem)
{
  var fi=new Object;
  fi.ignorecase=ngVal(ignorecase,true);
  if(typeof key === 'object')
  {
    if(this.Columns.length<=0) return null;

    var newkey=new Array();
    var cols=new Array();
    var i,j,col;
    for(var i in key)
    {
      for(j=0;j<this.Columns.length;j++)
      {
        col=this.Columns[j];
        if((typeof col === 'object')&&(col.ID == i))
        {
          if(fi.ignorecase) newkey[newkey.length]=(''+key[i]).toLowerCase();
          else newkey[newkey.length]=key[i];
          cols[cols.length]=col;
        }
      }
    }
    if(!cols.length) return null;
    fi.key=newkey;
    fi.cols=cols;
  }
  else
  {
    fi.key=(fi.ignorecase ? (''+key).toLowerCase() : key);
    if(this.Columns.length>0)
    {
      fi.key=new Array(fi.key);
      fi.cols=new Array(this.Columns[0]);
    }
  }
  fi.found=null;
  fi.fromitem=fromitem;
  fi.partial=ngVal(partial,0);
  if(ngVal(visibleonly,false)) this.ScanVisible(ngl_FindItemCallback, null, fi);
  else this.Scan(ngl_FindItemCallback, null, fi);
  return fi.found;
}

function ngl_FindItemByIDCallback(list, it, parent, fi)
{
  if((!it.ID)||(it.ID!=fi.ID)) return true;
  fi.found=it;
  return false;
}

function ngl_FindItemByID(id)
{
  var fi=new Object;
  fi.ID=id;
  fi.found=null;
  this.Scan(ngl_FindItemByIDCallback, null, fi);
  return fi.found;
}

function ngl_DoDropDown(edit)
{
  this.SetVisible(true);
  if(!ngVal(edit.Suggestion,false))
  {
    var it=edit.ListItem;
    if(typeof it==='undefined') {
      var txt=edit.GetText();
      it=this.FindItem(txt,(txt==='' ? 0 : 1));
    }
    this.DropDownOwnerListItem=it;
  }
}

function ngl_DoDropDownFinished(edit)
{
  if(!ngVal(edit.Suggestion,false))
  {
    var it=this.DropDownOwnerListItem;
    if(it) this.SetItemFocus(it);
    this.SetFocus();
  }
}

function ngl_SelectDropDownItem(it)
{
  var ddoli=ngVal(this.DropDownOwnerListItem,null);
  delete this.DropDownOwnerListItem;

  var dd=this.DropDownOwner;
  if(dd)
  {
    if(!ngVal(dd.ReadOnly,false))
    {
      it=ngVal(it,null);
      if(dd.DropDownType == ngeDropDownList) dd.ListItem = it;
      if((dd.OnListItemChanged)&&((ddoli===null)||(ddoli!=it))&&(!ngVal(dd.OnListItemChanged(dd,this,it,ddoli),false))) return false;
      var t='';
      if(it)
      {
        if(typeof it.Text === 'string') t=it.Text;
        else if((this.Columns.length>0)&&(typeof it.Text==='object')) t=it.Text[this.Columns[0]];
        if((ngVal(dd.Suggestion,false))&&(dd.OnSuggestionSetText))
        { 
          var undefined;
          t=dd.OnSuggestionSetText(t,it);
          if(t=='') t=undefined;
        }        
      }
      if(dd.OnListItemGetText) t=dd.OnListItemGetText(dd,this,it,t);      
      if((typeof t!=='undefined')&&(typeof dd.SetText === 'function')) dd.SetText(t);
    }
    if(dd.HideDropDown) dd.HideDropDown();
  }
  return true;
}

function ngl_SelectDropDownItemWithFocus(it)
{
  var ret=this.SelectDropDownItem(it);
  var dd=this.DropDownOwner;
  if((ret)&&(dd)) dd.SetFocus();
  return ret;
}

function ngl_GetClickInfo(e,elm,part)
{
  var ii={list: null, item: null };
  var pelm=elm;
  while(pelm)
  {
    if(ngVal(pelm.id,'')!='')
    {
      ii=ngl_ItemById(pelm.id);
      if(ii.item!==null) break;
      ii.list=null;
    }
    pelm=pelm.parentNode;
  }
  if(e.gesture)
  {
    var srce=e.gesture.srcEvent;
    if(srce) {
      e.altKey=srce.altKey;
      e.ctrlKey=srce.ctrlKey;
      e.shiftKey=srce.shiftKey;
    }
  }
  e.listObj=elm;
  e.listRowObj=pelm;
  e.listPart=part;
  e.listCol=-1;  
  e.Owner=ii.list;
  e.list=ii.list;
  e.listItem=ii.item;
  if((e.list)&&(e.listPart != 0)&&(e.list.Columns.length>0))
  {
    var td = e.listObj;
    while (td && (typeof td.cellIndex === 'undefined'))
      td = td.parentNode;
    if (td)
      e.listCol = td.cellIndex;
  }
}

function ngl_DoPtrStart(pi)
{
  var eid=pi.EventID;
  var eidp=eid.substr(0,4);
  if(eidp==='item')
  {  
    var cid=parseInt(eid.substring(4,eid.length));
    ngl_GetClickInfo(pi.StartEvent,pi.StartElement,cid);
    pi.SrcElement=pi.StartEvent.listRowObj;

    if(pi.Touch)
    {    
      ngl_EnterRow(pi.Event,pi.StartEvent.listRowObj,(this.OnEnterRow!=null)||(this.OnLeaveRow!=null));
    }
  }
}

function ngl_DoPtrDrag(pi)
{
  var eid=pi.EventID;
  var eidp=eid.substr(0,4);
  if(eidp==='item')
  {
    if(pi.Touch)
    { 
      if(!pi.IsInSrcElement()) 
      {      
        if(ngl_CurrentRowId==pi.StartEvent.listRowObj.id)
          ngl_LeaveRow(pi.Event,pi.StartEvent.listRowObj,(this.OnEnterRow!=null)||(this.OnLeaveRow!=null));
      }
      else
      {
        if(ngl_CurrentRowId!=pi.StartEvent.listRowObj.id)
          ngl_EnterRow(pi.Event,pi.StartEvent.listRowObj,(this.OnEnterRow!=null)||(this.OnLeaveRow!=null));
      }
    }
  }
  return false;
}

function ngl_DoGesture(pi)
{
  return ngc_HandleScrollGesture(this,pi,this.ContentElm);
}

function ngl_DoPtrEnd(pi)
{
  var eid=pi.EventID;
  var eidp=eid.substr(0,4);
  if(eidp==='item')
  {
    if(pi.Touch) 
    {
      if(pi.IsInSrcElement()) 
      {      
        if(ngl_CurrentRowId==pi.StartEvent.listRowObj.id)
          ngl_LeaveRow(pi.Event,pi.StartEvent.listRowObj,(this.OnEnterRow!=null)||(this.OnLeaveRow!=null));
      }
    }
  }
}

function ngl_DoPtrClick(pi)
{
  if((!this.MouseEvents)||(this.ReadOnly)) return;  

  if((typeof pi.ScrollTop!=='undefined')&&(Math.abs(pi.Y-pi.StartY)>10)) return;

  var eid=pi.EventID;
  var eidp=eid.substr(0,4);
  if(eidp==='item')
  {
    if((pi.EndTime-pi.StartTime>200)&&(!pi.IsInSrcElement())) return; 
    var e=pi.StartEvent;
    var cid=parseInt(eid.substring(4,eid.length));
    ngl_GetClickInfo(e,pi.StartElement,cid);
    this.ClickItem(e.listItem, e);
    if((eid!=='item0')&&(ng_inDOM(pi.StartElement))) 
    {
      // simulate old event bubbling
      ngl_GetClickInfo(e,pi.StartElement,0);
      this.ClickItem(e.listItem,e);

//      pi.EventID='item0';
//      this.DoPtrClick(pi); 
//      pi.EventID=eid;
    }
  }
  else if(eidp==='capt')
  {
    var e=pi.StartEvent;
    var cid=parseInt(eid.substring(4,eid.length));
    if(this.OnCaptionClick) this.OnCaptionClick(e,this,cid,this.StartElement);
  }
}

function ngl_DoPtrDblClick(pi)
{
  if((!this.MouseEvents)||(this.ReadOnly)) return;  
  var eid=pi.EventID;
  var eidp=eid.substr(0,4);
  if(eidp==='item')
  {
    if((pi.EndTime-pi.StartTime>=200)&&(!pi.IsInSrcElement())) return;
    var e=pi.StartEvent;  
    var cid=parseInt(eid.substring(4,eid.length));
    ngl_GetClickInfo(e,pi.StartElement,cid);
    if((!e.listItem)||(!ngVal(e.listItem.Enabled,true))) return;

    if((e.listItem.OnDblClick)&&(!ngVal(e.listItem.OnDblClick(e),false))) return;
    if((this.OnDblClick)&&(!ngVal(this.OnDblClick(e),false))) return;
    if((e.listPart==1)||(e.listPart==4)) this.ToggleCollapsed(e.listItem);
    if((this.OnDblClickItem)&&(e.listPart)) this.OnDblClickItem(e);    
    if(eid!=='item0') 
    {
      // simulate old event bubbling
      pi.EventID='item0';
      this.DoPtrDblClick(pi); 
      pi.EventID=eid;
    }
  }
  else if(eidp==='capt')
  {
    var e=pi.StartEvent;
    var cid=parseInt(eid.substring(4,eid.length));
    if(this.OnCaptionDblClick) this.OnCaptionDblClick(e,this,cid,this.StartElement);
  }
}

function ngl_ClickItem(it, e)
{
  if(typeof e === 'undefined') e=new Object;  
  if(e.list != this)
  {
    e.Owner = this;
    e.list = this;
    e.listItem = it;
    e.listObj=null;
    e.listRowObj=null;
    e.listPart=0;
    e.listCol=-1;
    this.ClickItem(it, e);
    e.listPart=1;
    e.listCol=(this.Columns.length>0 ? 0 : -1);
    e.listIgnoreSelect=false;
  }

  if((!e.list.Enabled)||(ngVal(e.list.ReadOnly,false))) return;
  if((!it)||(!ngVal(it.Enabled,true))) return;
  
  if(!e.listPart)
  {
    var delay=(new Date().getTime()) - this.ignore_select;
    if(delay<150) e.listIgnoreSelect=true;
    this.ignore_select=0;

    var action = this.GetItemAction(it);
    if((action)&&(!action.in_action_click))
    {
      action.Click(e);
      return;
    }
  }
  if((it.OnClick)&&(!ngVal(it.OnClick(e),false)))
  {
    if((e.listIgnoreSelect)&&(e.listPart)) this.ignore_select=new Date().getTime();
    return;
  }
  if((this.OnClick)&&(!ngVal(this.OnClick(e),false)))
  {
    if((e.listIgnoreSelect)&&(e.listPart)) this.ignore_select=new Date().getTime();
    return;
  }
  switch(e.listPart)
  {
    case 0:
    {
      if(e.listIgnoreSelect) break;
      if(this.DropDownOwner) this.SelectDropDownItemWithFocus(it); // Handle drop down
      else
      {
        // Handle select
        if(!this.SelectType) break;

        var shift,ctrl;
        try {
          shift=ngVal(e.shiftKey,false);
          ctrl=ngVal(e.ctrlKey,false);
        }
        catch(err) // fixes IE<=8 access event properties problems
        {
          shift=false;
          ctrl=false;
        }
        if((this.SelectType==1)||((this.SelectType==3)&&(!ctrl)&&(!shift))) // Single
          this.selected=new Array();
        if(((this.SelectType==2)||(this.SelectType==3))&&(shift)&&(this.last_selected!=''))
        {
          var s=!ngVal(this.selected[this.ItemId(it)],false);
          var lit=ngl_ItemById(this.ID+'_'+this.last_selected);
          if(lit.item)
          {
            var itms=new Array(lit.item);
            var si=lit.item;
            while((si=this.NextVisibleItem(si))!=null)
            {
              if(ngVal(si.Enabled,true)) itms[itms.length]=si;
              if(si==it) break;
            }
            if(!si)
            {
              si=lit.item;
              itms=new Array(lit.item);
              while((si=this.PrevVisibleItem(si))!=null)
              {
                if(ngVal(si.Enabled,true)) itms[itms.length]=si;
                if(si==it) break;
              }
            }
            if(si)
            {
              for(var i=0;i<itms.length;i++)
                if(s) this.selected[this.ItemId(itms[i])]=true;
                else delete this.selected[this.ItemId(itms[i])];
              this.SelectChanged();
              break;
            }
          }
        }
        else this.SelectItem(it,!ngVal(this.selected[this.ItemId(it)],false));
      }
      break;
    }
    case 2:
      if((this.ShowCheckboxes)||(typeof it.Checked !== 'undefined'))
      {
        if(typeof it.RadioGroup !== 'undefined') this.CheckItem(it,1);
        else
        {
          var s=ngVal(it.Checked,0);
          switch(s)
          {
            case 0:
            case false:
              if(ngVal(it.AllowGrayed,false)) s=2;
              else s=1;
              break;
            case 1:
            case true:
              s=0;
              break;
            default:
              s=1;
              break;
          }
          this.CheckItem(it,s);
        }
        e.listIgnoreSelect=true;
      }
      break;
    case 3:
      this.ToggleCollapsed(it);
      e.listIgnoreSelect=true;
      break;
  }
  if(e.listPart)
  {
    if(e.listIgnoreSelect)
    {
      this.ignore_select=new Date().getTime();
      if(this.OnClickItem) this.OnClickItem(e);
    }
  }
  else
    if((!e.listIgnoreSelect)&&(this.OnClickItem)) this.OnClickItem(e);
}

function ngl_DoMouseEnter(e, mi, elm)
{
  if(ngl_LeaveListTimer) clearTimeout(ngl_LeaveListTimer); ngl_LeaveListTimer=null;
  ngc_EnterBox(this.ID);
  if((mi)&&(mi.Object)&&(mi.Object!=this)) ngl_DoLeave(mi.Object.ID);
  if(this.OnMouseEnter) this.OnMouseEnter(this);
}

function ngl_DoLeave(lid)
{
  if(ngl_LeaveListTimer) clearTimeout(ngl_LeaveListTimer); ngl_LeaveListTimer=null;
  var l=ngGetControlById(lid, 'ngList');
  if(l)
  {
    var ii=ngl_ItemById(ngl_CurrentRowId);
    if(ii.list==l)
    {
      var o=document.getElementById(ngl_CurrentRowId);
      if(o) ngl_LeaveRow(false,o,(l.OnEnterRow!=null)||(l.OnLeaveRow!=null));
    }
    ngc_LeaveBox(lid);
    if(l.OnMouseLeave) l.OnMouseLeave(l);
  }
}

function ngl_DoMouseLeave(e)
{
  ngl_LeaveListTimer=setTimeout("ngl_DoLeave('"+this.ID+"');",100);
}

var ngl_LeaveRowTimer = null;
var ngl_LeaveRowElement = null;
var ngl_LeaveRowEnterLeave = false;

function ngl_EnterRow(e,elm,enterleave)
{
  if((!e)&&(e!==false)) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  var ts=new Date().getTime();
  if((e)&&(ts<ngl_FocusTime+200)) return;

  if(ngl_LeaveRowTimer)
  {
    clearTimeout(ngl_LeaveRowTimer);
    ngl_LeaveRowTimer=null;
    if((ngl_LeaveRowElement)&&(ngl_LeaveRowElement.id==elm.id))
    {
      ngl_LeaveRowElement=null;
      return;
    }
    ngl_DoLeaveRow();
  }

  var cn=elm.className;
  if(ngl_CurrentRowId!='')
  {
    var o=document.getElementById(ngl_CurrentRowId);
    ngl_LeaveRow(e,o,enterleave);
  }
  ngl_CurrentRowId=elm.id;
  var i=cn.indexOf('_Focus');
  if(i<0) cn=cn+'_Focus';
  elm.className=cn;
  ngc_EnterImg(elm.id+'C');
  ngc_EnterImg(elm.id+'T');
  ngc_EnterImg(elm.id+'I');

  if(enterleave)
  {
    var ii=ngl_ItemById(elm.id);
    if((ii.list)&&(ii.list.OnEnterRow)) ii.list.OnEnterRow(ii.list, ii.item, elm.id);
  }
}

function ngl_LeaveRow(e,elm,enterleave)
{
  if((!e)&&(e!==false)) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  if(!elm) return;
  var ts=new Date().getTime();
  if((e)&&(ts<ngl_FocusTime+200)) return;

  if(ngl_LeaveRowTimer)
  {
    clearTimeout(ngl_LeaveRowTimer);
    ngl_LeaveRowTimer=null;
    if((ngl_LeaveRowElement)&&(ngl_LeaveRowElement.id!=elm.id))
    {
      ngl_DoLeaveRow();
    }
  }
  ngl_LeaveRowElement = elm;
  ngl_LeaveRowEnterLeave = enterleave;
  if(e) ngl_LeaveRowTimer = setTimeout("ngl_DoLeaveRow()",50);
  else ngl_DoLeaveRow();
}

function ngl_DoLeaveRow()
{
  if(ngl_LeaveRowTimer) clearTimeout(ngl_LeaveRowTimer);
  ngl_LeaveRowTimer=null;

  var elm=ngl_LeaveRowElement;
  var enterleave=ngl_LeaveRowEnterLeave;

  ngl_LeaveRowElement=null;
  if(!elm) return;

  var cn=elm.className;
  if(ngl_CurrentRowId==elm.id) ngl_CurrentRowId='';
  var i=cn.indexOf('_Focus');
  if(i>=0) cn=cn.substring(0,i);
  elm.className=cn;
  ngc_LeaveImg(elm.id+'C');
  ngc_LeaveImg(elm.id+'T');
  ngc_LeaveImg(elm.id+'I');

  if(enterleave)
  {
    var ii=ngl_ItemById(elm.id);
    if((ii.list)&&(ii.list.OnLeaveRow)) ii.list.OnLeaveRow(ii.list, ii.item, elm.id);
  }
}

function ngl_FirstVisibleItem(it,enabledonly)
{
  var list=it;
  if((typeof list === 'undefined')||(list===null)) list=this;

  if((typeof list.Items !== 'undefined')&&(list.Items.length>0))
  {
    for(var pi,i=0;i<list.Items.length;i++)
    {
      pi=list.Items[i];
      if(typeof pi === 'undefined') pi=new Object;
      if((ngVal(pi.Visible,true))&&((!enabledonly)||(ngVal(pi.Enabled,true))))
      {
        if(document.getElementById(this.ID+'_'+this.ItemId(pi))) return pi;
      }
      if((!ngVal(pi.Collapsed,false))&&(typeof pi.Items !== 'undefined')&&(pi.Items.length>0))
      {
        var p=this.FirstVisibleItem(pi,enabledonly);
        if(p) return p;
      }
    }
  }
  return null;
}

function ngl_LastVisibleItem(it,enabledonly)
{
  var list=it;
  if((typeof list === 'undefined')||(list===null)) list=this;

  if((typeof list.Items !== 'undefined')&&(list.Items.length>0))
  {
    for(var pi,i=list.Items.length-1;i>=0;i--)
    {
      pi=list.Items[i];
      if(typeof pi === 'undefined') pi=new Object;
      if((!ngVal(pi.Collapsed,false))&&(typeof pi.Items !== 'undefined')&&(pi.Items.length>0))
      {
        var p=this.LastVisibleItem(pi,enabledonly);
        if(p) return p;
      }
      if((ngVal(pi.Visible,true))&&((!enabledonly)||(ngVal(pi.Enabled,true))))
      {
        if(document.getElementById(this.ID+'_'+this.ItemId(pi))) return pi;
      }
    }
  }
  return null;
}

function ngl_NextVisibleItem(it,subitems,enabledonly)
{
  if(!it) return this.FirstVisibleItem(it,enabledonly);
  var parent = ngVal(it.Parent, null);
  if(!parent) parent=this;
  var i,pi;
  var curvisible=false;
  if((ngVal(it.Visible,true))&&((!enabledonly)||(ngVal(it.Enabled,true))))
  {
    if(document.getElementById(this.ID+'_'+this.ItemId(it))) curvisible=true;
  }
  for(i=0;i<parent.Items.length;i++)
  {
    pi=parent.Items[i];
    if(pi==it)
    {
      if((ngVal(subitems,true))&&(!ngVal(it.Collapsed,false)))
      {
        pi=this.FirstVisibleItem(it,enabledonly);
        if(pi)
        {
          if(document.getElementById(this.ID+'_'+this.ItemId(pi))) return pi;
        }
      }
      for(i++;i<parent.Items.length;i++)
      {
        pi=parent.Items[i];
        if(typeof pi === 'undefined') pi=new Object;
        if((ngVal(pi.Visible,true))&&((!enabledonly)||(ngVal(pi.Enabled,true))))
        {
          if(document.getElementById(this.ID+'_'+this.ItemId(pi))) return pi;
        }
        if(!ngVal(pi.Collapsed,false))
        {
          var p=this.FirstVisibleItem(pi,enabledonly);
          if(p) return p;
        }
      }
      return(parent == this ? (curvisible ? null : this.FirstVisibleItem(null,enabledonly)) : this.NextVisibleItem(parent,false,enabledonly));
    }
  }
  return (curvisible ? null : this.FirstVisibleItem(null,enabledonly));
}

function ngl_PrevVisibleItem(it,subitems,enabledonly)
{
  if(!it) return this.LastVisibleItem(it,enabledonly);
  var parent = ngVal(it.Parent, null);
  if(!parent) parent=this;
  var i,pi;
  var curvisible=false;
  if((ngVal(it.Visible,true))&&((!enabledonly)||(ngVal(it.Enabled,true))))
  {
    if(document.getElementById(this.ID+'_'+this.ItemId(it))) curvisible=true;
  }
  for(i=parent.Items.length-1;i>=0;i--)
  {
    pi=parent.Items[i];
    if(pi==it)
    {
      for(i--;i>=0;i--)
      {
        pi=parent.Items[i];
        if(typeof pi === 'undefined') pi=new Object;
        if(!ngVal(pi.Collapsed,false))
        {
          var p=this.LastVisibleItem(pi,enabledonly);
          if(p) return p;
        }
        if((ngVal(pi.Visible,true))&&((!enabledonly)||(ngVal(pi.Enabled,true))))
        {
          if(document.getElementById(this.ID+'_'+this.ItemId(pi))) return pi;
        }
      }
      if(parent==this) return (curvisible ? null : this.LastVisibleItem(null,enabledonly));
      if((ngVal(parent.Visible,true))&&((!enabledonly)||(ngVal(parent.Enabled,true))))
      {
        if(document.getElementById(this.ID+'_'+this.ItemId(parent))) return parent;
      }
      return this.PrevVisibleItem(parent,enabledonly);
    }
  }
  return (curvisible ? null : this.LastVisibleItem(null,enabledonly)); //return null;
}

function ngl_KeyDown(e)
{
  if(!e) e=window.event;
  ngl_FocusTime=new Date().getTime();
  var l=ngGetControlById(this.id, 'ngList');
  if((l)&&(l.Enabled)&&(l.KeyEvents)&&(!l.ReadOnly))
  {
    e.Owner=l;
    if((l.OnKeyDown)&&(!ngVal(l.OnKeyDown(e),false))) return false;
    var ieKey=e.keyCode;

    var edit=this.DropDownOwner;
    if((edit)&&(ngVal(edit.Suggestion,false))) // Suggestion keys
    {
      switch(ieKey)
      {
        case 33: // PgUp
        case 34: // PgDown
        case 38: // Up
        case 35: // End
        case 36: // Home
        case 40: // Down
          ieKey=0;
          break;
      }
      edit.SetFocus();
    }
    switch(ieKey)
    {
      case 9:  // Tab
        if(!l.DropDownOwner) break;
        if(e.preventDefault) e.preventDefault();
        e.returnValue = false;
      case 27: // Esc
        var e=l.DropDownOwner;
        if(e)
        {
          if(e.HideDropDown) e.HideDropDown();
          e.SetFocus();
        }
        break;
      case 33: // PgUp
      case 34: // PgDown
      case 38: // Up
      case 35: // End
      case 36: // Home
      case 40: // Down
      {
        var ii=ngl_ItemById(ngl_CurrentRowId);
        if(ii.list!=l)
        {
          ii.list=l;
          ii.item=null;
        }
        switch(ieKey)
        {
          case 40: ii.item=l.NextVisibleItem(ii.item,true,true); break; // Down
          case 38: ii.item=l.PrevVisibleItem(ii.item,true,true); break; // Up
          case 36: ii.item=l.FirstVisibleItem(null,true); break; // Home
          case 35: ii.item=l.LastVisibleItem(null,true); break; // End
          case 33: // PgUp
          {
            var ni;
            for(var i=0;i<l.PageSize;i++)
            {
              ni=l.PrevVisibleItem(ii.item,true,true);
              if(!ni) break;
              ii.item=ni;
            }
            break;
          }
          case 34: // PgDown
          {
            var ni;
            for(var i=0;i<l.PageSize;i++)
            {
              ni=l.NextVisibleItem(ii.item,true,true);
              if(!ni) break;
              ii.item=ni;
            }
            break;
          }
        }
        if(ii.item)
        {
          l.SetItemFocus(ii.item);
          var nrid=l.ID+'_'+l.ItemId(ii.item);
        }
        return false;
      }
      case 37: // Left
      {
        var ii=ngl_ItemById(ngl_CurrentRowId);
        if(ii.list!=l)
        {
          ii.list=l;
          ii.item=null;
        }
        if((ii.item)&&(typeof ii.item.Items !== 'undefined')&&(ii.item.Items.length>0))
        {
          l.Collapse(ii.item);
        }
        break;
      }
      case 39: // Right
      {
        var ii=ngl_ItemById(ngl_CurrentRowId);
        if(ii.list!=l)
        {
          ii.list=l;
          ii.item=null;
        }
        if((ii.item)&&(typeof ii.item.Items !== 'undefined')&&(ii.item.Items.length>0))
        {
          l.Expand(ii.item);
        }
        break;
      }
      case 32: // Spacebar
      case 13: // Enter
        var o=document.getElementById(ngl_CurrentRowId);
        if(o)
        {
          ngl_GetClickInfo(e,o,(ieKey == 32 ? 2 : 1));
          l.ClickItem(e.listItem, e);
          // simulate event bubbling
          ngl_GetClickInfo(e,o,0);
          l.ClickItem(e.listItem, e);
        }
        return false;
    }
  }
}

function ngl_KeyUp(e)
{
  if(!e) e=window.event;
  var l=ngGetControlById(this.id, 'ngList');
  if((l)&&(l.Enabled)&&(l.KeyEvents)&&(!l.ReadOnly))
  {
    e.Owner=l;
    if((l.OnKeyUp)&&(!ngVal(l.OnKeyUp(e),false))) return false;
  }
}

function ngl_CheckImgDrawProps(id, s, enabled,o)
{
  var v=ngc_ImgProps(id,s,enabled,o);
  if(ngl_CurrentRowId==id.substring(0,id.length-1)) { v.aL=v.oL; v.aT=v.oT; }
  else { v.aL=v.L; v.aT=v.T; }
  return v;
}

function ngl_TreeImgDrawProps(id, s, enabled, o)
{
  var v=ngc_ImgProps(id,s,enabled,o);
  if(ngl_CurrentRowId==id.substring(0,id.length-1)) { v.aL=v.oL; v.aT=v.oT; }
  else { v.aL=v.L; v.aT=v.T; }
  return v;
}

function ngl_ItemImgDrawProps(id, enabled, o)
{
  var v=ngc_ImgDrawProps(id,'', '',0,enabled,o);
  if(ngl_CurrentRowId==id.substring(0,id.length-1)) { v.aL=v.oL; v.aT=v.oT; }
  else { v.aL=v.L; v.aT=v.T; }
  return v;
}

function ngl_CreateImage(html, dp, image, clickid, il, hasdblclick)
{
  ngc_Img(html,dp,"position:absolute; margin-left: "+ngVal(image.x,il)+"px;",' '+ngc_PtrEventsHTML(this,'item'+clickid,'tap drag'+(hasdblclick ? ' doubletap' : ''))+' '+ngVal(image.Attrs,''));
}

function ngl_ActionSetItemVisible(state, data)
{
  if(data) this.SetItemVisible(data, state);
}

function ngl_ActionItemCheck(state, data)
{
  if(data) this.CheckItem(data, state);
}

function ngl_ActionItemClick(e, data)
{
  if(data) this.ClickItem(data, e);
}

function ngl_DoActionUpdate(cid)
{
  var c=ngGetControlById(cid);
  if(!c) return;
  if(c.ActionUpdateTimer) clearTimeout(c.ActionUpdateTimer); c.ActionUpdateTimer = null;
  c.Update();
}

function ngl_ActionItemUpdate(data)
{
  if(this.ActionUpdateTimer) clearTimeout(this.ActionUpdateTimer);
  this.ActionUpdateTimer = setTimeout("ngl_DoActionUpdate('"+this.ID+"')",100);
}

function ngl_SetItemAction(it, ac)
{
  if(!it) return null;

  if(typeof ac === 'string')
  {
    ac=ngGetControlById(ac);
    if(!ac) return null;
  }
  ac=ngVal(ac,null);

  var oac=ngVal(it.Action,null);
  if(oac == ac) return ac;

  if((oac)&&(oac.RemoveControl)) oac.RemoveControl(this, it);
  it.Action=ac;
  if((ac)&&(ac.AddControl)) ac.AddControl(this, it);
  this.SyncItemAction(it);
  return ac;
}

function ngl_GetItemAction(it)
{
  if(!it) return null;
  var ac=ngVal(it.Action,null);
  if(typeof ac === 'string') ac=this.SetItemAction(it,ac);
  return ac;
}

function ngl_SyncItemAction(it, action)
{
  if(!it) return null;
  if(typeof action === 'undefined') action = this.GetItemAction(it);
  if(action)
  {
    it.Visible = action.Visible;
    it.Enabled = action.Enabled;
    it.Checked = action.Checked;
    it.Image = action.GetImg();
    if(this.Columns.length>0) it.Text[this.Columns[0].ID] = action.GetText();
    else it.Text = action.GetText();
    it.Alt = action.GetAlt();
  }
}

function ngl_DrawItemText(html, it, id, level)
{
  if((this.OnDrawItemText)&&(!ngVal(this.OnDrawItemText(this, html, it, id, level),false))) return;

  var text,alt,emptytext;
  var state=ngVal(it.Checked,0);
  var itenabled=ngVal(it.Enabled,true);
  var selected=ngVal(this.selected[id],false);
  if(selected)  this.draw_selected[id]=true;
  var enterleave=((this.OnEnterRow!=null)||(this.OnLeaveRow!=null));
  var hasdblclick=(this.OnDblClick)||(it.OnDblClick);
  var hasdblclickitem=(hasdblclick) || (this.OnDblClickItem);
  var hastoggle=((it.Items)&&((it.Items.length>0)||(typeof it.Collapsed !== 'undefined')));
  var cclass=this.BaseClassName;
  
  var rowevents=' '+ngc_PtrEventsHTML(this,'item0','tap drag'+(hasdblclick ? ' doubletap' : ''))+' onmouseover="ngl_EnterRow(event,this,'+(enterleave ? '1' : '0')+');" onmouseout="ngl_LeaveRow(event,this,'+(enterleave ? '1' : '0')+');"';
  var textevents=' '+ngc_PtrEventsHTML(this,'item1','tap drag'+(hasdblclickitem || hastoggle ? ' doubletap' : ''));
  var indent=this.ListIndent;
  var minheight=ngVal(it.MinHeight,this.MinItemHeight);
  minheight=ngVal(minheight,0);
  var height;
  if(this.OnMeasureItem) height=this.OnMeasureItem(this, it, id, level);
  if(typeof height==='undefined') height=it.H;
  if(typeof height==='undefined') height=this.ItemHeight;

  if(this.OnCalcIndent) indent+=this.OnCalcIndent(this, it, id, level);
  else
  {
    if((typeof this.Indent === 'object')&&(this.Indent)&&(this.Indent.length>0))
    {
      var cnt=this.Indent.length;
      if(level>=cnt) indent+=this.Indent[cnt-1]+(level-cnt+1)*this.DefaultIndent;
      else indent+=this.Indent[level];
    }
    else indent+=level*(this.Indent ? this.Indent : this.DefaultIndent);
  }

  var images=null,image,il=0;
  if(this.OnGetItemImg) image=this.OnGetItemImg(this, it, id, level);
  else image=ngVal(it.Image,this.ItemImg);
  if(image)
  {
    if(typeof image.x === 'undefined') il-=ngVal(image.sx, image.W);
    if(!images) images=new ngStringBuilder;
    if(image.H>minheight) minheight=image.H;
    ngl_CreateImage(images, ngl_ItemImgDrawProps(this.ID+'_'+id+'I', (this.Enabled)&&(itenabled), image), image, 4, il, hasdblclickitem || hastoggle);
  }
  if(this.OnGetCheckImg) image=this.OnGetCheckImg(this, it, id);
  else image=(typeof it.Checked === 'undefined' && (!this.ShowCheckboxes) ? null : this.CheckImg);
  if(image)
  {
    if(typeof image.x === 'undefined') il-=ngVal(image.sx, image.W);
    if(!images) images=new ngStringBuilder;
    if(image.H>minheight) minheight=image.H;
    ngl_CreateImage(images, ngl_CheckImgDrawProps(this.ID+'_'+id+'C', state, (this.Enabled)&&(itenabled), image), image, 2, il, hasdblclickitem);
  }
  if((typeof it.Collapsed !== 'undefined')||(typeof it.Items !== 'undefined')&&(it.Items.length>0))
  {
    if(this.OnGetTreeImg) image=this.OnGetTreeImg(this, it, id);
    else image=this.TreeImg;
    if(image)
    {
      if(typeof image.x === 'undefined') il-=ngVal(image.sx, image.W);
      if(!images) images=new ngStringBuilder;
      if(image.H>minheight) minheight=image.H;
      ngl_CreateImage(images, ngl_TreeImgDrawProps(this.ID+'_'+id+'T', ngVal(it.Collapsed,false), (this.Enabled)&&(itenabled), image), image, 3, il, hasdblclickitem);
    }
  }

  if(typeof height!=='undefined') minheight=-1;
  if(this.Columns.length>0)
  {
    var col;
    html.append('<tr class="'+this.GetRowClassName(it, selected, id)+'" '+(ngVal(it.Visible,true) ? '' : 'style="display:none;" ')+'id="'+this.ID+'_'+id+'"'+rowevents+'>');
    for(var i=0;i<this.Columns.length;i++)
    {
      col=this.Columns[i];
      html.append('<td valign="'+ngVal(col.VAlign,'top')+'" align="'+col.Align+'"'+(minheight>0 ? ' height="'+minheight+'"' : '')+'>');
      if(this.OnGetAlt) alt=ngVal(this.OnGetAlt(this, it, col),'');
      else
      {
        if(typeof it.Alt === 'string') alt=it.Alt;
        else alt=(typeof it.Alt === 'object' ? ngVal(it.Alt[col.ID],'') : '');
      }

      if(!i)
      {
        html.append('<div ');
        if(alt!='') html.append('title="'+ng_htmlEncode(alt)+'" ');
        html.append('style="padding-left: '+indent+'px;'+(typeof height!=='undefined' ? 'height:'+height+'px;' : '')+'">');
        html.append(images);
      }
      if(this.OnGetText)
      {
        text=ngVal(this.OnGetText(this, it, col),'');
        if(this.HTMLEncode) text=ng_htmlEncode(text,true);
      }
      else
      {
        text=(typeof it.Text==='object' ? ngVal(it.Text[col.ID],'') : '');
        if(this.HTMLEncode) text=ng_htmlEncode(text,true);
      }
      emptytext=(text=='');
      if(emptytext) text='<div style="width:0px;position:relative;overflow:hidden;">&nbsp;</div>'; // text padding

      if((typeof it.ControlsHolder !== 'undefined')&&(typeof it.ControlsHolder[col.ID] !== 'undefined'))
      {
        if(!emptytext)
        {
          html.append('<div class="'+cclass+'Text"'+textevents);
          if((i)&&(alt!='')) html.append(' title="'+ng_htmlEncode(alt)+'"');
          html.append('>'+text+'</div>');
        }
        html.append('<div style="position:relative;height:1px;">');
        html.append(it.ControlsHolder[col.ID].innerHTML);
        html.append('</div>');
      }
      else
      {
        html.append('<div class="'+cclass+'Text"'+textevents);
        if((i)&&(alt!='')) html.append(' title="'+ng_htmlEncode(alt)+'"');
        html.append('>'+text+'</div>');
      }

      if(!i) html.append('</div>');
      html.append('</td>');
    }
    html.append('</tr>');
  }
  else
  {
    if(this.OnGetText)
    {
      text=ngVal(this.OnGetText(this, it),'');
      if(this.HTMLEncode) text=ng_htmlEncode(text,true);
    }
    else
    {
      text=ngVal(it.Text,'');
      if(this.HTMLEncode) text=ng_htmlEncode(text,true);
    }
    emptytext=(text=='');
    if(emptytext) text='<div style="width:0px;position:relative;overflow:hidden;">&nbsp;</div>'; // text padding

    if(this.OnGetAlt) alt=ngVal(this.OnGetAlt(this, itl),'');
    else alt=ngVal(it.Alt,'');

    html.append('<div class="'+this.GetRowClassName(it, selected, id)+'" ');
    if(alt!='') html.append('title="'+ng_htmlEncode(alt)+'" ');
    var style=(typeof height!=='undefined' ? 'height:'+height+'px;' : '')+(ngVal(it.Visible,true) ? '' : 'display:none;');
    if(style!='') style=' style="'+style+'"';
    html.append('id="'+this.ID+'_'+id+'"'+style+rowevents+'>');
    html.append('<div style="position:relative;padding-left: '+indent+'px;">');

    if(minheight>0) html.append('<div style="float:left;width:0px;height:'+minheight+'px;"></div>');
    if(images) html.append(images);

    if(typeof it.ControlsHolder !== 'undefined')
    {
      if(!emptytext) html.append('<div class="'+cclass+'Text" style="position:relative;"'+textevents+'>'+text+'</div>'); // pos:relative - IE6 background-color fix
      html.append('<div style="position:relative;height:1px;">');
      html.append(it.ControlsHolder.innerHTML);
      html.append('</div>');
    } else html.append('<div class="'+cclass+'Text" style="position:relative;"'+textevents+'>'+text+'</div>'); // pos:relative - IE6 background-color fix

    if(minheight>0) html.append('<div style="clear:both;height:0px;overflow:hidden;"></div>');
    html.append('</div></div>');
  }
}

function ngl_DrawItem(html, it, id, level,pcollapsed)
{
  if(typeof it === 'undefined') it=new Object;

  var action = this.GetItemAction(it);
  this.SyncItemAction(it,action);

  var state=ngVal(it.Checked,0);
  var ret={l:level, s: state};

  if(action) action.CheckRadioGroup();
  else
    if((typeof it.RadioGroup !== 'undefined')&&(state)&&(this.radio_groups[it.RadioGroup]!=it))
    {
      var uncheck=this.radio_groups[it.RadioGroup];
      this.radio_groups[it.RadioGroup]=it;
      if(uncheck) this.CheckItem(uncheck,0);
    }

  if((this.OnDrawItem)&&(!ngVal(this.OnDrawItem(this, ret, html, it, id, level, pcollapsed),false))) return ret;

  var shtml,checkgroup=ngVal(it.CheckGroup,false);
  if(checkgroup) shtml=new ngStringBuilder;
  else
  {
    shtml=html;
    this.DrawItemText(html,it,id,level);
  }
  if(this.Columns.length>0)
  {
    var collapsed=(pcollapsed)||(ngVal(it.Collapsed,false));
    if((typeof it.Items !== 'undefined')&&(it.Items.length>0))
    {
      if(level>0) shtml.append('</tbody>');
      shtml.append('<tbody id="'+this.ID+'_G'+id+'_0"'+(collapsed ? ' style="display:none;"' : '')+'>');
      var l,lvl=level;
      var gstate;
      for(var i=0;i<it.Items.length;i++)
      {
        l=this.DrawItem(shtml,it.Items[i], id+'_'+i, level+1,collapsed);
        lvl=l.l;
        if((this.ShowCheckboxes)||(typeof it.Items[i].Checked!=='undefined'))
        {
          if(typeof gstate==='undefined') gstate=l.s;
          else if(l.s!=gstate) gstate=2;
        }
        if(lvl>level+1)
        {
          shtml.append('</tbody>');
          if((i+1)<it.Items.length)
          {
            shtml.append('<tbody id="'+this.ID+'_G'+id+'_'+(i+1)+'"'+(collapsed ? ' style="display:none;"' : '')+'>');
          }
        }
        if((checkgroup)&&(typeof gstate!=='undefined')) { it.Checked=gstate; ret.s=gstate; }
      }
      ret.l=lvl;
    }
  }
  else
  {
    if((typeof it.Items !== 'undefined')&&(it.Items.length>0))
    {
      shtml.append('<div id="'+this.ID+'_G'+id+'" level="'+level+'" style="display:'+(ngVal(it.Collapsed,false) ? 'none' : 'block')+';">');
      var l,gstate;
      for(var i=0;i<it.Items.length;i++)
      {
        l=this.DrawItem(shtml,it.Items[i], id+'_'+i, level+1);
        if((this.ShowCheckboxes)||(typeof it.Items[i].Checked!=='undefined'))
        {
          if(typeof gstate==='undefined') gstate=l.s;
          else if(l.s!=gstate) gstate=2;
        }
      }
      shtml.append('</div>');
      if((checkgroup)&&(typeof gstate!=='undefined')) { it.Checked=gstate; ret.s=gstate; }
    }
  }
  if(checkgroup)
  {
     this.DrawItemText(html,it,id,level);
     html.append(shtml);
     delete shtml;
  }
  return ret;
}

function ngl_CalcIndent()
{
  var id,indent,image,maxindent=0,it=null;

  for(var i=0;(i<this.Items.length)||(!i);i++)
  {
    if(this.Items.length>0) it=this.Items[i];
    if(!it) it=new ngListItem(':MeasureImg:');

    indent=0;
    if((this.OnGetItemImg)||(this.OnGetCheckImg)||(this.OnGetTreeImg)) id=this.ItemId(it);
    if(this.OnGetItemImg) image=this.OnGetItemImg(this, it, id, 0);
    else
    {
      this.SyncItemAction(it);
      image=ngVal(it.Image,this.ItemImg);
    }
    if(image) indent+=ngVal(image.W,0);

    if(this.OnGetCheckImg) image=this.OnGetCheckImg(this, it, id);
    else image=(typeof it.Checked === 'undefined' && (!this.ShowCheckboxes) ? null : this.CheckImg);
    if(image) indent+=ngVal(image.W,0);

    if(this.OnGetTreeImg) image=this.OnGetTreeImg(this, it, id);
    else image=this.TreeImg;
    if(image) indent+=ngVal(image.W,0);

    if(indent>maxindent) maxindent=indent;
  }
  if(typeof this.ListIndent === 'undefined') this.ListIndent=maxindent;
  if(typeof this.DefaultIndent === 'undefined') this.DefaultIndent=maxindent;
}

function ngl_DoUpdate(o)
{
  if((this.update_cnt>0)||(this.ID=='')) { this.need_update=true; return; }
  this.need_update=false;

  if(this.ActionUpdateTimer) clearTimeout(this.ActionUpdateTimer); this.ActionUpdateTimer=null;

  // Calculate indent
  if((typeof this.ListIndent === 'undefined')||(typeof this.DefaultIndent === 'undefined'))
  {
    this.CalcIndent();
  }

  var cclass=this.BaseClassName;
  var html=new ngStringBuilder;
  this.draw_selected = new Array();

  var hascolumns=(this.Columns.length>0);
  if(hascolumns)
  {
    var text,hascaptions=false,captions=new Array();
    var width100=-1;
    var d,md=this.Columns.length;
    var col,cl2=this.Columns.length/2;
    for(var i=0;i<this.Columns.length;i++)
    {
      col=this.Columns[i];
      if(typeof col.Width === 'undefined')
      {
        d=Math.abs(cl2-i);
        if(d<md)
        {
          md=d;
          width100=i;
        }
      }
      if(this.OnGetColumnCaption) text=ngVal(this.OnGetColumnCaption(this, col, i),'');
      else text=ngVal(col.Caption,'');
      captions[i]=text;
      if(text!='') hascaptions=true;
    }
  }
  var hasframe=(!ng_EmptyVar(this.Frame));
  var showheader=(hascolumns && hascaptions && ngVal(this.ShowHeader,true));
  var embed=this.HasEmbededContent=(hasframe)||(showheader);
  var scroll=0;
  if(embed)
  {
    var cb=document.getElementById(this.ID+'_CB');
    if(cb) scroll=cb.scrollTop;
    ng_SetScrollBars(o, ssNone);
    
    var w,h;
    if((typeof this.Bounds.W==='undefined')&&((typeof this.Bounds.L==='undefined')||(typeof this.Bounds.R==='undefined')))
    {
      if(o.style.width=='0px') w='0px';      
      else {
        w=ng_StyleWidth(o);
        if(!w) w='auto';
        else w+='px';
      }
    }
    else
    {
      w=ng_ClientWidth(o);
      w-=ng_GetCurrentStylePx(o,'padding-left') + ng_GetCurrentStylePx(o,'padding-right');
      w+='px';
    }
    if((typeof this.Bounds.H==='undefined')&&((typeof this.Bounds.T==='undefined')||(typeof this.Bounds.B==='undefined')))
    {
      if(o.style.height=='0px') h='0px';      
      else {
        h=ng_StyleHeight(o);
        if(!h) h='auto';
        else h+='px';
      }
    }
    else
    {
      h=ng_ClientHeight(o);
      h-=ng_GetCurrentStylePx(o,'padding-bottom') + ng_GetCurrentStylePx(o,'padding-top');
      h+='px';
    }

    html.append('<div id="'+this.ID+'_F" style="position: absolute;left:0px;top:0px;z-index:800;"></div>');
    html.append('<div id="'+this.ID+'_CB" class="'+cclass+'Back" style="position:relative;left:0px;top:0px;width:'+w+';height:'+h+';');
    switch((w=='auto')&&(h=='auto') ? ssNone : ngVal(this.ScrollBars, ssNone))
    {
      case ssNone:       html.append('overflow:hidden;overflowX:hidden;overflowY:hidden;'); break;
      case ssAuto:       html.append('overflow:auto;  overflowX:auto;  overflowY:auto;');   break;
      case ssBoth:       html.append('overflow:scroll;overflowX:scroll;overflowY:scroll;'); break;
      case ssHorizontal: html.append('overflow:scroll;overflowX:scroll;overflowY:hidden;'); break;  
      case ssVertical:   html.append('overflow:scroll;overflowX:hidden;overflowY:scroll;'); break;
      case ssDefault:    html.append('overflow:visible;overflowX:visible;overflowY:visible;'); break;
    }
    html.append('">');
  } 
  else scroll=o.scrollTop;

  if(hascolumns)
  {
    html.append('<table id="'+this.ID+'_TB" cellspacing="0" cellpadding="0" border="0" style="position:relative;left:0px;right:0px;overflow:hidden;">');

    function th_append(s)
    {
      if(showheader) thead.append(s);
      html.append(s);
    }
    
    var thead=(showheader ? new ngStringBuilder : html);
    var col,text;
    th_append('<thead>');
    th_append('<tr>');
    var cw;
    for(var i=0;i<this.Columns.length;i++)
    {
      col=this.Columns[i];
      th_append('<td');
      if(i==width100) th_append(' width="'+(this.Columns.length==1 ? 1 : 100)+'%"'); // strange fix, 100% will not work if one column
      th_append(' align="'+col.Align+'"');
      if(!showheader) html.append(' style="visibility: hidden"');
      th_append('>');
      if(this.OnGetColumnWidth) cw=this.OnGetColumnWidth(this, col, i, captions[i]);
      else cw=col.Width;
      th_append('<div style="position:relative; font-size:0px; line-height:0px; height:0px; width:'+(typeof cw==='undefined' ? 0 : cw)+'px"></div>');
      if(showheader)
      {
        text=captions[i];
        if(text=='') text='<div style="width:0px;position:relative;overflow:hidden;">&nbsp;</div>'; // text padding
        th_append('<div class="'+cclass+'Caption"');
        thead.append(' id="'+this.ID+'_H'+i+'" '+ngc_PtrEventsHTML(this,'capt'+i,'tap drag'+(this.OnCaptionDblClick ? ' doubletap' : '')));
        th_append('>');
        th_append(text);
        th_append('</div></td>');
      }
    }
    th_append('</tr>');
    th_append('</thead>');
  }
  var l;
  for(var i=0;i<this.Items.length;i++)
  {
    l=this.DrawItem(html, this.Items[i], i, 0, false);
    if(l.l>0) html.append('</tbody>');

    if(typeof this.next_draw_itemidx === 'undefined') continue;
    if(this.next_draw_itemidx>i) i=this.next_draw_itemidx-1;
    delete this.next_draw_itemidx;
  }
  if(hascolumns)
  {
    html.append('</table>');
  }
  if(embed)
  {
    html.append('</div>');
  }
  if(showheader)
  {
    html.append('<div id="'+this.ID+'_FH" class="'+this.BaseClassName+'Header" style="position:absolute;left:'+ng_GetCurrentStylePx(o,'padding-left')+'px;top:'+ng_GetCurrentStylePx(o,'padding-top')+'px;z-index:100;overflow:hidden; background-color: inherit;">');
    html.append('<table id="'+this.ID+'_TH" cellspacing="0" cellpadding="0" border="0" style="overflow:hidden;">');
    html.append(thead);
    html.append('</table>');
    html.append('</div>');
  }    
  ng_SetInnerHTML(o,html.toString());
  var cb;
  if(embed)
  {
    cb=this.ContentElm=document.getElementById(this.ID+'_CB');
  }
  else 
  {
    cb=null
    this.ContentElm=o;
  }
  
  if(showheader)
  {
    this.UpdateColumns();
  }

  if(typeof this.ItemsControls !== 'undefined')
  {
    var cc;
    for(var i=0;i<this.ItemsControls.length;i++)
    {
      cc=this.ItemsControls[i];
      cc.SetBounds();
      cc.Update();
    }
  }

  if(embed)
  {
    if(hasframe)
    {
      var f=document.getElementById(this.ID+'_F');
      if(f)
      {
        var w=ng_ClientWidth(o);
        var h=ng_ClientHeight(o);
     
        var frame=new ngStringBuilder;
        ngc_ImgBox(frame, this.ID, 'ngList', (this.ControlHasFocus ? 1 : 0), this.Enabled, 0,0,w,h,false, this.Frame);
        ng_SetInnerHTML(f,frame.toString());    
      }
    }
    var self=this;
    var fhdr=(showheader ? document.getElementById(this.ID+'_FH') : null);
    if(cb) cb.onscroll = function(e) {
      if(fhdr) fhdr.scrollLeft=cb.scrollLeft;
      if(self.OnScroll)
      {
        self.OnScroll(self,e,cb);
      }
    }    
  }
  try {
    this.ContentElm.scrollTop=scroll;
  }
  catch(e) { }

  return true;
}

function ngl_UpdateColumns()
{
  if((!this.ContentElm)||(!this.Columns.length)) return;

  var cb=this.ContentElm;
  var fhdr=document.getElementById(this.ID+'_FH');
  if(!fhdr) return;
  
  var tb=document.getElementById(this.ID+'_TB');
  if(!tb) return;
  var hdr=document.getElementById(this.ID+'_TH');
  if(!hdr) return;

  ng_SetClientWidth(hdr,ng_ClientWidth(tb));
  ng_SetClientWidth(fhdr,ng_ClientWidth(cb));
  var origf=tb.firstChild.firstChild.firstChild;
  var newf=fhdr.firstChild.firstChild.firstChild.firstChild;
  while((origf)&&(newf))
  {
    if(origf.getAttribute("width")!='100%')
    { 
      ng_SetClientWidth(newf.firstChild,ng_ClientWidth(origf));
    }
    origf=origf.nextSibling;
    newf=newf.nextSibling;
  }
}

function ngl_UpdateFrame()
{
  var frame = document.getElementById(this.ID+'_F');
  if(!frame){return true;}

  var o = this.Elm();
  if(!o){return true;}
  
  var w = ng_ClientWidth(o);
  var h = ng_ClientHeight(o);

  var html=new ngStringBuilder;
  ngc_ImgBox(html, this.ID, 'ngList', 0, this.Enabled, 0,0,w,h,false, this.Frame, '', '');
  ng_SetInnerHTML(frame,html.toString());
}

function ngl_AddItemControl(obj)
{
  if(!obj) return;
  if(typeof this.ItemsControls === 'undefined') this.ItemsControls = new Array();
  this.ItemsControls[this.ItemsControls.length]=obj;
  obj.ParentControl=this;
}

function ngl_RemoveItemControl(obj)
{
  if(!obj) return;
  if(typeof this.ItemsControls === 'undefined') return;
  for(var i=this.ItemsControls.length-1;i>=0;i--)
    if(this.ItemsControls[i]==obj) this.ItemsControls.splice(i, 1);

  if(!this.ItemsControls.length) this.ItemsControls=undefined;
  obj.ParentControl=undefined;
}



function ngl_CreateItemControls(it, recursive)
{
  this.BeginUpdate();
  if(!it) it=this;
  else
  {
    if((typeof it.Controls !== 'undefined')&&(typeof it.Controls.Owner === 'undefined')&&(typeof it.Controls.Parent === 'undefined'))
    {
      if(this.Columns.length>0)
      {
        var cid;
        for(var i=0;i<this.Columns.length;i++)
        {
          cid=this.Columns[i].ID;
          if(typeof it.Controls[cid] !== 'undefined')
          {
            if(typeof it.ControlsHolder === 'undefined') it.ControlsHolder=new Object;

            it.ControlsHolder[cid]=document.createElement('div');
            var lref=ngCreateControls(it.Controls[cid],undefined,it.ControlsHolder[cid]);
            var ref;
            if(typeof it.Controls === 'undefined') it.Controls=new Object;
            var ctrls=new Object;
            ng_SetByRef(ctrls,'Owner',this);
            ng_SetByRef(ctrls,'Parent',it);
            it.Controls[cid]=ctrls;
            if(!this.ParentReferences) ref=ctrls;
            else ref=this.Owner;
            var c;
            for(var j in lref)
            {
              c=lref[j];
              c.Owner=ref;
              this.AddItemControl(c);
              if(ref) ref[j]=c;
              if(ref!=ctrls) ctrls[j]=c;
            }
          }
        }
      }
      else
      {
        it.ControlsHolder=document.createElement('div');
        var lref=ngCreateControls(it.Controls,undefined,it.ControlsHolder);
        var ref;

        it.Controls=new Object;
        ng_SetByRef(it.Controls,'Owner',this);
        ng_SetByRef(it.Controls,'Parent',it);
        if(!this.ParentReferences) ref=it.Controls;
        else ref=this.Owner;
        var c;
        for(var j in lref)
        {
          c=lref[j];
          c.Owner=ref;
          this.AddItemControl(c);
          if(ref) ref[j]=c;
          if(ref!=it.Controls) it.Controls[j]=c;
        }
      }
      this.Update();
    }
  }
  if((typeof it.Items!=='undefined')&&(ngVal(recursive,true)))
  {
    for(var j in it.Items)
    {
      this.CreateItemControls(it.Items[j],true);
    }
  }
  this.EndUpdate();
}

function ngl_DoCreate(def, ref, elm, parent)
{
  if(typeof def.Data !== 'undefined')
  {
    if(typeof def.Data.ParentReferences !== 'undefined') this.ParentReferences = def.Data.ParentReferences;
    if(typeof def.Data.Items !== 'undefined')
    {
      this.Items=new Array();
      this.AddItems(def.Data.Items);
      this.CreateItemControls();
    }
  }
  this.SetScrollBars(ngVal(this.ScrollBars, ssAuto));
}

function ngl_DoFocus(e,elm)
{
  ngc_Enter(e, this.Elm(), this.CtrlType);
  ngc_ChangeBox(this.ID, 1, this.Enabled, this.Frame);
  if((this.OnFocus)&&(this.Enabled)) this.OnFocus(this);
}

function ngl_DoBlur(e,elm)
{
  ngc_Leave(e, this.Elm(), this.CtrlType);
  ngc_ChangeBox(this.ID, 0, this.Enabled, this.Frame);

  var ii=ngl_ItemById(ngl_CurrentRowId);
  if(ii.list==this)
  {
    var o=document.getElementById(ngl_CurrentRowId);
    if(o) ngl_LeaveRow(false,o,(this.OnEnterRow!=null)||(this.OnLeaveRow!=null));
  }
  if((this.OnBlur)&&(this.Enabled)) this.OnBlur(this);
}

function ngl_DoAttach(o)
{
  if(o)
  {
    if((!ngAndroid) // DIVs with enabled focus on Android 4.3 has tap highlight which cannot be disabled
     &&(o.getAttribute("tabindex")==null)) o.setAttribute("tabindex",0);
    var t=this.CtrlType;
    var self=this;
    o.onkeydown   = ngl_KeyDown;
    o.onkeyup     = ngl_KeyUp;
    o.onfocus     = function(e) { ngc_Focus(e, this, t); }
    o.onblur      = function(e) { ngc_Blur(e, this, t); }
    o.onscroll    = function(e) {
      if((self.OnScroll)&&(!self.HasEmbededContent))
      {
        self.OnScroll(self,e,o);
      }
    }
  }
}

function ngl_DoDispose()
{
  this.Clear();
  return true;
}

/**
 *  Class: ngListItem
 *  This class implements <ngList> item.
 *
 *  Syntax:
 *    new *ngListItem* (mixed text)
 *
 *  Parameters:
 *    text - item text(s)
 *
 *  See also:
 *    <ngList>
 */
function ngListItem(txt)
{
  /*
   *  Group: Properties
   */
  /*  Variable: Text
   *  ...
   *  Type: mixed
   */
  this.Text=txt;
  /*  Variable: ID
   *  ...
   *  Type: string
   *  Default value: *undefined*
   */
  //this.ID=undefined;
  /*  Variable: Checked
   *  ...
   *  Type: enum
   *
   *  Constants:
   *    nglUnchecked (0) - ...
   *    nglChecked (1) - ...
   *    nglGrayed (2) - ...
   *
   *  Default value: *nglUnchecked*
   */
  //this.Checked=0;
  /*  Variable: AllowGrayed
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  //this.AllowGrayed=false;
  /*  Variable: Collapsed
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  //this.Collapsed=false;
  /*  Variable: Visible
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  //this.Visible=true;
  /*  Variable: Enabled
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  //this.Visible=true;
  /*  Variable: RadioGroup
   *  ...
   *  Type: string
   */
  //this.RadioGroup='';
  /*  Variable: H
   *  ...
   *  Type: int
   */
  //this.H=undefined;
  /*  Variable: MinHeight
   *  ...
   *  Type: int
   *  Default value: *undefined*
   */
  // this.MinHeight = undefined;
  /*  Variable: Image
   *  ...
   *  Type: object
   */
  //this.Image=undefined;
  /*  Variable: Parent
   *  ...
   *  Type: object (<ngList> or <ngListItem>)
   */
  //this.Parent=list;
  /*  Variable: Items
   *  ...
   *  Type: array
   *  Default value: *null*
   */
  //this.Items = null;
  /*  Variable: Controls
   *  ...
   *  Type: object
   */
  //this.Controls = undefined;
  /*  Variable: ControlsHolder
   *  ...
   *  Type: object
   */
  //this.ControlsHolder = undefined;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnCollapsing
   */
  //this.OnCollapsing=null;
  /*
   *  Event: OnCollapsed
   */
  //this.OnCollapsed=null;
  /*
   *  Event: OnExpanding
   */
  //this.OnExpanding=null;
  /*
   *  Event: OnExpanded
   */
  //this.OnExpanded=null;
}

/**
 *  Class: ngListCol
 *  This class implements <ngList> column.
 *
 *  Syntax:
 *    new *ngListCol* (string id, string caption [, string align='left', int width=undefined])
 *
 *  Parameters:
 *    id - column id
 *    caption - column caption
 *    align - column alignment
 *    width - column width in pixels
 *
 *  See also:
 *    <ngList>
 */
function ngListCol(id, caption, align, width)
{
  /*
   *  Group: Properties
   */
  /*  Variable: ID
   *  ...
   *  Type: string
   */
  this.ID=id;
  /*  Variable: Caption
   *  ...
   *  Type: string
   */
  this.Caption=caption;
  /*  Variable: Align
   *  ...
   *  Type: string
   *  Default value: *'left'*
   */
  /*  Variable: VAlign
   *  ...
   *  Type: string
   *  Default value: *'top'*
   */
  this.Align=ngVal(align,'left');
  /*  Variable: Width
   *  ...
   *  Type: int
   */
  this.Width=width;
}

/**
 *  Class: ngList
 *  This class implements a generic list control.
 *
 *  Syntax:
 *    new *ngList* ([string id])
 *
 *  Parameters:
 *    id - parent element
 *
 *  See also:
 *    Abstract class <ngControl>.
 */
function ngList(id)
{
  ngControl(this, id, 'ngList');
  this.DoCreate = ngl_DoCreate;
  this.DoAttach = ngl_DoAttach;
  this.DoMouseEnter = ngl_DoMouseEnter;
  this.DoMouseLeave = ngl_DoMouseLeave;
  this.DoPtrStart = ngl_DoPtrStart;
  this.DoPtrDrag = ngl_DoPtrDrag;
  this.DoPtrEnd = ngl_DoPtrEnd;
  this.DoPtrClick = ngl_DoPtrClick;
  this.DoPtrDblClick = ngl_DoPtrDblClick;
  this.DoGesture = ngl_DoGesture;
  this.DoFocus = ngl_DoFocus;
  this.DoBlur = ngl_DoBlur;
  this.DoDispose = ngl_DoDispose;
  this.ignore_select = 0;

  /*
   *  Group: Properties
   */
  /*  Variable: Columns
   *  ...
   *  Type: array
   */
  this.Columns = new Array();
  /*  Variable: Items
   *  ...
   *  Type: array
   */
  this.Items = new Array();
  /*  Variable: HTMLEncode
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  this.HTMLEncode = false;

  this.radio_groups = new Array();

  /*  Variable: ListIndent
   *  ...
   *  Type: integer
   */
  // optional:
  //this.ListIndent=undefined;
  /*  Variable: DefaultIndent
   *  ...
   *  Type: integer
   */
  //this.DefaultIndent=undefined;
  /*  Variable: Indent
   *  ...
   *  Type: mixed
   *  Default value: *null*
   */
  this.Indent=null;

  /*  Variable: ShowCheckboxes
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  this.ShowCheckboxes = false;
  /*  Variable: ShowHeader
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  //this.ShowHeader=true;
  /*  Variable: CheckImg
   *  ...
   *  Type: object
   */
  this.CheckImg = null;
  /*  Variable: TreeImg
   *  ...
   *  Type: object
   */
  this.TreeImg = null;
  /*  Variable: ItemImg
   *  ...
   *  Type: object
   */
  this.ItemImg = null;

  /*  Variable: KeyEvents
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  this.KeyEvents=true;
  /*  Variable: PageSize
   *  ...
   *  Type: int
   *  Default value: *10*
   */
  this.PageSize = 10;
  /*  Variable: ItemHeight
   *  ...
   *  Type: int
   *  Default value: *undefined*
   */
  // this.ItemHeight = undefined;
  /*  Variable: MinItemHeight
   *  ...
   *  Type: int
   *  Default value: *undefined*
   */
  // this.MinItemHeight = undefined;
  /*  Variable: MouseEvents
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  this.MouseEvents=true;
  /*  Variable: ReadOnly
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  this.ReadOnly=false;

  /*  Variable: SelectType
   *  ...
   *  Type: enum
   *
   *  Constants:
   *    nglSelectNone - ...
   *    nglSelectSingle - ...
   *    nglSelectMulti - ...
   *    nglSelectMultiExt - ...
   *
   *  Default value: *nglSelectNone*
   */
  this.SelectType = nglSelectNone;
  /*  Variable: SelCount
   *  ...
   *  Type: int
   */
  this.SelCount = 0;
  /*  Variable: SortColumn
   *  ...
   *  Type: string
   */
  this.SortColumn = '';
  /*  Variable: SortDir
   *  ...
   *  Type: enum
   *
   *  Constants:
   *    nglSortAsc - ...
   *    nglSortDesc - ...
   *
   *  Default value: *nglSortAsc*
   */
  this.SortDir = nglSortAsc;

  /*  Variable: SortCaseSensitive
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  this.SortCaseSensitive = false;

  /*  Variable: CheckedChangedDelay
   *  ...
   *  Type: int
   *  Default value: *0*
   */
  this.CheckedChangedDelay = 0;

  /*  Variable: ItemsControls
   *  ...
   *  Type: array
   */
  //this.ItemsControls = new Array();
  /*
   *  Variable: ParentReferences
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  this.ParentReferences=false;
  /*  Variable: Frame
   *  ...
   *  Type: object
   */
  this.Frame = new Object;

  this.do_add = ngl_do_add;
  this.do_remove = ngl_do_remove;

  /*
   *  Group: Methods
   */
  /*  Function: Add
   *  Adds new item at the end of the list.
   *
   *  Syntax:
   *    int *Add* (mixed item [, object parent=null])
   *
   *  Returns:
   *    Index of new item.
   */
  this.Add = ngl_Add;
  /*  Function: AddItems
   *  Adds multiple items (even recursive) at the end of the list.
   *
   *  Syntax:
   *    void *AddItems* (array items [, object parent=null])
   *
   *  Returns:
   *    -
   */
  this.AddItems = ngl_AddItems;
  /*  Function: SetItems
   *  Sets list items.
   *
   *  Syntax:
   *    void *SetItems* (array items)
   *
   *  Returns:
   *    -
   */
  this.SetItems = ngl_SetItems;
  /*  Function: Insert
   *  Inserts new item at the position specified by index.
   *
   *  Syntax:
   *    int *Insert* (int index, mixed item [, object parent=null])
   *
   *  Returns:
   *    Index of new item.
   */
  this.Insert = ngl_Insert;
  /*  Function: Replace
   *  Replaces item at the position specified by index.
   *
   *  Syntax:
   *    object *Replace* (int index, mixed item [, object parent=null])
   *
   *  Returns:
   *    Deleted item object.
   */
  this.Replace = ngl_Replace;
  /*  Function: Remove
   *  Deletes all references to the item from list.
   *
   *  Syntax:
   *    void *Remove* (object item [, object parent=null])
   *
   *  Returns:
   *    -
   */
  this.Remove = ngl_Remove;
  /*  Function: Delete
   *  Removes item at specified index from list.
   *
   *  Syntax:
   *    object *Delete* (int index [, object parent=null])
   *
   *  Returns:
   *    Deleted item object.
   */
  this.Delete = ngl_Delete;
  /*  Function: Clear
   *  Deletes all items from the list.
   *
   *  Syntax:
   *    void *Delete* ([object parent=null])
   *
   *  Returns:
   *    -
   */
  this.Clear = ngl_Clear;
  /*  Function: IndexOf
   *  Returns the index of the item in list.
   *
   *  Syntax:
   *    int *IndexOf* (object item, [object parent=null])
   *
   *  Returns:
   *    -
   */
  this.IndexOf = ngl_IndexOf;

  /*  Function: GetPath
   *  Gets/creates items by specified path.
   *
   *  Syntax:
   *    object *GetPath* (object parent, string path [, create=true, function oncreatefnc=null, mixed userdata])
   *
   *  Returns:
   *    -
   */
  this.GetPath = ngl_GetPath;

  /*  Function: Collapse
   *  Collapses an item.
   *
   *  Syntax:
   *    void *Collapse* (object item)
   *
   *  Returns:
   *    -
   */
  this.Collapse = ngl_Collapse;
  /*  Function: Expand
   *  Expands an item.
   *
   *  Syntax:
   *    void *Expand* (object item)
   *
   *  Returns:
   *    -
   */
  this.Expand = ngl_Expand;
  /*  Function: CollapseAll
   *  Collapses all items in tree.
   *
   *  Syntax:
   *    void *CollapseAll* ([object parent=null])
   *
   *  Returns:
   *    -
   */
  this.CollapseAll = ngl_CollapseAll;
  /*  Function: ExpandAll
   *  Expands all items in tree.
   *
   *  Syntax:
   *    void *ExpandAll* ([object parent=null])
   *
   *  Returns:
   *    -
   */
  this.ExpandAll = ngl_ExpandAll;
  /*  Function: ToggleCollapsed
   *  Collapses/Expands an item.
   *
   *  Syntax:
   *    void *ToggleCollapsed* (object item)
   *
   *  Returns:
   *    -
   */
  this.ToggleCollapsed = ngl_ToggleCollapsed;
  /*  Function: CheckItem
   *  Sets item check state.
   *
   *  Syntax:
   *    void *CheckItem* (object item [, enum state = nglChecked])
   *
   *  Constants:
   *    nglUnchecked (0) - ...
   *    nglChecked (1) - ...
   *    nglGrayed (2) - ...
   *
   *  Returns:
   *    -
   */
  this.CheckItem = ngl_CheckItem;
  /*  Function: CheckAll
   *  Checks all items in tree.
   *
   *  Syntax:
   *    void *CheckAll* ([object parent=null])
   *
   *  Returns:
   *    -
   */
  this.CheckAll = ngl_CheckAll;
  /*  Function: UncheckAll
   *  Unchecks all items in tree.
   *
   *  Syntax:
   *    void *UncheckAll* ([object parent=null])
   *
   *  Returns:
   *    -
   */
  this.UncheckAll = ngl_UncheckAll;

  /*  Function: GetChecked
   *  Gets references to all checked items.
   *
   *  Syntax:
   *    array *GetChecked* ()
   *
   *  Returns:
   *    Array of items.
   */
  this.GetChecked = ngl_GetChecked;
  /*  Function: ClickItem
   *  Clicks the item.
   *
   *  Syntax:
   *    void *ClickItem* (it [, event ev])
   *
   *  Parameters:
   *
   *  Returns:
   *    -
   */
  this.ClickItem = ngl_ClickItem;
  /*  Function: SetItemVisible
   *  Sets item visibility.
   *
   *  Syntax:
   *    void *SetItemVisible* (object item [, bool visible = true])
   *
   *  Returns:
   *    -
   */
  this.SetItemVisible = ngl_SetItemVisible;
  /*  Function: SetItemEnabled
   *  Sets enabled state of the item.
   *
   *  Syntax:
   *    void *SetItemEnabled* (object item [, bool enabled = true])
   *
   *  Returns:
   *    -
   */
  this.SetItemEnabled = ngl_SetItemEnabled;

  /*  Function: Sort
   *  Performs a sort on the list.
   *
   *  Syntax:
   *    void *Sort* ([object item, bool recursion=true])
   *
   *  Returns:
   *    -
   *
   *  See also:
   *    <OnCompareItem>
   */
  this.Sort = ngl_Sort;

  /*  Function: Scan
   *  Recursive scan items in list.
   *
   *  Syntax:
   *    int *Scan* (function scanfnc [, object parent=null, mixed userdata])
   *
   *  Returns:
   *    -
   */
  this.Scan = ngl_Scan;
  /*  Function: ScanVisible
   *  Recursive scan only visible items in list.
   *
   *  Syntax:
   *    int *ScanVisible* (function scanfnc [, object parent=null, mixed userdata])
   *
   *  Returns:
   *    -
   */
  this.ScanVisible = ngl_ScanVisible;

  /*  Function: FindItem
   *  Locates an item in list by given key.
   *
   *  Syntax:
   *    object *FindItem* (mixed key [, int partial=0, bool ignorecase=true, bool visibleonly=false])
   *
   *  Returns:
   *    -
   */
  this.FindItem = ngl_FindItem;
  /*  Function: FindItemByID
   *  Locates an item by given ID.
   *
   *  Syntax:
   *    object *FindItemByID* (string id)
   *
   *  Returns:
   *    -
   */
  this.FindItemByID = ngl_FindItemByID;


  /*  Function: GetItemFocus
   *  Gets focused item.
   *
   *  Syntax:
   *    object *GetItemFocus* ()
   *
   *  Returns:
   *    -
   */
  this.GetItemFocus = ngl_GetItemFocus;

  /*  Function: SetItemFocus
   *  Sets focus to specified item.
   *
   *  Syntax:
   *    void *SetItemFocus* (object item)
   *
   *  Returns:
   *    -
   */
  this.SetItemFocus = ngl_SetItemFocus;

  /*  Function: FirstVisibleItem
   *  Locates first visible item in a list.
   *
   *  Syntax:
   *    object *FirstVisibleItem* ([object item=null])
   *
   *  Returns:
   *    -
   */
  this.FirstVisibleItem = ngl_FirstVisibleItem;
  /*  Function: PrevVisibleItem
   *  Locates previous visible item in a list.
   *
   *  Syntax:
   *    object *PrevVisibleItem* (object item [, bool subitems=true])
   *
   *  Returns:
   *    -
   */
  this.PrevVisibleItem = ngl_PrevVisibleItem;
  /*  Function: NextVisibleItem
   *  Locates next visible item in a list.
   *
   *  Syntax:
   *    object *NextVisibleItem* (object item [, bool subitems=true])
   *
   *  Returns:
   *    -
   */
  this.NextVisibleItem = ngl_NextVisibleItem;
  /*  Function: LastVisibleItem
   *  Locates last visible item in a list.
   *
   *  Syntax:
   *    object *LastVisibleItem* ([object item=null])
   *
   *  Returns:
   *    -
   */
  this.LastVisibleItem = ngl_LastVisibleItem;

  this.draw_selected = new Array();
  this.selected = new Array();
  this.last_selected = '';
  this.SelectChanged = ngl_SelectChanged;

  /*  Function: ClearSelected
   *  Clears selection.
   *
   *  Syntax:
   *    void *ClearSelected* ()
   *
   *  Returns:
   *    -
   */
  this.ClearSelected = ngl_ClearSelected;
  /*  Function: SelectItem
   *  Adds item to selection.
   *
   *  Syntax:
   *    void *SelectItem* (object item [, bool state=true])
   *
   *  Returns:
   *    -
   */
  this.SelectItem = ngl_SelectItem;
  /*  Function: GetSelected
   *  Gets references to all selected items.
   *
   *  Syntax:
   *    array *GetSelected* ()
   *
   *  Returns:
   *    Array of items.
   */
  this.GetSelected = ngl_GetSelected;

  /*  Function: IsItemSelected
   *  Determines if given item is selected.
   *
   *  Syntax:
   *    array *IsItemSelected* (object item)
   *
   *  Returns:
   *    TRUE if item is selected.
   */
  this.IsItemSelected = ngl_IsItemSelected;

  this.do_checked = ngl_do_checked;
  this.CheckChanged = ngl_CheckChanged;

  /*  Function: UpdateChecked
   *  Update item(s) checked state. Faster then updating whole control by calling
   *  Update() method.
   *
   *  Syntax:
   *    void *UpdateChecked* (object item [, bool recursion=false, bool setall=undefined])
   *
   *    void *UpdateChecked* ()
   *
   *  Returns:
   *    -
   */
  this.UpdateChecked = ngl_UpdateChecked;
  /*  Function: UpdateCollapsed
   *  Update item(s) collapsed state. Faster then updating whole control by calling
   *  Update() method.
   *
   *  Syntax:
   *    void *UpdateCollapsed* (object item [, bool recursion=false, bool setall=undefined])
   *
   *    void *UpdateCollapsed* ()
   *
   *  Returns:
   *    -
   */
  this.UpdateCollapsed = ngl_UpdateCollapsed;

  /*  Function: CreateItemControls
   *  Converts Controls definition into real controls.
   *
   *  Syntax:
   *    void *CreateItemControls* ([object item=null, bool recursive=true])
   *
   *  Returns:
   *    -
   */
  this.CreateItemControls = ngl_CreateItemControls;
  /*  Function: AddItemControl
   *  Adds control to <ItemsControls> array.
   *
   *  Syntax:
   *    void *AddItemControl* (object obj)
   *
   *  Returns:
   *    -
   */
  this.AddItemControl = ngl_AddItemControl;
  /*  Function: RemoveItemControl
   *  Removes control ftom <ItemsControls> array.
   *
   *  Syntax:
   *    void *RemoveItemControl* (object obj)
   *
   *  Returns:
   *    -
   */
  this.RemoveItemControl = ngl_RemoveItemControl;

  this.ItemId = ngl_ItemId;
  this.ItemById = nglist_ItemById;
  this.CalcIndent=ngl_CalcIndent;

  this.DoDropDown = ngl_DoDropDown;
  this.DoDropDownFinished = ngl_DoDropDownFinished;
  this.SelectDropDownItem = ngl_SelectDropDownItem;
  this.SelectDropDownItemWithFocus = ngl_SelectDropDownItemWithFocus;

  this.GetRowClassName = ngl_GetRowClassName;
  this.DrawItemText = ngl_DrawItemText;
  this.DrawItem = ngl_DrawItem;
  this.DoUpdate = ngl_DoUpdate;
  this.UpdateColumns = ngl_UpdateColumns;
  this.UpdateFrame = ngl_UpdateFrame;

  this.ActionUpdateTimer = null;
  this.SetItemAction = ngl_SetItemAction;
  this.GetItemAction = ngl_GetItemAction;
  this.SyncItemAction = ngl_SyncItemAction;
  this.ActionSetVisible = ngl_ActionSetItemVisible;
  this.ActionCheck = ngl_ActionItemCheck;
  this.ActionClick = ngl_ActionItemClick;
  this.ActionUpdate = ngl_ActionItemUpdate;

  /*  Function: BeginUpdate
   *  Prevents the updating of the list until the <EndUpdate> method is called.
   *
   *  Syntax:
   *    void *BeginUpdate* ()
   *
   *  Parameters:
   *
   *  Returns:
   *    -
   *
   *  See also:
   *    <EndUpdate>
   */
  this.BeginUpdate = ngl_BeginUpdate;
  /*  Function: EndUpdate
   *  Performs the repaints deferred by a call to <BeginUpdate>.
   *
   *  Syntax:
   *    void *EndUpdate* ()
   *
   *  Parameters:
   *
   *  Returns:
   *    -
   *
   *  See also:
   *    <BeginUpdate>
   */
  this.EndUpdate = ngl_EndUpdate;

  this.update_cnt=0;
  this.need_update=false;

  this.checked_changed_timer = null;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnAdd
   */
  this.OnAdd = null;
  /*
   *  Event: OnRemove
   */
  this.OnRemove = null;
  /*
   *  Event: OnGetText
   */
  this.OnGetText = null;
  /*
   *  Event: OnGetAlt
   */
  this.OnGetAlt = null;

  /*
   *  Event: OnExpanding
   */
  this.OnExpanding = null;
  /*
   *  Event: OnExpanded
   */
  this.OnExpanded = null;
  /*
   *  Event: OnCollapsing
   */
  this.OnCollapsing = null;
  /*
   *  Event: OnCollapsed
   */
  this.OnCollapsed = null;

  /*
   *  Event: OnItemCheckChanged
   */
  this.OnItemCheckChanged = null;

  /*
   *  Event: OnCheckChanged
   */
  this.OnCheckChanged = null;

  /*
   *  Event: OnSetItemVisible
   */
  this.OnSetItemVisible = null;

  /*
   *  Event: OnSetItemEnabled
   */
  this.OnSetItemEnabled = null;

  /*
   *  Event: OnSelectChanged
   */
  this.OnSelectChanged = null;
  /*
   *  Event: OnRedrawSelected
   */
  this.OnRedrawSelected = null;

  /*
   *  Event: OnCompareItem
   */
  this.OnCompareItem = null;

  /*
   *  Event: OnClickItem
   */
  this.OnClickItem = null;
  /*
   *  Event: OnDblClickItem
   */
  this.OnDblClickItem = null;

  /*
   *  Event: OnDblClick
   */
  this.OnDblClick = null;
  /*
   *  Event: OnClick
   */
  this.OnClick = null;

  /*
   *  Event: OnCaptionClick
   */
  this.OnCaptionClick = null;
  /*
   *  Event: OnCaptionDblClick
   */
  this.OnCaptionDblClick = null;

  /*
   *  Event: OnKeyDown
   */
  this.OnKeyDown = null;
  /*
   *  Event: OnKeyUp
   */
  this.OnKeyUp = null;

  /*
   *  Event: OnScroll
   */
  this.OnScroll = null;
  /*
   *  Event: OnMouseEnter
   */
  this.OnMouseEnter = null;
  /*
   *  Event: OnMouseLeave
   */
  this.OnMouseLeave = null;

  /*
   *  Event: OnEnterRow
   */
  this.OnEnterRow = null;
  /*
   *  Event: OnLeaveRow
   */
  this.OnLeaveRow = null;

  /*
   *  Event: OnFocus
   */
  this.OnFocus = null;
  /*
   *  Event: OnBlur
   */
  this.OnBlur = null;

  /*
   *  Event: OnDrawItem
   */
  this.OnDrawItem = null;
  /*
   *  Event: OnDrawItemText
   */
  this.OnDrawItemText = null;
  /*
   *  Event: OnGetRowClassName
   */
  this.OnGetRowClassName = null;
  /*
   *  Event: OnMeasureItem
   */
  this.OnMeasureItem = null;
  /*
   *  Event: OnCalcIndent
   */
  this.OnCalcIndent = null;
  /*
   *  Event: OnGetItemImg
   */
  this.OnGetItemImg = null;
  /*
   *  Event: OnGetCheckImg
   */
  this.OnGetCheckImg = null;
  /*
   *  Event: OnGetTreeImg
   */
  this.OnGetTreeImg = null;
  /*
   *  Event: OnGetColumnCaption
   */
  this.OnGetColumnCaption = null;
  /*
   *  Event: OnGetColumnWidth
   */
  this.OnGetColumnWidth = null;

  ngControlCreated(this);

  // TODO:
  // - caption mouse focus
  // - group hotkeys
  // - partial update
  // - items drag&drop
  // - columns drag&drop
}

// --- ngPageList --------------------------------------------------------------

var plDisplayFixed = 0;
var plDisplayFit   = 1;

var plFirstPage = -9999;
var plLastPage  = -9998;

var plPaging_First        = 1;
var plPaging_Prev         = 2;
var plPaging_Next         = 4;
var plPaging_Last         = 8;
var plPaging_Pages        = 16;
var plPaging_PageNo       = 32;
var plPaging_HideDisabled = 256;

var plPagingUser       = -1;
var plPagingSimple     = plPaging_Prev  | plPaging_Next;
var plPagingSimple2    = plPaging_Prev  | plPaging_Next   | plPaging_HideDisabled;
var plPagingSimpleEx   = plPaging_Prev  | plPaging_PageNo | plPaging_Next;
var plPagingPages      = plPaging_Prev  | plPaging_Pages  | plPaging_Next;
var plPagingPages2     = plPaging_First | plPaging_Prev   | plPaging_Pages  | plPaging_Next  | plPaging_Last;
var plPagingPagesEx    = plPagingPages  | plPaging_HideDisabled;
var plPagingPagesEx2   = plPagingPages2 | plPaging_HideDisabled;
var plPagingDataSet    = plPaging_First | plPaging_Prev   | plPaging_Next   | plPaging_Last;
var plPagingDataSetEx  = plPaging_First | plPaging_Prev   | plPaging_PageNo | plPaging_Next  | plPaging_Last;
var plPagingAll        = 511; // all bits

var plDisplayPagingNone      = 0;
var plDisplayPagingAlways    = 1;
var plDisplayPagingNotEmpty  = 2;
var plDisplayPagingMorePages = 3;

function npgl_OnListChanged(list,it,parent)
{
  if(!parent) list.ListPagingChanged();
  return true;
}

function npgl_ListPagingChanged()
{
  this.page_start=new Array();
  this.page_start[0]=0;
}

function npgl_DoUpdate(o)
{
  if(this.Controls.List.Enabled!=this.Enabled) // enabled is not in sync, fix it
  {
    for(var i in this.Controls)
    {
      if(typeof this.Controls[i].SetEnabled==='function') this.Controls[i].SetEnabled(this.Enabled);
    }
    if(this.Enabled) this.Controls.List.paging_needs_update=true;
  }
  return true;
}

function npgl_DoUpdateBefore(o)
{
  if((this.update_cnt>0)||(this.ID=='')) return;
  
  var pl=this.Owner.Owner;
  if(!pl) return false;

  if((this.display_mode!=pl.DisplayMode) // Display mode changed
    ||(pl.DisplayMode==plDisplayFixed)&&(this.displayed_items!=pl.DisplayedItems))
  {
    this.ListPagingChanged();
  }

  if(pl.DisplayMode==plDisplayFixed) 
  {
    if(this.ContentElm) ng_SetScrollBars(this.ContentElm,ssAuto);
  }

  if(pl.TopIndex>=this.Items.length)
  {
//  pl.LastPage();
    pl.SetPage(pl.PageByIndex(pl.GetLength()));

  }

  if(this.draw_page!=pl.Page) // page changed
  {
    if(this.ContentElm) this.ContentElm.scrollTop=0;
  }

  var to=(pl.Controls.Paging ? pl.Controls.Paging.Elm() : null);
  if((to)&&(to.parentNode))
  {
    var pgheight=ng_OuterHeight(to);
    if(pl.PagingInside)
    {
      to.style.position='relative';
      var bounds = { T:0, B: '' };
      if(ngIExplorer6) bounds.R=2;
      pl.Controls.Paging.SetBounds(bounds);
      pl.Controls.List.SetBounds({B: 0});
      this.draw_paging_height=pgheight;
    }
    else
    {
      to.style.position='absolute';
      pl.Controls.Paging.SetBounds({ T:'', B: 0, R: 0 });
      var pgvisible=pl.IsPagingVisible();
      if((pl.Controls.Paging)&&(pl.Controls.Paging.Visible!=pgvisible))
        pl.Controls.List.paging_needs_update=true;
      pl.Controls.List.SetBounds({B: (pgvisible ? pgheight /*  pl.Controls.Paging.Bounds.H*/ : 0) });
      if(to.parentNode == pl.Elm()) to=null;
      this.draw_paging_height=0;
    }
    if(to) 
    {
      this.draw_paging_elm=to.parentNode.removeChild(to);
    }
  }
  else 
  {
    this.draw_paging_height=0;
    pl.Controls.List.SetBounds({B: 0});
  }

  this.Loading=false;
  var ncnt=pl.DisplayedItems+(this.draw_measure ? 2 : 1);
  if(pl.IsAsyncLoadingBlock(pl.TopIndex,ncnt)) { this.Loading=true; return false; }
  if((!this.draw_measure)&&(!pl.NeedData(pl.TopIndex,ncnt)))
  {
    if(pl.AsyncWaiting()) this.Loading=true;
    return false;
  }

  this.draw_measure=(pl.DisplayMode==plDisplayFit);
  return true;
}

function npgl_OnDrawItem(list, ret, html, it, id, level, pcollapsed)
{
  if(list.in_measure) return true;
  var pl=list.Owner/*controls*/.Owner/*pagelist*/;
  if(list.draw_measure)
  {
    list.draw_measure=false;

    var o=list.Elm();
    if(list.HasEmbededContent)
    {
      var del=1;
      if(list.Columns.length>0) { del++; html.append('</table>'); }
      html.append('</div>');
      ng_SetInnerHTML(o,html.toString());
      html.strings.splice(html.strings.length-del,del);
      o=document.getElementById(list.ID+'_CB');
    }
    if(o)
    {
      var maxh = ng_ClientHeight(o)-1;
      
      var hheight = 0, io;
      maxh-=(ng_GetCurrentStylePx(o,'padding-top') + ng_GetCurrentStylePx(o,'padding-bottom'));

      var changed_height=false;
      if((list.draw_height!=maxh)&&(list.draw_height>0))
      {
        changed_height=true;
        list.ListPagingChanged();
      }
      list.draw_height=maxh;

      var scrollbars=false;

      if(list.Columns.length>0) // Measure header
      {
        ng_SetInnerHTML(o,html.toString()+'</table>');
        io=document.getElementById(list.ID+'_TB');
        if(io) hheight=ng_OuterHeight(io);
      }
      maxh -= list.draw_paging_height;
      maxh -= hheight;

      var cnt=0;
      var i,it,items,tmp_html,ih=0;
      list.in_measure=true;
      for(i=pl.TopIndex;i<list.Items.length;i++)
      {
        tmp_html=new ngStringBuilder(html);

        if(!pl.IsDataLoaded(i+1))
        {
          var lcnt=(cnt && ih ? Math.floor(maxh/(ih/cnt)) : 0);
          var dcnt=pl.DisplayedItems-(i-pl.TopIndex);
          if(dcnt>lcnt) lcnt=dcnt;

          if(pl.IsAsyncLoadingBlock(i+1,lcnt)) list.Loading=true;
          else
            pl.DoLoadData(i+1,lcnt);
        }

        it=list.Items[i];
        if(typeof it === 'undefined') it=new Object;

        items=it.Items;
        it.Items=undefined;
        l=list.DrawItem(tmp_html, it, i, 0, false);
        it.Items=items;

        if(l.l>0) tmp_html.append('</tbody>');
        if(list.Columns.length>0) tmp_html.append('</table>');
        ng_SetInnerHTML(o,tmp_html.toString());

        io=document.getElementById(list.ID+'_'+i);
        if(io)
        {
          o.style.display='block';
          h=ng_OuterHeight(io);
          o.style.display=(this.Visible ? 'block' : 'none');
        }
        else h=0;

        maxh-=h;
        if(maxh<0) break;

        ih+=h;
        cnt++;
        if((typeof it.Items === 'object')&&(!ngVal(it.Collapsed,false))) scrollbars=true; // have subitems
      }
      list.in_measure=false;
      ng_SetInnerHTML(o,'');
      if(i<list.Items.length) pl.DisplayedItems=cnt;
      else
      {
        if((cnt)&&(ih)) pl.DisplayedItems=cnt+Math.floor(maxh/(ih/cnt)); // guess displayed items
      }
      if(pl.DisplayedItems<=0) pl.DisplayedItems=1;
      if(changed_height)
      {
        var op=pl.Page;
        if(!pl.TopIndex)
        {
          list.page_start_found=true;
          list.page_start[0]=0;
          pl.Page=0;
        }
        else // guess page no
        {
          if(pl.DisplayedItems>0) pl.Page=Math.floor((pl.TopIndex+pl.DisplayedItems-1)/pl.DisplayedItems);
        }
        if(op!=pl.Page)
        {
          list.paging_needs_update=true;
        }
      }
      if((!pl.TopIndex)||((pl.Page>0)&&(typeof list.page_start[pl.Page] !== 'undefined')))
      {
        list.page_start[pl.Page+1]=pl.TopIndex+pl.DisplayedItems;
      }

      if(list.ContentElm) ng_SetScrollBars(list.ContentElm,scrollbars ? ssAuto : ssNone);
    }
  }
  if(!level)
  {
    var pl=list.Owner/*controls*/.Owner/*pagelist*/;
    if(list.draw_length!=list.Items.length) // items changed
    {
      list.paging_needs_update=true;
    }
    if(pl.IsAsyncLoadingBlock(pl.TopIndex,pl.DisplayedItems))
    {
      list.Loading=true;
      list.next_draw_itemidx=list.Items.length;
      return false;
    }

    if(id<pl.TopIndex) list.next_draw_itemidx=pl.TopIndex;
    if(id>=pl.TopIndex+pl.DisplayedItems) list.next_draw_itemidx=list.Items.length;
    return ((id>=pl.TopIndex)&&(id<pl.TopIndex+pl.DisplayedItems))
  }
  return true;
}

function npgl_ShowLoading(v)
{
  if((typeof this.Controls.Loading === 'object')&&(typeof this.Controls.Loading.SetVisible === 'function')) this.Controls.Loading.SetVisible(v);
}

function npgl_DoUpdateAfter(o)
{
  if((this.update_cnt>0)||(this.ID=='')) return;

  this.draw_measure=false;
  var pl=this.Owner.Owner;
  if(!pl) return true;

  if(pl.IsAsyncLoadingBlock(pl.TopIndex,pl.DisplayedItems)) this.Loading=true;
  if(pl.loading_displayed!=this.Loading)
  {
    pl.loading_displayed=this.Loading;
    if(this.Loading)
    {
      if(pl.OnShowLoading) pl.OnShowLoading(pl);
      else pl.ShowLoading(true);
    }
    else
    {
      if(pl.OnHideLoading) pl.OnHideLoading(pl);
      else pl.ShowLoading(false);
    }
  }
  if(this.Loading)
  {
    if(this.ContentElm) ng_SetInnerHTML(this.ContentElm,'');
  }

  if(this.draw_paging_elm)
  {
    if(pl.PagingInside) 
    {
      if(this.ContentElm) this.ContentElm.appendChild(this.draw_paging_elm);
    }
    else
    {
      var io=pl.Elm();
      if(io) io.appendChild(this.draw_paging_elm);
    }
    this.draw_paging_elm=null;
  }
  if((pl.PagingInside)&&(pl.Controls.Paging)) pl.Controls.Paging.SetVisible(!this.Loading && pl.IsPagingVisible());
  if(this.paging_needs_update)
  {
    this.paging_needs_update=false;
    pl.UpdatePaging();
  }

  this.draw_page=pl.Page;
  this.draw_length=this.Items.length;
  this.displayed_items=pl.DisplayedItems;
  this.display_mode=pl.DisplayMode;
  delete this.draw_paging_height;

  if((this.init_page>0)&&((pl.DisplayMode==plDisplayFixed)||(!this.Loading)))
  {
    var p=this.init_page;
    this.init_page=0;
    pl.SetPage(p);
  }
  if((pl.AutoSelectFirstItem)&&(!pl.firstitemselected)&&(this.SelCount==0)&&(pl.IsDataLoaded(0)))
  {
    pl.firstitemselected=true;
    this.SelectItem(this.Items[0]);
  }

  return true;
}

function npgl_OnExpanding(l,it)
{
  var pl=this.Owner.Owner;
  if(this.ContentElm) ng_SetScrollBars(this.ContentElm,ssAuto);
  var to=(ngIExplorerVersion==7 && pl && pl.Controls.Paging ? pl.Controls.Paging.Elm() : null);
  if(to) // IE7 fix
  {
    to.style.display='none';
    to.style.display='block';
  }
  return true;
}

function npgl_SetPage(p)
{
  p=parseInt(p);
  if((isNaN(p))||((p<0)&&(p!=plFirstPage)&&(p!=plLastPage))) return;
  if((p!=this.Page)||(this.TopIndex==999999999))
  {
    if(this.TopIndex==999999999) this.TopIndex=0;
    var needupdate=false;
    var list=this.Controls.List;
    if((this.OnPageChanging)&&(!ngVal(this.OnPageChanging(this,p),false))) return;

    var op=this.Page;
    var pti=this.TopIndex;

    if(p==plFirstPage)
    {
      this.TopIndex=0;
      list.page_start[0]=0;
      p=0;
    }
    else
      switch(p-op)
      {
        case 1: // next page
          var ti=list.page_start[p];
          var oti=list.page_start[op];
          if((list.page_start_found)&&(typeof ti!=='undefined')&&(typeof oti!=='undefined')) { this.TopIndex=ti; list.page_start_found=true; }
          else
          {
            list.page_start_found=false;
            this.TopIndex+=this.DisplayedItems;
            if(oti != 'undefined') list.page_start[p]=this.TopIndex;
          }
          break;
        case -1: // prev page
          var ti=list.page_start[p];
          var oti=list.page_start[op];
          if((list.page_start_found)&&(typeof ti!=='undefined')&&(typeof oti!=='undefined')) { this.TopIndex=ti; list.page_start_found=true; }
          else
          {
            list.page_start_found=false;
            this.TopIndex-=this.DisplayedItems;
          }
          if(this.TopIndex<0) this.TopIndex=0;
          break;
        default: // any page
          var len=this.GetLength();
          if((p==plLastPage)&&((!this.IsDynamicData())||(typeof this.MaxLength!=='undefined')))
          {
            p=this.PageByIndex(len);
          }
          for(var q=0;q<2;q++)
          {
            if(p!=plLastPage)
            {
              var ti=list.page_start[p];
              if(typeof ti!=='undefined') { this.TopIndex=ti; list.page_start_found=true; }
              else
              {
                var i=0,s=0;
                if(this.DisplayMode!=plDisplayFixed)
                {
                  var sp=-1;
                  for(i in list.page_start)
                  {
                    if((i>sp)&&(i<=p)&&(typeof list.page_start[i] !== 'undefined')) sp=i;
                  }
                  if(sp>=0)
                  {
                    s=list.page_start[sp];
                    i=sp;
                  }
                  else i=0;
/*                  for(i=p-1;i>0;i--)
                  {
                    if(typeof list.page_start[i] !== 'undefined')
                    {
                      s=list.page_start[i];
                      break;
                    }
                  }*/
                }
                this.TopIndex=s+(p-i)*this.DisplayedItems;
                list.page_start_found=false;
              }
            }
            else this.TopIndex=999999999; // dynamic data, determine items count
            if((p==plLastPage)||((this.TopIndex>0)&&(this.TopIndex>=list.Items.length)))
            {
              if(!this.AsyncWaiting()) this.async_datapage=(p==plLastPage ? op : p);
            }
            this.NeedData(this.TopIndex,this.DisplayedItems+((this.DisplayMode==plDisplayFit) ? 2 : 1));
            if(!this.AsyncWaiting()) delete this.async_datapage;
            if(p==plLastPage) {
              pti=999999999;
              needupdate=true;
              p=this.PageByIndex(len);
              break;
            }
            if((this.TopIndex>0)&&(this.TopIndex>=len))
              p=this.PageByIndex(len);
            else break;
          }
          break;
      }
    if(this.TopIndex>=list.Items.length) { this.TopIndex=pti; p=op; }
    if(p<0) p=0;
    if(!this.TopIndex) { list.page_start[0]=0; list.page_start_found=true; }
    else if((!p)&&(this.TopIndex>0)) p=1;

    this.Page=p;
    this.UpdatePaging();

    if((pti!=this.TopIndex)||(needupdate)) list.Update();
    if(this.OnPageChanged) this.OnPageChanged(this,op);
  }
}

function npgl_SetPagingType(pt, update)
{
  if(typeof pt!=='undefined')
  {
    if(pt==this.PagingType) return;
    this.PagingType=pt;
  }
  else pt=this.PagingType;

  if(pt==plPagingUser) return;
  var changed=false, update_paging=false;
  var first=((pt & plPaging_First)!=0);
  var prev=((pt & plPaging_Prev)!=0);
  var pageno=((pt & plPaging_PageNo)!=0);
  var pages=((pt & plPaging_Pages)!=0);
  var next=((pt & plPaging_Next)!=0);
  var last=((pt & plPaging_Last)!=0);
  var hidedisabled=((pt & plPaging_HideDisabled)!=0);

  c=this.Controls.FirstPage; if((c)&&(c.InitVisible!=first)) { c.InitVisible=first; changed=true; }
  c=this.Controls.PrevPage;  if((c)&&(c.InitVisible!=prev)) { c.InitVisible=prev; changed=true; }
  c=this.Controls.NextPage;  if((c)&&(c.InitVisible!=next)) { c.InitVisible=next; changed=true; }
  c=this.Controls.LastPage;  if((c)&&(c.InitVisible!=last)) { c.InitVisible=last; changed=true; }
  c=this.Controls.PageNo;    if((c)&&(c.InitVisible!=pageno)) { c.InitVisible=pageno; changed=true; update_paging=true; }
  if(this.PagesVisible != pages) { this.PagesVisible = pages; update_paging=true; changed=true; }

  if(this.PagingHideDisabled!=hidedisabled) { this.PagingHideDisabled=hidedisabled; changed=true; }
  if((changed)&&(ngVal(update,true)))
  {
    if((update_paging)&&(this.Controls.List)) this.Controls.List.paging_needs_update=true;
    this.Update();
  }
}

function npgl_IsPagingVisible()
{
  var v=false;
  if((!this.Controls.List)||((this.Controls.List.Loading)&&(this.PagingInside))) return v;
  switch(this.DisplayPaging)
  {
    case plDisplayPagingAlways: v=true; break;
    case plDisplayPagingNotEmpty: v=(this.Controls.List)&&(this.GetLength()>0); break;
    case plDisplayPagingMorePages: v=(this.Controls.List)&&((this.Page>0)||(this.TopIndex+this.DisplayedItems<this.GetLength())); break;
  }
  return v;
}

function npgl_IsPrevPageAvailable()
{
  return (this.TopIndex>0);
}

function npgl_IsNextPageAvailable()
{
  return (this.TopIndex+this.DisplayedItems<this.GetLength());
}

function npgl_UpdatePaging()
{
  var s,numitems=this.GetLength();
  var pginfo = {
    PageNo: ''+(this.Page+1),
    PrevPage:  (this.TopIndex>0),
    NextPage:  (this.TopIndex+this.DisplayedItems<numitems),
    PagingVisible: this.IsPagingVisible(),
    PagingTo: this.Page+ngVal(this.PagingLookout,Math.floor((this.PagingSize-1)/2)),
    Update: false
  }
  pginfo.FirstPage=pginfo.PrevPage;
  pginfo.LastPage=pginfo.NextPage;
  if(this.PagingInside) pginfo.Update=true;

  var ms=ngVal(this.PagingMinSize,0);
  if((ms)&&(pginfo.PagingTo<ms)) pginfo.PagingTo=ms-1;
  if(pginfo.PagingTo<0) pginfo.PagingTo=0;

  if((!this.IsDynamicData())||(typeof this.MaxLength !== 'undefined'))
  {
    while(pginfo.PagingTo>this.Page) // remove pages over last page
    {
      s=this.Controls.List.page_start[pginfo.PagingTo];
      if(typeof s==='undefined') s=this.TopIndex+(pginfo.PagingTo-this.Page)*this.DisplayedItems;
      if(s<numitems) break;
      pginfo.PagingTo--;
    }
  }
  pginfo.PagingFrom=pginfo.PagingTo-this.PagingSize;

  if((this.OnPagingUpdating)&&(!ngVal(this.OnPagingUpdating(this,pginfo),false))) return;

  if(this.Controls.Paging)
  {
    var v=pginfo.PagingVisible;
    if(v!=this.Controls.Paging.Visible)
    {
      this.Controls.Paging.SetVisible(v);
      if(!this.PagingInside) this.Controls.List.SetBounds({B: (v ? (typeof this.draw_paging_height !== 'undefined' ? this.draw_paging_height : ng_OuterHeight(this.Controls.Paging.Elm())) /*this.Controls.Paging.Bounds.H*/ : 0) });
    }
  }

  var e,c,v;
  // update FirstPage
  c=this.Controls.FirstPage;
  if(c)
  {
    e=pginfo.FirstPage;
    c.SetEnabled(this.Enabled && e);
    if(this.PagingType!=plPagingUser)
    {
      v=(c.InitVisible && (e || (!this.PagingHideDisabled)));
      if(c.Visible!=v) pginfo.Update=true;
      c.SetVisible(v);
    }
  }
  // update PrevPage
  c=this.Controls.PrevPage;
  if(c)
  {
    e=pginfo.PrevPage;
    c.SetEnabled(this.Enabled && e);
    if(this.PagingType!=plPagingUser)
    {
      v=(c.InitVisible && (e || (!this.PagingHideDisabled)));
      if(c.Visible!=v) pginfo.Update=true;
      c.SetVisible(v);
    }
  }
  // update NextPage
  c=this.Controls.NextPage;
  if(c)
  {
    e=pginfo.NextPage;
    c.SetEnabled(this.Enabled && e);
    if(this.PagingType!=plPagingUser)
    {
      v=(c.InitVisible && (e || (!this.PagingHideDisabled)));
      if(c.Visible!=v) pginfo.Update=true;
      c.SetVisible(v);
    }
  }
  // update LastPage
  c=this.Controls.LastPage;
  if(c)
  {
    e=pginfo.LastPage;
    c.SetEnabled(this.Enabled && e);
    if(this.PagingType!=plPagingUser)
    {
      v=(c.InitVisible && (e || (!this.PagingHideDisabled)));
      if(c.Visible!=v) pginfo.Update=true;
      c.SetVisible(v);
    }
  }
  // update PageNo
  c=this.Controls.PageNo;
  if(c)
  {
    if(this.PagingType!=plPagingUser) c.SetVisible(c.InitVisible);
    if(c.Text!=pginfo.PageNo) { c.Text=pginfo.PageNo; if(c.Visible) pginfo.Update=true; }
  }

  // update paging
  var checked,pg=pginfo.PagingTo;
  if(pginfo.PagingFrom<0) pginfo.PagingFrom=0;
  for(var i=this.PagingSize-1;i>=0;i--)
  {
    c=this.Controls['Page'+i];
    if((!c)||(typeof c==='undefined')) continue;
    txt=''+(pg+1);
    if(c.Text!=txt) { c.Text=txt; pginfo.Update=true; }
    c.Page=pg;
    checked=((pg==this.Page) ? 1 : 0);
    v=(this.PagesVisible && (pg>=pginfo.PagingFrom));
    if(c.Checked!=checked) { c.Checked=checked; if(v) pginfo.Update=true; }
    c.SetVisible(v);
    pg--;
  }
  if((this.OnPagingUpdated)&&(!ngVal(OnPagingUpdated(this,pginfo),false))) return;

  if((pginfo.Update)&&(this.Controls.Paging)) { this.Controls.Paging.Update(); return true; }
  return false;
}

function npgl_FirstPage()
{
  this.SetPage(plFirstPage);
}

function npgl_NextPage()
{
  this.SetPage(this.Page+1);
}

function npgl_PrevPage()
{
  this.SetPage(this.Page-1);
}

function npgl_LastPage()
{
  this.SetPage(plLastPage);
}

function npgl_PageByIndex(idx)
{
  var d,pgstart=0,pg=0;
  var list=this.Controls.List;
  if(!list) return 0;
  if(idx<0) idx=0;
  var len=this.GetLength();
  if(idx>=len) idx=len-1;
  if(this.DisplayMode!=plDisplayFixed)
  {
    var d,mind=100000;
    for(var i in list.page_start)
    {
      s=list.page_start[i];
      if(typeof s!=='undefined')
      {
        d=Math.abs(s-idx);
        if(d<mind) { mind=d; pg=parseInt(i); pgstart=parseInt(s); }
      }
    }
  }
  if(this.DisplayedItems>0)
  {
    d=Math.floor((idx-pgstart)/this.DisplayedItems);
    pg+=d;
  }
  return pg;
}

function npgl_OnKeyDown(e)
{
  switch(e.keyCode)
  {
    case 33:
    {
      var pl=e.Owner.Owner.Owner;
      if((pl)&&(pl.KeyEvents)) pl.PrevPage();
      return false;
    }
    case 34:
    {
      var pl=e.Owner.Owner.Owner;
      if((pl)&&(pl.KeyEvents)) pl.NextPage();
      return false;
    }
  }
  return true;
}

function npgl_PageButtonClick(e)
{
  var pg=e.Owner.Page;
  if(typeof pg !== 'undefined') e.Owner/*button*/.Owner/*controls*/.Owner/*pagelist*/.SetPage(pg);
}

function npgl_NeedData(idx,cnt)
{
  var list=this.Controls.List;
  if((!list)||(cnt<=0)) return true;

  if(idx>=list.Items.length)
  {
    return this.DoLoadData(idx,cnt);
  }
  for(var i=0;(i<cnt)&&(idx+i<=list.Items.length);i++)
  {
    if(!this.IsDataLoaded(idx+i))
    {
      if(!this.DoLoadData(idx+i,cnt-i)) return false;
      if(this.AsyncData) break;
    }
  }
  return true;
}

function npgl_IsDynamicData()
{
  return ((this.OnLoadData)||(this.AsyncDataURL!=''));
}

function npgl_IsDataLoaded(idx)
{
  if(!this.IsDynamicData()) return true;

  var list=this.Controls.List;
  if(!list) return true;

  if(this.OnIsDataLoaded) return this.OnIsDataLoaded(this,list,idx);

  if(idx<0) return true;
  if(idx>=list.Items.length) return false;

  // if caching is disabled, anything outside current view is not loaded (up-to-date)
  if((!this.CacheData)&&((idx<this.TopIndex)||(idx>=this.TopIndex+this.DisplayedItems))) return false;

  var it=list.Items[idx];
  if(typeof it==='undefined') return false;
  for(var i in it) // if any property exists data loaded
  {
    return true;
  }
  return false;
}

function npgl_InvalidateData(idx, cnt)
{
  var list=this.Controls.List;
  if(!list) return;

  if(typeof idx === 'undefined')
  {
    idx=0;
    cnt=list.Items.length;
  }
  if(typeof cnt==='undefined') return;

  if(this.IsDynamicData())
  {
    if((!this.OnInvalidateData)||(ngVal(this.OnInvalidateData(this,idx,cnt),false)))
    {
      if(idx<list.Items.length)
        for(var i=0;(i<cnt)&&(idx+i<=list.Items.length);i++)
        {
          list.do_remove(list.Items[idx+i],list);
          delete list.Items[idx+i];
        }
    }

    if(!this.IsAsyncLoadingBlock(idx, cnt))
    {
      var to=idx+cnt;
      if(!this.AsyncWaiting())
      {
        var lato=this.last_asyncdata_index+this.last_asyncdata_count;
        if(!((idx<this.last_asyncdata_index)&&(to<this.last_asyncdata_index))||((idx>=lato)&&(to>=lato)))
        {
          this.last_asyncdata_index=-1;
          this.last_asyncdata_count=0;
        }
      }
    }
  }
  var ato=this.TopIndex+this.DisplayedItems;
  if(!((idx<this.TopIndex)&&(to<this.TopIndex))||((idx>=ato)&&(to>=ato))) list.Update();
}



function npgl_AsyncTimeout(lid)
{
  var l=ngGetControlById(lid, 'ngPanel');
  if(l)
  {
    if(l.async_datatimeout_timer) clearTimeout(l.async_datatimeout_timer);
    l.async_datatimeout_timer=null;
    if(l.AsyncWaiting())
    {
      l.DoLoadData(l.async_dataindex,l.async_datacount,true); // retry load
      if(l.async_datatimeout_retry<0) // no more attempts, set empty data
        l.SetAsyncData(l.async_dataindex, new Array());
    }
  }
}

function npgl_Refresh()
{
  this.InvalidateData(this.TopIndex,this.DisplayedItems);
}

function npgl_GetRPC()
{
  if(!this.IsDynamicData()) return null;
  if(!this.async_rpc)
  {
    this.async_rpc=new ngRPC(this.ID);
    this.async_rpc.nocache=true;
  }
  return this.async_rpc;
}

function npgl_DoLoadData(idx,cnt,retry)
{
  if(!this.IsDynamicData()) return true;

  var list=this.Controls.List;
  if(!list)
  {
    this.async_datatimeout_retry=-1;
    return false;
  }

  if(typeof this.MaxLength !== 'undefined')
  {
    if(idx>this.MaxLength) cnt=0;
    else if(idx+cnt>this.MaxLength) cnt=this.MaxLength-idx;
  }

  if((typeof cnt === 'undefined')||(cnt<1))
  {
    this.async_datatimeout_retry=-1;
    return true;
  }

  var lato=this.last_asyncdata_index+this.last_asyncdata_count;
  var ato=idx+cnt;
  if((idx>=this.last_asyncdata_index)&&(idx<lato)&&(ato>=this.last_asyncdata_index)&&(ato<=lato))
  {
    this.async_datatimeout_retry=-1;
    return true; // data was already loaded during last load data
  }

  if((this.async_dataindex==idx)&&(this.async_datacount==cnt)&&(ngVal(retry,false)))
  {
    this.async_datatimeout_retry--;
    if(this.async_datatimeout_retry<0) // no more retry, data loading failed
    {
      this.async_datatimeout_retry=-1;
      return true;
    }
    this.async_dataindex = undefined;
    this.async_datacount = undefined;
  }
  else if(!this.AsyncWaiting()) this.async_datatimeout_retry=this.AsyncDataRetryCnt;

  if(this.AsyncData)
  {
    if(this.AsyncWaiting()) return false;

    this.async_dataindex = idx;
    this.async_datacount = cnt;

    // Set timeout timer
    if(this.async_datatimeout_timer) clearTimeout(this.async_datatimeout_timer);
    this.async_datatimeout_timer=null;
    if((this.AsyncDataTimeout>0)&&(this.async_datatimeout_retry>=0))
      this.async_datatimeout_timer=setTimeout("npgl_AsyncTimeout('"+this.ID+"');",this.AsyncDataTimeout*1000);
  }

  var data;
  if(this.OnLoadData) data=this.OnLoadData(this,list,idx,cnt);
  else
  {
    if(!this.async_rpc)
    {
      this.async_rpc=new ngRPC(this.ID);
      this.async_rpc.nocache=true;
    }
    var url=this.AsyncDataURL;
    url=ng_AddURLParam(url,'id='+ng_URLEncode(this.ID)+'&i='+idx+'&c='+cnt);
    if((typeof ngApp==='object')&&(ngApp)) url=ng_AddURLParam(url,'lang='+ngApp.Lang);
    if(this.OnAsyncURLRequest) url=this.OnAsyncURLRequest(this,url,idx,cnt);
    if((url!='')&&(this.async_rpc)) this.async_rpc.sendRequest(url);
  }
  if((typeof data==='object')&&(data))
  {
    var j;
    if((data.length>0)&&(data.length<cnt)) // trim length if not enough data
    {
      this.SetLength(idx+data.length);
    }
    for(var i=0;i<data.length;i++)
    {
      j=i+idx;
      if(j>=list.Items.length)
      {
        list.Items.length=j;
        if((typeof this.MaxLength!=='undefined')&&(this.MaxLength<j)) this.MaxLength=j;
      }
      if(typeof data[i] !== 'undefined')  list.Replace(j,ng_CopyVar(data[i]));
    }
  }
  return true;
}

function npgl_AsyncWaiting()
{
  return (ngVal(this.async_dataindex,-1)>=0);
}

function npglSetAsyncDataCallback(lid, idx, data, length)
{
  var l=ngGetControlById(lid, 'ngPanel');
  if(!l) return false;
  if(typeof length!=='undefined') l.SetLength(length);
  l.SetAsyncData(idx,data);
  return true;
}

function npgl_SetAsyncData(idx, data)
{
  if(!this.AsyncWaiting()) return;
  var list=this.Controls.List;
  if(!list) return;

  var changed=false;
  idx=ngVal(idx,this.async_dataindex);
  if((this.OnSetAsyncData)&&(!ngVal(this.OnSetAsyncData(this, idx, data),false))) return;
  if((typeof data==='object')&&(data)&&(idx!=999999999)) // data available and not length detection
  {
    var j;
    var asynclast=this.async_dataindex+this.async_datacount;
    if((idx==this.async_dataindex)&&(data.length>0)&&(data.length<this.async_datacount)) // loading current block, trim length if not enough data
    {
      this.SetLength(idx+data.length);
      changed=true;
    }
    for(var i=0;i<data.length;i++)
    {
      j=i+idx;
      if(j>=list.Items.length)
      {
        list.Items.length=j;
        if((typeof this.MaxLength!=='undefined')&&(this.MaxLength<j)) this.MaxLength=j;
      }
      if(typeof data[i] !== 'undefined')
      {
        list.Replace(j,ng_CopyVar(data[i]));
        if((j>=this.async_dataindex)&&(j<asynclast)) changed=true;
      }
    }
    if((!data.length)&&(!idx)&&(typeof this.MaxLength==='undefined')) { this.SetLength(0); changed=true; }
  }
  idx=this.async_dataindex;
  var cnt=this.async_datacount;

  // check if all required data are filled
  if(!changed)
    for(var i=0;(i<cnt)&&(idx+i<list.Items.length);i++)
    {
      if(!this.IsDataLoaded(idx+i)) return;
    }

  idx=this.async_dataindex;
  if((this.IsAsyncLoadingBlock(this.TopIndex,this.DisplayedItems))||(this.List.Loading)) changed=true;

  this.last_asyncdata_index=this.async_dataindex;
  this.last_asyncdata_count=this.async_datacount;

  // Clear timeout timer
  if(this.async_datatimeout_timer) clearTimeout(this.async_datatimeout_timer);
  this.async_datatimeout_timer=null;

  this.async_dataindex=undefined;
  this.async_datacount=undefined;
  if(typeof this.async_datapage!=='undefined') // request was beyond length
  {
    var p=this.async_datapage;
    var len=this.GetLength();
    if(idx>=len) p=this.PageByIndex(len);
    delete this.async_datapage;
    if(this.Page!=p)
    {
      this.SetPage(p);
      return;
    }
  }
  if((typeof data!=='object')||(changed)) list.Update();
}

function npgl_SetLength(l)
{
  if(this.OnSetLength) l=this.OnSetLength(this,l);

  if(!this.IsDynamicData()) // not dynamic data, adjust list length
  {
    if(typeof l === 'undefined') return;

    var list=this.Controls.List;
    if(list) list.Items.length=l;
  }
  else
  {
    this.MaxLength=l;

    if(typeof l === 'undefined') return;

    var list=this.Controls.List;
    if((list)&&(l<list.Items.length)) list.Items.length=l;
  }
}

function npgl_GetLength()
{
  if((this.IsDynamicData())&&(typeof this.MaxLength !== 'undefined')) return this.MaxLength;
  var list=this.Controls.List;
  return (list ? list.Items.length : 0);
}

function npgl_IsAsyncLoadingBlock(idx, cnt)
{
  if(!this.AsyncWaiting()) return false;
  var to=idx+cnt;
  var ato=this.async_dataindex+this.async_datacount;
  return (!((idx<this.async_dataindex)&&(to<this.async_dataindex))||((idx>=ato)&&(to>=ato)));
}

function npgl_IndexOf(it, parent)
{
  var pl=this.Owner.Owner;
  if(pl)
  {
    var list=parent;
    if((!list)||(list==this))
    {
      for(var i=pl.TopIndex;(i<pl.TopIndex+pl.DisplayedItems)&&(i<this.Items.length);i++)
        if(this.Items[i]==it) return i;
    }
  }
  return this.DefaultIndexOf(it,parent);
}

function npgl_Reset(doclear)
{
  var list=this.Controls.List;
  if(list) list.BeginUpdate();

  delete this.firstitemselected;
  this.MaxLength = undefined;
  this.async_dataindex = undefined;
  this.async_datacount = undefined;
  this.last_asyncdata_index=-1;
  this.last_asyncdata_count=0;

  if(list) list.ClearSelected();
  this.FirstPage();
  this.InvalidateData();
  if(list)
  {
    if(ngVal(doclear,false)) list.Clear();
    list.EndUpdate();
  }
}

function npgl_GetPageTopItems()
{
  var items=new Array();
  var list=this.Controls.List;
  for(var i=this.TopIndex;(i<this.TopIndex+this.DisplayedItems)&&(i<list.Items.length);i++)
  {
    if(i<0) continue;
    items[items.length]=list.Items[i];
  }
  return items;
}

function npgl_ScanPageItems(fnc, recursive, userdata)
{
  if(typeof fnc !== 'function') return false;
  var list=this.Controls.List;
  for(var i=this.TopIndex;(i<this.TopIndex+this.DisplayedItems)&&(i<list.Items.length);i++)
  {
    if(i<0) continue;

    if(!fnc(this, list.Items[i], list, userdata)) return false;
    if((ngVal(recursive,true))&&(!list.Scan(fnc, list.Items[i], userdata))) return false;
  }
  return true;
}


function npgl_ScanVisiblePageItems(fnc, recursive, userdata)
{
  if(typeof fnc !== 'function') return false;
  var list=this.Controls.List;
  for(var i=this.TopIndex;(i<this.TopIndex+this.DisplayedItems)&&(i<list.Items.length);i++)
  {
    if(i<0) continue;

    var pi=list.Items[i];
    if(typeof pi === 'undefined') continue;
    if(!ngVal(pi.Visible,true)) continue;
    if(!fnc(this, pi, list, userdata)) return false;

    if((ngVal(pi.Collapsed,false))||(typeof pi.Items === 'undefined')||(!pi.Items.length)) continue;
    if((ngVal(recursive,true))&&(!list.ScanVisible(fnc, pi, userdata))) return false;
  }
  return true;
}

/**
 *  Class: ngPageList
 *  This class implements <ngPageList> control (based on component <ngFrame>)
 */
function Create_ngPageList(def, ref, parent)
{
  var undefined;
  ng_MergeDef(def, {
    Data: {
      PagingSize: 5
    },
    Controls : {
      List: {
        Type: 'ngList',
        style: { border: '0px' },
        L: 0, T: 0, R: 0, B: 24
      },
      Paging: {
        Type: 'ngToolBar',
        L:0, B: 0, R: 0, H: 24,
        Data: {
          Visible: false
        },
        Controls: {
          FirstPage: {
            Type: 'ngButton',
            Data: {
              Text: '|<'
            },
            Events: {
              OnClick: function(e) { e.Owner/*button*/.Owner/*controls*/.Owner/*pagelist*/.FirstPage(); }
            }
          },
          PrevPage: {
            Type: 'ngButton',
            Data: {
              Text: '<'
            },
            Events: {
              OnClick: function(e) { e.Owner/*button*/.Owner/*controls*/.Owner/*pagelist*/.PrevPage(); }
            }
          },
          PageNo: {
            Type: 'ngEdit',
            W: 30,
            Data: {
              Text: '1',
              TextAlign: 'center'
            },
            Events: {
              OnKeyDown: function(e) { if(e.keyCode==13) { e.Owner/*button*/.Owner/*controls*/.Owner/*pagelist*/.SetPage(parseInt(e.Owner.GetText())-1); return false; } return true; }
            }
          },
          Page0: {
            Type: 'ngButton',
            Data: {
              Text: '1',
              TextAlign: 'center'
            },
            Events: {
              OnClick: npgl_PageButtonClick
            }
          },
          NextPage: {
            Type: 'ngButton',
            Data: {
              Text: '>'
            },
            Events: {
              OnClick: function(e) { e.Owner/*button*/.Owner/*controls*/.Owner/*pagelist*/.NextPage(); }
            }
          },
          LastPage: {
            Type: 'ngButton',
            Data: {
              Text: '>|'
            },
            Events: {
              OnClick: function(e) { e.Owner/*button*/.Owner/*controls*/.Owner/*pagelist*/.LastPage(); }
            }
          }
        }
      }
    }
  });

  // Create paging
  var pgsize=ngVal(def.Data.PagingSize,5);
  if(pgsize<0) pgsize=1;

  for(var i=1;i<pgsize;i++)
  {
    if((typeof def.Controls.Paging!=='object')||(!def.Controls.Paging)) continue;
    var bdef=new Object;
    bdef['Page'+i]=def.Controls.Paging.Controls.Page0;
    ng_MergeDef(def.Controls.Paging.Controls, bdef);
  }

  c=ngCreateControlAsType(def, 'ngFrame', ref, parent);
  if(!c) return c;
  /*
   *  Group: Properties
   */
  /*  Variable: DisplayMode
   *  ...
   *  Type: int
   *  Default value: *plDisplayFit*
   */
  c.DisplayMode = plDisplayFit;

  /*  Variable: PagingType
   *  ...
   *  Type: int
   *  Default value: *plPagingSimple*
   */
  c.PagingType = plPagingSimple;
  /*  Variable: PagingSize
   *  ...
   *  Type: int
   *  Default value: *5*
   */
  c.PagingSize=pgsize;

  /*  Variable: PagingMinSize
   *  ...
   *  Type: int
   */
  c.PagingMinSize=undefined;

  /*  Variable: PagingLookout
   *  ...
   *  Type: int
   */
  c.PagingLookout = undefined;

  /*  Variable: PagingInside
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  c.PagingInside = true;

  /*  Variable: PagingHideDisabled
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  c.PagingHideDisabled = false;
  /*  Variable: DisplayPaging
   *  ...
   *  Type: int
   *  Default value: *plDisplayPagingMorePages*
   */
  c.DisplayPaging=plDisplayPagingMorePages;

  /*  Variable: KeyEvents
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  c.KeyEvents=true;

  /*  Variable: AutoSelectFirstItem
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  c.AutoSelectFirstItem=false;

  /*  Variable: Page
   *  ...
   *  Type: int
   *  Default value: *0*
   */
  c.Page=0;

  /*  Variable: TopIndex
   *  ...
   *  Type: int
   *  Default value: *0*
   */
  c.TopIndex=0;
  /*  Variable: DisplayedItems
   *  ...
   *  Type: int
   *  Default value: *10*
   */
  c.DisplayedItems=10;

  /*  Variable: MaxLength
   *  ...
   *  Type: int
   *  Default value: *undefined*
   */
  c.MaxLength=undefined;

  /*  Variable: CacheData
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  c.CacheData = true;

  /*  Variable: AsyncData
   *  ...
   *  Type: bool
   *  Default value: *true*
   */
  c.AsyncData = true;
  /*  Variable: AsyncDataTimeout
   *  ...
   *  Type: int
   *  Default value: *30*
   */
  c.AsyncDataTimeout = 30;
  /*  Variable: AsyncDataRetryCnt
   *  ...
   *  Type: int
   *  Default value: *3*
   */
  c.AsyncDataRetryCnt = 3;

  /*  Variable: AsyncDataURL
   *  ...
   *  Type: string
   *  Default value: *''*
   */
  c.AsyncDataURL = ''

  /*
   *  Group: Methods
   */
  /*  Function: SetPage
   *  Sets current page.
   *
   *  Syntax:
   *    void *SetPage* (int page)
   *
   *  Returns:
   *    -
   *
   *  Constants:
   *    plFirstPage - first page
   *    plLastPage  - last page
   */
  c.SetPage = npgl_SetPage;

  /*  Function: NextPage
   *  Switches to next page.
   *
   *  Syntax:
   *    void *NextPage* ()
   *
   *  Returns:
   *    -
   */
  c.NextPage = npgl_NextPage;
  /*  Function: PrevPage
   *  Switches to previous page.
   *
   *  Syntax:
   *    void *PrevPage* ()
   *
   *  Returns:
   *    -
   */
  c.PrevPage = npgl_PrevPage;
  /*  Function: FirstPage
   *  Switches to first page.
   *
   *  Syntax:
   *    void *FirstPage* ()
   *
   *  Returns:
   *    -
   */
  c.FirstPage= npgl_FirstPage;
  /*  Function: LastPage
   *  Switches to last page.
   *
   *  Syntax:
   *    void *LastPage* ()
   *
   *  Returns:
   *    -
   */
  c.LastPage = npgl_LastPage;


  /*  Function: IsPrevPageAvailable
   *  Checks if previous page is available.
   *
   *  Syntax:
   *    bool *IsPrevPageAvailable* ()
   *
   *  Returns:
   *    TRUE if previous page is available.
   */
  c.IsPrevPageAvailable = npgl_IsPrevPageAvailable;
  /*  Function: IsNextPageAvailable
   *  Checks if next page is available.
   *
   *  Syntax:
   *    bool *IsNextPageAvailable* ()
   *
   *  Returns:
   *    TRUE if next page is available.
   */
  c.IsNextPageAvailable = npgl_IsNextPageAvailable;

  /*  Function: PageByIndex
   *  Returns page number by given item index.
   *
   *  Syntax:
   *    int *PageByIndex* (int index)
   *
   *  Returns:
   *    Page number.
   */
  c.PageByIndex = npgl_PageByIndex;

  /*  Function: SetPagingType
   *  Sets visible paging elements.
   *
   *  Syntax:
   *    void *SetPagingType* (int pagingtype [, bool update=true])
   *
   *  Returns:
   *    -
   */
  c.SetPagingType = npgl_SetPagingType;

  c.IsPagingVisible = npgl_IsPagingVisible;
  c.UpdatePaging = npgl_UpdatePaging;

  c.SetAsyncData = npgl_SetAsyncData;

  /*  Function: SetLength
   *  Sets number of items in list.
   *
   *  Syntax:
   *    void *SetLength* (int length)
   *
   *  Returns:
   *    -
   */
  c.SetLength = npgl_SetLength;
  /*  Function: GetLength
   *  Gets number of items in list.
   *
   *  Syntax:
   *    int *GetLength* ()
   *
   *  Returns:
   *    Number of items.
   */
  c.GetLength = npgl_GetLength;

  /*  Function: IsDynamicData
   *  Determines if list is using dynamic data from server.
   *
   *  Syntax:
   *    bool *IsDynamicData* ()
   *
   *  Returns:
   *    TRUE if list loads dynamic data from server.
   */
  c.IsDynamicData = npgl_IsDynamicData;

  /*  Function: GetRPC
   *  Gets current ngRPC for server data loading if dynamic.
   *
   *  Syntax:
   *    ngRPC *GetRPC* ()
   *
   *  Returns:
   *    Instance of ngRPC or null if not dynamic.
   */
  c.GetRPC = npgl_GetRPC;

  c.IsDataLoaded = npgl_IsDataLoaded;
  c.DoLoadData = npgl_DoLoadData;
  c.NeedData = npgl_NeedData;

  /*  Function: GetPageTopItems
   *  Provides access to top level items on current page.
   *
   *  Syntax:
   *    array *GetPageTopItems* ()
   *
   *  Returns:
   *    Array of items on current page.
   */
  c.GetPageTopItems = npgl_GetPageTopItems;

  /*  Function: InvalidateData
   *  Invalidates loaded data from server.
   *
   *  Syntax:
   *    void *InvalidateData* ([int idx=0, int cnt=max])
   *
   *  Returns:
   *    -
   */
  c.InvalidateData = npgl_InvalidateData;
  /*  Function: Refresh
   *  Invalidates data from server on current page.
   *
   *  Syntax:
   *    void *Refresh* ()
   *
   *  Returns:
   *    -
   */
  c.Refresh = npgl_Refresh;
  /*  Function: Reset
   *  Switches to the first page, clears selection and invalidates
   *  all data loaded from server if list is dynamic.
   *
   *  Syntax:
   *    void *Reset* ([bool doclear=false])
   *
   *  Returns:
   *    -
   */
  c.Reset = npgl_Reset;
  /*  Function: ScanPageItems
   *  Recursive scan items on current page.
   *
   *  Syntax:
   *    bool *ScanPageItems* (function scanfnc [, bool recursive=true, mixed userdata])
   *
   *  Returns:
   *    -
   */
  c.ScanPageItems = npgl_ScanPageItems;

  /*  Function: ScanVisiblePageItems
   *  Recursive scan visible items on current page..
   *
   *  Syntax:
   *    bool *ScanVisiblePageItems* (function scanfnc [, bool recursive=true, mixed userdata])
   *
   *  Returns:
   *    -
   */
  c.ScanVisiblePageItems = npgl_ScanVisiblePageItems;

  /*  Function: ShowLoading
   *  Shows default loading control, if available.
   *
   *  Syntax:
   *    void *ShowLoading* (bool visible)
   *
   *  Returns:
   *    -
   */
  c.ShowLoading=npgl_ShowLoading;

  c.IsAsyncLoadingBlock = npgl_IsAsyncLoadingBlock;

  c.loading_displayed=false;
  c.last_asyncdata_index=-1;
  c.last_asyncdata_count=0;
  c.async_rpc=null;
  //c.async_dataindex = undefined;
  //c.async_datacount = undefined;

  c.AsyncWaiting = npgl_AsyncWaiting;


  /*
   *  Group: Events
   */
  /*
   *  Event: OnPageChanging
   */
  c.OnPageChanging = null;
  /*
   *  Event: OnPageChanged
   */
  c.OnPageChanged = null;
  /*
   *  Event: OnPagingUpdating
   */
  c.OnPagingUpdating = null;
  /*
   *  Event: OnPagingUpdated
   */
  c.OnPagingUpdated = null;
  /*
   *  Event: OnLoadData
   */
  c.OnLoadData = null;
  /*
   *  Event: OnInvalidateData
   */
  c.OnInvalidateData = null;
  /*
   *  Event: OnAsyncURLRequest
   */
  c.OnAsyncURLRequest = null;
  /*
   *  Event: OnSetAsyncData
   */
  c.OnSetAsyncData = null;
  /*
   *  Event: OnSetLength
   */
  c.OnSetLength = null;
  /*
   *  Event: OnShowLoading
   */
  c.OnShowLoading = null;
  /*
   *  Event: OnHideLoading
   */
  c.OnHideLoading = null;

  /*
   *  Group: Controls
   */
  /*
   *  Object: List
   *  <ngList>
   */
  /*
   *  Object: Paging
   *  <ngToolBar>
   */
  /*
   *  Object: FirstPage
   *  <ngButton>
   */
  /*
   *  Object: PrevPage
   *  <ngButton>
   */
  /*
   *  Object: PageNo
   *  <ngEdit>
   */
  /*
   *  Object: Page0
   *  <ngButton>
   */
  /*
   *  Object: NextPage
   *  <ngButton>
   */
  /*
   *  Object: LastPage
   *  <ngButton>
   */

  def.OnCreated=ngAddEvent(def.OnCreated, function (c, ref) {

    // Group pages in paging and save visibility
    if(c.Controls.Paging)
    {
      var cc=c.Controls.Paging.ChildControls;

      if(typeof cc !== 'undefined')
      {
        var reverse=(c.Controls.Paging.HAlign=='right') // reverse paging
        if(reverse)
        {
          var ncc=new Array()
          var j=0;
          for(var i=cc.length-1;i>=0;i--)
            ncc[j++]=cc[i];

          c.Controls.Paging.ChildControls=ncc;
          cc=ncc;
        }

        var c0;
        for(var j=1;j<c.PagingSize;j++)
        {
          var c0=c.Controls['Page'+j];
          if(!c0) continue;
          c0.InitVisible=c0.Visible;
          for(var i=cc.length-1;i>=0;i--)
            if(cc[i]==c0)
            {
              cc.splice(i, 1);
              break;
            }
        }

        var pidx=-1,c0;
        for(var i=cc.length-1;i>=0;i--)
        {
          c0=cc[i];
          c0.InitVisible=c0.Visible;
          if(c0==c.Controls.Page0) pidx=i+1;
        }
        if(pidx>=0)
        {
          if(reverse)
          {
            pidx--;
            for(var j=c.PagingSize-1;j>0;j--)
            {
              c0=c.Controls['Page'+j];
              if(c0) cc.splice(pidx++,0,c0);
            }
          }
          else
            for(var j=1;j<c.PagingSize;j++)
            {
              c0=c.Controls['Page'+j];
              if(c0) cc.splice(pidx++,0,c0);
            }
        }
      }
    }
    var pt=c.PagingType;
    c.PagingType=c.PagingType-1;
    c.SetPagingType(pt,false);

    c.AddEvent(npgl_DoUpdate,'DoUpdate');
    var l=c.Controls.List;
    c.List=ngVal(l,null);
    if(l)
    {
      l.draw_page=-1;
      l.draw_length=-1;
      l.draw_height=0;
      l.paging_needs_update=true;
      l.page_start_found=true;
      l.init_page=c.Page;
      l.in_measure=false;
      l.displayed_items=c.DisplayedItems;
      l.display_mode=c.DisplayMode;
      l.ListPagingChanged=npgl_ListPagingChanged;
      l.ListPagingChanged();

      l.DefaultIndexOf=l.IndexOf;
      l.IndexOf=npgl_IndexOf;

      l.AddEvent(npgl_DoUpdateBefore,'DoUpdate');
      l.AddEvent('OnKeyDown', npgl_OnKeyDown);
      l.AddEvent('DoUpdate',npgl_DoUpdateAfter);
      l.AddEvent('OnDrawItem', npgl_OnDrawItem);
      l.AddEvent('OnExpanding', npgl_OnExpanding);
      l.AddEvent('OnAdd', npgl_OnListChanged);
      l.AddEvent('OnRemove', npgl_OnListChanged);
    }
    c.Page=0;
  });
  return c;
}

if(typeof ngUserControls === 'undefined') ngUserControls = new Array();
ngUserControls['list'] = {

  OnInit: function() {
    ngRegisterControlType('ngList', function() { return new ngList; });
    ngRegisterControlType('ngPageList', Create_ngPageList);
  }
};

/*!
 * Controls.js - menu.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */


/** 
 *  Group: Menu
 *  Menu components.    
 */

/** 
 *  Group: Variables   
 */
/** 
 *  Variable: ngCurrentPopupMenu
 *  Reference to active popup <ngMenu>.
 */  
var ngCurrentPopupMenu = null;

/** 
 *  Variable: ngCurrentAppPopupMenu
 *  Reference to active application popup <ngMenu> (ngApp.PopupMenu).
 */  
var ngCurrentAppPopupMenu = null;


// --- Menu Functions ----------------------------------------------------------

/*
  Menu captions:

  Submenus are delimited by backslashes ('\').

  <caption>         - submenu identified by its <caption>
  %<name>[:caption] - <name> represents existing component ID or submenu ID
  #<itemindex>      - submenu at exact position <itemindex>

  The following captions are used only when new items are inserted.

  @#<itemindex>[+|-]:<caption> - inserts menu item <caption> after(+)/before(-) item on position <itemindex>
  @%<name>[+|-]:<caption>      - inserts menu item <caption> after(+)/before(-) item identified by <name>
  @<caption>[+|-]:<caption>    - inserts menu item <caption> after(+)/before(-) item <caption>
  @[+|-]:<caption>             - inserts menu item <caption> after(+)/before(-) <base> menu item

  Examples:

  "%CompactWindow\Tutorial\Menu 1"
  "%FullWindow\#1\Test"
  "%FullWindow\%Tools\Menu 2"
  "%FullWindow\%Tools:My Tools\Menu 2"
  "%Tray\@Options-:Menu Before Options"
  "%Tray\@2+:Menu Ater Item nr. 2"
  "%Tray\@%MHelp:Menu After Help"
*/

function ngm_gm_getlist(list)
{
  if(list)
  {
    if(list.CtrlType=='ngButton') 
    {
      list=list.Menu;
      if(!list) return null;
    }
    if((list.CtrlType!='ngList')&&(list.CtrlType!='ngToolBar')) 
    {
      list=list.SubMenu;
      if(!list) return null;
    }
    if((list.CtrlType!='ngList')&&(list.CtrlType!='ngToolBar')) return null;
  }
  return list;
}

function ngGetMenu(parent, path, create, oncreatefnc, userdata)
{
  var undefined,list=ngm_gm_getlist(parent);
  var ret=null;
    
  create=ngVal(create,true);
  oncreatefnc=ngVal(oncreatefnc, null);
  try
  {
    var s=0,name,found,nit,ngname,item=null, items, pos,at,id;
    for(var i=0;i<=path.length;i++)
    {
      if((i!=path.length)&&(path.charAt(i)!="\\")) continue;
      name=path.substr(s,i-s);
      if(name!='')
      {
        if((!list)&&(name.charAt(0)!='%')) return null;        
        if(list) 
        {
          if(list.CtrlType=='ngToolBar') items = list.Menu; 
          else items = list.Items;
        } else items = undefined;
        
        pos=-1;
        id='';
        found=null;
        switch(name.charAt(0))
        {
          case '#':
            if((list)&&(typeof items !== 'undefined'))
            {
              name=name.substr(1,name.length-1);
              var idx=parseInt(name);
              if((idx>0)&&(idx<=items.length)) found = items[idx-1];
            }
            break;
          case '%':
          {
            name=name.substr(1,name.length-1);
            var idx=name.indexOf(':');
            if(idx>=0)
            {
              id=name.substr(0,idx);              
              name=name.substr(idx+1,name.length-idx);
            }
            else { id=name; name=''; }

            var rlist=ngGetControlById(id);
            if(rlist) 
            { 
              list=ngm_gm_getlist(rlist); if(!list) return null; 
              item=null; s=i+1; 
              if(list.CtrlType=='ngToolBar') items = list.Menu; 
              else items = list.Items;
              continue; 
            }
            else
            {
              if(!list) return null;
              for(var j=0;j<items.length;j++)
                if(items[j].ID == id) { found = items[j]; break; }
            }
            break;
          }
          case '@':
          {
            var idx=name.indexOf(':');
            if(idx>=0)
            {
              at=name.substr(1,idx-1);              
              name=name.substr(idx+1,name.length-idx);
              if(at.length>0)
              {
                var after=(at.charAt(at.length-1)=='-' ? 0 : 1);
                if((at.charAt(at.length-1)=='-')||(at.charAt(at.length-1)=='+')) at=at.substr(0,at.length-1);
                if(at.charAt(0)=='#') pos=parseInt(at.substr(1,at.length-1));
                else
                {
                  if(at.charAt(0)=='%')
                  {
                    found=null;
                    at=at.substr(1,at.length-1);
                    var rlist=ngGetControlById(at);
                    if(rlist) 
                    { 
                      rlist=ngm_gm_getlist(rlist); if(!rlist) return null; 
                      list=rlist.Owner; item=null;
                      if(!list) return null;
                      if(list.CtrlType=='ngToolBar') items = list.Menu; 
                      else items = list.Items;
                      if(typeof items !== 'undefined')
                        for(var j=0;j<items.length;j++)
                          if((items[j].SubMenu == rlist)||(items[j].Menu == rlist)) { pos=j+after; break; }                        
                    }
                    else
                    {
                      if(typeof items !== 'undefined')
                        for(var j=0;j<items.length;j++)
                          if(items[j].ID == at) 
                          { 
                            pos=j+after;
                            break;
                          }
                    }
                  }
                  else
                  {
                    if((list)&&(!item)&&(typeof items !== 'undefined'))
                    {
                      if(ngname)
                      {
                        for(var j=0;j<items.length;j++)
                          if(items[j].ngText == at) { pos=j+after; break; }
                      }
                      else
                      {
                        for(var j=0;j<items.length;j++)
                          if(items[j].Text == at) { pos=j+after; break; }
                      }
                    }
                  }
                }
              }              
            }
          }
          default:
            if(name.charAt(0)=='$') { ngname=true; name=name.substr(1,name.length-1); }
            else ngname=false;
            if((list)&&(!item)&&(name!='-')&&(typeof items !== 'undefined'))
            {
              if(ngname)
              {
                for(var j=0;j<items.length;j++)
                  if(items[j].ngText == name) { found = items[j]; break; }
              }
              else
              {
                for(var j=0;j<items.length;j++)
                  if(items[j].Text == name) { found = items[j]; break; }
              }
            }
            break;
        }
      
        if(found) 
        {
          item = found;
          if((list)&&(list.CtrlType=='ngToolBar')) 
          {
            if(found.Menu) { list=found.Menu; item = null; }
          }
          else
          { 
            if(found.SubMenu) { list=found.SubMenu; item = null; }
          }
          ret=found;
        }
        else {
          if((create)&&(list))
          {
            if(list.CtrlType=='ngToolBar')
            {              
              var ld;
              var btndef = (typeof list.ButtonDef === 'object' ? list.ButtonDef : null);

              if(btndef) ld=ng_CopyVar(btndef);
              else {
                ld=new Object;
                ld.Type = (typeof list.DefType !== 'undefined' ? list.DefType+'Button' : 'ngButton');    
              }
              if(typeof ld.className === 'undefined') ld.className=list.BaseClassName+'Button';
              if(typeof ld.Data === 'undefined') ld.Data = new Object;

              if(ngname)
              {
                ld.Data.ngText=name;
                ld.Data.Text=ngTxt(name);
              }
              else ld.Data.Text=name;       
              if(id!='') ld.Data.ID=id;

              ld.Menu=ng_CopyVar(list.SubMenuDef);
              if(typeof ld.Menu.Type === 'undefined') ld.Menu.Type='ngMenu';
              if((typeof ld.Menu.Data !== 'object')||(!ld.Menu.Data)) ld.Menu.Data = new Object;
              ld.Menu.Data.Items=new Array();
                    
              var ldefs={ MenuBtn: ld };
              var lref=ngCreateControls(ldefs,undefined,list.ID);
              if(lref.MenuBtn) 
              {
                lref.MenuBtn.Owner=list;
                if(typeof list.Menu === 'undefined') list.Menu = new Array();
                if((pos<0)||(pos>=list.Menu.length)) list.Menu[list.Menu.length]=lref.MenuBtn;
                else 
                {
                  var cc=list.ChildControls;
                  if((cc.length>0)&&(cc[cc.length-1]==lref.MenuBtn))
                  {
                    cc.splice(cc.length-1,1);
                    cc.splice(pos,0,lref.MenuBtn);
                  }
                  list.Menu.splice(pos,0,lref.MenuBtn);
                }
                
                list.Update();
                list=lref.MenuBtn.Menu;
                nit=null;
              }
            }
            else
            {
              nit=new ngListItem;
              if(ngname)
              {
                nit.ngText=name;
                nit.Text=ngTxt(name);
              }
              else nit.Text=name;       
              if(id!='') nit.ID=id;
  
              if((oncreatefnc)&&(!ngVal(oncreatefnc(list, nit, userdata),false))) { ret=null; break; }
              
              if(item)
              {
                var def=new Object;
                def.Items=new Array(nit);
                if(ngVal(item.ID,'')!='') def.ID=item.ID; 
                list=list.CreateSubMenu(item, def);
              }
              else
              { 
                if((pos<0)||(typeof list.Items === 'undefined')||(pos>=list.Items.length)) list.Add(nit);
                else list.Insert(pos,nit);
              }
            }

            item=nit;
            ret=nit;
          }
          else { ret=null; break; }
        }      
      }
      s=i+1;
    }
  }
  catch(e)
  {
  }
  return ret;  
}

// --- ngMenu ------------------------------------------------------------------

function ngmn_WindowWidth()
{
  var o=(ngApp ? ngApp.Elm() : null);
  if(o) return ng_ClientWidth(o);
  return ng_WindowWidth();
}

function ngmn_WindowHeight()
{
  var o=(ngApp ? ngApp.Elm() : null);
  if(o) return ng_ClientHeight(o);
  return ng_WindowHeight();
}

function ngmn_GetScreenRect()
{
  var rect={ Left: 0, Top: 0, Right: 0, Bottom: 0 };
  
  var wo=(ngApp ? ngApp.Elm() : null);
  if(wo) 
  {
    rect.Right=ng_ClientWidth(wo);
    rect.Bottom=ng_ClientHeight(wo);
  }
  else
  {
    rect.Right=ng_WindowWidth();
    rect.Bottom=ng_WindowHeight();
  }
  if(this.OnGetScreenRect) this.OnGetScreenRect(this,rect);
  return rect;
}

function ngmn_IsInsidePopup(t,intype,e)
{
  var tc=ngGetControlByElement(t,'ngList');
  while(tc)
  {
    if((tc===this)||(tc.ActiveSubMenu===this)) break;
    tc=tc.Owner;
  }
  return (tc ? true : false);
}

function ngmn_DisableContextMenu(e)
{
  if(!e)
  {
     e=window.event;
     e.returnValue = false;
  }
  else 
  {  
    if(e.preventDefault) e.preventDefault(); 
  }
  return false;
}

function ngmn_OnScroll(c,e,elm)
{
  c.HideSubMenu();
}

function ngmn_DoAttach(elm)
{
  if(elm) elm.oncontextmenu = ngmn_DisableContextMenu;
}

function ngmn_Update(recursive)
{    
  if(!this.Visible) return;
  if(!this.__menuvishandling)
  {
    this.__menuvishandling=true;
    var self=this;
    function parentsetvisible(c)
    {
      if(!c.Visible) self.HideSubMenu();
    }
    
    function parentdispose()
    {
      var p=this.ParentControl;
      var remove=true;
      while(p)
      {    
        if(typeof p.HideSubMenu === 'function') remove=false;
        if(remove) p.RemoveEvent('OnVisibleChanged',parentsetvisible);
        if(typeof p.PopupChildMenus!=='undefined') 
        {
          for(var i=p.PopupChildMenus.length-1;i>=0;i--)
            if(p.PopupChildMenus[i]===self) p.PopupChildMenus.splice(i,1);
        }    
        p=p.ParentControl;
      }
      return true;                
    }

    var p=this.ParentControl;
    if(p)
    {
      while((p)&&(typeof p.HideSubMenu !== 'function'))
      {    
        p.AddEvent('OnVisibleChanged',parentsetvisible);
        p=p.ParentControl;
      }
      this.AddEvent('DoDispose',parentdispose);
    }                
  }
}

function ngmn_ParentIsInsidePopup(c,t,intype,e)
{
  if(typeof c.PopupChildMenus!=='undefined') 
  {
    for(var i=0;i<c.PopupChildMenus.length;i++)
      if(c.PopupChildMenus[i].IsInsidePopup(t,intype,e)) return true;
  }   
  return false; 
}

function ngmn_ParentChildMenusVisibleChanged(c)
{
  if(!c.Visible) c.PopupChildMenus=new Array(); 
}

function ngmn_SetCurrentPopupMenu(menu)
{
  var p=menu;
  while(p)
  {                                
    if(p===ngCurrentPopupMenu) return;
    if((p!==menu)&&(ngc_IsActivePopup(p)))
    {
      if(typeof p.PopupChildMenus==='undefined') 
      {
        p.PopupChildMenus=new Array();
        p.AddEvent('OnIsInsidePopup',ngmn_ParentIsInsidePopup);
        p.AddEvent('OnVisibleChanged',ngmn_ParentChildMenusVisibleChanged);
      }
      var i;
      for(i=0;i<p.PopupChildMenus.length;i++)
        if(p.PopupChildMenus[i]===menu) break;
      if(i>=p.PopupChildMenus.length) 
        p.PopupChildMenus.push(menu);
      break;
    }
    if(p.ParentControl) p=p.ParentControl;
    else p=p.Owner;
  }
  if((ngCurrentPopupMenu)&&(ngCurrentPopupMenu!==menu))
    ngCurrentPopupMenu.HideMenu();
  ngCurrentPopupMenu=menu;
  ngc_ActivatePopup(menu);
}

function ngmn_DoPopup()
{
  var mo=this.Elm();
  if(!mo) return null;

  if((this.OnPopup)&&(!ngVal(this.OnPopup(this),false))) return null;

  this.AutoPopup = ngVal(this.AutoPopup, !this.Visible);
  this.HideSubMenu();

  if(!this.Visible)    
  {
    mo.style.left='-10000px';
    mo.style.top='-10000px';
  }
  
  // Compute xIndex by submenu level
  var maxzidx=0,po=null;
  var zidx;
  if((typeof ngModalCnt!=='undefined')&&(typeof ngModalZIndexDelta!=='undefined')) 
  {
    // move menu over modal windows
    zidx=(ngModalZIndexDelta-1000);
    zidx+=(ngModalCnt*ngModalZIndexDelta);     
  }
  else zidx=10000;
  
  var p=this;
  while((p)&&(typeof p.HideSubMenu === 'function'))
  {
    zidx++;
    p=p.Owner;
  }  
  mo.style.zIndex=zidx;
  if((typeof this.Bounds.H === 'undefined')&&((typeof this.Bounds.B === 'undefined')||(typeof this.Bounds.T === 'undefined')))
    mo.style.height='auto';
  if((typeof this.Bounds.W === 'undefined')&&((typeof this.Bounds.R === 'undefined')||(typeof this.Bounds.L === 'undefined')))
    mo.style.width='auto';
  
  this.SetVisible(true);

  var minw=ngVal(this.MinWidth,100);

  var hasframe=(!ng_EmptyVar(this.Frame));
  var resize=false;
  ng_BeginMeasureElement(mo);
  var mw=ng_OuterWidth(mo);
  if(mw<minw) { resize=true; ng_SetOuterWidth(mo,minw); }
  else if(ngOpera) ng_SetOuterWidth(mo,mw);// Opera scrollbar fix
  var maxh=this.MaxHeight;
  if(typeof maxh === 'undefined') 
  {
    var srect=this.GetScreenRect();
    maxh=srect.Bottom-srect.Top-10;
  }
  if(ng_OuterHeight(mo)>maxh) { resize=true; ng_SetOuterHeight(mo,maxh); }
  ng_EndMeasureElement(mo);
  if((resize)&&(hasframe)) this.Update();
  
  ngCurrentAppPopupMenu=null; // prevent opening ngApplication menu

  return mo;
}

function ngmn_Popup(x,y,halign,valign)
{
  var mo=this.DoPopup();
  if(!mo) return;

  halign=ngVal(halign,this.MenuHAlign);
  valign=ngVal(valign,this.MenuVAlign);
  halign=ngVal(halign,'left');
  valign=ngVal(valign,'top');

  ng_BeginMeasureElement(mo);
  var sw=ng_OuterWidth(mo); 
  var sh=ng_OuterHeight(mo); 
  ng_EndMeasureElement(mo);

  var mx,my;            
  
  var srect=this.GetScreenRect();
  if(halign==='right')
  { 
    mx=x-sw;
    if(mx<srect.Left) mx=x;
  }
  else
  {
    if(halign==='center')
    {
      mx=x-Math.round(sw/2);
    }
    else
    {
      mx=x;
    }
    if(mx+sw>srect.Right-5) mx=x-sw; // right
  }    
  if((mx<srect.Left)||(mx+sw>srect.Right-5)) mx=srect.Left+5;

  if(valign==='bottom')
  { 
    my=y-sh;
    if(my<srect.Top) my=y;
  }
  else
  {
    if(valign==='center')
    {
      my=y-Math.round(sh/2);
    }
    else
    {
      my=y;
    }
    if(my+sh>srect.Bottom-5) my=y-sh; // bottom
  }    
  if((my<srect.Top)||(my+sh>srect.Bottom-5)) my=srect.Top+5;
  
  mo.style.left=mx+'px';
  mo.style.top=my+'px';
  
  this.PopupX = x;
  this.PopupY = y;
  delete this.PopupElm; 

  this.SetFocus();
}

function ngmn_PopupCtrl(c,halign,valign)
{
  var o=null;
  // detect if it is control or just element
  if(typeof c === 'string') 
  {
    var nc=ngGetControlById(c);
    if(!nc) c=document.getElementById(c);
    else c=nc;
  }
  if(typeof c.Elm === 'function') o=c.Elm();
  else { o=c; c=null; }
   
  if(!o) return;
  
  var mo=this.DoPopup();
  if(!mo) return;

  var ox=0,oy=0;
  if(c)
  {
    halign=ngVal(halign,c.MenuHAlign);
    valign=ngVal(valign,c.MenuVAlign);
    ox=ngVal(c.MenuOverlapX,0);
    oy=ngVal(c.MenuOverlapY,0);
  }
  halign=ngVal(halign,this.MenuHAlign);
  valign=ngVal(valign,this.MenuVAlign);
  halign=ngVal(halign,'left');
  valign=ngVal(valign,'top');

  var pos=ng_ParentPosition(o,ngApp ? ngApp.Elm() : undefined);
  ng_BeginMeasureElement(o);
  pos.w=ng_OuterWidth(o);
  pos.h=ng_OuterHeight(o);
  ng_EndMeasureElement(o);
    
  ng_BeginMeasureElement(mo);
  var sw=ng_OuterWidth(mo); 
  var sh=ng_OuterHeight(mo); 
  ng_EndMeasureElement(mo);
    
  var mx,my;

  var srect=this.GetScreenRect();
  if(halign==='right')
  { 
    if(valign==='center')
    {
      mx=pos.x+pos.w+ox;
      if(mx+sw>srect.Right-5) mx=pos.x-sw-ox; // right
    }
    else
    {
      mx=pos.x+pos.w-sw-ox;
      if(mx<srect.Left) mx=pos.x+ox;
    }
  }
  else
  {
    if(halign==='center')
    {
      mx=pos.x+Math.round(pos.w/2)-Math.round(sw/2)+ox;
    }
    else
    {
      if(valign==='center')
      {
        mx=pos.x-sw-ox;
        if(mx<srect.Left) mx=pos.x+pos.w+ox;
      }
      else
      {
        mx=pos.x+ox;
      }
    }
    if(mx+sw>srect.Right-5) mx=pos.x+pos.w-sw-ox; // right
  }    
  if((mx<srect.Left)||(mx+sw>srect.Right-5)) mx=srect.Left+5;
  
  
  if(valign==='bottom')
  {
    my=pos.y-sh-oy;
    if(my<srect.Top) my=pos.y+pos.h+oy;
  }
  else
  {
    if(valign==='center')
    {
      my=pos.y+Math.round(pos.h/2)-Math.round(sh/2)+oy;
    }
    else
    {
      my=pos.y+pos.h+oy;
    }
    if(my+sh>srect.Bottom-5) my=pos.y-sh-oy; // bottom
  }
  if((my<srect.Top)||(my+sh>srect.Bottom-5)) my=srect.Top+5;
      
  mo.style.left=mx+'px';
  mo.style.top=my+'px';
  
  delete this.PopupX;
  delete this.PopupY;
  this.PopupElm = o; 
  
  this.SetFocus();
}

function ngmn_PopupSubMenu(o,halign,valign)
{
  if(!o) return;
  var mo=this.DoPopup();
  if(!mo) return;

  halign=ngVal(halign,this.MenuHAlign);
  valign=ngVal(valign,this.MenuVAlign);
  halign=ngVal(halign,'left');
  valign=ngVal(valign,'top');

  var pos=ng_ParentPosition(o,ngApp ? ngApp.Elm() : undefined);
  ng_BeginMeasureElement(o);
  pos.w=ng_OuterWidth(o);
  pos.h=ng_OuterHeight(o);
  ng_EndMeasureElement(o);
    
  ng_BeginMeasureElement(mo);
  var sw=ng_OuterWidth(mo); 
  var sh=ng_OuterHeight(mo); 
  ng_EndMeasureElement(mo);
  
  var ox=ngVal(this.SubMenuOverlapX,5);
  var oy=ngVal(this.SubMenuOverlapY,0);

  var mx,my;
  
  var srect=this.GetScreenRect();  
  if(halign=='right')
  { 
    mx=pos.x-sw+ox;
    if(mx<srect.Left) mx=pos.x+pos.w-ox;
  }
  else
  {
    mx=pos.x+pos.w-ox;
    if(mx+sw>srect.Right-5) mx=pos.x-sw+ox; // right
  }    
  if((mx<srect.Left)||(mx+sw>srect.Right-5)) mx=srect.Left+5;
  
  var mt=ng_GetCurrentStylePx(mo,'padding-top') +
         ng_GetCurrentStylePx(mo,'margin-top') +
         ng_GetCurrentStylePx(mo,'border-top-width');
  var mb=ng_GetCurrentStylePx(mo,'padding-bottom') +
         ng_GetCurrentStylePx(mo,'margin-bottom') +
         ng_GetCurrentStylePx(mo,'border-bottom-width');
  if(valign=='bottom')
  {
    my=pos.y+pos.h-sh-oy+mb;
    if(my<srect.Top) my=pos.y+oy-mt;
  }
  else
  {
    my=pos.y+oy-mt;
    if(my+sh>srect.Bottom-5) my=pos.y+pos.h-sh-oy+mb; // bottom
  }
  if((my<srect.Top)||(my+sh>srect.Bottom-5)) my=srect.Top+5;
        
  mo.style.left=mx+'px';
  mo.style.top=my+'px';

  delete this.PopupX;
  delete this.PopupY;
  this.PopupElm = o;  
}

function ngmn_ShowSubMenu(it)
{
  var m=it.SubMenu;
  if(this.ActiveSubMenu)
  {
    if(this.ActiveSubMenu==m) return;
    this.HideSubMenu();
  } 
  if(m)
  {
    if((m.Visible)||(!this.Enabled)||(!ngVal(it.Enabled,true))) return;
    
    this.SelectItem(it);
    this.ActiveSubMenu=m;
    var o=document.getElementById(this.ID+'_'+this.ItemId(it));
    if(o) m.PopupSubMenu(o);
  }
  else 
  {
    this.ClearSelected();
    this.ActiveSubMenu=null;
  }
}

function ngmn_SetVisible(v)
{
  v=ngVal(v,true);
  if(this.Visible==v) return;
  var p=this.Owner;
  if(!v) 
  {
    this.HideSubMenu();
    if((p)&&(ngVal(p.ActiveSubMenu, null)==this))
    {
      p.ClearSelected();
      p.ActiveSubMenu=null;
    }
    if(this.SubMenuTimer) clearTimeout(this.SubMenuTimer); this.SubMenuTimer=null;

    delete this.PopupX;
    delete this.PopupY;
    delete this.PopupElm; 

    if(ngCurrentPopupMenu === this) 
    {
      ngCurrentPopupMenu = null;
      ngc_DeactivatePopup(this);
    }
  }
  else 
  {
    if(ngVal(this.AutoPopup,false)) ngmn_SetCurrentPopupMenu(this);
  }
}

function ngmn_HideSubMenu()
{
  var m=this.ActiveSubMenu;
  if(m)
  {
    if((this.OnHideSubMenu)&&(!ngVal(this.OnHideSubMenu,false))) return;
    this.ClearSelected();
    m.SetVisible(false);
    this.ActiveSubMenu=null;
  } 
}

function ngmn_SubMenuTimer(iid,t)
{
  var ii=ngl_ItemById(iid);
  if(ii.list)
  {
    if(ii.list.SubMenuTimer) clearTimeout(ii.list.SubMenuTimer);
    ii.list.SubMenuTimer=null;
    if(t) 
    {
      var p=ii.list.Owner;
      if((p)&&(ngVal(p.Visible,true))) ii.list.ShowSubMenu(ii.item);
    }
    else 
    {
      var l=ii.list;
      while(l)
      {
        if((l.MouseInControl)&&(l!==ii.list)) return;
        l=l.ActiveSubMenu;
      }
      ii.list.HideSubMenu();
    }
  }
}

function ngmn_OnEnterRow(l,it,id)
{
  if((!l.ActiveSubMenu)||(l.ActiveSubMenu!==it.SubMenu))
    l.ClearSelected();
  else
    l.SelectItem(it);
  if((l.Owner)&&(l.Owner.SubMenuTimer))
  {
    clearTimeout(l.Owner.SubMenuTimer);
    l.Owner.SubMenuTimer=null;
  }
  if((l.ActiveSubMenu)||((it.SubMenu)&&((typeof l.PointerInfo === 'undefined')||(!l.PointerInfo.Touch)))) 
  {
    if(l.SubMenuTimer) clearTimeout(l.SubMenuTimer);
    l.SubMenuTimer = setTimeout("ngmn_SubMenuTimer('"+id+"',1);",200);
  }
  ngc_EnterImg(id+'M');
  return true;
}

function ngmn_OnLeaveRow(l,it,id)
{
  if(l.SubMenuTimer) clearTimeout(l.SubMenuTimer);
  l.SubMenuTimer=null;
  
  if((l.ActiveSubMenu)&&(l.ActiveSubMenu!==it.SubMenu))
  {
    l.SubMenuTimer = setTimeout("ngmn_SubMenuTimer('"+id+"',0)",200);
  }
  ngc_LeaveImg(id+'M');
  return true;
}

function ngmn_OnEnter(l)
{
  var p=l.Owner;
  if(typeof p.HideSubMenu==='function')
  {
    p.ClearSelected();
    for(var i=0;i<p.Items.length;i++)
      if(p.Items[i].SubMenu==l)
      {
        p.SelectItem(p.Items[i]);
        break;
      }  
  }
  // l.SetFocus(); // disabled because of Opera - focusing scrolls document :(
  return true;
}


function ngmn_OnKeyDown(e)
{
  var l=this;
  switch(e.keyCode)
  {
    case 39:
    case 37:
    case 27:
      var ii=ngl_ItemById(ngl_CurrentRowId);
      if(ii.list!=l) 
      {
        ii.list=l;
        ii.item=null;
      }
      switch(e.keyCode)
      {
        case 27:
          ii.list.HideMenu();
          break;
        case 39:
          var m=(ii.item ? ii.item.SubMenu : null);
          if(m) 
          {
            ii.list.ShowSubMenu(ii.item);            
            m.SetFocus();
            m.SetItemFocus(m.FirstVisibleItem());
          }
          else
          {
            var p=(ii.list && ii.list.Owner ? ii.list.Owner : null);
            if(p)
            {
              var btn;
              while(p)
              {
                if(p.CtrlType == 'ngToolBar') break;
                if(p.CtrlType == 'ngButton') btn=p;
                p=p.Owner;
              }
              if((p)&&(typeof p.Menu === 'object')) // ToolBar
              {
                for(var i=0;i<p.Menu.length;i++)
                  if(p.Menu[i]==btn)
                  {
                    i++;
                    if(i>=p.Menu.length) i=0;                     
                    if((i>=0)&&(i<p.Menu.length))
                    {
                      btn=p.Menu[i];
                      if((btn)&&(btn.CtrlType=='ngButton')&&(typeof btn.Menu === 'object'))
                      {
                        ii.list.AutoPopup=true;
                        btn.Click();
                        btn.Menu.SetItemFocus(btn.Menu.FirstVisibleItem());
                      }
                    }
                    break;
                  }
                
              }
            }
          }
          break;        
        case 37:
          var p=(ii.list && ii.list.Owner ? ii.list.Owner : null);
          if(p)
          {
            if(typeof p.HideSubMenu === 'function') // Menu
            {
              p.SetFocus();
              for(var i=0;i<p.Items.length;i++)
                if(p.Items[i].SubMenu==ii.list)
                {
                  p.SetItemFocus(p.Items[i]);
                  break;
                }            
              p.HideSubMenu();
              if(p.SubMenuTimer) clearTimeout(p.SubMenuTimer); p.SubMenuTimer=null;
            }
            else
            {
              var btn;
              while(p)
              {
                if(p.CtrlType == 'ngToolBar') break;
                if(p.CtrlType == 'ngButton') btn=p;
                p=p.Owner;
              }
              if((p)&&(typeof p.Menu === 'object')) // ToolBar
              {
                for(var i=0;i<p.Menu.length;i++)
                  if(p.Menu[i]==btn)
                  {
                    i--;
                    if(i<0) i=p.Menu.length-1;                     
                    if((i>=0)&&(i<p.Menu.length))
                    {
                      btn=p.Menu[i];
                      if((btn)&&(btn.CtrlType=='ngButton')&&(typeof btn.Menu === 'object'))
                      {
                        ii.list.AutoPopup=true;
                        btn.Click();
                        btn.Menu.SetItemFocus(btn.Menu.FirstVisibleItem());
                      }
                    }
                    break;
                  }
              }
            } 
          }            
          break;
      }
  }
  return true;
}


function ngmn_MenuText(list, it, col)
{
  var txt,t=new ngStringBuilder;

  if(typeof it.OnGetText === 'function') txt=ngVal(it.OnGetText(list, it, col),'');
  else 
  {
    if(this.Columns.length>0)
    {
      txt=ngVal(it.Text[col.ID],'');
      if(txt=='') txt='&nbsp;';
    }
    else txt=it.Text;
  }
  var image=list.SubMenuImg;
  if((it.SubMenu)&&(image))
  {
    var id=list.ItemId(it);
    var dp=ngl_ItemImgDrawProps(list.ID+'_'+id+'M', (list.Enabled)&&(ngVal(it.Enabled,true)), image);
    t.append('<div style="position: relative;">');
    ngc_Img(t,dp,"width: "+dp.W+"px;",'class="'+list.BaseClassName+'SubMenu"');
    t.append('<div style="padding-right:'+dp.W+'px">')
    t.append(txt);
    t.append('</div></div>');
  }
  else t.append(txt);
  return t.toString();
}

function ngmn_DrawItemText(html, it, id, level)
{
  var txt;
  var cclass=this.BaseClassName;
  if(this.Columns.length>0) txt=ngVal(it.Text[this.Columns[0].ID],'');
  else txt=it.Text;
  if(txt=='-') 
  {
    it.Visible=false;
    var h=((this.Items[0]==it)||(this.Items[this.Items.length-1]==it));
    if(this.OnDrawSeparator) this.OnDrawSeparator(html,it,id,level);
    else 
    {
      if(this.Columns.length>0) html.append('<tr class="'+cclass+'Row" '+(h ? 'style="display:none" ' : '')+'id="'+this.ID+'_'+id+'"><td colspan="'+this.Columns.length+'"><div class="'+cclass+'Separator">&nbsp;</div></td></tr>');
      else html.append('<div id="'+this.ID+'_'+id+'" '+(h ? 'style="display:none" ' : '')+'class="'+cclass+'Separator"></div>');    
    }
  }
  else this.DefaultDrawItemText(html,it,id,level);
}

function ngmn_DoCreate(def, ref, elm, parent)
{
  if((typeof def.Data !== 'undefined')&&(ngVal(def.Data.Visible,false))) return; // Visible menus are static
  // All menus are in document.body
  var parent=((typeof ngApp === 'object')&&(ngApp) ? ngApp.Elm() : document.body);
  var p=elm.parentNode;
  if((p)&&(p!=parent))
  {
    p.removeChild(elm);
    parent.appendChild(elm);
  }
}

function ngmn_HideMenu()
{
  var h=this;
  var p=this;
  while(p)
  {
    if(typeof p.HideSubMenu !== 'function') { p=null; break; }
    h=p;
    if(!ngVal(p.AutoPopup,false)) break;
    p=p.Owner;
  }
  if((!p)&&(h)) h.SetVisible(false);
  else if(h) h.HideSubMenu();
}

function ngmn_MenuClick(it, e)
{
  if(!it) return false;
  if(typeof e === 'undefined') e=new Object;
  if(e.list != this)
  { 
    e.Owner = this;
    e.list = this;
    e.listItem = it;
    e.listObj=null;
    e.listRowObj=null;
    e.listPart=0;
    e.listCol=-1;
  }
  if((!this.Enabled)||(!ngVal(it.Enabled,true))) return false;

  if((it.SubMenu)&&(typeof this.PointerInfo !== 'undefined')&&(this.PointerInfo.Touch))
  {
    this.ShowSubMenu(it);
    return false;
  }  
  
  if((this.OnMenuClick)&&(!ngVal(this.OnMenuClick(e,this,it),false))) return false;
  var onclick=it.OnMenuClick;
  if(onclick)
  {
    if(!ngVal(onclick(e,this,it),true)) return false;
    this.HideMenu();
  }
  else 
  {
    var ac=this.GetItemAction(it);
    if(!ac) ac=it;
    else
      if(ac.OnClick) 
      {
        ac=null; // OnClick defined
        this.HideMenu();
      }
    
    if(ac)
    {
      if((typeof ac.Checked!=='undefined')||(typeof ac.RadioGroup!=='undefined'))
      {
        this.CheckItem(it, (typeof ac.RadioGroup!=='undefined' ? 1 : (ngVal(ac.Checked,0)==0 ? 1 : 0)) );
        this.HideMenu();
      }
      else
      {
        if(it.SubMenu)
        {
          this.ShowSubMenu(it);
          return false;
        }  
        else this.HideMenu();
      }
    }
    else if(typeof it.SubMenu === 'undefined') this.HideMenu();
  }
  return true;
}

function ngmn_OnClick(e)
{
  if((!e.listPart)&&(e.listItem)&&(e.list))  return e.list.MenuClick(e.listItem, e);
  return false;
}

function ngmn_GetResText(list,it,col) 
{ 
  return ngTxt(it.ngTextD); 
}

function ngmn_CreateSubMenu(it,m)
{
  if(!it) return null;
  
  if(typeof m === 'undefined') m=new Object;
  
  var smd=null;
  var smox=m.SubMenuOverlapX,smoy=m.SubMenuOverlapY;
  var smha=m.MenuHAlign,smva=m.MenuVAlign;
  var smc=m.OnSubMenuCreated;
  var p=this;
  while((p)&&(typeof p.HideSubMenu === 'function'))
  {
    if((!smd)&&(typeof p.SubMenuDef === 'object')&&(!ngVal(p.SubMenuDef.AutoDef,false)))
      smd=p.SubMenuDef;
    if((typeof smox === 'undefined')&&(typeof smoy === 'undefined')&&((typeof p.SubMenuOverlapX !== 'undefined')||(typeof p.SubMenuOverlapY !== 'undefined')))
    {
      smox=p.SubMenuOverlapX;
      smoy=p.SubMenuOverlapY;
    }
    if((typeof smha === 'undefined')&&(typeof smva === 'undefined')&&((typeof p.MenuHAlign !== 'undefined')||(typeof p.MenuVAlign !== 'undefined')))
    {
      smha=p.MenuHAlign;
      smva=p.MenuVAlign;
    }
    if((typeof smc === 'undefined')&&(typeof p.OnSubMenuCreated !== 'undefined'))
      smc= p.OnSubMenuCreated;
    p=p.Owner;
  }

  var ld=ng_CopyVar(smd ? smd : this.SubMenuDef);
  var ldefs={ SubMenu: ld };
  if(typeof ld.Data === 'undefined')
    ld.Data = m;
  else
  {
    var d=ld.Data;
    ld.Data=m;
    ng_MergeVar(ld.Data,d);
  }
  if(typeof m.ID === 'string') ld.id=m.ID;
  if(typeof smox !== 'undefined') m.SubMenuOverlapX = smox; 
  if(typeof smoy !== 'undefined') m.SubMenuOverlapY = smoy;
  if(typeof smha !== 'undefined') m.MenuHAlign = smha; 
  if(typeof smva !== 'undefined') m.MenuVAlign = smva;
  if(typeof smc  !== 'undefined') m.OnSubMenuCreated = smc;
  m.Owner=this;       
  m.ParentMenu=it;
           
  var lref=ngCreateControls(ldefs,undefined,((typeof ngApp === 'object')&&(ngApp) ? ngApp.Elm() : undefined));
  it.SubMenu=lref.SubMenu;
  if((lref.SubMenu)&&(p.OnSubMenuCreated)) p.OnSubMenuCreated(p,ld,lref.SubMenu);
  
  return it.SubMenu;
}

function ngmn_OnAdd(list, it, parent)
{
  // Handle menu click
  if(!it.OnClick) it.OnClick=ngmn_OnClick;

  // Handle string resources
  if((typeof it.ngText !== 'undefined')&&(ngVal(it.Text,'')==''))
    it.Text=ngTxt(it.ngText);
  if((typeof it.ngTextD !== 'undefined')&&(!it.OnGetText))
    it.OnGetText = ngmn_GetResText;      

  // Handle submenu
  var m=it.SubMenu;
  if(typeof m === 'object')
  {
    if(typeof m.HideSubMenu !== 'function')
    {
      if(typeof m.Items === 'undefined')
      {
        var o=new Object;
        o.Items=m;
        m=o;
      }
      delete it.SubMenu;
      list.CreateSubMenu(it, m);
    }
    else m.Owner=list;
  }
  
  return true;
}

function ngmn_OnRemove(list, it, parent)
{
  if((it.SubMenu)&&(typeof it.SubMenu.Dispose === 'function')) it.SubMenu.Dispose();
  return true;
}

function ngmn_BeginUpdate(recursive)
{
  this.ListBeginUpdate();

  recursive=ngVal(recursive,true);
  this.update_info.push(recursive);
  if(recursive)
  {
    this.Scan(
      function(list, item, parent, userdata) 
      {
        var m=item.SubMenu;
        if(m) m.BeginUpdate(true);
        return true;
      }
    );
  }
}

function ngmn_EndUpdate()
{
  this.ListEndUpdate();
  if(this.update_info.length>0)
  {
    var recursive=this.update_info.pop();
    if(recursive)
    {
      this.Scan(
        function(list, item, parent, userdata) 
        { 
          var m=item.SubMenu;
          if(m) m.EndUpdate(true);
          return true;
        }
      );
    }
  }
}

function ngmn_GetMenu(path, create, parent, oncreatefnc, userdata)
{
  create=ngVal(create,false);
  parent=ngVal(parent,this);
  oncreatefnc=ngVal(oncreatefnc, null);
  return ngGetMenu(parent, path, create, oncreatefnc, userdata);
}

function ngmn_GetMenuItemByIDCallback(list, it, parent, fi)
{
  if((it.ID)&&(it.ID==fi.ID)) {
    fi.found.Menu=list;
    fi.found.Item=it;
    return false;
  }
  if((it.SubMenu)&&(fi.Recursive))
  {
    it.SubMenu.Scan(ngmn_GetMenuItemByIDCallback, null, fi);
    if(fi.found.Menu) return false;
  }
  return true;
}

function ngmn_GetMenuItemByID(id, recursive)
{
  var fi=new Object;
  fi.ID=id;
  fi.Recursive=ngVal(recursive,true);
  fi.found={ Menu: null, Item: null };
  this.Scan(ngmn_GetMenuItemByIDCallback, null, fi);
  return fi.found;
}

// --- ngMenuBar ---------------------------------------------------------------

function ngmb_DoCreate(def, ref, elm, parent)
{
  if(typeof def.Menu === 'object')
  {
    var it;
    this.Menu = new Array();
    var dm=def.Menu;
    if((typeof dm.Data === 'object')&&(typeof dm.Data.Items === 'object'))
    {
      var ld;
      var items=dm.Data.Items;
      if(typeof def.Button === 'object') this.ButtonDef = ng_CopyVar(def.Button);
      if(typeof def.Type !== 'undefined') this.DefType = def.Type;
      var btndef = (typeof def.Button === 'object' ? def.Button : null);
      delete dm.Data.Items;
      for(var i=0;i<items.length;i++)
      {
        it=items[i];
        if(btndef) ld=ng_CopyVar(btndef);
        else {
          ld=new Object;
          ld.Type = (typeof def.Type !== 'undefined' ? def.Type+'Button' : 'ngButton');    
        }
        if(typeof ld.className === 'undefined') ld.className=this.BaseClassName+'Button';
        if(typeof ld.Data === 'undefined') ld.Data = new Object;
        
        var bd=def.Menu.Data;
        var bp=def.Menu.parent;        
        delete def.Menu.Data;
        delete def.Menu.parent;
        this.SubMenuDef=ng_CopyVar(def.Menu);
        delete this.SubMenuDef.parent;
        delete this.SubMenuDef.id;
        delete this.SubMenuDef.L;
        delete this.SubMenuDef.T;
        delete this.SubMenuDef.R;
        delete this.SubMenuDef.B;
        delete this.SubMenuDef.W;
        delete this.SubMenuDef.H;
        this.SubMenuDef.AutoDef=true;
        this.SubMenuDef._noMerge=true;
        def.Menu.Data=bd;
        def.Menu.parent=bp;
        
        for(var j in it)
          ld.Data[j]=it[j];
          
        if(ld.Data.SubMenu)
        {
          ld.Menu=ng_CopyVar(dm);
          if(typeof ld.Menu.Data === 'undefined') ld.Menu.Data=new Object;
          ld.Menu.Data.Items=ld.Data.SubMenu;
          
          delete ld.Data.SubMenu;
          delete ld.Data.Menu;
        }
        var ldefs={ MenuBtn: ld };
        var lref=ngCreateControls(ldefs,undefined,this.ID);
        if(lref.MenuBtn) 
        {
          lref.MenuBtn.Owner=this;
          this.Menu[i]=lref.MenuBtn;
        }
      }
    }
  }
}

function ngmb_BeginUpdate(recursive)
{
  recursive=ngVal(recursive,true);
  this.update_info.push(recursive);
  var m;
  for(var i=0;i<this.Menu.length;i++)
  {
    m=this.Menu[i].Menu;
    if(m) m.BeginUpdate(recursive);
  }
    
}

function ngmb_EndUpdate()
{
  if(this.update_info.length>0)
  {
    var recursive=this.update_info.pop();
    for(var i=0;i<this.Menu.length;i++)
    {
      m=this.Menu[i].Menu;
      if(m) m.EndUpdate();
    }
  }
}

// --- ngMenuBar ngButton ------------------------------------------------------

function ngmbb_ButtonEnterMenu()
{
  var p=this.Menu;
  if((typeof p==='object')&&(p)&&(this.Enabled)&&(!this.ReadOnly))
  {
    if(p.Visible) return;
    
    while(p)
    {
      if(p.CtrlType == 'ngToolBar') 
      {
        var mv=false;
        var m,cc=p.ChildControls;
        if(typeof cc !== 'undefined')
        {
          for(var i=0;i<cc.length;i++)
          {   
            m=(typeof p.ChildControls[i].Menu === 'object' ? p.ChildControls[i].Menu : null);
            if(m)
            {
              mv=(mv)||(m.Visible);
              if(m!=this.Menu) m.SetVisible(false);
            }
          }
        }
        break; 
      }
      p=p.Owner;
    }
    
    if((!this.Menu.Visible)&&((mv)||(ngVal(this.AutoPopup,false)))) {
      this.Menu.PopupCtrl(this);
    }
  }
}

// --- ngSplitButton -----------------------------------------------------------

function ngmnb_SetControlVisible(v)
{
  var m=this.Menu;
  if((typeof m==='object')&&(m))
  {
    if(!v) 
    {
      m.AutoPopup=true;
      m.HideMenu();
    }
  }
}

function ngsbtn_SetMenuVisible(m,v)
{
  var p=m.Owner;
  if((p)&&(typeof p.GetImg === 'function'))
  {
    ngc_ChangeImg(p.ID+'_IR', v, p.Enabled, p.GetImg(2));
  }
  return true;
}

function ngsbtn_Click(e)
{
  var m=this.Menu;
  if((typeof m==='object')&&(m))
  {
    if(m.Visible) 
    {
      m.AutoPopup=true;
      m.HideMenu();
    }
  }
  return true;
}

function ngsbtn_DoMenuClick(b)
{
  var m=this.Menu;
  if((typeof m==='object')&&(m)&&(this.Enabled))
  {
    if((this.OnMenuClick)&&(!ngVal(this.OnMenuClick(this,m),false))) return;
    if(m.Visible) 
    {
      m.AutoPopup=true;
      m.HideMenu();
    }
    else 
    {
      var mw=ngVal(m.MinWidth,100);
      var cw=ng_OuterWidth(this.Elm());
      if((cw>0)&&(mw<cw)) m.MinWidth=cw;
      m.PopupCtrl(this);
    }
  }
}

function ngsbtn_DoPtrClick(pi)
{
  if(pi.EventID==='menu') this.DoMenuClick(this); 
}

function ngsbtn_DoUpdate(o)
{
  var m=this.Menu;
  if((typeof m==='object')&&(m))
  {
    var oi=document.getElementById(this.ID+'_IR')
    if(oi)
    {
      ngc_ChangeImg(this.ID+'_IR', m.Visible, this.Enabled, this.GetImg(2));

      // Modify standard ngButton
      var p=oi.parentNode;
      if(p)
      {
        var p2=p.parentNode;
        if(p2)
        {
          var p3=p2.parentNode;
           var w=ng_OuterWidth(p2)-ng_ClientWidth(oi);
           ng_SetStyleWidth(p2,w);
          p.removeChild(oi);
          p3.appendChild(oi);
          ngc_PtrListener(this, oi, 'menu', 'tap');
          oi.style.zIndex=2;
          var cursor='';
          if(this.Enabled)
          {
            if(typeof this.Cursor !== 'undefined')
            {
              cursor=this.Cursor;      
            } 
            else cursor='pointer';
          }
          else cursor='default';
          try { oi.style.cursor=cursor; } catch(e) { }
        }
      }
    }
  }
  return true;
}

// --- ngControl Menu ----------------------------------------------------------

function ngmnb_SetMenuVisible(m,v)
{
  var p=m.Owner;
  if(typeof p.Check === 'function') p.Check(v);
  return true;
}

function ngmn_DefaultClick(e)
{
  var m=this.Menu;
  if((typeof m==='object')&&(m))
  {
    if(m.Visible) 
    {
      m.AutoPopup=true;
      m.HideMenu();
    }
    else if(this.Enabled) m.PopupCtrl(this);
  }
}

function ngmn_DoMenuDispose()
{
  var m=this.Menu;
  if((typeof m==='object')&&(m)&&(typeof m.Dispose === 'function')) 
    m.Dispose();
  return true;
}

function ngmn_PopupMouseMenu(e)
{
  if (!e) e = window.event;
  if(e.button != 2) return true;
  var c=ngGetControlById(this.id);
  if((!c)||(!c.PopupMenu)||(!ngVal(c.Enabled,true))) return true;

  var mx = (e.clientX ? e.clientX : e.offsetX);
  var my = (e.clientY ? e.clientY : e.offsetY);
  if((isNaN(mx))||(isNaN(my))) return;   // firefox fix:
  mx-=ng_findMousePosX(document.body);
  my-=ng_findMousePosY(document.body);
  c.PopupMenu.Popup(mx,my);

  if (window.event) {
    e.cancelBubble=true;
  } else {
    e.stopPropagation();
  }  
  return true;
}

function ngmn_DoPopupAttach(elm)
{
  if(!elm) return;
  elm.oncontextmenu = ngmn_DisableContextMenu;
  
  if(elm.ngAddEvent) return;
  elm.ngAddEvent = ngObjAddEvent;
  elm.ngAddEvent('onmousedown',ngmn_PopupMouseMenu);        
}

function ngmn_DoAcceptGestures(o,gestures)
{
  gestures.hold=true;
}

function ngmn_DoGesture(pi)
{
  if(pi.Gesture==='hold')
  {
    var valign,halign;
    var pm=this.PopupMenu;
    if(pm) {
      if((pi.Touch)&&(typeof pm.MenuVAlign==='undefined')&&(typeof pm.MenuHAlign==='undefined')) {
        valign='bottom';
        halign='center';
      }
      pm.Popup(pi.X,pi.Y,halign,valign);
      return true;
    }
  }
  return false;
}

function ngmn_DoPopupDispose()
{
  var m=this.PopupMenu;
  if((typeof m==='object')&&(m)&&(typeof m.Dispose === 'function')) 
    m.Dispose();
  return true;
}

function ngmn_SetPopupControlVisible(v)
{
  var m=this.PopupMenu;
  if((typeof m==='object')&&(m))
  {
    if(!v) 
    {
      m.AutoPopup=true;
      m.HideMenu();
    }
  }
}

/**
 *  Function: ng_SetControlMenu
 *  Assigns <ngMenu> to control.  
 * 
 *  Syntax:
 *    void *ng_SetControlMenu* (object ctrl, object menu)
 *     
 *  Parameters:
 *    ctrl - control to which is menu assigned
 *    menu - <ngMenu> control or null
 *      
 *  Returns:
 *    -
 *    
 *  Notes:
 *    Control must support OnClick event. 
 *    If menu is assigned, the reference is stored in Menu property in control.   
 */  
function ng_SetControlMenu(c,m)
{
  if(!c) return;
  m=ngVal(m,null);
  var om=ngVal(c.Menu,null);
  if(om == m) return;  
  var mb=ngVal(c.SplitButton,false);
  if(om) // unregister old
  {  
    if(!m)
    {
      c.RemoveEvent('SetVisible',ngmnb_SetControlVisible);                
      c.RemoveEvent('SetEnable',ngmnb_SetControlVisible);                
      c.RemoveEvent('DoDispose',ngmn_DoMenuDispose);
      if(c.OnClick == ngmn_DefaultClick) c.OnClick=null;
    }

    var oc=ngVal(om.Owner,null);
    if(oc==c)
    {
      om.Owner=null;
      if(mb) om.RemoveEvent('OnSetVisible',ngsbtn_SetMenuVisible);
      else   om.RemoveEvent('OnSetVisible',ngmnb_SetMenuVisible);
    }
  }
  c.Menu = m;
  if(m) // register new
  {
    var oc=m.Owner;
    if((oc)&&(oc!=c)) ng_SetControlMenu(oc,null);
    
    m.Owner=c;
    if(!om)
    {
      c.AddEvent('SetVisible',ngmnb_SetControlVisible);                
      c.AddEvent('SetEnable',ngmnb_SetControlVisible);                
      c.AddEvent('DoDispose',ngmn_DoMenuDispose);

      if((typeof c.OnClick !== 'undefined')&&(!c.OnClick)&&(!mb))
        c.OnClick=ngmn_DefaultClick;
    }
    if(mb) m.AddEvent('OnSetVisible',ngsbtn_SetMenuVisible);
    else   m.AddEvent('OnSetVisible',ngmnb_SetMenuVisible);                
  }
}

// --- ngApplication Popupmenu -------------------------------------------------
var nga_popup_initialized = false;

function nga_DoPopupMenuStart(e)
{
  if (!e) e = window.event;
  ngCurrentAppPopupMenu=null;
  var appmenu=((e.button == 2)&&(typeof ngApp === 'object')&&(typeof ngApp.PopupMenu === 'object')&&(ngApp.PopupMenu) ? ngApp.PopupMenu : null);
  if((appmenu)&&((!ngCurrentPopupMenu)||(ngCurrentPopupMenu==appmenu))) 
  {
    ngCurrentAppPopupMenu=appmenu;
  }
  return true;
}  

function nga_DoPopupMenu(e)
{  
  if (!e) e = window.event;
  if(ngCurrentAppPopupMenu)
  {
    var timer=setTimeout(function() {
      clearTimeout(timer);
      var menu=ngCurrentAppPopupMenu;
      ngCurrentAppPopupMenu=null;
      if((menu)&&(typeof menu.Popup === 'function'))
      {  
        ngCurrentAppPopupMenu=null;
        var mx = (e.clientX ? e.clientX : e.offsetX);
        var my = (e.clientY ? e.clientY : e.offsetY);
        // firefox fix:
        if((isNaN(mx))||(isNaN(my))) return;
        if(e.preventDefault) e.preventDefault();
        mx-=ng_findMousePosX(document.body);
        my-=ng_findMousePosY(document.body);
        menu.Popup(mx,my);
      }
    },10);
  }                    
  return true;  
}

function nga_DoPopupMenuTouch(e)
{
  if(((e.type!=='hold')&&(e.type!=='touch'))||(e.gesture.pointerType===Hammer.POINTER_MOUSE)||(e.ngGestureHandled)||(typeof ngApp !== 'object')||(typeof ngApp.PopupMenu !== 'object')||(!ngApp.PopupMenu)) return;
  if(e.type==='touch') 
  {
    ngCurrentAppPopupMenu=((!ngCurrentPopupMenu)||(ngCurrentPopupMenu==ngApp.PopupMenu) ? ngApp.PopupMenu : null);
  }
  else
  {  
    if(ngCurrentAppPopupMenu)
    {
      var timer=setTimeout(function() {
        clearTimeout(timer);
        var pm=ngCurrentAppPopupMenu;
        ngCurrentAppPopupMenu=null;
        if((pm)&&(typeof pm.Popup === 'function'))
        {
          var mx=e.gesture.center.pageX;
          var my=e.gesture.center.pageY;    
          if((typeof pm.MenuVAlign==='undefined')&&(typeof pm.MenuHAlign==='undefined')) {
            valign='bottom';
            halign='center';
          }
          pm.Popup(mx,my,halign,valign);
        }
      },10);
    }
  }  
}

function nga_SetPopupMenu(m)
{
  var om=ngVal(this.PopupMenu,null);
  if(om==m) return;
  if(om) 
  {
    if(typeof om.HideMenu === 'function') om.HideMenu();
    om.Owner = null;
  }
  this.PopupMenu = m;
  if(m) 
  {
    m.Owner = this;

    if(!nga_popup_initialized)
    {
      if (window.navigator.msPointerEnabled) {
        document.addEventListener("MSPointerDown", nga_DoPopupMenuStart, false);
        document.addEventListener("MSPointerUp", nga_DoPopupMenu, false);
      }
      else
      {
        document.onmousedown = ngAddEvent(nga_DoPopupMenuStart, document.onmousedown);
        document.onmouseup = ngAddEvent(nga_DoPopupMenu, document.onmouseup);
      }
      if(ngHammerJS()) // HammerJS library is present
      {
        nga_popup_hammer=Hammer(document, { prevent_mouseevents: true, hold_threshold: 10 });
        nga_popup_hammer.on("hold touch", nga_DoPopupMenuTouch);
      }
      nga_popup_initialized = true;
    }
    if(!document.oncontextmenu) document.oncontextmenu = ngmn_DisableContextMenu;
  }
  else
  {
    if(document.oncontextmenu == ngmn_DisableContextMenu) document.oncontextmenu=null;
  }
}

/**
 *  Function: ng_SetControlPopup
 *  Assigns popup <ngMenu> to control.  
 * 
 *  Syntax:
 *    void *ng_SetControlPopup* (object ctrl, object menu)
 *     
 *  Parameters:
 *    ctrl - control to which is popup menu assigned
 *    menu - <ngMenu> control or null
 *      
 *  Returns:
 *    -
 *    
 *  Notes:
 *    If menu is assigned, the reference is stored in PopupMenu property in control.   
 */  
function ng_SetControlPopup(c,m)
{
  if(!c) return;
  m=ngVal(m,null);
  var om=ngVal(c.PopupMenu,null);
  if(om == m) return;  
  if(om) // unregister old
  {
    if(!m)
    {
      c.RemoveEvent('SetVisible',ngmn_SetPopupControlVisible);                
      c.RemoveEvent('SetEnable',ngmn_SetPopupControlVisible);                
      c.RemoveEvent('DoAttach',ngmn_DoPopupAttach);
      c.RemoveEvent('DoAcceptGestures',ngmn_DoAcceptGestures);
      c.RemoveEvent('DoGesture',ngmn_DoGesture);
      c.RemoveEvent('DoDispose',ngmn_DoPopupDispose);
    }        
    var oc=ngVal(om.Owner,null);
    if(oc==c) om.Owner=null;
  }
  c.PopupMenu = m;
  if(m) // register new
  {
    var oc=m.Owner;
    if((oc)&&(oc!=c)) ng_SetControlPopup(oc,null);
    
    m.Owner=c;
    if(!om)
    {
      c.AddEvent('SetVisible',ngmn_SetPopupControlVisible);                
      c.AddEvent('SetEnable',ngmn_SetPopupControlVisible);                
      c.AddEvent('DoAttach',ngmn_DoPopupAttach);
      c.AddEvent('DoAcceptGestures',ngmn_DoAcceptGestures);
      c.AddEvent('DoGesture',ngmn_DoGesture);
      c.AddEvent('DoDispose',ngmn_DoPopupDispose);
    }        
  }
}

// --- Controls Registration ---------------------------------------------------
/*
 *  Class: ngListItem (in context of ngMenu)
 *  This class implements <ngList> item. 
 *
 *  See also:
 *    <ngMenu>, <ngList>     
 */
/*
 *  Group: Properties
 */
/*  Variable: SubMenu
 *  References to sub menu <ngMenu> control.
 *  Type: object
 *  Default value: *undefined*         
 */
//c.SubMenu = undefined;
/*
 *  Group: Events
 */
/*
 *  Event: OnMenuClick
 */
// c.OnMenuClick = null;       
/*
 *  Event: OnGetText
 */
// c.OnGetText = null;

/*  Class: ngMenu
 *  Menu control (based on <ngList>).
 */
/*<>*/
function Create_ngMenu(def, ref, parent)
{
  var c=ngCreateControlAsType(def, 'ngList', ref, parent);
  
  /*
   *  Group: Properties
   */

  /*  Variable: MenuHAlign
   *  Horizonal align of menu to popup position.
   *  Type: string
   *  Default value: *'left'*         
   */
  //c.MenuHAlign = 'left';
  /*  Variable: MenuVAlign
   *  Vertical align of menu to popup position.
   *  Type: string
   *  Default value: *'top'*         
   */
  //c.MenuVAlign = 'top';        
  /*  Variable: MaxHeight
   *  Meximal height of the menu.
   *  Type: integer
   *  Default value: *ScreenHeight-10*         
   */
  //c.MaxHeight = ScreenHeight-10;
  /*  Variable: MinWidth
   *  Minimal width of the menu.
   *  Type: integer
   *  Default value: *100*         
   */
  //c.MinWidth = 100;      

  /*  Variable: SubMenuDef
   *  Specifies definition which is used in case of submenu creation. 
   *  Type: object
   *  Default value: *same as menu*         
   */         
  var bd=def.Data;
  var bp=def.parent;
  delete def.Data;
  delete def.parent;
  c.SubMenuDef=ng_CopyVar(def);
  delete c.SubMenuDef.parent;
  delete c.SubMenuDef.id;
  delete c.SubMenuDef.L;
  delete c.SubMenuDef.T;
  delete c.SubMenuDef.R;
  delete c.SubMenuDef.B;
  delete c.SubMenuDef.W;
  delete c.SubMenuDef.H;
  c.SubMenuDef.AutoDef=true;
  c.SubMenuDef._noMerge=true;
  def.Data=bd;
  def.parent=bp;

  /*  Variable: SubMenuOverlapX
   *  Specifies how much submenu overlaps menu in horizontal in pixels.
   *  Type: integer
   *  Default value: *5*         
   */
  //c.SubMenuOverlapX = 5; 
  /*  Variable: SubMenuOverlapY
   *  Specifies how much submenu overlaps menu in vertical in pixels.
   *  Type: integer
   *  Default value: *0*         
   */
  //c.SubMenuOverlapY = 0;
  
  /*  Variable: ActiveSubMenu
   *  Reference to active submenu.
   *  Type: object
   *  Default value: *undefined*         
   */
  //c.ActiveSubMenu = undefined;
  
  /*  Variable: AutoPopup
   *  If true the menu handles its visibility by itself.
   *  Type: bool
   *  Default value: *undefined*         
   */
  //c.AutoPopup = undefined;
  /*  Variable: PopupX
   *  Horizontal popup position in pixels.
   *  Type: integer
   *  Default value: *undefined*         
   */
  //c.PopupX = undefined;
  /*  Variable: PopupY
   *  Vertical popup position in pixels.
   *  Type: integer
   *  Default value: *undefined*         
   */
  //c.PopupY = undefined;
  /*  Variable: PopupElm
   *  Element to which menu was aligned during popup. 
   *  Type: integer
   *  Default value: *undefined*         
   */
  //c.PopupElm = undefined;
          
  c.ShowCheckboxes = true;
  c.ShowHeader = false;
  c.PopupGroup='menu';
  c.DoPopup = ngmn_DoPopup;
  c.IsInsidePopup = ngmn_IsInsidePopup;
  /*
   *  Group: Methods
   */
  /*  Function: Popup
   *  Popups menu at specified position.
   *   
   *  Syntax:
   *    void *Popup* (integer x, integer y [, string halign, string valign])
   *     
   *  Returns:
   *    -     
   */
  c.Popup = ngmn_Popup;
  /*  Function: PopupCtrl
   *  Popups menu along specified control.
   *   
   *  Syntax:
   *    void *PopupCtrl* (object ctrl [, string halign, string valign])
   *     
   *  Returns:
   *    -     
   */
  c.PopupCtrl = ngmn_PopupCtrl;
  /*  Function: PopupSubMenu
   *  Popups menu as submenu along specified element.
   *   
   *  Syntax:
   *    void *PopupSubMenu* (object elm [, string halign, string valign])
   *     
   *  Returns:
   *    -     
   */
  c.PopupSubMenu = ngmn_PopupSubMenu;
  
  /*  Function: ShowSubMenu
   *  Shows item submenu.
   *   
   *  Syntax:
   *    void *ShowSubMenu* (object item)
   *     
   *  Returns:
   *    -     
   */
  c.ShowSubMenu = ngmn_ShowSubMenu;
  /*  Function: GetMenuItemByID
   *  Gets menu item by given ID.
   *   
   *  Syntax:
   *    void *GetMenuItemByID* (string id [,bool recursive=true])
   *     
   *  Returns:
   *    -     
   */
  c.GetMenuItemByID = ngmn_GetMenuItemByID;
  /*  Function: GetMenu
   *  Gets (or creates) menu item.
   *   
   *  Syntax:
   *    void *GetMenu* (string path[, bool create=false, object parent=null, function oncreatefnc, mixed userdata])
   *     
   *  Returns:
   *    -     
   */
  c.GetMenu = ngmn_GetMenu;
  /*  Function: MenuClick
   *  Clicks the menu item.   
   *   
   *  Syntax:
   *    void *MenuClick* (it [, event ev])
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.MenuClick = ngmn_MenuClick;
  
  /*  Function: CreateSubMenu
   *  Creates item submenu.
   *   
   *  Syntax:
   *    object *CreateSubMenu* (object item, object submenudata)
   *     
   *  Returns:
   *    -     
   */
  c.CreateSubMenu = ngmn_CreateSubMenu;
  /*  Function: HideSubMenu
   *  Hides item submenu.
   *   
   *  Syntax:
   *    void *HideSubMenu* (object item)
   *     
   *  Returns:
   *    -     
   */
  c.HideSubMenu = ngmn_HideSubMenu;

  /*  Function: HideMenu
   *  Hides menu (and all superior or child menus with AutoPopup=true).
   *   
   *  Syntax:
   *    void *HideMenu* (void)
   *     
   *  Returns:
   *    -     
   */
  c.HideMenu = ngmn_HideMenu;
  /*  Function: BeginUpdate
   *  Prevents the updating of the menu until the <EndUpdate> method is called.     
   *   
   *  Syntax:
   *    void *BeginUpdate* (bool recursive=true)
   *     
   *  Returns:
   *    -     
   */
  c.ListBeginUpdate = c.BeginUpdate;
  c.BeginUpdate = ngmn_BeginUpdate;
  /*  Function: EndUpdate
   *  Performs the repaints deferred by a call to <BeginUpdate>.     
   *   
   *  Syntax:
   *    void *EndUpdate* ()
   *     
   *  Returns:
   *    -     
   */
  c.ListEndUpdate = c.EndUpdate;
  c.EndUpdate = ngmn_EndUpdate;
  c.update_info = new Array();
  /*  Function: GetScreenRect
   *  Gets menu allowed screen rectangle (used for proper menu alignment).     
   *   
   *  Syntax:
   *    object *GetScreenRect* ()
   *     
   *  Returns:
   *    The screen rectangle { Left:, Top:, Right:, Bottom: }     
   */
  c.GetScreenRect = ngmn_GetScreenRect;

  c.AddEvent(ngmn_DoCreate, 'DoCreate');
  c.AddEvent(ngmn_OnEnterRow,'OnEnterRow');
  c.AddEvent(ngmn_OnLeaveRow,'OnLeaveRow');
  c.AddEvent(ngmn_SetVisible,'SetVisible');
  c.AddEvent(ngmn_OnEnter,'OnMouseEnter');
  c.AddEvent('OnAdd',ngmn_OnAdd);
  c.AddEvent('OnRemove',ngmn_OnRemove);
  c.AddEvent('OnKeyDown',ngmn_OnKeyDown);
  c.AddEvent('OnScroll',ngmn_OnScroll);
  c.AddEvent('DoAttach',ngmn_DoAttach);
  c.AddEvent(ngmn_Update,'Update');

  
  c.OnGetText = ngmn_MenuText;
    
  c.DefaultDrawItemText=c.DrawItemText;
  c.DrawItemText = ngmn_DrawItemText;
  
  /*
   *  Group: Events
   */
  /*
   *  Event: OnPopUp
   */
  c.OnPopUp = null;
  /*
   *  Event: OnDrawSeparator
   */
  c.OnDrawSeparator = null;
  /*
   *  Event: OnHideSubMenu
   */
  c.OnHideSubMenu = null;
  /*
   *  Event: OnMenuClick
   */
  c.OnMenuClick = null;  
  /*
   *  Event: OnClickOutside
   */
  c.OnClickOutside = null;
  /*
   *  Event: OnSubMenuCreated
   */
  //c.OnSubMenuCreated = null;
  /*
   *  Event: OnGetScreenRect
   */
  c.OnGetScreenRect = null;
  
  c.Visible=false;
          
  return c;
}

/*  Class: ngMenuBar
 *  Menu bar control (based on <ngToolBar>).
 */
/*<>*/
function Create_ngMenuBar(def, ref, parent)
{
  var c=ngCreateControlAsType(def, 'ngToolBar', ref, parent);
  /*
   *  Group: Methods
   */
  /*  Function: BeginUpdate
   *  Prevents the updating of the menu until the <EndUpdate> method is called.     
   *   
   *  Syntax:
   *    void *BeginUpdate* (bool recursive=true)
   *     
   *  Returns:
   *    -     
   */
  c.BeginUpdate = ngmb_BeginUpdate;
  /*  Function: EndUpdate
   *  Performs the repaints deferred by a call to <BeginUpdate>.     
   *   
   *  Syntax:
   *    void *EndUpdate* ()
   *     
   *  Returns:
   *    -     
   */
  c.EndUpdate = ngmb_EndUpdate;
  c.update_info = new Array();
  
  c.AddEvent(ngmb_DoCreate, 'DoCreate');
  /*
   *  Group: Definition
   */
  /*  Variable: ButtonDef
   *  Definition of menubar buttons. 
   *  Type: object
   */
   
  /*
   *  Group: Properties
   */
  /*  Variable: Menu
   *  References to assigned <ngMenu> controls. 
   *  Type: array
   */
  if(typeof c.Menu === 'undefined') c.Menu = new Array();
  return c;
}
 
/*  Class: ngMenuBarButton
 *  Button for menu representation in menu bar control (based on <ngButton>).
 */
/*<>*/
function Create_ngMenuBarButton(def, ref, parent)
{
  var c=ngCreateControlAsType(def, 'ngButton', ref, parent);
//  c.AddEvent('OnMouseLeave',ngmbb_ButtonLeaveMenu);
  c.AddEvent('OnMouseEnter',ngmbb_ButtonEnterMenu);
  /*
   *  Group: Properties
   */

  /*  Variable: AutoPopup
   *  If TRUE the menu is automaticaly poped up when mouse enters the button.
   *  Type: bool
   *  Default value: *false*         
   */
  c.AutoPopup=false;
  return c;
}
 
/*  Class: ngSplitButton
 *  Button with menu dropdown (based on <ngButton>).
 */
/*<>*/
function Create_ngSplitButton(def, ref, parent)
{
  /*
   *  Group: Properties
   */
  /*  Variable: SplitButton
   *  Determines that button is a split button (for detection).
   *  Type: bool
   *  Default value: *true*         
   */
  if(typeof def.Data === 'undefined') def.Data=new Object;
  def.Data.SplitButton=true;
  var c=ngCreateControlAsType(def, 'ngButton', ref, parent);
  c.AddEvent('DoUpdate',ngsbtn_DoUpdate);
  c.AddEvent('DoPtrClick',ngsbtn_DoPtrClick);
  c.AddEvent(ngsbtn_Click,'Click');
  c.DoMenuClick = ngsbtn_DoMenuClick;
  /*
   *  Group: Events
   */
  /*
   *  Event: OnMenuClick
   */
  if(typeof c.OnMenuClick === 'undefined') c.OnMenuClick = null;
  return c;
} 

if(typeof ngUserControls === 'undefined') ngUserControls = new Array();
ngUserControls['menu'] = {

  OnControlCreated: function(def,c) {
    /*
     *  Class: ngControl
     *  Extensions of ngControl definition. 
     */
    /*
     *  Group: Definition
     */
    /*  Variable: Menu
     *  Defines ngMenu control which will be opened on control OnClick event. 
     *  Type: object
     */
    // c.Menu = { }
    if((typeof def.Menu === 'object')&&(c.CtrlType!='ngToolBar')&&(typeof c.Menu === 'undefined'))
    {
      var ldefs={Control: def.Menu };
      var lref=ngCreateControls(ldefs,undefined,((typeof ngApp === 'object')&&(ngApp) ? ngApp.Elm() : undefined));
      ng_SetControlMenu(c,lref.Control);
    }
    /*  Variable: PopupMenu
     *  Defines ngMenu control which opens on right mouse click on control. 
     *  Type: object
     */
    // c.PopupMenu = { }    
    if((typeof def.PopupMenu === 'object')&&(typeof c.PopupMenu === 'undefined'))
    {
      var ld=def.PopupMenu;
      if(typeof ld.Data === 'undefined') ld.Data = new Object;
      var ldefs={Control: ld };
      var lref=ngCreateControls(ldefs,undefined,((typeof ngApp === 'object')&&(ngApp) ? ngApp.Elm() : undefined));
      ng_SetControlPopup(c, lref.Control);
    }
  },
  
  OnInit: function() {
    ngRegisterControlType('ngMenu', Create_ngMenu);
    ngRegisterControlType('ngMenuBar', Create_ngMenuBar); 
    ngRegisterControlType('ngMenuBarButton', Create_ngMenuBarButton); 
    ngRegisterControlType('ngSplitButton', Create_ngSplitButton); 
    
    if((typeof ngApp === 'object')&&(ngApp))
    {
      ngApp.Menu = null;
      ngApp.SetPopupMenu = nga_SetPopupMenu;
    }
  }
};

/*!
 * Controls.js - panels.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */


/** 
 *  Group: Panels 
 */

// --- ngAlignPanel ------------------------------------------------------------

var alNone   = 0;
var alClient = 1;
var alLeft   = 2;
var alRight  = 3;
var alTop    = 4;
var alBottom = 5;

function ngapc_OnSetVisible(c,v)
{
  if((!ngVal(c.AlignAutoUpdate,true))||(!c.ParentControl)) return true;
  
  var a=ngVal(c.ControlAlign,alNone);
  if((a==this.align_control)&&((a==alNone)||(a==alClient))) return true;

  
  if(c.ID!='')
  {
    var o = c.Elm();
    if(o)
    {
      if(c.DoSetVisible) c.DoSetVisible(o, v);
      else 
      { 
        o.style.display=(v ? 'block' : 'none'); 
        o.style.visibility=(v ? 'visible' : 'hidden'); // IE7 sometimes don't hide elements if display is none 
      }
      // IE7 redraw fix
      var fix7=document.body.offsetLeft;
    }
  }
  if(c.Visible!=v)
  {
    c.Visible=v;
    c.ParentControl.Update();
    if(c.OnVisibleChanged) c.OnVisibleChanged(c);
  }
  return false;
}

function ngapc_DoUpdate(o)
{
  if((ngVal(this.AlignAutoUpdate,true))&&(this.ParentControl))
  {
    var a=ngVal(this.ControlAlign,alNone);
    // test if dimensions changed
    if((a!=this.align_control)
     ||(((a==alLeft)||(a==alRight))&&(this.align_w!=this.Bounds.W))
     ||(((a==alTop)||(a==alBottom))&&(this.align_h!=this.Bounds.H)))
    {
      this.ParentControl.Update();
      return true;  
    }
  }

  if(typeof this.ngc_DoUpdate==='function') 
    return this.ngc_DoUpdate(o);

  return true;
}

function ngap_OuterHeight(o,v)
{
  v+=ng_GetCurrentStylePx(o,'margin-top') + ng_GetCurrentStylePx(o,'margin-bottom');
  v+=ng_GetCurrentStylePx(o,'border-top-width') + ng_GetCurrentStylePx(o,'border-bottom-width');
  v+=ng_GetCurrentStylePx(o,'padding-top') + ng_GetCurrentStylePx(o,'padding-bottom');
  return v;
}

function ngap_OuterWidth(o,v)
{
  v+=ng_GetCurrentStylePx(o,'margin-left') + ng_GetCurrentStylePx(o,'margin-right');
  v+=ng_GetCurrentStylePx(o,'border-left-width') + ng_GetCurrentStylePx(o,'border-right-width');
  v+=ng_GetCurrentStylePx(o,'padding-left') + ng_GetCurrentStylePx(o,'padding-right');
  return v;
}

function ngap_RegisterControl(c)
{
  if((typeof c!=='object')||(!c)) return;
  
  if(c.DoUpdate!=ngapc_DoUpdate)
  {
    c.ngc_DoUpdate=c.DoUpdate;
    c.DoUpdate=ngapc_DoUpdate;
    c.AddEvent(ngapc_OnSetVisible,'OnSetVisible');
  }
  c.align_fncregistered=true;
}

function ngap_UnreegisterControl(c)
{
  if((typeof c!=='object')||(!c)) return;
  
  if(c.DoUpdate==ngapc_DoUpdate)
  {
    if(typeof c.ngc_DoUpdate === 'function') 
    {
      c.DoUpdate=c.ngc_DoUpdate;
      delete c.ngc_DoUpdate;
    } 
    c.RemoveEvent(ngapc_OnSetVisible,'OnSetVisible');
  }
  if(typeof c.align_fncregistered!=='undefined')
    c.align_fncregistered=false;
}

function ngap_Update(recursive)
{
  if(!this.Visible) return;
  var p=this.ParentControl;
  while(p)
  {
    if(!p.Visible) return;
    p=p.ParentControl;
  }

  if(this.align_update) return;
  this.align_update=true;

  var to=null;
  var onupdated=this.OnUpdated;
  this.OnUpdated=null;
  try
  {
    var c,a,o,x,y;
    var l,t,r,b,maxx,maxy,autosize,w,h;
    var cc,changed=false;
    for(var k=0;k<2;k++)
    {
      cc=this.ChildControls;
      if((typeof cc !== 'undefined')&&(cc.length>0)) 
      {
        to=this.Elm();
        if(to)
        {
          this.Align(to);
          autosize=this.AutoSize;
          l=0;t=0;r=0;b=0;
          maxx=0;maxy=0;
          ng_BeginMeasureElement(to);
          w=ng_OuterWidth(to);
          h=ng_OuterHeight(to);
          ng_EndMeasureElement(to);
        
          for(var i=0;i<cc.length;i++) 
          {
            c=cc[i];
            if(!c) continue;
            c.Update(false);
            a=ngVal(c.ControlAlign,alNone);
            if(a==alNone) 
            {
              o=(autosize ? c.Elm() : null);
              if((o)&&(c.Visible))
              {
                ng_BeginMeasureElement(o);
                x=ng_GetCurrentStylePx(o,'left')+ng_OuterWidth(o);
                y=ng_GetCurrentStylePx(o,'top')+ng_OuterHeight(o);
                ng_EndMeasureElement(o);
                
                if(x>maxx) maxx=x;
                if(y>maxy) maxy=y;
              }
              continue;
            }
            if((a!=alClient)&&((typeof c.align_fncregistered === 'undefined')||(!c.align_fncregistered)))
            {
              ngap_RegisterControl(c);
            }
            var co=c.Elm();
            switch(a)
            {
              case alTop:
                c.Bounds.T=t;
                c.Bounds.L=l;
                c.Bounds.R=r;
                if((c.align_h==c.Bounds.H)&&(typeof c.align_oh!=='undefined'))
                {
                  c.Bounds.H=c.align_oh;
                  delete c.align_oh;
                }
                else c.Bounds.H=ngVal(c.Bounds.H,0);
                delete c.Bounds.B;
                delete c.Bounds.W;
                if(c.Visible) t+=ngap_OuterHeight(co,c.Bounds.H);
                if((!autosize)&&(t+b>h))
                {
                  if(typeof c.align_oh==='undefined') c.align_oh=c.Bounds.H; 
                  c.Bounds.H-=t+b-h; 
                  if(c.Bounds.H<0) c.Bounds.H=0; 
                  t=(h-b); 
                }          
                else delete c.align_oh;
                c.align_h=c.Bounds.H;
                break;
              case alBottom:
                c.Bounds.B=b;
                c.Bounds.L=l;
                c.Bounds.R=r;
                if((c.align_h==c.Bounds.H)&&(typeof c.align_oh!=='undefined'))
                {
                  c.Bounds.H=c.align_oh;
                  delete c.align_oh;
                }
                else c.Bounds.H=ngVal(c.Bounds.H,0);
                delete c.Bounds.T;
                delete c.Bounds.W;
                if(c.Visible) b+=ngap_OuterHeight(co,c.Bounds.H);
                if((!autosize)&&(t+b>h))
                { 
                  if(typeof c.align_oh==='undefined') c.align_oh=c.Bounds.H; 
                  c.Bounds.H-=t+b-h; 
                  if(c.Bounds.H<0) c.Bounds.H=0; 
                  b=(h-t); 
                }
                else delete c.align_oh;
                c.align_h=c.Bounds.H;
                break;
              case alLeft:
                c.Bounds.L=l;
                c.Bounds.T=t;
                c.Bounds.B=b;
                if((c.align_w==c.Bounds.W)&&(typeof c.align_ow!=='undefined'))
                {
                  c.Bounds.W=c.align_ow;
                  delete c.align_ow;
                }
                else c.Bounds.W=ngVal(c.Bounds.W,0);
                delete c.Bounds.R;
                delete c.Bounds.H;
                if(c.Visible) l+=ngap_OuterWidth(co,c.Bounds.W);
                if((!autosize)&&(l+r>w))
                { 
                  if(typeof c.align_ow==='undefined') c.align_ow=c.Bounds.W; 
                  c.Bounds.W-=l+r-w; 
                  if(c.Bounds.W<0) c.Bounds.W=0; 
                  l=(w-r); 
                }
                else delete c.align_ow;
                c.align_w=c.Bounds.W;
                break;
              case alRight:
                c.Bounds.R=r;
                c.Bounds.T=t;
                c.Bounds.B=b;
                if((c.align_w==c.Bounds.W)&&(typeof c.align_ow!=='undefined'))
                {
                  c.Bounds.W=c.align_ow;
                  delete c.align_ow;
                }
                else c.Bounds.W=ngVal(c.Bounds.W,0);
                delete c.Bounds.L;
                delete c.Bounds.H;
                if(c.Visible) r+=ngap_OuterWidth(co,c.Bounds.W);
                if((!autosize)&&(l+r>w))
                { 
                  if(typeof c.align_ow==='undefined') c.align_ow=c.Bounds.W; 
                  c.Bounds.W-=l+r-w; 
                  if(c.Bounds.W<0) c.Bounds.W=0; 
                  r=(w-l); 
                }
                else delete c.align_ow;
                c.align_w=c.Bounds.W;
                break;
              case alClient:
                autosize=false;
                c.Bounds.L=l;
                c.Bounds.R=r;
                c.Bounds.T=t;
                c.Bounds.B=b;
                delete c.Bounds.W;
                delete c.Bounds.H;
                break;
            }
            c.align_control=a;
            c.SetBounds();
          }
          if(autosize)          
          {
            if(l+r>0) w=l+r;
            if(t+b>0) h=t+b;
            if(w<maxx) w=maxx;
            if(h<maxy) h=maxy;
            if(w<0) w=0;
            if(h<0) h=0;
            ng_SetOuterWidth(to,w);
            ng_SetOuterHeight(to,h);
    
            var cbw=ng_StyleWidth(to);
            var cbh=ng_StyleHeight(to);
            if((this.Bounds.W!=cbw)||(this.Bounds.H!=cbh))
            {
              this.Bounds.W=cbw;
              if((typeof this.Bounds.L !== 'undefined')&&(typeof this.Bounds.R !== 'undefined')) delete this.Bounds.R;
              this.Bounds.H=cbh;
              if((typeof this.Bounds.T !== 'undefined')&&(typeof this.Bounds.B !== 'undefined')) delete this.Bounds.B;
              this.SetBounds();
            }
          }
        }
      }
      this.ngc_Update(recursive);          
      cc=this.ChildControls;
      if((typeof cc !== 'undefined')&&(cc.length>0)) 
      {
        to=this.Elm();
        if(to)
        {
          for(var i=0;i<cc.length;i++) 
          {
            c=cc[i];
            if(!c) continue;
            a=ngVal(c.ControlAlign,alNone);
            if(a==alNone) continue; 
            if((a!=this.align_control)
             ||(((a==alLeft)||(a==alRight))&&(this.align_w!=this.Bounds.W))
             ||(((a==alTop)||(a==alBottom))&&(this.align_h!=this.Bounds.H)))
            {
              changed=true;
              break;
            }
          }
        }
      }
      if(!changed) break;
    }   
    this.align_update=false;
    if(!to) to=this.Elm();
    this.OnUpdated=onupdated;
    if(this.OnUpdated) this.OnUpdated(this,to);
  } finally {  
    this.OnUpdated=onupdated;
  }    
}

/*  Class: ngAlignPanel (ngAlignFrame)
 *  Standard align panel control (based on <ngPanel>/<ngFrame>).
 */
/*
 *  Group: Properties
 */
/*  Variable: AutoSize
 *  ...
 *  Type: bool
 *  Default value: *false*         
 */
/*<>*/
/*
 *  Group: Child Controls Properties
 */
/*  Variable: ControlAlign
 *  ...
 *  Type: integer
 *  Default value: *alNone*         
 */
/*<>*/
/*  Variable: AlignAutoUpdate
 *  ...
 *  Type: bool
 *  Default value: *true*         
 */
/*<>*/

function ngAlignPanel_Create(def,ref,parent) 
{
  var c=ngCreateControlAsType(def, (def.Type=='ngAlignFrame' ? 'ngFrame' : 'ngPanel'), ref, parent);
  c.AutoSize=false;
  c.ngc_Update = c.Update;
  c.Update = ngap_Update;

  /*
   *  Group: Methods
   */
  /*  Function: CtrlBringToFront
   *   
   *  Syntax:
   *    void *CtrlBringToFront* (object ctrl)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.CtrlBringToFront=ngc_CtrlBringToFront;
  /*  Function: CtrlSendToBack
   *   
   *  Syntax:
   *    void *CtrlSendToBack* (object ctrl)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.CtrlSendToBack=ngc_CtrlSendToBack;
  /*  Function: CtrlInsertAfter
   *   
   *  Syntax:
   *    void *CtrlInsertAfter* (object ctrl, object whichctrl)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.CtrlInsertAfter=ngc_CtrlInsertAfter;
  /*  Function: CtrlInsertBefore
   *   
   *  Syntax:
   *    void *CtrlInsertBefore* (object ctrl, object whichctrl)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  c.CtrlInsertBefore=ngc_CtrlInsertBefore;
  return c;
}

// --- ngSplitPanel ------------------------------------------------------------
               
function ngs_DoPtrStart(pi)
{
  if(pi.EventID!=='handle') return;
  this.MouseDownSize = this.Size;
  if(this.IsMinimized()) this.MouseDownSize = 0;
  if(this.IsMaximized()) 
  {
    var o=this.Elm();
    if(o) {
      switch(this.PanelAlign)
      {
        case 'left':
        case 'right':      
          this.MouseDownSize = (ng_ClientWidth(o)-this.HandleSize());
          break;
        case 'top':
        case 'bottom':      
          this.MouseDownSize = (ng_ClientHeight(o)-this.HandleSize());
          break;
      }
    }
  }

  var m=document.getElementById(this.ID+'_M');
  var h=document.getElementById(this.ID+'_H');
  if((m)&&(h)) 
  {
    m.style.left=h.style.left;
    m.style.top=h.style.top;
    m.style.width=h.style.width;
    m.style.height=h.style.height;
    m.style.display='block';
  }

  this.MouseDown = true;
  this.DoUpdateImages();
}

function ngs_DoPtrEnd(pi)
{
  if(pi.EventID!=='handle') return;
  var m=document.getElementById(this.ID+'_M');
  if(m) m.style.display='none';

  var di = this.PointerInfo;
  var dx = di.EndX - di.StartX;
  var dy = di.EndY - di.StartY;
  if((di.StartTime+300>di.EndTime)&&(Math.abs(dx)<2)&&(Math.abs(dy)<2)) this.DoHandleClick();
  else
  {
    var s=this.MouseDownSize;
    this.Restore();
    switch(this.PanelAlign)
    {
      case 'left':   this.SetSize(s+dx); break;
      case 'right':  this.SetSize(s-dx); break;
      case 'top':    this.SetSize(s+dy); break;
      case 'bottom': this.SetSize(s-dy); break;
    }
  }

  this.MouseDown = false;
  this.DoUpdateImages();
}

function ngs_DoPtrDrag(pi)
{
  if(pi.EventID!=='handle') return false;
  var o=this.Elm();
  var m=document.getElementById(this.ID+'_M');
  if((m)&&(o))
  {
    var w=ng_ClientWidth(o)
    var h=ng_ClientHeight(o)
    var hs=this.HandleSize();

    var pi=this.PointerInfo;    
    var dx = pi.X - pi.StartX;
    var dy = pi.Y - pi.StartY;
    var s=this.MouseDownSize;
    switch(this.PanelAlign)
    {
      case 'left':   s+=dx; break;
      case 'right':  s-=dx; break;
      case 'top':    s+=dy; break;
      case 'bottom': s-=dy; break;
    }
    if((this.MaxSize>0)&&(s>this.MaxSize)) s=this.MaxSize;
    if(s<this.MinSize) s=this.MinSize;

    if((s<=this.AutoMinimize)&&(!this.IsMinimized())) s=0; 
    if(s<0) s=0;
    switch(this.PanelAlign)
    {
      case 'left':
      case 'right':   
        if((w-hs-s<=this.AutoMaximize)&&(!this.IsMaximized())) s=w-hs; 
        if(s>w-hs) s=w-hs;
        break;
      case 'top':
      case 'bottom': 
        if((h-hs-s<=this.AutoMaximize)&&(!this.IsMaximized())) s=h-hs; 
        if(s>h-hs) s=h-hs;
        break;
    }
    switch(this.PanelAlign)
    {
      case 'left':
        m.style.left=s+'px';
        break;
      case 'right':   
        m.style.left=(w-hs-s)+'px';
        break;
      case 'top':
        m.style.top=s+'px';
        break;
      case 'bottom': 
        m.style.top=(h-hs-s)+'px';
        break;
    }
    return true;
  }
  return false;
}

var ngs_CurrentHandleId='';

function ngs_HandleEnter(e, elm)
{
  if(!e) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  if(ngs_CurrentHandleId!='') 
  {
    var o=document.getElementById(ngs_CurrentHandleId);
    ngs_HandleLeave(e,o);
  }
  ngs_CurrentHandleId=elm.id;
  var o=document.getElementById(elm.id);
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i<0) cn=cn+'_Focus';
    o.className=cn;
  }
  ngc_EnterImg(elm.id+'S');
  ngc_EnterImgS(elm.id+'M');
  ngc_EnterImg(elm.id+'E');
  ngc_EnterImg(elm.id+'I');
}

function ngs_HandleLeave(e, elm)
{
  if(!e) e=window.event;
  if((ngUsingTouch)&&(e)&&(e.type.toLowerCase().match(/mouse/))) return; // ignore mouse events if using touch

  if(ngs_CurrentHandleId==elm.id) ngs_CurrentHandleId='';
  var o=document.getElementById(elm.id);
  if(o)
  {
    var cn=o.className;
    var i=cn.indexOf('_Focus');
    if(i>=0) cn=cn.substring(0,i);
    o.className=cn; 
  }
  ngc_LeaveImg(elm.id+'S');
  ngc_LeaveImgS(elm.id+'M');
  ngc_LeaveImg(elm.id+'E');
  ngc_LeaveImg(elm.id+'I');
}

function ngs_DoHandleClick()
{
  if((this.OnHandleClick)&&(!ngVal(this.OnHandleClick(this),false))) return;
  if((this.IsMinimized())||(this.IsMaximized())) this.Restore();
  else this.Minimize();
}

function ngs_GetImg(idx)
{
  var image=null;
  if(this.OnGetImg) image=this.OnGetImg(this, idx);
  else 
  {
    switch(idx) 
    {
      case 0: image=this.MoverStartImg; break;
      case 1: image=this.MoverMiddleImg; break;
      case 2: image=this.MoverEndImg; break;
      case 3: image=this.HandleImg; break;
    }
  }
  return ngVal(image,null);
}

function ngs_HandleSize()
{
  if(!this.HandleVisible) return 0;

  var img,dp,hs=0;
  switch(this.PanelAlign)
  {
    case 'left':
    case 'right':
      for(var i=0;i<4;i++)
      {
        img=this.GetImg(i);
        if(!img) continue;
        dp=ngc_ImgDrawProps(this.ID+'_MS', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        if(dp.W>hs) hs=dp.W;
      }
      break;
    case 'top':
    case 'bottom':
      for(var i=0;i<4;i++)
      {
        img=this.GetImg(i);
        if(!img) continue;
        dp=ngc_ImgDrawProps(this.ID+'_MS', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        if(dp.H>hs) hs=dp.H;
      }
      break;
  }
  return hs;
}


function ngs_Restore()
{
  if((!this.IsMinimized())&&(!this.IsMaximized())) return;
  if((this.OnRestore)&&(!ngVal(this.OnRestore(this),false))) return;
  this.ControlsPanel1.SetVisible(true);
  this.ControlsPanel2.SetVisible(true);
  this.__restore=true;
  try {   
    this.SetSize(this.Size);
  } finally {
    delete this.__restore;
  }
}

function ngs_IsMinimized()
{
  return (!this.ControlsPanel1.Visible);
}

function ngs_Maximize()
{
  if((this.IsMinimized())||(this.IsMaximized())) this.Restore();
  if((this.OnMaximize)&&(!ngVal(this.OnMaximize(this),false))) return;
  this.ControlsPanel2.SetVisible(false);
  this.SetSize(this.Size);
}

function ngs_IsMaximized()
{
  return (!this.ControlsPanel2.Visible);
}

function ngs_Minimize()
{
  if((this.IsMinimized())||(this.IsMaximized())) this.Restore();
  if((this.OnMinimize)&&(!ngVal(this.OnMinimize(this),false))) return;
  this.ControlsPanel1.SetVisible(false);
  this.SetSize(this.Size);
}

function ngs_SetSize(size)
{
  var changed=(size!=this.Size);
  
  var cursize=this.Size;
  this.Size=size;
  if((changed)&&(this.OnSizeChanging)&&(!ngVal(this.OnSizeChanging(this,cursize),false))) 
  {
    this.Size=cursize;
    return;
  }
  if((this.MaxSize>0)&&(this.Size>this.MaxSize)) this.Size=this.MaxSize;
  if(this.Size<this.MinSize) this.Size=this.MinSize;
      
  var o=this.Elm();
  if((!this.__restore)&&(this.Size<=this.AutoMinimize)&&(!this.IsMinimized())) 
  {
    this.Size=cursize;
    this.Minimize();
    o=null; // don't set size
  }

  if(o)
  {
    var w=ng_ClientWidth(o);
    var h=ng_ClientHeight(o);

    var handle=document.getElementById(this.ID+'_H');
    
    var ms,s2,s1=Math.round(this.Size);
    var hs=this.HandleSize();
    var min=this.IsMinimized();
    var max=this.IsMaximized();
  
    if(handle) handle.style.display=(this.HandleVisible ? 'block' : 'none');
    switch(this.PanelAlign)
    {
      case 'left':
      case 'right':
        if((!this.__restore)&&(w-hs>0)&&(w-hs-this.Size<=this.AutoMaximize)&&(!this.IsMaximized())) 
        { 
          this.Size=cursize; 
          this.Maximize(); 
          min=true; max=true; // don't set bounds 
          break; 
        }
        s2=(min ? w-hs : w-hs-Math.round(this.Size));
        if(max) { s1=w-hs; s2=0; }
        if(min) { s1=0; }
        if(s1<0) s1=0;
        if(s1>w-hs) s1=w-hs;
        if((!min)&&(!max)) this.Size=s1;
        if(s2<0) s2=0;
        if(s2>w-hs) s2=w-hs;
        if(!min) this.ControlsPanel1.Bounds.W=s1;  
        if(!max) this.ControlsPanel2.Bounds.W=s2;
        ms=(this.PanelAlign == 'left' ? s1 : s2)+'px';
        if(handle)
        {
          handle.style.left=ms;
          handle.style.width=hs+'px';
          handle.style.height=h+'px';
        }
        break;          
      case 'top':
      case 'bottom':
        if((!this.__restore)&&(h-hs>0)&&(h-hs-this.Size<=this.AutoMaximize)&&(!this.IsMaximized())) 
        { 
          this.Size=cursize; 
          this.Maximize();
          min=true; max=true; // don't set bounds
          break; 
        }
        s2=(min ? h-hs : h-hs-Math.round(this.Size));
        if(max) { s1=h-hs; s2=0; }
        if(min) { s1=0; }
        if(s1<0) s1=0;
        if(s1>h-hs) s1=h-hs;
        if((!min)&&(!max)) this.Size=s1;
        if(s2<0) s2=0;
        if(s2>h-hs) s2=h-hs;
        if(!min) this.ControlsPanel1.Bounds.H=s1;          
        if(!max) this.ControlsPanel2.Bounds.H=s2;
        ms=(this.PanelAlign == 'top' ? s1 : s2)+'px';
        if(handle)
        {
          handle.style.top=ms;
          handle.style.height=hs+'px';          
          handle.style.width=w+'px';          
        }
        break;          
    }
    if(!min) 
    {
      this.ControlsPanel1.SetBounds();
      this.ControlsPanel1.Update();
    }
    if(!max) 
    {
      this.ControlsPanel2.SetBounds();
      this.ControlsPanel2.Update();
    }
  }
  if((changed)&&(this.OnSizeChanged)) this.OnSizeChanged(this);
}

function ngs_DoUpdate(o)
{
  var handle=document.getElementById(this.ID+'_H');
  if(!handle) return true;

  var cclass=this.BaseClassName;
  var html=new ngStringBuilder;
  var ldim=0,resize=false;
  var w=ng_ClientWidth(o);
  var h=ng_ClientHeight(o);

  switch(this.PanelAlign)
  {
    case 'left':
    case 'right':
      if(ngVal(this.LastDim,w)!=w) resize=true;
      ldim=w;
      break;
    case 'top':
    case 'bottom':
      if(ngVal(this.LastDim,h)!=h) resize=true;
      ldim=h;
      break;
  }
  if(resize)
  {
    if((((!this.OnResize)||(ngVal(this.OnResize(this),false))))&&(ldim>0 && this.LastDim>0))
    {
      var r=ldim/this.LastDim;
      if(this.ResizeMode & ngspResizeSize)         this.Size*=r;
      if(this.ResizeMode & ngspResizeMinSize)      this.MinSize*=r;
      if(this.ResizeMode & ngspResizeMaxSize)      this.MaxSize*=r;
      if(this.ResizeMode & ngspResizeAutoMinimize) this.AutoMinimize*=r;
      if(this.ResizeMode & ngspResizeAutoMaximize) this.AutoMaximize*=r;
    }  
  }
  this.SetSize(this.Size);  
  var img,dp,ss=0,es=0;
  var mh=0,mw=0;
  
  switch(this.PanelAlign)
  {
    case 'left':
    case 'right':
      handle.style.cursor = (this.Enabled ? 'col-resize' : 'default');
      img=this.GetImg(0);
      if(img)
      {
        dp=ngc_ImgDrawProps(this.ID+'_HS', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        ngc_Img(html,dp,"position:absolute; top: 0px;",ngVal(img.Attrs,''));
        ss=dp.H;
        if(dp.W>mw) mw=dp.W;
      }
      
      img=this.GetImg(2);
      if(img)
      {
        dp=ngc_ImgDrawProps(this.ID+'_HE', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        ngc_Img(html,dp,"position:absolute; top: "+(h-dp.H)+"px;",ngVal(img.Attrs,''));
        if(dp.W>mw) mw=dp.W;
        es=dp.H;
      }
  
      img=this.GetImg(1);
      if(img)
      {
        dp=ngc_ImgDrawProps(this.ID+'_HM', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        ngc_ImgSH(html,dp,ss,h-ss-es,'',ngVal(img.Attrs,''));
        if(dp.W>mw) mw=dp.W;
      }
  
      img=this.GetImg(3);
      if(img)
      {
        dp=ngc_ImgDrawProps(this.ID+'_HI', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        ngc_Img(html,dp,"position:absolute;z-index:1;top: "+Math.round((h-dp.H)/2)+"px;",ngVal(img.Attrs,''));
        if(dp.W>mw) mw=dp.W;
      }
      break;
    case 'top':
    case 'bottom':
      handle.style.cursor = (this.Enabled ? 'row-resize' : 'default');
      img=this.GetImg(0);
      if(img)
      {
        dp=ngc_ImgDrawProps(this.ID+'_HS', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        ngc_Img(html,dp,"position:absolute; left: 0px;",ngVal(img.Attrs,''));
        ss=dp.W;
        if(dp.H>mh) mh=dp.H;
      }
      
      img=this.GetImg(2);
      if(img)
      {
        dp=ngc_ImgDrawProps(this.ID+'_HE', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        ngc_Img(html,dp,"position:absolute; left: "+(w-dp.W)+"px;",ngVal(img.Attrs,''));
        if(dp.H>mh) mh=dp.H;
        es=dp.W;
      }
  
      img=this.GetImg(1);
      if(img)
      {
        dp=ngc_ImgDrawProps(this.ID+'_HM', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        ngc_ImgSW(html,dp,ss,w-ss-es,'',ngVal(img.Attrs,''));
        if(dp.H>mh) mh=dp.H;
      }
  
      img=this.GetImg(3);
      if(img)
      {
        dp=ngc_ImgDrawProps(this.ID+'_HI', 'ngSplitPanel', this.ID, this.MouseDown, this.Enabled, img);
        ngc_Img(html,dp,"position:absolute;z-index:1;left: "+Math.round((w-dp.W)/2)+"px;",ngVal(img.Attrs,''));
        if(dp.H>mh) mh=dp.H;
      }
      break;
  }
  ng_SetInnerHTML(handle,html.toString());

  var cn=cclass+(this.Enabled ? 'Handle' : 'HandleDisabled');
  if(ngs_CurrentHandleId==handle.id) cn+='_Focus';
  handle.className=cn; 

  this.LastDim=ldim;
  return true;
}

function ngs_DoUpdateImages()
{
  for(var i=0;i<4;i++){
    img=this.GetImg(i);
    if(img)
    {
      var pfix = '';
      
      switch(i)
      {
        case 0: pfix='_HS'; break;
        case 1: pfix='_HM'; break;
        case 2: pfix='_HE'; break;
        case 3: pfix='_HI'; break;
      }
      
      ngc_ChangeImg(this.ID+pfix,this.MouseDown,this.Enabled,img);
    }
  }
}

function ngs_DoAttach(o)
{
  var h=document.getElementById(this.ID+'_H');
  if(h) 
  {
    h.onmouseover = function(e) { ngs_HandleEnter(e,this); }
    h.onmouseout  = function(e) { ngs_HandleLeave(e,this); }
    ngc_PtrListener(this, h, 'handle','drag');
  }
}

function ngs_DoRelease(o)
{
  o.style.display='none';
  var handle=document.getElementById(this.ID+'_H');
  if(handle) ng_SetInnerHTML(handle,'');
}

function ngs_DoCreate(def, ref, elm, parent)
{
  var cclass=this.BaseClassName;

  var w=ng_ClientWidth(elm);
  var h=ng_ClientHeight(elm);

  var hs=this.HandleSize();
  if((this.MaxSize>0)&&(this.Size>this.MaxSize)) this.Size=this.MaxSize;
  if(this.Size<this.MinSize) this.Size=this.MinSize;
  
  // Panel1
  
  var ldefs=new Object;
  if(typeof def.ControlsPanel1 === 'object') ldefs.ControlsPanel = ng_CopyVar(def.ControlsPanel1);
  else if(typeof def.ControlsPanel === 'object') ldefs.ControlsPanel = ng_CopyVar(def.ControlsPanel);
  else ldefs.ControlsPanel = new Object;

  var ld=ldefs.ControlsPanel;    
  ng_MergeDef(ld, {
    Type: 'ngPanel',
    className: cclass+'ControlsPanel',
    id: this.ID+'_P1',
    ScrollBars: ssAuto
  });
  
  var s=Math.round(this.Size);
  switch(this.PanelAlign)
  {
    case 'left':
      ld.L=0; ld.W=s;  
      ld.T=0; ld.B=0;
      break;
    case 'right':
      ld.R=0; ld.W=s;  
      ld.T=0; ld.B=0;
      break;          
    case 'top':
      ld.T=0; ld.H=s;
      ld.L=0; ld.R=0;  
      break;
    case 'bottom':
      ld.B=0; ld.H=s;
      ld.L=0; ld.R=0;  
      break;          
  }
  ld.Controls=def.Controls1;
  ld.ModifyControls=def.ModifyControls1;

  var lref=ngCreateControls(ldefs,undefined,this.ID);

  this.ControlsPanel1=lref.ControlsPanel;
  this.ControlsPanel1.Owner=this;
  delete lref.ControlsPanel;
  ngCloneRefs(ref,lref);

  // Panel2
  ldefs=new Object;
  if(typeof def.ControlsPanel2 === 'object') ldefs.ControlsPanel = ng_CopyVar(def.ControlsPanel2);
  else if(typeof def.ControlsPanel === 'object') ldefs.ControlsPanel = ng_CopyVar(def.ControlsPanel);
  else ldefs.ControlsPanel = new Object;

  ld=ldefs.ControlsPanel;    
  ng_MergeDef(ld, {
    Type: 'ngPanel',
    className: cclass+'ControlsPanel',
    id: this.ID+'_P2',
    ScrollBars: ssAuto
  });

  s=w-hs-Math.round(this.Size);
  if(s<0) s=0;
  switch(this.PanelAlign)
  {
    case 'left':
      ld.R=0; ld.W=s;  
      ld.T=0; ld.B=0;          
      break;     
    case 'right':  
      ld.L=0; ld.W=s;  
      ld.T=0; ld.B=0;          
      break;     
    case 'top':
      ld.B=0; ld.H=s;
      ld.L=0; ld.R=0;  
      break;     
    case 'bottom':
      ld.T=0; ld.H=s;
      ld.L=0; ld.R=0;  
      break;     
  }
  ld.Controls=def.Controls2;
  ld.ModifyControls=def.ModifyControls2;
  lref=ngCreateControls(ldefs,undefined,this.ID);  

  this.ControlsPanel2=lref.ControlsPanel;
  this.ControlsPanel2.Owner=this;
  delete lref.ControlsPanel;
  ngCloneRefs(ref,lref);

  var nd=document.createElement('div');
  nd.id=this.ID+'_H';
  nd.className=cclass+'Handle';
  nd.style.position="absolute";
  elm.appendChild(nd);
  ngc_PtrEventsHTML(this,'handle','drag')

  var nd2=document.createElement('div');
  nd2.id=this.ID+'_M';
  nd2.className=cclass+'Mover';
  nd2.style.display="none";
  nd2.style.position="absolute";
  nd2.style.zIndex="801";
  nd2.style.fontSize="0px";
  nd2.style.lineHeight="0px";
  nd2.style.left="0px";
  nd2.style.top="0px";
  nd2.style.width="0px";
  nd2.style.height="0px";
  elm.appendChild(nd2);
  
/*
  ng_AppendInnerHTML(elm,'<div id="'+this.ID+'_H" class="'+cclass+'Handle" style="position: absolute;"'+ngc_PtrEventsHTML(this,'handle','drag')+'></div>')
//  ng_AppendInnerHTML(elm,'<div id="'+this.ID+'_H" class="'+cclass+'Handle" style="position: absolute;"></div>'
                +'<div id="'+this.ID+'_M" class="'+cclass+'Mover"  style="display:none;position: absolute; z-index: 801; font-size:0px;line-height:0px;left:0px;top:0px;width:0px;height:0px;"></div>');
                */
}

var ngs_initialized = false;

var ngspResizeNone = 0;
var ngspResizeSize = 1;
var ngspResizeMinSize = 2;
var ngspResizeMaxSize = 4;
var ngspResizeAutoMinimize = 8;
var ngspResizeAutoMaximize = 16; 

/**
 *  Class: ngSplitPanel
 *  This class implements a generic split panel control. 
 *
 *  Syntax:
 *    new *ngSplitPanel* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngSplitPanel(id)
{
  ngControl(this, id, 'ngSplitPanel');

  /*
   *  Group: Definition
   */
  /*
   *  Variable: Controls1
   *  ...
   *  Type: object
   */
  /*
   *  Variable: Controls2
   *  ...
   *  Type: object
   */
  /*<>*/
  /*
   *  Variable: ControlsPanel1
   *  Controls panel definition.
   *  Type: object
   */
  /*<>*/
  /*
   *  Variable: ControlsPanel2
   *  Controls panel definition.
   *  Type: object
   */
  /*<>*/
  
  /*
   *  Group: Properties
   */
  /*  Variable: PanelAlign
   *  ...
   *  Type: string
   *  Default value: *'left'*   
   */
  this.PanelAlign = 'left';  
  /*  Variable: ResizeMode
   *  ...
   *  Type: enum
   *  
   *  Constants:
   *    ngspResizeSize - ...
   *    ngspResizeMinSize - ...
   *    ngspResizeMaxSize - ...
   *    ngspResizeAutoMinimize - ...
   *    ngspResizeAutoMaximize - ... 
   *      
   *  Default value: *ngspResizeSize*   
   */
  this.ResizeMode = ngspResizeSize; 
  
  /*  Variable: Size
   *  ...
   *  Type: int
   *  Default value: *200*   
   */
  this.Size = 200;
  /*  Variable: MinSize
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MinSize = 0;
  /*  Variable: MaxSize
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MaxSize = 0;
  /*  Variable: AutoMinimize
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.AutoMinimize = 0;
  /*  Variable: AutoMaximize
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.AutoMaximize = 0;
  
  /*  Variable: HandleVisible
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.HandleVisible = true;

  /*  Variable: MoverStartImg
   *  ...
   *  Type: object
   */
  this.MoverStartImg = null;
  /*  Variable: MoverMiddleImg
   *  ...
   *  Type: object
   */
  this.MoverMiddleImg = null;
  /*  Variable: MoverEndImg
   *  ...
   *  Type: object
   */
  this.MoverEndImg = null;
  /*  Variable: HandleImg
   *  ...
   *  Type: object
   */
  this.HandleImg = null;
  
  this.MouseDown = false;

  /*
   *  Group: Methods
   */
  /*  Function: SetSize
   *  Changes size of split panel.     
   *   
   *  Syntax:
   *    void *SetSize* (int size)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.SetSize = ngs_SetSize;

  /*  Function: Minimize
   *  Minimizes split panel.     
   *   
   *  Syntax:
   *    void *Minimize* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Minimize = ngs_Minimize;
  /*  Function: Maximize
   *  Maximizes split panel.     
   *   
   *  Syntax:
   *    void *Maximize* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Maximize = ngs_Maximize;
  /*  Function: Restore
   *  Restores split panel to its normal size.     
   *   
   *  Syntax:
   *    void *Restore* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Restore  = ngs_Restore;
  
  /*  Function: IsMaximized
   *  Determines if split panel is maximized.     
   *   
   *  Syntax:
   *    bool *IsMaximized* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.IsMaximized = ngs_IsMaximized;
  /*  Function: IsMinimized
   *  Determines if split panel is minimized.     
   *   
   *  Syntax:
   *    bool *IsMinimized* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.IsMinimized = ngs_IsMinimized;
 
  this.DoCreate = ngs_DoCreate;
  this.DoRelease = ngs_DoRelease;
  this.DoUpdate = ngs_DoUpdate;
  this.DoAttach = ngs_DoAttach;
  this.DoPtrStart = ngs_DoPtrStart;
  this.DoPtrDrag = ngs_DoPtrDrag;
  this.DoPtrEnd = ngs_DoPtrEnd;
  this.DoUpdateImages = ngs_DoUpdateImages;

  this.GetImg = ngs_GetImg;
  this.HandleSize = ngs_HandleSize;
  
  this.DoHandleClick = ngs_DoHandleClick;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnGetImg
   */     
  this.OnGetImg = null;

  /*
   *  Event: OnResize
   */     
  this.OnResize = null;  
  /*
   *  Event: OnHandleClick
   */     
  this.OnHandleClick = null;
  /*
   *  Event: OnSizeChanging
   */     
  this.OnSizeChanging = null;
  /*
   *  Event: OnSizeChanged
   */     
  this.OnSizeChanged = null;  
  /*
   *  Event: OnMinimize
   */     
  this.OnMinimize = null;
  /*
   *  Event: OnMaximize
   */     
  this.OnMaximize = null;
  /*
   *  Event: OnRestore
   */     
  this.OnRestore = null;
  
  ngControlCreated(this);
}

// --- ngDropPanel -------------------------------------------------------------

function ngdp_BtnClick(e)
{
  if((e.Owner)&&(e.Owner.Owner))
    e.Owner.Owner.SetDropDown(e.Owner.Checked == 1 ? false : true);
}

function ngdp_DoUpdate(o)
{
  var bh=0;
  var dropdown=false;
  var btntop=(typeof this.Bounds.T === 'undefined');
  if(btntop) 
  {
    if(typeof this.Bounds.T!=='undefined')
    {
      delete this.Bounds.T;
      this.SetBounds();
    }
  }
  else 
  {
    if(typeof this.Bounds.B!=='undefined')
    {
      delete this.Bounds.B;
      this.SetBounds();
    }
  }

  var b=this.Button;
  if(b)
  {
    if(b.Checked==1) dropdown=true;
    if(btntop)
    {
      b.SetBounds({T: 0, B: undefined});      
    }
    else
    {
      b.SetBounds({B: 0, T: undefined});
    }
    if(b.ID=='') b.Attach(this.ID+'_B');
    b.Parent=this;
    b.Update();
    var bo=b.Elm();
    if(bo) bh=ng_OuterHeight(bo);
  }
  if(!dropdown)
  {
    if(this.ControlsPanel.Visible)
    {
      var po=this.ControlsPanel.Elm();
      if(po) 
      {
        var ch=ng_ClientHeight(po);
        if(ch>bh) this.PanelHeight=ch;
      }
      
      this.ControlsPanel.SetVisible(false);
    }

    ng_SetClientHeight(o,bh);
    var cbh=ng_StyleHeight(o);
    if(this.Bounds.H!=cbh)
    {
      this.Bounds.H=cbh;
      this.SetBounds();
    }
  }
  else
  {
    if(!this.ControlsPanel.Visible)
    {
      ng_SetClientHeight(o,bh+this.PanelHeight);
    }
    var cbh=ng_StyleHeight(o);
    if(this.Bounds.H!=cbh)
    {
      this.Bounds.H=cbh;
      this.SetBounds();
    }

    this.ControlsPanel.Bounds.T=(btntop ? bh : 0);
    this.ControlsPanel.Bounds.L=0;
    this.ControlsPanel.Bounds.R=0;
    this.ControlsPanel.Bounds.B=(btntop ? 0 : bh);
    this.ControlsPanel.SetBounds();
    this.ControlsPanel.SetVisible(true);
  }
  
  return true;
}

function ngdp_SetBounds(props)
{
  if(typeof props!=='undefined') 
  {
    // changing height, update PanelHeight and check dropdown
    if(typeof props.H !== 'undefined') 
    {
      var bh=0;
      var dropdown=false;
      if(this.Button)
      {
        var o=this.Button.Elm();
        if(o) bh=ng_OuterHeight(o);
        if(this.Button.Checked==1) dropdown=true;
      }
      this.PanelHeight=props.H - bh;
      if(!dropdown) this.Bounds.H=0;
    }
  }
  return this.DefaultSetBounds(props);
}

function ngdp_SetClientRect(v)
{
  if(!ngVal(v,false)) return;

  if(typeof v.W !== 'undefined') 
  {
    this.Bounds.W=v.W;
  }
  
  if(typeof v.H !== 'undefined')
  {
    var bh=0;
    var dropdown=false;
    if(this.Button)
    {
      var o=this.Button.Elm();
      if(o) bh=ng_OuterHeight(o);
      if(this.Button.Checked==1) dropdown=true;
    }
    this.PanelHeight=v.H;
    this.Bounds.H=(dropdown ? v.H : 0)+bh;
  }  
}

function ngdp_GetClientRect()
{
  var w,h;  
  if(ngVal(this.ControlsPanel,false))
  {
    var o=this.ControlsPanel.Elm();
    if(o)
    {
      w=ng_ClientWidth(o);
      h=ng_ClientHeight(o);
    }
  }  
  return { W: w, H: h};
}

function ngdp_DoRelease(o)
{
  o.style.display='none';
}

function ngdp_DoCreate(def, ref, elm, parent)
{
  var cclass=this.BaseClassName;

  var bh=0;
  var btntop=(typeof def.T === 'undefined');

  if(typeof def.Button === 'undefined') def.Button=new Object;
  ng_MergeDef(def.Button, {
    Type: 'ngButton',
    L: 0, R: 0,
    id: this.ID+'_B',
    Data: {
      Checked: (ngVal(def.DroppedDown,false) ? 1 : 0) 
    },
    Events: {
      OnClick: ngdp_BtnClick
    }
  });   
  if(typeof def.B === 'undefined') { def.Button.B=0; def.Button.T=undefined; }
  else { def.Button.T=0; delete def.Button.B; }
  var lref=ngCreateControls({ Control: def.Button },undefined,this.ID);
  if(typeof lref.Control !== 'undefined') // dropdown successfuly created
  {
    lref.Control.Owner=this;
    this.Button=lref.Control;
    this.Button.Parent=this;
  }
  else this.Button=null;

  var b=this.Button;
  if(b)
  {
    if((b)&&(b.ID=='')) b.Attach(this.ID+'_B');
    b.Update();
    var bo=b.Elm();
    if(bo) bh=ng_OuterHeight(bo);
  }
  if((typeof def.CW !== 'undefined')||(typeof def.CH !== 'undefined'))
  {    
    this.SetClientRect({W: def.CW, H: def.CH});
    this.SetBounds();
  }
  var ldefs=new Object;
  if(typeof def.ControlsPanel === 'object') ldefs.ControlsPanel = ng_CopyVar(def.ControlsPanel);
  else ldefs.ControlsPanel = new Object;
    
  ng_MergeDef(ldefs.ControlsPanel, {
    Type: 'ngPanel',
    className: cclass+'ControlsPanel',
    id: this.ID+'_P',
    ScrollBars: ssAuto,
    L:0,T:0,R:0,B:0
  }); 
  ldefs.ControlsPanel.Controls=def.Controls;
  ldefs.ControlsPanel.ModifyControls=def.ModifyControls;
  ldefs.ControlsPanel.T=(btntop ? bh : 0);
  ldefs.ControlsPanel.B=(btntop ? 0 : bh);
  
  var lref=ngCreateControls(ldefs,undefined,this.ID);

  this.ControlsPanel=lref.ControlsPanel;
  this.ControlsPanel.Owner=this;
  delete lref.ControlsPanel;
  ngCloneRefs(ref,lref);

  delete def.Controls;
  delete def.ModifyControls;
}

function ngdp_IsDroppedDown()
{
  return ((this.Button)&&(this.Button.Checked==1));
}

function ngdp_SetDropDown(dd)
{
  if(this.IsDroppedDown()!=dd)
  {
    if((this.OnDropDown)&&(!ngVal(this.OnDropDown(this,dd),false))) return;
    
    if(this.Button) 
    {
      this.Button.Check(dd ? 1 : 0);
      this.Update();
    }
  }
}

function ngdp_ToggleDropDown()
{
  this.SetDropDown(!this.IsDroppedDown());
}

/**
 *  Class: ngDropPanel
 *  This class implements a generic drop-down panel control. 
 *
 *  Syntax:
 *    new *ngDropPanel* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngDropPanel(id)
{
  ngControl(this, id, 'ngDropPanel');

  /*
   *  Group: Definition
   */
  /*
   *  Variable: DroppedDown
   *  Determines if panel is dropped down when created.
   *  Type: bool (default: false)
   */
  /*<>*/
  /*
   *  Variable: CW
   *  ClientRect width.
   *  Type: integer
   */
  /*<>*/
  /*
   *  Variable: CH
   *  ClientRect height.
   *  Type: integer
   */
  /*<>*/
  /*
   *  Variable: ControlsPanel
   *  Controls panel definition.
   *  Type: object
   */
  /*<>*/
  /*
   *  Group: Properties
   */
  /*  Variable: Button
   *  ...
   *  Type: object
   */
   
  this.Button = null;
  
  /*
   *  Group: Methods
   */
 this.IsDroppedDown = ngdp_IsDroppedDown;
 this.SetDropDown = ngdp_SetDropDown;
 this.ToggleDropDown = ngdp_ToggleDropDown;
  
  /*  Function: GetClientRect
   *  Gets client rectangle dimensions.   
   *   
   *  Syntax:
   *    object *GetClientRect* ()
   *     
   *  Returns:
   *    Rectangle dimensions in format { W: width, H: height }.     
   */
  this.GetClientRect = ngdp_GetClientRect;
  
  /*  Function: SetClientRect
   *  Sets client rectangle dimensions.   
   *   
   *  Syntax:
   *    void *SetClientRect* (object rect)
   *     
   *  Parameters:
   *    rect - { W: width, H: height }
   *  Returns:
   *    -     
   */
  this.SetClientRect = ngdp_SetClientRect;
  
  this.DefaultSetBounds = this.SetBounds;
  this.SetBounds = ngdp_SetBounds;

  this.DoCreate = ngdp_DoCreate;
  this.DoRelease = ngdp_DoRelease;
  this.DoUpdate = ngdp_DoUpdate;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnDropDown
   */     
  this.OnDropDown = null;
 
  ngControlCreated(this);
}

if(typeof ngUserControls === 'undefined') ngUserControls = new Array();
ngUserControls['panels'] = {

  OnInit: function() {

    ngRegisterControlType('ngAlignPanel', ngAlignPanel_Create); 
    ngRegisterControlType('ngAlignFrame', ngAlignPanel_Create); 

    ngRegisterControlType('ngDropPanel', function() { return new ngDropPanel; }); 

    ngRegisterControlType('ngSplitPanel', function() { return new ngSplitPanel; });

  }
};

/*!
 * Controls.js - settings.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */


/** 
 *  Group: Settings 
 */

// --- ngSettings --------------------------------------------------------------

var ngSettingsByID = new Array();
var ngSettingsLastID = 0;

/** 
 *  Group: Variables   
 */
/** 
 *  Variable: ngsCookieMaxLen
 *  Maximal data length in one cookie.
 *  Default: 4050 
 */  
var ngsCookieMaxLen = 4050;

function getSettingsByID(Settingsid)
{
  if(ngSettingsByID) return ngSettingsByID[Settingsid];
  return null;
}

function ngset_Set(n,v)
{
  if(!this.IsValidName(n)) return;
  if((this.OnSetSetting)&&(!ngVal(this.OnSetSetting(this,n,v),false))) return;
  
  if((typeof this.Settings[n] === 'undefined')||(!ng_VarEquals(this.Settings[n],v)))
  {
    this.BeginUpdate();
    if(typeof v === 'undefined')
      delete this.Settings[n];
    else
      this.Settings[n]=v;
    this.changed=true;
    this.EndUpdate();
  }
}

function ngset_Get(n,defval)
{
  if(!this.IsValidName(n)) return defval;
  var v=ng_CopyVar(this.Settings[n]);
  if(this.OnGetSetting) v=this.OnGetSetting(this,n,v);
  if(typeof v==='undefined') v=defval;
  return v;
}

function ngset_BeginUpdate()
{
  this.update_cnt++;
  if(this.save_timer) { clearTimeout(this.save_timer); this.save_timer=null; }
}

function ngset_EndUpdate()
{
  this.update_cnt--;
  if(this.update_cnt<=0)
  {
    this.update_cnt = 0;
    if(this.changed) 
    {
      if(this.DelayedSave>0)
      {
        if(this.save_timer) clearTimeout(this.save_timer);
        var s=this;
        this.save_timer = setTimeout(function() {
          s.Save(); 
        },this.DelayedSave);
      }
      else this.Save();
    }
  }
}


function ngset_Clear()
{
  // clear only if not empty
  for(var i in this.Settings)
  {
    this.BeginUpdate();
    this.Settings = new Array();
    this.changed=true;
    this.EndUpdate();
    break;
  }
//  if(!this.rpc) this.rpc=new ngRPC();
//  this.rpc.sendRequest(ng_AddURLParam(this.StorageURL,'clear=1'));  
}

function ngset_Load()
{
  if(!this.rpc) this.rpc=new ngRPC();
  this.rpc.sendRequest(ng_AddURLParam(this.StorageURL,'load=1&id='+this.SettingsID));  
}

function ngset_IsValidName(n)
{
  if((typeof n === 'undefined')||(n=='')) return false;
  
  var re=/[a-zA-Z_$][0-9a-zA-Z_$]*/; 
  return (n.replace(re,'')=='');
}

function ngset_EncodeSetting(n,v)
{
  if(!this.IsValidName(n)) return undefined;
  if(typeof v === 'undefined') return v;
  if(this.OnEncodeSetting) v=this.OnEncodeSetting(this,n,v);
  else v=ng_URLEncode(v);
  
  v=v.replace("%40","%u0040"); // prevent @ auto-unescape 
  return v;
}

function ngset_BuildSettingsStr(p)
{
  var v,params='';
  for(var i in p)
  {
    v=p[i];
    if(typeof v === 'object')
    {
      if(params!='') params+='@';
      params+=i+'@{@'+this.BuildSettingsStr(v)+'@}';
      continue;      
    } 
    v=this.EncodeSetting(i,v);
    if(typeof v === 'undefined') continue;
    if(params!='') params+='@';
    params+=i+'-'+v;
  }
  return params;
}

function ngset_Save()
{
  if((this.OnSettingsSaving)&&(!ngVal(this.OnSettingsSaving(this),false))) return;

  if(this.save_timer) { clearTimeout(this.save_timer); this.save_timer=null; }
  
  // build params
  var i,params=this.BuildSettingsStr(this.Settings);
  // save to cookies
  var url=this.StorageURL;
  var c=1;
  if(params!='')
  {
    while(params!='')
    {
      ngSetCookieByURL('_ngs'+c,params.substr(0,ngsCookieMaxLen),this.StorageExpires,url,false);
      params=params.substring(ngsCookieMaxLen,params.length);
      c++;
      if(c>50) break;
    }
  }
  // clear rest
  var expires=ngCookieExpires(-3600);
  for(i=c;i<=50;i++)
    ngSetCookieByURL('_ngs'+i,'',expires,url,false);
    
  this.changed=false;
  if(this.OnSettingsSaved) this.OnSettingsSaved(this);
}

function ngset_do_load(id,data)
{
  if(typeof data === 'undefined') return; 
  var s=getSettingsByID(id);
  if(s)
  {
    s.Settings=data;
    s.changed = false; 
    if(s.OnSettingsLoaded) s.OnSettingsLoaded(s);
  }
}

/**
 *  Class: ngSettings
 *  Application settings.
 *   
 *  This class is used for storing settings into cookies.
 *  
 *  Syntax:
 *    new *ngSettings* (string id [, string storageurl])
 *    
 *  Parameters:
 *    id - unique ID of settings class
 *    storageurl - URL where settings are saved         
 */   
function ngSettings(id, storageurl)
{
  if(typeof id === 'undefined')
  {
    ngSettingsLastID++;
    id = 'ngSettings'+ngSettingsLastID;
  }
  this.rpc      = null;  
  this.changed = false; 
  this.update_cnt = false;
  this.save_timer = null;
  ngSettingsByID[id]=this;
  this.SettingsID = id;
  this.Settings = new Array();  
  
  /*
   *  Group: Properties
   */
  /*  Variable: StorageURL
   *  URL where settings are saved.
   *  
   *  Default value: *ngApp.AppPath + 'settings/'*  
   */ 
  this.StorageURL = ngVal(storageurl,ngApp.AppPath+'settings/');
  /*  Variable: StorageExpires
   *  Storage cookies expiration time (in seconds).
   *  
   *  Default value: *10 years*  
   */ 
  this.StorageExpires = ngCookieExpires(3600 * 24 * 365 * 10); // 10 years  
  /*  Variable: DelayedSave
   *  Timeout (in ms) after the changes are saved. 
   *  If 0 (zero) the changes are saved immediatelly.    
   *  
   *  Default value: *200*  
   */ 
  this.DelayedSave = 200;

  /*
   *  Group: Methods
   */
  /*  Function: Set
   *  Sets setting.
   *  
   *  Syntax:
   *    void *Set* (string name, mixed value)
   *    
   *  Parameters:
   *    name - setting name
   *    value - setting value
   *    
   *  Returns:
   *    -
   */          
  this.Set = ngset_Set;
  /*  Function: Get
   *  Gets setting.
   *  
   *  Syntax:
   *    mixed *Get* (string name)
   *    
   *  Parameters:
   *    name - setting name
   *    
   *  Returns:
   *    Value of setting.
   */          
  this.Get = ngset_Get;
  
  /**
   *  Function: BeginUpdate
   *  Starts updating settings.
   *  Any changes are saved after the EndUpdate function is called.       
   *  
   *  Syntax:
   *    void *BeginUpdate* ()
   *     
   *  Returns:
   *    -  
   */               
  this.BeginUpdate = ngset_BeginUpdate;
  /**
   *  Function: EndUpdate
   *  Ends settings update.    
   *   
   *  Syntax:
   *    void *BeginUpdate* ()
   *     
   *  Returns:
   *    -  
   */               
  this.EndUpdate = ngset_EndUpdate;

  /**
   *  Function: IsValidName
   *  Checks if given name is a valid setting name.    
   *   
   *  Syntax:
   *    bool *IsValidName* (string name)
   *     
   *  Parameters:
   *    name - setting name
   *    
   *  Returns:
   *    TRUE if name is a valid setting name.
   */               
  this.IsValidName = ngset_IsValidName;
  
  /**
   *  Function: Clear
   *  Clears all settings.    
   *   
   *  Syntax:
   *    void *Clear* ()
   *     
   *  Returns:
   *    -  
   */               
  this.Clear = ngset_Clear;
  /**
   *  Function: Load
   *  Sends settings load request to the server.    
   *   
   *  Syntax:
   *    void *Load* ()
   *     
   *  Returns:
   *    -  
   */               
  this.Load  = ngset_Load;
  /**
   *  Function: Save
   *  Saves settings into cookies.    
   *   
   *  Syntax:
   *    void *Save* ()
   *     
   *  Returns:
   *    -  
   */               
  this.Save  = ngset_Save;
  
  this.EncodeSetting = ngset_EncodeSetting;
  this.BuildSettingsStr = ngset_BuildSettingsStr;
  
  /*
   *  Group: Events
   */
  /*
   *  Event: OnEncodeSetting
   */     
  this.OnEncodeSetting = null;
  /*
   *  Event: OnSetSetting
   */     
  this.OnSetSetting = null;
  /*
   *  Event: OnGetSetting
   */     
  this.OnGetSetting = null;
  /*
   *  Event: OnSettingsSaving
   */     
  this.OnSettingsSaving = null;
  /*
   *  Event: OnSettingsSaved
   */     
  this.OnSettingsSaved = null;
  /*
   *  Event: OnSettingsLoaded
   */     
  this.OnSettingsLoaded = null;
}


if(typeof ngUserControls === 'undefined') ngUserControls = new Array();
ngUserControls['settings'] = {

  OnInit: function() {
    if((typeof ngApp === 'object')&&(ngApp)&&(typeof ngApp.Settings === 'undefined'))
    {
      ngApp.Settings=new ngSettings('ngAppSettings');

      var sp=ngVal(ngApp.StartParams,null);
      if((sp)&&(typeof sp.AppSettingsStorageURL !== 'undefined'))
      {
        var storage=sp.AppSettingsStorageURL;
        if(storage.substr(0,4)!='http')
        {
          if(storage.substr(0,1)=='/') 
          {
            var idx = ngApp.AppPath.indexOf('//')
            if(idx>=0)
            {
              idx=ngApp.AppPath.indexOf('/',idx+2);
              if(idx>=0) storage=ngApp.AppPath.substr(0,idx)+storage;
              else storage=ngApp.AppPath+storage;
            }
          }
          else storage=ngApp.AppPath+storage;
        }
        ngApp.Settings.StorageURL=storage;
      }
        
      if(typeof ngLoadedSettings !== 'undefined') 
      {
        ngApp.Settings.Settings=ngLoadedSettings;
        ngLoadedSettings=undefined;
      }
    }    
  }
};

/*!
 * Controls.js - window.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 */


/** 
 *  Group: Window
 *    
 */

// --- ngModal -----------------------------------------------------------------

/** 
 *  Group: Events   
 */
/**
 *  Event: OnStartModal
 *  Occurs when modal window curtain is going to be displayed.
 *  
 *  Syntax:
 *    bool *OnStartModal* ()
 *    
 *  Returns:
 *    FALSE if curtain shouldn't be displayed.
 */
var OnStartModal = null;
/**
 *  Event: OnStopModal
 *  Occurs when modal window curtain is going to be removed.
 *  
 *  Syntax:
 *    bool *OnStopModal* ()
 *    
 *  Returns:
 *    FALSE if curtain shouldn't be removed.
 */
var OnStopModal = null;

var ngModalZIndexDelta = 10000;
var ngModalCnt=0;

/**
 *  Function: ngStartModalControl
 *  Shows modal window curtain.
 *  
 *  Syntax:
 *    void *ngStartModalControl* ()
 *    
 *  Returns:
 *    -
 */
function ngStartModalControl()
{
  if(!ngModalCnt)
  {
    if((!OnStartModal)||(ngVal(OnStartModal(),false)))
    {
      var o = document.getElementById('NGMODALWINDOW_CURTAIN');
      if(!o)
      {
         o=document.createElement('div');
         o.id="NGMODALWINDOW_CURTAIN";
         o.className='ngModalCurtain';
         o.style.position='absolute';
         o.style.left='0%';
         o.style.top='0%';
         o.style.width='100%';
         o.style.height='100%';
         o.style.display='block';
         o.style.zIndex=ngModalZIndexDelta;

         var parent=((typeof ngApp === 'object')&&(ngApp) ? ngApp.Elm() : document.body);
         parent.appendChild(o);
      }
      else 
      {
        o.style.zIndex=ngModalZIndexDelta;
        o.style.display='block';
        o.style.visibility='visible'; // IE7 sometimes don't hide elements if display is none
        // IE7 redraw fix
        var fix7=o.offsetLeft;
      } 
    }
  }  
  ngModalCnt++;
  if(ngModalCnt>1)
  {
    var o = document.getElementById('NGMODALWINDOW_CURTAIN');
    if(o) o.style.zIndex=(ngModalCnt*ngModalZIndexDelta);
  }
}

/**
 *  Function: ngStopModalControl
 *  Hides modal window curtain.
 *  
 *  Syntax:
 *    void *ngStopModalControl* ()
 *    
 *  Returns:
 *    -
 */
function ngStopModalControl()
{
  ngModalCnt--;
  if(ngModalCnt<=0)
  {
    ngModalCnt=0;
    if((!OnStopModal)||(ngVal(OnStopModal(),false))) 
    {
      var o = document.getElementById('NGMODALWINDOW_CURTAIN');
      if(o) 
      {
        o.style.display='none';
        o.style.visibility='hidden'; // IE7 sometimes don't hide elements if display is none
        // IE7 redraw fix
        var fix7=o.offsetLeft;
      }
    }
  }
  else
  {
    var o = document.getElementById('NGMODALWINDOW_CURTAIN');
    if(o) o.style.zIndex=(ngModalCnt*ngModalZIndexDelta);
  }
}

// --- Window create helper fnc ------------------------------------------------

/**
 *  Function: ngCreateWindow
 *  Creates window by definition.
 *  
 *  Syntax:
 *    object *ngCreateWindow* (object def, object parent)
 *    
 *  Returns:
 *    Created window object (<ngWindow>). 
 */
function ngCreateWindow(def,parent)
{
  if(!def) return null;
  var cnt=0,wname='';
  if(typeof def==='string')
  {
    var ndef=new Object;
    ndef.Window={ Type: def };
    wname='Window';
    def=ndef;
  }
  else
  {
    for(var i in def) 
    {
      cnt++;
      if(cnt>1)
      {
        var ndef=new Object;
        ndef.Window=ng_CopyVar(def);
        wname='Window';
        def=ndef;
        break;
      }
      else wname=i;
    }
    if(wname=='') return null;
  }
  var lref=new ngControls(def,parent);
  var c=ngVal(lref[wname],null);
  if(c) 
  {
    c.Owner=null;
    if(c.Visible) c.Update();
  }
  return c;
}

// --- ngWindow ----------------------------------------------------------------

function ngw_DoResize(o)
{
  if((this.Moveable)||(this.Sizeable))
  {
    if(this.CheckBounds()) { this.SetBounds(); this.Update(); } 
  }
  return ng_Align(o);
}

function ngw_OnVisibleChanged(c)
{
  if(c.Visible)
  {
    if(c.Centered) c.Center();
    c.SetFocus();
  }
  if(c.Modal)
  {
    if(c.Visible) ngStartModalControl();
    else ngStopModalControl();
    var o=c.Elm();
    if(o)
    {
      if(c.Visible) o.style.zIndex=(ngModalCnt*ngModalZIndexDelta)+1;
      else          o.style.zIndex=Math.round((ngModalCnt+0.5)*ngModalZIndexDelta);
    }
  }
}

function ngw_Show()
{
  this.SetVisible(true);
}

function ngw_Hide()
{
  this.SetVisible(false);
}
  
function ngw_Close()
{
  if((this.OnClose)&&(!ngVal(this.OnClose(this),false))) return;
  this.Hide();
  if(this.DisposeOnClose) 
  {
    var owner=this.Owner;
    this.Dispose();
    if((owner)&&(typeof owner === 'object')) // remove reference
    {
      for(var i in owner)
      {
        if(owner[i]==this) 
        {
          delete owner[i];
          break;
        }
      }
    }
  }
  else this.Release();
}

function ngw_Restore()
{
  if(!this.StateBounds) return;  
  this.StateBounds=null;
  this.CheckBounds();
  this.SetBounds();
  this.ControlsPanel.SetVisible(true);
  this.Update();
}

function ngw_Center()
{
  var o=this.Elm();
  if(!o) return;
  var po=o.offsetParent;
  if((po)&&(po==document.body)) po=null;
  var pw=(po ? ng_ClientWidth(po) : ng_WindowWidth()); 
  var ph=(po ? ng_ClientHeight(po) : ng_WindowHeight()); 

  var b=this.Bounds;
  
  b.L=Math.round((pw-b.W)/2);
  b.T=Math.round((ph-b.H)/2);
  this.SetBounds();
}

function ngw_CalcAutoSize()
{
  if(!ngVal(this.ControlsPanel,false)) return;
  var cc=this.ControlsPanel.ChildControls;
  if(typeof cc !== 'undefined')
  {
    this.ControlsPanel.SetScrollBars(ssNone);

    var o=this.Elm();
    if(!o) return;
    var po=o.offsetParent;
    if((po)&&(po==document.body)) po=null;
    var pw=(po ? ng_ClientWidth(po) : ng_WindowWidth()); 
    var ph=(po ? ng_ClientHeight(po) : ng_WindowHeight());
    
    // set to max size (eliminate scrollbars)
    ng_SetClientWidth(o,pw);
    ng_SetClientHeight(o,ph);
  
    var minl=-1,mint=-1,minr=-1,minb=-1,maxw=0,maxh=0;
    var maxl=0,maxt=0,maxr=0,maxb=0;
    var c,co,w,h;
    for(var i=0;i<cc.length;i++) 
    {
      c=cc[i];
      if((!c)||(!c.Visible)) continue;
      co=c.Elm();
      if(!co) continue;
      
      ng_BeginMeasureElement(co);
      if((typeof c.Bounds.R === 'undefined')||(typeof c.Bounds.L === 'undefined')) 
      {
        w=ng_OuterWidth(co);
        if(w>maxw) maxw=w;
        if(typeof c.Bounds.L !== 'undefined') 
        {
          if(c.Bounds.L+w>maxl) maxl=c.Bounds.L+w; 
          if((c.Bounds.L<minl)||(minl<0)) minl=c.Bounds.L;
        }        
        else 
        {
          if(c.Bounds.R+w>maxr) maxr=c.Bounds.R+w; 
          if((c.Bounds.R<minr)||(minr<0)) minr=c.Bounds.R;
        }
      }
      if((typeof c.Bounds.B === 'undefined')||(typeof c.Bounds.T === 'undefined')) 
      {
        h=ng_OuterHeight(co);
        if(h>maxh) maxh=h;
        if(typeof c.Bounds.T !== 'undefined') 
        {
          if(c.Bounds.T+h>maxt) maxt=c.Bounds.T+h; 
          if((c.Bounds.T<mint)||(mint<0)) mint=c.Bounds.T;
        }        
        else 
        {
          if(c.Bounds.B+h>maxb) maxb=c.Bounds.B+h; 
          if((c.Bounds.B<minb)||(minb<0)) minb=c.Bounds.B;
        }
      }
      ng_EndMeasureElement(co);
    }
    w=maxw;
    h=maxh;
    if((minl>=0)&&(maxl-minl)>w) w=maxl-minl;
    if((minr>=0)&&(maxr-minr)>w) w=maxr-minr;
    if((mint>=0)&&(maxt-mint)>h) h=maxt-mint;
    if((minb>=0)&&(maxb-minb)>h) h=maxb-minb;
      
    if(minl>=0) w+=minl;
    else if(minr>=0) w+=minr;
    if(minr>=0) w+=minr;
    else if(minl>=0) w+=minl;
    
    if(mint>=0) h+=mint;
    else if(minb>=0) h+=minb;
    if(minb>=0) h+=minb;
    else if(mint>=0) h+=mint;
    if(w<=0) w=undefined;
    if(h<=0) h=undefined;
    var changed=this.SetClientRect({W: w, H: h });
    this.SetBounds();
    if(changed) this.Update();
  }  
}

function ngw_Minimize()
{
  if((this.IsMinimized())||(this.IsMaximized())) this.Restore();
  if((this.OnMinimize)&&(!ngVal(this.OnMinimize(this),false))) return;
  this.ControlsPanel.SetVisible(false);
  if(typeof this.MinimizedBounds === 'undefined')
  {
    var th=0;
    var image=this.CaptionImg.LeftImg;
    if(image)
    {
      dp=ngc_ImgProps(this.ID+'_IL', 0, this.Enabled, image);
      if(dp.H>th) th=dp.H;
    }
  
    image=this.CaptionImg.RightImg;
    if(image)
    {
      dp=ngc_ImgProps(this.ID+'_IR', 0, this.Enabled, image);
      if(dp.H>th) th=dp.H;
    }
  
    image=this.CaptionImg.MiddleImg;
    if(image)
    {
      dp=ngc_ImgProps(this.ID+'_IM', 0, this.Enabled, image);
      if(dp.H>th) th=dp.H;
    }  
    this.StateBounds=ng_CopyVar(this.Bounds);
    this.StateBounds.H=th;
  }
  else
  {
    this.StateBounds=ng_CopyVar(this.MinimizedBounds);
    ng_MergeVar(this.StateBounds,this.Bounds);    
  }
  this.SetBounds();
  this.Update();
}

function ngw_Maximize()
{
  if((this.IsMinimized())||(this.IsMaximized())) this.Restore();
  if((this.OnMaximize)&&(!ngVal(this.OnMaximize(this),false))) return;
  this.StateBounds={L:0,T:0,R:0,B:0};
  this.SetBounds();
  this.ControlsPanel.SetVisible(true);
  this.Update();
}

function ngw_IsMaximized()
{
  return ((this.StateBounds)&&(this.StateBounds.L==0)&&(this.StateBounds.T==0)&&(this.StateBounds.R==0)&&(this.StateBounds.B==0));
}

function ngw_IsMinimized()
{
  return ((this.ControlsPanel)&&(!this.ControlsPanel.Visible));
}

function ngw_SetBounds(props)
{
  if(this.StateBounds)
  {
    var o = this.Elm();
    if(!o) return;
    ng_SetBounds(o, this.StateBounds);  
  }
  else this.SetBoundsEx(props);
}

function ngw_CheckBounds()
{
  var o=this.Elm();
  if(!o) return false;
  var po=o.offsetParent;
  if((po)&&(po==document.body)) po=null;
  
  var pw=(po ? ng_ClientWidth(po) : ng_WindowWidth()); 
  var ph=(po ? ng_ClientHeight(po) : ng_WindowHeight()); 

  var cb=this.Bounds;
  if((this.ControlsPanel)&&(!this.ControlsPanel.Visible)&&(this.StateBounds)) cb=this.StateBounds;
  var ob=ng_CopyVar(cb);
  
  if(this.Sizeable)
  {
    if(cb.W>pw) cb.W=pw; 
    if(cb.H>ph) cb.H=ph; 
  }
  if(!this.IsMinimized())
  {
    if(ngVal(cb.W,0)<this.MinWidth)  cb.W=this.MinWidth;
    if(ngVal(cb.H,0)<this.MinHeight) cb.H=this.MinHeight;
  }
  if(!this.IsMaximized())
  {
    if((this.MaxWidth>0)&&(ngVal(cb.W,0)>this.MaxWidth))   cb.W=this.MaxWidth;
    if((this.MaxHeight>0)&&(ngVal(cb.H,0)>this.MaxHeight)) cb.H=this.MaxHeight;
  }

  if(this.Moveable)
  {
    var r=cb.L+cb.W;
    var b=cb.T+cb.H;
    if(r>pw) cb.L=pw-cb.W;  
    if(b>ph) cb.T=ph-cb.H; 
    if(cb.L<0) cb.L=0; 
    if(cb.T<0) cb.T=0; 
  }
  return ((ob.L!=cb.L)||(ob.T!=cb.T)||(ob.W!=cb.W)||(ob.H!=cb.H));
}

function ngw_DoPtrClick(pi)
{
  if(pi.EventID!=='window') return;
  if(this.OnClick) 
  {
    var e=this.PointerInfo.Event;
    e.win=this;    
    this.OnClick(e);
  }
}

function ngw_DoPtrDblClick(pi)
{
  if(pi.EventID!=='window') return;
  if(this.OnDblClick) 
  {
    var e=this.PointerInfo.Event;
    e.win=this;    
    this.OnDblClick(e);
  }
}
function ngw_IsDragEvent(eid)
{
  switch(eid)
  { 
    case 'left': 
    case 'right':
    case 'top': 
    case 'lefttop':
    case 'righttop': 
    case 'bottom': 
    case 'leftbottom':
    case 'rightbottom':
    case 'window':
      return true;
  }
  return false;
}

function ngw_DoPtrStart(pi)
{  
  if(!ngw_IsDragEvent(pi.EventID)) 
  {
    this.MouseType = -1; 
    return;
  }

  this.MouseBounds = ng_CopyVar(this.StateBounds ? this.StateBounds : this.Bounds);

  var cur='',mt=-1;
  switch(pi.EventID)
  { 
    case 'window': mt=0; break;
    case 'left': cur='w-resize'; mt=1; break;
    case 'right': cur='e-resize'; mt=2; break;
    case 'top': cur='n-resize'; mt=4; break;
    case 'lefttop': cur='nw-resize'; mt=5; break;
    case 'righttop': cur='ne-resize'; mt=6; break;
    case 'bottom': cur='s-resize'; mt=8; break;
    case 'leftbottom': cur='sw-resize'; mt=9; break;
    case 'rightbottom': cur='se-resize'; mt=10; break;
  }
  this.MouseType = mt;
  var f=document.getElementById(this.ID+'_M');
  if(f)
  {
    if(cur!='') f.style.cursor=cur;
    if(mt>0)
    {
      var o=this.Elm();
      if(o) 
      {
        o.style.overflow='visible';
        o.style.overflowX='visible';
        o.style.overflowY='visible';
      }
      pi.FrameHorzBorder = ng_GetCurrentStylePx(f,'border-left-width') + ng_GetCurrentStylePx(f,'border-right-width') + ng_GetCurrentStylePx(f,'margin-left') + ng_GetCurrentStylePx(f,'margin-right');
      pi.FrameVertBorder = ng_GetCurrentStylePx(f,'border-top-width') + ng_GetCurrentStylePx(f,'border-bottom-width') + ng_GetCurrentStylePx(f,'margin-top') + ng_GetCurrentStylePx(f,'margin-bottom');

      var w=(o ? ng_ClientWidth(o)-pi.FrameHorzBorder : 0)
      var h=(o ? ng_ClientHeight(o)-pi.FrameVertBorder : 0);
      if(w<0) w=0;
      if(h<0) h=0;
      ng_setBounds(f,0,0,w,h); 
      f.style.display="block";
    }
  }
}

function ngw_DoPtrDrag(pi)
{
  if(this.MouseType<0) return false;

  var o = this.Elm();
  if(!o) return false;

  var dx = pi.X - pi.StartX;
  var dy = pi.Y - pi.StartY;
  if(this.MouseType==0) // Move
  {  
    if(((dx)||(dy))&&(!this.IsMaximized()))
    {
      var pos={ L: this.MouseBounds.L+dx, T: this.MouseBounds.T+dy };
      if(this.OnMouseMoving) this.OnMouseMoving(this,pos);
      
      this.Bounds.L=pos.L;
      this.Bounds.T=pos.T;
      if(this.StateBounds)
      {
        this.StateBounds.L=this.Bounds.L;
        this.StateBounds.T=this.Bounds.T;
      }
      this.CheckBounds();
      this.SetBounds();      
      pi.WinMove=true;
    }
  }
  else // Resize
  {
    var rect = {
      L: 0,
      T: 0,
      W: ng_ClientWidth(o)-pi.FrameHorzBorder,
      H: ng_ClientHeight(o)-pi.FrameVertBorder
    };
    var po=o.offsetParent;
    if((po)&&(po==document.body)) po=null;
    var pw=(po ? ng_ClientWidth(po) : ng_WindowWidth()); 
    var ph=(po ? ng_ClientHeight(po) : ng_WindowHeight()); 
    
    if(this.MouseType & 1) // Left
    {
      if(this.Bounds.L+dx<0) dx=-this.Bounds.L;
      rect.L=dx;
      rect.W-=dx;
    }
    if(this.MouseType & 2) // Right
    {
      if(this.Bounds.L+this.Bounds.W+dx>pw) dx=pw-this.Bounds.L-this.Bounds.W;
      rect.W+=dx;
    }
    if(this.MouseType & 4) // Top
    {
      if(this.Bounds.T+dy<0) dy=-this.Bounds.T;
      rect.T=dy;
      rect.H-=dy;
    }
    if(this.MouseType & 8) // Bottom
    {
      if(this.Bounds.T+this.Bounds.H+dy>ph) dy=ph-this.Bounds.T-this.Bounds.H;
      rect.H+=dy;
    }

    // Check minimal width/height
    var mw=this.MinWidth-pi.FrameHorzBorder;
    var mh=this.MinHeight-pi.FrameVertBorder;
    if(mw<0) mw=1;
    if(mh<0) mh=1;
    if(rect.W<mw) 
    {
      if(this.MouseType & 1) rect.L+=rect.W-mw; 
      rect.W=mw;
    }
    if(rect.H<mh) 
    {
      if(this.MouseType & 4) rect.T+=rect.H-mh; 
      rect.H=mh;
    }
    // Check maximal width/height
    mw=(this.MaxWidth ? this.MaxWidth-pi.FrameHorzBorder : 0);
    mh=(this.MaxHeight ? this.MaxHeight-pi.FrameVertBorder : 0);
    if(mw<0) mw=1;
    if(mh<0) mh=1;
    if((mw)&&(rect.W>mw)) 
    {
      if(this.MouseType & 1) rect.L+=rect.W-mw;       
      rect.W=mw;
    }
    if((mh)&&(rect.H>mh)) 
    {
      if(this.MouseType & 4) rect.T+=rect.H-mh; 
      rect.H=mh;
    }
    
    if(this.OnMouseSizing) this.OnMouseSizing(this,rect);

    o.style.overflow='visible';
    o.style.overflowX='visible';
    o.style.overflowY='visible';
    var f=document.getElementById(this.ID+'_M');
    if(f) 
    {
      ng_setBounds(f,rect.L,rect.T,rect.W,rect.H);
      f.style.display="block";
    }
  }
  return true;
}

function ngw_DoPtrEnd(pi)
{
  if(this.MouseType<0) return;
  var o = this.Elm();
  if(o) 
  {
    var pi = this.PointerInfo;
    if(!pi) return;
    var dx = pi.X - pi.StartX;
    var dy = pi.Y - pi.StartY;

    o.style.overflow='visible';
    o.style.overflowX='visible';
    o.style.overflowY='visible';

    if(this.MouseType==0) // Move
    {
      if(((dx)||(dy))&&(!this.IsMaximized()))
      {
        var pos={ L: this.MouseBounds.L+dx, T: this.MouseBounds.T+dy };
        if(this.OnMouseMoving) this.OnMouseMoving(this,pos);
  
        this.Bounds.L=pos.L;
        this.Bounds.T=pos.T;
        if(this.StateBounds)
        {
          this.StateBounds.L=this.Bounds.L;
          this.StateBounds.T=this.Bounds.T;
        }
        this.CheckBounds();
        this.SetBounds();      
        pi.WinMove=true;
      }
      if((pi.WinMove)&&(this.OnMouseMove)) this.OnMouseMove(this);
    }
    else    
    {  
      var po=o.offsetParent;
      if((po)&&(po==document.body)) po=null;
      var pw=(po ? ng_ClientWidth(po) : ng_WindowWidth()); 
      var ph=(po ? ng_ClientHeight(po) : ng_WindowHeight());
      
      var rect=ng_CopyVar(this.Bounds); 
      if(this.MouseType & 1) // Left
      {
        if(rect.L+dx<0) dx=-rect.L;
        rect.L+=dx;
        rect.W-=dx;
      }
      if(this.MouseType & 2) // Right
      {
        if(rect.L+rect.W+dx>pw) dx=pw-rect.L-rect.W;
        rect.W+=dx;
      }
      if(this.MouseType & 4) // Top
      {
        if(rect.T+dy<0) dy=-rect.T;
        rect.T+=dy;
        rect.H-=dy;
      }
      if(this.MouseType & 8) // Bottom
      {
        if(rect.T+rect.H+dy>ph) dy=ph-rect.T-rect.H;
        rect.H+=dy;
      }
      if(rect.W<this.MinWidth) 
      {
        if(this.MouseType & 1) rect.L+=rect.W-this.MinWidth; 
        rect.W=this.MinWidth;
      }
      if(rect.H<this.MinHeight) 
      {
        if(this.MouseType & 4) rect.T+=rect.H-this.MinHeight; 
        rect.H=this.MinHeight;
      }
      if((this.MaxWidth>0)&&(rect.W>this.MaxWidth)) 
      {
        if(this.MouseType & 1) rect.L+=rect.W-this.MaxWidth;       
        rect.W=this.MaxWidth;
      }
      if((this.MaxHeight>0)&&(rect.H>this.MaxHeight)) 
      {
        if(this.MouseType & 4) rect.T+=rect.H-this.MaxHeight; 
        rect.H=this.MaxHeight;
      }  
      if(this.OnMouseSizing) this.OnMouseSizing(this,rect);

      var f=document.getElementById(this.ID+'_M');
      if(f) f.style.display="none";

      this.Bounds=ng_CopyVar(rect); 
      this.CheckBounds();
      this.SetBounds();
      this.Update();

      if(this.OnMouseSize) this.OnMouseSize(this);
    }
  }
  this.MouseType = -1;
}

function ngw_SetClientRect(v)
{
  if(!ngVal(v,false)) return false;

  var noimg = {L:0,T:0,aL:0,aT:0,oT:0,oL:0,W:0,H:0};
  var dp=new Object;
  var changed=false;
  
  if(typeof v.W !== 'undefined') 
  {
    dp.Left =(typeof this.Frame.Left === 'undefined' ? noimg : ngc_ImgProps(this.ID+'_L', 0, this.Enabled, this.Frame.Left));
    dp.Right =(typeof this.Frame.Right === 'undefined' ? noimg : ngc_ImgProps(this.ID+'_R', 0, this.Enabled, this.Frame.Right));
    var nw=v.W+dp.Left.W+dp.Right.W;
    if(ngVal(this.Bounds.W,-1)!=nw)
    {
      changed=true;
      this.Bounds.W=nw;
      this.Bounds.R=undefined;
    }
  }
  
  if(typeof v.H !== 'undefined')
  {
    dp.Bottom =(typeof this.Frame.Bottom === 'undefined' ? noimg : ngc_ImgProps(this.ID+'_B', 0, this.Enabled, this.Frame.Bottom));
    var bh=dp.Bottom.H;
    var th=0;
    
    var image=this.CaptionImg.LeftImg;
    if(image)
    {
      dp=ngc_ImgProps(this.ID+'_IL', 0, this.Enabled, image);
      if(dp.H>th) th=dp.H;
    }
  
    image=this.CaptionImg.RightImg;
    if(image)
    {
      dp=ngc_ImgProps(this.ID+'_IR', 0, this.Enabled, image);
      if(dp.H>th) th=dp.H;
    }
  
    image=this.CaptionImg.MiddleImg;
    if(image)
    {
      dp=ngc_ImgProps(this.ID+'_IM', 0, this.Enabled, image);
      if(dp.H>th) th=dp.H;
    }
    var nh=v.H+th+bh;
    if(ngVal(this.Bounds.H,-1)!=nh)
    {
      changed=true;
      this.Bounds.H=nh;
      this.Bounds.B=undefined;
    }
  }  
  if(changed) this.CheckBounds();
  return changed;  
}

function ngw_GetClientRect()
{
  var w,h;  
  if(ngVal(this.ControlsPanel,false))
  {
    var o=this.ControlsPanel.Elm();
    if(o)
    {
      w=ng_ClientWidth(o);
      h=ng_ClientHeight(o);
    }
  }  
  return { W: w, H: h};
}

var ngw_inautosize=0;

function ngw_Update(recursive)
{
  if(this.AutoSize) {
    if(ngw_inautosize<(ngIExplorer6 ? 2 : 1))
    {
      ngw_inautosize++;
      try {
        this.CalcAutoSize();
      }
      finally
      {
        ngw_inautosize--;
      }
    }
  }
}

function ngw_DoUpdate(o)
{
  var frame=document.getElementById(this.ID+'_F');
  if(!frame) return true;

  var cclass=this.BaseClassName;
  var html=new ngStringBuilder;
  var w=ng_ClientWidth(o);
  var h=ng_ClientHeight(o);
  var l=0,t=0,dp;
  var maximized=this.IsMaximized();
  var minimized=this.IsMinimized();
  var moveable = (this.Moveable && (!maximized));
  var sizeable = (this.Sizeable && (!maximized)&&(!minimized));

  var text=this.GetText();
  if(this.HTMLEncode) text=ng_htmlEncode(text);
  
  var cstyle=(moveable ? 'cursor: move;' : '');
  var gestures='';
  if((this.OnClick)||(this.OnDblClick))
  {
    if(this.OnClick) gestures='tap'; 
    if(this.OnDblClick) 
    {
      if(gestures!='') gestures+=' ';
      gestures+='doubletap';
    } 
  }
  if(moveable)
  {
    if(gestures!='') gestures+=' ';
    gestures+='drag';
  }
  var cattrs=(gestures!='' ? ngc_PtrEventsHTML(this,'window',gestures) : '') 
  var th=0, lw=0, rw=0, bl=0, br=0, bw=0;

  var caphtml=new ngStringBuilder;
  var image=this.CaptionImg.LeftImg;
  if(image)
  {
    dp=ngc_ImgProps(this.ID+'_IL', 0, this.Enabled, image);
    ngc_Img(caphtml,dp,"position:absolute; left: 0px;"+cstyle,cattrs+ngVal(image.Attrs,''));
    lw=dp.W;
    if(dp.H>th) th=dp.H;
  }

  image=this.CaptionImg.RightImg;
  if(image)
  {
    dp=ngc_ImgProps(this.ID+'_IR', 0, this.Enabled, image);
    ngc_Img(caphtml,dp,"position:absolute; left: "+(w-dp.W)+"px;"+cstyle,cattrs+ngVal(image.Attrs,''));
    rw=dp.W;
    if(dp.H>th) th=dp.H;
  }

  image=this.CaptionImg.MiddleImg;
  if(image)
  {
    dp=ngc_ImgProps(this.ID+'_IM', 0, this.Enabled, image);
    ngc_ImgSW(caphtml,dp,lw,w-lw-rw,cstyle,cattrs+ngVal(image.Attrs,''));
    if(dp.H>th) th=dp.H;
  }  
  var attrs=new Object;
  var styles=new Object;
  if((moveable)&&(sizeable))
  {
    styles.Left = 'cursor: w-resize;';
     attrs.Left = ngc_PtrEventsHTML(this,'left','drag');
    styles.Top = 'cursor: n-resize;';
     attrs.Top = ngc_PtrEventsHTML(this,'top','drag');
    styles.LeftTop = 'cursor: nw-resize;';
     attrs.LeftTop = ngc_PtrEventsHTML(this,'lefttop','drag');
    styles.RightTop = 'cursor: ne-resize;';
     attrs.RightTop = ngc_PtrEventsHTML(this,'righttop','drag');
    styles.LeftBottom = 'cursor: sw-resize;';
     attrs.LeftBottom = ngc_PtrEventsHTML(this,'leftbottom','drag');
  }
  if(sizeable)
  {
    styles.Right = 'cursor: e-resize;';
     attrs.Right = ngc_PtrEventsHTML(this,'right','drag');
    styles.Bottom = 'cursor: s-resize;';
     attrs.Bottom = ngc_PtrEventsHTML(this,'bottom','drag');
    styles.RightBottom = 'cursor: se-resize;';
     attrs.RightBottom = ngc_PtrEventsHTML(this,'rightbottom','drag');
  }
  
  var framehtml=new ngStringBuilder;
  var fdp=new Object;
  ngc_ImgBox(framehtml, this.ID, 'ngWindow', 0, this.Enabled, 0,0,w,h,false, this.Frame, styles, attrs, undefined, fdp);

  bl=fdp.Left.W;
  if(fdp.LeftTop.W>bl) bl=fdp.LeftTop.W;
  if((this.Buttons)&&(this.Buttons.length>0))
  {    
    var b,bs,bt,img,a;

    br=fdp.Right.W;
    if(fdp.RightTop.W>br) br=fdp.RightTop.W;

    for(var i=0;i<this.Buttons.length;i++)
    {
      b=this.Buttons[i];
      b.Enabled=this.Enabled;
      if((b.BaseClassName=='')||(b.BaseClassName==b.CtrlType)) b.BaseClassName=cclass+'Button'; 
      if(!b.Visible) continue;
      if(b.ID=='') b.Attach(this.ID+'_B'+(i+1));
      bs=ngb_SimpleRect(b);
      bt=(th-bs.H)/2;
      a=ngVal(b.ButtonAlign,'');
      if(a=='left')
      {
        b.Bounds.L=bl;
        bl+=bs.W;
      }
      else 
      {
        b.Bounds.L=w-br-bw-bs.W;
        bw+=bs.W;
      }
      b.Bounds.T=bt;
      b.Bounds.W=bs.W;
      caphtml.append('<div id="'+b.ID+'" class="'+b.BaseClassName+'" style="position: absolute; z-index:1; left:'+b.Bounds.L+'px; top: '+b.Bounds.T+'px; width: '+bs.W+'px; height: '+bs.H+'px"></div>');
    }
  }
  image=this.GetImg();
  if(image)
  {
    dp=ngc_ImgProps(this.ID+'_I', 0, this.Enabled, image);
    ngc_Img(caphtml,dp,"position:absolute; z-index: 1; left: "+bl+"px;top:"+((th-dp.H)/2)+"px;"+cstyle,cattrs+ngVal(image.Attrs,''));
    bl+=dp.W;
  }

  if(text!='') caphtml.append('<div id="'+this.ID+'_C" class="'+cclass+(this.Enabled ? "Caption" : "CaptionDisabled")+'" style="position: absolute; overflow: hidden; text-overflow: ellipsis; left: '+bl+'px;top: 0px; width: '+(w-bl-br-bw)+'px;'+cstyle+'" '+cattrs+'>'+text+'</div>');
  html.append('<div style="position:absolute;left:0px;top:0px;width:'+w+'px;height:'+th+'px; overflow: hidden;">');
  html.append(caphtml);
  html.append('</div>');
  html.append(framehtml);
  
  this.ControlsPanel.Bounds.T=th;
  this.ControlsPanel.Bounds.L=fdp.Left.W;
  this.ControlsPanel.Bounds.R=fdp.Right.W;
  this.ControlsPanel.Bounds.B=fdp.Bottom.H;  
  this.ControlsPanel.SetBounds();
    
  ng_SetInnerHTML(frame,html.toString());
  o.style.overflow='hidden';
  o.style.overflowX='hidden';
  o.style.overflowY='hidden';
  if(this.BackgroundColor=='') this.BackgroundColor=document.body.style.backgroundColor;
  o.style.backgroundColor=this.BackgroundColor;
  if((this.Buttons)&&(this.Buttons.length>0))
  {    
    var b,biw,img;
    for(var i=0;i<this.Buttons.length;i++)
    {
      b=this.Buttons[i];
      b.Parent=this;
      b.Update();
    }
  }
  return true;
}

function ngw_KeyUp(e)
{
  if(!e) e=window.event;
  var w=ngGetControlById(this.id, 'ngWindow');
  if((w)&&(w.Enabled))
  {
    if(((e.keyCode==13)||(e.keyCode==27))&&(ngVal(w.IgnoreDefFormBtn,false))) { w.IgnoreDefFormBtn=undefined; return; }
    var ret=false;
    switch(e.keyCode)
    {
      case 13:
        ret=nge_DefFormButton2(w.ControlsPanel, 1);
        break;
      case 27:
        ret=nge_DefFormButton2(w.ControlsPanel, 0); 
        break;
    }
    if(ret)         
    {
      if(e.stopPropagation) e.stopPropagation();         
      else e.cancelBubble = true;
    }
  }
}

function ngw_DoAttach(o,oid)
{
  if(o)
  {
    if((!ngAndroid) // DIVs with enabled focus on Android 4.3 has tap highlight which cannot be disabled
     &&(o.getAttribute("tabindex")==null)) o.setAttribute("tabindex",0);
    o.onkeyup = ngw_KeyUp;
  }

  if((oid!=this.ID)&&(oid!='')) ng_EndAutoResize(oid);
  if((this.Moveable)||(this.Sizeable))
    ng_StartAutoResize(o,'win');
  else
    ng_EndAutoResize(o,'win');
}

function ngw_DoRelease(o)
{
  o.style.display='none';
  var frame=document.getElementById(this.ID+'_F');
  if(frame) ng_SetInnerHTML(frame,'');
}

function ngw_DoCreate(def, ref, elm, parent)
{
  var cclass=this.BaseClassName;

  if(((typeof def.W !== 'undefined')||(typeof def.CW !== 'undefined')||((typeof def.L !== 'undefined')&&(typeof def.R !== 'undefined')))
   &&((typeof def.H !== 'undefined')||(typeof def.CH !== 'undefined')||((typeof def.T !== 'undefined')&&(typeof def.B !== 'undefined')))
   &&(def.Data)&&(typeof def.Data.AutoSize === 'undefined'))
    this.AutoSize=false;

  if((typeof def.CW !== 'undefined')||(typeof def.CH !== 'undefined'))
  {
    if(this.SetClientRect({W: def.CW, H: def.CH}))
      this.SetBounds();
  }
  if(typeof def.Buttons === 'object')
  {
    var ldefs=new Object;
    var b;
    for(var i=0;i<def.Buttons.length;i++)
    {
      b=ng_CopyVar(def.Buttons[i]);
      ldefs['B'+i]=b;      
    }
    var lref=ngCreateControls(ldefs,undefined,null);
    if((typeof this.Buttons !== 'object')||(!this.Buttons)) this.Buttons=new Array();
    for(var i=0;i<def.Buttons.length;i++)
    {
      b=lref['B'+i];
      if(b) 
      {
        b.Owner=this;
        this.Buttons[this.Buttons.length]=b;
      }
    }    
    if(!this.Buttons.length) this.Buttons=null; 
  }

  var ldefs=new Object;
  if(typeof def.ControlsPanel === 'object') ldefs.ControlsPanel = ng_CopyVar(def.ControlsPanel);
  else ldefs.ControlsPanel = new Object;
    
  ng_MergeDef(ldefs.ControlsPanel, {
    Type: 'ngPanel',
    className: cclass+'ControlsPanel',
    id: this.ID+'_P',
    ScrollBars: ssAuto,
    L:0,T:0,R:0,B:0
  }); 
  ldefs.ControlsPanel.Controls=def.Controls;
  ldefs.ControlsPanel.ModifyControls=def.ModifyControls;

  var lref=ngCreateControls(ldefs,undefined,this.ID);
  def.ParentReferences = ngVal(def.ParentReferences,false);
  if(!def.ParentReferences) 
  {
    this.Controls = new Object;
    this.Controls.Owner = this; 
    this.Controls.AddControls = function(defs, newparent) { ngCreateControls(defs,this,ngVal(newparent,ldefs.ControlsPanel.id)); }
    ref=this.Controls;
  }
  this.ControlsPanel=lref.ControlsPanel;
  this.ControlsPanel.Owner=this;
  delete lref.ControlsPanel;
  ngCloneRefs(ref,lref);
  delete def.Controls;
  delete def.ModifyControls;

  if(typeof this.FormID === 'undefined') this.FormID = this.ID; // Windows are forms as default

  elm.style.zIndex=Math.round((ngModalCnt+0.5)*ngModalZIndexDelta);

  var nd=document.createElement('div');
  nd.id=this.ID+'_F';
  nd.style.position="absolute";
  nd.style.zIndex="800";
  elm.appendChild(nd);

  var nd2=document.createElement('div');
  nd2.id=this.ID+'_M';
  nd2.className=cclass+"Fence";
  nd2.style.display="none";
  nd2.style.position="absolute";
  nd2.style.zIndex="801";
  nd2.style.fontSize="0px";
  nd2.style.lineHeight="0px";
  nd2.style.left="0px";
  nd2.style.top="0px";
  nd2.style.width="0px";
  nd2.style.height="0px";
  elm.appendChild(nd2);

  //ng_AppendInnerHTML(elm,'<div id="'+this.ID+'_F" style="position: absolute;z-index:800;"></div>'
  //              +'<div id="'+this.ID+'_M" class="'+cclass+'Fence" style="display:none;position: absolute; z-index: 801; font-size:0px;line-height:0px;left:0px;top:0px;width:0px;height:0px;"></div>');
}

function ngw_OnDOMFocus(e)
{
  var lo=ngModalCnt*ngModalZIndexDelta;
  if(!lo) return;
  
  if (!e) e = window.event;
  var elm =  e.srcElement || e.target;
  if((!elm) || (elm == document) || (elm==window) || (elm.tagName == 'BODY')) return;

  var p=elm;
  var z,zi=0;
  while((p)&&(p!=window))
  {
    try
    {
      z=ng_GetCurrentStylePx(p,'z-index');
      if(z>zi) zi=z;
    }
    catch(e) { }
    p=p.parentNode;
  }
  if((lo)&&(zi<lo)) 
  { 
    try
    {
      elm.blur();
    }
    catch(e) { } 
  }
}

/*function ngw_Dispose()
{
  if((typeof this.Controls === 'object')&&(typeof this.Controls.Dispose === 'function')) this.Controls.Dispose();
  this.DefaultDispose();
}*/

var ngw_initialized = false;

/**
 *  Class: ngWindow
 *  This class implements a generic window control. 
 *
 *  Syntax:
 *    new *ngWindow* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngWindow(id)
{
  ngControl(this, id, 'ngWindow');
  this.DoCreate = ngw_DoCreate;
  this.OnVisibleChanged = ngw_OnVisibleChanged;
  this.DoResize = ngw_DoResize;
  this.DoAttach = ngw_DoAttach;
  this.DoRelease = ngw_DoRelease;
  this.DoUpdate = ngw_DoUpdate;
  this.DoPtrClick = ngw_DoPtrClick;
  this.DoPtrDblClick = ngw_DoPtrDblClick;
  this.DoPtrStart = ngw_DoPtrStart;
  this.DoPtrDrag = ngw_DoPtrDrag;
  this.DoPtrEnd = ngw_DoPtrEnd;
  
  this.AddEvent('Update',ngw_Update);

  this.SetBoundsEx = this.SetBounds;
  this.SetBounds = ngw_SetBounds;

  this.StateBounds = null;

  /*
   *  Group: Definition
   */
  /*
   *  Variable: CW
   *  ClientRect width.
   *  Type: integer
   */
  /*<>*/
  /*
   *  Variable: CH
   *  ClientRect height.
   *  Type: integer
   */
  /*<>*/
  /*
   *  Variable: ParentReferences
   *  ...
   *  Type: bool
   *  Default value: *false*
   */
  /*<>*/
  /*
   *  Variable: ControlsPanel
   *  Controls panel definition.
   *  Type: object
   */
  /*<>*/

  /*
   *  Group: Properties
   */
  /*  Variable: Text
   *  ...
   *  Type: string
   */
  this.Text = '';
  /*  Variable: HTMLEncode
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.HTMLEncode = false;

  /*  Variable: BackgroundColor
   *  ...
   *  Type: string
   */
  this.BackgroundColor = '';
  /*  Variable: Sizeable
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.Sizeable = true;
  /*  Variable: Moveable
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.Moveable = true;
  /*  Variable: Modal
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.Modal = false;  
  /*  Variable: DisposeOnClose
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.DisposeOnClose = false;
  /*  Variable: AutoSize
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.AutoSize = true;
  /*  Variable: Centered
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.Centered = false;
  
  /*  Variable: MinimizedBounds
   *  ...
   *  Type: object
   *  Default value: *undefined*   
   */
  //this.MinimizedBounds=undefined;
  
  /*  Variable: MinWidth
   *  ...
   *  Type: int
   *  Default value: *100*   
   */
  this.MinWidth = 100;
  /*  Variable: MinHeight
   *  ...
   *  Type: int
   *  Default value: *100*   
   */
  this.MinHeight = 50;
  
  /*  Variable: MaxWidth
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MaxWidth = 0;
  /*  Variable: MaxHeight
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MaxHeight = 0;
  
  /*  Variable: Buttons
   *  ...
   *  Type: object
   */
  this.Buttons = null;
    
  /*  Variable: Img
   *  ...
   *  Type: object
   */
  this.Img = null;
  /*  Variable: Frame
   *  ...
   *  Type: object
   */
  this.Frame = new Object;
  /*  Variable: CaptionImg
   *  ...
   *  Type: object
   */
  this.CaptionImg = new Object;

  /*
   *  Group: Methods
   */
   
  /*  Function: Show
   *  Makes a window visible.   
   *   
   *  Syntax:
   *    void *Show* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Show = ngw_Show;
  /*  Function: Hide
   *  Makes a window invisible.   
   *   
   *  Syntax:
   *    void *Hide* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Hide = ngw_Hide;
  
  /*  Function: Close
   *  Closes the window.   
   *   
   *  Syntax:
   *    void *Close* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Close = ngw_Close;
  
  /*  Function: Minimize
   *  Shrinks the window.   
   *   
   *  Syntax:
   *    void *Minimize* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Minimize = ngw_Minimize;
  /*  Function: Maximize
   *  Expands the window to its maximal size.   
   *   
   *  Syntax:
   *    void *Maximize* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Maximize = ngw_Maximize;
  /*  Function: Restore
   *  Restores a window to its normal size.   
   *   
   *  Syntax:
   *    void *Restore* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Restore = ngw_Restore;
  /*  Function: Center
   *  Centers the window.   
   *   
   *  Syntax:
   *    void *Restore* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.Center = ngw_Center;
  
  /*  Function: CalcAutoSize
   *  Calculates automatic window dimensions.   
   *   
   *  Syntax:
   *    void *CalcAutoSize* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.CalcAutoSize = ngw_CalcAutoSize;
  
  /*  Function: GetClientRect
   *  Gets client rectangle dimensions.   
   *   
   *  Syntax:
   *    object *GetClientRect* ()
   *     
   *  Returns:
   *    Rectangle dimensions in format { W: width, H: height }.     
   */
  this.GetClientRect = ngw_GetClientRect;
  
  /*  Function: SetClientRect
   *  Sets client rectangle dimensions.   
   *   
   *  Syntax:
   *    void *SetClientRect* (object rect)
   *     
   *  Parameters:
   *    rect - { W: width, H: height }
   *  Returns:
   *    -     
   */
  this.SetClientRect = ngw_SetClientRect;
  
  /*  Function: IsMaximized
   *  Determines if window is maximized.   
   *   
   *  Syntax:
   *    bool *IsMaximized* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.IsMaximized = ngw_IsMaximized;

  /*  Function: IsMinimized
   *  Determines if window is miminized.   
   *   
   *  Syntax:
   *    bool *IsMinimized* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.IsMinimized = ngw_IsMinimized;
  /*  Function: SetText
   *  Sets window caption.   
   *   
   *  Syntax:
   *    void *SetText* (string text)
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.SetText = ngc_SetText;  
  /*  Function: GetText
   *  Gets window caption.   
   *   
   *  Syntax:
   *    string *GetText* (void)
   *     
   *  Returns:
   *    Window caption.     
   */
  this.GetText=ngc_GetText;
  /*  Function: GetImg
   *  Gets image.   
   *   
   *  Syntax:
   *    object *GetImg* (void)
   *     
   *  Returns:
   *    The image.     
   */
  this.GetImg=ngc_GetImg;
  
//  this.DefaultDispose = this.Dispose;
//  this.Dispose = ngw_Dispose;

  this.CheckBounds = ngw_CheckBounds;
  this.MouseType=-1;

  /*
   *  Group: Events
   */
  /*
   *  Event: OnGetText
   */     
  this.OnGetText = null;  
  /*
   *  Event: OnGetImg
   */     
  this.OnGetImg = null;
  /*
   *  Event: OnClick
   */     
  this.OnClick = null;
  /*
   *  Event: OnDblClick
   */     
  this.OnDblClick = null;
  
  /*
   *  Event: OnMinimize
   */     
  this.OnMinimize = null;
  /*
   *  Event: OnMaximize
   */     
  this.OnMaximize = null;
  /*
   *  Event: OnRestore
   */     
  this.OnRestore = null;
  /*
   *  Event: OnClose
   */     
  this.OnClose = null;
  /*
   *  Event: OnMouseMoving
   */     
  this.OnMouseMoving = null;
  /*
   *  Event: OnMouseMove
   */     
  this.OnMouseMove = null;
  /*
   *  Event: OnMouseResizing
   */     
  this.OnMouseResizing = null;
  /*
   *  Event: OnMouseResize
   */     
  this.OnMouseResize = null;
  
  if(!ngw_initialized)
  {
    if (window.addEventListener) 
    {
      window.addEventListener("focus",ngw_OnDOMFocus,true);    
    }
    else if(window.attachEvent)
    {
      window.attachEvent('onfocus', ngw_OnDOMFocus);
    }
    ngw_initialized = true;
  }
 
  ngControlCreated(this);
}

// --- ngHint ------------------------------------------------------------------

/**
 *  Function: ngCreateHint
 *  Creates hint by definition.
 *  
 *  Syntax:
 *    object *ngCreateHint* (object def, object parent)
 *    
 *  Returns:
 *    Created hint object (<ngHint>). 
 */
function ngCreateHint(def,parent)
{
  if(typeof def==='string') def={Type: def};
  ng_MergeDef(def, {
    Data: {
      DiscardOnHide: true,
      IsPopup: true
    }
  }); 
  return ngCreateWindow(def,parent);
}

/**
 *  Function: ngPopupHint
 *  Creates hint by definition.
 *  
 *  Syntax:
 *    object *ngPopupHint* (object def, int x, int y, string anchor, object parent)
 *    
 *  Returns:
 *    Created hint object (<ngHint>). 
 */
function ngPopupHint(def,x,y,anchor,parent)
{
  var h=ngCreateHint(def,parent);
  if(h) h.Popup(x,y,anchor);
  return h;
}

/**
 *  Function: ngPopupCtrlHint
 *  Creates hint by definition.
 *  
 *  Syntax:
 *    object *ngPopupCtrlHint* (object def, object ctrl, string anchor, object parent)
 *    
 *  Returns:
 *    Created hint object (<ngHint>). 
 */
function ngPopupCtrlHint(def,ctrl,anchor,parent)
{
  if(typeof ctrl.HintTimeout !== 'undefined') 
  {
    if(typeof def==='string') def={Type: def};
    ng_MergeDef(def, {
      Data: {
        AutoHideTimeout: ctrl.HintTimeout
      }
    });
  } 
  var h=ngCreateHint(def,parent);
  if(h) h.PopupCtrl(ctrl,anchor);
  return h;
}

function ngh_DoAttach(o)
{
  var handle=document.getElementById(this.ID+'_A');
  if(handle)
  {
    var t=this.CtrlType;
    handle.onmouseover = function(e) { ngc_Enter(e, this, t); }
    handle.onmouseout  = function(e) { ngc_Leave(e, this, t); }
  }
}

function ngh_BorderCollision(p, l, t, r, b)
{
  var area=0;
  var minx=p.MinX,maxx=p.MaxX;
  var miny=p.MinY,maxy=p.MaxY;
    
  if(minx<l)  { area+=(l-minx)*(maxy-miny); minx=l; }
  if(maxx>=r) { area+=(maxx-r)*(maxy-miny); maxx=r; }   
  if(miny<t)  area+=(t-miny)*(maxx-minx);
  if(maxy>=b) area+=(maxy-b)*(maxx-minx);
  
  if((p.AffectedArea<0)||(area>p.AffectedArea)) p.AffectedArea=area;        
  return area;  
}

function ngh_BoundRectCollision(p, l, t, r, b)
{
  var minx=p.MinX,maxx=p.MaxX;
  var miny=p.MinY,maxy=p.MaxY;
  
  if(minx<l) minx=l;
  if(maxx<l) maxx=l;
  if(miny<t) miny=t;
  if(maxy<t) maxy=t;

  if(minx>r) minx=r;
  if(maxx>r) maxx=r;
  if(miny>b) miny=b;
  if(maxy>b) maxy=b;

  var area=(maxx-minx)*(maxy-miny);  
  if((p.AffectedArea<0)||(area>p.AffectedArea)) p.AffectedArea=area;        
  return area;  
}

function ngh_FindAnchor(w,h,anchors,popupx,popupy,pw,ph)
{
  if(typeof popupx==='undefined') popupx=this.PopupX;
  if(typeof popupy==='undefined') popupy=this.PopupY;
  if(typeof popupx==='undefined') popupx=ngVal(this.Bounds.L,0);
  if(typeof popupy==='undefined') popupy=ngVal(this.Bounds.T,0);
  
  var dp,x,y;
  var o=this.Elm();
  if((!o)||(typeof popupx==='undefined')||(typeof popupy==='undefined'))
  {
    return { Anchor: '', AnchorObj: null, AffectedArea: -1 };
  }
  if((typeof w==='undefined')||(typeof h==='undefined'))
  {
    ng_BeginMeasureElement(o);
    if(typeof w==='undefined') w=ng_OuterWidth(o); 
    if(typeof h==='undefined') h=ng_OuterHeight(o);
    ng_EndMeasureElement(o);
  }
  
  // parent  
  if((typeof pw==='undefined')||(typeof ph==='undefined'))
  {
    var po=o.offsetParent;
    if((po)&&(po==document.body)) po=null;
    if(po)
    {
      ng_BeginMeasureElement(po);
      if(typeof pw==='undefined') pw=ng_ClientWidth(po); 
      if(typeof ph==='undefined') ph=ng_ClientHeight(po); 
      ng_EndMeasureElement(po);
    }
    else 
    {
      if(typeof pw==='undefined') pw=ng_WindowWidth();
      if(typeof ph==='undefined') ph=ng_WindowHeight();
    }
  }

  var anchor=null,anchorid='';
  if((typeof anchors !== 'object')||(!anchors))
  {
    if(this.PreferredAnchors)
    {
      var a;
      anchors=new Object;
      for(var i in this.PreferredAnchors)
      {
        a=this.Anchors[this.PreferredAnchors[i]];
        if((a)&&(typeof a==='object')) anchors[this.PreferredAnchors[i]]=a;
      }
      for(var i in this.Anchors)
      {
        a=this.Anchors[i];
        if((a)&&(typeof a==='object')&&(typeof anchors[i] === 'undefined')) anchors[i]=a;
      }
    }
    else anchors=this.Anchors;
  }

  var noimg={L:0,T:0,aL:0,aT:0,oT:0,oL:0,W:0,H:0};
  var p,minanchor=null,minanchorid='',minarea=-1;
  if((typeof anchors === 'object')&&(anchors))
    for(var i in anchors)
    {
      anchor=anchors[i];
      anchorid=i;
      if((!anchor)||(typeof anchor!=='object')) { anchor=null; anchorid=''; continue; }
      p={ 
        AffectedArea: -1,
        PopupX: popupx,
        PopupY: popupy,
        MinX: popupx, 
        MinY: popupy, 
        MaxX: popupx, 
        MaxY: popupy,
        W: w,
        H: h,
        ParentW: pw,
        ParentH: ph,
        Anchor: i,
        AnchorObj: anchor
      };
      dp=(ngVal(anchor.Img,null) ? ngc_ImgDrawProps(this.ID+'_AI', 'ngHint', this.ID, 0, this.Enabled, anchor.Img) : noimg);
      x=popupx;
      y=popupy;
      if(typeof anchor.L !== 'undefined') x-=anchor.L;
      if(typeof anchor.T !== 'undefined') y-=anchor.T;
      if(typeof anchor.R !== 'undefined') x-=w-dp.W-anchor.R;
      if(typeof anchor.B !== 'undefined') y-=h-dp.H-anchor.B;
      if(typeof anchor.HX !== 'undefined') x-=anchor.HX; 
      if(typeof anchor.HY !== 'undefined') y-=anchor.HY; 
      if(x<p.MinX) p.MinX=x;
      if(x>p.MaxX) p.MaxX=x;
      if(y<p.MinY) p.MinY=y;
      if(y>p.MaxY) p.MaxY=y;

      if(x+w<p.MinX) p.MinX=x+w;
      if(x+w>p.MaxX) p.MaxX=x+w;
      if(y+h<p.MinY) p.MinY=y+h;
      if(y+h>p.MaxY) p.MaxY=y+h;

      if(typeof anchor.L !== 'undefined') x+=anchor.L;
      if(typeof anchor.T !== 'undefined') y+=anchor.T;
      if(typeof anchor.R !== 'undefined') x+=w-dp.W-anchor.R;
      if(typeof anchor.B !== 'undefined') y+=h-dp.H-anchor.B;
      if(x<p.MinX) p.MinX=x;
      if(x>p.MaxX) p.MaxX=x;
      if(y<p.MinY) p.MinY=y;
      if(y>p.MaxY) p.MaxY=y;
      x+=dp.W;
      y+=dp.H;
      if(x<p.MinX) p.MinX=x;
      if(x>p.MaxX) p.MaxX=x;
      if(y<p.MinY) p.MinY=y;
      if(y>p.MaxY) p.MaxY=y;

      if(this.OnCheckPlacement) this.OnCheckPlacement(this,p);
      else this.BorderCollision(p,0,0,pw,ph); 
      
      if(!ngVal(p.AffectedArea,-1)) { minarea=0; break; }
      
      if((p.AffectedArea>0)&&((p.AffectedArea<minarea)||(minarea<0))) { minanchor=anchor; minanchorid=i; minarea=p.AffectedArea; }      
      anchor=null;
      anchorid='';       
    }
  if(!anchor) { anchor=minanchor; anchorid=minanchorid; } // take anchor with minimal overflow
  return { Anchor: anchorid, AnchorObj: anchor, AffectedArea: minarea };
}

function ngh_DoUpdate(o)
{
  var x,y,dp,anchor = null, anchorid='';

  if(typeof this.PopupX === 'undefined') this.PopupX=ngVal(this.Bounds.L,0);
  if(typeof this.PopupY === 'undefined') this.PopupY=ngVal(this.Bounds.T,0);
  
  delete this.PopupAnchor;
  
  ng_BeginMeasureElement(o);
  var w=ng_OuterWidth(o); 
  var h=ng_OuterHeight(o);
  ng_EndMeasureElement(o);
  
  if(this.Anchor == 'auto') // auto anchor detection
  {
    var ai=this.FindAnchor(w,h);
    anchor=ai.AnchorObj;
    anchorid=ai.Anchor;
  }  
  else
  {
    if((typeof this.Anchors === 'object')&&(this.Anchors))
    {
      anchor=ngVal(this.Anchors[this.Anchor],null);
      if(anchor) anchorid=this.Anchor;
    }
  }
  if((typeof anchor!=='object')||(!anchor)) // take first
  {
    if((typeof this.Anchors === 'object')&&(this.Anchors))
    {
      if(this.PreferredAnchors)
      {
        var a;
        for(var i in this.PreferredAnchors)
        {
          a=this.Anchors[this.PreferredAnchors[i]];
          if((a)&&(typeof a==='object')) { anchor=a; anchorid=this.PreferredAnchors[i]; break; }
        }
      }
      if(!anchor)
        for(var i in this.Anchors)
        {
          anchor=this.Anchors[i];
          anchorid=i;
          if((anchor)&&(typeof anchor==='object')) break;
        }
    }
  }
  var handle=document.getElementById(this.ID+'_A');
  if(handle)
  {
    if((typeof anchor!=='object')||(!anchor)) 
    {
      handle.style.visibility='hidden';
      x=this.PopupX;
      y=this.PopupY;
      ng_setLeftTop(o,x,y);
      this.Bounds.L=x;
      this.Bounds.T=y;
    }
    else
    {
      var noimg={L:0,T:0,aL:0,aT:0,oT:0,oL:0,W:0,H:0};
      
      this.PopupAnchor=anchorid;
      var image=new ngStringBuilder;
      dp=(ngVal(anchor.Img,null) ? ngc_ImgDrawProps(this.ID+'_AI', 'ngHint', this.ID, 0, this.Enabled, anchor.Img) : noimg)
      if((!dp.W)&&(!dp.H)) handle.style.visibility='hidden';
      else
      {
        ngc_Img(image,dp,"position:absolute;",ngVal(anchor.Img.Attrs,''));
    
        ng_SetClientWidth(handle,dp.W)
        ng_SetClientHeight(handle,dp.H)
        ng_SetInnerHTML(handle,image.toString());
        handle.style.visibility='visible';
      }
      
      if(ngIExplorer)
      { 
        if(typeof anchor.L !== 'undefined') handle.style.pixelLeft=anchor.L; 
        if(typeof anchor.T !== 'undefined') handle.style.pixelTop=anchor.T; 
        if(typeof anchor.R !== 'undefined') handle.style.pixelLeft=w-dp.W-anchor.R;
        if(typeof anchor.B !== 'undefined') handle.style.pixelTop=h-dp.H-anchor.B;
      }
      else
      {
        if(typeof anchor.L !== 'undefined') { handle.style.left=anchor.L+'px'; handle.style.right=''; }
        if(typeof anchor.T !== 'undefined') { handle.style.top=anchor.T+'px'; handle.style.bottom=''; }
        if(typeof anchor.R !== 'undefined') { handle.style.right=anchor.R+'px'; handle.style.left=''; }
        if(typeof anchor.B !== 'undefined') { handle.style.bottom=anchor.B+'px'; handle.style.top=''; }
      }
      
      x=this.PopupX;
      y=this.PopupY;
      if(typeof anchor.L !== 'undefined') x-=anchor.L;
      if(typeof anchor.T !== 'undefined') y-=anchor.T;
      if(typeof anchor.R !== 'undefined') x-=w-dp.W-anchor.R;
      if(typeof anchor.B !== 'undefined') y-=h-dp.H-anchor.B;
      if(typeof anchor.HX !== 'undefined') x-=anchor.HX; 
      if(typeof anchor.HY !== 'undefined') y-=anchor.HY; 
      ng_setLeftTop(o,x,y);
      this.Bounds.L=x;
      this.Bounds.T=y;
    }
  }

  var frame=document.getElementById(this.ID+'_F');
  if(!frame) return true;

  var html=new ngStringBuilder;
  var w=ng_ClientWidth(o);
  var h=ng_ClientHeight(o);  
  var l=0,t=0;

  var dp=new Object;
  ngc_ImgBox(html, this.ID, 'ngHint', 0, this.Enabled, 0,0,w,h,false, this.Frame, '', '', undefined, dp);

  if(this.ControlsInside)
  {
    this.ControlsPanel.Bounds.T=dp.Top.H;
    this.ControlsPanel.Bounds.L=dp.Left.W;
    this.ControlsPanel.Bounds.R=dp.Right.W;
    this.ControlsPanel.Bounds.B=dp.Bottom.H;
  }
  else
  {
    this.ControlsPanel.Bounds.T=0;
    this.ControlsPanel.Bounds.L=0;
    this.ControlsPanel.Bounds.R=0;
    this.ControlsPanel.Bounds.B=0;
  }  
  this.ControlsPanel.SetBounds();
  
  ng_SetInnerHTML(frame,html.toString());
  return true;
}

function ngh_SetClientRect(v)
{
  if(!ngVal(v,false)) return false;

  var noimg = {L:0,T:0,aL:0,aT:0,oT:0,oL:0,W:0,H:0};
  var dp=new Object;
  var changed=false;
  
  if(typeof v.W !== 'undefined') 
  {
    dp.Left =((!this.ControlsInside) || typeof this.Frame.Left === 'undefined' ? noimg : ngc_ImgDrawProps(this.ID+'_L', 'ngHint', this.ID, 0, this.Enabled, this.Frame.Left));
    dp.Right =((!this.ControlsInside) || typeof this.Frame.Right === 'undefined' ? noimg : ngc_ImgDrawProps(this.ID+'_R', 'ngHint', this.ID, 0, this.Enabled, this.Frame.Right))
    var nw=v.W+dp.Left.W+dp.Right.W;
    if(ngVal(this.Bounds.W,-1)!=nw)
    {
      changed=true;
      this.Bounds.W=nw;
      this.Bounds.R=undefined;
    }

    if(this.Bounds.W<this.MinWidth) { changed=true; this.Bounds.W=this.MinWidth; }
    if((this.MaxWidth>0)&&(this.Bounds.W>this.MaxWidth)) { changed=true; this.Bounds.W=this.MaxWidth; }
  }
  
  if(typeof v.H !== 'undefined')
  {
    dp.Top =((!this.ControlsInside) || typeof this.Frame.Top === 'undefined' ? noimg : ngc_ImgDrawProps(this.ID+'_B', 'ngHint', this.ID, 0, this.Enabled, this.Frame.Top));
    dp.Bottom =((!this.ControlsInside) || typeof this.Frame.Bottom === 'undefined' ? noimg : ngc_ImgDrawProps(this.ID+'_B', 'ngHint', this.ID, 0, this.Enabled, this.Frame.Bottom));

    var nh=v.H+dp.Top.H+dp.Bottom.H;
    if(ngVal(this.Bounds.H,-1)!=nh)
    {
      changed=true;
      this.Bounds.H=nh;
      this.Bounds.B=undefined;
      if(this.Bounds.H<this.MinHeight) { changed=true; this.Bounds.H=this.MinHeight; }
      if((this.MaxHeight>0)&&(this.Bounds.H>this.MaxHeight)) { changed=true; this.Bounds.H=this.MaxHeight; }
    }
  }  
  return changed;
}

function ngh_GetClientRect()
{
  var w,h;  
  if(ngVal(this.ControlsPanel,false))
  {
    var o=this.ControlsPanel.Elm();
    if(o)
    {
      w=ng_ClientWidth(o);
      h=ng_ClientHeight(o);
    }
  }  
  return { W: w, H: h};
}

function ngh_DoRelease(o)
{
  o.style.display='none';
  var frame=document.getElementById(this.ID+'_F');
  if(frame) ng_SetInnerHTML(frame,'');
}

function ngh_DoCreate(def, ref, elm, parent)
{
  var cclass=this.BaseClassName;

  if(((typeof def.W !== 'undefined')||(typeof def.CW !== 'undefined')||((typeof def.L !== 'undefined')&&(typeof def.R !== 'undefined')))
   &&((typeof def.H !== 'undefined')||(typeof def.CH !== 'undefined')||((typeof def.T !== 'undefined')&&(typeof def.B !== 'undefined')))
   &&(def.Data)&&(typeof def.Data.AutoSize === 'undefined'))
    this.AutoSize=false;

  if((typeof def.CW !== 'undefined')||(typeof def.CH !== 'undefined'))
  {
    if(this.SetClientRect({W: def.CW, H: def.CH}))
      this.SetBounds();
  }

  var ldefs=new Object;
  if(typeof def.ControlsPanel === 'object') ldefs.ControlsPanel = ng_CopyVar(def.ControlsPanel);
  else ldefs.ControlsPanel = new Object;
    
  ng_MergeDef(ldefs.ControlsPanel, {
    Type: 'ngPanel',
    id: this.ID+'_P',
    className: cclass+'ControlsPanel',
    ScrollBars: ssAuto,
    L: 0, T: 0, R: 0, B: 0
  }); 
  ldefs.ControlsPanel.Controls=def.Controls;
  ldefs.ControlsPanel.ModifyControls=def.ModifyControls;

  var lref=ngCreateControls(ldefs,undefined,this.ID);
  if(!ngVal(def.ParentReferences,true)) 
  {
    this.Controls = new Object;
    this.Controls.Owner = this; 
    this.Controls.AddControls = function(defs, newparent) { ngCreateControls(defs,this,ngVal(newparent,ldefs.ControlsPanel.id)); }
    ref=this.Controls;
  }                                    
  this.ControlsPanel=lref.ControlsPanel;
  this.ControlsPanel.Owner=this;
  delete lref.ControlsPanel;
  ngCloneRefs(ref,lref);
  
  delete def.Controls;
  delete def.ModifyControls;

  elm.style.zIndex=Math.round((ngModalCnt+0.6)*ngModalZIndexDelta);

  this.SetScrollBars(ssDefault);

  var nd=document.createElement('div');
  nd.id=this.ID+'_F';
  nd.style.position="absolute";
  nd.style.zIndex="800";
  elm.appendChild(nd);

  var nd2=document.createElement('div');
  nd2.id=this.ID+'_A';
  nd2.style.position="absolute";
  nd2.style.zIndex="801";
  elm.appendChild(nd2);

  //ng_AppendInnerHTML(elm,'<div id="'+this.ID+'_F" style="position: absolute;z-index:800;"></div><div id="'+this.ID+'_A" style="position: absolute;z-index:801;"></div>');
}

function ngh_DoPopup(x,y,anchor)
{
  this.SetVisible(false);
  this.PopupX = x;
  this.PopupY = y;
  delete this.PopupElm;
  if(typeof anchor!=='undefined') this.Anchor=anchor;
  this.SetVisible(true);
}

function ngh_Popup(x,y,anchor)
{
  var info = {
    PopupX: x,
    PopupY: y,
    Anchor: anchor
  };
  if((this.OnPopup)&&(!ngVal(this.OnPopup(this,info),false))) return;
  this.DoPopup(info.PopupX,info.PopupY,info.Anchor);
}

function ngh_PopupCtrl(c,anchor)
{
  var o=null;
  // detect if it is control or just element
  if(typeof c === 'string') 
  {
    var nc=ngGetControlById(c);
    if(!nc) c=document.getElementById(c);
    else c=nc;
  }
  if(typeof c.Elm === 'function') o=c.Elm();
  else { o=c; c=null; }
   
  if(!o) return;
  
  var p=this.Elm();
  if(p) p=p.parentNode;
  else p=ngApp.Elm();

  var pos=ng_ParentPosition(o, p);
  var x=(c ? c.HintX : undefined);
  if(typeof x==='undefined') x=Math.floor(ng_OuterWidth(o)/3);
  var y=(c ? c.HintY : undefined);
  if(typeof y==='undefined') y=Math.floor(ng_OuterHeight(o)/2);

  var info = {
    PopupX: pos.x+x,
    PopupY: pos.y+y,
    PopupElm: o,
    Anchor: anchor
  };
  if((this.OnPopup)&&(!ngVal(this.OnPopup(this,info),false))) return;
  this.DoPopup(info.PopupX,info.PopupY,info.Anchor);
  this.PopupElm = info.PopupElm; 
}

function ngh_SetVisible(v)
{
  v=ngVal(v,true);
  if(this.Visible==v) return;
  if(this.HintAutoHideTimer) clearTimeout(this.HintAutoHideTimer); this.HintAutoHideTimer=null;
  if(!v) 
  {
    delete this.PopupX;
    delete this.PopupY;
    delete this.PopupElm;
    delete this.PopupAnchor; 
    if(this.DisposeOnHide) 
    {
      var self=this;
      var dispose_timer=setTimeout(function() {
        clearTimeout(dispose_timer);
        var owner=self.Owner;
        self.Dispose();
        if((owner)&&(typeof owner === 'object')) // remove reference
        {
          for(var i in owner)
          {
            if(owner[i]==self) 
            {
              delete owner[i];
              break;
            }
          }
        }
      },1);
    }
  }
  else
  {
    var ht=ngVal(this.AutoHideTimeout,0);
    if(ht>0) this.HintAutoHideTimer = setTimeout("ngh_HintAutoHideTimer('"+this.ID+"')",ht);
  }
}

function ngh_HintAutoHideTimer(id)
{
  var c=ngGetControlById(id,'ngHint');
  if(c) c.SetVisible(false);
}

/**
 *  Class: ngHint
 *  This class implements a generic hint control. 
 *
 *  Syntax:
 *    new *ngHint* ([string id])
 *    
 *  Parameters:
 *    id - parent element
 *    
 *  See also:
 *    Abstract class <ngControl>.    
 */
function ngHint(id)
{
  ngControl(this, id, 'ngHint');

  /*
   *  Group: Definition
   */
  /*
   *  Variable: CW
   *  ClientRect width.
   *  Type: integer
   */
  /*<>*/
  /*
   *  Variable: CH
   *  ClientRect height.
   *  Type: integer
   */
  /*<>*/
  /*
   *  Variable: ControlsPanel
   *  Controls panel definition.
   *  Type: object
   */
  /*<>*/

  /*
   *  Group: Properties
   */
  /*  Variable: AutoSize
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.AutoSize = true;
  /*  Variable: MinWidth
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MinWidth = 0;
  /*  Variable: MinHeight
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MinHeight = 0;
  
  /*  Variable: MaxWidth
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MaxWidth = 0;
  /*  Variable: MaxHeight
   *  ...
   *  Type: int
   *  Default value: *0*   
   */
  this.MaxHeight = 0;
  /*  Variable: Anchor
   *  ...
   *  Type: string
   *  Default value: *'auto'*   
   */
  this.Anchor = 'auto';

  /*  Variable: Anchors
   *  ...
   *  Type: object
   */
  this.Anchors = null;

  /*  Variable: PreferredAnchors
   *  ...
   *  Type: array
   */
  this.Anchors = null;
    
  /*  Variable: Frame
   *  ...
   *  Type: object
   */
  this.Frame = new Object;
  
  /*  Variable: ControlsInside
   *  ...
   *  Type: bool
   *  Default value: *true*   
   */
  this.ControlsInside = true;

  /*  Variable: AutoHideTimeout
   *  Defines the timeout in milliseconds when hint automatically hides itself (0=disabled).
   *  Type: integer
   *  Default value: *0*         
   */
  //c.AutoHideTimeout = 0;
  /*  Variable: DisposeOnHide
   *  ...
   *  Type: bool
   *  Default value: *false*   
   */
  this.DisposeOnHide = false;

  /*  Variable: PopupX
   *  Horizontal popup position in pixels.
   *  Type: integer
   *  Default value: *undefined*         
   */
  //this.PopupX = undefined;
  /*  Variable: PopupY
   *  Vertical popup position in pixels.
   *  Type: integer
   *  Default value: *undefined*         
   */
  //this.PopupY = undefined;
  /*  Variable: PopupElm
   *  Element to which hint was aligned during popup. 
   *  Type: integer
   *  Default value: *undefined*         
   */
  //this.PopupElm = undefined;

  this.DoCreate = ngh_DoCreate;
  this.DoRelease = ngh_DoRelease;
  this.DoUpdate = ngh_DoUpdate;
  this.FindAnchor = ngh_FindAnchor;
  this.AddEvent('Update',ngw_Update);

  /*
   *  Group: Methods
   */
  /*  Function: Popup
   *  Popups hint at specified position.
   *   
   *  Syntax:
   *    void *Popup* (integer x, integer y [, string anchor])
   *     
   *  Returns:
   *    -     
   */
  this.Popup = ngh_Popup;

  /*  Function: PopupCtrl
   *  Popups hint along specified control.
   *   
   *  Syntax:
   *    void *PopupCtrl* (object ctrl [, string anchor])
   *     
   *  Returns:
   *    -     
   */
  this.PopupCtrl = ngh_PopupCtrl;
     
  /*  Function: GetClientRect
   *  Gets client rectangle dimensions.   
   *   
   *  Syntax:
   *    object *GetClientRect* ()
   *     
   *  Returns:
   *    Rectangle dimensions in format { W: width, H: height }.     
   */
  this.GetClientRect = ngh_GetClientRect;
  
  /*  Function: SetClientRect
   *  Sets client rectangle dimensions.   
   *   
   *  Syntax:
   *    void *SetClientRect* (object rect)
   *     
   *  Parameters:
   *    rect - { W: width, H: height }
   *  Returns:
   *    -     
   */
  this.SetClientRect = ngh_SetClientRect;
  /*  Function: CalcAutoSize
   *  Calculates automatic window dimensions.   
   *   
   *  Syntax:
   *    void *CalcAutoSize* ()
   *     
   *  Parameters:
   *   
   *  Returns:
   *    -     
   */
  this.CalcAutoSize = ngw_CalcAutoSize;

  /*  Function: BorderCollision
   *  Calculates the border overflow of popup.     
   *  Helper function for placement calculation. 
   *   
   *  Syntax:
   *    int *BorderCollision* (object placement, int left, int top, int right, int bottom)
   *     
   *  Parameters:
   *    
   *  Returns:
   *    Affected area.     
   */
  this.BorderCollision = ngh_BorderCollision;

  /*  Function: BoundRectCollision
   *  Calculates the collision of popup and given boundary rectangle.     
   *  Helper function for placement calculation. 
   *   
   *  Syntax:
   *    int *BoundRectCollision* (object placement, int left, int top, int right, int bottom)
   *     
   *  Parameters:
   *    
   *  Returns:
   *    Affected area.     
   */
  this.BoundRectCollision = ngh_BoundRectCollision;
  
  /*
   *  Group: Events
   */   
  /*
   *  Event: OnCheckPlacement
   */     
  this.OnCheckPlacement = null;
  
  /*
   *  Event: OnPopup
   */     
  this.OnPopup = null;

  this.AddEvent(ngh_SetVisible,'SetVisible');

  this.DoPopup = ngh_DoPopup;

  this.AddEvent('DoAttach',ngh_DoAttach);
  
  this.Visible=false;
 
  ngControlCreated(this);
}


/**
 *  Function: ngCreateTextHint
 *  Creates hint by definition.
 *  
 *  Syntax:
 *    object *ngCreateTextHint* (object def, string text, object parent)
 *    
 *  Returns:
 *    Created hint object (<ngHint>). 
 */
function ngCreateTextHint(def,text,parent)
{
  if(typeof def==='string') def={Type: def};
  ng_MergeDef(def, {
    Data: {
      Text: text
    }
  }); 
  return ngCreateHint(def,parent);
}

/**
 *  Function: ngPopupTextHint
 *  Creates hint by definition.
 *  
 *  Syntax:
 *    object *ngPopupTextHint* (object def, int x, int y, string text, string anchor, object parent)
 *    
 *  Returns:
 *    Created hint object (<ngHint>). 
 */
function ngPopupTextHint(def,x,y,text,anchor,parent)
{
  var h=ngCreateTextHint(def,text,parent);
  if(h) h.Popup(x,y,anchor);
  return h;
}

/**
 *  Function: ngPopupCtrlTextHint
 *  Creates hint by definition.
 *  
 *  Syntax:
 *    object *ngPopupCtrlTextHint* (object def, object ctrl, string text, string anchor, object parent)
 *    
 *  Returns:
 *    Created hint object (<ngHint>). 
 */
function ngPopupCtrlTextHint(def,ctrl,text,anchor,parent)
{
  if(typeof text === 'undefined')
  {
    if(typeof ctrl.GetHint === 'function') text=ctrl.GetHint();
    else text=ngVal(ctrl.Hint,'');
  }
  if(typeof ctrl.HintTimeout !== 'undefined') 
  {
    if(typeof def==='string') def={Type: def};
    ng_MergeDef(def, {
      Data: {
        AutoHideTimeout: ctrl.HintTimeout
      }
    });
  } 
  var h=ngCreateTextHint(def,text,parent);
  if(h) h.PopupCtrl(ctrl,anchor);
  return h;
}

/*  Class: ngTextHint
 *  Simple hint text component (based on <ngHint>).
 */
function nghtxt_SetText(text)
{
  if(this.OnSetText) text=this.OnSetText(text,this);
  if((!this.Controls)||(!this.Controls.Hint)) return;
  if(text!=this.Text)
  {
    this.Text=text;
    this.Controls.Hint.SetText(text);
    if(this.AutoSize) this.Update();
  }
}

function nghtxt_OnGetText(text)
{
  var h=this.Owner.Owner;
  return (h ? h.GetText() : '')
}

function nghtxt_DoPtrClick(pi)
{
  if(pi.EventID==='control')
  {
    if(this.OnClick) 
    {
      var e=pi.Event;
      e.Owner=this;
      this.OnClick(e);
      pi.PreventDefault=true;    
    }
  }
}

function nghtxt_HintDoPtrClick(pi)
{
  if(pi.EventID==='control')
  {
    var p=this.ParentControl;
    while(p)
    {
      if(p.CtrlType==='ngHint') 
      {
        p.DoPtrClick(pi); // propagate click from text to hint
        break;
      }
      p=p.ParentControl;
    }
  }
}
          
function nghtxt_DoMeasureText(o,to)
{
  var w,h,to=null;
  if(!o) o=this.Elm();
  if(!to) 
  {
    var c=this.Controls.Hint;
    if(c) to=c.Elm();
  }
  
  if(this.AutoSize)
  {
    var noimg = {L:0,T:0,aL:0,aT:0,oT:0,oL:0,W:0,H:0};
    var dp=new Object;

    dp.Left =((!this.ControlsInside) || typeof this.Frame.Left === 'undefined' ? noimg : ngc_ImgDrawProps(this.ID+'_L', 'ngHint', this.ID, 0, this.Enabled, this.Frame.Left));
    dp.Right =((!this.ControlsInside) || typeof this.Frame.Right === 'undefined' ? noimg : ngc_ImgDrawProps(this.ID+'_R', 'ngHint', this.ID, 0, this.Enabled, this.Frame.Right))
    dp.Top =((!this.ControlsInside) || typeof this.Frame.Top === 'undefined' ? noimg : ngc_ImgDrawProps(this.ID+'_B', 'ngHint', this.ID, 0, this.Enabled, this.Frame.Top));
    dp.Bottom =((!this.ControlsInside) || typeof this.Frame.Bottom === 'undefined' ? noimg : ngc_ImgDrawProps(this.ID+'_B', 'ngHint', this.ID, 0, this.Enabled, this.Frame.Bottom));

    if((to)&&((typeof c.Bounds.R === 'undefined')||(typeof c.Bounds.L === 'undefined')))
    {
      w=ng_OuterWidth(to)+dp.Left.W+dp.Right.W; 
      if(typeof c.Bounds.R === 'undefined') w+=2*c.Bounds.L;
      else w+=2*c.Bounds.R;
    }
    
    if((to)&&((typeof c.Bounds.T === 'undefined')||(typeof c.Bounds.B === 'undefined')))
    {
      h=ng_OuterHeight(to)+dp.Top.H+dp.Bottom.H;
      if(typeof c.Bounds.B === 'undefined') h+=2*c.Bounds.T;
      else h+=2*c.Bounds.B;
    }
  }
  if(typeof w==='undefined') w=ng_OuterWidth(o);
  if(typeof h==='undefined') h=ng_OuterHeight(o);

  return { W: w, H: h};
}

function nghtxt_DoHintUpdate(o)
{
  var anchor=this.Anchor;
  var ret;
  try
  {
    var c=this.Controls.Hint;
    if((c)&&(this.AutoSize)&&(c.AutoSize)) // Calculate text size only if ngHint and ngText has AutoSize 
    {
      if(ngw_inautosize>0)
      {
        this.Anchor=ngVal(this.PopupAnchor,anchor); // Keep "hardly selected" anchor for autosize
      }    
      else
      { 
        var found='';
        var po=o.offsetParent;
        if((po)&&(po==document.body)) po=null;
        var pw=(po ? ng_ClientWidth(po) : ng_WindowWidth()); 
        var ph=(po ? ng_ClientHeight(po) : ng_WindowHeight());     
          
        var to=c.Elm();
        ng_setLeftTop(o,-10000,-10000); // hide
        ng_BeginMeasureElement(to);
        try
        {
          var anchors,p_anchors;
          if(anchor!=='auto')
          {
            p_anchors=new Object;
            anchors=new Object;
            if((typeof this.Anchors === 'object')&&(this.Anchors))
            {
              p_anchors[this.Anchor]=this.Anchors[this.Anchor];
            }
          }
          else
          {
            if(this.PreferredAnchors)
            {
              var a;
              anchors=new Object;
              p_anchors=new Object;
              for(var i in this.PreferredAnchors)
              {
                a=this.Anchors[this.PreferredAnchors[i]];
                if((a)&&(typeof a==='object')) p_anchors[this.PreferredAnchors[i]]=a;
              }
              for(var i in this.Anchors)
              {
                a=this.Anchors[i];
                if((a)&&(typeof a==='object')&&(typeof p_anchors[i] === 'undefined')) anchors[i]=a;
              }
            }
            else anchors=this.Anchors;
          }
  
          // Draw non-wrapped
          c.AutoSizeMode='auto';
          c.Update();
  
          var nwsz=this.DoMeasureText(o,to);
          if(nwsz.W<this.MinWidth) nwsz.W=this.MinWidth;
          if((this.MaxWidth<=0)||(nwsz.W<this.MaxWidth))
          {
            if(typeof p_anchors !== 'undefined')
            {
              // Test preffered non-wraped         
              var ai=this.FindAnchor(nwsz.W,nwsz.H,p_anchors);
              if((!ai.AffectedArea)&&(ai.AnchorObj)) found=ai.Anchor; // no collision, use found
            }
            else
            {
              // Test non-wraped         
              var ai=this.FindAnchor(nwsz.W,nwsz.H,anchors);
              if((!ai.AffectedArea)&&(ai.AnchorObj)) found=ai.Anchor; // no collision, use found
            }
          }
          if(found==='')
          {
            var minarea=-1,minwidth;
            var minfound='';
            var popupx=this.PopupX;
            if(typeof popupx==='undefined') popupx=ngVal(this.Bounds.L,0);
            
            var noimg = {L:0,T:0,aL:0,aT:0,oT:0,oL:0,W:0,H:0};
            var dp=new Object;
  
            // calculate frame width
            var fw=((!this.ControlsInside) || typeof this.Frame.Left === 'undefined' ? 0 : this.Frame.Left.W);
            fw+=((!this.ControlsInside) || typeof this.Frame.Right === 'undefined' ? 0 : this.Frame.Right.W);
        
            if((to)&&((typeof c.Bounds.R === 'undefined')||(typeof c.Bounds.L === 'undefined')))
            {
              if(typeof c.Bounds.R === 'undefined') fw+=2*c.Bounds.L;
              else fw+=2*c.Bounds.R;
            }
  
            var self=this;
            function check_anchors(anchors)
            {
              var sz,ai,tw,an,a,x;
              for(var i in anchors)
              {
                a=anchors[i];
                if((!a)||(typeof a!=='object')) continue;
                
                x=popupx;
                tw=0;
                if(typeof a.L !== 'undefined') 
                {
                  x-=a.L;
                  if(typeof a.HX !== 'undefined') x-=a.HX;
                  tw=pw-x;
                }               
                else if(typeof a.R !== 'undefined') 
                {
                  tw=x+a.R;
                  if(a.Img) tw+=a.Img.W;
                  if(typeof a.HX !== 'undefined') tw-=a.HX;
                }
  
                if(tw<self.MinWidth) tw=self.MinWidth;
                if((self.MaxWidth>0)&&(tw>self.MaxWidth)) tw=self.MaxWidth;
                tw-=fw;
                if((typeof c.MinWidth !== 'undefined')&&(tw<c.MinWidth)) tw=c.MinWidth;
                if(tw<=0) continue;
                
                c.AutoSizeMode='vertical'; // try wrap-ups
                ng_SetClientWidth(to,tw);
                c.Update();
                sz=self.DoMeasureText(o,to);
                an=new Object;
                an[i]=a;
                ai=self.FindAnchor(sz.W,sz.H,an);
                if((!ai.AffectedArea)&&(ai.AnchorObj)) 
                {
                  found=ai.Anchor;
                  minarea=0;
                  minwidth=tw;
                  break;
                }
                else
                {
                  if((ai.AffectedArea>0)&&((ai.AffectedArea<minarea)||(minarea<0))) { minfound=ai.Anchor; minarea=ai.AffectedArea; minwidth=tw; }      
                }
              }
            }
                      
            if(typeof p_anchors !== 'undefined') check_anchors(p_anchors);
            if(found==='') 
            {
              check_anchors(anchors);
              if(typeof p_anchors !== 'undefined')
              {
                // Test anchors non-wraped         
                var ai=this.FindAnchor(nwsz.W,nwsz.H,anchors);
                if((!ai.AffectedArea)&&(ai.AnchorObj)) 
                {
                  // Change back to non-wrapped
                  c.AutoSizeMode='auto';
                  c.Update();
                  found=ai.Anchor; minarea=0; // no collision, use found
                }
                else
                {
                  if((ai.AffectedArea>0)&&((ai.AffectedArea<minarea)||(minarea<0)))  
                  { 
                    // Change back to non-wrapped
                    c.AutoSizeMode='auto';
                    c.Update();
                    found=ai.Anchor; minarea=ai.AffectedArea; 
                  }      
                }
              }
            }
            if((found==='')&&(minfound!='')) 
            {
              ng_SetClientWidth(to,minwidth);
              c.Update();
              found=minfound;
            }
          }
          if(found!=='') this.Anchor=found;
          else {
            if(c.AutoSizeMode!=='auto') {
              c.AutoSizeMode='auto';
              c.Update();
            }
          }
        }
        finally
        {
          ng_EndMeasureElement(to);
        }
      }
    }
    ret=this.__DefaultDoUpdate(o);
  }
  finally
  {
    if(typeof anchor!=='undefined') this.Anchor=anchor;
    else delete this.Anchor;
  }
  return ret;
}

function Create_ngTextHint(def, ref, parent)
{
  ng_MergeDef(def, {
    /*
     *  Group: Definition
     */
    /*  Variable: ParentReferences
     *  ...
     *  Type: bool
     *  Default value: *false*         
     */
    ParentReferences: false,
    Data: {
      /*
       *  Group: Methods
       */
      /*  Function: SetText
       *  Sets hint text.
       *   
       *  Syntax:
       *    void *SetText* (string text)
       *     
       *  Returns:
       *    -     
       */   
      SetText: nghtxt_SetText,
      /*  Function: GetText
       *  Gets hint text.
       *   
       *  Syntax:
       *    string *GetText* ()
       *     
       *  Returns:
       *    Hint text.     
       */   
      GetText: ngc_GetText,
      /*
       *  Group: Events
       */
      /*
       *  Event: OnClick
       */     
      OnClick: null,
      /*  Event: OnSetText
       */
      OnSetText: null,      
      /*  Event: OnGetText
       */
      OnGetText: null
    },
    ControlsPanel: {
      Data: {
        Gestures: {
          tap: true
        }
      }
    },
    /*
     *  Group: Controls
     */
    Controls: {
      /*  Object: Hint
       *  <ngText>       
       */
      Hint: {
        Type: 'ngText',
        Events: {
          OnGetText: nghtxt_OnGetText
        }
      }
    }
  });
  // Add tap gesture to child controls 
  function regdeftap(d)
  {
    if(!d) return;
    if(typeof d.Data === 'undefined') d.Data={};
    if(typeof d.Data.Gestures === 'undefined') d.Data.Gestures={};
    d.Data.Gestures.tap=true;
    if(typeof d.Controls !== 'undefined') {
      for(var i in d.Controls)
        regdeftap(d.Controls[i]);
    }
  }  
  regdeftap(def);
  
  def.OnCreated=ngAddEvent(def.OnCreated, function (c, ref) {
    // Add tap handling to child controls
    function regtap(ctrl)
    {
      var cc=ctrl.ChildControls;
      if(typeof cc !== 'undefined')
        for(var i=cc.length-1;i>=0;i--) 
        {
          cc[i].AddEvent('DoPtrClick',nghtxt_HintDoPtrClick);
          regtap(cc[i]);
        }
    }    
    regtap(c);    
  });
  var c=ngCreateControlAsType(def, 'ngHint', ref, parent);
  if(c) {
    c.__DefaultDoUpdate = c.DoUpdate;
    c.DoUpdate = nghtxt_DoHintUpdate;
    c.DoPtrClick = nghtxt_DoPtrClick;
    c.DoMeasureText = nghtxt_DoMeasureText;
  }
  return c;
}

// --- Controls Registration ---------------------------------------------------

if(typeof ngUserControls === 'undefined') ngUserControls = new Array();
ngUserControls['window'] = {

  OnInit: function() {
    ngRegisterControlType('ngWindow', function() { return new ngWindow; });
    ngRegisterControlType('ngHint', function() { return new ngHint; });
    ngRegisterControlType('ngTextHint', Create_ngTextHint);
  }
};

/*
    http://www.JSON.org/json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    // Opera 9.x problems with long regexp patched by Leen Besselink (http://tech.dir.groups.yahoo.com/group/json/message/1184)
    var cx = new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g"),
    escapable = new RegExp("[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
