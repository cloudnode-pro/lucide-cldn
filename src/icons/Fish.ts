import {Icon} from "../Icon.js";

export class Fish extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6.5 12C7.5 8.5 11.5 6 15 6 18.6 6 21 8.5 22 12 21 15.5 18.6 18 15 18S7.4 15.5 6.5 12M18 12V12.5"/><path d="M16 18A10 10 0 0 1 16 6M7 10.7Q7 6.5 2.7 5.5C1.7 7 1.7 10.5 3 12 1.7 13.5 1.7 17 2.7 18.5Q7 17.5 7 13.3M10.5 7.3Q9.9 5 8 3H13.8A2 2 0 0 1 15.8 4.7L16 6M16 18 15.8 19.2A2 2 0 0 1 13.8 21H9.5A6 6 0 0 0 11 17"/></svg>`
        ).node);
    }
}
