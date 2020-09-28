import { Proprietaire } from '../proprietaire/proprietaire';

export class Voiture {

    public id: number;
    public marque: string;
    public modele: string;
    public owner: Proprietaire;
    // TODO à ajouter côté back
    public status: string;
    public detail: string;
    
}
