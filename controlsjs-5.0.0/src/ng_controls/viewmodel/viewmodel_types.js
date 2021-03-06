/*!
 * Controls.js - viewmodel_types.js
 * http://controlsjs.com/
 *
 * Copyright (c) 2014 Position s.r.o.  All rights reserved.
 *
 * This version of Controls.js is licensed under the terms of GNU General Public License v3.
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 * The commercial license can be purchased at Controls.js website.
 */









// --- English Resources -------------------------------------------------------
if(typeof ngc_Lang === 'undefined') ngc_Lang=new Array();
if(typeof ngc_Lang['en'] === 'undefined') ngc_Lang['en']=new Array();

ngc_Lang['en']['viewmodel_err_www']   = 'Value is not a WWW address.';
ngc_Lang['en']['viewmodel_err_email'] = 'Value is not an e-mail address.';
ngc_Lang['en']['viewmodel_err_ip4']   = 'Value is not an IPv4 address.';
ngc_Lang['en']['viewmodel_err_ip6']   = 'Value is not an IPv6 address.';

ngc_Lang['en']['viewmodel_err_notphone']                   = 'Value is not a valid phone number.';
ngc_Lang['en']['viewmodel_err_invalidphoneprefix']         = 'Invalid phone prefix (allowed: %s).';
ngc_Lang['en']['viewmodel_err_invalidphoneprefix_novalue'] = 'Invalid phone prefix.';

// --- Czech Resources -------------------------------------------------------
if(typeof ngc_Lang['cz'] === 'undefined') ngc_Lang['cz']=new Array();

ngc_Lang['cz']['viewmodel_err_www']   = 'Hodnota není WWW adresa.';
ngc_Lang['cz']['viewmodel_err_email'] = 'Hodnota není e-mailová adresa.';
ngc_Lang['cz']['viewmodel_err_ip4']   = 'Hodnota není IPv4 adresa.';
ngc_Lang['cz']['viewmodel_err_ip6']   = 'Hodnota není IPv6 adresa.';

ngc_Lang['cz']['viewmodel_err_notphone']                   = 'Hodnota není telefonní číslo.';
ngc_Lang['cz']['viewmodel_err_invalidphoneprefix']         = 'Neplatná telefonní předvolba (platné: %s).';
ngc_Lang['cz']['viewmodel_err_invalidphoneprefix_novalue'] = 'Neplatná telefonní předvolba .';

// --- Slovak Resources -------------------------------------------------------
if(typeof ngc_Lang['sk'] === 'undefined') ngc_Lang['sk']=new Array();

ngc_Lang['sk']['viewmodel_err_www']   = 'Hodnota nie je WWW adresa.';
ngc_Lang['sk']['viewmodel_err_email'] = 'Hodnota nie je e-mailová adresa.';
ngc_Lang['sk']['viewmodel_err_ip4']   = 'Hodnota nie je IPv4 adresa.';
ngc_Lang['sk']['viewmodel_err_ip6']   = 'Hodnota nie je IPv6 adresa.';

ngc_Lang['sk']['viewmodel_err_notphone']                   = 'Hodnota nie je telefónne číslo.';
ngc_Lang['sk']['viewmodel_err_invalidphoneprefix']         = 'Neplatná telefónna predvoľba (platné: %s).';
ngc_Lang['sk']['viewmodel_err_invalidphoneprefix_novalue'] = 'Neplatná telefónna predvoľba .'; 

