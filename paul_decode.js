function run(inp){
  var ans = "",
      sp = inp.split("");
  for (var c = 0; c < inp.length; c++) {
    if (!isNaN(sp[c])){
      c += 1+parseInt(sp[c]);
      ans += sp[c];
    }
  }
  return ans;
}
console.log(run("0h2abe1zy"));