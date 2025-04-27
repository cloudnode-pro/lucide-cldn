import {Icon} from "../Icon.js";

export class Vault extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r="0.5" fill="currentColor"/><path d="M7.9 7.9 10.6 10.6"/><circle cx="16.5" cy="7.5" r="0.5" fill="currentColor"/><path d="M13.4 10.6 16.1 7.9"/><circle cx="7.5" cy="16.5" r="0.5" fill="currentColor"/><path d="M7.9 16.1 10.6 13.4"/><circle cx="16.5" cy="16.5" r="0.5" fill="currentColor"/><path d="M13.4 13.4 16.1 16.1"/><circle cx="12" cy="12" r="2"/></svg>`
        ).node);
    }
}
