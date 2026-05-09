# Sistema de Navegació

## Mapa de Rutes

| Ruta | Component | Accés | Descripció |
| :--- | :--- | :--- | :--- |
| `/` | `Redirect` | Públic | Redirigeix automàticament a `/cataleg` |
| `/cataleg` | `CatalegPageComponent` | Públic | Pàgina principal amb el llistat d'elements |
| `/cerca` | `CercaPageComponent` | Públic | Vista de cerca amb el formulari |
| `/detall/:id`| `DetallPageComponent` | Públic | Vista de detall d'un element concret segons l'ID |
| `/preferits` | `PreferitsPageComponent` | Privat | Secció on es mostren els elements guardats com a preferits |
| `/login` | `LoginPageComponent` | Públic | Formulari d'autenticació per accedir a rutes privades |
| `**` | `Redirect` | Públic | Ruta comodí (wildcard): qualsevol URL invàlida redirigeix a `/cataleg` |

## Configuració del Sistema de Rutes

El sistema de rutes d'Angular s'ha configurat seguint els següents passos:

1. **`provideRouter`**: S'ha configurat al fitxer `app.config.ts` per injectar les rutes definides a tota l'aplicació en el moment d'arrencar. Aquesta funció agafa la constant `routes` (importada de `app.routes.ts`) i inicialitza el servei de navegació intern d'Angular.
2. **`RouterOutlet`**: S'ha importat el `RouterOutlet` al component arrel (`AppComponent`) i s'ha afegit l'etiqueta `<router-outlet>` a la seva plantilla HTML. Aquesta etiqueta actua com una "finestra" dinàmica on Angular injecta el component que correspon a la URL actual.
3. **`RouterLink` i `RouterLinkActive`**: Al component `NavegacioComponent`, s'han utilitzat aquestes directives. `routerLink` substitueix l'atribut `href` tradicional de HTML per evitar que la pàgina es recarregui sencera en navegar. D'altra banda, `routerLinkActive="active"` detecta si la ruta de l'enllaç coincideix amb la URL actual de l'usuari i, en cas afirmatiu, li aplica automàticament la classe CSS "active" per poder ressaltar-la visualment.
