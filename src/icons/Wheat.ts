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

export class Wheat extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22 16 8M3.5 12.5 5 11 6.5 12.5A3.5 3.5 0 0 1 6.5 17.5L5 19 3.5 17.5A3.5 3.5 0 0 1 3.5 12.5"/><path d="M7.5 8.5 9 7 10.5 8.5A3.5 3.5 0 0 1 10.5 13.5L9 15 7.5 13.5A3.5 3.5 0 0 1 7.5 8.5"/><path d="M11.5 4.5 13 3 14.5 4.5A3.5 3.5 0 0 1 14.5 9.5L13 11 11.5 9.5A3.5 3.5 0 0 1 11.5 4.5M20 2H22V4A4 4 0 0 1 18 8H16V6A4 4 0 0 1 20 2M11.5 17.5 13 19 11.5 20.5A3.5 3.5 0 0 1 6.5 20.5L5 19 6.5 17.5A3.5 3.5 0 0 1 11.5 17.5"/><path d="M15.5 13.5 17 15 15.5 16.5A3.5 3.5 0 0 1 10.5 16.5L9 15 10.5 13.5A3.5 3.5 0 0 1 15.5 13.5"/><path d="M19.5 9.5 21 11 19.5 12.5A3.5 3.5 0 0 1 14.5 12.5L13 11 14.5 9.5A3.5 3.5 0 0 1 19.5 9.5"/></svg>`
        ).node);
    }
}
