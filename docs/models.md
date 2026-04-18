# Mapeig de Camps (API -> Model Intern)

Aquesta taula mostra com es transformen les dades de l'API (JSON) cap al model intern tipat de l'aplicació.

| API (ElementApiResponse) | App (ElementCataleg) | Tipus TypeScript |
| ------------------------ | -------------------- | ---------------- |
| id                       | id                   | string           |
| nom                      | titol                | string           |
| descripcio               | descripcio           | string           |
| categoria                | categoria            | string           |
| preu                     | preu                 | number           |
| imatge                   | imatgeUrl            | string           |
| popular                  | esPopular            | boolean          |
| stock                    | unitats              | number           |
| minJugadors              | minJugadors          | number           |
| maxJugadors              | maxJugadors          | number           |
| arxiu                    | arxiu                | string[]         |

