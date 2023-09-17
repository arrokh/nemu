<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webconsole</title>
</head>
<body>
    <?php
        if(isset($_GET['uid'])) {
        echo "<embed src='./webconsole.php?".$_GET['uid']."' frameborder='0' width='100%' height='400px' />";
        } else {
    ?>
    <embed src="./webconsole.php" frameborder="0" width="100%" height="400px" />
    <?php
        }
    ?>
</body>
</html>