/*  Class: ngFieldDef_Bool
 *  <ngViewModel> Boolean field (based on <ngFieldDef> BOOL).
 *  
 *  Syntax:
 *    new *ngFieldDef_Bool* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Bool(id, attrs) {
  ngFieldDefCreateAs(this,id,'BOOL',attrs);
}

/*  Class: ngFieldDef_Integer
 *  <ngViewModel> Integer field (based on <ngFieldDef> INTEGER).
 *  
 *  Syntax:
 *    new *ngFieldDef_Integer* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Integer(id, attrs) {
  ngFieldDefCreateAs(this,id,'INTEGER',attrs);
}

/*  Class: ngFieldDef_Float
 *  <ngViewModel> Float field (based on <ngFieldDef> FLOAT).
 *  
 *  Syntax:
 *    new *ngFieldDef_Float* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Float(id, attrs) {
  ngFieldDefCreateAs(this,id,'FLOAT',attrs);
}

/*  Class: ngFieldDef_SByte
 *  <ngViewModel> Signed byte field (based on <ngFieldDef> SBYTE).
 *  
 *  Syntax:
 *    new *ngFieldDef_SByte* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_SByte(id, attrs) {
  ngFieldDefCreateAs(this,id,'SBYTE',attrs);
}

/*  Class: ngFieldDef_Byte
 *  <ngViewModel> Byte field (based on <ngFieldDef> BYTE).
 *  
 *  Syntax:
 *    new *ngFieldDef_Byte* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Byte(id, attrs) {
  ngFieldDefCreateAs(this,id,'BYTE',attrs);
}

/*  Class: ngFieldDef_Short
 *  <ngViewModel> Short field (based on <ngFieldDef> SHORT).
 *  
 *  Syntax:
 *    new *ngFieldDef_Short* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Short(id, attrs) {
  ngFieldDefCreateAs(this,id,'SHORT',attrs);
}

/*  Class: ngFieldDef_UShort
 *  <ngViewModel> Unsigned short field (based on <ngFieldDef> USHORT).
 *  
 *  Syntax:
 *    new *ngFieldDef_UShort* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_UShort(id, attrs) {
  ngFieldDefCreateAs(this,id,'USHORT',attrs);
}

/*  Class: ngFieldDef_Long
 *  <ngViewModel> Long field (based on <ngFieldDef> LONG).
 *  
 *  Syntax:
 *    new *ngFieldDef_Long* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Long(id, attrs) {                    
  ngFieldDefCreateAs(this,id,'LONG',attrs);
}

/*  Class: ngFieldDef_ULong
 *  <ngViewModel> Unsigned long field (based on <ngFieldDef> ULONG).
 *  
 *  Syntax:
 *    new *ngFieldDef_ULong* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_ULong(id, attrs) {
  ngFieldDefCreateAs(this,id,'ULONG',attrs);
}

/*  Class: ngFieldDef_Decimal
 *  <ngViewModel> Decimal field (based on <ngFieldDef> DECIMAL).
 *  
 *  Syntax:
 *    new *ngFieldDef_Decimal* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Decimal(id, attrs) {
  ngFieldDefCreateAs(this,id,'DECIMAL',attrs);
}

/*  Class: ngFieldDef_String
 *  <ngViewModel> String field (based on <ngFieldDef> NVARCHAR).
 *  
 *  Syntax:
 *    new *ngFieldDef_String* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_String(id, attrs) {
  ngFieldDefCreateAs(this,id,((ng_typeObject(attrs))&&(attrs['Size']>0)) ? 'NVARCHAR' : 'STRING',attrs);
}

/*  Class: ngFieldDef_Timestamp
 *  <ngViewModel> Timestamp field (based on <ngFieldDef> TIMESTAMP).
 *  
 *  Syntax:
 *    new *ngFieldDef_Timestamp* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Timestamp(id, attrs) {
  ngFieldDefCreateAs(this,id,'TIMESTAMP',attrs);
}

/*  Class: ngFieldDef_DateTime
 *  <ngViewModel> Date and time field (based on <ngFieldDef> DATETIME).
 *  
 *  Syntax:
 *    new *ngFieldDef_DateTime* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_DateTime(id, attrs) {
  ngFieldDefCreateAs(this,id,'DATETIME',attrs);
}

/*  Class: ngFieldDef_Date
 *  <ngViewModel> Date field (based on <ngFieldDef> DATE).
 *  
 *  Syntax:
 *    new *ngFieldDef_Date* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Date(id, attrs) {
  ngFieldDefCreateAs(this,id,'DATE',attrs);
}

/*  Class: ngFieldDef_Time
 *  <ngViewModel> Time field (based on <ngFieldDef> TIME).
 *  
 *  Syntax:
 *    new *ngFieldDef_Time* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Time(id, attrs) {
  ngFieldDefCreateAs(this,id,'TIME',attrs);
}

/*  Class: ngFieldDef_UTCTimestamp
 *  <ngViewModel> UTC timestamp field (based on <ngFieldDef> UTCTIMESTAMP).
 *  
 *  Syntax:
 *    new *ngFieldDef_UTCTimestamp* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_UTCTimestamp(id, attrs) {
  ngFieldDefCreateAs(this,id,'UTCTIMESTAMP',attrs);
}

/*  Class: ngFieldDef_UTCDateTime
 *  <ngViewModel> UTC date and time field (based on <ngFieldDef> UTCDATETIME).
 *  
 *  Syntax:
 *    new *ngFieldDef_UTCDateTime* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_UTCDateTime(id, attrs) {
  ngFieldDefCreateAs(this,id,'UTCDATETIME',attrs);
}

/*  Class: ngFieldDef_UTCDate
 *  <ngViewModel> UTC date field (based on <ngFieldDef> UTCDATE).
 *  
 *  Syntax:
 *    new *ngFieldDef_UTCDate* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_UTCDate(id, attrs) {
  ngFieldDefCreateAs(this,id,'UTCDATE',attrs);
}

/*  Class: ngFieldDef_UTCTime
 *  <ngViewModel> UTC time field (based on <ngFieldDef> UTCTIME).
 *  
 *  Syntax:
 *    new *ngFieldDef_UTCTime* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_UTCTime(id, attrs) {
  ngFieldDefCreateAs(this,id,'UTCTIME',attrs);
}

function ngfd_ArrayDoTypedValue(v)
{
  if(v!==null)
  {
    if(typeof v!=='object')
      throw new ngFieldDefException(this, FIELDDEF_ERR_TYPE); // type error

    if(ng_typeObject(this.ValueFieldDef))
    {        
      var errs=null;
      for(var k in v)
      {
        try
        {
          v[k]=this.ValueFieldDef.TypedValue(v[k]);
        }
        catch(e)
        {
          e.FieldDef=''+k;
          if(errs===null) errs={};
          errs[k]=e;
        }
      }
      if(errs!==null)
      {
        throw new ngFieldDefException(this, FIELDDEF_ERR_TYPE,'viewmodel_err_arrayitem',errs); // type error
      }                      
    }
  }
  return v;
}

function ngfd_ArrayFormatItemError(err)
{
  return ngTxt('viewmodel_err_type');
}

function ngfd_ArrayFormatError(err)
{
  if(err.ErrorMessage=='viewmodel_err_arrayitem') {
    return this.DoFormatItemError(err);
  }
  return ng_ViewModelFormatError(err);  
}

/*  Class: ngFieldDef_Array
 *  <ngViewModel> Array field (based on <ngFieldDef> ARRAY).
 *  
 *  Syntax:
 *    new *ngFieldDef_Array* ([string id ='', object attrs={}, object valfielddef=null])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 *    valfielddef - ngFieldDef instance used for array value type casting and validation, null if validation is not required 
 */    
