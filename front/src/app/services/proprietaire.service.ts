import { Proprietaire } from '../proprietaire/proprietaire';

export class ProprietaireService {

  public list: Proprietaire[] = [
    {
      id: 1,
      nom: 'DEFAYE',
      prenom: 'Cyril',
      adresse: {
          ligne1: 'Résidence des Bisounours, Bâtiment AA',
          ligne2: '1 rue du takoyadev',
          codePostal: '13100',
          ville: 'AIX EN PROVENCE',
          pays: 'FRANCE'
      },
      telephone: '+33123456789'
    },
    {
      id: 2,
      nom: 'EIMARD',
      prenom: 'Christophe',
      adresse: {
          ligne1: 'Résidence des Bisounours, Bâtiment BB',
          ligne2: '3 rue du takoyadev',
          codePostal: '13100',
          ville: 'AIX EN PROVENCE',
          pays: 'FRANCE'
      },
      telephone: '+33987654321'
    }
  ];

  getById(id: number) {
    return this.list.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  getList() {
      return this.list;
  }

}
