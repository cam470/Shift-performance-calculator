/* =====================================================================
   ROUTES for Shift Report
   Keep this file in the same folder as index.html.

   To change a route, move the postcode district into the right list.
   Routes marked standalone: true always win if a district is listed twice.
   Any district not listed anywhere shows as "Not on a route".
   ===================================================================== */

window.ROUTE_PLANNING = {
  // Driver agencies and the colour of the small dot shown next to names
  agencies: [
    { code: "UKED", colour: "#FF5A6E" },
    { code: "INRW", colour: "#4DA3FF" }
  ],

  routes: [
    { num: 1, name: "North",
      districts: ["B66", "B21", "B20", "B42", "B24", "B43", "B23", "B44", "B73", "B35", "B72", "B74", "B75", "B79", "B46", "B76", "B77", "B78", "B71", "B19"] },
    { num: 2, name: "East & Solihull",
      districts: ["B93", "B90", "B91", "B92", "B26", "B37", "B25", "B33", "B27", "B34", "B36", "B10", "B8", "B9"] },
    { num: 3, name: "South",
      districts: ["B50", "B49", "B95", "B80", "B96", "B60", "B98", "B97", "B61", "B45", "B31", "B38", "B48", "B47", "B94", "B14", "B28", "B13", "B11", "B12"] },
    { num: 4, name: "West",
      districts: ["B62", "B32", "B63", "B64", "B65", "B68", "B30", "B70", "B69", "B67", "B17"] },
    { num: 5, name: "Central",
      districts: ["B6", "B3", "B2", "B16", "B18", "B4", "B7"] },
    { num: 6, name: "B29", districts: ["B29"], standalone: true },
    { num: 7, name: "B15", districts: ["B15"], standalone: true },
    { num: 8, name: "B1",  districts: ["B1"],  standalone: true },
    { num: 9, name: "B5",  districts: ["B5"],  standalone: true }
  ]
};
