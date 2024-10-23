## Rappels

Un shader est un programme qui s'exécute sur le **GPU** (contrairement aux programmes dont vous avez l'habitude, qui tournent sur le **CPU**).

La force du GPU est d'être très parallélisé : là où un CPU aura quelques dizaines de threads, un GPU en a des milliers ! Il peut donc faire énormément d'opérations en parallèle, par exemple traiter des milliers de pixels en même temps, ou des milliers de sommets d'un mesh.

Il existe différents types de shaders :
- le **vertex shader** process des sommets : il reçoit toutes les infos d'un sommet (position, normale, etc.) et les modifie (par exemple positionne le modèle au bon endroit dans le monde, applique la caméra, etc.)
- le **fragment shader** process des pixels : il reçoit des infos du vertex shader (qui s'exécute avant), et doit retourner une couleur pour le pixel en question, et appliquant l'éclairage, nos effets custom, etc.

Dans le Material Editor de Unreal ces deux shaders sont présentés dans un seul graphe, mais il est bon de toujours se rappeler que ce sont deux étapes séparées : d'abord le vertex, puis le fragment.

- le **compute shader** est en dehors de la pipeline classique du rendu 3D. C'est un shader plus récent, et plus générique. Il prend des tableaux quelconques, et les modifie comme il veut. C'est de plus en plus utilisés pour accélérer certains systèmes, par exemple les simulations de cloth, ou les particules.

Il existe aussi d'autre types beaucoup plus niches, comme le **geometry shader** et le **tesselation shader**, dont nous ne parlerons pas.

## Fonctions utiles

- `Add`: translation

- `Multiply`: scale

- `Step` / `SmoothStep`: seuils

- `Frac` / `Fmod`: répétitions

- `Sine` (sinus): oscillations

- `Lerp` / `InvLerp` / `RemapValueRange`: remapper des valeurs