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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="2" x2="22" y1="2" y2="22"/><path d="M16.5 16.5 12 21 5 14C3.5 12.6 2 10.8 2 8.5A6 6 0 0 1 4.1 4.2M8.8 3.1A6 6 0 0 1 12 5C13.5 3.5 14.7 3 16.5 3A5.5 5.5 0 0 1 22 8.5C22 10.6 20.7 12.3 19.3 13.7"/></svg>
 */
export class HeartOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="2" x2="22" y1="2" y2="22"/><path d="M16.5 16.5 12 21 5 14C3.5 12.6 2 10.8 2 8.5A6 6 0 0 1 4.1 4.2M8.8 3.1A6 6 0 0 1 12 5C13.5 3.5 14.7 3 16.5 3A5.5 5.5 0 0 1 22 8.5C22 10.6 20.7 12.3 19.3 13.7"/></svg>`
        ).node);
    }
}
