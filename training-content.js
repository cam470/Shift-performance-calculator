/* =====================================================================
   TRAINING CONTENT for Shift Report (211 Operations)
   This is the only file you need to edit to change the training.
   Keep it in the same folder as index.html.

   ADDING PHOTOS
     Every image below already has a file name. Upload a photo with that
     exact name into a folder called training-images (next to index.html)
     and it appears in the training straight away. Until then a placeholder
     shows instead. Use .jpg and keep the names all lowercase.

   HOW TO EDIT A STEP
     id         Short name, no spaces. Progress is saved against it, so
                don't change it once staff have started training.
     title      The step heading.
     type       "task"       Done once. Checkbox says "Task completed".
                "learn"      Something to understand. "I understand this".
                "active"     Ongoing for the whole shift. ACTIVE badge.
                "recurring"  Repeats. Add  every: "Every hour"
                "when"       Only when something happens. Add  when: "..."
     text       Explanation. One paragraph, or a list of paragraphs.
     how        Numbered instructions, in order.
     listTitle  Heading for a bullet list, then  list: [ ... ]
     facts      Small fact tiles, e.g.  facts: [["Morning", "Before 3 PM"]]
     scenario   A worked example, one line per item.
     important  A highlighted warning.
     tip        A highlighted tip.
     example    An example message, shown like a chat bubble.
     images     [ { src: "training-images/name.jpg", caption: "..." } ]
     optional   true means the step doesn't count towards the module.

   To add a module, copy a whole { ... } block in modules, give it a new
   id and num, and put it where you want it in the list.
   ===================================================================== */

const img = (file, caption) => ({ src: "training-images/" + file + ".jpg", caption });

