(function (){
	//"use strict";
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
	let area_item=["华东","华南","华北"];
	let product_item=["手机","笔记本","智能音箱"];

	//document.getElementsByName("check_item").onclick=checkone;
						
	document.getElementById("east").onclick=checkone;
	document.getElementById("south").onclick=checkone;
	document.getElementById("north").onclick=checkone;
	document.getElementById("area_all").onclick=checkone;
	document.getElementById("phone").onclick=checkone;
	document.getElementById("PC").onclick=checkone;
	document.getElementById("sound").onclick=checkone;
	document.getElementById("type_all").onclick=checkone;
	

	function checkone(){
		let area_key = new Array();
		let product_key = new Array();
		let sub_key = new Array();
		let check_item=document.getElementsByName("check_item");
		let item_id=this.id;
		if(document.getElementById(item_id).checked==true){
			this.id.checked==false;
		}
		else if(document.getElementById(item_id).checked==false){
			this.id.checked==true;
		}

		if(check_item[0].checked==false||check_item[1].checked==false||check_item[2].checked==false){
			check_item[3].checked=false;
		}
		else if(check_item[3].checked==true){
			if(check_item[0].checked==true&&check_item[1].checked==true&&check_item[2].checked==true){
				check_item[3].checked=false;
			}
			else if(check_item[0].checked==false||check_item[1].checked==false||check_item[2].checked==false){
				check_item[0].checked=true;
				check_item[1].checked=true;
				check_item[2].checked=true;
			}
		}
		else if(check_item[0].checked==true&&check_item[1].checked==true&&check_item[2].checked==true){
			check_item[3].checked=true;
		}

		if(check_item[4].checked==false||check_item[5].checked==false||check_item[6].checked==false){
			check_item[7].checked=false;
		}
		else if(check_item[7].checked==true){
			if(check_item[4].checked==true&&check_item[5].checked==true&&check_item[6].checked==true){
				check_item[7].checked=false;
			}
			else if(check_item[4].checked==false||check_item[5].checked==false||check_item[6].checked==false){
				check_item[4].checked=true;
				check_item[5].checked=true;
				check_item[6].checked=true;
			}
		}
		else if(check_item[4].checked==true&&check_item[5].checked==true&&check_item[6].checked==true){
			check_item[7].checked=true;
		}

		for(let i=0;i<check_item.length;i++){
			if(check_item[i]==true){
				if(i==3&i==7){
					break;
				}
				else if(i<3){
					area_key.push(area_item[i]);
				}
				else if(i>3){
					product_key.push(product_item[i-4]);
				}
			}
		}
		sub_key.push(area_item);
		sub_key.push(product_item);

		return sub_key;
	}//获取checkbox的值
	
    function set_table(){
    	let table = document.createElement("table");
    	document.body.appendChild(table);
    	let type_select = document.getElementById("type_select");
    	let type_select_val = type_select.value;
    	for(let i=0;i<2;i++){
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
    	table_name[13].innerHTML=type_select_val;
    }

    function get_data(){
    	let typeOfGoods = new Array();
    	let saleOfMonth = new Array();
    	let subOfDate = new Array();
    	let area_select = document.getElementById("area_select");
    	let area_select_val = area_select.value;
    	let type_select = document.getElementById("type_select");
    	let type_select_val = type_select.value;
    	for(let key in sourceData){
	    	if(sourceData[key].region==area_select_val&&sourceData[key].product==type_select_val){
	    		saleOfMonth.push(sourceData[key].sale);
	    	}
	    }
	    subOfDate.push(area_select_val);
    	subOfDate.push(saleOfMonth);
    	set_data(subOfDate);
    }

    function set_data(subOfDate){
    	let saleOfMonth = new Array();
    	saleOfMonth = subOfDate[1];
    	let table_name = document.getElementsByTagName("td");
    	table_name[0].innerHTML = subOfDate[0];
    	for(let i=14;i<26;i++){
    		table_name[i].innerHTML = saleOfMonth[0][i-14];
    	}
    }

    set_table();
    get_data();
    area_select.onchange=get_data;
    type_select.onchange=get_data;
})();