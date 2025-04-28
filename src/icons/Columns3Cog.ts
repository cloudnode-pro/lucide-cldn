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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5m-6.7 9.1 1-.4M15 3v7.5m.2 6.4-.9-.3m2.3 5.1.3-.9m-.1-5.5-.4-1m2.7.9.3-.9m.2 7.4-.4-1m1.5-3.9 1-.4m0 3-.9-.3M9 3v18"/><circle cx="18" cy="18" r="3"/></svg>
 */
export class Columns3Cog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5m-6.7 9.1 1-.4M15 3v7.5m.2 6.4-.9-.3m2.3 5.1.3-.9m-.1-5.5-.4-1m2.7.9.3-.9m.2 7.4-.4-1m1.5-3.9 1-.4m0 3-.9-.3M9 3v18"/><circle cx="18" cy="18" r="3"/></svg>`
        ).node);
    }
}
