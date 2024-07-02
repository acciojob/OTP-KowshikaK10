document.addEventListener('DOMContentLoaded', (event) => {
const codes = Array.from(document.querySelectorAll('.code'));
	codes.forEach((code,index)=>{				
	    code.addEventListener("keydown",(e)=>{
	        const keyPressed = e.key
			if(keyPressed>=0 && keyPressed<=9){
            codes[index].value=''
            if(index<codes.length-1){
                setTimeout(()=>codes[index+1].focus(),10)
            }
	        }
	         if(keyPressed==="Backspace"){
	            if(index>0){
	                codes[index-1].focus();
	            }
	        }
	    })
	})
	if(codes.leength>0){
		codes[0].focus();
	}
});