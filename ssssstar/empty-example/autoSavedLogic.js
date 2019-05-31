function AutoDoing(criNum, mapNum) {
	console.log("start auto. criNum : " + criNum + ", mapNum : " + mapNum);
	
	//일단 지우고
	expressionMode = false;
	
	//C 누르고
	if(__search_check) {
      searcher.searching();
      __search_check = false;
    }
    else {
      console.log("You already searching!")
    }
	
    expressionMode = true;
    console.log(expressionMode);
	
	
	for(let i = 0; i < criNum; i++) {
	//기준원 뜨는 거 기다리고
	//P 누르고
	__saveIndex++;
    save(label);
    console.log("saved + " + label);
	//바꾸고
	__criterion += 5; //30, 35, 40, 45, 50, 55 ···
	}
	
	
}

function Macro() {
	//C 누르고
	if(__search_check) {
      searcher.searching();
      __search_check = false;
    }
    else {
      console.log("You already searching!")
    }
	
    expressionMode = true;
    console.log(expressionMode);
	
}