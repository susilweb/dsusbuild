function privacyAlert196947000003284069()
{
    var privacyTool = document.getElementById('privacyTool196947000003284069');
    var privacyErr = document.getElementById('privacyErr196947000003284069');
    if(privacyTool !=undefined && !privacyTool.checked )
    {
        privacyErr.style.visibility='visible';
        privacyTool.focus();
        return false;
    }
    return true;
}
function disableErr196947000003284069()
{
    var privacyTool = document.getElementById('privacyTool196947000003284069');
    var privacyErr = document.getElementById('privacyErr196947000003284069');
    if(privacyTool !=undefined && privacyTool.checked && privacyErr !=undefined )
    {
        privacyErr.style.visibility='hidden';
    }
}

/* Do not remove this code. */
function rccallback196947000003284069()
{
if(document.getElementById('recap196947000003284069')!=undefined){
    document.getElementById('recap196947000003284069').setAttribute('captcha-verified',true);
}
if(document.getElementById('recapErr196947000003284069')!=undefined && document.getElementById('recapErr196947000003284069').style.visibility == 'visible' ){
    document.getElementById('recapErr196947000003284069').style.visibility='hidden';
}
}
function reCaptchaAlert196947000003284069()
{
var recap = document.getElementById('recap196947000003284069');
if( recap !=undefined && recap.getAttribute('captcha-verified') == 'false')
{
    document.getElementById('recapErr196947000003284069').style.visibility='visible';
    return false;
}
return true;
}
function validateEmail196947000003284069()
{
var form = document.forms['WebToLeads196947000003284069'];
var emailFld = form.querySelectorAll('[ftype=email]');
var i;
for (i = 0; i < emailFld.length; i++)
{
    var emailVal = emailFld[i].value;
    if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
    {
        var atpos=emailVal.indexOf('@');
        var dotpos=emailVal.lastIndexOf('.');
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
        {
            alert('Please enter a valid email address. ');
            emailFld[i].focus();
            return false;
        }
    }
}
return true;
}

function checkMandatory196947000003284069() {
var mndFileds = new Array('Last Name','Email','Phone','Description');
var fldLangVal = new Array('Name','Email','Phone\x20Number','How\x20Can\x20We\x20Help\x20You\x3F');
for(i=0;i<mndFileds.length;i++) {
  var fieldObj=document.forms['WebToLeads196947000003284069'][mndFileds[i]];
  if(fieldObj) {
    if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
     if(fieldObj.type =='file')
        { 
         alert('Please select a file to upload.'); 
         fieldObj.focus(); 
         return false;
        } 
    alert(fldLangVal[i] +' cannot be empty.'); 
              fieldObj.focus();
              return false;
    }  else if(fieldObj.nodeName=='SELECT') {
             if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
        alert(fldLangVal[i] +' cannot be none.'); 
        fieldObj.focus();
        return false;
       }
    } else if(fieldObj.type =='checkbox'){
        if(fieldObj.checked == false){
        alert('Please accept  '+fldLangVal[i]);
        fieldObj.focus();
        return false;
       } 
     } 
     try {
         if(fieldObj.name == 'Last Name') {
        name = fieldObj.value;
           }
    } catch (e) {}
    }
}
if(!validateEmail196947000003284069()){return false;}

if(!privacyAlert196947000003284069()){return false;}

if(!reCaptchaAlert196947000003284069()){return false;}
document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
}

function tooltipShow196947000003284069(el){
var tooltip = el.nextElementSibling;
var tooltipDisplay = tooltip.style.display;
if(tooltipDisplay == 'none'){
var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
for(i=0; i<allTooltip.length; i++){
    allTooltip[i].style.display='none';
}
tooltip.style.display = 'block';
}else{
tooltip.style.display='none';
}
}