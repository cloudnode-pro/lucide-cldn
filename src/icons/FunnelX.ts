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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.5 3H3A1 1 0 0 0 2.3 4.7L9.5 12.7A2 2 0 0 1 10 14V20A1 1 0 0 0 10.6 20.9L12.6 21.9A1 1 0 0 0 14 21V14A2 2 0 0 1 14.5 12.7L15 12.2M16.5 3.5 21.5 8.5M21.5 3.5 16.5 8.5"/></svg>
 */
export class FunnelX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.5 3H3A1 1 0 0 0 2.3 4.7L9.5 12.7A2 2 0 0 1 10 14V20A1 1 0 0 0 10.6 20.9L12.6 21.9A1 1 0 0 0 14 21V14A2 2 0 0 1 14.5 12.7L15 12.2M16.5 3.5 21.5 8.5M21.5 3.5 16.5 8.5"/></svg>`
        ).node);
    }
}
