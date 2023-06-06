<?php
function numerosGrille() {

$grilleLoto = [];
for ($i=1; $i < 6; $i++) { 
    $numLoto = mt_rand(1, 49);
    while (isAlreadyInList($grilleLoto, $numLoto) === true) {
        $numLoto = mt_rand(1, 49);
    }
    $grilleLoto[] = $numLoto;
}
$grilleLoto[] = mt_rand(1,10);
return $grilleLoto;
}

function isAlreadyInList($testListe, $number) {
    $answer = false ;
    foreach ($testListe as $test) {
        if ($test === $number) {
            $answer = true;
        }
    }
    return $answer;
}   