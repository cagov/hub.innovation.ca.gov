---
title: Enabling analysis of California’s hiring and recruitment data 
parentid: Data
description: How CalHR worked with ODI to increase analysis capabilities for ECOS.
headerlabel: Papers
headericon: paper
---

<div class="author-header-block">
Ian Rose, Aeri Shan, John Harding, Brian Pardo, Preeni Varghese, Britt Allen, DiJon Walker, Annette McFarland, Jason Lally, Bo Ching, Enrique Parker</a>
</div>

<p class="text-lead">How the California Department of Human Resources (CalHR) worked with the Office of Data and Innovation (ODI) to increase analysis capabilities for the Examination & Certification Online System (ECOS).</p>

<!-- 
<div class="interaction-block">
<div class="interaction"><a href=""><img class="icon" src="/img/paper-share-icon.svg" />Share</a></div>
<div class="interaction"><a href=""><img class="icon" src="/img/paoer-cite-icon.svg" />Cite</a></div>
</div>
-->

## The opportunity

The State of California has a quarter of a million employees, and each year hundreds of thousands of applicants go through the hiring and recruitment process, submitting millions of applications. They also take exams qualifying them for roles and go through interviews, resulting in hundreds of millions of events.

CalHR runs hiring using an application called ECOS. ECOS is designed for handling a high volume of hiring-related actions, but it is not well suited to in-depth analysis of its data. CalHR staff need to be able to ask questions of their data like:

* Which job classifications are receiving the most interest? Which are receiving the least?
* How diverse is our candidate pool for our job postings? Does it differ between classifications or departments?
* How successful was our latest job fair in driving applications?

For many years, CalHR had relied on a complex set of manually-run queries to support questions like the above. These queries were run by a single person with specialized knowledge. While this worked for some questions, this process was unable to scale. It was also time consuming and did not allow for exploratory analysis, and in-depth knowledge of ECOS remained siloed. Anytime someone had a new set of questions, a new query had to be manually and painstakingly constructed. This process severely limited CalHR staff’s ability to analyze their data and discover new insights.

CalHR had an appetite to solve these challenges and a desire to deepen their organization’s ability to make data-informed decisions. They approached ODI with that appetite, and ODI was happy to help them through our Modern Data Stack Accelerator (MDSA) service.

## Our approach

The approach of MDSA is to empower agencies with the skills and tools that will let them improve access, collaboration, and automation. Rather than doing the work and handing over a solution, ODI centers training, mentorship, and pair programming opportunities to provide our clients with the skills and tools they need to both solve their current problem and build capacity to solve new problems going forward.

This approach is built into the MDSA service in a number of ways:

1. Shifting analytics workloads to reliable, scalable, and secure cloud-based platforms
2. Using modern engineering workflows like version control, code review, and automated testing for developing data pipelines
3. Enabling stakeholders to connect directly to analysis-ready datasets, allowing them to self-serve questions and explore the data themselves without needing to make ad hoc requests of IT

Without ODI’s support, CalHR would have been responsible for designing every aspect of their approach, conducting market research, developing a plan, and gaining stakeholder buy-in with scarce resources. Their collaboration with ODI considerably accelerated the process, reducing what could have taken 2 years just to define the approach.

### Data pipelines: a modern cloud-centered approach

We deploy a stack of industry-standard cloud software-as-a-service tools to build our data pipelines. The choice of stack components ensures that we are able to take advantage of the wealth of documentation and large user bases, while its modularity means that it is possible to swap out different components should they become a poor fit later down the road.

We used Fivetran as a low-code tool for copying primary data from the ECOS system to Snowflake, our data platform. This allows us to move the data to a more appropriate place for analysis, and we are able to drop sensitive information from the dataset during the move.

Once the raw data tables are in Snowflake, we use the dbt framework for transforming the data into analysis-ready datasets. This involves combining, filtering, and aggregating data from over 700 tables. This is a complex process, but the framework allows us to manage the complexity by tracking data lineage and enabling collaborative, version controlled queries.

