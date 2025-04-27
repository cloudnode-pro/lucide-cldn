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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 17H12C11 17 10 18 9.5 18.9A4 4 0 0 1 2 17Q2 16 2.6 15"/><path d="M6 17 9.1 11.2C9.7 10.2 9.2 9 8.6 8.2A4 4 0 1 1 15.6 4"/><path d="M12 6 15.1 11.7Q16.1 13.1 18 13A4 4 0 0 1 18 21"/></svg>
 */
export class Webhook extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 17H12C11 17 10 18 9.5 18.9A4 4 0 0 1 2 17Q2 16 2.6 15"/><path d="M6 17 9.1 11.2C9.7 10.2 9.2 9 8.6 8.2A4 4 0 1 1 15.6 4"/><path d="M12 6 15.1 11.7Q16.1 13.1 18 13A4 4 0 0 1 18 21"/></svg>`
        ).node);
    }
}
