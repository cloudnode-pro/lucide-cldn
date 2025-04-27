import {Icon} from "../Icon.js";

export class SquaresSubtract extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22A2 2 0 0 1 8 20M16 22H14M16 4A2 2 0 0 0 14 2H4A2 2 0 0 0 2 4V14A2 2 0 0 0 4 16H7A1 1 0 0 0 8 15V10A2 2 0 0 1 10 8H15A1 1 0 0 0 16 7zM20 8A2 2 0 0 1 22 10M22 14V16M22 20A2 2 0 0 1 20 22"/></svg>`
        ).node);
    }
}
