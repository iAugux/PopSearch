var defaultStyles = [
{ name:'Light', content:'\
html {\
   height: 100%;\
}\
#ps_body {\
   background-color: rgba(0,0,0,0.5);\
}\
#ps_body.iframed {\
   height: 50%;\
   display: -webkit-box;\
   -webkit-box-pack: center;\
   -webkit-box-align: center;\
}\
#ps_outerdiv {\
   width: auto;\
   height: auto;\
   margin: 0;\
   padding: 1.5ex 3ex 1.5ex 3ex;\
   border-style: none;\
   font-family: Helvetica !important;\
   font-size: 14px;\
}\
.iframed #ps_outerdiv {\
   border-radius: 10px;\
   -webkit-box-shadow: 2px 2px 4px #666;\
   background: -webkit-gradient( \
      linear, \
      left top, \
      left bottom, \
      color-stop(0,rgb(254,254,254)), \
      color-stop(1,rgb(231,231,231)) );\
}\
#ps_upperdiv {\
   width: auto;\
   height: auto;\
   margin:  0;\
   padding: 0;\
   border-style: none;\
}\
#ps_upperdiv > *  {\
   margin-top: 0;\
   margin-bottom: 0;\
   vertical-align: middle;\
}\
#ps_lowerdiv {\
   width: auto;\
   height: auto;\
   margin:  0;\
   padding: 0;\
   border-style: none;\
}\
#ps_historymenu {\
   width: auto;\
   max-width: 400px;\
   background-color: rgb(255,255,255);\
   font: 15px Helvetica;\
}\
.ps_label {\
   color: black;\
   font-size: 14px;\
   text-shadow: white 1px 1px 0px;\
}\
#ps_queryfield {\
   width: 10em;\
   height: auto;\
   border: 1px solid #a0a0a0;\
   padding: 2px 3px;\
   background: -webkit-gradient( \
      linear, \
      left top, \
      left bottom, \
      color-stop(0,rgb(255,255,255)), \
      color-stop(1,rgb(255,255,255)) );\
   color: black;\
   font: 15px Helvetica;\
}\
.ps_menu {\
   width: auto;\
   height: auto;\
   padding: 2px;\
   border: 1px solid #a0a0a0;\
   border-radius: 6px;\
   background-color: white;\
   color: black;\
   font: 14px Helvetica;\
   text-shadow: white 1px 1px 0px;\
}\
#ps_enginemenu {\
}\
.ps_button {\
   width: auto;\
   height: auto;\
   padding: 2px;\
   border: 1px solid #a0a0a0;\
   border-radius: 5px;\
   background: -webkit-gradient( \
      linear, \
      left top, \
      left bottom, \
      color-stop(0,rgb(231,231,231)), \
      color-stop(1,rgb(254,254,254)) );\
   /* this line is a spacer */ \
   color: black;\
   text-align: center;\
   font: 13px Helvetica;\
   text-shadow: white 1px 1px 0px;\
}\
#ps_gobutton {\
   margin-left: 10px;\
   padding-left: 10px;\
   padding-right: 10px;\
   font-weight: bold;\
}\
#ps_settingsbutton {\
   margin-left: 20px;\
   padding-left: 10px;\
   padding-right: 10px;\
}\
'},
{ name:'Dark', content:'\
html {\
   height: 100%;\
}\
#ps_body {\
   background-color: rgba(255,255,255,0.6);\
}\
#ps_body.iframed {\
   height: 50%;\
   display: -webkit-box;\
   -webkit-box-pack: center;\
   -webkit-box-align: center;\
}\
#ps_outerdiv {\
   width: auto;\
   height: auto;\
   margin: 0;\
   padding: 1.5ex 3ex 1.5ex 3ex;\
   border-style: none;\
   border-radius: 10px;\
   -webkit-box-shadow: 2px 2px 4px #888;\
   background: -webkit-gradient( \
      linear, \
      left top, \
      left bottom, \
      color-stop(0,rgb(128,128,128)), \
      color-stop(1,rgb(24,24,24)) );\
   font-family: Helvetica !important;\
   font-size: 14px;\
}\
#ps_upperdiv {\
   width: auto;\
   height: auto;\
   margin:  0;\
   padding: 0;\
   border-style: none;\
}\
#ps_upperdiv > *  {\
   margin-top: 0;\
   margin-bottom: 0;\
   vertical-align: middle;\
}\
#ps_lowerdiv {\
   width: auto;\
   height: auto;\
   margin:  0;\
   padding: 0;\
   border-style: none;\
}\
#ps_historymenu {\
   width: auto;\
   max-width: 400px;\
   background-color: rgb(224,224,224);\
   font: 15px Helvetica;\
}\
.ps_label {\
   color: white;\
   font-size: 14px;\
   text-shadow: none;\
}\
#ps_queryfield {\
   width: 10em;\
   height: auto;\
   border: 1px solid black;\
   padding: 2px 3px;\
   background: -webkit-gradient( \
      linear, \
      left top, \
      left bottom, \
      color-stop(0,rgb(192,192,192)), \
      color-stop(1,rgb(224,224,224)) );\
   color: black;\
   font: 15px Helvetica;\
}\
.ps_menu {\
   width: auto;\
   height: auto;\
   padding: 2px;\
   border: 1px solid black;\
   border-radius: 6px;\
   background-color: black;\
   color: white;\
   font: 14px Helvetica;\
   text-shadow: none;\
}\
#ps_enginemenu {\
}\
.ps_button {\
   width: auto;\
   height: auto;\
   padding: 2px;\
   border: 1px solid black;\
   border-radius: 5px;\
   background: -webkit-gradient( \
      linear, \
      left top, \
      left bottom, \
      color-stop(0.0,rgb(100,100,100)), \
      color-stop(0.5,rgb(14,14,14)), \
      color-stop(1.0,rgb(74,74,74)) );\
   color: white;\
   text-align: center;\
   font: 13px Helvetica;\
   text-shadow: none;\
}\
#ps_gobutton {\
   margin-left: 10px;\
   padding-left: 10px;\
   padding-right: 10px;\
   font-weight: bold;\
}\
#ps_settingsbutton {\
   margin-left: 20px;\
   padding-left: 10px;\
   padding-right: 10px;\
}\
'}
];
