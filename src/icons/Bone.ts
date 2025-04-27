import {Icon} from "../Icon.js";

export class Bone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 10C17.7 9.3 18.7 10 19.5 10A2.5 2.5 0 1 0 19.5 5L19 4.5A2.5 2.5 0 1 0 14 4.5C14 5.3 14.7 6.3 14 7L7 14C6.3 14.7 5.3 14 4.5 14A2.5 2.5 0 0 0 4.5 19Q5 19 5 19.5A2.5 2.5 0 1 0 10 19.5C10 18.7 9.3 17.7 10 17Z"/></svg>`
        ).node);
    }
}
