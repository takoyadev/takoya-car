import { Proprietaire } from '../proprietaire/proprietaire';

export class ProprietaireService {

  public list: Proprietaire[] = [
    {
      id: 1,
      nom: 'DEFAYE',
      prenom: 'Cyril'
    },
    {
      id: 2,
      nom: 'EIMARD',
      prenom: 'Christophe'
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
