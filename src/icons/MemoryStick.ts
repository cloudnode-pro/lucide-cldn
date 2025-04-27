import {Icon} from "../Icon.js";

export class MemoryStick extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 19V16M10 19V16M14 19V16M18 19V16M8 11V9M16 11V9M12 11V9M2 15H22M2 7A2 2 0 0 1 4 5H20A2 2 0 0 1 22 7V8.1A2 2 0 0 0 22 11.9V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17V11.9A2 2 0 0 0 2 8.1Z"/></svg>`
        ).node);
    }
}
