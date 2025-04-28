/*
 * Copyright © 2025 Cloudnode OÜ.
 *
 * This file is part of lucide-cldn.
 *
 * lucide-cldn is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General
 * Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * lucide-cldn is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with lucide-cldn.
 * If not, see <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */
import {Icon} from "../Icon.js";

/**
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.8 16.1C12.5 16.7 14.8 17 16 17Q16.4 17 16.7 16.7M11.1 20.6C11.7 20.8 13.6 21.6 15.2 21.9Q16 22 16.2 21.2L15.5 17"/><path d="M16.1 21C17.8 21.8 19.8 22 21 22L21.7 21.7M18 5.5A21 21 0 0 1 21 10 1 1 0 0 1 20.5 11.1Q18.7 11.2 16.5 11M20.6 11.1C20.8 11.7 21.6 13.6 21.9 15.2Q22 15.7 21.6 16M5 5A10 10 0 0 0 4.2 18.2C4.6 18.8 5.3 18.7 5.4 18.3 6.1 16.4 6.5 13 6.5 11.4Q8.5 12.4 11.4 12.1L11.9 12"/><path d="M5.5 18C6.5 19 8.5 20.4 10 21A1 1 0 0 0 11.1 20.5Q11.5 16.8 9.6 12.2M8.4 2.7A10 10 0 0 1 18.4 4.3C18.7 4.6 18.6 5.3 18.1 5.4 16.7 6 14 6.4 12.2 6.4M2 2 22 22"/></svg>
 */
export class HopOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.8 16.1C12.5 16.7 14.8 17 16 17Q16.4 17 16.7 16.7M11.1 20.6C11.7 20.8 13.6 21.6 15.2 21.9Q16 22 16.2 21.2L15.5 17"/><path d="M16.1 21C17.8 21.8 19.8 22 21 22L21.7 21.7M18 5.5A21 21 0 0 1 21 10 1 1 0 0 1 20.5 11.1Q18.7 11.2 16.5 11M20.6 11.1C20.8 11.7 21.6 13.6 21.9 15.2Q22 15.7 21.6 16M5 5A10 10 0 0 0 4.2 18.2C4.6 18.8 5.3 18.7 5.4 18.3 6.1 16.4 6.5 13 6.5 11.4Q8.5 12.4 11.4 12.1L11.9 12"/><path d="M5.5 18C6.5 19 8.5 20.4 10 21A1 1 0 0 0 11.1 20.5Q11.5 16.8 9.6 12.2M8.4 2.7A10 10 0 0 1 18.4 4.3C18.7 4.6 18.6 5.3 18.1 5.4 16.7 6 14 6.4 12.2 6.4M2 2 22 22"/></svg>`
        ).node);
    }
}
