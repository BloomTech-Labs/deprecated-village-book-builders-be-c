
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('headmasters').del()
    .then(function () {
      // Inserts seed entries
      return knex('headmasters').insert([
        {
          id: 0,
          first_name: 'Muhammad',
          last_name: 'Ritchie',
          gender: 'Male',
          address: '2258 O\'Connell Spur',
          gps_coordinates: [
            '-77.5427',
            '-74.4728'
          ],
          images_drive_folder_link: 'http://william.biz',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Leland Gaylord',
            phone: '1-995-552-8157',
            email: 'Rosalind29@gmail.com',
            jobTitle: 'Dynamic Directives Manager'
          }),
          notes: 'Investor Ergonomic copying Bacon Rustic Intelligent systematic Cambridgeshire Borders transmitter moratorium generation Refined ADP cohesive Buckinghamshire Brunei Nevada circuit Locks synthesizing Senegal Plastic ivory Rufiyaa Handmade matrices niches FTP Alaska Interactions Towels Bike Liaison RSS Practical Senior withdrawal sticky Cambridgeshire secondary invoice Rustic Alabama applications Direct Account Loan Islands Garden',
          villageId: 0,
          schoolId: 0,
          libraryId: 0
        },
        {
          id: 1,
          first_name: 'Evert',
          last_name: 'Ullrich',
          gender: 'Other',
          address: '6807 Zack Trace',
          gps_coordinates: [
            '65.3628',
            '31.8162'
          ],
          images_drive_folder_link: 'https://braulio.biz',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Gail Murazik',
            phone: '1-486-383-6821',
            email: 'Lea15@hotmail.com',
            jobTitle: 'Global Operations Consultant'
          }),
          notes: 'Tunisian Kids Route matrix backing Orchestrator Diverse Down-sized azure Distributed Global Bike Reverse-engineered visionary Ergonomic Accounts Junctions driver Investment parsing even-keeled Chips Accountability back-end Metal Australia Investor system action-items Quality navigate metrics Chair black Global Planner New extend neural-net Handcrafted payment cross-platform Chicken Wallis payment Centralized hacking Mayotte Market withdrawal',
          villageId: 1,
          schoolId: 1,
          libraryId: 1
        },
        {
          id: 2,
          first_name: 'Beryl',
          last_name: 'Senger',
          gender: 'Other',
          address: '945 Ocie Burg',
          gps_coordinates: [
            '-53.6253',
            '108.6127'
          ],
          images_drive_folder_link: 'http://patsy.name',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Leland Rice',
            phone: '1-582-553-0903',
            email: 'Letitia60@hotmail.com',
            jobTitle: 'Customer Communications Orchestrator'
          }),
          notes: 'Generic directional Street port RSS index hacking grey index Brand open-source Plastic Car Tuna Accounts Steel Managed Home TCP Orchestrator navigating Shoes Missouri synthesizing redefine Account digital Pennsylvania Handcrafted Michigan Myanmar Investor intranet synergize Central Money Tactics functionalities override e-markets Coves reciprocal bandwidth Ohio Fantastic Group Oval artificial seamless Engineer',
          villageId: 2,
          schoolId: 2,
          libraryId: 2
        },
        {
          id: 3,
          first_name: 'Berenice',
          last_name: 'Breitenberg',
          gender: 'Other',
          address: '36898 Irma Vista',
          gps_coordinates: [
            '46.4500',
            '165.7484'
          ],
          images_drive_folder_link: 'https://griffin.name',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Orlando Russel',
            phone: '1-897-957-9837',
            email: 'Kaleb0@hotmail.com',
            jobTitle: 'Global Functionality Architect'
          }),
          notes: 'markets strategic optimize Electronics withdrawal Vermont quantifying azure National neural Knoll Kids robust deposit portal transitional Shoal User-centric cutting-edge RAM Avon circuit Pants customer Rustic withdrawal Small calculate moratorium firewall Small generating Towels Generic 24/365 Wooden Reduced Loan Cambridgeshire Refined interactive Tasty overriding Metal Harbor Ireland Licensed Chicken parse XML',
          villageId: 3,
          schoolId: 3,
          libraryId: 3
        },
        {
          id: 4,
          first_name: 'Alexie',
          last_name: 'Ondricka',
          gender: 'Male',
          address: '21336 Maggie Springs',
          gps_coordinates: [
            '-69.4059',
            '41.6738'
          ],
          images_drive_folder_link: 'https://eduardo.net',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Philip Schoen',
            phone: '1-971-381-8563',
            email: 'Justina22@gmail.com',
            jobTitle: 'Human Group Consultant'
          }),
          notes: 'e-enable turquoise index Coordinator River ivory Tala Fantastic Electronics Mauritania Developer Credit Buckinghamshire payment supply-chains Orchestrator Cloned primary COM contingency Principal Lake invoice state SQL (Keeling) Chips Music Beauty Borders Sharable Gloves Cotton Iowa Usability withdrawal HDD Practical Account forecast RAM Fresh asynchronous Intelligent SAS Michigan driver grey Garden Towels',
          villageId: 4,
          schoolId: 4,
          libraryId: 4
        },
        {
          id: 5,
          first_name: 'Neal',
          last_name: 'Robel',
          gender: 'Female',
          address: '975 Doug Dam',
          gps_coordinates: [
            '-63.8945',
            '25.4953'
          ],
          images_drive_folder_link: 'http://wendell.com',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Claire D\'Amore',
            phone: '1-651-767-6823',
            email: 'Garth_Kunze@yahoo.com',
            jobTitle: 'Global Tactics Coordinator'
          }),
          notes: 'synthesizing payment bypassing Generic Islands, Practical compelling Rustic Grocery Bedfordshire solutions North navigate Planner Chad BEAC Home Automotive withdrawal Granite Granite strategize invoice Paradigm Program array Connecticut Wall Forward invoice Table Table cultivate Home synthesizing sensor Plain cross-platform Hat Fish Sports Dollar Republic Pizza Tasty users Sausages Integration Gloves global',
          villageId: 5,
          schoolId: 5,
          libraryId: 5
        },
        {
          id: 6,
          first_name: 'Riley',
          last_name: 'Howe',
          gender: 'Male',
          address: '91914 Mueller View',
          gps_coordinates: [
            '54.2995',
            '165.9335'
          ],
          images_drive_folder_link: 'http://patricia.com',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Lucy Hauck',
            phone: '1-345-282-2755',
            email: 'Stephon.Dach@yahoo.com',
            jobTitle: 'Senior Communications Officer'
          }),
          notes: 'orange navigating client-driven hacking Shirt solution world-class array Overpass RSS SDD Cyprus Switchable portals Vision-oriented Chile capability Tasty Technician Borders redundant violet Savings Hills Avon Liaison firewall Customizable transmitting Fish Borders Account Account Bedfordshire definition withdrawal Minnesota emulation Kids orange applications Functionality moderator deposit generating Via CSS Games Dominican Dynamic',
          villageId: 6,
          schoolId: 6,
          libraryId: 6
        },
        {
          id: 7,
          first_name: 'Jamaal',
          last_name: 'Will',
          gender: 'Other',
          address: '9792 Gleason Avenue',
          gps_coordinates: [
            '-76.7300',
            '-150.0527'
          ],
          images_drive_folder_link: 'https://myrl.org',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Joel Miller',
            phone: '1-407-319-0445',
            email: 'Elda.Cassin@gmail.com',
            jobTitle: 'Central Communications Director'
          }),
          notes: 'Market Chicken Bhutan Fresh transmitter Bacon deposit Pants relationships Walks attitude-oriented cross-platform panel array New Street Specialist payment value-added engage Frozen bluetooth GB Internal Account eyeballs transmitting Grass-roots bandwidth Loan Exclusive Rustic Maldives salmon Ergonomic facilitate invoice Rubber infrastructures online grow Vista Buckinghamshire Track Chicken Soft District SSL Account e-business',
          villageId: 7,
          schoolId: 7,
          libraryId: 7
        },
        {
          id: 8,
          first_name: 'Breana',
          last_name: 'Borer',
          gender: 'Male',
          address: '72857 Ruecker Points',
          gps_coordinates: [
            '86.2316',
            '143.3929'
          ],
          images_drive_folder_link: 'https://virginie.org',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Miss Jonathon Tromp',
            phone: '1-637-482-6148',
            email: 'Gerson_Schaden83@gmail.com',
            jobTitle: 'Legacy Group Strategist'
          }),
          notes: 'overriding Tasty XSS real-time Associate capacity card Korea Creative back-end facilitate Concrete Vatu solutions mobile Cambridgeshire payment Generic utilisation Identity French Intelligent Loop synthesizing Nevada Chicken Borders solutions fresh-thinking Flats red Small SMTP indigo protocol Designer compress Progressive Pataca Buckinghamshire orange Via pink index Automotive Cambridgeshire Buckinghamshire Computers payment Peso',
          villageId: 8,
          schoolId: 8,
          libraryId: 8
        },
        {
          id: 9,
          first_name: 'Daphne',
          last_name: 'Hane',
          gender: 'Male',
          address: '2150 West River',
          gps_coordinates: [
            '-9.9961',
            '-49.4641'
          ],
          images_drive_folder_link: 'https://bradly.com',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Eduardo Romaguera',
            phone: '1-262-573-5671',
            email: 'Luz77@hotmail.com',
            jobTitle: 'Global Brand Designer'
          }),
          notes: 'Tunisia cross-platform application Representative Intranet bluetooth programming parse New Granite Cambridgeshire Austria intuitive Alabama Awesome Green International Loaf Soap EXE up Dam bandwidth Robust Pass Honduras intermediate Agent PNG Streets JBOD Automated Cambridgeshire Berkshire Cambridgeshire repurpose Usability program Port Prairie hour Dobra Springs withdrawal Automotive impactful COM Practical Angola Automotive',
          villageId: 9,
          schoolId: 9,
          libraryId: 9
        },
        {
          id: 10,
          first_name: 'Jalen',
          last_name: 'Herman',
          gender: 'Female',
          address: '92599 Shanie Squares',
          gps_coordinates: [
            '62.7177',
            '-37.0160'
          ],
          images_drive_folder_link: 'http://angelina.name',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Dr. Andre Pfannerstill',
            phone: '1-232-741-5991',
            email: 'Abbey_Witting56@gmail.com',
            jobTitle: 'Corporate Configuration Supervisor'
          }),
          notes: 'Maine withdrawal hack Port Yen Virginia redundant virtual copying Rustic white Steel analyzer Rubber National Usability GB e-tailers Associate Buckinghamshire Guam Mountain payment Chair override auxiliary Plains generate neural forecast SDD Stream payment deposit experiences Islands feed Krona Agent up Engineer Buckinghamshire Somali Washington sky exploit Extended International monitor yellow',
          libraryId: 6
        },
        {
          id: 11,
          first_name: 'Skye',
          last_name: 'Gulgowski',
          gender: 'Male',
          address: '3749 Julius Mountains',
          gps_coordinates: [
            '33.9301',
            '-23.9078'
          ],
          images_drive_folder_link: 'https://helene.net',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Taylor Ruecker',
            phone: '1-810-532-3004',
            email: 'Jailyn.Stark70@hotmail.com',
            jobTitle: 'Corporate Web Assistant'
          }),
          notes: 'extensible Cambridgeshire lime China virtual Borders Chief Computer mission-critical Implementation Kids Legacy one-to-one Card Licensed Berkshire communities Summit wireless Frozen Kuwaiti Managed Mouse Serbian magnetic purple Kids Reverse-engineered Specialist Lead local out-of-the-box Bridge XSS Data Islands Tactics Maine Senior strategize quantify Infrastructure Principal Small Licensed hacking Practical Engineer bi-directional Synchronised',
          libraryId: 0
        },
        {
          id: 12,
          first_name: 'Tia',
          last_name: 'Muller',
          gender: 'Other',
          address: '4466 Gleason Union',
          gps_coordinates: [
            '-75.4387',
            '-41.3300'
          ],
          images_drive_folder_link: 'https://annetta.name',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Dr. Mack Schmidt',
            phone: '1-304-251-8429',
            email: 'Faustino_Effertz29@hotmail.com',
            jobTitle: 'Dynamic Accountability Associate'
          }),
          notes: 'Handmade technologies client-server Ramp Awesome Metal invoice responsive Refined Nakfa Computer Plastic hard models transition payment Car mission-critical index world-class generate parse Lev seamless CSS XML Baby Beauty Fresh Expressway Sports strategize Account AI Ergonomic Shores Credit compelling approach alarm calculate Steel deposit Tools revolutionize FTP Sleek Fresh Cross-platform metrics',
          libraryId: 3
        },
        {
          id: 13,
          first_name: 'Bettye',
          last_name: 'Volkman',
          gender: 'Other',
          address: '3852 Prosacco Views',
          gps_coordinates: [
            '-75.8807',
            '12.9920'
          ],
          images_drive_folder_link: 'https://chester.net',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Irene Conn',
            phone: '1-601-777-2176',
            email: 'Nigel10@yahoo.com',
            jobTitle: 'Principal Optimization Supervisor'
          }),
          notes: 'Wooden upward-trending Brooks New interfaces Solutions withdrawal transmitting Guinea-Bissau Hawaii Intelligent Lead Tennessee multi-byte Extensions Configuration Configuration Bedfordshire Berkshire synthesize architect Metal maximize Handmade Account tangible Ohio navigate bluetooth metrics Books Monetary deposit COM Shoes Executive application Rapids strategize Customer convergence overriding Manager generate optimizing yellow South SMTP Ameliorated Rico',
          libraryId: 4
        },
        {
          id: 14,
          first_name: 'Amina',
          last_name: 'Schroeder',
          gender: 'Male',
          address: '0643 Lang Garden',
          gps_coordinates: [
            '55.8285',
            '-157.8726'
          ],
          images_drive_folder_link: 'https://rigoberto.info',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Harry Lowe',
            phone: '1-529-877-5254',
            email: 'Britney_Williamson0@yahoo.com',
            jobTitle: 'Legacy Web Analyst'
          }),
          notes: 'THX Up-sized Lilangeni digital analyzing Gourde PCI Cambridgeshire uniform Franc Toys XML access Response bluetooth incubate Checking Libyan seamless motivating Multi-tiered Uruguayo Omani website client-server copying Louisiana Sleek override Granite Buckinghamshire Outdoors Human contingency cross-platform Intuitive innovate Right-sized Avon Bedfordshire auxiliary hard tan HDD interactive deposit SCSI Engineer Hampshire payment',
          libraryId: 9
        },
        {
          id: 15,
          first_name: 'Elnora',
          last_name: 'Dickens',
          gender: 'Female',
          address: '306 Lance Heights',
          gps_coordinates: [
            '-81.8004',
            '-17.8955'
          ],
          images_drive_folder_link: 'https://ernest.biz',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Toni Stokes',
            phone: '1-698-611-8047',
            email: 'Kristopher70@yahoo.com',
            jobTitle: 'Internal Usability Strategist'
          }),
          notes: 'Incredible Namibia Shilling Dollar gold parsing ROI Division Awesome Inverse Ergonomic purple Birr circuit National Configuration Practical repurpose deposit unleash Estates front-end Namibia Tuna client-server International Checking Montserrat haptic Glens vortals California Denar invoice TCP web-enabled engage Orchestrator next Plain lime Health Developer scale Inlet Grocery withdrawal Industrial monitor disintermediate',
          libraryId: 5
        },
        {
          id: 16,
          first_name: 'Juana',
          last_name: 'Haley',
          gender: 'Other',
          address: '786 Foster Bypass',
          gps_coordinates: [
            '16.9204',
            '34.5092'
          ],
          images_drive_folder_link: 'http://king.org',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Wendell Nolan',
            phone: '1-990-968-4961',
            email: 'Rhoda.Grady13@yahoo.com',
            jobTitle: 'Global Research Technician'
          }),
          notes: 'productivity lime Home Cotton Facilitator SMTP cutting-edge superstructure deposit Ball Cheese Buckinghamshire Granite Architect Borders cyan monetize primary Avon Ergonomic HDD proactive Buckinghamshire monitoring plum Granite neural Account mindshare Mouse red budgetary invoice Exclusive engage Georgia Rustic Chicken payment synthesize Cambridgeshire bi-directional Generic Wooden driver parse Investment ADP Borders withdrawal',
          libraryId: 6
        },
        {
          id: 17,
          first_name: 'Buddy',
          last_name: 'Schimmel',
          gender: 'Female',
          address: '8693 Jaime Spurs',
          gps_coordinates: [
            '-73.9327',
            '-66.1813'
          ],
          images_drive_folder_link: 'https://stephania.org',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Mr. Josephine Pagac',
            phone: '1-832-379-8991',
            email: 'Angus74@hotmail.com',
            jobTitle: 'Regional Solutions Coordinator'
          }),
          notes: 'motivating explicit Forward Won Object-based ivory Towels compressing Escudo Forward Tasty deposit transmit FTP Mills Ergonomic application Usability Table ROI database Coordinator orchestrate Facilitator port Generic France Garden Account Operations Buckinghamshire Pines Interactions Buckinghamshire parse Fantastic Solomon protocol Account Louisiana seize Legacy synthesizing Dakota middleware Steel Romania South Outdoors best-of-breed',
          libraryId: 9
        },
        {
          id: 18,
          first_name: 'Jessie',
          last_name: 'Kiehn',
          gender: 'Female',
          address: '61655 Lester Wells',
          gps_coordinates: [
            '-41.5107',
            '-153.3913'
          ],
          images_drive_folder_link: 'http://bobby.biz',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Stella Greenholt',
            phone: '1-387-690-9914',
            email: 'Vivienne10@yahoo.com',
            jobTitle: 'Product Interactions Strategist'
          }),
          notes: 'Division Dynamic Strategist reciprocal Dakota strategize Loan International Berkshire indexing Legacy optical Chair Manager optical Incredible Keyboard Franc Loan hack primary XSS Personal Data vortals Berkshire Iowa Fresh Frozen Junctions EXE Towels Licensed Jewelery Account 3rd 24 Sol platforms Pants Cambridgeshire Rustic back-end orchestrate standardization AI Bedfordshire deposit Auto Loan',
          libraryId: 0
        },
        {
          id: 19,
          first_name: 'Arturo',
          last_name: 'Glover',
          gender: 'Other',
          address: '073 Rosenbaum Brook',
          gps_coordinates: [
            '31.4346',
            '133.9977'
          ],
          images_drive_folder_link: 'http://ethan.biz',
          headmasters_picture: 'http://placeimg.com/640/480',
          education_contact: JSON.stringify({
            name: 'Mrs. Celia Ortiz',
            phone: '1-656-704-2235',
            email: 'Yessenia.Zulauf3@yahoo.com',
            jobTitle: 'Corporate Tactics Associate'
          }),
          notes: 'Garden navigating payment innovate Creative Account Practical Metal 24/7 Nebraska Reactive Avon Optional Shirt salmon Island Nigeria purple cyan New Technician quantify one-to-one Architect olive port Monaco Wisconsin hard Cotton Computers Islands Handcrafted Republic firewall Helena Automotive Steel New Timor-Leste Legacy reboot Multi-lateral tangible exuding Ergonomic Delaware Metal Rapids asymmetric',
          libraryId: 7
        }
      ]);
    });
};
