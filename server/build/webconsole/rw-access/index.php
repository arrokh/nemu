<?php
    header( 'Access-Control-Allow-Origin: *' );
    header( 'Access-Control-Allow-Headers: x-requested-with, content-type' );
    
    if (array_key_exists('REQUEST_METHOD', $_SERVER) && $_SERVER['REQUEST_METHOD'] == 'POST') {
        
        $request_body = file_get_contents('php://input');
        $uid = json_decode($request_body)->uid;
        $code = json_decode($request_body)->code;

        $docPath = '../../dataUser/'.$uid;
        if (!file_exists($docPath)) {
            mkdir ($docPath, 0777);
        }
        $my_file = '../../dataUser/'.$uid.'/main.cpp';
        $handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
        fwrite($handle, $code);
    }
