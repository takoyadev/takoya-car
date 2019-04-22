export class AuthService {

  isAuth = false;

  signIn() {
    return new Promise(
      (resolve) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 1
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }

}
