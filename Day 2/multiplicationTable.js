const multiTable = () => {
  // console.table('\n                10 * 10  MULTIPLICATION TABLE \n');
  // console.log( '     X    |01|  |02|  |03|  |04|  |05|  |06|  |07|  |08|  |09|  |10| ')
  let table = "\n                  10 * 10  MULTIPLICATION TABLE \n\n";
  table += '     X    |01|  |02|  |03|  |04|  |05|  |06|  |07|  |08|  |09|  |10| \n\n';

  for(let i = 1; i <= 10; i++) {
    for(let j = 0; j <= 10; j++) {
      
      if(j == 0) {
        if(i < 10) {
          table += `    |0${i}|   `;
        }else{
          table += `    |${i}|   `;
        }
        continue;
      }
  
      table += `${(i*j) < 10 ? ' '+i*j : i*j}    ${j == 10 ? '\n\n' : ''}`;

    }

  
  }
console.log(table);
}

multiTable();