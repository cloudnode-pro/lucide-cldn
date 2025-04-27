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

export class FolderCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 20H4A2 2 0 0 1 2 18V5A2 2 0 0 1 4 3H8A2 2 0 0 1 9.7 3.9L10.3 5.1A2 2 0 0 0 12 6H20A2 2 0 0 1 22 8V11.3M14.3 19.5 15.3 19.1M15.2 16.9 14.3 16.5M16.9 15.2 16.5 14.3M16.9 20.8 16.5 21.7M19.1 15.2 19.5 14.3M19.5 21.7 19.1 20.7M20.8 16.9 21.7 16.5M20.8 19.1 21.7 19.5"/><circle cx="18" cy="18" r="3"/></svg>`
        ).node);
    }
}
