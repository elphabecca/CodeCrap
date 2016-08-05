var z = 0;
for(i=0,j=1,k=0; k<35;i=j,j=x,k++ ){
        x=i+j;
    if (x%2===0&&x<4000000)
        z=(x+z);
        console.log(i,j,k,x,z);
}


