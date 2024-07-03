//your code here!
document.addEventListener("DOMContentLoaded", () => {
let total=10;
let olList=document.getElementById('infi-list');

    for(let i=1;i<=total;i++){
        let li=document.createElement('li');
        li.innerText=`Item ${i}`;
        olList.append(li);
    }
	olList.addEventListener('scroll',()=>{
		const scrollTop = olList.scrollTop;
	    const scrollHeight = olList.scrollHeight;
	    const clientHeight = olList.clientHeight;
		  if (scrollTop + clientHeight >= scrollHeight) {
			  for(let i=1;i<=2;i++){
			        let li=document.createElement('li');
			        li.innerText=`Item ${++total}`;
			        olList.append(li);
			    }
		  }
	})
});