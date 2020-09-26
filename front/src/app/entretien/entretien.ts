import { Voiture } from '../voiture/voiture';

export class Entretien {

    public id: number;
    public libelle: string;
    public date: string;
    public description: string;
    public voiture: Voiture;
    public car_id: number;
    public status: string;
    public detail: string;

}
