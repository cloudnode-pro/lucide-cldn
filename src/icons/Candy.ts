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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 7V17.9M14 6.1V17M16 7V3A1 1 0 0 1 17.7 2.3 3 3 0 0 0 20 3 1 1 0 0 1 20.9 4.1 3 3 0 0 0 21.8 6.3 1 1 0 0 1 21 8H17"/><path d="M16.5 7.5A5 5 0 0 0 9.5 7.5L7.5 9.5A5 5 0 0 0 7.5 16.5 5 5 0 0 0 14.5 16.5L16.5 14.5A5 5 0 0 0 16.5 7.5"/><path d="M8 17V21A1 1 0 0 1 6.3 21.7 3 3 0 0 0 4 21 1 1 0 0 1 3.1 19.9 3 3 0 0 0 2.2 17.7 1 1 0 0 1 3 16H7"/></svg>
 */
export class Candy extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 7V17.9M14 6.1V17M16 7V3A1 1 0 0 1 17.7 2.3 3 3 0 0 0 20 3 1 1 0 0 1 20.9 4.1 3 3 0 0 0 21.8 6.3 1 1 0 0 1 21 8H17"/><path d="M16.5 7.5A5 5 0 0 0 9.5 7.5L7.5 9.5A5 5 0 0 0 7.5 16.5 5 5 0 0 0 14.5 16.5L16.5 14.5A5 5 0 0 0 16.5 7.5"/><path d="M8 17V21A1 1 0 0 1 6.3 21.7 3 3 0 0 0 4 21 1 1 0 0 1 3.1 19.9 3 3 0 0 0 2.2 17.7 1 1 0 0 1 3 16H7"/></svg>`
        ).node);
    }
}
