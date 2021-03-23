  var box = document.createElement('div');
  box.setAttribute('id', 'box');
  var st = box.style;

  var topLeft = document.createElement('input');
  var topRight = document.createElement('input');
  var bottomLeft = document.createElement('input');
  var bottomRight = document.createElement('input');

  var topLeft1 = document.createElement('input');
  var topRight1 = document.createElement('input');
  var bottomLeft1 = document.createElement('input');
  var bottomRight1 = document.createElement('input');

  topLeft.setAttribute('id', 'topLeft');
  topLeft.setAttribute('min', '0%');
  topLeft.setAttribute('max', '100%');
  topLeft.setAttribute('step','0');
  
  topRight.setAttribute('id', 'topRight');
  topRight.setAttribute('min', '0%');
  topRight.setAttribute('max', '100%');
  topRight.setAttribute('step','0');
  
  bottomRight.setAttribute('id', 'bottomRight');
  bottomRight.setAttribute('min', '0%');
  bottomRight.setAttribute('max', '100%');
  bottomRight.setAttribute('step','0');

  bottomLeft.setAttribute('id', 'bottomLeft');
  bottomLeft.setAttribute('min', '0%');
  bottomLeft.setAttribute('max', '100%');
  bottomLeft.setAttribute('step','0');

  topLeft1.setAttribute('id', 'topLeft1');
  topLeft1.setAttribute('min', '0%');
  topLeft1.setAttribute('max', '100%');
  topLeft1.setAttribute('step','0');
  
  topRight1.setAttribute('id', 'topRight1');
  topRight1.setAttribute('min', '0%');
  topRight1.setAttribute('max', '100%');
  topRight1.setAttribute('step','0');
  
  bottomRight1.setAttribute('id', 'bottomRight1');
  bottomRight1.setAttribute('min', '0%');
  bottomRight1.setAttribute('max', '100%');
  bottomRight1.setAttribute('step','0');
  
  bottomLeft1.setAttribute('id', 'bottomLeft1');
  bottomLeft1.setAttribute('min', '0%');
  bottomLeft1.setAttribute('max', '100%');
  bottomLeft1.setAttribute('step','0');
  
  topLeft.setAttribute('type', 'range');
  topRight.setAttribute('type', 'range');
  bottomLeft.setAttribute('type', 'range');
  bottomRight.setAttribute('type', 'range');
  topLeft1.setAttribute('type', 'range');
  topRight1.setAttribute('type', 'range');
  bottomRight1.setAttribute('type', 'range');
  bottomLeft1.setAttribute('type', 'range');
  
  var rangediv = document.getElementById('range0');
  var rangediv1 = document.getElementById('range1');

 rangediv.appendChild(topLeft);
 rangediv.appendChild(topRight);
 rangediv.appendChild(bottomRight);
  rangediv.appendChild(bottomLeft);

  rangediv1.appendChild(topLeft1);
  rangediv1.appendChild(topRight1);
  rangediv1.appendChild(bottomRight1);
  rangediv1.appendChild(bottomLeft1);

  document.body.appendChild(box);



var texta = document.createElement('input');
texta.setAttribute('type', 'text');

document.body.appendChild(texta);

var btn = document.createElement('BUTTON');
var btnText = document.createTextNode('Copy');
btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener('click', (e) => {
  
  texta.select();
  texta.setSelectionRange(0, 99999);
  document.execCommand('copy');
});

 topLeft.addEventListener('mousemove', (e) => { 

   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
});
 topRight.addEventListener('mousemove', (e) => { 

   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
});
 bottomRight.addEventListener('mousemove', (e) => { 

   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
});
bottomLeft.addEventListener('mousemove', (e) => { 

   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
});
 
topLeft1.addEventListener('mousemove', (e) => { 

   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
});
 topRight1.addEventListener('mousemove', (e) => { 

   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
});
 bottomRight1.addEventListener('mousemove', (e) => { 

   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
});
bottomLeft1.addEventListener('mousemove', (e) => { 

   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
});
window.onload = function(){
  
  bottomRight.setAttribute('value','100');
  topLeft.setAttribute('value','42');
  bottomLeft.setAttribute('value','26');
  topRight.setAttribute('value','100');
  bottomRight1.setAttribute('value','100');
  topLeft1.setAttribute('value','84');
  bottomLeft1.setAttribute('value','62');
  topRight1.setAttribute('value','56');
   texta.value = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
   st.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% / ${topLeft1.value}% ${topRight1.value}% ${bottomRight1.value}% ${bottomLeft1.value}%`;
};
//Luego poner 4 más, ejemplo: 20px / 20px;
