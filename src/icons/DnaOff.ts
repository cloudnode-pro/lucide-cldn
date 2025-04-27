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

export class DnaOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2Q13.1 4.3 12.5 6.5L14 8M17 6 14.1 3.1M2 15C5.3 12 8.7 12 12 12M2 2 22 22M20 9 20.9 9.9M22 9Q19.8 11 17.5 11.5L16.5 10.5M3.1 14.1 4 15M6.5 12.5 7.5 13.5M7 18 9.9 20.9M9 22Q11 19.8 11.5 17.5L10 16"/></svg>`
        ).node);
    }
}
