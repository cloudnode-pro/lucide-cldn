import {Icon} from "../Icon.js";

export class Link extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13A5 5 0 0 0 17.5 13.5L20.5 10.5A5 5 0 0 0 13.5 3.5L11.7 5.2"/><path d="M14 11A5 5 0 0 0 6.5 10.5L3.5 13.5A5 5 0 0 0 10.5 20.5L12.2 18.8"/></svg>`
        ).node);
    }
}
