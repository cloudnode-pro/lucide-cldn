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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.9 18.6A9 9 0 1 0 7.2 18.6"/><path d="M8 14A5 5 0 1 1 16 14"/><circle cx="12" cy="11" r="1"/><path d="M13 17A1 1 0 1 0 11 17L11.5 21.5A.5.5 0 1 0 12.5 21.5Z"/></svg>
 */
export class Podcast extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.9 18.6A9 9 0 1 0 7.2 18.6"/><path d="M8 14A5 5 0 1 1 16 14"/><circle cx="12" cy="11" r="1"/><path d="M13 17A1 1 0 1 0 11 17L11.5 21.5A.5.5 0 1 0 12.5 21.5Z"/></svg>`
        ).node);
    }
}
