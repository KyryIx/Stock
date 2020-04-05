var category_options_portuguese = [
	'Equipamento',
	'Ferramenta',
	'LED',
	'DIY',
	'Embarcado',
	'Circuito Integrado',
	'Transistor',
	'Conector',
	'Botao',
	'Relé',
	'Diodo',
	'Capacitor',
	'Resistor',
	'Outro',
	'Todos'
	//'Limpar'
];

var category_options_english = [
	'Button',
	'Capacitor',
	'Connector',
	'Diode',
	'Display',
	'DIY',
	'Embedded',
	'Equipment',
	'Integrated Circuit',
	'LED',
	'Memory',
	'Microcontroller',
	'Motor',
	'Operational Amplifier',
	'Optocoupler',
	'Other',
	'Potentiometer',
	'Relay',
	'Resistor',
	'Sensor',
	'Thyristor',
	'Tool',
	'Transistor',
	'Trimmer',
	'All'
	//'Reset'
];

var location_options_portuguese = [
	'Bancada',
	'Caixa 000',/*
	'Caixa 001',
	'Caixa 002',
	'Caixa 003',
	'Caixa 004',
	'Caixa 005',
	'Caixa 006',
	'Caixa 007',
	'Caixa 008',
	'Caixa 009',
	'Caixa 010',
	'Caixa Armario 01',
	'Caixa Armario 02',
	'Caixa Armario 03',
	'Caixa Armario 04',
	'Caixa Armario 05',
	'Caixa Armario 06',
	'Caixa Armario 07',
	'Caixa Armario 08',
	'Caixa Armario 09',
	'Caixa Armario 10',
	'Caixa Armario 11',
	'Caixa Armario 12',*/
	'Caixa Papel 01',
	'Caixa Papel 02',
	'Caixa Papel 03',
	'Caixa Papel 04',
	'Caixa Papel 05',
	'Caixa Papel 06'/*,
	'Maleta 01',
	'Outros',
	'Todos'
	//'Limpar'
	*/
];

var location_options_english = [
	'Office',
	'Box 000',
	'Box 001',/*
	'Box 002',*/
	'Box 003',
	'Box 004',
	'Box 005',
	'Box 006',/*
	'Box 007',
	'Box 008',*/
	'Box 009',
	'Box 010',/*
	'Cabinet box 01',
	'Cabinet box 02',
	'Cabinet box 03',
	'Cabinet box 04',
	'Cabinet box 05',
	'Cabinet box 06',
	'Cabinet box 07',
	'Cabinet box 08',
	'Cabinet box 09',
	'Cabinet box 10',
	'Cabinet box 11',
	'Cabinet box 12',*/
	'Paper box 01',
	'Paper box 02',
	'Paper box 03',
	'Paper box 04',
	'Paper box 05',
	'Paper box 06',/*
	'Component case 01',*/
	'Other',
	'All'
	//'Reset'
];

var head_table_portuguese = ['ID', 'IMAGEM', 'NOME', 'DESCRICAO', 'CATEGORIA', 'QUANTIDADE', 'LOCALIZACAO', 'STATUS'];
var head_table_english = ['ID', 'IMAGE', 'NAME', 'DESCRIPTION', 'CATEGORY', 'QUANTITY', 'LOCATION', 'STATUS'];

