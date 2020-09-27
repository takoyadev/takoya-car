import { Voiture } from '../voiture/voiture';

export class Entretien {

    public id: number;
    public libelle: string;
    public date: Date;
    public description: string;
    public car: Voiture;
    public status: string;
    public detail: string;

}