function ngFieldDef_Array(id, attrs, valfielddef) {
  ngFieldDefCreateAs(this,id,'ARRAY',attrs);
  this.ValueFieldDef=ngVal(valfielddef,null);
  this.DoTypedValue = ngfd_ArrayDoTypedValue;
  this.DoFormatError = ngfd_ArrayFormatError;  
  this.DoFormatItemError = ngfd_ArrayFormatItemError;
}

function ngfd_ObjectDoTypedValue(v)
{
  if(v!==null)
  {
    if(ng_typeObject(this.PropsFieldDefs))
    {        
      var errs=null;
      for(var k in this.PropsFieldDefs)
      {
        try
        {
          v[k]=this.PropsFieldDefs[k].TypedValue(v[k]);
        }
        catch(e)
        {
          e.FieldDef=''+k;
          if(errs===null) errs={};
          errs[k]=e;
        }
      }
      if(errs!==null)
      {
        throw new ngFieldDefException(this, FIELDDEF_ERR_TYPE,'viewmodel_err_objproperty',errs); // type error
      }                      
    }
  }
  return v;
}

function ngfd_ObjectDoFormatPropertyError(err)
{
  return ngTxt('viewmodel_err_type');
}

function ngfd_ObjectFormatError(err)
{
  if(err.ErrorMessage=='viewmodel_err_objproperty') {
    return this.DoFormatPropertyError(err);
  }
  return ng_ViewModelFormatError(err);  
}

