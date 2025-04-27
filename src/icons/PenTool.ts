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

export class PenTool extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.7 21.3A1 1 0 0 1 14.3 21.3L12.7 19.7A1 1 0 0 1 12.7 18.3L18.3 12.7A1 1 0 0 1 19.7 12.7L21.3 14.3A1 1 0 0 1 21.3 15.7z"/><path d="M18 13 16.6 6.1A1 1 0 0 0 16 5.4L3.2 2A1 1 0 0 0 2 3.2L5.4 16 6 16.6 13 18M2.3 2.3 9.6 9.6"/><circle cx="11" cy="11" r="2"/></svg>`
        ).node);
    }
}
