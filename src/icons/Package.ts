import {Icon} from "../Icon.js";

export class Package extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 21.7A2 2 0 0 0 13 21.7L20 17.7A2 2 0 0 0 21 16V8A2 2 0 0 0 20 6.3L13 2.3A2 2 0 0 0 11 2.3L4 6.3A2 2 0 0 0 3 8V16A2 2 0 0 0 4 17.7zM12 22V12"/><polyline points="3.3 7 12 12 20.7 7"/><path d="M7.5 4.3 16.5 9.4"/></svg>`
        ).node);
    }
}
