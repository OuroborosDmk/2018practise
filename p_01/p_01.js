(function (){
	"use strict";
    let sourceData = [{
	    product: "手机",
	    region: "华东",
	    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
	}, {
	    product: "手机",
	    region: "华北",
	    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
	}, {
	    product: "手机",
	    region: "华南",
	    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
	}, {
	    product: "笔记本",
	    region: "华东",
	    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
	}, {
	    product: "笔记本",
	    region: "华北",
	    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
	}, {
	    product: "笔记本",
	    region: "华南",
	    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
	}, {
	    product: "智能音箱",
	    region: "华东",
	    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
	}, {
	    product: "智能音箱",
	    region: "华北",
	    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
	}, {
	    product: "智能音箱",
	    region: "华南",
	    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
	}]

    function set_table(){
    	let table = document.createElement("table");
    	document.body.appendChild(table);
    	for(let i=0;i<4;i++){
    		let table_tr = document.createElement("tr");
    		table.appendChild(table_tr);
    		for(let i=0;i<13;i++){
    			let table_td = document.createElement("td");
    			table_tr.appendChild(table_td);
    		}
    	}
    	let table_name = document.getElementsByTagName("td");
    	for(let k=1;k<13;k++){
    		table_name[k].innerHTML= k + " 月";
    	}
    	table_name[13].innerHTML="手机";
    	table_name[26].innerHTML="笔记本";
    	table_name[39].innerHTML="智能音箱";
    }

    function get_data(){
    	let typeOfGoods = new Array();
    	let saleOfMonth = new Array();
    	let subOfDate = new Array();
    	let area_select = document.getElementById("area_select");
    	let area_select_val = area_select.value;
    	if(area_select_val == "east"){
	    	for(let key in sourceData){
	    		if(sourceData[key].region=="华东"){
	    			typeOfGoods.push(sourceData[key].product);
	    			saleOfMonth.push(sourceData[key].sale);
	    		}
	    	}
		}
    	else if(area_select_val == "south"){
    		for(let key in sourceData){
	    		if(sourceData[key].region=="华南"){
	    			typeOfGoods.push(sourceData[key].product);
	    			saleOfMonth.push(sourceData[key].sale);
	    		}
	    	}
    	}
    	else if(area_select_val == "north"){
    		for(let key in sourceData){
	    		if(sourceData[key].region=="华北"){
	    			typeOfGoods.push(sourceData[key].product);
	    			saleOfMonth.push(sourceData[key].sale);
	    		}
	    	}
    	}

    	subOfDate.push(typeOfGoods);
    	subOfDate.push(saleOfMonth);
    	set_data(subOfDate);
    }

    function set_data(subOfDate){
    	let typeOfGoods = new Array();
    	let saleOfMonth = new Array();
    	typeOfGoods = subOfDate[0];
    	saleOfMonth = subOfDate[1];


    }

    set_table();
    get_data();
})();