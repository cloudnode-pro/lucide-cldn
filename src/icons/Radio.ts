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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.9 19.1A10 10 0 0 1 4.9 4.9M7.8 16.2A6 6 0 0 1 7.8 7.7"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8A6 6 0 0 1 16.2 16.3M19.1 4.9A10 10 0 0 1 19.1 19"/></svg>
 */
export class Radio extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.9 19.1A10 10 0 0 1 4.9 4.9M7.8 16.2A6 6 0 0 1 7.8 7.7"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8A6 6 0 0 1 16.2 16.3M19.1 4.9A10 10 0 0 1 19.1 19"/></svg>`
        ).node);
    }
}
