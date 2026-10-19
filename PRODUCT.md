# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Managers and shift leads** at a JD Logistics last-mile delivery station (UK, Birmingham "B" postcodes), running AM and PM shifts. They set up the shift, track first-time delivery success live, see parcels and drops per route from the forecast, and copy the shift summary to share.
- **Station staff** with their own accounts, working through live operational tasks and training during the shift.
- **New starters** learning the station's "211 operation" through the training modules.

Used about equally on phones on the warehouse floor during the shift and on a computer in the office.

## Product Purpose

Shift Report is the station's own tool for running a delivery shift. It turns the day's volume, drivers, redeliveries and rejections into live performance (FTDS against the 98% target) and splits the parcel forecast into the station's routes. Success means the shift is run against the target with no surprises, and new staff learn the operation without needing someone beside them.

## Positioning

Built for one station's real routine rather than a generic dashboard: the FTDS gauge runs from 95 to 100% around the 98% target, the redelivery allowance is counted slot by slot, postcodes are sorted into the station's own routes, and the routes card is made to be screenshotted into the drivers' WhatsApp group.

## Operating Context

- Shifts: AM and PM. Work happens on the warehouse floor, at the truck, and in the office.
- Tools around it: PDAs, ITMS, DSP sheets, green boxes, the drivers' WhatsApp group.
- Can be installed to a phone home screen (PWA) and opens with a weak signal.

## Capabilities and Constraints

- Sections: This shift (setup, results, FTDS live, copy summary), Routes (forecast, parcels and drops per route, group display card), Training (modules, glossary, checklist, progress), Live ops (recurring and one-off tasks, issues), Account (password, staff accounts for admins).
- Plain HTML, CSS and JavaScript; no framework or build step. Firebase is used only for accounts: Firebase Authentication, the `users` list of names and roles, and each person's training progress (`training`). Shift figures, the forecast and Live ops stay on each device. Route settings live in `routes-config.js`; training text in `training-content.js`.
- Driver names are not asked for or kept anywhere. No shift reports, notes or route records are saved.
- Roles: admin and staff. A preview mode shows the layout without signing in.
- Terminology: FTDS (first-time delivery success), PPR, JDW numbers, redelivery, rejection, routes 1–9.
- Calculations and data handling must not change as a side effect of design work.

## Brand Commitments

- Name: "Shift Report", credited "By Cameron Gill".
- Its own product identity. JD Logistics corporate branding is not required.
- Voice: plain, friendly UK English written for the floor ("Ready for your shift?", "Kept on this device only").

## Evidence on Hand

- Real training content and photos in `training-content.js` and `training-images/`.
- Real route configuration in `routes-config.js`.
- No customer data, metrics or testimonials should be invented for design work; preview mode uses in-memory sample data only.

## Product Principles

1. The shift comes first: the action people take most during a shift is the easiest one to reach.
2. Numbers must be trustworthy at a glance: status always comes with words, not colour alone.
3. Keep only what's needed: accounts and training progress go to Firebase, everything else stays on the device, and no driver names are kept.
4. Written for the station's own language and routine, not a generic template.
5. Works one-handed on a phone and comfortably on a desk screen.

## Accessibility & Inclusion

Used in bright warehouse light and on the move: readable contrast in both themes, large touch targets, keyboard support on desktop, and reduced-motion preferences respected.
