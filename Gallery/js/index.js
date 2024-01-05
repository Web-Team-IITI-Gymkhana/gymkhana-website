function navigateLeft(){
	// console.log('left');
	var nav = document.getElementsByTagName('span');
	// console.log(nav);
	var i = 0;
   	while(i<5){
    	// console.log(nav[i].className);
    	if(nav[i].className=='current'){
    		if(i==0)
    		i=4;
    		else
    		i--;
    	    nav[i].click();
    		break;
    	}
        i++;
    }
}
function navigateRight(){
    var nav = document.getElementsByTagName('span');
    var i = 0;
    while(i<5){
    	if(nav[i].className=='current'){
    		if(i==4)
    		i=0;
    		else
    		i++;
    		nav[i].click();
    		break;
    	}
    	i++;
    }

}