function loadData( event ){
	//alert( event.target.value );
	//alert( event.target.getAttribute('data-topic') );
	//alert( event.target.getAttribute('data-result') );
	
	var selected  = event.target.value;
	var topic     = event.target.getAttribute( 'data-topic' );
	var objResult = document.getElementById( event.target.getAttribute( 'data-result' ) );
	
	var xhttp = new XMLHttpRequest();
	//var v1    = document.getElementById("orderBy").value;
	//var v2    = document.getElementById("ascDesc").value;
	xhttp.onreadystatechange = function(){
		if( this.readyState <= 3 ){
			objResult.innerHTML = '<center><img src="img/animal.gif" /></center>';
		}
		else if( this.readyState == 4 && this.status == 200 ){
			while( objResult.firstChild ){
				objResult.removeChild( objResult.firstChild );
			}
			
			//objResult.innerHTML = this.responseText;
			var result = JSON.parse( this.responseText );
			var table = document.createElement( 'table' );
			
			{
				var thead = document.createElement( 'thead' );
				var tr    = document.createElement( 'tr' );
				for( var i=0; i<head_table_english.length; i++ ){
					var td = document.createElement( 'td' );
					td.innerText = head_table_english[i];
					td.setAttribute( 'style', 'background-color:black;color:white;font-weight:bold;text-align:center;' );
					tr.appendChild( td );
				}
				thead.appendChild( tr );
				table.appendChild( thead );
			}
			{
				var tbody = document.createElement( 'tbody' );
				for( var i=0; i<result.length; i++ ){
					var tr = document.createElement( 'tr' );
					var result_temp = result[i];
					for( var key in result_temp ){
						var td = document.createElement( 'td' );
						td.innerText = result_temp[key];
						td.setAttribute( 'class', 'class_' + key );
						tr.appendChild( td );
					}
					tbody.appendChild( tr );
				}
				table.appendChild( tbody );
			}
			{
				var div = document.createElement( 'div' );
				div.setAttribute( 'style', 'background-color:#defaf7;border:1px solid #faa;border-radius:5px;margin-bottom:3px;padding:5px 3px 5px 10px;padding-bottom:5px;width:100%;' );
				div.innerHTML = '<b>' + result.length + '</b> elements in <b>' + selected + '</b><br/>';
				objResult.appendChild( div );
			}
			objResult.appendChild( table );
		//	obj_table.className = "table table-striped table-sm";
		//	obj_thead.className = "thead-dark";
		//	var obj_tr    = document.createElement( "tr" );
		//	var array = ['ID', 'NOME', 'DESCRICAO', 'TIPOS', 'QUANT.', 'IMAGEM', 'LOCALIZACAO', 'LINK'];
		//	for( var i=0; i<array.length; i++ ){
		//		var obj_th = document.createElement( "th" );
		//		var text   = document.createTextNode( array[i] );
		//		obj_th.scope = "col";
		//		obj_th.style.fontWeight = "bold";
		//		obj_th.style.textAlign  = "center";
		//		obj_th.appendChild( text );
		//		obj_tr.appendChild( obj_th );
		//	}
		//	obj_thead.appendChild( obj_tr );
		//	obj_table.appendChild( obj_thead );
		//	document.getElementById("tableListQuery").innerHTML = '';
		//	document.getElementById("tableList").innerHTML += this.responseText;
		}
	};
	xhttp.open( "POST", "list.php", true );
	xhttp.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
	if( (topic == 'category') || (topic == 'location') ){
		//xhttp.send( "option=" + selected + "&orderBy=" + v1 + "&ascDesc=" + v2 );
		xhttp.send( "option=" + topic + "&value="+ selected + "&orderBy=id&ascDesc=ASC" );
	}
	/*
	else if( topic == 'location' ){
		//xhttp.send( "location=" + selected + "&orderBy=" + v1 + "&ascDesc=" + v2 );
		xhttp.send( "location=" + selected + "&orderBy=id&ascDesc=ASC" );
	}
	else{
		alert( 'Erro na escolha da opcao! Faca outra escolha' );
	}
	*/
	
	/*
	
	else{
		var xhttp = new XMLHttpRequest();
		var v1    = document.getElementById("orderBy").value;
		var v2    = document.getElementById("ascDesc").value;
		xhttp.onreadystatechange = function(){
			if( this.readyState <= 3 ){
				// gif in http://loading.io/ //
				document.getElementById("tableList").innerHTML = '<center><img src="img/animal.gif" /></center>';
			}

			if( this.readyState == 4 && this.status == 200 ){
				var obj_table = document.getElementById( "tableList" );
				var obj_thead = document.createElement( "thead" );
				obj_table.innerHTML = '';
				obj_table.className = "table table-striped table-sm";
				obj_thead.className = "thead-dark";
				var obj_tr    = document.createElement( "tr" );
				var array = ['ID', 'NOME', 'DESCRICAO', 'TIPOS', 'QUANT.', 'IMAGEM', 'LOCALIZACAO', 'LINK'];
				for( var i=0; i<array.length; i++ ){
					var obj_th = document.createElement( "th" );
					var text   = document.createTextNode( array[i] );
					obj_th.scope = "col";
					obj_th.style.fontWeight = "bold";
					obj_th.style.textAlign  = "center";
					obj_th.appendChild( text );
					obj_tr.appendChild( obj_th );
				}
				obj_thead.appendChild( obj_tr );
				obj_table.appendChild( obj_thead );
				document.getElementById("tableListQuery").innerHTML = '';
				document.getElementById("tableList").innerHTML += this.responseText;
			}
		};
		xhttp.open( "POST", "list.php", true );
		xhttp.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
		if( type == 'category' ){
			xhttp.send( "option=" + option + "&orderBy=" + v1 + "&ascDesc=" + v2 );
		}
		else if( type == 'location' ){
			xhttp.send( "location=" + option + "&orderBy=" + v1 + "&ascDesc=" + v2 );
		}
		else{
			alert( 'Erro na escolha da opcao! Faca outra escolha' );
		}
	}
	*/
}

function createOptions( objetMenu, objectResult, topic, arrayValues ){
	while( objetMenu.firstChild ){
		objetMenu.removeChild( objetMenu.firstChild );
	}
	
	while( objectResult.firstChild ){
		objectResult.removeChild( objectResult.firstChild );
	}
	
	var numberColumns = 5;
	var numberRows = Math.ceil( arrayValues.length / numberColumns );
	var row = 0;
	var column = 0;
	for( var i=0; i<arrayValues.length; i++ ){
		row = (i / numberColumns) | 0;
		column = i % numberColumns;
		
		var div = document.createElement( 'div' );
		div.style.gridRow = (row + 1).toString();
		div.style.gridColumn = (column + 1).toString();
		
		var buttonOption = document.createElement( 'button' );
		buttonOption.value = arrayValues[row * numberColumns + column];
		buttonOption.innerText = arrayValues[row * numberColumns + column];
		buttonOption.onclick = loadData;
		buttonOption.setAttribute( 'data-topic', topic );
		buttonOption.setAttribute( 'data-result', objectResult.id );
		buttonOption.setAttribute( 'class', 'btn btn-light' );
		buttonOption.setAttribute( 'style', 'font-weight:bold;min-width:7rem' );
		
		div.appendChild( buttonOption );
		objetMenu.appendChild( div );
	}
}

function loadOption( idObjectMenu, idObjectResult, value ){
	if( value == 'category' ){
		createOptions(
			document.getElementById( idObjectMenu ),
			document.getElementById( idObjectResult ),
			'category',
			category_options_english
		);
	}
	else if( value == 'location' ){
		createOptions(
			document.getElementById( idObjectMenu ),
			document.getElementById( idObjectResult ),
			'location',
			location_options_english
		);
	}
}