/*  Class: ngFieldDef_Object
 *  <ngViewModel> Object field (based on <ngFieldDef> OBJECT).
 *  
 *  Syntax:
 *    new *ngFieldDef_Object* ([string id ='', object attrs={}, object propsfielddefs=null])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 *    propsfielddefs - associative array of ngFieldDef instances used for object properties value type casting and validation, null if validation is not required 
 */    
function ngFieldDef_Object(id, attrs, propsfielddefs) {
  ngFieldDefCreateAs(this,id,'OBJECT',attrs);
  this.PropsFieldDefs=ngVal(propsfielddefs,null);
  this.DoTypedValue = ngfd_ObjectDoTypedValue;
  this.DoFormatError = ngfd_ObjectFormatError;  
  this.DoFormatPropertyError = ngfd_ObjectDoFormatPropertyError;
}

function ngfd_WWWDoTypedValue(v)
{
  var s=ng_toString(v);
  if(s!='') 
  {
    v=ng_formatWWW(v,null);
    if(v===null) throw new ngFieldDefException(this, FIELDDEF_ERR, 'viewmodel_err_www');
  }
  return v;
}

/*  Class: ngFieldDef_WWW
 *  <ngViewModel> WWW string field (based on <ngFieldDef> NVARCHAR).
 *  
 *  Syntax:
 *    new *ngFieldDef_WWW* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_WWW(id, attrs)
{
  ngFieldDefCreateAs(this,id,((ng_typeObject(attrs))&&(attrs['Size']>0)) ? 'NVARCHAR' : 'STRING',attrs);
  this.DoTypedValue = ngfd_WWWDoTypedValue;
}

function ngfd_EmailDoTypedValue(v)
{
  var s=ng_toString(v);
  if(s=='@') s='';
  if((s!='')&&(!ng_isEmail(s))) throw new ngFieldDefException(this, FIELDDEF_ERR, 'viewmodel_err_email'); 
  return v;
}

/*  Class: ngFieldDef_Email
 *  <ngViewModel> Email string field (based on <ngFieldDef> NVARCHAR).
 *  
 *  Syntax:
 *    new *ngFieldDef_Email* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Email(id, attrs)
{
  ngFieldDefCreateAs(this,id,((ng_typeObject(attrs))&&(attrs['Size']>0)) ? 'NVARCHAR' : 'STRING',attrs);
  this.DoTypedValue = ngfd_EmailDoTypedValue;
}

function ngfd_IP4DoTypedValue(v)
{
  var s=ng_toString(v);
  if(s=='@') s='';
  if((s!='')&&(!ng_isIP4(s))) throw new ngFieldDefException(this, FIELDDEF_ERR, 'viewmodel_err_ip4'); 
  return v;
}

/*  Class: ngFieldDef_IP4
 *  <ngViewModel> IP4 string field (based on <ngFieldDef> NVARCHAR).
 *  
 *  Syntax:
 *    new *ngFieldDef_IP4* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_IP4(id, attrs)
{
  ngFieldDefCreateAs(this,id,((ng_typeObject(attrs))&&(attrs['Size']>0)) ? 'NVARCHAR' : 'STRING',attrs);
  this.DoTypedValue = ngfd_IP4DoTypedValue;
}

function ngfd_IP6DoTypedValue(v)
{
  var s=ng_toString(v);
  if(s=='@') s='';
  if((s!='')&&(!ng_isIP6(s))) throw new ngFieldDefException(this, FIELDDEF_ERR, 'viewmodel_err_ip6'); 
  return v;
}

/*  Class: ngFieldDef_IP6
 *  <ngViewModel> IP6 string field (based on <ngFieldDef> NVARCHAR).
 *  
 *  Syntax:
 *    new *ngFieldDef_IP6* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_IP6(id, attrs)
{
  ngFieldDefCreateAs(this,id,((ng_typeObject(attrs))&&(attrs['Size']>0)) ? 'NVARCHAR' : 'STRING',attrs);
  this.DoTypedValue = ngfd_IP6DoTypedValue;
}

function ngfd_CurrencyFormatString(v)
{
  var prefix=ngVal(this.Attrs['CurrencyPrefix'],'');
  var suffix=ngVal(this.Attrs['CurrencySuffix'],'');

  var unit=ngVal(this.Attrs['CurrencyUnits'],'');
  if(unit!='') suffix+=' '+unit;
  
  v=ng_toDECIMAL(v,this.Size,this.Precision,null);
  if(v===null) return '';
  var zeros=ngVal(this.Attrs['Zeros'],1);
  if((zeros==0)||(zeros==1))
  {
    var i=v.lastIndexOf('.');
    if(i>=0)
    {
      for(var l=v.length-1;l>=i;l--)
      {
        if(v.charAt(l)=='.')
        {
           if(zeros==1) l++;
           else l--;
           break;
        }
        if(v.charAt(l)!='0') break;
      }
      v=v.substr(0,l+1);
    }
  }
  v=ng_Format3Num(v);
  if(suffix!='') v=ng_AddSuffix(v, suffix, true);
  if(prefix!='') v=ng_AddPrefix(v, prefix, true);
  return v; 
}

function ngfd_CurrencyParseString(v)
{           
  var prefix=ngVal(this.Attrs['CurrencyPrefix'],'');
  var suffix=ngVal(this.Attrs['CurrencySuffix'],'');

  var unit=ngVal(this.Attrs['CurrencyUnits'],'');
  if(unit!='') suffix=ng_Trim(suffix+' '+unit);

  if(suffix!='') v=ng_StripSuffix(v, suffix, true);
  if(prefix!='') v=ng_StripPrefix(v, prefix, true);
  
  return ng_toDECIMAL(ng_Unformat3Num(v),this.Size,this.Precision,null);
}

/*  Class: ngFieldDef_Currency
 *  <ngViewModel> Currency field (based on <ngFieldDef> DECIMAL).
 *  
 *  Syntax:
 *    new *ngFieldDef_Currency* ([string id ='', string units='', object attrs={}, string fieldtype = 'DECIMAL'])
 *    
 *  Parameters:
 *    id - field id
 *    units - currency unit 
 *    attrs - field attributes
 *    fieldtype - optional base data type 
 */    
