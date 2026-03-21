export interface Element{
    id:number
    name:string
    category:string
    minPlayers: number
    maxPlayers: number
    summary: string
    playHistory?: string[]

}