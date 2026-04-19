# Documentació de Formularis

Aquesta secció detalla la implementació del formulari de cerca reactiu situat a `FormulariCercaComponent`, incloent els seus validadors i el comportament de cerca automàtica.

## Validadors Implementats

El camp `termeCerca` utilitza una combinació de validadors síncrons i asíncrons per assegurar la integritat de l'entrada de dades.

### Validadors Síncrons
S'executen immediatament cada vegada que el valor canvia:

1.  **Validators.minLength(2)**: Impedeix cercar termes massa curts. El mínim són 2 caràcters.
2.  **Validators.maxLength(50)**: Estableix un límit superior de 50 caràcters per seguretat i rendiment.

### Validadors Asíncrons
S'activen un cop els síncrons són vàlids:

*   **codiDisponibleValidator**: 
    *   **Lògica**: Crida al servei `ElementService` per comprovar si el terme existeix.
    *   **Retard**: S'ha afegit un `delay(500)` per simular la latència de xarxa i permetre mostrar l'estat de validació a la UI.
    *   **Error**: Si no hi ha resultats, retorna l'objecte d'error `{ sensResultats: true }`.

## Comportament del Debounce

Per evitar sobrecarregar el servei amb peticions a cada pulsació de tecla, s'ha implementat un control de temps:

*   **Operador RxJS**: S'utilitza `debounceTime(400)`.
*   **Funcionament**: El formulari espera que l'usuari deixi d'escriure durant 400ms abans de processar el valor.
*   **Execució**: Si després del debounce el camp és vàlid, s'executa la cerca automàticament sense que l'usuari hagi de prémer cap botó.

## Estats de la Interfície

*   **Validant...**: Es mostra quan el control està en estat `PENDING` (durant l'execució del validador asíncron).
*   **Feedback d'Error**: Només es mostren els missatges quan l'usuari ha interactuat amb el camp (`touched`) i aquest és invàlid.
