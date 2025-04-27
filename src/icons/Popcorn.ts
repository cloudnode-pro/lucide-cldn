import {Icon} from "../Icon.js";

export class Popcorn extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A2 2 0 0 0 18 4 2 2 0 0 0 14 4 2 2 0 0 0 10 4 2 2 0 0 0 6 4 2 2 0 0 0 6 8M10 22 9 8M14 22 15 8"/><path d="M20 8Q20.8 8 20.8 9L18.2 21Q17.9 21.9 17 22H7Q6 22 5.8 21L3.2 9Q3.2 8 4 8Z"/></svg>`
        ).node);
    }
}
