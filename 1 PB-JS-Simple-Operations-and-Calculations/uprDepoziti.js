function solve(deposit,srok,lixva){
    
    let natlixva = ( Number(deposit) * Number(lixva)) / 100;
    let meslihva = natlixva / 12;
  
      
    console.log(Number(deposit) + (Number(srok) * meslihva));


}
solve("200",
"3",
"5.7"),
solve("2350",
"6",
"7")