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
	let set_table_sign=false;
	let area_key=new Array();
	let product_key=new Array();

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
		area_key=[];
		product_key=[];
		let check_item=document.getElementsByName("check_item");
		let check_item_p=document.getElementsByName("check_item_p");
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

		if(check_item_p[0].checked==false||check_item_p[1].checked==false||check_item_p[2].checked==false){
			check_item_p[3].checked=false;
		}
		else if(check_item_p[3].checked==true){
			if(check_item_p[0].checked==true&&check_item_p[1].checked==true&&check_item_p[2].checked==true){ 
				check_item_p[3].checked=false;
			}
			else if(check_item_p[0].checked==false||check_item_p[1].checked==false||check_item_p[2].checked==false){
				check_item_p[0].checked=true;
				check_item_p[1].checked=true;
				check_item_p[2].checked=true;
			}
		}
		else if(check_item_p[0].checked==true&&check_item_p[1].checked==true&&check_item_p[2].checked==true){
			check_item_p[3].checked=true;
		}

		for(let i=0;i<check_item.length;i++){
			if(check_item[i].checked==true){
				if(i<3){
					area_key.push(area_item[i]);
				}
			}
		}

		for(let i=0;i<check_item_p.length;i++){
			if(check_item_p[i].checked==true){
				if(i<3){
					product_key.push(product_item[i]);
				}
			}
		}

		if(area_key.length>0&&product_key.length>0){
			set_table_sign=true;
			if(set_table_sign==true){
    			set_table(area_key,product_key);
    			//get_data();
    		}
		}
	}//获取checkbox的值
	
    function set_table(table_area_key,table_product_key){

    	let teble_box=document.getElementById("table_box");
    	let tablenodes=table_box.childNodes;
    	for(let i=0;i<tablenodes.length;i++){
    		table_box.removeChild(tablenodes[i]);
    	}//删除之前生成的table;
    	let table = document.createElement("table");
	    table_box.appendChild(table);
	    let maxrow=table_area_key.length*table_product_key.length+1;
	    let rowspan=table_area_key.length;
	    for(let i=0;i<maxrow;i++){
	    	let table_tr = document.createElement("tr");
	    	table.appendChild(table_tr);
	    	for(let j=0;j<14;j++){
	    		let table_td = document.createElement("td");
	    		table_tr.appendChild(table_td);
	    	}
	    }
	    let table_name = document.getElementsByTagName("td");
	    let td_num=14;
	    let tablename=makeArray(table_name);
	    if(table_area_key.length==1&&table_product_key.length>1){
	    	table_name[td_num*0].innerHTML="地区";
	    	table_name[td_num*1].rowSpan=rowspan;
	    	
	    	table_name[1].innerHTML="商品";
	    	if(table_product_key.length==1){
	    		table_name[15].rowSpan=rowspan;
	    	}
	    }
	    else{
	    	table_name[0].innerHTML="商品";
	    	table_name[1].innerHTML="地区";
	    	switch(table_product_key.length){
	    		case 1:
	    			table_name[td_num*1].rowSpan=rowspan;
	    			//alert(Object.prototype.toString.call(tablename));
	    			for(let i=1;i<=table_area_key.length;i++){
	    				tablename.splice(td_num*(1+i),1);
	    				alert(i);
	    			}
	    			break;
	    		case 2:
	    			table_name[td_num*1].rowSpan=rowspan;
	    			table_name[td_num*(1+table_area_key.length)].rowSpan=rowspan;
	    			break;
	    		case 3:
	    			table_name[td_num*1].rowSpan=rowspan;
	    			table_name[td_num*(1+table_area_key.length)].rowSpan=rowspan;
	    			table_name[td_num*(1+table_area_key.length*2)].rowSpan=rowspan;
	    			break;
	    	}
	    }
	    //rowspan="2"

	    for(let k=2;k<14;k++){
	    	table_name[k].innerHTML=k-1+" 月";
	    }
    }

    function makeArray(obj){
    	return Array.prototype.slice.call(obj,0);
	}//将伪数组转换成数组

	/*
	try{
	    Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType;
	}catch(e){
	    makeArray = function(obj){
	        var res = [];
	        for(var i=0,len=obj.length; i<len; i++){
	            res.push(obj[i]);
	        }
	        return res;
	    }
	}*/ //兼容浏览器

    function get_data(){
    	let typeOfGoods = new Array();
    	let saleOfMonth = new Array();
    	let subOfDate = new Array();
    	
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

})();