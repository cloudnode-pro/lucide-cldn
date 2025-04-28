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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.8 20V15.9L10.7 16.1A2.3 2.3 0 0 0 12.9 14V8.3A5.4 5.4 0 0 0 2 8.3C2 11 2.7 11.3 3 12.8A6 6 0 0 1 3 15.6L2 20M19.8 17.8A7.5 7.5 0 0 0 19.8 7.2M17 15A3.5 3.5 0 0 0 17 10"/></svg>
 */
export class Speech extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.8 20V15.9L10.7 16.1A2.3 2.3 0 0 0 12.9 14V8.3A5.4 5.4 0 0 0 2 8.3C2 11 2.7 11.3 3 12.8A6 6 0 0 1 3 15.6L2 20M19.8 17.8A7.5 7.5 0 0 0 19.8 7.2M17 15A3.5 3.5 0 0 0 17 10"/></svg>`
        ).node);
    }
}
