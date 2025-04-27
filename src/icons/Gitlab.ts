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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13.3 18.7 3.3 18.5 3H18.1L17.9 3.3 15.7 10H8.3L6.1 3.3 6 3H5.5L5.4 3.3 2 13.3A1 1 0 0 0 2.3 14.3L12 21 21.7 14.1z"/></svg>
 */
export class Gitlab extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13.3 18.7 3.3 18.5 3H18.1L17.9 3.3 15.7 10H8.3L6.1 3.3 6 3H5.5L5.4 3.3 2 13.3A1 1 0 0 0 2.3 14.3L12 21 21.7 14.1z"/></svg>`
        ).node);
    }
}
