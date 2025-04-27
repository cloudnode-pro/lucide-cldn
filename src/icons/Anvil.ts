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

export class Anvil extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10H6A4 4 0 0 1 2 6 1 1 0 0 1 3 5H7M7 5A1 1 0 0 1 8 4H21A1 1 0 0 1 22 5 7 7 0 0 1 15 12H8A1 1 0 0 1 7 11zM9 12V17M15 12V17M5 20A3 3 0 0 1 8 17H16A3 3 0 0 1 19 20 1 1 0 0 1 18 21H6A1 1 0 0 1 5 20"/></svg>`
        ).node);
    }
}
