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

export class PackageOpen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22V13M15.2 2.2A2 2 0 0 1 16.8 2.2L21 4.6A2 2 0 0 1 21 7.9L8.8 14.8A2 2 0 0 1 7.2 14.8L3 12.4A2 2 0 0 1 3 9.1z"/><path d="M20 13V16.9A2 2 0 0 1 18.9 18.7L12.9 21.7A2 2 0 0 1 11 21.8L5.1 18.8A2 2 0 0 1 4 16.9V13"/><path d="M21 12.4A2 2 0 0 0 21 9.1L8.8 2.2A2 2 0 0 0 7.2 2.2L3 4.6A2 2 0 0 0 3 7.9L15.2 14.8A2 2 0 0 0 16.8 14.8z"/></svg>`
        ).node);
    }
}
