import { Proprietaire } from '../proprietaire/proprietaire';

export class Voiture {

    public id: number;
    public marque: string;
    public modele: string;
    public proprietaire: Proprietaire;
    // TODO � ajouter c�t� back
    public status: string;
    public detail: string;
    
}
