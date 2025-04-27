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

export class ServerCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.9 14.8 10.5 15.7M13.1 14.8A3 3 0 1 0 11 9.2L10.5 8.3M13.1 9.2 13.5 8.3"/><path d="M13.5 15.7 13.1 14.7A3 3 0 1 1 11 9.3M14.8 10.9 15.7 10.5M14.8 13.1 15.7 13.5"/><path d="M4.5 10H4A2 2 0 0 1 2 8V4A2 2 0 0 1 4 2H20A2 2 0 0 1 22 4V8A2 2 0 0 1 20 10H19.5M4.5 14H4A2 2 0 0 0 2 16V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V16A2 2 0 0 0 20 14H19.5M9.2 10.9 8.3 10.5M9.2 13.1 8.3 13.5"/></svg>`
        ).node);
    }
}
