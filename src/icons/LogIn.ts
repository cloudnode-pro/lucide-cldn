import {Icon} from "../Icon.js";

export class LogIn extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H15"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>`
        ).node);
    }
}
