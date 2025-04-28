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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.5 15H17A2 2 0 0 0 15 17V21.5M7 3.3V5A3 3 0 0 0 10 8 2 2 0 0 1 12 10Q12.2 11.8 14 12A2 2 0 0 0 16 10Q16.2 8.2 18 8H21.2M11 22V18A2 2 0 0 0 9 16 2 2 0 0 1 7 14V13A2 2 0 0 0 5 11H2"/><circle cx="12" cy="12" r="10"/></svg>
 */
export class Earth extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.5 15H17A2 2 0 0 0 15 17V21.5M7 3.3V5A3 3 0 0 0 10 8 2 2 0 0 1 12 10Q12.2 11.8 14 12A2 2 0 0 0 16 10Q16.2 8.2 18 8H21.2M11 22V18A2 2 0 0 0 9 16 2 2 0 0 1 7 14V13A2 2 0 0 0 5 11H2"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
