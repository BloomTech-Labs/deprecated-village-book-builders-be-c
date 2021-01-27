const { json } = require("body-parser");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {
          id: 0,
          name: 'Hauck and Sons',
          count_mentees_currently_enrolled: 16,
          count_teachers: 18,
          school_description: 'Island Granite tertiary withdrawal Extended bypassing hack optimal programming efficient Kids Producer Chief indexing input Comoros Checking transparent Ergonomic Cotton focus Idaho Cheese XML programming optical Fish portal Handmade deposit',
          school_needs: 'methodologies FTP Man Agent Fresh invoice platforms green payment Buckinghamshire multi-byte deposit Illinois Frozen Philippine Principal Granite Texas Program Innovative uniform Home withdrawal Bahamas Carolina Communications Concrete Mobility Nevada TCP',
          school_goals: 'Coordinator plug-and-play Polarised Monaco real-time cyan withdrawal actuating withdrawal world-class Kentucky Garden Manager deposit Shoes Throughway Square Gourde Fresh dedicated Account Engineer seamless Central Agent International Salad connecting brand Forward',
          dynamic_questions: JSON.stringify([
            {
              'Use the back-end SDD circuit, then you can connect the online matrix!': 'initiative navigate Electronics Configuration Investor Customer salmon SDD feed Philippines grey convergence Orchestrator SAS circuit Philippines multi-byte out-of-the-box withdrawal software'
            },
            {
              'calculating the driver won\'t do anything, we need to index the 1080p IB transmitter!': 'Nakfa bus Practical Legacy teal Security transition programming redundant Cambridgeshire SDD radical Pizza standardization input channels Mobility interfaces olive responsive'
            },
            {
              'The RSS program is down, compress the wireless matrix so we can navigate the SQL circuit!': 'FTP Avon Frozen Regional plum Oklahoma Bedfordshire systems Cambridgeshire bypassing New pink Realigned real-time input bricks-and-clicks holistic monitor experiences Accountability'
            }
          ]),
          notes: 'Chief 3rd Forward Fish Cambridgeshire Producer reboot Man structure Focused blockchains Indiana Home Tactics drive Rhode Checking bandwidth withdrawal Dirham connecting maroon copying Polarised bypassing sticky Belgium Metal hacking bypassing',
          headmasterId: [
            0,
            11,
            14,
            16
          ],
          villageId: 0,
          libraryId: 0
        },
        {
          id: 1,
          name: 'Crona, Ferry and Beer',
          count_mentees_currently_enrolled: 21,
          count_teachers: 24,
          school_description: 'cross-platform Hat primary Pizza initiatives capacitor interfaces Wooden wireless Cocos Reactive Malagasy Total orchid Canada Metal Customer pink Nicaragua Orchestrator Interactions leverage Granite connecting Dollar European generate transmit Dinar Burgs',
          school_needs: 'monetize Granite parallelism National calculate model hack Bacon salmon hack e-markets Architect Place Card cross-media cross-platform Internal iterate proactive Exclusive primary neutral generate Identity Clothing standardization auxiliary standardization California fault-tolerant',
          school_goals: 'navigating reciprocal capacitor connect Electronics Steel Ergonomic pixel Corporate Assistant RAM back-end Heights Identity Books driver Borders methodology Borders Automotive override Wooden Nakfa Montana grow invoice Coordinator District Parks calculate',
          dynamic_questions: JSON.stringify([
            {
              'If we override the system, we can get to the HDD capacitor through the wireless JBOD card!': 'Profound optical XML tolerance Alabama copy Pennsylvania architecture indexing Tokelau Granite lavender optical Dynamic high-level synergies Universal Washington New Hawaii'
            },
            {
              'Try to override the PNG firewall, maybe it will back up the digital panel!': 'Metrics of Soft Web Hat Small Mouse Engineer Towels Concrete white distributed Reverse-engineered Alabama virtual Ohio Buckinghamshire primary Tactics parsing'
            },
            {
              'If we synthesize the pixel, we can get to the GB matrix through the 1080p THX matrix!': 'Intelligent deposit Orchestrator collaborative Oregon quantifying Palau Licensed navigate COM back-end Paradigm purple payment deposit Ergonomic Customizable application calculating navigating'
            }
          ]),
          notes: 'ADP input Tuna rich back-end Books Research Sleek solutions incubate copying empowering payment focus Shoes connect Arkansas functionalities monitor open-source copying connect Small cross-media Architect Fresh Account iterate Peso Clothing',
          headmasterId: [
            1
          ],
          villageId: 1,
          libraryId: 1
        },
        {
          id: 2,
          name: 'Durgan - Padberg',
          count_mentees_currently_enrolled: 1,
          count_teachers: 14,
          school_description: 'Accounts Mouse payment Inlet Practical SQL override niches Product Analyst Cheese Assurance Baby Computer Producer Supervisor encryption panel Data Borders Bedfordshire Vista brand Versatile capacitor Korea Future Kyat Bedfordshire Corporate',
          school_needs: 'Books Internal contextually-based Illinois optical B2C blockchains Wallis Afghani 1080p strategic Dollar microchip tan multi-byte SMTP e-business intranet User-centric quantify Steel model architecture success Ferry California Euro hacking COM ADP',
          school_goals: 'Pizza Plaza South Fantastic connect Computers plum policy interactive mobile action-items Berkshire Bike viral olive Avon Sleek GB Wooden Metal Cambridgeshire olive granular Ports infrastructure Shoes Kids Jewelery Faroe cohesive',
          dynamic_questions: JSON.stringify([
            {
              'indexing the system won\'t do anything, we need to bypass the bluetooth JSON transmitter!': 'Shoes Account Incredible Home Pizza Ergonomic Tasty Cotton turquoise benchmark Specialist Architect Wooden payment Mobility Planner Extensions Dollar bi-directional paradigms'
            },
            {
              'The IB hard drive is down, hack the virtual alarm so we can copy the THX sensor!': 'repurpose Small invoice connecting system Wooden ability Realigned 1080p Account Baby Synergized Berkshire holistic Human Lempira Shirt composite circuit synthesize'
            },
            {
              'I\'ll quantify the primary PCI bus, that should transmitter the ADP panel!': 'superstructure hack Bedfordshire Rubber Account services optical Extensions utilize microchip deposit Mandatory system-worthy National Generic gold Rubber Martinique input generating'
            }
          ]),
          notes: 'Rubber Account Frozen Loan grey Garden Kip Brazilian Administrator Integration Frozen Beauty Montana extensible Enhanced Colombia Tuna hack Yuan reboot Awesome Pines withdrawal Money Health Flats Account Fundamental Granite bluetooth',
          headmasterId: [
            2
          ],
          villageId: 2,
          libraryId: 2
        },
        {
          id: 3,
          name: 'Davis - Raynor',
          count_mentees_currently_enrolled: 7,
          count_teachers: 17,
          school_description: 'Bedfordshire neural SDD models Keyboard Grocery synthesizing Regional Home invoice Toys Bedfordshire Fresh Bike orange Berkshire Designer Money Architect firewall withdrawal Berkshire Computer multi-byte Accounts Indiana port initiative mobile infrastructure',
          school_needs: 'gold HTTP state tertiary solution purple mobile intuitive Hollow Lilangeni Bedfordshire Concrete Assurance back Berkshire Branding redefine asymmetric Optimization Operations platforms innovative Regional Enterprise-wide Unbranded Buckinghamshire Inverse Guyana Borders SMTP',
          school_goals: 'French Kids e-commerce Human Valley expedite cross-platform Customer green Money hack Summit multi-byte indigo Bedfordshire responsive Spring Poland Interactions markets Cambridgeshire seize Research multi-tasking Generic paradigm reboot Green Sweden programming',
          dynamic_questions: JSON.stringify([
            {
              'Try to synthesize the XML bus, maybe it will compress the wireless matrix!': 'Industrial Avon magenta supply-chains USB leverage Mississippi Maine Soap application Borders orchestrate Brand Fantastic York Sudan Incredible SMS Metal Fantastic'
            },
            {
              'I\'ll generate the solid state EXE protocol, that should protocol the SCSI firewall!': 'GB JBOD CFA Sports Product Seychelles full-range payment transmit Avon schemas impactful generate Developer Serbia Assurance copying turquoise fuchsia Handcrafted'
            },
            {
              'Use the solid state XML circuit, then you can override the primary application!': 'Customer seamless Towels open-source Alabama facilitate deliver tertiary indexing website Estonia system Chicken Group Ergonomic Frozen Frozen array 1080p deposit'
            }
          ]),
          notes: 'Account Facilitator quantifying open-source Parkway 24 Tactics Frozen Generic Frozen Soft primary National turquoise deposit Investment Honduras Home compressing support Ball Locks Clothing Small Toys Borders Kansas Legacy Flat digital',
          headmasterId: [
            3,
            10,
            15,
            19
          ],
          villageId: 3,
          libraryId: 3
        },
        {
          id: 4,
          name: 'Ratke - Haley',
          count_mentees_currently_enrolled: 1,
          count_teachers: 23,
          school_description: 'Bike District Fish payment Intelligent Marketing back upward-trending protocol Chief Rhode architectures Hat SCSI PNG Borders Licensed mobile Account ivory synthesizing blue methodical program Dollar hack National indexing payment Bacon',
          school_needs: 'SDD seamless Nevada Supervisor Soft mobile infrastructures Account Chips Associate Tools overriding Generic withdrawal Credit Kids bus Soap Market Franc e-services Future calculate purple Interactions Borders Iceland Dynamic Facilitator Unbranded',
          school_goals: 'Accounts Flat Hills Savings Practical Money initiatives ROI Plastic Ohio Facilitator Keyboard RSS Soft GB UIC-Franc Orchestrator FTP Rubber auxiliary copy Cambridgeshire Pines Programmable Director Ergonomic Oro white world-class Jewelery',
          dynamic_questions: JSON.stringify([
            {
              'If we program the sensor, we can get to the JBOD firewall through the neural AGP hard drive!': 'Industrial Strategist Director Supervisor Harbor Mandatory next-generation out-of-the-box systemic Ameliorated Executive XSS Unbranded Grocery bypassing bus Refined Chair Handcrafted Dynamic'
            },
            {
              'I\'ll quantify the bluetooth HTTP bandwidth, that should monitor the SMTP matrix!': 'Principal RSS impactful Account New circuit generate Montana Analyst bypassing Incredible Cotton maroon Investment rich Human connecting modular Concrete Manat'
            },
            {
              'I\'ll reboot the primary TCP panel, that should transmitter the ADP microchip!': 'visionary Liberian Checking hacking Generic harness Granite visionary Concrete Unbranded Concrete Loan transmit Account Towels hacking Phased States Towels Horizontal'
            }
          ]),
          notes: 'Concrete Legacy transmit Pound US Directives Bedfordshire payment Unbranded Concrete parse Borders primary Chips e-business Refined SSL Garden SQL Brand California Toys asynchronous Nevada mesh Creative Human Georgia Cotton Personal',
          headmasterId: [
            4
          ],
          villageId: 4,
          libraryId: 4
        },
        {
          id: 5,
          name: 'Nikolaus - Towne',
          count_mentees_currently_enrolled: 25,
          count_teachers: 14,
          school_description: 'Auto Total Chips Shoes Ruble Cheese white Branding Jan Senior Progressive Plastic Sports Intelligent transmit York Factors paradigm Strategist up black port Computer Tuna area innovate hack olive quantifying Soft',
          school_needs: 'attitude-oriented Developer Rubber regional Configuration FTP asymmetric system-worthy Dinar Naira Lakes Clothing JSON Computer yellow task-force Engineer Cambridgeshire Dollar AI Nevada leading-edge sensor Credit Monitored 24/7 GB online integrated navigating',
          school_goals: 'Svalbard Wooden green Brand Rubber transmitting Directives Hat Rubber Assistant Mountains Fantastic Metal Internal Account monetize Hat Home Compatible out-of-the-box Chief Ergonomic Quality-focused SAS Chad Soap Sports Camp Incredible Sleek',
          dynamic_questions: JSON.stringify([
            {
              'Use the auxiliary SAS panel, then you can hack the bluetooth program!': 'capacity Rustic back-end radical Alabama Program Handmade Investor PCI Shoes transition Virginia Global GB auxiliary clicks-and-mortar action-items metrics neural Account'
            },
            {
              'You can\'t navigate the driver without quantifying the auxiliary RSS array!': 'invoice payment Synchronised solid Loan Loan Berkshire Fully-configurable functionalities Macao deposit Greens Vision-oriented clicks-and-mortar Berkshire Research AI Incredible extensible indexing'
            },
            {
              'If we copy the matrix, we can get to the XML driver through the primary SCSI protocol!': 'invoice fuchsia Assimilated empower parse Gourde Jersey Integration well-modulated Washington reboot deposit backing Executive withdrawal Barthelemy rich Administrator magnetic Persevering'
            }
          ]),
          notes: 'Avon program Fresh functionalities distributed Account Tools feed Mount Table TCP Pa\'anga Account methodologies Virginia Chair Intelligent Concrete Generic extend actuating Nepalese deposit JSON structure responsive Bhutanese Manager Rubber seize',
          headmasterId: [
            5,
            12,
            17
          ],
          villageId: 5,
          libraryId: 5
        },
        {
          id: 6,
          name: 'Johnson and Sons',
          count_mentees_currently_enrolled: 12,
          count_teachers: 16,
          school_description: 'Industrial Engineer experiences Organic radical Avon virtual generating technologies Account content Well AGP Product middleware Metal Ergonomic e-enable Berkshire Gloves Tools Ergonomic motivating Hong Savings grey collaborative blue Gorgeous Investment',
          school_needs: 'Response Sleek Frozen Baby Soap Product Branding HDD reinvent North overriding interface Sports Florida Hawaii capacitor firmware Bike wireless supply-chains Coordinator ability hack Borders Frozen Optimization override Fantastic technologies e-services',
          school_goals: 'Optimization Visionary Optimization monitor Valleys Toys Avon withdrawal intuitive Handcrafted Innovative Account Bedfordshire high-level sensor card dedicated revolutionary Group Global FTP Uganda channels Netherlands compress Kansas approach markets Barbados indexing',
          dynamic_questions: JSON.stringify([
            {
              'I\'ll reboot the back-end PCI system, that should application the IB hard drive!': 'blue Cedi HTTP Associate Supervisor Account productize ROI SQL Gloves Liberia alarm Global action-items quantifying Rubber Island Ergonomic 6th Metrics'
            },
            {
              'copying the bandwidth won\'t do anything, we need to reboot the bluetooth HTTP port!': 'magenta Licensed Compatible Principal evolve mesh best-of-breed neutral Hat Lakes Shirt Intuitive Fantastic Jewelery CSS azure transmitting coherent withdrawal Chicken'
            },
            {
              'You can\'t input the alarm without programming the mobile ADP monitor!': 'Bike Engineer programming ivory Orchestrator Internal input Robust generating portals Creative distributed Concrete Account services Architect transmitting online Metal Decentralized'
            }
          ]),
          notes: 'Borders Mouse parse payment California Plastic Home Metal e-markets Bedfordshire bandwidth Division payment Handmade Ergonomic Automotive Loan payment Grocery Balanced Sports Ngultrum multi-byte capacitor JSON Rubber Spain navigating TCP Practical',
          headmasterId: [
            6
          ],
          villageId: 6,
          libraryId: 6
        },
        {
          id: 7,
          name: 'Williamson and Sons',
          count_mentees_currently_enrolled: 2,
          count_teachers: 5,
          school_description: 'Gloves Inverse Marketing Bedfordshire Colorado Berkshire parse silver USB Bedfordshire Kina Kyat 1080p Front-line Account benchmark withdrawal Architect withdrawal efficient Tuna transparent synthesize Bedfordshire relationships Granite Refined International Product web-enabled',
          school_needs: 'product Mississippi channels Directives auxiliary infrastructures Creek Licensed Lead input plum Wooden deposit Brooks monitor non-volatile Ohio Jersey Oregon Leu Account index Utah yellow Gloves connect Self-enabling up Fish monetize',
          school_goals: 'Gloves Intelligent CSS Up-sized Program Hills Director Montana Western Pre-emptive parsing Wooden gold synthesizing Bike attitude-oriented Money silver envisioneer input Indiana Chips firewall Bedfordshire calculating Tasty Card Savings solid Grocery',
          dynamic_questions: JSON.stringify([
            {
              'If we generate the driver, we can get to the COM application through the 1080p PNG alarm!': 'copying white platforms index copy navigate platforms Enterprise-wide payment Solutions Road Granite Tasty holistic synthesizing mission-critical Administrator generate Krone Small'
            },
            {
              'I\'ll input the online TCP card, that should circuit the XSS hard drive!': 'drive portals back-end Avon synergies port North alarm Cross-platform Applications markets Yen haptic Gibraltar up Cotton Cotton Jewelery salmon Books'
            },
            {
              'I\'ll synthesize the online CSS program, that should pixel the TCP program!': 'transmitting granular neural Arizona Wisconsin Account Car Helena magenta Auto interface productize back bandwidth Mexico Progressive program monitor mobile black'
            }
          ]),
          notes: 'pixel Account 24/7 Kuna content initiative Account green compress Internal online Soap Cambridgeshire Directives solution extend Faroe Steel Regional flexibility Legacy Credit generation programming Music synergistic Account Mauritius Ridge Keys',
          headmasterId: [
            7,
            13
          ],
          villageId: 7,
          libraryId: 7
        },
        {
          id: 8,
          name: 'Connelly Inc',
          count_mentees_currently_enrolled: 2,
          count_teachers: 12,
          school_description: 'dynamic Account National Sierra Assurance parse communities Home drive strategic Steel one-to-one copying Kansas Organized connecting Brand monitor productize Jersey Niue Kuwaiti Loaf neural Mobility Zimbabwe Fantastic Fish Brazil Metal',
          school_needs: 'Loan Account Romania Fresh emulation empower Facilitator International alliance Diverse Sports digital zero up Salad project Computer Home virtual olive collaborative orchestration Data clear-thinking salmon Somoni Usability Dam transitional array',
          school_goals: 'Polynesia analyzer real-time Checking Cambridgeshire bandwidth input Regional silver Account People\'s Granite Synergized Directives matrix asymmetric online Cotton Future salmon Rue Licensed Arizona Port Wisconsin sensor Producer Fantastic Costa Group',
          dynamic_questions: JSON.stringify([
            {
              'I\'ll connect the virtual PCI card, that should protocol the JSON bandwidth!': 'frictionless integrated bandwidth black Fantastic Rubber Latvia Frozen AGP TCP Response digital port cyan Handcrafted Bacon indexing New Regional Greens'
            },
            {
              'Try to bypass the JBOD bus, maybe it will reboot the multi-byte application!': 'system Bedfordshire South Bedfordshire Table synthesizing gold drive Avon Intelligent open-source European deposit connect Utah Optimization redundant Account white Future'
            },
            {
              'Use the solid state EXE transmitter, then you can transmit the auxiliary monitor!': 'auxiliary Manager Cambridgeshire Administrator system Executive Global Credit auxiliary hierarchy Borders Program Central vortals wireless Intelligent Awesome deposit Rufiyaa vertical'
            }
          ]),
          notes: 'turn-key impactful Dynamic SDD Sweden collaboration array redefine Concrete Branding withdrawal Concrete copy copying Branding Slovenia incentivize Litas Delaware framework Awesome Computer Road Oregon network haptic core fuchsia initiative monitor',
          headmasterId: [
            8
          ],
          villageId: 8,
          libraryId: 8
        },
        {
          id: 9,
          name: 'Kassulke, Medhurst and Schmitt',
          count_mentees_currently_enrolled: 2,
          count_teachers: 15,
          school_description: 'Organized compressing Frozen Rupiah Program e-tailers payment eco-centric Iowa Security Brooks Hill Industrial Internal grey cutting-edge Tasty Fords support Cross-platform Future Cambridgeshire Manor withdrawal payment needs-based Regional back-end invoice Market',
          school_needs: 'toolset Plastic Computers Nakfa integrate Program bricks-and-clicks parse deposit Soap quantify Cotton haptic Rupee efficient ubiquitous alliance Liaison Steel Borders auxiliary USB Central Loan Concrete Lithuanian Berkshire Automotive orchestrate models',
          school_goals: 'Knolls Chair tan Home Wooden Hat Buckinghamshire Rapids applications Buckinghamshire focus tan Louisiana Assurance edge Principal Bike system-worthy FTP improvement Analyst EXE Plastic International Arkansas Wooden grow Berkshire metrics expedite',
          dynamic_questions: JSON.stringify([
            {
              'We need to program the open-source RAM matrix!': 'Shirt grid-enabled Chicken Tasty Soft cyan Beauty granular dot-com Frozen withdrawal deposit Uganda circuit Palau Square system Chair systemic Assurance'
            },
            {
              'If we program the driver, we can get to the USB system through the virtual AGP card!': 'Garden Credit Berkshire Towels Paradigm reintermediate Islands content deposit Soft Savings Cheese SDR foreground Belarussian Michigan Concrete productize virtual Isle'
            },
            {
              'You can\'t copy the matrix without connecting the redundant RAM protocol!': 'Avon red Account Investment South engineer Account PNG Shilling fresh-thinking Turkmenistan drive deposit Savings Infrastructure Intelligent Ball Ball Kwanza wireless'
            }
          ]),
          notes: 'EXE Account users bluetooth HDD access Clothing Licensed Cheese Books Switchable Checking Movies back-end Soap navigating Zloty THX Face input Creative compress Dynamic Pants Cambridgeshire calculating Home Plastic Pants up',
          headmasterId: [
            9,
            18
          ],
          villageId: 9,
          libraryId: 9
        }
      ]);
    });
};
