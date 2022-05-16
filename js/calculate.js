
// var btn=document.querySelector('#btn');
// btn.addEventListener('click',function(){
//     alert(amt+tipPer+person);
// })
function calculate()
{
    var amt=document.getElementById('amt').value;
    var tipPer=document.getElementById('tipper').value;
    var person=document.getElementById('people').value;
    alert(tipPer);
    if(amt==''||amt<=0)
    {
        alert("please enter amount");
    }
    else if(person==0||person==1)
    {
        document.getElementById('each').style.display='none';
    }
    var amt=(amt*tipPer)/person;
    var amt=Math.floor(amt)/100;
    var amt=amt.toFixed(2);
    document.getElementById('calculatedAmt').style.display='block';
    document.getElementById('amt1').innerHTML=amt;

}
document.getElementById('calculatedAmt').style.display='none';
document.getElementById('btn').onclick=function(){
calculate();
}