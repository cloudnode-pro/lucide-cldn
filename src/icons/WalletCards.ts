import {Icon} from "../Icon.js";

export class WalletCards extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9A2 2 0 0 1 5 7H19A2 2 0 0 1 21 9M3 11H6Q7.3 11 8.1 11.9L9.2 12.8A4 4 0 0 0 14.9 12.8L16 11.9Q16.8 11.1 18.1 11H21"/></svg>`
        ).node);
    }
}
