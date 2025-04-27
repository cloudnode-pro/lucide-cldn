import {Icon} from "../Icon.js";

export class Sofa extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 9V6A2 2 0 0 0 18 4H6A2 2 0 0 0 4 6V9"/><path d="M2 16A2 2 0 0 0 4 18H20A2 2 0 0 0 22 16V11A2 2 0 0 0 18 11V12.5L17.5 13H6.5L6 12.5V11A2 2 0 0 0 2 11zM4 18V20M20 18V20M12 4V13"/></svg>`
        ).node);
    }
}
