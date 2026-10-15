/*
  Service copy for preview pages, one entry per trade.
  Rules: plain language, describe the work only. No claims about licenses,
  insurance, hours, prices, years in business or guarantees, because we
  don't know those for any given business.
  Keys match the trade keys written by the import script.
*/
window.TRADES = {
  "tree-service": {
    checkin: "Storm season is coming. Want us to look at your trees before the next big wind?",
    line: "Tree removal, trimming and storm cleanup",
    noun: "tree work",
    services: [
      ["Tree removal", "Dead, leaning or unwanted trees taken down, in sections when there's a house, fence or power line nearby."],
      ["Tree trimming", "Deadwood and low or crossing limbs cut back so the tree stays healthy and clear of the roof."],
      ["Storm cleanup", "Fallen trees and broken limbs cleared off roofs, driveways and yards after a storm."],
      ["Stump grinding", "Stumps ground down below the surface so the spot can be planted, seeded or paved."],
      ["Lot and brush clearing", "Overgrown brush and small trees cleared to open up a yard, fence line or building lot."],
      ["Tree health checks", "A look at trees you're worried about, with a straight answer on whether they need work."]
    ]
  },
  "chimney": {
    checkin: "It's about a year since your last sweep. Want to get on the schedule before you light the first fire?",
    line: "Chimney sweeping, inspection and repair",
    noun: "chimney work",
    services: [
      ["Chimney sweeping", "Soot and creosote cleaned out of the flue so the fireplace or stove burns cleanly."],
      ["Chimney inspection", "A full look at the flue, liner, crown and cap, with photos of anything that needs attention."],
      ["Caps and dampers", "Caps that keep out rain and animals, and dampers that seal when the fireplace is off."],
      ["Crown and masonry repair", "Cracked crowns and loose or crumbling brick repaired before water gets in."],
      ["Chimney liners", "Damaged liners replaced so smoke and gases vent the way they should."],
      ["Leak repair", "Leaks around the chimney traced and fixed, from flashing to waterproofing."]
    ]
  },
  "septic": {
    checkin: "It's been a while since your last pumping. Want us to put you on the schedule?",
    line: "Septic pumping, inspection and repair",
    noun: "septic work",
    services: [
      ["Septic pumping", "Tanks pumped out on a regular schedule, before solids back up into the drain field."],
      ["Septic inspection", "Tank and system checks for home sales, new owners or anything that seems off."],
      ["Septic repair", "Broken baffles, lids, pipes and pumps repaired so the system works again."],
      ["Drain field service", "Soggy yards, slow drains and odors tracked down to the drain field and dealt with."],
      ["Line cleaning", "Clogged lines between the house and the tank cleared out."],
      ["Riser and lid installs", "Risers that bring the tank lid up to ground level so future pumping is quicker."]
    ]
  },
  "hvac": {
    checkin: "Cold weather is on the way. Want a heating tune-up before you need it?",
    line: "Heating and air conditioning service",
    noun: "heating and cooling work",
    services: [
      ["Heating repair", "Furnaces and heat pumps that won't start, run cold or keep shutting off."],
      ["AC repair", "Air conditioners that blow warm, freeze up, leak or won't turn on."],
      ["New system installs", "Old or failing systems replaced with equipment sized for the house."],
      ["Tune-ups", "Seasonal maintenance that keeps the system running and catches small problems early."],
      ["Thermostats", "New or smart thermostats installed and set up."],
      ["Indoor air and ducts", "Duct repair, filters and air quality add-ons for a home that feels stuffy or dusty."]
    ]
  },
  "generator": {
    checkin: "It's time for your generator's yearly service. Want us to set up a visit?",
    line: "Home standby generators, installed and serviced",
    noun: "generator work",
    services: [
      ["Whole-home generators", "Standby generators that come on by themselves when the power goes out."],
      ["Sizing and site visits", "A visit to work out what the house needs to keep running during an outage."],
      ["Transfer switches", "The switch that connects the generator to the home's panel, installed and tested."],
      ["Portable generator hookups", "Inlets and interlocks that let a portable generator power the house safely."],
      ["Generator maintenance", "Oil, filters, batteries and test runs so the generator is ready when it's needed."],
      ["Generator repair", "Generators that won't start, won't switch over or shut down under load."]
    ]
  },
  "insulation": {
    checkin: "Heating bills going up? We can check your attic and seal up drafts before winter.",
    line: "Spray foam and attic insulation",
    noun: "insulation work",
    services: [
      ["Spray foam insulation", "Open and closed cell foam that seals gaps and insulates walls, attics and rooflines."],
      ["Attic insulation", "Blown-in insulation added to thin or settled attic floors."],
      ["Crawl spaces and basements", "Insulation for floors, rim joists and walls below the living space."],
      ["Air sealing", "Gaps around pipes, wires, vents and attic hatches sealed to stop drafts."],
      ["Old insulation removal", "Damaged, wet or pest-filled insulation pulled out before new goes in."],
      ["New construction and additions", "Insulation for new homes, additions, garages and shops."]
    ]
  },
  "pest-control": {
    checkin: "Mice start moving indoors this time of year. Want us to seal things up before they do?",
    line: "Pest control for homes and businesses",
    noun: "pest control",
    services: [
      ["General pest control", "Ants, roaches, spiders and other common pests treated inside and out."],
      ["Rodent control", "Mice and rats removed, and the gaps they use to get in sealed up."],
      ["Termites", "Inspections and treatment for termites before they damage the house."],
      ["Mosquitoes", "Yard treatments that cut down mosquitoes during the warm months."],
      ["Wasps and bees", "Nests removed from eaves, decks and walls."],
      ["Ongoing service plans", "Regular visits that keep pests from coming back."]
    ]
  },
  "garage-doors": {
    checkin: "Cold weather is hard on springs and openers. Want a quick tune-up?",
    line: "Garage door repair and installation",
    noun: "garage door work",
    services: [
      ["Spring replacement", "Broken torsion and extension springs replaced so the door opens again."],
      ["Opener repair and installs", "Openers that are noisy, stuck or dead, repaired or replaced."],
      ["New garage doors", "New doors in the style, color and insulation level the house needs."],
      ["Off-track doors", "Doors that are crooked, jammed or off their tracks put back and adjusted."],
      ["Cables, rollers and hinges", "Worn parts replaced so the door runs smoothly and quietly."],
      ["Tune-ups", "Lubrication, balance checks and safety sensor tests."]
    ]
  },
  "welding": {
    checkin: "Getting trailers and equipment ready for the busy season? We can fix them before the rush.",
    line: "Mobile welding and fabrication",
    noun: "welding work",
    services: [
      ["Mobile welding", "Welding done on site, at your property, shop or job site."],
      ["Trailer repair", "Cracked frames, tongues, ramps and hitches welded and reinforced."],
      ["Gates and fences", "Broken hinges, latches and steel gates and fence panels repaired."],
      ["Equipment repair", "Buckets, attachments and farm and construction equipment welded back into service."],
      ["Custom fabrication", "Racks, brackets, railings and other steel parts built to fit."],
      ["Railings and stairs", "Steel handrails and stair parts repaired or built new."]
    ]
  },
  "auto-glass": {
    checkin: "Cold weather can turn a small chip into a long crack. Want us to fix that chip before it spreads?",
    line: "Windshield replacement and auto glass repair",
    noun: "auto glass work",
    services: [
      ["Windshield replacement", "Cracked or broken windshields replaced with new glass."],
      ["Rock chip repair", "Small chips filled before they spread into a crack."],
      ["Crack repair", "Short cracks repaired when the glass can be saved."],
      ["Side windows", "Broken door and side windows replaced and cleaned of loose glass."],
      ["Back glass", "Rear windows replaced, including the defrost lines."],
      ["Cars, trucks and SUVs", "Glass for everyday vehicles, work trucks and vans."]
    ]
  },
  "_default": {
    checkin: "It's been a while since we were out. Need anything done this season?",
    line: "Local service you can call or text",
    noun: "work",
    services: [
      ["Estimates", "Tell us what you need and get an estimate for the job."],
      ["Repairs", "Problems fixed so things work the way they should."],
      ["New installs", "New equipment or work installed for homes and businesses."],
      ["Maintenance", "Regular service that catches small problems early."],
      ["Residential work", "Jobs for homeowners around town."],
      ["Commercial work", "Jobs for local businesses and property managers."]
    ]
  }
};
/* Trades the import script knows that share copy with another. */
window.TRADES["stump-grinding"] = window.TRADES["tree-service"];
