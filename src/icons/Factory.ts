import {Icon} from "../Icon.js";

export class Factory extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V8L15 13V8L8 13V4A2 2 0 0 0 6 2H4A2 2 0 0 0 2 4ZM17 18H18M12 18H13M7 18H8"/></svg>`
        ).node);
    }
}
