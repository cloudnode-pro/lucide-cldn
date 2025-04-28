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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 15V9M14 15V9M2.6 16.7A2 2 0 0 1 2 15.3V8.7A2 2 0 0 1 2.6 7.3L7.3 2.6A2 2 0 0 1 8.7 2H15.3A2 2 0 0 1 16.7 2.6L21.4 7.3A2 2 0 0 1 22 8.7V15.3A2 2 0 0 1 21.4 16.7L16.7 21.4A2 2 0 0 1 15.3 22H8.7A2 2 0 0 1 7.3 21.4z"/></svg>
 */
export class OctagonPause extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 15V9M14 15V9M2.6 16.7A2 2 0 0 1 2 15.3V8.7A2 2 0 0 1 2.6 7.3L7.3 2.6A2 2 0 0 1 8.7 2H15.3A2 2 0 0 1 16.7 2.6L21.4 7.3A2 2 0 0 1 22 8.7V15.3A2 2 0 0 1 21.4 16.7L16.7 21.4A2 2 0 0 1 15.3 22H8.7A2 2 0 0 1 7.3 21.4z"/></svg>`
        ).node);
    }
}
