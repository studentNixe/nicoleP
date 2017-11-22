const test = document.getElementById("myPic");
test.addEventListener("click",twinkle);

function twinkle(){  
    document.getElementById("ellipse5935").style.fill = 'rgba(0,0,0,0)';
    document.getElementById("ellipse5935").style.stroke = 'rgba(0,0,0,0)';
    document.getElementById("ellipse5963").style.fill = 'rgba(0,0,0,0)';
    document.getElementById("ellipse5963").style.stroke = 'rgba(0,0,0,0)';
    document.getElementById("path5941").setAttribute("d","m 193.62452,166.21636 c 2.02128,-3.38786 5.0065,-6.19335 8.51318,-8.00066 3.50669,-1.8073 7.52376,-2.6107 11.45581,-2.29111 4.88601,0.39712 9.66155,2.58712 12.9211,6.24857 1.86359,2.09338 3.21823,4.63667 3.9155,7.35126 l 9.32999,-2.26845");
    document.getElementById("path5953").setAttribute("d","m 240.83247,160.28364 -11.61211,4.32156");
    document.getElementById("path5957").setAttribute("d","m 234.46454,154.8256 -9.39718,5.881");
}