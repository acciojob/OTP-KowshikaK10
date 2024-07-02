const codes = Array.from(document.querySelectorAll('.code'));
codes[0].focus();
codes.forEach((code,index)=>{
	 code.addEventListener('input', () => {
        if (code.value.length>0) {
          if (index<codes.length-1) {
            codes[index+1].focus();
          }
        }
      });
	
    code.addEventListener("keydown",(e)=>{
        const keyPressed = e.key
         if(keyPressed==="Backspace"){
            if(index>0){
                codes[index-1].focus();
            }
        }
    })
})