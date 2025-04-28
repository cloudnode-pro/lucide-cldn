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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 16 11.5 17.5M14 8 12.5 6.5M15 2Q12.5 5 12.2 8M16.5 10.5 17.5 11.5M17 6 14.1 3.1M2 15C8.7 9 15.3 15 22 9M20 9 20.9 9.9M3.1 14.1 4 15M6.5 12.5 7.5 13.5M7 18 9.9 20.9M9 22Q11.5 19 11.8 16"/></svg>
 */
export class Dna extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 16 11.5 17.5M14 8 12.5 6.5M15 2Q12.5 5 12.2 8M16.5 10.5 17.5 11.5M17 6 14.1 3.1M2 15C8.7 9 15.3 15 22 9M20 9 20.9 9.9M3.1 14.1 4 15M6.5 12.5 7.5 13.5M7 18 9.9 20.9M9 22Q11.5 19 11.8 16"/></svg>`
        ).node);
    }
}
