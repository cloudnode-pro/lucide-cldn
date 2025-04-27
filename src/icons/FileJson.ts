import {Icon} from "../Icon.js";

export class FileJson extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7Z"/><path d="M14 2V6A2 2 0 0 0 16 8H20M10 12A1 1 0 0 0 9 13V14A1 1 0 0 1 8 15 1 1 0 0 1 9 16V17A1 1 0 0 0 10 18M14 18A1 1 0 0 0 15 17V16A1 1 0 0 1 16 15 1 1 0 0 1 15 14V13A1 1 0 0 0 14 12"/></svg>`
        ).node);
    }
}
