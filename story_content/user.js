function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61Ov8iwwd5Z":
        Script1();
        break;
      case "6a4GQiF9wVi":
        Script2();
        break;
      case "6QCaSOEsTDE":
        Script3();
        break;
      case "6dUnDkzdGeA":
        Script4();
        break;
      case "5t7WSZhtF1e":
        Script5();
        break;
  }
}

function Script1()
{
  var x = document.getElementsByClassName("scrollarea-area");
x[0].scrollTop = 0;
var height = x[0].scrollHeight - x[0].offsetHeight;

x[0].onscroll = function(){
 var player = GetPlayer();
 player.SetVar("num",x[0].scrollTop);
};

var half1 = height/2;
var quarter1 = height/4;
var ended1 = height-15;
var player1 = GetPlayer();
player1.SetVar("half",half1);
player1.SetVar("quarter",quarter1);
player1.SetVar("ended",ended1);
player1.SetVar("height",height);
}

function Script2()
{
  var x = document.getElementsByClassName("scrollarea-area");
x[0].scrollTop = 0;
var height = x[0].scrollHeight - x[0].offsetHeight;

x[0].onscroll = function(){
 var player = GetPlayer();
 player.SetVar("num",x[0].scrollTop);
};

var half1 = height/2;
var quarter1 = height/4;
var ended1 = height-15;
var player1 = GetPlayer();
player1.SetVar("half",half1);
player1.SetVar("quarter",quarter1);
player1.SetVar("ended",ended1);
player1.SetVar("height",height);
}

function Script3()
{
  var x = document.getElementsByClassName("scrollarea-area");
x[0].scrollTop = 0;
var height = x[0].scrollHeight - x[0].offsetHeight;

x[0].onscroll = function(){
 var player = GetPlayer();
 player.SetVar("num",x[0].scrollTop);
};

var half1 = height/2;
var quarter1 = height/4;
var ended1 = height-15;
var player1 = GetPlayer();
player1.SetVar("half",half1);
player1.SetVar("quarter",quarter1);
player1.SetVar("ended",ended1);
player1.SetVar("height",height);
}

function Script4()
{
  var x = document.getElementsByClassName("scrollarea-area");
x[0].scrollTop = 0;
var height = x[0].scrollHeight - x[0].offsetHeight;

x[0].onscroll = function(){
 var player = GetPlayer();
 player.SetVar("num",x[0].scrollTop);
};

var half1 = height/2;
var quarter1 = height/4;
var ended1 = height-15;
var player1 = GetPlayer();
player1.SetVar("half",half1);
player1.SetVar("quarter",quarter1);
player1.SetVar("ended",ended1);
player1.SetVar("height",height);
}

function Script5()
{
  var x = document.getElementsByClassName("scrollarea-area");
x[0].scrollTop = 0;
var height = x[0].scrollHeight - x[0].offsetHeight;

x[0].onscroll = function(){
 var player = GetPlayer();
 player.SetVar("num",x[0].scrollTop);
};

var half1 = height/2;
var quarter1 = height/4;
var ended1 = height-15;
var player1 = GetPlayer();
player1.SetVar("half",half1);
player1.SetVar("quarter",quarter1);
player1.SetVar("ended",ended1);
player1.SetVar("height",height);
}

