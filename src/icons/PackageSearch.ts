import {Icon} from "../Icon.js";

export class PackageSearch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10V8A2 2 0 0 0 20 6.3L13 2.3A2 2 0 0 0 11 2.3L4 6.3A2 2 0 0 0 3 8V16A2 2 0 0 0 4 17.7L11 21.7A2 2 0 0 0 13 21.7L15 20.6M7.5 4.3 16.5 9.4"/><polyline points="3.3 7 12 12 20.7 7"/><line x1="12" x2="12" y1="22" y2="12"/><circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.3 17.3 22 19"/></svg>`
        ).node);
    }
}
