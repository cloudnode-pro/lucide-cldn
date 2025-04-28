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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V18Q2.2 19.8 4 20H13"/><path d="M22 7 13 12.7A2 2 0 0 1 11 12.7L2 7M17 17 21 21M21 17 17 21"/></svg>
 */
export class MailX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V18Q2.2 19.8 4 20H13"/><path d="M22 7 13 12.7A2 2 0 0 1 11 12.7L2 7M17 17 21 21M21 17 17 21"/></svg>`
        ).node);
    }
}
