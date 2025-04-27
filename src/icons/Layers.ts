import {Icon} from "../Icon.js";

export class Layers extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.8 2.2A2 2 0 0 0 11.2 2.2L2.6 6A1 1 0 0 0 2.6 7.9L11.2 12A2 2 0 0 0 12.8 11.8L21.4 7.8A1 1 0 0 0 21.4 6.1z"/><path d="M2 12A1 1 0 0 0 2.6 13L11.2 16.7A2 2 0 0 0 12.8 16.8L21.4 13A1 1 0 0 0 22 12M2 17A1 1 0 0 0 2.6 18L11.2 21.7A2 2 0 0 0 12.8 21.8L21.4 18A1 1 0 0 0 22 17"/></svg>`
        ).node);
    }
}
