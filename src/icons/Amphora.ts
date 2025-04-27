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

export class Amphora extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V7.6Q10 8.3 9.3 8.6A6 6 0 0 0 6 14C6 18 9 21 11 22"/><path d="M10 5H8A2 2 0 0 0 8 9H8.7M14 2V7.6Q14 8.3 14.7 8.6A6 6 0 0 1 18 14C18 18 15 21 13 22"/><path d="M14 5H16A2 2 0 0 1 16 9H15.3M18 22H6M9 2H15"/></svg>`
        ).node);
    }
}
