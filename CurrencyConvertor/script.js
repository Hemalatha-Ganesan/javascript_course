// fetch('https://api.frankfurter.app/currencies')
// .then(res => console.log(res.json()))
let select = document.querySelectorAll('.currency')
// console.log(select)
let btn = document.getElementById('btn')
let input = document.getElementById('input')

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json()) 
.then(res => displayDropDown(res))

function displayDropDown(res){
   // console.log(Object.entries(res)[1][0])
   let curr = Object.entries(res)
   for(let i=0;i<curr.length;i++){
       let opt = `<option value  = "${curr[i][0]}">${curr[i][0]}</option>` 
       select[0].innerHTML += opt
         select[1].innerHTML += opt
   }
    //console.log(curr[1][0])
}

btn.addEventListener('click', () =>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputval = input.value
    if(curr1 == curr2)
        alert("Choose different currencies")
    else
        convert(curr1,curr2,inputval)
});
function convert(curr1,curr2,inputVal){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0]
  });
  }
