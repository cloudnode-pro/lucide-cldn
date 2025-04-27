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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21V13A2 2 0 0 0 18 11H6A2 2 0 0 0 4 13V21"/><path d="M4 16S4.5 15 6 15 8.5 17 10 17 12.5 15 14 15 16.5 17 18 17 20 16 20 16M2 21H22M7 8V11M12 8V11M17 8V11M17 4"/></svg>
 */
export class Cake extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21V13A2 2 0 0 0 18 11H6A2 2 0 0 0 4 13V21"/><path d="M4 16S4.5 15 6 15 8.5 17 10 17 12.5 15 14 15 16.5 17 18 17 20 16 20 16M2 21H22M7 8V11M12 8V11M17 8V11M17 4"/></svg>`
        ).node);
    }
}
