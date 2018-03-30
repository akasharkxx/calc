var val;
function disp(val)
{
  document.getElementById("di").value += val;
}
function disp2(val){
  document.getElementById("di").value = val;
}
function evalu()
{
  try {
    disp2(eval(document.getElementById("di").value))
  } catch (e) {
     disp2("error")
  } 
}
