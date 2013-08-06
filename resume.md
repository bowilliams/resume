# Bo Williams

### contact
* bowilliams@gmail.com
* https://github.com/bowilliams
* (781) 308-2710

### skills

### languages
C#, JavaScript, Python

### platforms and standards
.Net and .Net MVC, CSS/HTML/XML, jQuery, json

### tools, databases, and servers
PostgreSQL, MySQL, Visual Studio.Net, IIS, nginx, Apache, RabbitMQ, Redis

### Experience

**Progressive Solutions** : *Director of Engineering* __April 2011 - Present__

I was the second engineering hire on a new team at Progressive Solutions. As the company expanded from a digital printer to a more e-commerce and software oriented business, I was brought in to build a foundation of solid engineering practices. 

*Representative accomplishments*

* Introduced a bug-tracking system, first based on Trello and then moving to Jira. This greatly cut down on the number of issues which were dropped on the floor or not responded to in a timely manner.  
* Introduced agile practices (breaking down projects into stories and sprints, using points for estimation, sprint planning / sprint review meetings) to launch two major projects. Team members appreciated the organization of work and having a clear sense of what "done" meant in each sprint, and management appreciated that they could see continuous progress on the project.
* Introduced a wiki which was widely adopted by both the engineering and premedia departments to answer common questions. Evangelized best practices of always writing an article if you looked for something on the wiki and didn't find it or had a new project to launch.
* Developed a task management system in Python based on [celery](http://www.celeryproject.org/)/RabbitMQ/Redis to accept orders of personalized documents, marshal final output asynchronously (depending on load, could take up to eight hours), and deliver the order to internal or third part fulfillment systems in multiple formats. This system processed hundreds of orders per day during the holiday season without a single failure.
* Co-designed (with CTO) a RESTful API implemented in .Net MVC for creating and ordering personalized documents. This product allowed our customers to embed personalization in their own e-commerce system without needing to do any back end programming, as documents could be created and the editor could be opened entirely from JavaScript. With a minimum of server-side programming, they could then send us orders as JSON. This was huge for our first partner who was locked in to a third-party e-commerce provider and didn't have very many engineering resources. 
* Currently leading a small team in the design and implementation of a book production workflow. This system accepts client orders as zip files hosted on S3, downloads and imports the orders into our production system, and gives operators a simple web UI (created in .Net MVC) for binding signatures into books, assembling books with covers, and doing QA to assure that all signatures were present and in the right order by quizzing operators to pick the right image from a selection of possible pages in a signature. This is built in .Net MVC with some command line tools to assist, all in C# and JavaScript. 
* Hired a junior engineer to assist with support and project work, as well as developing internal reporting tools. Although this person turned out to not be a good fit for us, I was praised for managing a troublesome employee and challenging the employee to adapt to our culture rather than tolerating or prolonging an unworkable situation.
* Led the project to move our children's product e-commerce site (www.frecklebox.com) off of an unstable and hard to scale integration with a third-party document personalization product and on to our own RESTful API. This was in response to a Today Show appearance during the holiday season in which the site couldn't handle the load and many visitors could not place orders. The new site and integration is much more scalable (thanks to a caching layer in front of the e-commerce app and the move to a multiple server architecture in document personalization) and has had no such problems.
* Similarly, led the project to move our B2B stationery ordering site (www.stationeryhq.com) off of the same package and on to nopCommerce and our own API for document personalization. Customers and management have responded very well to this change and have lauded the performance and reliability of the new site. 

**Brainshark** : *Engineering Manager - Support and Services* __April 2010 - April 2011__

Brainshark is a market leader in online presentation and training- they take uploaded PowerPoint presentations, provide an easy UI for adding notes and audio, and create videos suitable for online or mobile viewing. I was hired to solve an internal management and resources problem- support escalations and services engagements were draining engineering resources and causing delays in the release schedule. I was asked to serve as a liaison between engineering, sales, and support, and to build a team so that escalations and services projects could be done outside of the product team. Inherited an IT resource to manage application support and release engineering and a database administrator, and also hired two .Net/JavaScript skilled engineers, one who solved support cases and fixed bugs, and one who led services implementation.

*Representative accomplishments*

* Took sales support off Engineering's plate- resources on my team were sufficient to answer product queries and to assist with scoping services projects estimates needed for a prospect or evaluating product suitability for customers
* Doubled the size of the team to address an increasing load of support escalations and services projects
* Took over the release process from the CTO- new releases were done during off hours every six weeks and involved coordinating resources between engineering, support and services, QA, and IT operations to take our server cluster down, deploy and test the release, and bring the cluster back up. 
* When I was hired, there was no documentation whatsoever on setting up a developer sandbox or building the product. By the time I was done setting up my sandbox, I also had a wiki article ready for the next hire.
* My team led a services project to write a JavaScript library which would consume a RESTful API (developed by the product team to provide data for a mobile presentation viewing app) of a customer's presentation library. This let customers embed their Brainshark presentations on their own websites without having to do any back-end programming. As I was leaving the company, I was working with the product management team to scope this out into a full addition to Brainshark's product for customer portals.

**Bitstream** __August 2006 - April 2010__

At Bitstream I worked on the Pageflex line of variable data products, specializing in our Storefront application. Customers deployed this software internally, hosting online sites for creating, customizing, ordering, and distributing all types of personalized documents.

*Sr. Software Engineer* __May 2009 - April 2010__

Promoted into product R&D in recognition of the success of my product development efforts in Pageflex Services, and asked to adapt much of that functionality to our main product. In this more research-oriented position, demonstrated ability as self-starter who did not need a lot of management guidance to independently identify new features and prototype application enhancements.

*Representative accomplishments*

* Converted shopping cart to use JavaScript and AJAX instead of ASP.Net post-backs to update and remove cart items.
* Implemented four of our most popular custom extensions as base functionality, generalizing client-specific uses into more widely applicable features, and doing more rigorous testing and performance analysis with NUnit and ANTS profiler. This was all accomplished in the first product release cycle after I joined the team.
* Integrated quickly and smoothly into a new team and development process.

*Services Lead Engineer* __August 2006 - May 2009___

Hired as lead engineer in an existing team, to serve as a mentor to peers and a leader in discovering and evangelizing new development practices. Led training and educational presentations for our customers and prospects and at our user conferences.

Developed 50+ out-of-release-cycle, customer-driven product enhancements and integrations as part of a first-party professional services team within Bitstream. These were released as downloadable extensions to the base product.

*Representative accomplishments*

* Lauded in annual reviews and by peers for juggling many competing priorities and deadlines (custom development, partner support, integration efforts, and customer support) while requiring a minimum of management overhead. 
* Developed integrations to a number of partners and other third-party systems, focusing on workflow and MIS systems.  Designed a reusable, template-based framework for rapid development of XML/JDF based integrations, which was later productized and sold as a stand-alone product. Similarly, developed a reusable “punch-out” solution that could be sold to clients who managed their own product catalog and e-commerce workflow but needed access to document customization within our product. Both of these products served as the base of multiple integrations, many of which were developed and tested in days rather than weeks thanks to the reusable frameworks.
* Supervised our free extension program, distributing commonly used enhancements to our customers via a download portal. Responsibilities included working with the team management to choose which extensions to release, managing extension upgrades to coincide with product releases and associated QA efforts, and communicating extension releases to customers via our support portal.
* Introduced unit testing (using NUnit) while developing a complex XML-based pricing system in C#. Since the customer would modify the pricing files after release, a test suite including unit testing helped us confirm whether bugs were due to bad input or program errors. This saved us many hours and dollars of engineering time diagnosing customer problems. Led team presentations and education effort to encourage a wider adoption of unit testing practices in our development effort.
* Developed a jQuery-based method for our customers to change page layout in our base product in a supported fashion. This solved a problem for many of our customers who previously had been forced to directly modify our product’s ASPX files, resulting in installations that could not be easily upgraded to later versions of our product.

**Banta** __July 2000 - August 2006__

*Banta, acquired in 2006 by RR Donnelley, was a large printing services provider.  The Cambridge office specialized in developing marketing portals and web-to-print software as added value for Banta’s existing printing customers.*

*Sr. Technical Application Architect* __April 2006 - August 2006__

Assumed full responsibility for business development and project management with existing clients. Served as primary point of contact between clients and Banta, worked with sales team to identify business development opportunities, and contributed to resource scheduling and sales forecasting for assigned clients.

*Representative accomplishments*

* Worked with client accounts on an ongoing basis to identify business problems and propose custom development. For example, proposed and led a $200K project integrating a new in-house marketing content management system with an existing e-commerce / marketing site from initial requirements gathering meetings on-site through launch.  This replaced a manual workflow used to integrate new documents into the site. Led a combined team of product engineers, custom development engineers, and designers through final phase of product development and integration effort.  Project also included a complete re-design of the site and misc. other application platform improvements.

*Software Engineer (Project Lead)* __July 2000 - April 2006__

Developed and maintained custom e-commerce, marketing, and variable printing web sites for a variety of clients using the J2EE platform with Kodo JDO and Struts, as well as Python, Perl, and proprietary scripting languages. Division was a rapid application development, team-based environment with project life cycles ranging from four hours to four months, developing custom marketing portals for existing print clients. Scheduled projects under strict deadlines and met deliverables on time.  Architected sites for new clients as well as adding functionality to existing clients in maintenance. Extensive experience gathering requirements from clients and writing specs.

*Representative accomplishments*

* Customized our JBoss/Struts/Kodo/Agilis variable print platform for a major farm equipment manufacturer’s in-house sales and advertising portal.  Developed a custom web tier for the platform’s back-end, as well as significant back-end development and integration with the client’s single sign-on implementation.  Many of the customizations were later rolled into the base product as optional features.  Led a mixed team of employees and contractors on this project while working with an in-house team of contractors developing a productized version of the same variable print platform.
* Developed a reusable e-commerce shopping platform using Struts, JDBC, and JSP.
* Developed an XML-RPC interface and client API in Perl and Python for Banta’s variable print server product (DesignMerge Web).
* Designed and implemented a Python-based web-to-print marketing tool for a major hospital system, integrating with Banta application servers as well as client legacy systems.
* Used Python, XML, XSLT, and XML-RPC to build database-driven and customizable statement of benefit PDFs for the healthcare market, maintaining a reusable code base that could be customized for several different customers.
* Added significant object oriented Perl functionality to Banta’s “page sprayer” XML-based database-to-print product for multiple clients. Used their feedback to roll new features into the base product.  
* Honed estimating, project tracking, and quality management skills in an intensive project management training course.
* Responsible for on-call 24/7 supervision of all deployed client applications and server hardware. On-call duty was rotated on a weekly basis. Integrated monitoring systems with new and existing applications.

**Personal Projects**
Developed an iOS application to display random Buddhist meditation slogans. Currently working on a "dashboard" web app for a Raspberry Pi to display fitness information from Fitbit, weather, Twitter, and recent emails in my bathroom (very much akin to Panic's Status Board iPad app).

**Education**

University of North Carolina, Chapel Hill — B.A., Communication Studies, 1999

**Volunteer Experience**

* Mentor with Big Brothers Big Sisters of Massachusetts __September 2012 - present__
* Oversaw security and VIP transportation for major urban Buddhist center, leading team to oversee transportation, airport escorts, etc. for important visiting Tibetan teachers. Served as a team member responsible for health and well being of center members. __2006 - 2011__
* Volunteer at Massachusetts Substance Abuse Hotline / United Way First Call For Help __2006__
* Station management and DJ, UNC college radio station WXYC __1996 - 1999__
* Volunteer at battered women’s shelter in Durham, NC __1999__
* High School Special Olympics Coach __1992__



