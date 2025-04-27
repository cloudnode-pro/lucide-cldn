import {Icon} from "../Icon.js";

export class Codesandbox extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 16V8A2 2 0 0 0 20 6.3L13 2.3A2 2 0 0 0 11 2.3L4 6.3A2 2 0 0 0 3 8V16A2 2 0 0 0 4 17.7L11 21.7A2 2 0 0 0 13 21.7L20 17.7A2 2 0 0 0 21 16"/><polyline points="7.5 4.2 12 6.8 16.5 4.2"/><polyline points="7.5 19.8 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.8"/><polyline points="3.3 7 12 12 20.7 7"/><line x1="12" x2="12" y1="22.1" y2="12"/></svg>`
        ).node);
    }
}
