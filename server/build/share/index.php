<?php
    header( 'Access-Control-Allow-Origin: *' );
    header( 'Access-Control-Allow-Headers:*' );

    // Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// @$email = $request->email;
// @$username = $request->username;
// @$authKey = $request->authKey;

@$code = $request->code;
@$fromEmail = $request->fromEmail;
@$toEmail = $request->toEmail;
@$messages = $request->messages;


// sanitize code
$code = str_replace('<', '&lt;', $code);
$code = str_replace('>', '&gt;', $code);

print "$code : ".$code;

$domain = parse_url($_SERVER['SERVER_NAME']);
// if ($domain['path'] == "iceeie.com") {
// 	$url = $domain['path']."/2017/auth/";
// } else {
// 	$url = $domain['path']."/iceeie/2017/auth/";
// }
// $authUrl = $url.$authKey;

$mail = new PHPMailer;
//-----Active this line where use localhost ----------------- 
$mail->isSMTP();                                   // Set mailer to use SMTP
//---------------------- 
$mail->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                            // Enable SMTP authentication
$mail->Username = 'poweredby.nemuid@gmail.com';
$mail->Password = 'NasGorCengNdok28@Aja';
$mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                 // TCP port to connect to

$mail->setFrom('iceeie@um.ac.id', 'NEMU ID');
// $mail->addReplyTo('mail.wse@gmail.com', 'CodexWorld');
$mail->addAddress($toEmail);   // Add a recipient
$mail->addCC($fromEmail);
//$mail->addBCC('bcc@example.com');

$mail->isHTML(true);  // Set email format to HTML

$bodyContent = '<p>Halo :) </p>';
$bodyContent .= '<br>';
$bodyContent .= '<table style="width:100%" style="border-style: groove;">
<tr>
  <td style="border-style: groove;">From</td>
  <td style="border-style: groove;">'.$fromEmail.'</td>
</tr>
<tr>
    <td style="border-style: groove;">To</td> 
    <td style="border-style: groove;">'.$toEmail.'</td> 
</tr>
<tr>
    <td style="border-style: groove;">Message</td>
    <td style="border-style: groove;">'.$messages.'</td>
</tr>
<tr>
  <td style="border-style: groove;">Code</td>
  <td style="border-style: groove;"><pre>'.$code.'</pre></td>
</tr>
</table>';
// $bodyContent .= '<p>Terimakasih banyak,</p>';
$bodyContent .= '<p>Dari <br> NEMU Teams</p>';

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



/*
$bodyContent = '
<p>Thank you <strong>'.$username.'</strong> for registering on <a href="http://elektro.um.ac.id/iceeie/2017/">ICEEIE 2017<a>,</p>
<p>To activate your account please go to the URL below:</p>

<p>'.$authUrl.'</p>

<p>Once your account is activated you will be logged-into the web</p>
';
*/
$mail->Subject = 'Project Share NEMU ID';
$mail->Body    = $bodyContent;

if(!$mail->send()) {
    echo "failed<br>";
    var_dump($mail->ErrorInfo);
} else {
    echo "success";
}

?>