function ngFieldDef_Currency(id, units, attrs, fieldtype)
{
  attrs=ngVal(attrs,{}); 
  fieldtype=ngVal(fieldtype,'DECIMAL');
  attrs['CurrencyUnits']=ngVal(units,'');
  if(fieldtype=='DECIMAL') {
    attrs['Size'] = ngVal(attrs['Size'],23);
    attrs['Precision'] = ngVal(attrs['Precision'],3);
  }
  ngFieldDefCreateAs(this,id,fieldtype,attrs);

  this.DoFormatString = ngfd_CurrencyFormatString;
  this.DoParseString = ngfd_CurrencyParseString;
}

function ngfd_DistanceFormatString(v) {
  return ng_formatDistance(v, '', ngVal(this.Precision,2));
}

function ngfd_DistanceParseString(v) {           
  return ng_parseDistance(v,null);
}

/*  Class: ngFieldDef_Distance
 *  <ngViewModel> Distance field (based on <ngFieldDef> FLOAT).
 *  
 *  Syntax:
 *    new *ngFieldDef_Distance* ([string id ='', object attrs={}, string fieldtype = 'FLOAT'])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 *    fieldtype - optional base data type 
 */    
function ngFieldDef_Distance(id, attrs, fieldtype)
{
  fieldtype=ngVal(fieldtype,'FLOAT');
  ngFieldDefCreateAs(this,id,fieldtype,attrs);

  this.DoFormatString = ngfd_DistanceFormatString;
  this.DoParseString = ngfd_DistanceParseString;
}

function ngfd_AreaFormatString(v) {
  return ng_formatArea(v, '', ngVal(this.Precision,2));
}

function ngfd_AreaParseString(v) {           
  return ng_parseArea(v,null);
}

/*  Class: ngFieldDef_Area
 *  <ngViewModel> Area field (based on <ngFieldDef> FLOAT).
 *  
 *  Syntax:
 *    new *ngFieldDef_Area* ([string id ='', object attrs={}, string fieldtype = 'FLOAT'])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 *    fieldtype - optional base data type 
 */    
