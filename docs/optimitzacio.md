# Optimització

## 1. ChangeDetectionStrategy.OnPush

He afegit l'estratègia `OnPush` a aquests dos components:

1. **`TargetaElementComponent`**: 
   Aquest era clar perquè és un component de presentació bàsic. Totes les dades li arriben per l'`@Input() game`. Posant-li l'OnPush faig que Angular no hagi d'estar revisant-lo tota l'estona innecessàriament, només quan li passo un joc nou. Això va molt bé ara que tenim tantes targetes a la llista.

2. **`DetallPageComponent`**:
   He decidit posar-lo aquí també perquè les dades de la pàgina només canvien un cop quan es carrega la informació de l'API. L'únic tema és que com que les dades arriben asíncronament dins del `subscribe`, l'HTML no s'actualitzava sol. Ho he solucionat injectant el `ChangeDetectorRef` i cridant a `this.cdr.markForCheck()` just quan rebo les dades.

## 2. Virtualització amb CDK

Per optimitzar el llistat principal he fet servir `@angular/cdk/scrolling`:

- **itemSize**: He posat un `itemSize` de `380`. Ho he calculat a ull mirant el que ocupa aproximadament cada targeta (`<app-targeta-element>`) més el padding perquè el scroll virtual calculi bé quantes targetes caben a la pantalla.
- **Nombre d'elements**: Al `cataleg.json` només hi havia 10 jocs de taula, així que he copiat i enganxat els mateixos jocs canviant-los l'ID fins a tenir-ne **60 en total**. Així es pot veure bé com funciona l'scroll. Si obres les eines de desenvolupador del navegador, es veu com el DOM només pinta unes poques targetes i les va reciclant mentre vas baixant, en lloc de carregar les 60 de cop.
