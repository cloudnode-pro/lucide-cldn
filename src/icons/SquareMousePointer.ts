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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12.7A.5.5 0 0 1 12.7 12L21.7 15.5A.5.5 0 0 1 21.7 16.5L18.1 17.5A1 1 0 0 0 17.5 18.2L16.5 21.6A.5.5 0 0 1 15.5 21.6z"/><path d="M21 11V5A2 2 0 0 0 19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H11"/></svg>
 */
export class SquareMousePointer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12.7A.5.5 0 0 1 12.7 12L21.7 15.5A.5.5 0 0 1 21.7 16.5L18.1 17.5A1 1 0 0 0 17.5 18.2L16.5 21.6A.5.5 0 0 1 15.5 21.6z"/><path d="M21 11V5A2 2 0 0 0 19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H11"/></svg>`
        ).node);
    }
}
