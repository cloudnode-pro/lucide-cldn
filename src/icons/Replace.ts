import {Icon} from "../Icon.js";

export class Replace extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 4A2 2 0 0 1 16 2M16 10A2 2 0 0 1 14 8M20 2A2 2 0 0 1 22 4M22 8A2 2 0 0 1 20 10M3 7 6 10 9 7"/><path d="M6 10V5A3 3 0 0 1 9 2H10"/><rect width="8" height="8" x="2" y="14" rx="2"/></svg>`
        ).node);
    }
}
