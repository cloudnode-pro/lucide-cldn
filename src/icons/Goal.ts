import {Icon} from "../Icon.js";

export class Goal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V2L20 6 12 10"/><path d="M20.6 10.2A9 9 0 1 1 8 5"/><path d="M8 10A5 5 0 1 0 16.9 12"/></svg>`
        ).node);
    }
}
