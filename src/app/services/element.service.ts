import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Element } from '../models/element.model';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
    providedIn: "root"
})

export class ElementService {

    //Dependencies Injection
    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    //Private Signals

    private readonly _elements = signal<Element[]>([]);
    private readonly _carregant = signal<boolean>(false);
    private readonly _error = signal<string>("");

    //Public API
    public readonly elements = this._elements.asReadonly();
    public readonly carregant = this._carregant.asReadonly();
    public readonly error = this._error.asReadonly();

    constructor() { }

    obtenirPopulars(): void {
        //function to make petitions

        //Activate loading and Clean previous errors
        this._carregant.set(true);
        this._error.set("");

        //Make petition

        this.http.get<Element[]>(`${this.apiUrl}/elements?popular=true`)
            .pipe(
                //try
                tap((dades) => {
                    this._elements.set(dades);
                    this._carregant.set(false);
                }),
                //catch
                catchError((err) => {
                    this._carregant.set(false);
                    this._error.set("Error al cargar juegos")
                    return of([]);
                })
            )
            .subscribe();


    }

    cercar(terme: string): void {
        //function to make search petitions 
        //Activate loading and Clean previous errors
        this._carregant.set(true);
        this._error.set("");

        //Make petition

        this.http.get<Element[]>(`${this.apiUrl}/elements?name_like=${terme}`)
            .pipe(
                //try
                tap((dades) => {
                    this._elements.set(dades);
                    this._carregant.set(false);
                }),
                //catch
                catchError((err) => {
                    this._carregant.set(false);
                    this._error.set("Error al buscar juegos")
                    return of([]);
                })
            )
            .subscribe();
    }



}