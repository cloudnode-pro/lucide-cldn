import {Icon} from "../Icon.js";

export class CigaretteOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12H3A1 1 0 0 0 2 13V15A1 1 0 0 0 3 16H16M18 8C18 5.5 16 5.5 16 3M2 2 22 22M21 12A1 1 0 0 1 22 13V15A1 1 0 0 1 21.5 15.9M22 8C22 5.5 20 5.5 20 3M7 12V16"/></svg>`
        ).node);
    }
}
