import {Icon} from "../Icon.js";

export class Cross extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 9A2 2 0 0 0 2 11V13A2 2 0 0 0 4 15H8A1 1 0 0 1 9 16V20A2 2 0 0 0 11 22H13A2 2 0 0 0 15 20V16A1 1 0 0 1 16 15H20A2 2 0 0 0 22 13V11A2 2 0 0 0 20 9H16A1 1 0 0 1 15 8V4A2 2 0 0 0 13 2H11A2 2 0 0 0 9 4V8A1 1 0 0 1 8 9z"/></svg>`
        ).node);
    }
}
