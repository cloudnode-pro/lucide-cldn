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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.5 16.4A5 5 0 0 1 15.5 16.4M5 12.9A10 10 0 0 1 10.2 10.2M19 12.9 17 11.3M2 8.8A15 15 0 0 1 6.2 6.2M22 8.8A15 15 0 0 0 10.7 5.1M2 2 22 22"/></svg>
 */
export class WifiOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.5 16.4A5 5 0 0 1 15.5 16.4M5 12.9A10 10 0 0 1 10.2 10.2M19 12.9 17 11.3M2 8.8A15 15 0 0 1 6.2 6.2M22 8.8A15 15 0 0 0 10.7 5.1M2 2 22 22"/></svg>`
        ).node);
    }
}