window.TRAINING = {

  title: "211 Operations",

  welcome: {
    title: "Welcome to the 211 operation",
    text: [
      "This training walks you through how a shift runs, from opening the warehouse to the end of the delivery wave.",
      "Work through the modules in order. Tick each step once you have done it or understood it.",
      "Your progress is saved as you go, so you can stop at any point and carry on later."
    ],
    objectives: [
      "Open and prepare the warehouse",
      "Receive and process the inbound truck",
      "Prepare drivers and PDAs",
      "Complete DSP documentation",
      "Assign and manage pickups",
      "Support drivers during loading and dispatch",
      "Complete operational reporting",
      "Complete hourly DSP updates",
      "Monitor driver communications",
      "Resolve customer and delivery issues",
      "Protect and improve FTDS",
      "Monitor driver performance",
      "Identify and manage route risk",
      "Arrange driver assistance where appropriate",
      "Print and process replacement, reverse and pickup labels",
      "Complete inbound scanning",
      "Follow break and clocking procedures",
      "Understand the key terms used in the 211 operation",
      "Complete the daily operational checklist",
      "Know which responsibilities must stay actively monitored throughout the shift"
    ]
  },

  modules: [
    {
      id: "opening", num: 1, title: "Opening the Warehouse",
      desc: "Clocking in and opening the front and back shutters.",
      steps: [
        { id: "clock-in", title: "Clock in", type: "task",
          how: [
            "Clock in using the clock-in machine.",
            "Confirm that your clock-in has registered successfully."
          ],
          images: [ img("m01-clock-in-machine", "Clock-in machine") ] },
        { id: "shutters", title: "Open the front and back shutters", type: "task",
          how: [
            "Open the front warehouse shutter.",
            "Open the back warehouse shutter.",
            "Make sure both shutters are fully open and the areas are clear."
          ],
          images: [ img("m01-front-shutter", "Front shutter"), img("m01-back-shutter", "Back shutter") ] }
      ]
    },

    {
      id: "truck", num: 2, title: "Receiving the Truck",
      desc: "Unsealing, receiving, unloading, green boxes, returns and sealing the truck.",
      steps: [
        { id: "unseal", title: "Unseal the truck", type: "task",
          how: [
            "Use the scanner to complete the truck unsealing process.",
            "Follow the required steps shown on the scanner.",
            "Remove the physical seal once the truck has been unsealed."
          ],
          images: [ img("m02-unseal-scanner", "Scanner showing the unsealing process") ] },
        { id: "scan-receive", title: "Scan to receive the parcels", type: "task",
          how: [
            "Use the scanner to scan the receiving information.",
            "Find the white label attached to the cage.",
            "Scan the white label.",
            "Confirm that the parcels have been received successfully."
          ],
          images: [ img("m02-receive-scanner", "Scanner on the receiving screen"), img("m02-white-label-on-cage", "White label on the cage") ] },
        { id: "unload", title: "Unload the truck", type: "task",
          how: [
            "Begin unloading the truck.",
            "Move cages and parcels into their correct warehouse areas.",
            "Keep the unloading area organised.",
            "Make sure walkways stay clear.",
            "Follow the correct manual handling and safety procedures."
          ],
          images: [ img("m02-unloading-truck", "Truck being unloaded") ] },
        { id: "green-boxes", title: "Count and load the green boxes", type: "task",
          text: "Green boxes are usually stacked in groups of 5 to make them easier to count.",
          how: [
            "Find the green box area.",
            "Count the green boxes.",
            "Use the stacks of 5 to help you count accurately.",
            "Load the green boxes into the correct cages.",
            "Double check the final count."
          ],
          images: [ img("m02-green-box-zone", "Green box zone"), img("m02-green-boxes-in-cage", "Green boxes inside the cage") ] },
        { id: "returns", title: "Count and load the returns", type: "task",
          how: [
            "Identify all parcels that are returns.",
            "Count the returns.",
            "Use the scanner or PDA where needed.",
            "Load the returns into the returns cage.",
            "Double check that the count is correct."
          ],
          images: [ img("m02-returns-scanner", "Scanner for returns"), img("m02-returns-cage", "Returns cage") ] },
        { id: "returns-photo", title: "Photograph the returns cage", type: "task",
          text: "Two photographs are needed.",
          how: [
            "Take a clear photograph of the returns cage.",
            "Load the returns cage onto the truck.",
            "Take another clear photograph showing the returns cage inside the truck.",
            "Make sure both photographs are saved and clearly show the cage."
          ],
          images: [ img("m02-returns-cage", "Returns cage"), img("m02-returns-cage-on-truck", "Returns cage on the truck") ] },
        { id: "seal", title: "Seal the truck", type: "task",
          how: [
            "Use the scanner to complete the truck sealing process.",
            "Follow all the required steps on the scanner.",
            "Attach the physical truck seal.",
            "Confirm that the truck has been sealed correctly."
          ],
          images: [ img("m02-seal-scanner", "Scanner showing the sealing process"), img("m02-truck-seal", "Truck seal"), img("m02-sealing-process", "Seal being attached") ] },
        { id: "departure", title: "Truck departure", type: "task",
          how: [
            "Once the truck has left, prepare the front of the warehouse.",
            "Open the front of the warehouse so the delivery vans can come in."
          ] }
      ]
    },

    {
      id: "dispatch", num: 3, title: "Driver Preparation and Dispatch",
      desc: "PDAs, the two DSP sheets and green box numbers from ITMS.",
      steps: [
        { id: "gather-pdas", title: "Gather the PDAs", type: "task",
          text: "Gather the correct number of PDAs for the number of drivers.",
          how: [
            "Count the number of drivers.",
            "Gather enough PDAs for every driver.",
            "Check that every PDA is working.",
            "Make sure every PDA is charged to at least 80%.",
            "Replace or charge any PDA that is below 80%."
          ],
          images: [ img("m03-pdas", "PDAs ready for drivers") ] },
        { id: "hand-pdas", title: "Hand out the PDAs", type: "task",
          how: [
            "Give each driver their PDA.",
            "Make sure drivers receive the right devices.",
            "Make sure drivers can start scanning their parcels."
          ] },
        { id: "dsp-sheets", title: "Complete the physical DSP sheets", type: "task",
          text: [
            "Fill these in while the drivers are scanning their parcels.",
            "There are two sheets, one for each DSP."
          ],
          listTitle: "For every driver, record:",
          list: [ "Route number", "PDA number", "Arrival time", "Vehicle registration", "Number of green boxes" ],
          images: [ img("m03-dsp-sheets", "Both DSP sheets") ] },
        { id: "green-box-numbers", title: "Record green box numbers", type: "task",
          text: "You can find the number of green boxes for each driver in ITMS.",
          how: [
            "Open ITMS.",
            "Find the driver.",
            "Check the number of green boxes.",
            "Record the number on the correct DSP sheet.",
            "Double check the information."
          ] }
      ]
    },

    {
      id: "pickups", num: 4, title: "Pickups",
      desc: "Assigning pickups in ITMS and making sure drivers know about them.",
      steps: [
        { id: "assign", title: "Assign pickups in ITMS", type: "task",
          text: "Pickups are parcels that need to be collected from a customer's house because the customer wants to return the item.",
          how: [
            "Open the pickup section in ITMS.",
            "Find the pickups that need to be done.",
            "Assign each pickup to the right driver.",
            "Check whether the pickup has a time limit.",
            "Make sure the driver knows about any time limit."
          ],
          important: "Some pickups have specific time limits. These must be made clear to the driver.",
          images: [ img("m04-pickup-page", "Pickup page in ITMS"), img("m04-assign-pickup", "Steps for assigning a pickup") ] },
        { id: "communicate", title: "Tell drivers about their pickups", type: "task",
          text: "After assigning the pickups:",
          how: [
            "Post a reminder in the relevant group.",
            "Make sure drivers know about their pickups.",
            "Clearly explain any time limits."
          ],
          images: [ img("m04-whatsapp-pickup-message", "WhatsApp pickup message") ] }
      ]
    },

    {
      id: "loading", num: 5, title: "Driver Loading and Departure",
      desc: "Helping drivers load and keeping the staff group updated as they leave.",
      steps: [
        { id: "help-load", title: "Help drivers load their parcels", type: "task",
          how: [
            "Help drivers find their parcels.",
            "Help drivers load parcels into their vans.",
            "Help sort out any loading or scanning problems.",
            "Keep the loading process organised."
          ] },
        { id: "staff-group", title: "Update the staff group when drivers leave", type: "task",
          text: "Every time a driver leaves:",
          how: [
            "Confirm the driver has left.",
            "Update the staff group chat.",
            "Keep the team informed of which drivers have left and which are still at the depot."
          ],
          images: [ img("m05-staff-group-chat", "Staff group chat") ] }
      ]
    },

    {
      id: "close", num: 6, title: "Warehouse Cleanup and Reporting",
      desc: "Cleaning up, closing the shutters and sending the start-of-shift report.",
      steps: [
        { id: "clean", title: "Clean the warehouse", type: "task",
          text: "Once all drivers have left:",
          how: [
            "Clean up any mess left in the warehouse.",
            "Remove rubbish and loose packaging.",
            "Make sure pallets are in their correct places.",
            "Organise equipment and working areas.",
            "Make sure walkways are clear."
          ] },
        { id: "shutters-close", title: "Close the shutters", type: "task",
          how: [
            "Close the front shutter.",
            "Close the back shutter.",
            "Make sure the warehouse is secure."
          ] },
        { id: "sos-report", title: "Complete the start-of-shift report", type: "task",
          text: "The report is fairly self-explanatory.",
          how: [
            "Follow the instructions on the report.",
            "Complete all the required information.",
            "Check that the information is accurate.",
            "Send the completed report to the Joyme group called Last Mile OP Risk."
          ],
          images: [ img("m06-start-of-shift-report", "Start-of-shift report") ] }
      ]
    },

    {
      id: "hourly", num: 7, title: "Hourly Driver Updates",
      desc: "Keeping both DSPs informed about their drivers every hour.",
      steps: [
        { id: "hourly-update", title: "Complete the hourly update", type: "recurring", every: "Every hour",
          text: [
            "The hourly update keeps both DSPs informed about their drivers' progress throughout the shift.",
            "Send it along with the relevant driver maps to both DSPs."
          ],
          how: [
            "Open the hourly update sheet.",
            "Gather the latest driver information.",
            "Complete the required fields.",
            "Check the information is accurate.",
            "Prepare the relevant driver maps.",
            "Send the update and the maps to both DSPs.",
            "Repeat this every hour throughout the shift."
          ],
          important: "This is not a one-time task. The update must be done every hour throughout the operational shift.",
          images: [
            img("m07-hourly-update-sheet", "Hourly update sheet"),
            img("m07-completing-the-sheet", "How to complete the sheet"),
            img("m07-driver-maps", "Driver maps"),
            img("m07-update-sent", "Example of the update being sent")
          ] }
      ]
    },

    {
      id: "comms", num: 8, title: "Driver Communication",
      desc: "Watching the driver group chat and the problems drivers report.",
      steps: [
        { id: "driver-group", title: "Monitor the driver group chat", type: "active",
          text: [
            "Throughout the shift, keep an eye on the driver communication group. It is one of the main points of contact between drivers on the road and the depot.",
            "Drivers will regularly use this group when they run into problems. If something comes up, it is the depot's responsibility to help solve it."
          ] },
        { id: "common-problems", title: "Common problems drivers report", type: "learn",
          listTitle: "Drivers may report:",
          list: [
            "Customer not answering",
            "Customer hasn't given a full address",
            "Parcel is damaged",
            "Customer no longer wants the parcel",
            "Customer wants to change the delivery date",
            "Customer wants to change the delivery time",
            "Customer is not home",
            "Customer can't accept a frozen parcel"
          ] }
      ]
    },

    {
      id: "customers", num: 9, title: "Customer Contact and Problem Solving",
      desc: "Contacting customers and solving problems to avoid redeliveries.",
      steps: [
        { id: "how-help", title: "How the depot can help", type: "learn",
          text: [
            "Drivers are generally limited to phone calls and texts when contacting customers.",
            "The depot should help resolve issues wherever possible to avoid unnecessary redeliveries."
          ],
          listTitle: "Depot staff can contact customers by:",
          list: [ "Phone", "Text", "Email" ] },
        { id: "issue-process", title: "The customer issue process", type: "when", when: "When a driver reports a customer problem",
          how: [
            "Read the driver's message.",
            "Identify the problem.",
            "Find the customer's information.",
            "Contact the customer.",
            "Explain the situation.",
            "Find a suitable solution.",
            "Tell the driver the solution.",
            "Update the relevant information where needed.",
            "Keep monitoring until the issue is resolved."
          ],
          images: [
            img("m09-example-customer-issue", "Example customer issue"),
            img("m09-finding-customer-info", "Finding customer information"),
            img("m09-contacting-customer", "Customer contact process")
          ] }
      ]
    },

    {
      id: "ftds", num: 10, title: "FTDS and Redelivery Management",
      desc: "The 98% target and real examples of avoiding redeliveries.",
      steps: [
        { id: "target", title: "The FTDS target", type: "learn",
          text: [
            "FTDS means First-Time Delivery Success. The target is at least 98%.",
            "The aim is to deliver as many parcels as possible during the current delivery wave without needing a redelivery. Some failures will be outside our control, but there are ways to improve the result."
          ],
          facts: [ ["Target", "At least 98%"], ["Rejections", "Don't count towards FTDS"] ],
          tip: "The FTDS live panel on the This shift tab shows how many redeliveries you have left before dropping below 98%." },
        { id: "afternoon", title: "Example: customer wants an afternoon delivery", type: "when", when: "When a customer says they want their parcel in the afternoon",
          how: [
            "Don't put the parcel straight onto a redelivery.",
            "Remember the first wave delivers up until 3 PM.",
            "Check whether the driver can still deliver the parcel before 3 PM.",
            "Monitor the driver's progress.",
            "Where practical, attempt delivery during the current wave.",
            "Only arrange a redelivery if the parcel genuinely can't be delivered during the current wave."
          ],
          important: "The goal is to avoid unnecessary redeliveries." },
        { id: "not-home", title: "Example: customer is not home", type: "when", when: "When the customer is not home",
          how: [
            "Contact the customer.",
            "Ask whether there is a suitable safe place where the parcel can be left.",
            "Check whether the parcel is allowed to be left in a safe place.",
            "With the customer's permission, tell the driver the agreed location.",
            "Remind the driver to tell the customer where the parcel has been left.",
            "The driver should send the customer a picture of where the parcel was left where needed."
          ],
          tip: "This can prevent an unnecessary redelivery when safe place delivery is allowed." },
        { id: "frozen", title: "Example: frozen food", type: "when", when: "When the delivery is frozen food",
          text: [
            "Frozen food must be given directly to the customer. It can't simply be left in a safe place.",
            "With the customer's permission, a frozen parcel may be left with a willing neighbour, where the procedure allows it."
          ],
          how: [
            "Contact the customer.",
            "Explain that the frozen parcel can't be left unattended.",
            "Ask whether a neighbour can accept it.",
            "Get the customer's permission.",
            "Confirm that the neighbour is willing to accept the parcel.",
            "Tell the driver the arrangement.",
            "Confirm that the delivery has been completed correctly."
          ] }
      ]
    },

    {
      id: "risk", num: 11, title: "Driver Monitoring and Risk Management",
      desc: "Driver maps, Personal Efficiency and acting before a route fails.",
      steps: [
        { id: "monitor", title: "Monitor driver performance", type: "active",
          text: "While drivers are on the road, staff must monitor their performance. These tools help you spot drivers who may be falling behind.",
          listTitle: "Use:",
          list: [ "Driver Maps", "The Personal Efficiency dashboard" ] },
        { id: "idle", title: "Driver maps and idle time", type: "when", when: "When you see unusual idle time",
          text: "Driver maps show where each driver is and how they are progressing. Black circles show idle time.",
          how: [
            "Check how long the driver has been idle.",
            "Contact the driver.",
            "Ask what they were doing during that time.",
            "Decide whether there is a valid reason.",
            "Give help if needed.",
            "Keep monitoring the driver."
          ],
          images: [ img("m11-driver-map-idle-time", "Driver map showing idle time") ] },
        { id: "pe", title: "Personal Efficiency", type: "learn",
          text: "Personal Efficiency is a dashboard in ITMS that shows driver progress.",
          listTitle: "It shows you:",
          list: [ "How many parcels a driver has", "How many parcels have been delivered", "How many parcels are left" ],
          tip: "Use Personal Efficiency alongside the driver maps to see whether a route is going as expected.",
          images: [ img("m11-personal-efficiency", "Personal Efficiency dashboard") ] },
        { id: "manage-risk", title: "Managing route risk", type: "active",
          text: [
            "Managing risk means predicting when a route may fail and acting before it happens.",
            "A route is at risk when the driver may not be able to deliver all their parcels within the delivery window."
          ],
          facts: [ ["Morning, first wave", "Before 3 PM"], ["Evening, second wave", "Before 10 PM"] ],
          listTitle: "Keep an eye on:",
          list: [ "Parcels remaining", "Delivery progress", "Time remaining", "Driver location", "Idle time", "Route speed", "Possible delays" ] },
        { id: "slow", title: "Slow drivers", type: "when", when: "When a driver seems slow for no valid reason",
          how: [
            "Check their current progress.",
            "Check the driver map.",
            "Check Personal Efficiency.",
            "Contact the driver.",
            "Ask if there is a problem.",
            "Encourage the driver where it helps.",
            "Keep monitoring their progress."
          ],
          important: "Don't assume slow progress always means poor performance. There may be good reasons such as traffic, customer issues or other operational problems." },
        { id: "assist", title: "Driver assistance", type: "when", when: "When a driver is at risk of failing their route",
          text: "Sometimes one driver finishes their route before another. If another driver is struggling, the finished driver may be able to help.",
          how: [
            "Check how much work the struggling driver has left.",
            "Check how much time is left.",
            "Check where both drivers are.",
            "Work out the travel time between them.",
            "Decide whether help will realistically make a difference.",
            "Arrange the help with the right people.",
            "Keep monitoring both drivers."
          ],
          scenario: [
            "It is 2 PM, so there is 1 hour left before the 3 PM deadline.",
            "Driver A has finished their route.",
            "Driver B is behind and may not finish on time.",
            "Driver A is close to Driver B.",
            "Because Driver A is nearby and there is still enough time, Driver A can be sent to help Driver B."
          ],
          important: "Always think about travel time and distance before sending a driver to help another driver." }
      ]
    },

    {
      id: "labels", num: 12, title: "Label Printing",
      desc: "Replacement waybills, reverse waybills, pickup labels and inbounding.",
      steps: [
        { id: "damaged-waybill", title: "Damaged waybill", type: "when", when: "When a parcel's waybill is damaged",
          how: [
            "Identify the parcel.",
            "Find the parcel in the system.",
            "Follow the process for printing a replacement waybill.",
            "Print the new waybill.",
            "Confirm the label belongs to the right parcel.",
            "Attach the new waybill securely.",
            "Inbound the parcel after printing the label."
          ],
          images: [
            img("m12-damaged-waybill", "Damaged waybill"),
            img("m12-finding-parcel", "Finding the parcel"),
            img("m12-printing-replacement-waybill", "Printing a replacement waybill")
          ] },
        { id: "rejected", title: "Rejected parcel", type: "when", when: "When a parcel is rejected",
          how: [
            "Identify the rejected parcel.",
            "Find the reverse waybill.",
            "Print the reverse waybill.",
            "Attach the reverse waybill to the parcel.",
            "Process the parcel as a return.",
            "Inbound the parcel after printing the label.",
            "Put the parcel in the correct returns area."
          ],
          listTitle: "Common rejection reasons:",
          list: [ "Customer no longer wants the parcel", "Parcel is damaged" ],
          important: "Rejected parcels need to go back to MK as a return in the morning.",
          images: [ img("m12-finding-reverse-waybill", "Finding the reverse waybill"), img("m12-printing-reverse-waybill", "Printing the reverse waybill") ] },
        { id: "pickup-label", title: "Pickup parcel", type: "when", when: "When a pickup parcel needs a label",
          how: [
            "Find the pickup in the system.",
            "Follow the process to print the pickup label.",
            "Print the label.",
            "Check that the label is correct.",
            "Attach the label to the parcel.",
            "Inbound the parcel after printing."
          ],
          images: [ img("m12-pickup-label", "Printing a pickup label") ] },
        { id: "inbound", title: "Always inbound after printing", type: "learn",
          text: "Inbound is an ITMS function that records that the parcel has been received at the depot.",
          important: "Always inbound a parcel after printing a label for it.",
          images: [ img("m12-inbound-on-pda", "Inbound function on the PDA") ] }
      ]
    },

    {
      id: "breaks", num: 13, title: "Break Time",
      desc: "When to take your break and how to clock out and back in.",
      steps: [
        { id: "break-rules", title: "Your break", type: "learn",
          text: "Break time is one hour. You can take it at any point, but you should work at least 4 hours of your shift first.",
          facts: [ ["Start of break", "Clock out"], ["End of break", "Clock in"] ] },
        { id: "clock-out", title: "Starting your break", type: "task",
          how: [ "Clock out when your break starts." ] },
        { id: "clock-back", title: "Ending your break", type: "task",
          how: [ "Clock back in when your break ends." ] }
      ]
    },

    {
      id: "terms", num: 14, title: "Key Terms and Definitions", kind: "glossary",
      desc: "Quick reference for the words and short forms used on shift.",
      steps: [
        { id: "read", title: "Read through the key terms", type: "learn" }
      ]
    },

    {
      id: "checklist", num: 15, title: "Daily Operations Checklist", kind: "checklist",
      desc: "The quick reference checklist for trained staff.",
      steps: [
        { id: "reviewed", title: "Review the daily checklist", type: "learn",
          text: "This is the quick reference checklist for trained staff. You will use it on every shift from the Live ops tab." }
      ]
    }
  ],

  /* ---------------- GLOSSARY ---------------- */
  glossary: [
    { term: "FTDS", full: "First-Time Delivery Success",
      def: "The percentage of eligible parcels successfully delivered during the current wave.",
      points: [ "Target: at least 98%", "Rejections don't count towards FTDS" ],
      example: "Volume 500, delivered 497, redelivery 3. FTDS is 99.40%.",
      note: "Use the FTDS calculator on the This shift tab if you're unsure." },
    { term: "Redelivery",
      def: "Putting a parcel onto the next delivery wave, or onto a future date the customer has asked for." },
    { term: "Rejection",
      def: "A parcel that has been rejected and needs to go back to MK as a return in the morning.",
      points: [ "Customer no longer wants the parcel", "Parcel is damaged" ] },
    { term: "Pickup",
      def: "A parcel that needs collecting from a customer's house because the customer wants to return it." },
    { term: "Volume",
      def: "The total number of parcels.",
      example: "A driver has 60 parcels, so the volume is 60." },
    { term: "Drops",
      def: "The number of unique customers or stops on a route.",
      example: "A route with 60 parcels and 23 drops delivers 60 parcels across 23 customer stops." },
    { term: "PPR", full: "Parcels Per Route",
      def: "The number of parcels assigned to a route." },
    { term: "To Be Received",
      def: "A parcel that is physically in the warehouse but hasn't been scanned by the driver yet." },
    { term: "Inbound",
      def: "An ITMS function that records the parcel has been received at the depot. Once it's done, tracking should show the depot has the parcel.",
      note: "Always inbound parcels after printing labels." },
    { term: "Personal Efficiency",
      def: "A dashboard in ITMS that tracks driver progress.",
      points: [ "Parcels assigned", "Parcels delivered", "Parcels remaining" ] },
    { term: "PDA",
      def: "The handheld device drivers use to scan parcels and complete delivery tasks.",
      note: "PDAs should be charged to at least 80% before drivers leave." },
    { term: "Route Fail",
      def: "A route fails if the driver can't deliver all the required parcels within the delivery window.",
      points: [ "Morning: before 3 PM", "Evening: before 10 PM" ],
      note: "The aim is to spot and reduce route risk before a route fails." },
    { term: "Risk",
      def: "How likely a route is to fail. Manage it by keeping an eye on:",
      points: [ "Driver progress", "Parcels remaining", "Time remaining", "Driver location", "Idle time", "Route efficiency", "Possible delays" ] },
    { term: "DSP", full: "Delivery Service Partner",
      def: "The agency or company that provides the drivers." },
    { term: "211",
      def: "The whole operation, covering the first and second delivery waves." }
  ],

  /* ---------------- LIVE OPS ---------------- */
  live: {
    // Delivery deadlines. AM on This shift is the first wave, PM is the second.
    waves: {
      AM: { name: "First wave", deadline: "15:00" },
      PM: { name: "Second wave", deadline: "22:00" }
    },

    // Ongoing responsibilities. They stay on screen for the whole shift.
    active: [
      { id: "driver-comms", title: "Monitor driver communication", freq: "Throughout shift",
        text: "Monitor the driver communication group and respond to issues as they arise.",
        learn: "comms/driver-group" },
      { id: "driver-progress", title: "Monitor driver progress", freq: "Throughout shift",
        text: "Use Driver Maps and Personal Efficiency to monitor driver progress.",
        learn: "risk/monitor" },
      { id: "route-risk", title: "Manage route risk", freq: "Throughout shift",
        text: "Identify routes that may fail and take action to reduce the risk.",
        learn: "risk/manage-risk" },
      { id: "customer-issues", title: "Manage customer issues", freq: "As required",
        text: "Contact customers and help drivers resolve delivery problems.",
        learn: "customers/issue-process" }
    ],

    // Repeating jobs. every is in minutes. An update done up to "early"
    // minutes before the hour counts for that hour.
    recurring: [
      { id: "hourly-dsp", title: "Hourly update", every: 60, early: 20,
        text: "Update the sheet and send the information and driver maps to both DSPs.",
        how: [
          "Open the hourly update sheet",
          "Gather the latest driver information",
          "Complete the required fields and check they're accurate",
          "Prepare the relevant driver maps",
          "Send the update and maps to both DSPs"
        ],
        learn: "hourly/hourly-update" }
    ],

    // Things that only happen sometimes. Staff raise these with Report an issue.
    issues: [
      { id: "route-risk", title: "Route at risk", needsDriver: true,
        steps: [
          "Check their current progress",
          "Check the driver map",
          "Check Personal Efficiency",
          "Contact the driver and ask if there's a problem",
          "Encourage the driver where it helps",
          "Keep monitoring their progress"
        ],
        learn: "risk/slow" },
      { id: "idle", title: "Unusual idle time", needsDriver: true,
        steps: [
          "Check how long the driver has been idle",
          "Contact the driver",
          "Ask what they were doing during that time",
          "Decide whether there is a valid reason",
          "Give help if needed",
          "Keep monitoring the driver"
        ],
        learn: "risk/idle" },
      { id: "assist", title: "Driver needs assistance", needsDriver: true,
        steps: [
          "Check how much work they have left",
          "Check how much time is left",
          "Check where a finished driver is",
          "Work out the travel time between them",
          "Decide whether help will realistically make a difference",
          "Arrange the help with the right people",
          "Keep monitoring both drivers"
        ],
        learn: "risk/assist" },
      { id: "customer", title: "Customer issue", needsDriver: false,
        steps: [
          "Read the driver's message and identify the problem",
          "Find the customer's information",
          "Contact the customer and explain the situation",
          "Find a suitable solution",
          "Tell the driver the solution",
          "Update the relevant information where needed"
        ],
        learn: "customers/issue-process" }
    ]
  },

  /* ---------------- DAILY CHECKLIST ----------------
     Starts fresh for every new shift.
     link: "shift"           adds a button that opens the This shift tab
     recurring: "hourly-dsp" shows the hourly update count instead of a tick box
     A section with active: true lists the ongoing jobs without tick boxes,
     because those are tracked in Active tasks for the whole shift. */
  checklist: [
    { section: "Opening", items: [
      { id: "clock-in", text: "Clock in" },
      { id: "front-shutter", text: "Open front shutter" },
      { id: "back-shutter", text: "Open back shutter" },
      { id: "truck-prep", text: "Prepare for truck arrival" }
    ]},
    { section: "Truck", items: [
      { id: "unseal", text: "Unseal truck" },
      { id: "receive", text: "Scan to receive parcels" },
      { id: "unload", text: "Unload truck" },
      { id: "count-green", text: "Count green boxes" },
      { id: "load-green", text: "Load green boxes into cages" },
      { id: "count-returns", text: "Count returns" },
      { id: "load-returns", text: "Load returns into cage" },
      { id: "photo-cage", text: "Photograph returns cage" },
      { id: "photo-cage-truck", text: "Photograph returns cage on truck" },
      { id: "seal", text: "Seal truck" },
      { id: "departure", text: "Confirm truck departure" }
    ]},
    { section: "Driver Preparation", items: [
      { id: "gather-pdas", text: "Gather correct number of PDAs" },
      { id: "pda-battery", text: "Make sure PDAs have at least 80% battery" },
      { id: "hand-pdas", text: "Hand PDAs to drivers" },
      { id: "dsp-sheets", text: "Complete DSP sheets" },
      { id: "routes", text: "Record route numbers" },
      { id: "pda-numbers", text: "Record PDA numbers" },
      { id: "arrival", text: "Record arrival times" },
      { id: "regs", text: "Record vehicle registrations" },
      { id: "green-qty", text: "Record green box quantities" },
      { id: "assign-pickups", text: "Assign pickups" },
      { id: "pickup-info", text: "Communicate pickup information" },
      { id: "loading", text: "Help drivers load vans" },
      { id: "staff-group", text: "Update staff group when drivers leave" }
    ]},
    { section: "Warehouse", items: [
      { id: "clean", text: "Clean warehouse" },
      { id: "pallets", text: "Put pallets in correct locations" },
      { id: "front-close", text: "Close front shutter" },
      { id: "back-close", text: "Close back shutter" }
    ]},
    { section: "Reporting", items: [
      { id: "sos", text: "Complete start-of-shift report" },
      { id: "sos-send", text: "Send report to Last Mile OP Risk" },
      { id: "hourly", text: "Complete hourly updates", recurring: "hourly-dsp" },
      { id: "hourly-send", text: "Send hourly updates to both DSPs", recurring: "hourly-dsp" },
      { id: "maps-send", text: "Send driver maps to both DSPs", recurring: "hourly-dsp" }
    ]},
    { section: "Active Throughout Shift", active: true, items: [
      { id: "group", text: "Monitor driver communication group" },
      { id: "respond", text: "Respond to driver issues" },
      { id: "customers", text: "Contact customers where needed" },
      { id: "maps", text: "Monitor driver maps" },
      { id: "pe", text: "Monitor Personal Efficiency" },
      { id: "idle", text: "Monitor idle time" },
      { id: "risks", text: "Identify route risks" },
      { id: "fails", text: "Manage potential route failures" },
      { id: "ftds", text: "Monitor FTDS", link: "shift" },
      { id: "redeliveries", text: "Avoid unnecessary redeliveries" },
      { id: "assist", text: "Arrange driver assistance where appropriate" }
    ]},
    { section: "Parcel Processing", items: [
      { id: "replacement", text: "Print replacement waybills when needed" },
      { id: "reverse", text: "Print reverse waybills for rejected parcels" },
      { id: "pickup-labels", text: "Print pickup labels when needed" },
      { id: "inbound", text: "Inbound parcels after printing labels" }
    ]},
    { section: "Break", items: [
      { id: "four-hours", text: "Work at least 4 hours before break" },
      { id: "clock-out", text: "Clock out at start of break" },
      { id: "one-hour", text: "Take one-hour break" },
      { id: "clock-in", text: "Clock back in at end of break" }
    ]}
  ]
};
