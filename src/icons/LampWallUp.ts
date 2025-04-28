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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 9.6A1 1 0 0 1 19 11H9A1 1 0 0 1 8 9.6L10 4.6A1 1 0 0 1 11 4H17A1 1 0 0 1 18 4.6zM6 15A2 2 0 0 1 8 17V19A2 2 0 0 1 6 21H5A1 1 0 0 1 4 20V16A1 1 0 0 1 5 15z"/><path d="M8 18H12A2 2 0 0 0 14 16V11"/></svg>
 */
export class LampWallUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 9.6A1 1 0 0 1 19 11H9A1 1 0 0 1 8 9.6L10 4.6A1 1 0 0 1 11 4H17A1 1 0 0 1 18 4.6zM6 15A2 2 0 0 1 8 17V19A2 2 0 0 1 6 21H5A1 1 0 0 1 4 20V16A1 1 0 0 1 5 15z"/><path d="M8 18H12A2 2 0 0 0 14 16V11"/></svg>`
        ).node);
    }
}
