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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 14C20.5 12.5 22 10.8 22 8.5A5.5 5.5 0 0 0 16.5 3C14.7 3 13.5 3.5 12 5 10.5 3.5 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5C2 10.8 3.5 12.5 5 14L12 21Z"/><path d="M3.2 12H9.5L10 11 12 15.5 14 8.5 15.5 12H20.8"/></svg>
 */
export class HeartPulse extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 14C20.5 12.5 22 10.8 22 8.5A5.5 5.5 0 0 0 16.5 3C14.7 3 13.5 3.5 12 5 10.5 3.5 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5C2 10.8 3.5 12.5 5 14L12 21Z"/><path d="M3.2 12H9.5L10 11 12 15.5 14 8.5 15.5 12H20.8"/></svg>`
        ).node);
    }
}
