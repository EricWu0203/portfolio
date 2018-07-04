
<?php print('<?xml version="1.0" encoding="utf-8"?>') ?>

<!DOCTYPE html>
<html>
<head>
	<title>USING PHP DOC</title>
</head>
<?php  
  $file = fopen("1.txt", "r");
  $num=fgets($file);
  $num=$num+1;
  $file=fopen("1.txt", "w");
  fwrite($file, $num);
  fclose($file);
$abc=10;
?>

<?php $x=4; ?>
<body style="font-size: 2em ">
	<strong> 
		你的名字為： <?php print("$_POST[username]"); ?>
	</strong>
	<br>
		你的學號為： <?php print("$_POST[schoolnumber]"); ?>
			
		<br/>
		<br/>
		你猜的號碼為： <?php print("$_POST[number]"); ?>
			
		<br/>
		<?php if ($x > "$_POST[number]") {
			echo "bigger";
		}elseif ($x < "$_POST[number]") {
			echo "bigger";
		}
		elseif ($x ="$_POST[number]") {echo "bigger";
		 	} ; ?>

		 	<br/>
		 	你總共猜了<?php echo "$num"?>次;
		 </body>
		 <br/>
		 <input type="button" onclick="history.back()" value="back" >
		 
</body>


</html>


 