function ngFieldDef_Area(id, attrs, fieldtype)
{
  fieldtype=ngVal(fieldtype,'FLOAT');
  ngFieldDefCreateAs(this,id,fieldtype,attrs);

  this.DoFormatString = ngfd_AreaFormatString;
  this.DoParseString = ngfd_AreaParseString;
}

function ngfd_SIUnitsFormatString(v) {
  var units=ng_toString(this.Attrs['SIUnits']);
  return ng_formatSIUnits(v, units, '', this.Attrs['SIAllowedPref'], ngVal(this.Precision,2));
}

function ngfd_SIUnitsParseString(v) {           
  var units=ng_toString(this.Attrs['SIUnits']);
  return ng_parseSIUnits(v, units, null, this.Attrs['SIAllowedPref']);
}

/*  Class: ngFieldDef_SIUnits
 *  <ngViewModel> SIUnits field (based on <ngFieldDef> FLOAT).
 *  
 *  Syntax:
 *    new *ngFieldDef_SIUnits* ([string id ='', string units='', object attrs={}, array allowedprefixes=undefined, string fieldtype = 'FLOAT'])
 *    
 *  Parameters:
 *    id - field id
 *    units - field units 
 *    attrs - field attributes
 *    allowedprefixes - allowed SI prefixes 
 *    fieldtype - optional base data type 
 */    
function ngFieldDef_SIUnits(id, units, attrs, allowedpref, fieldtype)
{
  attrs=ngVal(attrs,{}); 
  fieldtype=ngVal(fieldtype,'FLOAT');
  attrs['SIUnits']=ngVal(units,'');
  attrs['SIAllowedPref']=allowedpref;
  ngFieldDefCreateAs(this,id,fieldtype,attrs);

  this.DoFormatString = ngfd_SIUnitsFormatString;
  this.DoParseString = ngfd_SIUnitsParseString;
}

function ngfd_MinutesFormatString(v) {
  return ng_formatMinutes(v, '', ngVal(this.Precision,0)>0);
}

function ngfd_MinutesParseString(v) {           
  return ng_parseMinutes(v,null);
}

/*  Class: ngFieldDef_Minutes
 *  <ngViewModel> Minutes field (based on <ngFieldDef> FLOAT).
 *  
 *  Syntax:
 *    new *ngFieldDef_Minutes* ([string id ='', object attrs={}, string fieldtype = 'INTEGER'])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 *    fieldtype - optional base data type 
 */    
function ngFieldDef_Minutes(id, attrs, fieldtype)
{
  fieldtype=ngVal(fieldtype,'INTEGER');
  ngFieldDefCreateAs(this,id,fieldtype,attrs);

  this.DoFormatString = ngfd_MinutesFormatString;
  this.DoParseString = ngfd_MinutesParseString;
}

function ngfd_SecondsFormatString(v) {
  return ng_formatSeconds(v, '', ngVal(this.Precision,0)>0);
}

function ngfd_SecondsParseString(v) {           
  return ng_parseSeconds(v,null);
}

/*  Class: ngFieldDef_Seconds
 *  <ngViewModel> Seconds field (based on <ngFieldDef> FLOAT).
 *  
 *  Syntax:
 *    new *ngFieldDef_Seconds* ([string id ='', object attrs={}, string fieldtype = 'INTEGER'])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 *    fieldtype - optional base data type 
 */    
function ngFieldDef_Seconds(id, attrs, fieldtype)
{
  fieldtype=ngVal(fieldtype,'INTEGER');
  ngFieldDefCreateAs(this,id,fieldtype,attrs);

  this.DoFormatString = ngfd_SecondsFormatString;
  this.DoParseString = ngfd_SecondsParseString;
}

function ngfd_BytesFormatString(v) {
  return ng_formatBytes(v, '', ngVal(this.Precision,0)>0);
}

function ngfd_BytesParseString(v) {           
  return ng_parseBytes(v,null);
}

/*  Class: ngFieldDef_Bytes
 *  <ngViewModel> Bytes field (based on <ngFieldDef> FLOAT).
 *  
 *  Syntax:
 *    new *ngFieldDef_Bytes* ([string id ='', object attrs={}, string fieldtype = 'INTEGER'])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 *    fieldtype - optional base data type 
 */    
