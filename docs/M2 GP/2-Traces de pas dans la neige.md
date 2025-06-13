import YoutubeVideo from "/src/components/YoutubeVideo"

**IMPORTANT:** [déposez un lien git vers votre projet Unity ici](https://docs.google.com/spreadsheets/d/1hFb78dl3vhGOVNdYYkGjotGaSb4AsePzQq_jCEdALds/edit?usp=sharing). **Attention** à bien vérifier que le repo est en public ! (ou ajoutez moi dessus, [JulesFouchy](https://github.com/JulesFouchy))

<YoutubeVideo id="ftCyZ7F5q9E"/>

## Pour aller plus loin (hors évaluation, seulement le premier tuto ci-dessus est évalué)

Un effet un peu plus poussé, qui prend en compte la profondeur entre le personnage et le sol (si le perso saute au-dessus de la neige on ne veut pas qu'il laisse des traces dedans), ainsi que la forme exacte du personnage (dans le premier tuto on dessinait toujours un rond, mais en fait on peut carrément rendre le mesh du personnage, mais ça implique de prendre en compte la profondeur pour que le rendu soit smooth) :

<YoutubeVideo id="oMzI9DLgPKc"/>
<br/>

Le même genre de technique peut être utilisée pour faire réagir l'herbe quand on personnage marche dedans. La différence est qu'on va faire ployer l'herbe quand on passe, et il faut qu'elle revienne progressivement à sa place après, donc la texture doit stocker depuis combien de temps le joueur est passé, pas seulement si il est passé ou non, ce qui rajoute quelques complexités :

<YoutubeVideo id="MKX45_riWQA?start=3045"/>
<br/>
<br/>