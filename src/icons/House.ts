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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 21V13A1 1 0 0 0 14 12H10A1 1 0 0 0 9 13V21"/><path d="M3 10A2 2 0 0 1 3.7 8.5L10.7 2.5A2 2 0 0 1 13.3 2.5L20.3 8.5A2 2 0 0 1 21 10V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19z"/></svg>
 */
export class House extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 21V13A1 1 0 0 0 14 12H10A1 1 0 0 0 9 13V21"/><path d="M3 10A2 2 0 0 1 3.7 8.5L10.7 2.5A2 2 0 0 1 13.3 2.5L20.3 8.5A2 2 0 0 1 21 10V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19z"/></svg>`
        ).node);
    }
}
