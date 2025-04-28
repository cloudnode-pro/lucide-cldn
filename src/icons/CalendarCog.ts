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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.228 16.852-.923-.383m.923 2.679-.923.383M16 2v4m.47 8.305.382.923m0 5.544-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.924-.383m-.924 2.679.924.383M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M3 10h18M8 2v4"/><circle cx="18" cy="18" r="3"/></svg>
 */
export class CalendarCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.228 16.852-.923-.383m.923 2.679-.923.383M16 2v4m.47 8.305.382.923m0 5.544-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.924-.383m-.924 2.679.924.383M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M3 10h18M8 2v4"/><circle cx="18" cy="18" r="3"/></svg>`
        ).node);
    }
}
