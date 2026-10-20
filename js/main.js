// Nexaply Enterprises — estimator, copy buttons, enquiry form (v0.3)
(function(){
  var mid={comm:{6:20,9:25,12:33,18:47,25:64},mr:{6:24,9:31,12:41,18:56,25:77},bwr:{6:32,9:42,12:56,18:77,25:103},bwp:{6:44,9:58,12:76,18:107,25:142}};
  var thk=document.getElementById('c-thk'),gr=document.getElementById('c-grade'),tr=document.getElementById('c-truck'),viz=document.getElementById('stackviz');
  function fmtL(v){return '₹'+(v/100000).toFixed(1)+' L';}
  function calc(){
    var t=+thk.value,g=gr.value,m=+tr.value;
    var sheets=Math.round(11700/t/10)*10*m;
    var sqft=sheets*32, val=sqft*mid[g][t];
    document.getElementById('o-sheets').textContent=sheets.toLocaleString('en-IN');
    document.getElementById('o-sqft').textContent=sqft.toLocaleString('en-IN');
    document.getElementById('o-value').textContent=fmtL(val);
    document.getElementById('o-gst').textContent=fmtL(val*0.18);
    viz.innerHTML='';
    var bundles=Math.min(24,Math.max(4,Math.round(sheets/100)));
    for(var i=0;i<bundles;i++){var b=document.createElement('i');b.style.height=(30+((i*7)%16))+'px';viz.appendChild(b);}
  }
  [thk,gr,tr].forEach(function(el){el.addEventListener('change',calc);});
  calc();

  function selectFallback(txt){var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);}
  function copyText(txt,btn){
    var done=function(){var o=btn.textContent;btn.textContent='Copied';setTimeout(function(){btn.textContent=o==='Copied'?'Copy':o;},1500);};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){selectFallback(txt);done();});}
    else{selectFallback(txt);done();}
  }
  document.querySelectorAll('.copy').forEach(function(b){b.addEventListener('click',function(){copyText(document.getElementById(b.dataset.copy).textContent.trim(),b);});});

  var f=document.getElementById('qform'),msg=document.getElementById('f-msg');
  function v(id){return document.getElementById(id).value.trim();}
  function build(){
    return 'Enquiry for Nexaply Enterprises\nName: '+v('f-name')+'\nFirm: '+v('f-firm')+'\nPhone: '+v('f-phone')+'\nDelivery: '+v('f-city')+'\nGrade: '+v('f-grade')+'\nThickness and quantity: '+v('f-qty')+'\nNotes: '+v('f-note');
  }
  function valid(){
    if(!v('f-name')||!v('f-phone')||!v('f-city')){msg.textContent='Please fill in your name, phone and delivery town.';return false;}
    return true;
  }
  f.addEventListener('submit',function(e){
    e.preventDefault(); if(!valid())return;
    var url='https://wa.me/919XXXXXXXXX?text='+encodeURIComponent(build());
    var a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();
    msg.textContent='WhatsApp should open with your enquiry. If it did not, use "Copy as text" and send it to +91 9XXXX XXXXX or sales@nexaply.in.';
  });
  document.getElementById('f-copy').addEventListener('click',function(){
    if(!valid())return; copyText(build(),this); msg.textContent='Copied. Paste it into WhatsApp or an email to sales@nexaply.in.';
  });
})();
