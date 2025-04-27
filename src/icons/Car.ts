import {Icon} from "../Icon.js";

export class Car extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 17H21Q22 17 22 16V13A2 2 0 0 0 20.5 11.1L16 10 13.8 7.7Q13.1 7 12 7H5Q4 7 3.6 7.9L2.2 10.8 2 12V16Q2 17 3 17H5"/><circle cx="7" cy="17" r="2"/><path d="M9 17H15"/><circle cx="17" cy="17" r="2"/></svg>`
        ).node);
    }
}