<img src="/papers/rose-hr-1/eac-fig-1.png" alt="Diagram of toolchains that make up the data pipeline" />

The data pipeline built using the above toolchain runs daily (at least), ensuring that everyone using the data is acting on the latest version.

### Collaboration: using software engineering best practices

Just as important as the data tooling stack is the process. ODI treats data analysis as proper code, rather than an ad hoc process done by somebody else (who that “somebody” is can often be left unspecified). As code, analytics should be treated with industry-standard practices for software engineering using the version control systems, testing, and code review.

We worked with CalHR staff to host code in GitHub for the ECOS analysis project, which enabled:

1. Safe development of new features in separate branches
2. Robust testing of proposed code changes
3. Peer review of code and configuration
4. Documentation that is maintained by data analysts and lives near the code
5. A history of how the project has evolved, allowing for easy rollbacks and auditing
6. Issue tracking to allow for questions, bug reports, and strategic discussions about the code

<img src="/papers/rose-hr-1/eac-fig-2.png" alt="GitHub issue for FMD Questions on ECOS data. It includes a problem summary, record of work, and follow-up comments." />

### Reporting: enabling advanced analytics and discovery

The ultimate users of ECOS data analysis are not CalHR IT, but instead staff who need to reason about and report on hiring data (both within CalHR and across the state). A key goal of the ECOS analysis project is to enable that data usage without having all requests bottlenecked on one or a few IT staff who have many responsibilities and finite capacity for responding to all questions related to hiring data.

We’ve made the analysis-ready data tables produced by this project available to CalHR staff, who connect to them and have built dashboards using PowerBI. These dashboards provide self-service analytics to CalHR staff, allowing them to answer questions using the latest data that would have been slow and difficult to answer before. In the future, we hope to also allow state departments to access the same data to be able to better understand their own hiring processes.

<img src="/papers/rose-hr-1/eac-fig-3.png" alt="Jobs and applications dashboard. It shows statistics like total jobs active, total applications received, and average applications received, including charts showing change over time." />

## Impact

Previously, CalHR found it challenging to analyze ECOS data to answer questions about California’s hiring processes. The process was bottlenecked on a few IT staff with specialized knowledge. Producing reports from the data involved laborious construction of manual queries that could take days or weeks. One result of this is that staff frequently relied on out-of-date data rather than submit a new request for data.

After ODI’s MDSA project with CalHR, there is a scalable, cloud-based data pipeline which automatically generates analysis-ready tables on the latest ECOS data. Queries to produce the analysis-ready tables are developed using software engineering practices so there are robust data tests and a history of how they have evolved. Program staff can connect to these tables and self-serve analytics questions about California’s hiring data in close to real time.
  

## Recommendations

ODI’s MDSA project with CalHR serves as a proof of concept for how the state can build a modern data pipeline for its hiring data. Further work should go in a few directions:

1. CalHR can continue to socialize how to use and develop a code-first analytics workflow among both its IT and program staff. This includes further training in the use of GitHub (including code review, version control, and testing), as well as training in the use of PowerBI for reporting on the analytics.
2. CalHR can now create data governance policies and practices on a robust foundation. The tools used make it easier to document datasets, visualize data lineage, and control access with fine-grained permissions. The concrete examples from the collaboration with CalHR allow them to have specific conversations about roles and responsibilities related to data so that knowledge of data and its appropriate use can be easily shared across the department.
3. CalHR can bring in more data sources to their data pipeline, such as payroll and census data, allowing them to answer more sophisticated and cross-cutting questions about California’s workforce and hiring process.

## Authors
 
