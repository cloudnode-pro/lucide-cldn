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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1A2 2 0 0 0 12.1 6H20A2 2 0 0 1 22 8V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V15A2 2 0 0 1 4 13H11"/><path d="M8 16 11 13 8 10"/></svg>
 */
export class FolderSymlink extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1A2 2 0 0 0 12.1 6H20A2 2 0 0 1 22 8V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V15A2 2 0 0 1 4 13H11"/><path d="M8 16 11 13 8 10"/></svg>`
        ).node);
    }
}
