
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mentors').del()
    .then(function () {
      // Inserts seed entries
      return knex('mentors').insert(
        [
          {
            id: 9,
            first_name: 'Rosamond',
            last_name: 'Cremin',
            gender: 'Other',
            email: 'Sunny2@hotmail.com',
            primary_language: 'Gaelic, Scottish Gaelic',
            dob: '1992-03-09T17:33:40.109Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 3,
            math_lvl: 7,
            reading_lvl: 8,
            school_lvl: 12,
            academic_description: 'Hat Kazakhstan Accounts program JSON Terrace Rapids Loan Tunisian web-readiness Locks help-desk Concrete Human Factors generate virtual compressing support bypassing',
            support_needed: 'calculating foreground Berkshire interface Implementation Shoes holistic IB Lead International US Bypass yellow Account invoice Rubber streamline technologies Account blockchains Rubber reboot Functionality product Jersey Licensed Fresh Analyst Computer Account standardization orange Sausages hack navigating',
            availability: {
              time_zone: 'Europe/Paris',
              as_early_as: '15:00',
              as_late_as: '0:00',
              methods: [
                'phone',
                'wechat',
                'facebook'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'Ill input the virtual JBOD array, that should circuit the CSS card!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Use the multi-byte USB program, then you can synthesize the solid state hard drive!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'Use the optical HTTP interface, then you can copy the open-source firewall!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'hacking the array wont do anything, we need to copy the solid state IB card!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'Try to override the HDD card, maybe it will quantify the online hard drive!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'You cant back up the microchip without copying the auxiliary SSL program!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'You cant transmit the microchip without hacking the redundant GB bus!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'synthesizing the interface wont do anything, we need to generate the wireless CSS firewall!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'Try to transmit the SMS alarm, maybe it will override the mobile feed!'
              }
            ])
          },
          {
            id: 10,
            first_name: 'Marjory',
            last_name: 'Kutch',
            gender: 'Female',
            email: 'Jazmyne_King73@hotmail.com',
            primary_language: 'Azerbaijani',
            dob: '1996-09-28T10:05:32.600Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 2,
            math_lvl: 4,
            reading_lvl: 2,
            school_lvl: 8,
            academic_description: 'protocol scale Mountains Open-source payment Metal Litas Associate Ball Place Beauty Islands Mauritius bifurcated Court Gloves orchid uniform Chad payment',
            support_needed: 'Ergonomic fresh-thinking override Paradigm software target real-time Granite Pizza interface Fantastic transmitter Interactions magenta Loan Generic withdrawal transmitter Account reintermediate navigating Enhanced Loaf Principal Identity multi-byte RSS Account synthesize Kids Soap synthesize management Paradigm compressing',
            availability: {
              time_zone: 'Europe/Madrid',
              as_early_as: '1:00',
              as_late_as: '1:00',
              methods: [
                'wechat',
                'duo',
                'twitter'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'The AI program is down, override the primary array so we can quantify the XSS capacitor!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Try to compress the AGP system, maybe it will quantify the optical interface!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'indexing the feed wont do anything, we need to hack the digital RAM transmitter!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'If we override the firewall, we can get to the TCP program through the bluetooth SDD bandwidth!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'copying the firewall wont do anything, we need to parse the back-end JBOD program!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'The CSS hard drive is down, navigate the redundant array so we can synthesize the HTTP monitor!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'The SSL protocol is down, parse the redundant bus so we can index the FTP matrix!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'Try to transmit the HDD bandwidth, maybe it will navigate the bluetooth matrix!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'We need to transmit the cross-platform SMS application!'
              }
            ])
          },
          {
            id: 11,
            first_name: 'Sierra',
            last_name: 'Herman',
            gender: 'Male',
            email: 'Kailee_Rempel@gmail.com',
            primary_language: 'Interlingue',
            dob: '1988-05-08T00:55:25.823Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 7,
            math_lvl: 2,
            reading_lvl: 11,
            school_lvl: 12,
            academic_description: 'installation generate Supervisor deliverables optical compressing Rustic violet Corporate Ecuador (Bouvetoya) Regional Analyst Consultant Borders Cotton De-engineered viral capacitor benchmark',
            support_needed: 'Grocery Fundamental concept primary paradigm Well solution New synergy Table Granite International Outdoors state Refined olive open-source Republic Strategist internet Avon Response Industrial programming Mandatory Illinois Rubber Executive Shirt Coordinator Soap Steel blue Investor Intelligent',
            availability: {
              time_zone: 'Europe/Berlin',
              as_early_as: '7:00',
              as_late_as: '10:00',
              methods: [
                'mail',
                'duo',
                'facebook'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'We need to transmit the open-source PCI alarm!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Ill navigate the multi-byte HTTP card, that should alarm the IB feed!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'transmitting the circuit wont do anything, we need to input the redundant HTTP system!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'The SQL sensor is down, parse the optical pixel so we can copy the JSON interface!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'We need to parse the bluetooth SMTP alarm!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'Try to copy the SAS application, maybe it will connect the redundant card!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'You cant copy the circuit without synthesizing the wireless COM firewall!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'generating the panel wont do anything, we need to reboot the haptic IB array!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'The JBOD interface is down, bypass the redundant array so we can navigate the USB capacitor!'
              }
            ])
          },
          {
            id: 12,
            first_name: 'Ashly',
            last_name: 'Bogisich',
            gender: 'Male',
            email: 'Desiree39@yahoo.com',
            primary_language: 'Guarani',
            dob: '1997-02-02T02:59:39.864Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 1,
            math_lvl: 8,
            reading_lvl: 11,
            school_lvl: 0,
            academic_description: 'modular neural Baby Account Concrete markets Home Web SDD pink base Multi-lateral Dinar scale yellow Account program Cambridgeshire Liaison applications',
            support_needed: 'Small Refined hacking Table cross-platform Practical Rubber Borders Buckinghamshire Connecticut Shoes front-end redundant Account Fantastic salmon explicit transmit synthesize disintermediate olive Kansas card interface GB cyan Steel Dynamic invoice payment eyeballs Cedi circuit Rustic Future',
            availability: {
              time_zone: 'Pacific/Tongatapu',
              as_early_as: '10:00',
              as_late_as: '5:00',
              methods: [
                'duo',
                'facebook',
                'twitter'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'Ill hack the optical RSS monitor, that should alarm the TCP panel!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Try to input the USB firewall, maybe it will compress the bluetooth sensor!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'Ill bypass the multi-byte AI matrix, that should hard drive the SMS bandwidth!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'Ill generate the bluetooth TCP sensor, that should protocol the SDD card!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'The SDD matrix is down, reboot the cross-platform application so we can override the ADP circuit!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'Try to back up the SMTP capacitor, maybe it will calculate the bluetooth application!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'Try to transmit the ADP program, maybe it will copy the virtual capacitor!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'navigating the microchip wont do anything, we need to calculate the online AGP protocol!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'Use the haptic SSL card, then you can input the cross-platform hard drive!'
              }
            ])
          },
          {
            id: 13,
            first_name: 'Jaylon',
            last_name: 'Kertzmann',
            gender: 'Other',
            email: 'Kirsten86@yahoo.com',
            primary_language: 'Hebrew',
            dob: '1984-12-16T02:02:28.363Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 6,
            math_lvl: 6,
            reading_lvl: 1,
            school_lvl: 6,
            academic_description: 'digital Small system Afghanistan Electronics Ergonomic scalable architectures Health Kids copying Games blue Infrastructure users Grocery Cambridgeshire connect Executive Distributed',
            support_needed: 'Wooden Cotton collaborative Senior intuitive global world-class enterprise JSON users technologies rich User-friendly synthesize matrix withdrawal Games Keyboard copy Senior copy Bedfordshire deposit Soft Plastic solid virtual Plastic Junctions structure web-enabled deposit empower platforms Islands,',
            availability: {
              time_zone: 'Asia/Shanghai',
              as_early_as: '16:00',
              as_late_as: '9:00',
              methods: [
                'phone',
                'mail',
                'facebook'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'If we transmit the interface, we can get to the SAS microchip through the multi-byte ADP protocol!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'The SQL protocol is down, generate the solid state firewall so we can synthesize the JSON capacitor!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'Ill bypass the wireless AI feed, that should circuit the THX matrix!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'We need to override the digital COM driver!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'Ill back up the cross-platform ADP alarm, that should program the AGP card!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'If we navigate the hard drive, we can get to the GB monitor through the mobile CSS hard drive!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'The SDD pixel is down, generate the auxiliary circuit so we can compress the TCP panel!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'If we copy the port, we can get to the XML application through the virtual USB firewall!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'Ill transmit the optical JSON feed, that should matrix the IB circuit!'
              }
            ])
          },
          {
            id: 14,
            first_name: 'Laurel',
            last_name: 'Wolff',
            gender: 'Female',
            email: 'Adolphus30@hotmail.com',
            primary_language: 'Kurdish',
            dob: '1991-10-26T03:16:41.252Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 8,
            math_lvl: 5,
            reading_lvl: 0,
            school_lvl: 10,
            academic_description: 'Bedfordshire withdrawal Soap Tuna Wooden navigating Tactics deposit Massachusetts Fresh Russian quantify portals payment Locks explicit Vista Cambridgeshire transmitting e-enable',
            support_needed: 'Usability encoding Wooden Assurance yellow Nebraska Avon multi-byte withdrawal COM alarm Oklahoma Data Brand quantifying experiences parse Synergized Health District USB Switchable connect Gorgeous Russian Shirt Malaysian Qatar Nebraska indexing salmon Palladium vortals programming Sleek',
            availability: {
              time_zone: 'Asia/Vladivostok',
              as_early_as: '10:00',
              as_late_as: '9:00',
              methods: [
                'email',
                'wechat',
                'facebook'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'transmitting the hard drive wont do anything, we need to compress the optical SCSI interface!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'synthesizing the bus wont do anything, we need to compress the neural AGP bus!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'Try to index the USB bandwidth, maybe it will index the neural interface!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'Use the haptic TCP matrix, then you can connect the 1080p bus!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'We need to navigate the back-end SQL feed!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'Ill program the neural SAS array, that should program the CSS card!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'Ill program the solid state JBOD port, that should panel the SQL card!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'We need to quantify the neural RSS panel!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'Ill override the back-end SSL pixel, that should interface the SCSI bus!'
              }
            ])
          },
          {
            id: 15,
            first_name: 'Thad',
            last_name: 'Runolfsson',
            gender: 'Female',
            email: 'Oceane_Smith36@hotmail.com',
            primary_language: 'Bambara',
            dob: '1993-07-03T01:33:32.241Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 4,
            math_lvl: 7,
            reading_lvl: 11,
            school_lvl: 8,
            academic_description: 'Awesome United methodologies even-keeled redundant Buckinghamshire teal Avon invoice Market Licensed Palau Computers B2C copy New azure blue driver Ergonomic',
            support_needed: 'SQL initiatives Mouse Factors SSL calculating best-of-breed Track Synchronised Tasty neural payment Mouse Granite synthesizing Frozen mobile Toys communities Quality pink 1080p Director Stand-alone quantify Shirt synthesize Cambridgeshire info-mediaries Object-based overriding Zambia Awesome withdrawal Dollar',
            availability: {
              time_zone: 'Europe/Istanbul',
              as_early_as: '14:00',
              as_late_as: '24:00',
              methods: [
                'wechat',
                'facebook',
                'twitter'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'calculating the matrix wont do anything, we need to input the auxiliary AGP monitor!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Use the primary JSON interface, then you can hack the virtual protocol!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'We need to bypass the optical HDD microchip!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'We need to parse the mobile SMS monitor!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'connecting the program wont do anything, we need to parse the redundant SCSI card!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'quantifying the interface wont do anything, we need to synthesize the neural TCP capacitor!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'Use the optical SQL alarm, then you can back up the neural feed!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'You cant quantify the port without copying the back-end USB matrix!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'bypassing the microchip wont do anything, we need to connect the digital XML panel!'
              }
            ])
          },
          {
            id: 16,
            first_name: 'Francisco',
            last_name: 'Beatty',
            gender: 'Male',
            email: 'Cordie_Reynolds@yahoo.com',
            primary_language: 'Wolof',
            dob: '1985-03-24T09:34:31.484Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 5,
            math_lvl: 7,
            reading_lvl: 9,
            school_lvl: 1,
            academic_description: 'SQL feed Eritrea Berkshire bypass Tennessee invoice Metal invoice index American Vanuatu groupware collaborative SCSI Account convergence Personal Clothing 1080p',
            support_needed: 'Developer convergence Assistant Producer Tennessee streamline Cheese functionalities indexing Car Gorgeous killer Quality Designer Borders Generic Health Practical Cambridgeshire Central Markets navigate the Hat niches cross-platform compressing Unbranded Optional Baby Gorgeous Lithuania Generic primary Open-source',
            availability: {
              time_zone: 'Asia/Magadan',
              as_early_as: '0:00',
              as_late_as: '4:00',
              methods: [
                'phone',
                'duo',
                'twitter'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'Try to index the SQL matrix, maybe it will generate the wireless microchip!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'The EXE transmitter is down, quantify the mobile panel so we can transmit the AGP card!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'You cant navigate the panel without backing up the open-source SDD monitor!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'Use the cross-platform GB array, then you can parse the 1080p matrix!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'If we program the protocol, we can get to the HTTP sensor through the multi-byte RSS matrix!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'Try to quantify the HDD pixel, maybe it will bypass the online bus!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'If we generate the monitor, we can get to the FTP panel through the cross-platform USB hard drive!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'You cant override the interface without quantifying the online XSS interface!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'transmitting the bandwidth wont do anything, we need to generate the mobile SSL microchip!'
              }
            ])
          },
          {
            id: 17,
            first_name: 'Mitchell',
            last_name: 'Spencer',
            gender: 'Other',
            email: 'Samir17@yahoo.com',
            primary_language: 'Slovenian',
            dob: '1995-01-16T05:25:44.971Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 4,
            math_lvl: 10,
            reading_lvl: 7,
            school_lvl: 9,
            academic_description: 'strategize Aruban invoice De-engineered parse generation B2C payment Florida Communications intelligence Analyst Persistent cross-platform pink application Crest Colorado innovative panel',
            support_needed: 'vortals Hryvnia RSS Texas Loan Beauty e-business Azerbaijan Metal Frozen teal parse cross-platform Arab policy withdrawal Human responsive Sleek Steel Bedfordshire Central Guinea-Bissau Human Kids Practical Books Account Mission Trail Handcrafted technologies Handmade Research Investment',
            availability: {
              time_zone: 'Pacific/Apia',
              as_early_as: '16:00',
              as_late_as: '2:00',
              methods: [
                'phone',
                'mail',
                'facebook'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'synthesizing the protocol wont do anything, we need to quantify the mobile RAM driver!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Ill navigate the solid state SSL microchip, that should monitor the PCI application!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'We need to input the open-source HTTP circuit!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'The COM bandwidth is down, calculate the online alarm so we can quantify the COM bus!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'If we override the panel, we can get to the SQL array through the back-end SQL panel!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'The IB system is down, copy the haptic panel so we can back up the SMS microchip!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'You cant compress the driver without parsing the bluetooth SMTP pixel!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'Ill hack the primary GB bus, that should alarm the SAS capacitor!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'backing up the firewall wont do anything, we need to program the 1080p HTTP firewall!'
              }
            ])
          },
          {
            id: 18,
            first_name: 'Maxine',
            last_name: 'Bins',
            gender: 'Other',
            email: 'Elliot.Larkin@hotmail.com',
            primary_language: 'Indonesian',
            dob: '1987-10-06T02:42:54.255Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 7,
            math_lvl: 0,
            reading_lvl: 1,
            school_lvl: 7,
            academic_description: 'Car Research workforce teal New bluetooth Fish Handcrafted bypass Executive SAS Pennsylvania bandwidth Manager digital Enhanced Overpass Gloves Inverse Regional',
            support_needed: 'transmitter Manager Vietnam payment purple Shirt Architect TCP Fresh synthesizing Ameliorated Lead firewall Salad Chief Avon Swaziland solid Berkshire front-end parsing Programmable aggregate Versatile silver Tennessee Buckinghamshire Gibraltar deliver transparent Configuration success Won scalable Trafficway',
            availability: {
              time_zone: 'Asia/Dhaka',
              as_early_as: '0:00',
              as_late_as: '7:00',
              methods: [
                'mail',
                'duo',
                'facebook'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'We need to index the 1080p AI program!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Ill override the auxiliary SMS port, that should firewall the RSS sensor!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'Use the 1080p PNG driver, then you can override the back-end pixel!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'We need to program the 1080p XSS application!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'We need to index the mobile USB circuit!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'If we bypass the application, we can get to the SAS capacitor through the multi-byte SCSI driver!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'Use the back-end GB system, then you can navigate the 1080p bus!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'navigating the port wont do anything, we need to parse the wireless SMTP hard drive!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'calculating the hard drive wont do anything, we need to bypass the digital USB alarm!'
              }
            ])
          },
          {
            id: 19,
            first_name: 'Charley',
            last_name: 'Barrows',
            gender: 'Male',
            email: 'Dortha98@yahoo.com',
            primary_language: 'Albanian',
            dob: '1997-06-16T23:43:27.476Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 3,
            math_lvl: 0,
            reading_lvl: 8,
            school_lvl: 6,
            academic_description: 'programming Road Bike invoice Dollar program Chief time-frame Handcrafted Gorgeous SSL Business-focused Executive Rubber Shoes neural firewall Optional evolve Multi-layered',
            support_needed: 'synergize scale parsing recontextualize Tonga Principal USB Creative action-items Common incubate Frozen Central Somali generating bluetooth Liaison protocol eyeballs architectures Prairie product Shore Orchard digital Awesome back Licensed Eritrea Gibraltar Account transmitting USB Implementation unleash',
            availability: {
              time_zone: 'Europe/Lisbon',
              as_early_as: '17:00',
              as_late_as: '21:00',
              methods: [
                'phone',
                'email',
                'facebook'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'Ill program the online GB pixel, that should firewall the THX feed!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'If we override the array, we can get to the USB capacitor through the neural SQL interface!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'You cant quantify the panel without overriding the online PCI interface!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'If we hack the driver, we can get to the SQL monitor through the mobile XSS capacitor!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'Use the 1080p SMTP circuit, then you can connect the open-source monitor!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'The SCSI hard drive is down, copy the solid state card so we can generate the ADP circuit!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'Ill index the online SAS transmitter, that should protocol the HDD bandwidth!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'Try to quantify the SSL interface, maybe it will input the back-end bus!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'You cant program the driver without transmitting the optical COM circuit!'
              }
            ])
          },
          {
            id: 20,
            first_name: 'Max',
            last_name: 'OConner',
            gender: 'Female',
            email: 'Aleen_Wunsch@hotmail.com',
            primary_language: 'Indonesian',
            dob: '1998-01-28T23:16:15.052Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 0,
            math_lvl: 12,
            reading_lvl: 12,
            school_lvl: 3,
            academic_description: 'Club Incredible Checking pixel workforce Mouse Car Junctions Chicken Land Refined Licensed Facilitator Avon state Salad bluetooth International pixel Kids',
            support_needed: 'FTP productize real-time directional Customer withdrawal Engineer Cuba ADP Agent New Identity Plains Loan Investor Buckinghamshire Koruna Marketing 24/7 Cambridgeshire relationships deposit green contingency Customer pixel mesh Soap responsive Cheese solid solid Cotton Team-oriented bypassing',
            availability: {
              time_zone: 'Europe/Vienna',
              as_early_as: '13:00',
              as_late_as: '2:00',
              methods: [
                'phone',
                'email',
                'mail'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'If we generate the matrix, we can get to the JBOD matrix through the digital EXE hard drive!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'If we generate the program, we can get to the PCI array through the multi-byte TCP hard drive!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'We need to hack the haptic JBOD transmitter!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'You cant transmit the protocol without copying the auxiliary XSS program!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'Ill synthesize the auxiliary SSL firewall, that should circuit the SQL circuit!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'Ill transmit the optical SAS firewall, that should bus the USB feed!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'parsing the feed wont do anything, we need to reboot the primary IB driver!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'You cant calculate the transmitter without hacking the online IB pixel!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'The JBOD interface is down, quantify the multi-byte system so we can bypass the AI hard drive!'
              }
            ])
          },
          {
            id: 21,
            first_name: 'Macy',
            last_name: 'Orn',
            gender: 'Female',
            email: 'Ramon_Sanford87@hotmail.com',
            primary_language: 'Russian',
            dob: '1989-03-28T06:33:00.769Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 7,
            math_lvl: 8,
            reading_lvl: 11,
            school_lvl: 3,
            academic_description: 'Metal Toys utilize Rue Reduced Buckinghamshire leverage Games Grocery compress Keyboard multimedia e-commerce transmitting silver Rand parallelism transmitter up transform',
            support_needed: 'magnetic Zloty 1080p cross-platform compressing navigating e-business technologies encryption Common Intelligent hard Compatible payment sensor multi-byte PNG Developer navigate pixel Liaison Sleek compress Home Small Dollar overriding Louisiana Gorgeous Legacy Plastic backing synergistic Kentucky indigo',
            availability: {
              time_zone: 'Europe/Lisbon',
              as_early_as: '19:00',
              as_late_as: '20:00',
              methods: [
                'phone',
                'email',
                'twitter'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'You cant synthesize the transmitter without copying the auxiliary FTP application!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Try to quantify the HDD sensor, maybe it will input the bluetooth interface!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'Try to parse the JSON pixel, maybe it will parse the solid state port!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'We need to navigate the neural XML interface!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'If we connect the alarm, we can get to the RSS monitor through the mobile SQL port!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'We need to hack the optical JSON card!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'Try to program the PCI system, maybe it will connect the open-source feed!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'Ill synthesize the wireless THX bandwidth, that should protocol the IB capacitor!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'We need to calculate the primary IB program!'
              }
            ])
          },
          {
            id: 22,
            first_name: 'Savanna',
            last_name: 'Powlowski',
            gender: 'Female',
            email: 'Liliana93@hotmail.com',
            primary_language: 'Luba-Katanga',
            dob: '1996-04-28T10:40:52.966Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 8,
            math_lvl: 10,
            reading_lvl: 1,
            school_lvl: 3,
            academic_description: 'holistic granular Polarised system Lead blockchains discrete Plastic Fish Pizza Practical Car array synthesizing Pizza Silver Chips Bacon navigating Branding',
            support_needed: 'cross-platform Up-sized solution Car matrix Buckinghamshire bandwidth task-force digital Kids Human Engineer Concrete Underpass next-generation circuit Configuration Orchestrator Estonia Iowa Fresh Factors Principal Electronics Dynamic Fish Handmade Tactics Account Principal Armenian Islands optimize Utah override',
            availability: {
              time_zone: 'Europe/Minsk',
              as_early_as: '14:00',
              as_late_as: '18:00',
              methods: [
                'duo',
                'facebook',
                'twitter'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'The RAM program is down, compress the bluetooth protocol so we can reboot the SAS hard drive!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'Ill generate the solid state SQL driver, that should bandwidth the PNG capacitor!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'Try to hack the SMS driver, maybe it will calculate the 1080p sensor!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'synthesizing the transmitter wont do anything, we need to navigate the multi-byte JBOD transmitter!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'We need to reboot the neural JSON pixel!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'We need to compress the mobile PNG monitor!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'synthesizing the driver wont do anything, we need to program the neural SQL hard drive!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'If we program the array, we can get to the PNG bus through the redundant EXE interface!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'transmitting the microchip wont do anything, we need to transmit the redundant TCP sensor!'
              }
            ])
          },
          {
            id: 23,
            first_name: 'Juanita',
            last_name: 'Pacocha',
            gender: 'Other',
            email: 'Teagan.Abernathy77@hotmail.com',
            primary_language: 'Venda',
            dob: '1986-01-29T01:09:51.043Z',
            mentor_picture: 'http://placeimg.com/640/480',
            english_lvl: 2,
            math_lvl: 5,
            reading_lvl: 7,
            school_lvl: 10,
            academic_description: 'New Granite haptic Lempira Sleek Gold Burgs reciprocal Extension Facilitator synthesizing Soap Concrete grid-enabled Identity digital Data payment standardization Berkshire',
            support_needed: 'interface neural Tasty withdrawal Extended card Auto Books deposit facilitate Enterprise-wide South Shoes Human Way up Awesome Executive Assistant supply-chains Fresh invoice Consultant models Account Technician Pants Ukraine override Computers envisioneer Investment Kids next-generation Canadian',
            availability: {
              time_zone: 'Atlantic/Azores',
              as_early_as: '5:00',
              as_late_as: '22:00',
              methods: [
                'mail',
                'wechat',
                'facebook'
              ]
            },
            dynamic_questions: JSON.stringify([
              {
                'qId': 0,
                'question': 'My favorite thing to do in my free time is',
                'answer': 'Try to bypass the RAM bandwidth, maybe it will bypass the digital interface!'
              },
              {
                'qId': 1,
                'question': 'When I grow up, I want to be',
                'answer': 'The SCSI program is down, transmit the cross-platform program so we can hack the TCP matrix!'
              },
              {
                'qId': 2,
                'question': 'Goals & Dreams Notes',
                'answer': 'Try to navigate the CSS feed, maybe it will back up the optical sensor!'
              },
              {
                'qId': 3,
                'question': 'Personal Struggles Notes',
                'answer': 'We need to override the neural COM transmitter!'
              },
              {
                'qId': 4,
                'question': 'Other interests/hobbies',
                'answer': 'You cant copy the application without calculating the redundant SMTP card!'
              },
              {
                'qId': 5,
                'question': 'Skills Notes',
                'answer': 'Use the 1080p PCI pixel, then you can bypass the multi-byte hard drive!'
              },
              {
                'qId': 6,
                'question': 'Family Notes',
                'answer': 'We need to parse the neural SMTP microchip!'
              },
              {
                'qId': 7,
                'question': 'Other Notes',
                'answer': 'Use the mobile RSS pixel, then you can override the redundant array!'
              },
              {
                'qId': 8,
                'question': 'Admin Notes',
                'answer': 'Try to hack the PNG circuit, maybe it will hack the 1080p monitor!'
              }
            ])
          },
        ]
);
    });
};
