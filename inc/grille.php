<table>
    <tbody>
        <?php 
            require_once './fonction/random_num.php';
            $listeNumber = [];
            for ($i=1; $i <= 5; $i++) { 
                ?> <tr> <?php
                for ($j=1; $j <= 5; $j++) { 
                    do{
                        $ran =  rand(1, 69);
                    }while ( $ran % 2 == 0);
                    while (isAlreadyInList($listeNumber, $ran) === true) {
                        do{
                            $ran =  rand(1, 69);
                        }while ( $ran % 2 == 0);
                    }
                    $listeNumber[] = $ran;
                    echo '<td id="'.$ran.'">'.$ran.'</td>'; 
                }
                ?>
                </tr> <?php
            }
        ?>
    </tbody>
</table>
<button id="let-start" type="button">Débutons la grille !</button>
</main>