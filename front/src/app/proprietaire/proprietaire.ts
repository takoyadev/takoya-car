import { Adresse } from '../adresse/adresse';

export class Proprietaire {

    public id: number;
    public nom: string;
    public prenom: string;
    // TODO à ajouter dans back
    public adresse: Adresse;
    public telephone: string;
    
}
