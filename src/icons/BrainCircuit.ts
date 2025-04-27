import {Icon} from "../Icon.js";

export class BrainCircuit extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5A3 3 0 1 0 6 5.1 4 4 0 0 0 3.5 11 4 4 0 0 0 4 17.5 4 4 0 1 0 12 18Z"/><path d="M9 13A5 5 0 0 0 12 9M6 5.1 6.4 6.5M3.5 10.9 4 10.5M6 18A4 4 0 0 1 4 17.5M12 13H16M12 18H18A2 2 0 0 1 20 20V21M12 8H20M16 8V5A2 2 0 0 1 18 3"/><circle cx="16" cy="13" r="0.5"/><circle cx="18" cy="3" r="0.5"/><circle cx="20" cy="21" r="0.5"/><circle cx="20" cy="8" r="0.5"/></svg>`
        ).node);
    }
}
