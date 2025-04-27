import {Icon} from "../Icon.js";

export class FishOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 12V12.5M17.5 17.5A7 7 0 0 1 15 18C11.4 18 7.4 15.5 6.5 12A7 7 0 0 1 8.6 8.6M12.1 6.6A9 9 0 0 1 15 6C18.6 6 21 8.5 22 12A10 10 0 0 1 20.6 15"/><path d="M7 10.7Q7 6.5 2.7 5.5C1.7 7 1.7 10.5 3 12 1.7 13.5 1.7 17 2.7 18.5Q7 17.5 7 13.3M14.5 9A10 10 0 0 1 16 6M16 18A10 10 0 0 1 14.3 14.2M16 18 15.8 19.2A2 2 0 0 1 13.8 21H9.5A6 6 0 0 0 11 17M8.5 3H13.8A2 2 0 0 1 15.8 4.7L16 6M2 2 22 22"/></svg>`
        ).node);
    }
}
