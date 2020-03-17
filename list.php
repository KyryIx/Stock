<?php
	// https://www.php.net/manual/pt_BR/function.array-push.php
	// https://www.php.net/manual/pt_BR/function.array.php
	// https://www.php.net/manual/pt_BR/function.json-encode
	// https://www.php.net/manual/pt_BR/ref.strings.php
	// https://www.php.net/manual/pt_BR/function.explode.php
	
	if( isset( $_POST['option'] ) && isset( $_POST['value'] ) ){
		//echo $_POST['option'] . '=' . $_POST['value'];
		
		$sql     = '';
		$orderBy = 'id';
		$ascDesc = 'ASC';
		$option  = $_POST['option'];
		$value   = $_POST['value'];
		
		switch( $option ){
			case 'location':
			{
				$sql = "SELECT id, name, description, category, quantity, locationBox, status, locationImage FROM item WHERE locationBox LIKE '$value' ORDER BY $orderBy $ascDesc";
				break;
			}
			case 'category':
			default:
			{
				$sql = "SELECT id, name, description, category, quantity, locationBox, status, locationImage FROM item WHERE category LIKE '$value' ORDER BY $orderBy $ascDesc";
			}
		}
		
		try{
			$db  = new PDO( 'sqlite:./patrimony/patrimony.db3' );
			$sth = $db->prepare( $sql );
			$sth->execute();
			$array = array();
			while( $row = $sth->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT) ){
				array_push(
					$array,
					array(
						'id'            => $row['id'],
						'locationImage' => /*explode( ';', $row['locationImage'], 2 )*/ 'IMAGE',
						'name'          => $row['name'],
						'description'   => $row['description'],
						'category'      => $row['category'],
						'quantity'      => $row['quantity'],
						'locationBox'   => $row['locationBox'],
						'status'        => $row['status']
					)
				);
			}
			
			echo json_encode( $array );
			
			$sth = null;
			$db  = null;
		}
		catch( PDOException $e ){
			throw new PDOException( "Error  : " .$e->getMessage() );
		}
	}
?>