
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('villages').del()
    .then(function () {
      // Inserts seed entries
      return knex('villages').insert([
        {
          id: 0,
          name: 'MacGyverchester',
          GPS_coordinates: [
            '-34.9921',
            '10.0791'
          ],
          village_contact_name: 'Willie Leannon',
          village_contact_phone: '899-480-5466',
          notes: 'systemic Dollar transmitting Liaison North HDD ROI innovate feed Direct Avon back-end attitude fuchsia open-source Soap experiences Devolved Persevering visionary Rufiyaa Escudo Chair port Soap website Avon task-force regional International interface Borders Creative XML scalable Directives streamline Dollar bus Table brand yellow Tennessee cross-platform Kroon circuit e-services Assistant contextually-based Fundamental',
          headmasterId: [
            0,
            33,
            41,
            50,
            55,
            56,
            58
          ],
          schoolId: 0,
          libraryId: 0
        },
        {
          id: 1,
          name: 'Flatleymouth',
          GPS_coordinates: [
            '23.1416',
            '71.6071'
          ],
          village_contact_name: 'Elsa White',
          village_contact_phone: '382-691-2323',
          notes: 'Metal Digitized Missouri invoice Soft AGP global Bedfordshire Fresh Dominica Singapore Checking innovative iterate Tajikistan up Corporate state management compress Down-sized Branding Cheese Salad collaboration ROI Robust technologies Rubber payment models Flat primary Future Small analyzing Cliff Money relationships wireless Computer Luxembourg Tuna card parse hack infrastructures Palladium best-of-breed Cordoba',
          headmasterId: [
            1
          ],
          schoolId: 1,
          libraryId: 1
        },
        {
          id: 2,
          name: 'Aricville',
          GPS_coordinates: [
            '-24.8355',
            '178.9034'
          ],
          village_contact_name: 'Melvin Schumm II',
          village_contact_phone: '520-340-6850',
          notes: 'Michigan Avon Shores haptic Home Account orchestrate next Lari EXE Arizona Lock Borders Central magnetic Developer Stream copy Steel web-readiness cross-media Wisconsin invoice Electronics HTTP Virtual Open-architected sensor Pants methodologies Hat Handcrafted invoice Shirt National User-friendly Plastic mobile Expanded Berkshire Mouse Ball Rustic Dakota Decentralized backing Generic bluetooth Auto Concrete',
          headmasterId: [
            2,
            44
          ],
          schoolId: 2,
          libraryId: 2
        },
        {
          id: 3,
          name: 'Skyehaven',
          GPS_coordinates: [
            '-36.8506',
            '67.9160'
          ],
          village_contact_name: 'Mr. Mike Bergstrom',
          village_contact_phone: '348-338-6418',
          notes: 'calculate Saudi executive primary Wall Brazilian Quality-focused Bahamian engage Account Monaco Berkshire hybrid indexing Sausages invoice non-volatile Corporate embrace state Granite connect USB disintermediate deposit invoice UIC-Franc Jersey deposit program Adaptive Credit connect hack olive Frozen microchip Internal defect Gibraltar Mouse 24/7 synthesize robust Account bluetooth Technician e-tailers Island bandwidth',
          headmasterId: [
            3,
            45
          ],
          schoolId: 3,
          libraryId: 3
        },
        {
          id: 4,
          name: 'New Danielleland',
          GPS_coordinates: [
            '70.6072',
            '-5.2232'
          ],
          village_contact_name: 'Andres Howe',
          village_contact_phone: '415-660-4893',
          notes: 'Generic analyzer Cheese Markets Frozen open-source Focused Georgia Granite purple Regional Practical Market Concrete microchip orchid SMS Practical bus Wall exploit withdrawal invoice South Shirt Representative Security Cedi Awesome Awesome Developer deposit Frozen Tokelau Berkshire redundant Wooden Forward Metrics Future payment Generic quantifying hub e-business Generic Towels Practical Luxembourg solution-oriented',
          headmasterId: [
            4,
            39
          ],
          schoolId: 4,
          libraryId: 4
        },
        {
          id: 5,
          name: 'Klockoburgh',
          GPS_coordinates: [
            '-66.1278',
            '-132.6204'
          ],
          village_contact_name: 'Gabriel Wisozk',
          village_contact_phone: '279-631-7812',
          notes: 'haptic leading-edge Steel Shirt Chips Bacon Direct Unbranded solution-oriented one-to-one Borders bypass Baby array Tuna indexing SAS invoice cross-platform sensor primary embrace value-added Director stable Account up Developer Ouguiya salmon Rubber Generic quantify Metal networks Metrics Ball Legacy Technician Place contingency Jersey Intranet Toys Small backing Cheese instruction Inlet neural',
          headmasterId: [
            5
          ],
          schoolId: 5,
          libraryId: 5
        },
        {
          id: 6,
          name: 'South Christiana',
          GPS_coordinates: [
            '-52.1839',
            '-50.9081'
          ],
          village_contact_name: 'Blanche Parker',
          village_contact_phone: '537-571-6690',
          notes: 'robust transmit Granite up generate monitor Chicken South Factors cross-media Meadow Texas Analyst Colorado Account Brand Plastic Movies Refined Account Regional edge redefine Turks Generic Legacy Rubber copy Consultant Tuna drive Refined Account Connecticut Bike Internal Armenian Moldovan Dinar withdrawal Bacon reboot Wisconsin withdrawal Granite Arkansas Granite Stream transform utilize',
          headmasterId: [
            6,
            30,
            57
          ],
          schoolId: 6,
          libraryId: 6
        },
        {
          id: 7,
          name: 'Tracemouth',
          GPS_coordinates: [
            '-40.1951',
            '124.2452'
          ],
          village_contact_name: 'Rosemary Ryan',
          village_contact_phone: '332-859-1851',
          notes: 'solid copying haptic Burg matrix Guiana Ergonomic protocol Island Shoes Producer port West programming asymmetric Car mesh Hampshire Concrete XSS Chief Isle navigating generate Tanzania Direct Plastic Global extend models bypass client-server connect Kansas scalable Horizontal Berkshire Tuna AI e-business customized Shirt compressing dynamic Books networks user-centric upward-trending Thailand payment',
          headmasterId: [
            7,
            32,
            34
          ],
          schoolId: 7,
          libraryId: 7
        },
        {
          id: 8,
          name: 'Elihaven',
          GPS_coordinates: [
            '87.4603',
            '139.6727'
          ],
          village_contact_name: 'Gloria Schulist PhD',
          village_contact_phone: '562-841-2555',
          notes: 'Home Central generate Chips exploit interface Monaco Specialist hack back-end red Berkshire strategize Generic cross-platform system digital silver Wooden syndicate unleash TCP maximize SQL benchmark Re-contextualized Managed Swaziland up HTTP blockchains gold magenta implement Arab Shoes Dirham Assistant reciprocal Internal Liechtenstein Oregon bandwidth Toys Unbranded Baby Cheese Market bluetooth Technician',
          headmasterId: [
            8,
            46
          ],
          schoolId: 8,
          libraryId: 8
        },
        {
          id: 9,
          name: 'Port Ophelia',
          GPS_coordinates: [
            '12.4033',
            '-161.0401'
          ],
          village_contact_name: 'Earnest Lockman',
          village_contact_phone: '808-514-2602',
          notes: 'leverage hack Rubber Sudanese vortals grow Infrastructure B2C Gloves fault-tolerant mobile paradigm SCSI Steel Pennsylvania transmitting Row Public-key Handcrafted Quality-focused Islands multi-byte Cloned Administrator magnetic fuchsia ivory Handmade AI Borders Director Rupee Account haptic scalable Granite Gloves parse Cyprus syndicate implementation Maldives Ball robust index markets Facilitator Movies Car Toys',
          headmasterId: [
            9,
            31,
            35
          ],
          schoolId: 9,
          libraryId: 9
        },
        {
          id: 10,
          name: 'Friesenhaven',
          GPS_coordinates: [
            '-1.6528',
            '4.5258'
          ],
          village_contact_name: 'Alvin Quigley',
          village_contact_phone: '863-796-9189',
          notes: 'workforce invoice Parkways Movies Infrastructure Account transmitting Fish Tools Tennessee Chicken Azerbaijan Account Islands architect Awesome productivity deposit Account Michigan logistical user-facing Loan Guam Steel Account Networked Switchable turquoise Buckinghamshire Frozen Forward red Plastic Loan Mayotte Borders Consultant Park Gloves compress Generic payment Plastic enterprise connect intuitive transition bandwidth synthesize',
          headmasterId: [
            10
          ],
          schoolId: 10,
          libraryId: 10
        },
        {
          id: 11,
          name: 'Gretchenport',
          GPS_coordinates: [
            '-19.6987',
            '-19.2114'
          ],
          village_contact_name: 'Rose Ondricka II',
          village_contact_phone: '562-984-4962',
          notes: 'Plastic Human Chicken Bedfordshire Borders Barbados Bike Product Moldovan Bedfordshire SQL Rubber Awesome JBOD incentivize transmitter Paradigm plum auxiliary system mint Springs SMTP Credit functionalities USB Wisconsin Senior driver Ball pink Finland Configurable program firewall payment virtual up Books Re-engineered Awesome open-source Polarised Assurance Specialist Intelligent Loan Central Reverse-engineered parse',
          headmasterId: [
            11,
            36
          ],
          schoolId: 11,
          libraryId: 11
        },
        {
          id: 12,
          name: 'Port Marcusfort',
          GPS_coordinates: [
            '-60.6518',
            '88.7714'
          ],
          village_contact_name: 'Eleanor Spencer',
          village_contact_phone: '752-233-4218',
          notes: 'Nebraska evolve contingency Practical Florida productize BEAC even-keeled Christmas Specialist primary deliver bypassing system Jersey 3rd generate International Accounts technologies Euro quantifying Square Investment navigating Steel Dynamic Account program Fully-configurable bluetooth Corporate overriding Pizza gold clicks-and-mortar synthesizing Guyana Computer circuit Nebraska SSL compress Account withdrawal Lock monitor incremental Delaware Computer',
          headmasterId: [
            12
          ],
          schoolId: 12,
          libraryId: 12
        },
        {
          id: 13,
          name: 'Clarkside',
          GPS_coordinates: [
            '-57.7722',
            '6.1841'
          ],
          village_contact_name: 'Byron Blanda',
          village_contact_phone: '719-890-7994',
          notes: 'Parkway program teal Jamaica rich uniform Congo Phased haptic B2B reboot Granite GB of Plastic Key Rustic index Texas neural monetize Incredible blue e-services Pre-emptive Steel HDD silver Loan target Electronics override Supervisor copying Buckinghamshire transmitting Cheese Interface navigate deposit Djibouti Ball Estates FTP Grove Steel Soft Regional Officer lavender',
          headmasterId: [
            13,
            59
          ],
          schoolId: 13,
          libraryId: 13
        },
        {
          id: 14,
          name: 'Jacobsland',
          GPS_coordinates: [
            '-37.3529',
            '-124.9288'
          ],
          village_contact_name: 'Vanessa Bode',
          village_contact_phone: '281-259-2517',
          notes: 'Helena Niue hack applications state overriding Moldovan Music pixel Squares users Tools Refined transmitter Configuration sensor Automotive Branding Steel Response COM invoice Avon HTTP Security Dakota application Ireland Movies circuit multi-tasking integrate Buckinghamshire Books Handmade generate program Pines bottom-line invoice Steel deposit cyan multi-byte orange SMTP Canadian Lead copy robust',
          headmasterId: [
            14
          ],
          schoolId: 14,
          libraryId: 14
        },
        {
          id: 15,
          name: 'Gagebury',
          GPS_coordinates: [
            '-77.5761',
            '-173.4071'
          ],
          village_contact_name: 'Charlie Ebert Jr.',
          village_contact_phone: '473-830-7581',
          notes: 'Industrial Israel calculating RSS port Handcrafted Tactics Metal supply-chains Bedfordshire ability services Soft redefine FTP blockchains Bahrain payment Dalasi Lempira Car orange transmit Account red online Planner morph Minnesota connecting Vision-oriented compressing Agent Leu maroon Licensed Bedfordshire Montana system Outdoors Generic payment Persevering Convertible Avon Auto Arkansas Checking online Wooden',
          headmasterId: [
            15,
            38
          ],
          schoolId: 15,
          libraryId: 15
        },
        {
          id: 16,
          name: 'Port Claudefort',
          GPS_coordinates: [
            '-13.3665',
            '137.2733'
          ],
          village_contact_name: 'Mrs. Nina Keebler',
          village_contact_phone: '949-945-0970',
          notes: 'Licensed Chief Cambridgeshire Program Ville Investment Direct payment Wooden e-business Grocery defect leading-edge Arizona Gorgeous partnerships protocol Beauty interfaces lime out-of-the-box Supervisor enable radical methodologies Tactics Metical Uruguay Gold Outdoors policy Generic Card CSS solution Product Incredible Credit Run Soft Estonia Valley forecast Wooden Intelligent Developer synthesize Producer Borders invoice',
          headmasterId: [
            16
          ],
          schoolId: 16,
          libraryId: 16
        },
        {
          id: 17,
          name: 'New Serenityport',
          GPS_coordinates: [
            '55.4089',
            '18.4050'
          ],
          village_contact_name: 'Sue Ondricka',
          village_contact_phone: '841-210-6972',
          notes: 'Tools Pizza Grass-roots Engineer hour COM invoice Garden compress Ball object-oriented bypass multi-byte Bedfordshire Cambridgeshire IB Buckinghamshire monitor De-engineered Right-sized Chief Arizona Account efficient Libyan neural-net synthesizing Refined US array CSS Director Dong teal Manager interactive Dollar Extended Mission Licensed bypassing Wooden Virginia Incredible Group Rustic enhance wireless JBOD Pound',
          headmasterId: [
            17,
            54
          ],
          schoolId: 17,
          libraryId: 17
        },
        {
          id: 18,
          name: 'West Chelsie',
          GPS_coordinates: [
            '8.2081',
            '119.0075'
          ],
          village_contact_name: 'Gail Cruickshank',
          village_contact_phone: '484-364-1365',
          notes: 'Island haptic seize set methodology Games Zloty technologies B2C engineer protocol Towels Officer violet Accountability Pennsylvania Granite supply-chains Borders Generic Accountability Intranet Pizza Cove experiences Car sensor Handcrafted Common Agent Shirt Soap payment Italy Steel Frozen Implementation Via Assistant Intelligent SQL program payment Interactions online Savings Steel South definition RAM',
          headmasterId: [
            18,
            37
          ],
          schoolId: 18,
          libraryId: 18
        },
        {
          id: 19,
          name: 'Daughertyside',
          GPS_coordinates: [
            '-38.1096',
            '143.1131'
          ],
          village_contact_name: 'Pablo Stanton I',
          village_contact_phone: '353-767-6877',
          notes: 'Turkish Loan back-end protocol workforce up Future Developer world-class azure Computers microchip turquoise alarm gold withdrawal Massachusetts Gibraltar digital Fort synergies Car incentivize Identity standardization invoice frictionless driver orange back-end Concrete Missouri program multimedia magenta composite Lead Generic website Lane wireless Buckinghamshire driver Canada Kansas Functionality deliverables Ergonomic B2B Soft',
          headmasterId: [
            19
          ],
          schoolId: 19,
          libraryId: 19
        },
        {
          id: 20,
          name: 'New Gaetanochester',
          GPS_coordinates: [
            '56.6713',
            '62.3285'
          ],
          village_contact_name: 'Philip Pagac',
          village_contact_phone: '615-869-9519',
          notes: 'ADP Metrics Tenge Ball client-driven Shirt Savings Wooden CFA Table hardware Multi-tiered bleeding-edge Global cyan Licensed Response e-business Integration seamless Clothing Islands navigate Beauty Refined transmit Garden sky Manager initiatives Granite Technician connect Rue red Tuna Shoes Indiana interface Course mobile Director City Administrator Ariary up calculating Cloned Drive Croatian',
          headmasterId: [
            20,
            47
          ],
          schoolId: 20,
          libraryId: 20
        },
        {
          id: 21,
          name: 'Wuckertview',
          GPS_coordinates: [
            '30.5609',
            '-42.3792'
          ],
          village_contact_name: 'Marianne Klein',
          village_contact_phone: '291-703-8337',
          notes: 'Manager Planner Avon 1080p generate Optimization Facilitator Ball hacking Directives USB Saudi FTP directional Account visualize engineer Pass project tan Ball zero PNG Integrated bluetooth gold leverage Bedfordshire leading-edge Mississippi Gabon proactive Chair Kenya invoice Adaptive reciprocal Granite world-class Keyboard Gorgeous Tunisia convergence transform framework Romania Bypass Metal channels Forward',
          headmasterId: [
            21,
            51
          ],
          schoolId: 21,
          libraryId: 21
        },
        {
          id: 22,
          name: 'North Lori',
          GPS_coordinates: [
            '-12.6264',
            '126.5311'
          ],
          village_contact_name: 'Jeff Jacobi Sr.',
          village_contact_phone: '873-956-1368',
          notes: 'Home Tuna California Future-proofed Concrete Re-engineered Incredible project Practical well-modulated microchip parsing Computer Fish neural Account Reverse-engineered copy compress forecast convergence upward-trending Unbranded index Practical Expanded Extensions USB Corporate transmitting Western Wooden Bike Borders Cotton mission-critical orchestration parse port frame upward-trending Sleek Bike invoice Account Towels driver Configuration Union Mouse',
          headmasterId: [
            22,
            53
          ],
          schoolId: 22,
          libraryId: 22
        },
        {
          id: 23,
          name: 'Ebertton',
          GPS_coordinates: [
            '38.5409',
            '-175.2886'
          ],
          village_contact_name: 'Marta Haag IV',
          village_contact_phone: '333-310-9243',
          notes: 'SDD Market enable Forward Bedfordshire Computers utilize Bacon Virtual Chicken platforms withdrawal Bacon expedite Virginia Taiwan project deposit maximized payment lime Personal multi-byte Awesome Mouse Realigned override SMTP Re-engineered COM Small Handmade interfaces calculate magnetic productize tan transmitting Shilling Grocery users Republic) Philippines Borders leverage Handcrafted bus Legacy card markets',
          headmasterId: [
            23,
            52
          ],
          schoolId: 23,
          libraryId: 23
        },
        {
          id: 24,
          name: 'Beierborough',
          GPS_coordinates: [
            '0.6707',
            '150.8753'
          ],
          village_contact_name: 'Ms. Desiree Brakus',
          village_contact_phone: '884-703-5227',
          notes: 'Angola Berkshire Berkshire multi-byte Account Berkshire redundant copying orange Cheese envisioneer mindshare support Refined robust Business-focused Planner Consultant lavender deposit Fresh web-readiness intuitive SDD bandwidth Buckinghamshire orchid Grenada payment moderator Dynamic application Franc Afghani feed calculating backing Hawaii Solutions Plastic Music systems deposit Wallis Grocery Liaison Ireland yellow Fantastic Steel',
          headmasterId: [
            24,
            42
          ],
          schoolId: 24,
          libraryId: 24
        },
        {
          id: 25,
          name: 'South Elwyn',
          GPS_coordinates: [
            '18.6627',
            '142.7301'
          ],
          village_contact_name: 'Robyn Deckow',
          village_contact_phone: '857-463-9247',
          notes: 'empower Generic Brunei Bedfordshire RSS syndicate Supervisor Kentucky Soft collaboration District Locks Bedfordshire Expanded ivory 1080p grey Colombia indigo Chicken Madagascar Jewelery extranet Ways Account bleeding-edge Drive boliviano Customer deposit olive Response Soft alarm interfaces Creative Wooden Account Configuration online HTTP orchid yellow schemas ADP Account overriding user-centric capacitor Avon',
          headmasterId: [
            25
          ],
          schoolId: 25,
          libraryId: 25
        },
        {
          id: 26,
          name: 'Bauchborough',
          GPS_coordinates: [
            '81.6196',
            '134.4278'
          ],
          village_contact_name: 'Allen Predovic',
          village_contact_phone: '893-337-5009',
          notes: 'innovate superstructure Designer Handcrafted Loan needs-based Investment Idaho Mall Vietnam Home Licensed payment IB District Customizable target cross-media Yemeni withdrawal Human up facilitate methodology navigating invoice multi-byte connect Landing input connect vertical Car Mobility (Slovak Integrated neural International Throughway Wooden national Frozen bus multimedia Health web-readiness Wells Pre-emptive array Solutions',
          headmasterId: [
            26
          ],
          schoolId: 26,
          libraryId: 26
        },
        {
          id: 27,
          name: 'East Graciela',
          GPS_coordinates: [
            '-15.5756',
            '99.6282'
          ],
          village_contact_name: 'Carmen Casper IV',
          village_contact_phone: '599-857-5934',
          notes: 'Norfolk Facilitator indexing engineer Wooden Timor-Leste envisioneer Unbranded Bacon synthesize Squares reboot Buckinghamshire Plastic Manager Visionary toolset Loan HDD Garden leverage Dollar COM withdrawal Norfolk Salad generating optimizing USB pixel Micronesia Intelligent Cambridgeshire blue unleash Granite Unbranded AI Dynamic hack Cotton Towels HDD Health Toys Berkshire Fish Automated Pass Customer-focused',
          headmasterId: [
            27,
            43,
            49
          ],
          schoolId: 27,
          libraryId: 27
        },
        {
          id: 28,
          name: 'Port Clotilde',
          GPS_coordinates: [
            '67.5267',
            '-33.8120'
          ],
          village_contact_name: 'Chelsea Baumbach',
          village_contact_phone: '647-213-4647',
          notes: 'system-worthy Oval hybrid middleware Green Hat Engineer users success calculating bricks-and-clicks technologies Granite Tobago throughput interface Buckinghamshire Oklahoma Engineer pixel Mississippi transmit District array violet Investor withdrawal parse Nevada 1080p virtual Bedfordshire transmit Ethiopia Switchable wireless Games Handcrafted target Personal Rustic Albania Health Arizona Home salmon Steel Dollar compress Program',
          headmasterId: [
            28,
            48
          ],
          schoolId: 28,
          libraryId: 28
        },
        {
          id: 29,
          name: 'New Gussie',
          GPS_coordinates: [
            '34.0268',
            '-162.4827'
          ],
          village_contact_name: 'Enrique Gibson',
          village_contact_phone: '572-946-0262',
          notes: 'Ergonomic Bedfordshire Hat Card blue integrated Global Computers matrix Tunnel application Bacon Rican South impactful radical Cotton bypassing payment Highway Texas Metal JSON harness Shirt Greens transmitting intuitive Fresh Investor green Unbranded Bosnia Administrator Lead Account Buckinghamshire Keyboard Total redundant Technician Health Investment Zimbabwe Cambridgeshire International Salad tangible group disintermediate',
          headmasterId: [
            29,
            40
          ],
          schoolId: 29,
          libraryId: 29
        }
      ]);
    });
};
