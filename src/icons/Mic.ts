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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2A3 3 0 0 0 9 5V12A3 3 0 0 0 15 12V5A3 3 0 0 0 12 2"/><path d="M19 10V12A7 7 0 0 1 5 12V10"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
 */
export class Mic extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2A3 3 0 0 0 9 5V12A3 3 0 0 0 15 12V5A3 3 0 0 0 12 2"/><path d="M19 10V12A7 7 0 0 1 5 12V10"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`
        ).node);
    }
}
