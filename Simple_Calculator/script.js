


const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
//event listener
button.addEventListener('click',displayStats)

function displayStats()
{
   const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const input = document.getElementById("input").value;
   let res = 0;
   switch(input)
   {
      case '+':
          res = n1 + n2;
        break
      case '-':
         res = n1 - n2;
         break
       case '*':
         res = n1 * n2;
         break
       case '/':
         res = n1/n2;
         break

   }
   document.getElementById('result').innerHTML = "Result: <b>" + res + "</b>";

}