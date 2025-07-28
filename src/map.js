
//MAP
map = `<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>*</span><span>.</span><span>.</span><span>.</span><span>.</span><span>a</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>d</span><span>.</span><span>.</span><span>.</span><span>.</span><span>*</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>+</span><span>.</span><span>.</span><br>
<span>.</span><span>*</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>@</span><span>.</span><span>.</span><span>.</span><span>.</span><span>b</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>*</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>    
<span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>h</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>*</span><span>.</span><span>.</span><br> 
<span>.</span><span>c</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><br>    
 `
const regexA = "<span>a</span>"
map = map.replace(regexA, '<span><a href ="&"><li data-info="STNA">a</li></a></span>');
const regexB = "<span>b</span>"
map = map.replace(regexB, '<span><a href ="&"><li data-info="STNB">b</li></a></span>');
const regexC = "<span>c</span>"
map = map.replace(regexC, '<span><a href ="&"><li data-info="STNC">c</li></a></span>');
const regexD = "<span>d</span>"
map = map.replace(regexD, '<a href ="&"><li data-info="GRNWX01600B">}[]{</li></a>');
const regexH = "<span>h</span>"
map = map.replace(regexH, '<a href ="./Research_Vessel_40N73R.html"><li data-info="Research Vessel 40N73R">\>[]\<</li></a>');
const regexShip = "<span>@</span>";
//map = map.replace(regexAt, '<a href="$"<abbr title="Your Ship">@</abbr></a>');
map = map.replace(regexShip, '<span><a href ="./shipinfo.html"><li data-info="L.X47">,(|);</li></a></span>');
//<div data-tooltip="Ship">@</div>

const regexPlus = /\+/g;
map = map.replace(regexPlus, '<a href="$">+</a>');



document.getElementById("map").innerHTML = map