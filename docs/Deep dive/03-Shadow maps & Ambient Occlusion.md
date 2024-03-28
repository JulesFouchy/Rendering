import YoutubeVideo from "/src/components/YoutubeVideo"
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Shadow Map

### Qu'est-ce qu'une shadow map ?

<Tabs>
  <TabItem value="avec" label="Avec">

![](img/shadow-on.png)

  </TabItem>
  <TabItem value="sans" label="Sans">

![](img/shadow-off.png)

  </TabItem>
</Tabs>

### Limites

Ici on peut voir le problème : seul les objets proches ont des ombres, et elles apparaissent subitement quand on se rapproche des objets: 
https://youtu.be/T9OBDscbHwY?t=176

## Ambient Occlusion

<Tabs>
  <TabItem value="avec" label="Avec">

![](img/ao-on.png)

  </TabItem>
  <TabItem value="sans" label="Sans">

![](img/ao-off.png)

  </TabItem>
</Tabs>