<div class="author-section">
    <div class="author">
        <p class="author-name">Ian Rose</p>
        <p class="author-title">Principal Data Engineer</p>
        <p class="author-email">
            <a href="mailto:ian.rose@innovation.ca.gov">ian.rose@innovation.ca.gov</a>
        </p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Software, formal analysis, investigation, methodology, project administration, writing - original draft</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Aeri Shan</p>
        <p class="author-title">Principal Analytics Engineer</p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Investigation, formal analysis, software, methodology</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">John Harding</p>
        <p class="author-title">Database Architect, Developer, Admin</p>
        <p class="author-email">
            <a href="mailto:John.Harding@calhr.ca.gov">John.Harding@calhr.ca.gov</a>
        </p>
        <p class="author-org">California Department of Human Resources, 1515 S Street, North Bldg., Suite 400, Sacramento, CA 95811</p>
        <div class="author-role">
            <p>Roles: Conceptualization, data curation, formal analysis, software, supervision, validation</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Brian Pardo</p>
        <p class="author-title">Information Technology Specialist</p>
        <p class="author-email">
            <a href="mailto:Brian.Pardo@calhr.ca.gov">Brian.Pardo@calhr.ca.gov</a>
        </p>
        <p class="author-org">California Department of Human Resources, 1515 S Street, North Bldg., Suite 400, Sacramento, CA 95811</p>
        <div class="author-role">
            <p>Roles: Software, formal analysis, investigation, validation</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Preeni Varghese</p>
        <p class="author-title">Information Technology Specialist</p>
        <p class="author-email">
            <a href="mailto:Preeni.Varghese@calhr.ca.gov">Preeni.Varghese@calhr.ca.gov</a>
        </p>
        <p class="author-org">California Department of Human Resources, 1515 S Street, North Bldg., Suite 400, Sacramento, CA 95811</p>
        <div class="author-role">
            <p>Roles: Software, formal analysis, investigation, validation</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Britt Allen</p>
        <p class="author-title">Senior Analytics Engineer</p>
        <p class="author-email">
            <a href="mailto:britt.allen@innovation.ca.gov">britt.allen@innovation.ca.gov</a>
        </p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Software, investigation</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">DiJon Walker</p>
        <p class="author-title">Data Analytics Supervisor</p>
        <p class="author-email">
            <a href="mailto:DiJon.Walker@calhr.ca.gov">DiJon.Walker@calhr.ca.gov</a>
        </p>
        <p class="author-org">California Department of Human Resources, 1515 S Street, North Bldg., Suite 400, Sacramento, CA 95811</p>
        <div class="author-role">
            <p>Roles: Data curation, visualization</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Annette McFarland</p>
        <p class="author-title">Lead Data Analytics Specialist</p>
        <p class="author-email">
            <a href="mailto:Annette.McFarland@calhr.ca.gov">Annette.McFarland@calhr.ca.gov</a>
        </p>
        <p class="author-org">California Department of Human Resources, 1515 S Street, North Bldg., Suite 400, Sacramento, CA 95811</p>
        <div class="author-role">
            <p>Roles: Data curation, visualization</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Jason Lally</p>
        <p class="author-title">Deputy Director, Data Engineering &amp; Services</p>
        <p class="author-email">
            <a href="mailto:jason.lally@innovation.ca.gov">jason.lally@innovation.ca.gov</a>
        </p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Conceptualization, resources, supervision, funding acquisition, methodology, project administration</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Bo Ching</p>
        <p class="author-title">Data Manager</p>
        <p class="author-org">California Department of Human Resources, 1515 S Street, North Bldg., Suite 400, Sacramento, CA 95811</p>
        <div class="author-role">
            <p>Roles: Project administration, resources, supervision</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Enrique Parker</p>
        <p class="author-title">Chief Information Officer</p>
        <p class="author-email">
            <a href="mailto:enrique.parker@calhr.ca.gov">Enrique.Parker@calhr.ca.gov</a>
        </p>
        <p class="author-org">California Department of Human Resources, 1515 S Street, North Bldg., Suite 400, Sacramento, CA 95811</p>
        <div class="author-role">
            <p>Roles: Conceptualization, resources, supervision</p>
        </div>
    </div>
</div>

Roles use the [CRediT taxonomy](https://credit.niso.org).
