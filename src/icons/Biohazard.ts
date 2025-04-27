import {Icon} from "../Icon.js";

export class Biohazard extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="11.9" r="2"/><path d="M6.7 3.4C5.8 5.9 6.7 8.6 8.9 10.1A6 6 0 0 0 2 11.6M8.9 10.1 10.3 10.9M17.3 3.4C18.2 5.9 17.3 8.6 15.1 10.1A5.6 5.6 0 0 1 22 11.6M15.1 10.1 13.7 10.9M16.7 20.8A5.6 5.6 0 0 1 12 15.5 5.6 5.6 0 0 1 7.3 20.7M12 13.9V15.5M13.5 5.4Q12 5.1 10.5 5.4M17 16.4Q18 15.3 18.5 13.9M5.5 13.9Q5.9 15.3 7 16.4"/></svg>`
        ).node);
    }
}
