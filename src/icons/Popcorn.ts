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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A2 2 0 0 0 18 4 2 2 0 0 0 14 4 2 2 0 0 0 10 4 2 2 0 0 0 6 4 2 2 0 0 0 6 8M10 22 9 8M14 22 15 8"/><path d="M20 8Q20.8 8 20.8 9L18.2 21Q17.9 21.9 17 22H7Q6 22 5.8 21L3.2 9Q3.2 8 4 8Z"/></svg>
 */
export class Popcorn extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A2 2 0 0 0 18 4 2 2 0 0 0 14 4 2 2 0 0 0 10 4 2 2 0 0 0 6 4 2 2 0 0 0 6 8M10 22 9 8M14 22 15 8"/><path d="M20 8Q20.8 8 20.8 9L18.2 21Q17.9 21.9 17 22H7Q6 22 5.8 21L3.2 9Q3.2 8 4 8Z"/></svg>`
        ).node);
    }
}
