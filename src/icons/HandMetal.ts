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

export class HandMetal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 12.5V10A2 2 0 0 0 16 8 2 2 0 0 0 14 10V11.4M14 11V9A2 2 0 1 0 10 9V11M10 10.5V5A2 2 0 1 0 6 5V14"/><path d="M7 15 5.2 13.2A2 2 0 0 0 2.4 16.1L6 19.7A8 8 0 0 0 12 22H14A8 8 0 0 0 22 14V7A2 2 0 1 0 18 7V12"/></svg>`
        ).node);
    }
}
