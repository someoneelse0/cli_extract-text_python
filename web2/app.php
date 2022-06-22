<?php
	$fd="uploads/";
	$f=$fd.basename($_FILES["file0"]["name"]);
	$ext=strtolower(pathinfo($fd,$_FILES["file0"]["name"]));
	if($_POST["submit"]!=null){
		$c=getimagesize($_FILES["file0"]["tmp_name"]);
		if($c!==false){
			echo "This file is an image and it has ".$c["mime"]." extension";
		}else{
			echo "This file is not an image";
		}
	}
?>
