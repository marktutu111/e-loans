import { Observable, Subject } from "rxjs";

class LoginService {

        static login$ = new Subject();
        loggedIn = false;

        login () {
                return setTimeout(() => {
                        this.loggedIn = true;
                        LoginService.login$.next();

                }, 1000 * 2);
        }


}



export { LoginService };