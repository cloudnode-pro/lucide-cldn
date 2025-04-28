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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15M9 3.4a4 4 0 0 1 6.52.66"/><path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05M20.3 20.3a4 4 0 0 1-2.3.7m.6-8a4 4 0 0 1 3.357 3.414M12 6l.6 1M2 2l20 20"/></svg>
 */
export class WebhookOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15M9 3.4a4 4 0 0 1 6.52.66"/><path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05M20.3 20.3a4 4 0 0 1-2.3.7m.6-8a4 4 0 0 1 3.357 3.414M12 6l.6 1M2 2l20 20"/></svg>`
        ).node);
    }
}
