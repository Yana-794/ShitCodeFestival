const s=(t,a)=>{let r=[],l=0;for(let i=0;i<t;i++){let[n,k]=a[l++].split(' ').map(Number),g=a[l++].split(' ').map(Number),b=0,p=0;for(let j=0;j<n;j++)g[j]>=k?b+=g[j]:g[j]==0&&b>0&&(b--,p++);r.push(p)}return r}

const 结果=s(4,[
    "2 2","2 0",
    "3 2","3 0 0",
    "6 2","0 3 0 0 0",
    "2 5","5 4"
])
console.log(结果.join('\n'))