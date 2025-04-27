import {Icon} from "../Icon.js";

export class TypeOutline extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 16.5 14.5 17H15A2 2 0 0 1 15 21H9A2 2 0 0 1 9 17H9.5L10 16.5V7.5L9.5 7H6.5L6 7.5V8A2 2 0 0 1 2 8V5A2 2 0 0 1 4 3H20A2 2 0 0 1 22 5V8A2 2 0 0 1 18 8V7.5L17.5 7H14.5L14 7.5Z"/></svg>`
        ).node);
    }
}
