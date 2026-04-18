export interface ElementApiResponse {
    id: string;
    nom: string;
    descripcio: string;
    categoria: string;
    preu: number;
    imatge: string;
    popular: boolean;
    minJugadors: number;
    maxJugadors: number;
    arxiu?: string[];
    stock: number;

}

export interface ElementCataleg {
    id: string;
    titol: string;
    descripcio: string;
    categoria: string;
    preu: number;
    imatgeUrl: string
    esPopular: boolean;
    minJugadors: number;
    maxJugadors: number;
    arxiu?: string[];
    unitats: number;
}

// export interface Element{
//     id:number
//     name:string
//     category:string
//     minPlayers: number
//     maxPlayers: number
//     summary: string
//     playHistory?: string[]

// }