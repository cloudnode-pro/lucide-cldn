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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.8 19.2 16 11 19.5 7.5C21 6 21.5 4 21 3 20 2.5 18 3 16.5 4.5L13 8 4.8 6.2Q4 6.1 3.7 6.7L3.4 7.2Q3.1 8 3.7 8.5L9 12 7 15H4L3 16 6 18 8 21 9 20V17L12 15 15.5 20.3Q16 20.9 16.8 20.6L17.3 20.4Q17.9 20 17.8 19.2"/></svg>
 */
export class Plane extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.8 19.2 16 11 19.5 7.5C21 6 21.5 4 21 3 20 2.5 18 3 16.5 4.5L13 8 4.8 6.2Q4 6.1 3.7 6.7L3.4 7.2Q3.1 8 3.7 8.5L9 12 7 15H4L3 16 6 18 8 21 9 20V17L12 15 15.5 20.3Q16 20.9 16.8 20.6L17.3 20.4Q17.9 20 17.8 19.2"/></svg>`
        ).node);
    }
}
