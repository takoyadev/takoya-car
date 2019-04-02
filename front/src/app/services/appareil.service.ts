export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Freebox-server',
      status: 'allumé'
    },
    {
      id: 2,
      name: 'Freebox-player',
      status: 'éteint'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
  }

  getAppareilById(id: number) {
    return this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
  }

}
