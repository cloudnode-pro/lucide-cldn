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

export class Drill extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18A1 1 0 0 1 11 19V21A1 1 0 0 1 10 22H5A3 3 0 0 1 2 19 1 1 0 0 1 3 18zM13 10H4A2 2 0 0 1 2 8V4A2 2 0 0 1 4 2H13A1 1 0 0 1 14 3V9A1 1 0 0 1 13 10L12.2 13.2A1 1 0 0 1 11.2 14H8M14 4H17A1 1 0 0 1 18 5V7A1 1 0 0 1 17 8H14M18 6H22M5 10 3 18M7 18 9 10"/></svg>`
        ).node);
    }
}
