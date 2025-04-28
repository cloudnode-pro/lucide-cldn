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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r="0.5" fill="currentColor"/><path d="M7.9 7.9 10.6 10.6"/><circle cx="16.5" cy="7.5" r="0.5" fill="currentColor"/><path d="M13.4 10.6 16.1 7.9"/><circle cx="7.5" cy="16.5" r="0.5" fill="currentColor"/><path d="M7.9 16.1 10.6 13.4"/><circle cx="16.5" cy="16.5" r="0.5" fill="currentColor"/><path d="M13.4 13.4 16.1 16.1"/><circle cx="12" cy="12" r="2"/></svg>
 */
export class Vault extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r="0.5" fill="currentColor"/><path d="M7.9 7.9 10.6 10.6"/><circle cx="16.5" cy="7.5" r="0.5" fill="currentColor"/><path d="M13.4 10.6 16.1 7.9"/><circle cx="7.5" cy="16.5" r="0.5" fill="currentColor"/><path d="M7.9 16.1 10.6 13.4"/><circle cx="16.5" cy="16.5" r="0.5" fill="currentColor"/><path d="M13.4 13.4 16.1 16.1"/><circle cx="12" cy="12" r="2"/></svg>`
        ).node);
    }
}
