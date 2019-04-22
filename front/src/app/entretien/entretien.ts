import { Voiture } from '../voiture/voiture';

export class Entretien {

    public id: number;
    public date: Date;
    public libelle: string;
    public voiture: Voiture;
    // TODO ajouter dans le back
    public status: string;
    public detail: string;

}
