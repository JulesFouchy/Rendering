## Charger un mesh depuis un fichier

Pour commencer, nous allons enfin utiliser de vrais modèles 3D. Pour cela, nous allons utiliser la librairie [*tinyobjloader*](TODO) qui lit le format de fichier *.obj* (un format simple de modèle 3D, qui est essentiellement une longue liste de sommets avec positions, UVs, normales, etc.). La librairie est déjà inclue par *opengl-framework*, vous n'avez rien à faire de ce côté là. Je vous laisse vous référer à [la documentation de *tinyobjloader*](TODO) pour voir comment l'utiliser pour lire un modèle 3D. Pour vos tests, vous pouvez utiliser [ce modèle 3D](/fourareen.zip).

**NB:** vous aurez besoin de la fonction `gl::make_absolute_path(path)` pour convertir un chemin relatif (par exemple `"res/meshes/fourareen.obj"` en un chemin absolu que *tinyobjloader* va comprendre).

![](./img/step-23.png)

:::tip
N'essayez pas de faire un index buffer, les sommets tels qu'ils sont donnés par *tinyobjloader*  ont un index buffer différent pour chaque attribut, ce qui n'est pas supporté par OpenGL. Il faudrait plutôt inspecter tous les sommets pour détecter ceux qui ont les mêmes positions **et** UVs **et** normales et recréer notre propre index buffer à partir de ça.
:::

:::tip
Si votre modèle est penché sur le côté au début, c'est "normal". Il n'y a pas de convention universelle pour l'axe qui pointe vers le haut : certain.es utilisent Y, et d'autres Z. Il faudra donc légèrement modifier les vertexs du mesh afin de faire pointer le bon axe vers le haut.
:::

:::info Note
Il y a aussi un fichier *.mtl* dans le modèle que je vous ai fourni. Il décrit le matériau de l'objet, nous en parlerons [plus tard](TODO).
:::

## Premier modèle d'éclairage et Normales

## Ombres

## Normal maps

## Effet see-through

-> depth buffer