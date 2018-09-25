window.onload = function(){
    //headSerect(0);
    onYearChange();
 };
 function headSerect(num){
    var menuA = document.getElementsByName("menuA")
    var menuBorder = document.getElementsByName("menuBorder")
    menuA[num].classList.add("serectA");
    menuBorder[num].classList.add("serectBorder");
}
 var nextFlag = 0;
 function onChange() {
   location.href = "#numLink";
    var radioList = document.getElementsByName("btn");
    var list = document.getElementsByName("list");
    var yearList = document.getElementsByName("year");
    var yearbtn = document.getElementsByName("yearbtn");
    var count = 0;
    for(var i = 0; i < yearbtn.length; i++){
      if(yearbtn[i].checked){
        for(var l = 0; l < radioList.length; l++){
          if(radioList[l].checked){
            for(var j = 0; j < list.length; j++){
              list[j].style.display = "none";
            }
            for (var h = count + l*15; h < list.length && h < count + l*15 + 15; h++) {
              list[h].style.display = "block";
            }
            break;
          }
        }
        break;
      }else{
        var countlist = yearList[i].children;
        count += countlist.length;
      }
    }
    var newlist = document.getElementById("numberList");
    if (nextFlag == 1) {
      var next = document.getElementById("next");
      next.parentNode.removeChild(next);
    }
    for(var i = 0; i < radioList.length; i++){
       if(radioList[i].checked){
         if(i != radioList.length - 1){
           var li = document.createElement("li");
           li.setAttribute("onclick", "onNext();");
           li.innerHTML = "次のページへ>>";
           li.id = 'next';
           newlist.appendChild(li);
           var form = document.getElementById("add");
           form.appendChild(newlist);
           nextFlag = 1;
         }else{
           nextFlag = 0;
         }
       }
    }
  }
  function onNext() {
    location.href = "#numLink";
      var radioList = document.getElementsByName("btn");
      var list = document.getElementsByName("list");
      var yearList = document.getElementsByName("year");
      var yearbtn = document.getElementsByName("yearbtn");
      var count = 0;
      for(var i = 0; i < yearbtn.length; i++){
        if(yearbtn[i].checked){
          for(var l = 0; l < radioList.length; l++){
            if(radioList[l].checked){
              radioList[l+1].checked = "true";
              for(var j = 0; j < list.length; j++){
                list[j].style.display = "none";
              }
              for (var h = count + (l+1)*15; h < list.length && h < count + (l+1)*15 + 15; h++) {
                list[h].style.display = "block";
              }
              break;
            }
          }
          break;
        }else{
          var countlist = yearList[i].children;
          count += countlist.length;
        }
      }
      for(var i = 0; i < radioList.length; i++){
         if(radioList[i].checked){
           if(i == radioList.length - 1){
             var next = document.getElementById("next");
             next.parentNode.removeChild(next);
             nextFlag = 0;
           }
         }
      }
    }
  function listNum() {
    var newsList = document.getElementsByName("list");
    for (var i = 0; i < newsList.length; i++) {
      if (i%15 == 0 && i != 0) {
        var number = parseInt(i/15) + 1;
        var label = document.createElement("label");
        label.setAttribute("for", "list" + number);
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "btn";
        input.id = "list" + number;
        input.setAttribute("onchange", "onChange();");
        var li = document.createElement("li");
        li.innerHTML = number;
        var list = document.getElementById("numberList");
        label.appendChild(input);
        label.appendChild(li);
        list.appendChild(label);
      }
    }
    onChange();
  }
  function onYearChange() {
    location.href = "#numLink";
    var radioList = document.getElementsByName("yearbtn");
    var newsList = document.getElementsByName("year");
    for(var i = 0; i < radioList.length; i++){
    if(radioList[i].checked){
      for(var j = 0; j < newsList.length; j++){
        newsList[j].style.display = "none";
      }
      newsList[i].style.display = "block";
      var yearlist = newsList[i].children;
      var list = document.getElementById("numberList");
      list.parentNode.removeChild(list);
      var newlist = document.createElement("ul");
      newlist.id = "numberList";
      newlist.classList.add('listPage');
      for (var x = 0; x < yearlist.length; x++) {
        if (x%15 == 0) {
          var number = parseInt(x/15) + 1;
          var label = document.createElement("label");
          label.setAttribute("for", "list" + number);
          var input = document.createElement("input");
          input.type = "radio";
          input.name = "btn";
          input.id = "list" + number;
          if (x == 0) {
            input.checked = "true";
          }
          input.setAttribute("onchange", "onChange();");
          var li = document.createElement("li");
          li.innerHTML = number;
          label.appendChild(input);
          label.appendChild(li);
          newlist.appendChild(label);
        }
      }
        var li = document.createElement("li");
        li.setAttribute("onclick", "onNext();");
        li.innerHTML = "次のページへ>>";
        li.id = 'next';
        newlist.appendChild(li);
        nextFlag = 1;
        var form = document.getElementById("add");
        form.appendChild(newlist);
       break;
      }
    }
    onChange();
  }
  function pageTop() {
    var x1 = x2 = x3 = 0;
    var y1 = y2 = y3 = 0;
    if (document.documentElement) {
    x1 = document.documentElement.scrollLeft || 0;
    y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
    x2 = document.body.scrollLeft || 0;
    y2 = document.body.scrollTop || 0;
    }
    x3 = window.scrollX || 0;
    y3 = window.scrollY || 0;
    var x = Math.max(x1, Math.max(x2, x3));
    var y = Math.max(y1, Math.max(y2, y3));
    window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));
    if (x > 0 || y > 0) {
    window.setTimeout("pageTop()", 25);
    }
  }