function ngFieldDef_Bytes(id, attrs, fieldtype)
{
  fieldtype=ngVal(fieldtype,'INTEGER');
  ngFieldDefCreateAs(this,id,fieldtype,attrs);

  this.DoFormatString = ngfd_BytesFormatString;
  this.DoParseString = ngfd_BytesParseString;
}

function ngfd_IsPhone(v) {
  return ng_isPhone(v,false,ngVal(this.Attrs['PhoneAllowShortcode'],false));
}

function ngfd_PhoneFormatString(v) {   
  return(this.IsPhone(v) ? ng_FormatPhone(v, v, ngVal(this.Attrs['PhoneZeros'],false),ngVal(this.Attrs['PhoneSeparator'],' ')) : v);
}

function ngfd_PhoneEditString(v) {
  var s=ng_UnformatPhone(v,v);
  return (this.IsPhone(s) ? s : v);
}   

function ngfd_PhoneParseString(v) {
  var s=ng_UnformatPhone(v,v);
  return (this.IsPhone(s) ? s : v);
}

function ngfd_PhoneFormatError(err)
{
  if(err.ErrorMessage=='viewmodel_err_invalidphoneprefix')
  {
    var prefixes='';
    var allowed=this.Attrs['PhoneAllowedPrefixes'];
    for(var i in allowed)
    {
      if(prefixes!='') prefixes+=', ';
      prefixes+=allowed[i];
    }
    if(prefixes=='') return ngTxt('viewmodel_err_invalidphoneprefix_novalue');
    return ng_sprintf(ngTxt('viewmodel_err_invalidphoneprefix'),prefixes);
  }
  return ng_ViewModelFormatError(err);  
}

function ngfd_PhoneTypedValue(v)
{
  if(v!=null)
  {
    var s=ng_toString(v,null);
    if(s===null) return s;
    
    var allowed=this.Attrs['PhoneAllowedPrefixes'];
    var allowscode=ngVal(this.Attrs['PhoneAllowShortcode'],false);

    var prefix=this.Attrs['PhonePrefix'];
    var op=ngVal(this.Attrs['PhonePrefixOperation'],!ng_isEmpty(prefix) ? NG_PHONE_PREFIX_ADD : NG_PHONE_PREFIX_DONTCHANGE);
    prefix=ngVal(prefix,'');

    var n=ng_NormalizePhone(s,op,prefix);
    if((n===false)||(!ng_isPhone(n,!ng_isEmpty(allowed) ? false : true,allowscode,this.Attrs['PhoneAllowedShortcodes']))) 
      throw new ngFieldDefException(this, FIELDDEF_ERR, 'viewmodel_err_notphone');
    
    if(!ng_isEmpty(allowed))
    {
      if((!allowscode)||(!ng_isShortCode(n)))
      {
        if(!ng_hasPhoneValidPrefix(n, false, allowed))
          throw new ngFieldDefException(this, FIELDDEF_ERR, 'viewmodel_err_invalidphoneprefix');
      }
    }
    v=n;
  }
  return v;  
}

/*  Class: ngFieldDef_Phone
 *  <ngViewModel> Phone field (based on <ngFieldDef> NVARCHAR).
 *  
 *  Syntax:
 *    new *ngFieldDef_Phone* ([string id ='', object attrs={}])
 *    
 *  Parameters:
 *    id - field id
 *    attrs - field attributes
 */    
function ngFieldDef_Phone(id, attrs)
{
  this.Size=NG_PHONE_MAXLENGTH;
  ngFieldDefCreateAs(this,id,((ng_typeObject(attrs))&&(attrs['Size']>0)) ? 'NVARCHAR' : 'STRING',attrs);

  this.IsPhone = ngfd_IsPhone;
  
  this.DoFormatError = ngfd_PhoneFormatError;
  this.DoTypedValue = ngfd_PhoneTypedValue; 
  this.DoFormatString = ngfd_PhoneFormatString;
  this.DoEditString = ngfd_PhoneEditString;
  this.DoParseString = ngfd_PhoneParseString;
}
