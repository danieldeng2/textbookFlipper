var currentpage;var currentbook; var shift; var prefix;var leadzero;var savedpage = [];
for(var i=0; i<50; i++) savedpage.push(1);

function loadbook(book){
  shift = 8;prefix = "";leadzero = true;
  if(book == 1){prefix = "https://resources.pearsonactivelearn.com/r00/r0066/r006623/r00662374/current/OPS/images/Pure_Maths_1-";}
  else if(book == 2){prefix = "https://resources.pearsonactivelearn.com/r00/r0067/r006740/r00674039/current/OPS/images/stats_and_mech_1_combined-"}
  else if(book == 3){prefix = "https://resources.pearsonactivelearn.com/r00/r0068/r006800/r00680025/current/OPS/images/pure_maths_2-";}
  else if(book == 4){prefix = "https://resources.pearsonactivelearn.com/r00/r0070/r007037/r00703733/current/OPS/images/SM2-";}
  else if(book == 5){prefix = "http://assets-runtime-production-oxed-oup.avallain.net/ebooks/59205d88a7203d0941b3607b/images/";leadzero = false;shift = 16;}
  else if(book == 6){prefix = "http://assets-runtime-production-oxed-oup.avallain.net/ebooks/47820eb8e1eda4a69aba442a/images/";leadzero = false;shift = 12;}
  else {return;}
  currentbook = book;
  gotopage(savedpage[currentbook - 1]);
}

function gotopage(pagenumber){
  currentpage = pagenumber;
  savedpage[currentbook - 1] = currentpage;
  document.getElementById("pagebox").value = currentpage - shift;
  var link = prefix + ((pagenumber<10&&leadzero)?"0":"")+ ((pagenumber<100&&leadzero)?"0":"") + pagenumber + ".jpg";
  document.getElementById("loadImage").src = link;
}

function OnEnter(){
  if(event.which == 13 || event.keyCode == 13){
    var tb = document.getElementById("pagebox").value;
    gotopage(parseInt(tb) + shift);
    return false;
  }else {return true;}
}
