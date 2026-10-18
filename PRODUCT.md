# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Managers and shift leads** at a JD Logistics last-mile delivery station (UK, Birmingham "B" postcodes), running AM and PM shifts. They set up the shift, track first-time delivery success live, plan which driver takes which route, save the end-of-shift report and read the station's history.
- **Station staff** with their own accounts, working through live operational tasks and training during the shift.
- **New starters** learning the station's "211 operation" through the training modules.

Used about equally on phones on the warehouse floor during the shift and on a computer in the office.

## Product Purpose

Shift Report is the station's own tool for running and recording a delivery shift. It turns the day's volume, drivers, redeliveries and rejections into live performance (FTDS against the 98% target), helps plan routes from the parcel forecast, and keeps a shared history of every saved shift. Success means the shift is run against the target with no surprises, the report is saved once and correctly, and new staff learn the operation without needing someone beside them.

## Positioning

Built for one station's real routine rather than a generic dashboard: the FTDS gauge runs from 95 to 100% around the 98% target, the redelivery allowance is counted slot by slot, JDW numbers are checked as they are typed, postcodes are sorted into the station's own routes, and the routes card is made to be screenshotted into the drivers' WhatsApp group.

## Operating Context

- Shifts: AM and PM. Work happens on the warehouse floor, at the truck, and in the office.
- Tools around it: PDAs, ITMS, DSP sheets, green boxes, the drivers' WhatsApp group.
- Can be installed to a phone home screen (PWA) and opens with a weak signal.

## Capabilities and Constraints

- Sections: This shift (setup, results, FTDS live, redelivery and rejection notes, staff accounts), Routes (forecast, working today, route assignment, group display card), Training (modules, glossary, checklist, progress), Live ops (recurring and one-off tasks, issues), History (shift reports and recorded routes).
- Plain HTML, CSS and JavaScript; no framework or build step. Firebase Authentication and Firestore hold accounts and data. Route and agency settings live in `routes-config.js`; training text in `training-content.js`.
- Roles: admin and staff. A preview mode shows the layout without signing in.
- Terminology: FTDS (first-time delivery success), PPR, JDW numbers, redelivery, rejection, agencies (UKED, INRW), routes 1–9.
- Calculations and data handling must not change as a side effect of design work.

## Brand Commitments

- Name: "Shift Report", credited "By Cameron Gill".
- Its own product identity. JD Logistics corporate branding is not required.
- Voice: plain, friendly UK English written for the floor ("Ready for your shift?", "Kept on this device until you save").

## Evidence on Hand

- Real training content and photos in `training-content.js` and `training-images/`.
- Real route and agency configuration in `routes-config.js`.
- No customer data, metrics or testimonials should be invented for design work; preview mode uses in-memory sample data only.

## Product Principles

1. The shift comes first: the action people take most during a shift is the easiest one to reach.
2. Numbers must be trustworthy at a glance: status always comes with words, not colour alone.
3. One save, clearly confirmed: nobody should wonder whether the report went through.
4. Written for the station's own language and routine, not a generic template.
5. Works one-handed on a phone and comfortably on a desk screen.

## Accessibility & Inclusion

Used in bright warehouse light and on the move: readable contrast in both themes, large touch targets, keyboard support on desktop, and reduced-motion preferences respected.
