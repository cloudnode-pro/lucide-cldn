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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.5 4.2Q6.9 3.4 6.2 3.8A10 10 0 0 0 2 11Q2 11.9 3 12H8Q8.1 9.6 10 8.6zM21 12Q22 12 22 11A10 10 0 0 0 17.9 3.9C17.5 3.6 16.8 3.7 16.6 4.2L14 8.5Q15.9 9.6 16 12zM7.5 19.8Q7.1 20.7 7.9 21.1A10 10 0 0 0 16.1 21.1Q16.9 20.7 16.5 19.8L14 15.5A4 4 0 0 1 10 15.5z"/></svg>
 */
export class Radiation extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.5 4.2Q6.9 3.4 6.2 3.8A10 10 0 0 0 2 11Q2 11.9 3 12H8Q8.1 9.6 10 8.6zM21 12Q22 12 22 11A10 10 0 0 0 17.9 3.9C17.5 3.6 16.8 3.7 16.6 4.2L14 8.5Q15.9 9.6 16 12zM7.5 19.8Q7.1 20.7 7.9 21.1A10 10 0 0 0 16.1 21.1Q16.9 20.7 16.5 19.8L14 15.5A4 4 0 0 1 10 15.5z"/></svg>`
        ).node);
    }
}
