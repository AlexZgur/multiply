module.exports = function multiply(first, second) {
  // your solution
  let mem = [];  
  for (let i = 0; i < second.length; i++) {
    let s = second[second.length-i-1];   
    let stack = 0; 
    for (let j = 0; j < first.length; j++) {
      let f = first[first.length-j-1];
      let r = '' + (parseInt(f) * parseInt(s) + stack + (i+j<mem.length?mem[i+j]:0));       
      let pos = i+j;
      if (r.length>1) {
        stack = parseInt(r[0]); 
        mem.splice(pos,1,parseInt(r[1]));        
      } else {
        stack = 0;
        mem.splice(pos,1,parseInt(r[0]));
      }
    }    
    if (stack>0) mem.push(stack);    
  }
  mem.reverse();
  console.log(mem.join(''));
  return mem.join('');
}
