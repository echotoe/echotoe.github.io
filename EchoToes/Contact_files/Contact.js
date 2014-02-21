// Created by iWeb 3.0.4 local-build-20140220

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,325),url:'Contact_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Contact_files/stroke_1.png'},{rect:new IWRect(2,-2,382,4),url:'Contact_files/stroke_2.png'},{rect:new IWRect(384,-2,4,4),url:'Contact_files/stroke_3.png'},{rect:new IWRect(384,2,4,325),url:'Contact_files/stroke_4.png'},{rect:new IWRect(384,327,4,5),url:'Contact_files/stroke_5.png'},{rect:new IWRect(2,327,382,5),url:'Contact_files/stroke_6.png'},{rect:new IWRect(-2,327,4,5),url:'Contact_files/stroke_7.png'}],new IWSize(386,329))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Contact_files/ContactMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Contact_files','shapeimage_2','0');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
