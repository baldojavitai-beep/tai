<?php
// Devuelve en JSON los archivos .js de esta carpeta (para el selector del index).
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$out = [];
foreach (glob(__DIR__ . DIRECTORY_SEPARATOR . '*.js') as $f) {
    $n = basename($f);
    // En Windows los nombres con tildes pueden venir en ANSI: se pasan a UTF-8
    if (!mb_check_encoding($n, 'UTF-8')) {
        $n = mb_convert_encoding($n, 'UTF-8', 'Windows-1252');
    }
    $out[] = $n;
}
natcasesort($out);
echo json_encode(array_values($out), JSON_UNESCAPED_UNICODE);
