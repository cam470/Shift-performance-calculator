/* =====================================================================
   ROUTE PLANNING SETTINGS for Shift Report
   Keep this file in the same folder as index.html.

   CHANGING A ROUTE BOUNDARY
     Move the postcode district into the right route's districts list.
     Stand-alone routes always win if a district is listed twice.
     Any district not listed anywhere shows as Unassigned. It is never
     moved to a nearby route automatically.

   WORKLOAD GUIDELINES (guide)
     drops    roughly how many drops one driver can do on this route
     parcels  roughly how many parcels one driver can do on this route
     main     which one the route is mainly planned on: "drops" or "parcels"
     These are starting points, not limits. The planner leans towards
     them but works with whatever parcels and drivers you have that day.
   ===================================================================== */

window.ROUTE_PLANNING = {

  agencies: ["UKED", "INRW"],

  // How far a route can go over its guideline before another driver is
  // suggested. 0.15 means 15% over. Stops a route getting a second driver
  // for being one or two drops over.
  tolerance: 0.15,

  // When there are spare drivers, one is only added to a route if each
  // driver would still have at least this share of a guideline's work.
  // 0.5 means half. Anyone left over shows as spare.
  spareFloor: 0.5,

  routes: [
    { num: 1, name: "North", type: "area",
      districts: ["B66", "B21", "B20", "B42", "B24", "B43", "B23", "B44", "B73", "B35", "B72", "B74", "B75", "B79", "B46", "B76", "B77", "B78", "B71", "B19"],
      guide: { main: "drops", drops: 30, parcels: 110 },
      note: "Usually not the highest parcel count. Can be anywhere from about 12 to 40 drops. About 30 drops is a day for one driver." },

    { num: 2, name: "East & Solihull", type: "area",
      districts: ["B93", "B90", "B91", "B92", "B26", "B37", "B25", "B33", "B27", "B34", "B36", "B10", "B8", "B9"],
      guide: { main: "drops", drops: 40, parcels: 90 },
      note: "Often about 40 drops. Around 90 parcels is the point to think about a second driver." },

    { num: 3, name: "South", type: "area",
      districts: ["B50", "B49", "B95", "B80", "B96", "B60", "B98", "B97", "B61", "B45", "B31", "B38", "B48", "B47", "B94", "B14", "B28", "B13", "B11", "B12"],
      guide: { main: "drops", drops: 30, parcels: 110 },
      note: "About 30 drops for one driver." },

    { num: 4, name: "West", type: "area",
      districts: ["B62", "B32", "B63", "B64", "B65", "B68", "B30", "B70", "B69", "B67", "B17"],
      guide: { main: "drops", drops: 35, parcels: 110 },
      note: "About 35 drops per driver." },

    { num: 5, name: "Central", type: "area",
      districts: ["B6", "B3", "B2", "B16", "B18", "B4", "B7"],
      guide: { main: "drops", drops: 42, parcels: 110 },
      note: "About 42 drops per driver." },

    { num: 6, name: "B29 stand-alone", type: "standalone",
      districts: ["B29"],
      guide: { main: "parcels", parcels: 110 },
      note: "Planned on parcels. About 110 parcels per driver." },

    { num: 7, name: "B15 stand-alone", type: "standalone",
      districts: ["B15"],
      guide: { main: "parcels", parcels: 110 },
      note: "Planned on parcels. About 110 parcels per driver." },

    { num: 8, name: "B1 stand-alone", type: "standalone",
      districts: ["B1"],
      guide: { main: "parcels", parcels: 110 },
      note: "Planned on parcels. About 110 parcels per driver." },

    { num: 9, name: "B5 stand-alone", type: "standalone",
      districts: ["B5"],
      guide: { main: "parcels", parcels: 110 },
      note: "Planned on parcels. About 110 parcels per driver." }
  ]
};
