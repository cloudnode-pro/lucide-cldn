import {Icon} from "../Icon.js";

export class LassoSelect extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 22A5 5 0 0 1 5 18M7 17Q8.5 17.5 10 17.7M3.3 14A7 7 0 0 1 2 10C2 5.6 6.5 2 12 2S22 5.6 22 10L21.7 12"/><path d="M5 18A2 2 0 1 0 5 14 2 2 0 0 0 5 18M14.3 22 14 21.7V11.7A.3.3 0 0 1 14.3 11.3L14.5 11.4 22 17.4A.3.3 0 0 1 21.7 18H17.2L14.6 22z"/></svg>`
        ).node);
    }
}
