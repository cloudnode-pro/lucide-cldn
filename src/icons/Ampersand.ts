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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 12A8 8 0 0 1 9.5 20 4.5 4.5 0 0 1 5 15.5C5 9.5 13 11.5 13 7A3 3 0 1 0 7 7C7 10 9.5 15.5 19 20M16 12H19"/></svg>
 */
export class Ampersand extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 12A8 8 0 0 1 9.5 20 4.5 4.5 0 0 1 5 15.5C5 9.5 13 11.5 13 7A3 3 0 1 0 7 7C7 10 9.5 15.5 19 20M16 12H19"/></svg>`
        ).node);
    }
}
