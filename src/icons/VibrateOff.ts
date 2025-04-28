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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8 4 10 2 12 4 14 2 16M22 8 20 10 22 12 20 14 22 16M8 8V18Q8.1 19 9 19H15Q16 19 16 18V16M16 10.3V6Q16 5.1 15 5H10.7"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
 */
export class VibrateOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8 4 10 2 12 4 14 2 16M22 8 20 10 22 12 20 14 22 16M8 8V18Q8.1 19 9 19H15Q16 19 16 18V16M16 10.3V6Q16 5.1 15 5H10.7"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
