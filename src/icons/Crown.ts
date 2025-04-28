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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.6 3.3A.5.5 0 0 1 12.4 3.3L15.4 8.9A1 1 0 0 0 16.9 9.2L21.2 5.5A.5.5 0 0 1 22 6L19 16.3A1 1 0 0 1 18.1 17H5.9A1 1 0 0 1 4.8 16.3L2 6A.5.5 0 0 1 2.8 5.5L7.1 9.2A1 1 0 0 0 8.6 8.9zM5 21H19"/></svg>
 */
export class Crown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.6 3.3A.5.5 0 0 1 12.4 3.3L15.4 8.9A1 1 0 0 0 16.9 9.2L21.2 5.5A.5.5 0 0 1 22 6L19 16.3A1 1 0 0 1 18.1 17H5.9A1 1 0 0 1 4.8 16.3L2 6A.5.5 0 0 1 2.8 5.5L7.1 9.2A1 1 0 0 0 8.6 8.9zM5 21H19"/></svg>`
        ).node);
    }
}
