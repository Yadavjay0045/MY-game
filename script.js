let R='';
let choise="";

 let result='';
 var win=0;
 var loss=0;
 var tied=0;
 var points=0;
 var match=0;

 document.querySelector('#mych').innerText='you choise is'+choise;
  document.querySelector('#cch').innerText='comp choise is'+ R;
   document.querySelector('#result').innerText= result;
   //count

document.querySelector('#win').innerText='win'+" "+ win;
document.querySelector('#loss').innerText='loss'+" "+ loss;
 document.querySelector('#tied').innerText='win'+" "+ tied;
  document.querySelector('#points').innerText='points'+" "+ points;
    document.querySelector('#match').innerText='match'+" "+ match;
  
   //bat
function bat()

{
    if(match>=10)
{ alert('your points are'+points);
    
       
}

     match++;
choise="bat";

   
      document.querySelector('#mych').innerText='you choise is'+" "+choise;
       r=Math.random()*3;
        
        if(r>=0 && r<1)
        {
            R='bat';
            tied=tied+1;
        points=points+5;
             result=' it a tied';
           

        }
        else if(r>=1 && r<2)
        {
             R='ball';
             win=win+1;
             points=points+10;
              result= ' you win';
        }
        else{
         R='stumps';
         loss=loss+1;
         points=points-10;
          result=' you loss';
        }
   
          console.log("you "+result);
          document.querySelector('#cch').innerText='comp choise is'+" "+ R;
   document.querySelector('#result').innerText= result;
    //count
 document.querySelector('#win').innerText='win'+" "+ win;
 document.querySelector('#loss').innerText='loss'+" "+ loss;
 document.querySelector('#tied').innerText='tied'+" "+ tied;
   document.querySelector('#points').innerText='points'+" "+ points;
       document.querySelector('#match').innerText='match'+" "+ match;

if (match>10)
{
    reset();
}
  


}
 // ball
  function ball()

{
       if(match>=10)
{ alert('your points are'+points);
    
       
}
    match++;
     
choise="ball";

   
      document.querySelector('#mych').innerText='you choise is'+" "+choise;
       r=Math.random()*3;
        
        if(r>=0 && r<1)
        {
            R='bat';
            loss=loss+1;
            points=points-10;
             result=' you loss';
           

        }
        else if(r>=1 && r<2)
        {
             R='ball';
              tied=tied+1;
              points=points+5;
              result= ' its a tied';
        }
        else{
         R='stumps';
          result=' you win';
              win=win+1;
              points=points+10;
        }
   
          console.log("you "+result);
          document.querySelector('#cch').innerText='comp choise is'+" "+ R;
   document.querySelector('#result').innerText= result;
       //count
 document.querySelector('#win').innerText='win'+" "+ win;
 document.querySelector('#loss').innerText='loss'+" "+ loss;
 document.querySelector('#tied').innerText='tied'+" "+ tied;
   document.querySelector('#points').innerText='points'+" "+ points;
    document.querySelector('#match').innerText='match'+" "+ match;
if (match>10)
{
    reset();
}

  


}
//stumps
  function stumps()

{
       if(match>=10)
{ alert('your points are'+points);
  
       
}
    match++; 
choise="stumps";

   
      document.querySelector('#mych').innerText='you choise is'+" "+choise;
       r=Math.random()*3;
        
        if(r>=0 && r<1)
        {
            R='bat';
             result=' you win';
                 win=win+1;
                 points=points+10;
           

        }
        else if(r>=1 && r<2)
        {
             R='ball';
             loss=loss+1;
             points==points-10;
              result= ' you loss';
        }
        else{
         R='stumps';
          result=' its a tied';
           tied=tied+1;
           points=points+5;
        }
   
          console.log("you "+result);
          document.querySelector('#cch').innerText='comp choise is'+" "+ R;
   document.querySelector('#result').innerText= result;
          //count
 document.querySelector('#win').innerText='win'+" "+ win;
 document.querySelector('#loss').innerText='loss'+" "+ loss;
 document.querySelector('#tied').innerText='tied'+" "+ tied;
 document.querySelector('#points').innerText='points'+" "+ points;
 document.querySelector('#match').innerText='match'+" "+ match;
if (match>10)
{
    reset();
}


}

document.querySelector('#match').innerText='match'+" "+ match;


//reset

 function reset()
 {
   if(match<10)
   {
    alert("complet your 10 matches");
   }
   
   
   
   
   
else{
         R='';
 choise="";
win=0;
loss=0;
tied=0;
points=0;
  result='';
match=0;
 document.querySelector('#mych').innerText='you choise is'+choise;
  document.querySelector('#cch').innerText='comp choise is'+ R;
   document.querySelector('#result').innerText= result;
    //count
  document.querySelector('#win').innerText='win'+" "+ win;
 document.querySelector('#loss').innerText='loss'+" "+ loss;
 document.querySelector('#tied').innerText='tied'+" "+ tied;
  document.querySelector('#points').innerText='points'+" "+ points;
   document.querySelector('#match').innerText='match'+" "+ match;  

  

}


 }

 