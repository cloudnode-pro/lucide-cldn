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

export class FolderTree extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10A1 1 0 0 0 21 9V6A1 1 0 0 0 20 5H17.5A1 1 0 0 1 16.7 4.6L15.8 3.4A1 1 0 0 0 15 3H13A1 1 0 0 0 12 4V9A1 1 0 0 0 13 10ZM20 21A1 1 0 0 0 21 20V17A1 1 0 0 0 20 16H17.1A1 1 0 0 1 16.2 15.5L15.8 14.6A1 1 0 0 0 14.8 14H13A1 1 0 0 0 12 15V20A1 1 0 0 0 13 21ZM3 5A2 2 0 0 0 5 7H8"/><path d="M3 3V16A2 2 0 0 0 5 18H8"/></svg>`
        ).node);
    }
}
