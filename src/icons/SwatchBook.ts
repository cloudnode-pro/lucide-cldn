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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 17A4 4 0 0 1 3 17V5A2 2 0 0 1 5 3H9A2 2 0 0 1 11 5Z"/><path d="M16.7 13H19A2 2 0 0 1 21 15V19A2 2 0 0 1 19 21H7M7 17"/><path d="M11 8 13.3 5.7A2.4 2.4 0 0 1 16.7 5.7L18.6 7.6A2.4 2.4 0 0 1 18.6 11L10 19.8"/></svg>
 */
export class SwatchBook extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 17A4 4 0 0 1 3 17V5A2 2 0 0 1 5 3H9A2 2 0 0 1 11 5Z"/><path d="M16.7 13H19A2 2 0 0 1 21 15V19A2 2 0 0 1 19 21H7M7 17"/><path d="M11 8 13.3 5.7A2.4 2.4 0 0 1 16.7 5.7L18.6 7.6A2.4 2.4 0 0 1 18.6 11L10 19.8"/></svg>`
        ).node);
    }
}
