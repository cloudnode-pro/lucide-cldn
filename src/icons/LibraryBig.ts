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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3V21M20.4 18.9Q20.6 19.8 19.8 20.2L17.9 20.9Q17 21.1 16.6 20.3L11.1 5.1Q10.9 4.2 11.7 3.8L13.6 3.1Q14.5 2.9 14.9 3.7Z"/></svg>
 */
export class LibraryBig extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3V21M20.4 18.9Q20.6 19.8 19.8 20.2L17.9 20.9Q17 21.1 16.6 20.3L11.1 5.1Q10.9 4.2 11.7 3.8L13.6 3.1Q14.5 2.9 14.9 3.7Z"/></svg>`
        ).node);
    }
}
