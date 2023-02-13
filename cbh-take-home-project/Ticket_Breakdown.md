# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Ticket 1: Add custom ID
The Facilities should have the option to add custom IDs for each Agent. We will need to add a function that lets the Facilities update the agent.customId. We will need to keep the Agent's original ID under agent.Id for our own reporting purposes. We can add agent.facilityId and take the input and update each agent with the custom ID. Each agent will then have the original ID and facility given ID. 

Time: under an hour

# Ticket 2: Custom reports for Facilities
When generating the reports we will need to use the Facilities ID instead of our internal ID to avoid any confusion. Because of this we will need to filter by facility for each Agent. We should agent agent.facility to each agent. This way we can generate reports for the facilities for all agents they have.

Time: under an hour to add agent.facility but adding each facility to each agent could take a few hours.

# Ticket 3: Generate report
We can now generate a report for the Facilties with a filter to agent.facility = "FACILITY_NAME", agent.name, agent.facilityId, agent.hours

Time: a few hours for formatting purposes