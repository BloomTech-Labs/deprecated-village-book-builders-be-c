
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('libraries')
  .del()
    .then(function () {
      // Inserts seed entries
      return knex('libraries').insert([
        {
          id: 0,
          name: 'Buckridge - Beier',
          description: 'Unbranded Fantastic lavender generate Face client-driven Rubber multi-byte Computer firewall e-business Consultant Kansas Liaison Fresh Peso IB Ergonomic foreground deposit Forward Colorado primary panel Money Practical alarm bypass navigate Buckinghamshire',
          library_usage: 'Money networks Checking brand navigating teal Dollar Locks Cotton vortals loyalty Pataca transmitter Franc generating open-source Pizza value-added Taka incentivize Computers embrace Fresh matrix Kansas knowledge District up Maine Team-oriented',
          notes: 'purple Proactive Directives Serbian Buckinghamshire Iran intelligence Technician haptic invoice olive Streamlined robust Locks optical Beauty visionary Berkshire Loan Analyst Jordanian XML Berkshire Computers program Directives generating Colorado wireless Keyboard',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            0,
            11,
            18
          ],
          villageId: 0,
          schoolId: 0
        },
        {
          id: 1,
          name: 'Farrell - Kuhic',
          description: 'invoice Salad Officer neural-net Ridge bypassing Granite optimize Cambridgeshire Keyboard programming Rest Total bypassing Director Chips 1080p RSS coherent mint SAS interface Frozen interface People\'s neural Car Generic District Borders',
          library_usage: 'orchid RAM Florida Loan viral invoice Borders Armenian Gorgeous withdrawal alarm Gorgeous red Shoes project Operations Auto Account Producer Configurable withdrawal primary Granite Arizona capacitor Tuna info-mediaries mobile invoice matrix',
          notes: 'leading-edge Implementation Rustic Loan IB interfaces Tuna Fantastic Shoes Account Automotive Account Wooden Serbian Frozen RAM Ergonomic Sleek bus programming District cross-media COM Highway Intelligent evolve Table portal payment Cordoba',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            1
          ],
          villageId: 1,
          schoolId: 1
        },
        {
          id: 2,
          name: 'King - Waters',
          description: 'Regional partnerships Specialist hacking bus Principal Executive Designer Shoes copying system Borders emulation enhance Multi-channelled architecture task-force Palladium Lodge Customer Rico lime Assistant Loan JBOD THX Keyboard optical Dirham haptic',
          library_usage: 'Mobility Bedfordshire ROI synergize Facilitator withdrawal Usability neural architect Plastic Avon invoice Credit Berkshire Developer Guadeloupe Ball model payment Fresh deposit Account alarm Account Metrics PNG Borders Markets tan EXE',
          notes: 'Planner projection Metal Rubber harness Balanced Djibouti Plastic Paraguay 1080p withdrawal Chad functionalities synthesizing Investment Baby extend granular Human Cambridgeshire Account grow Account ROI Cambridgeshire cyan Front-line bleeding-edge Account SQL',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            2
          ],
          villageId: 2,
          schoolId: 2
        },
        {
          id: 3,
          name: 'Moore - Grant',
          description: 'Mount Granite Lari Identity Corners brand Kip Industrial SCSI Planner collaboration Dynamic vortals Jewelery Point standardization Designer Baby synergistic calculate metrics Metrics clicks-and-mortar payment Iraq deliverables ROI Computer District interactive',
          library_usage: 'moderator transmit Licensed Rico Rhode Spurs Forest networks pink hacking Wooden Gourde adapter Specialist Configurable deposit Belize grey Swaziland teal SCSI Anguilla yellow invoice Iowa turn-key deposit Table Handcrafted Central',
          notes: 'synthesize best-of-breed Frozen Benin turquoise Bike deposit payment Soap Assurance Garden Senior West deposit bandwidth River Hampshire Shirt applications sensor lime Automotive Sports Awesome turn-key TCP Rustic Sudanese IB Soft',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            3,
            12
          ],
          villageId: 3,
          schoolId: 3
        },
        {
          id: 4,
          name: 'Klocko - Christiansen',
          description: 'deposit homogeneous Parkways navigating Granite Portugal synergy bus connecting calculating programming Fish invoice Future Cambodia Global Bedfordshire bypass Right-sized connect Developer Beauty Borders Direct Investment Shoes transition Investor Soap sensor',
          library_usage: 'Decentralized interfaces Metal Identity Regional New 24/365 Cheese enable firewall bypass Operative quantify Fresh intuitive Metal Checking methodologies Steel invoice red quantify system salmon Manager Movies Handcrafted Taiwan Shirt Cedi',
          notes: 'emulation Handmade Zimbabwe state Tactics Vietnam Generic Hat infrastructures wireless Licensed Ball Pizza generating SMTP Account backing Pula Buckinghamshire Plains Account silver Tennessee hack Computers Developer Unbranded mobile Customizable Metal',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            4,
            13
          ],
          villageId: 4,
          schoolId: 4
        },
        {
          id: 5,
          name: 'Romaguera - Boyer',
          description: 'payment Investment Nevada portals syndicate Ohio Checking Metal one-to-one Legacy back-end Shirt Albania Pre-emptive up Cheese Visionary Missouri e-business deposit Direct green extensible target bluetooth Burg Turnpike Wooden Licensed blockchains',
          library_usage: 'SCSI invoice parsing niches Tugrik Pizza Operations Money monetize Generic Fantastic Markets Automotive HTTP Sleek Tunisian encompassing Germany cutting-edge hybrid e-markets navigate grey Refined quantify Ergonomic Rubber Shoes matrix Polarised',
          notes: 'Rapids Mali models intranet Canyon generate Shirt cyan lime Account Brand Handmade Multi-lateral Soft Account applications Stravenue input Borders Pizza synthesize syndicate enhance drive Korean Euro Sports Plains Assistant quantifying',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            5,
            15
          ],
          villageId: 5,
          schoolId: 5
        },
        {
          id: 6,
          name: 'Wilkinson - Grady',
          description: 'Baby Shoes Manors Factors web-enabled reintermediate turn-key redundant bluetooth Gateway Account digital Data Avon Awesome Cotton middleware Algerian Israel synthesizing productize bluetooth radical array strategize quantify Virginia Rial Configuration action-items',
          library_usage: 'up Latvia Tools 4th Shirt Wooden neural hacking Gorgeous withdrawal quantifying Designer technologies Burg e-tailers SSL one-to-one facilitate Shirt Forks Saint ubiquitous models Supervisor Practical New solution workforce SSL Licensed',
          notes: 'transform bifurcated Dakota Ranch Ergonomic AGP silver calculating Music Checking bricks-and-clicks contingency programming modular fuchsia Delaware synthesizing Account Games Pound Officer Frozen Japan end-to-end Berkshire grey Buckinghamshire Iraq wireless Tennessee',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            6,
            10,
            16
          ],
          villageId: 6,
          schoolId: 6
        },
        {
          id: 7,
          name: 'Kirlin - Mayert',
          description: 'Applications PCI Dynamic mobile Iceland foreground capacitor compress Reverse-engineered Computers PNG Gorgeous incentivize Consultant invoice Nevada Regional Russian Legacy sticky invoice synthesizing Specialist Mozambique state Minnesota Devolved synergies Division turquoise',
          library_usage: 'bricks-and-clicks granular clear-thinking SMS Planner application calculating multi-state Technician quantifying Berkshire policy applications users optical Corner Connecticut Buckinghamshire withdrawal transmitting Front-line contextually-based system Handcrafted Georgia tan SDD Plaza programming mission-critical',
          notes: 'Account synthesizing content Avon Bacon Principal Keyboard magnetic microchip bluetooth portal TCP revolutionize Licensed static mission-critical Danish Rubber overriding seize navigating Adaptive FTP aggregate Frozen Designer Future microchip Checking Cambridgeshire',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            7,
            19
          ],
          villageId: 7,
          schoolId: 7
        },
        {
          id: 8,
          name: 'Quitzon - Rippin',
          description: 'Frozen complexity Fresh Bedfordshire input Bike pink Lats white monetize bandwidth Wooden turquoise system Investment Vision-oriented quantify Buckinghamshire Business-focused Walk connecting up initiative payment silver SSL partnerships benchmark deposit Frozen',
          library_usage: 'connect Health Gorgeous infomediaries Pre-emptive Tuna Director Money extensible Pines District Refined Summit Arizona action-items Planner Unit payment Granite orchid white synergistic Towels redefine capability Loan Bedfordshire Myanmar Venezuela Glen',
          notes: 'program complexity CSS Strategist Senegal THX Savings quantifying wireless instruction Product SCSI Business-focused Unbranded Electronics redefine Frozen Table reintermediate Arkansas Accountability efficient payment Pants navigate multi-byte Savings Kentucky sky Face',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            8
          ],
          villageId: 8,
          schoolId: 8
        },
        {
          id: 9,
          name: 'Sawayn - Heller',
          description: 'blue Iowa Reactive Nebraska embrace deposit Handmade Designer Money system value-added Borders Lights Regional invoice Officer repurpose alarm methodologies index Dynamic AI strategic responsive Games Rustic Wooden interactive Ball Intelligent',
          library_usage: 'Bacon explicit functionalities Awesome multi-state Account Metal matrix Oregon circuit throughput Granite Gloves Steel Future brand Chips help-desk drive Electronics Finland AGP Sleek Fantastic Cheese Taiwan customized Gorgeous silver hub',
          notes: 'Decentralized transmit initiative Movies compressing Officer EXE ubiquitous Berkshire initiatives capacitor Creative Soap generate invoice lavender withdrawal Games global deposit paradigm Gourde 24/7 Grass-roots Tanzania engine back-end Account Mexico maroon',
          image: 'http://placeimg.com/600/600',
          headmasterId: [
            9,
            14,
            17
          ],
          villageId: 9,
          schoolId: 9
        }
      ]);
    });
};
