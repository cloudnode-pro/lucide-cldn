import {Icon} from "../Icon.js";

export class SquarePilcrow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 12H9.5A2.5 2.5 0 0 1 9.5 7H17M12 7V17M16 7V17"/></svg>`
        ).node);
    }
}
