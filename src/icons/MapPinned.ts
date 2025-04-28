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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8C18 11.6 14.1 15.4 12.6 16.8A1 1 0 0 1 11.4 16.8C9.9 15.4 6 11.6 6 8A6 6 0 0 1 18 8"/><circle cx="12" cy="8" r="2"/><path d="M8.7 14H5A1 1 0 0 0 4 14.7L2 20.7A1 1 0 0 0 3 22H21A1 1 0 0 0 22 20.7L20 14.7A1 1 0 0 0 19 14H15.3"/></svg>
 */
export class MapPinned extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8C18 11.6 14.1 15.4 12.6 16.8A1 1 0 0 1 11.4 16.8C9.9 15.4 6 11.6 6 8A6 6 0 0 1 18 8"/><circle cx="12" cy="8" r="2"/><path d="M8.7 14H5A1 1 0 0 0 4 14.7L2 20.7A1 1 0 0 0 3 22H21A1 1 0 0 0 22 20.7L20 14.7A1 1 0 0 0 19 14H15.3"/></svg>`
        ).node);
    }
}
