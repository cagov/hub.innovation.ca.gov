---
title: Developing trustworthy monitoring data
parentid: Data
description: ODI built an outlier detection tool to interactively assess environmental monitoring data quality.
headerlabel: Papers
headericon: paper
---

<div class="author-header-block">
Monica G. Bobra <a href="https://orcid.org/0000-0002-5662-9604"><img class="orcid-cite" src="/img/orcid-icon.svg" alt="ORCiD icon" /></a>, Sarah Letson, Kimberly Hicks, Esa Eslami, Ted Swift, John Franco Saraceno, Louise Conrad, David Bosworth, Daniel Wisheropp, and Prabhjot (Nicky) Sandhu
</div>

<p class="text-lead">We built an outlier detection tool to interactively assess environmental monitoring data quality.</p>

<div class="interaction-block">
<div class="interaction"><a href="/papers/bobra-et-al-developing-trustworthy-monitoring-data.pdf"><img class="icon" src="/img/paper-pdf-icon.svg" /> Download PDF</a></div>
<div class="interaction"><a href="https://zenodo.org/records/19579175"><img class="icon" src="/img/paper-link-icon.svg" />https://zenodo.org/records/19579175</a></div>
</div>

## The opportunity

The Department of Water Resources (DWR), housed within the California Natural Resources Agency, provides water for 27 million people and 750,000 farmland acres throughout the State of California. DWR relies on environmental monitoring data to produce accurate flood and water quality forecast models, manage floods, and comply with environmental laws.

Raw environmental monitoring data may contain errors and missing values for many reasons — such as environmental disruptions, instrument malfunction, power or transmission issues, and physical obstructions. However, unusual conditions can produce anomalous, but valid, data. Many state water contractors, flood-fighters, and members of the public use raw environmental data to make timely critical decisions. The challenge is to distinguish data outliers, or invalid data, from those that are valid but unusual. DWR staﬀ invest significant time and resources reviewing raw data using combinations of ad-hoc automated and laborious, manual review methods that vary from group to group before using the data for decision-making.

Neither approach is viable. Using data of uncertain quality leads to poor decisions; manually and inconsistently reviewing data quality of raw data delays further analysis and time-critical decisions. We seek to solve these problems by developing and implementing a tool that easily, quickly, consistently, and transparently identifies spurious environmental data to improve confident decision making. Trustworthy environmental data leads to efficient workflows, better predictive modeling, provides analysis-ready data for research, and enables use of machine learning techniques with greater confidence in the validity of results.

## Our approach

### Detection tool

We developed an outlier detection tool that addresses the need for interactive data quality assessment. The core function of this tool is to provide a library of outlier detection tests and a convenient user interface to execute them. The application offers a variety of configurable outlier detection algorithms, each with customizable parameters that users can adjust before test execution. The tool supports flexible re-execution of tests, whether to correct parameter errors or to explore alternative parameter settings. At the time of writing, 9 tests have been implemented, most suggested by DWR’s internal Outlier Detection Test Best Practices document ([Department of Water Resources, 2026](https://water.ca.gov/-/media/DWR-Website/Web-Pages/Library/Files/Public-Forms/DWR1BST005v12Outlier-Detection-Best-Practicesfk.pdf)). These tests encompass both basic quality checks like gross range validation for boundary violations and value gap detection for missing entries, as well as more advanced statistical approaches such as Z-score analysis and the Tukey interquartile range method. The basic checks can be implemented as unsupervised steps, while some benefit from supervision by subject matter experts. More tests can be added in the future to support new data quality standards or techniques.

Built using open-source Python libraries, the tool implements a human-in-the-loop approach that allows users to iteratively refine outlier detection parameters and validate results through data visualization. The backbone of the user interface is Shiny for Python ([The Shiny development team, 2025](https://shiny.posit.co/py/)), an extensible library for creating dynamic applications. One feature of this library is that it creates a browser-based interface, enabling broad application portability.

During tool development, we found that many different data formats are used within DWR. Staff often work with tabular data (generally in CSV format) in Microsoft Excel and various internal databases, but no single standard exists. As a result, the tool was built to accept CSV files with heterogeneous schemas as its primary input format. Since CSVs are inherently text-based, the tool also devotes significant effort to interpreting data types in the uploaded file. Various formats of dates, timestamps, and numbers are all interpreted from the raw text data. We also enabled teams to configure their own file formats within the tool, allowing them to control how data types are interpreted, rename columns, and pass custom file reading options.

### Usability testing

Usability testing allows a team to discover opportunities for improvement in their product. It involves prompting people to use a tool, and noting where they use it easily and where they struggle with it. Without usability testing, teams risk developing software that doesn’t meet their users’ needs or expectations. To learn more about this practice, see [Moran (2025)](https://www.nngroup.com/articles/usability-testing-101/).

For this project, we conducted an interface design evaluation and user research on the outlier detection tool. First, we evaluated the tool using general-purpose design heuristics aimed to improve the user interface. Next, we conducted 2 rounds of user research. For the first round, we asked 7 DWR staff across three divisions for individual testing sessions with an ODI researcher. We asked each staff member to use the tool to detect outliers and missing values in environmental monitoring data. As they attempted this task, we recorded and took notes during each session. Then we synthesized data from the tests into findings and recommendations.

Our synthesis produced 28 recommendations for changes to the tool. We prioritized these items, based on their level of effort and level of impact, into a backlog of prioritization categories (high, medium, and low priority). To improve the tool, and build trust with the users, we incorporated 13 of the recommended changes into the tool (including all but one of the high priority items). Once these changes were implemented, we conducted a second round of user testing, where we asked 3 staff to record themselves interacting with the improved tool and to send us the recording. This round produced a total of only 2 recommendations, both of which were categorized as low-priority tasks.

Outside of suggestions to improve the user interface, functionality, and data formats, we also uncovered the following cultural issues during our usability testing:

* The DWR Outlier Detection Group's recommended tests have not yet been fully adopted in staff’s day-to-day QA/QC work. This may be due to lack of awareness of the recommended tests, or limitations of current data analysis and storage flexibility.
* Environmental monitoring data work groups, or producers, use varying data review methods, including outlier detection, across DWR divisions. Prioritizing a standard methodology requires support for policy implementation and change management at the leadership level.
* Most producers do not publish quality-controlled data automatically or in real-time, despite intentions of the Open and Transparent Water Data Act. Users must access quality controlled data by specifically requesting it from a data producer.

## Impact

Here we describe the impact of this collaborative effort.

* **Produces high quality data for water operations, forecast modeling, and research.** Integrating best practices for outlier detection into data analysis pipelines will improve data quality, helping DWR meet its mission to reliably provide water to the people of California while protecting the natural environment. It will reduce the time between data acquisition and robust data so that fewer field visits are necessary to check real-world conditions. Hydrologic modelers will be able to use the data as inputs to water resource management forecasts and analysis with much less labor and greater confidence. Researchers can rely on timely, standardized datasets for analysis and synthesis studies and to use these data to build machine learning models.
* **Saves hundreds of hours of DWR scientific staff time.** More than 21 work units within DWR collect and manage detailed water monitoring data. These amount to ~100 million data points per year. The tool will enable a standardized data-review workflow, through which data collectors will save time reviewing data and data users will save time cleaning data. This level of data review hasn’t been completely satisfied with current resources. Staff spend less time manually vetting and compiling data for reports, policy recommendations or other analyses.
* **DWR is better equipped to comply with legislative mandates.** DWR is mandated by AB 1755, the Open and Transparent Water Data Act, to make water-related and data of known quality publicly available in easily used and accessible forms. The results of this collaboration enables DWR to more fully comply with the mandate, producing higher-quality data at lower cost to the state. Similarly, DWR Water Resources Memo 60 (WREM 60) sets department policies and procedures to assure that quality assurance is used in data collection and management activities. It stipulates that all water-related data is scientifically sound, legally defensible, comparable and compatible with State and federal agencies, and is properly documented.
* **Enables better decision-making.** DWR is subject to several water rights and environmental regulations, such as, State Water Board Decision 1641 (2000), that mandate significant water management actions to protect water quality and quantity based on real-world conditions. These actions are set in motion in response to real-time environmental data. This collaboration will enable DWR water managers to deliver water to customers more efficiently and effectively (save money and other resources). Water contractors can confidently make decisions about water treatment that save treatment resources and improve the public’s satisfaction with water delivery. Data users can be confident that data has been reviewed completely and consistently.
* **DWR produces high quality data to the public.** This fosters a culture of excellence for conducting research and co-producing analysis with others. The first goal of the DWR Strategic Plan (2023) is to be an employer of choice, which means attracting, developing, and supporting employees to do the best work possible and with the necessary tools to do it.
* **Serves as a framework for different types of continuous monitoring data.** This framework can be easily extended to any one of the over 100 unique types[^1] of continuous water, soil, and atmospheric data published in near real-time. Within these types, location-specific or time-specific tests can be customized to accurately discern anomalous data in the presence of local variability. Customized settings can capture institutional knowledge so that future staff can be brought on board with reduced need for specialized training. This will encourage consistent data evaluation, standardization, compatibility, and interoperability.

[^1] See environmental variables here: https://cdec.water.ca.gov/misc/senslist.html

## Recommendations

### Transitioning to a fully automatic pipeline

This is the first step toward DWR's ultimate goal of producing an automatic data processing pipeline that processes near real-time data using standardized data review methods, publishes the raw data together with the reviewed and quality-controlled data in one, easy-to-use data repository using a standard data format, and identifies outliers, missing values, and errors using an informative flag. Implementing this requires a consensus-based approach on data standards.

Here are our recommendations for transitioning to a fully automatic pipeline:

* **Implement and prioritize data quality and data publication policies** that set standardized methodologies for review methods, data formats, and data repositories as well as standard time frames to make reviewed data publicly findable and accessible. These policies would represent a minimum standard, with staff empowered to innovate beyond the minima.
* **Socialize this policy.** Through usability testing, we found that some groups do review data in their day-to-day work, but not necessarily by using the tests recommended by the Outlier Detection Test Best Practices document ([Department of Water Resources, 2026](https://water.ca.gov/-/media/DWR-Website/Web-Pages/Library/Files/Public-Forms/DWR1BST005v12Outlier-Detection-Best-Practicesfk.pdf)). This may be due to lack of awareness of the recommended tests. Some groups were effectively performing some of the data quality review tests, through other means. Providing a tool with this set of tests easily accessible will reduce thresholds to wide adoption throughout the organization.

### Incorporating machine learning methods

We developed a prototype machine learning model to detect outliers in water quality data. As a test, we attempted to automatically identify outliers in 35 years of pH data, from 1989 to 2024, from the Barker Slough Pumping Plant (BKS).

The BKS data are available on CDEC, which serves raw data without any information about data quality. In order to train a supervised machine learning model, which relies on labelled data, we created a synthetic label for poor quality data by using the tool to identify outliers via 6 statistical tests. We also added noise by assigning poor quality labels to other data points at random. We labelled the rest of the data as high quality.

Other groups successfully have used machine learning models to automatically identify poor water quality data. For example, [Talagala et al. (2019)](http://dx.doi.org/10.1029/2019WR024906) used time series characteristics, together with a machine learning model called *k*-nearest neighbors, to successfully identify outliers in water quality data taken in the Mackay-Whitsunday region of northeastern Australia.

We followed their approach by deriving 6 simple features from the BKS time series data — such as the autocorrelation of the pH during a one-week rolling window with the week prior — using the Python package `tsfresh` (v0.21.0; [Christ et al. 2018](https://doi.org/10.1016/j.neucom.2018.03.067)). Next, we split the 35-year data set into a training set, consisting of the first 24.5 years of data, and a testing set, consisting of the rest. Finally, we used a k-nearest neighbors model, with k=3, to identify outliers. The model identifies outliers by first plotting the features derived from the training data, together with their labels, in a 6-dimensional feature space. To identify outliers in real-time data, for which we do not know the label, the model plots a data point in the hyperspace, identifies three proximate data points, determines the majority label, and ascribes this label to the real-time data. See Figure 1.

<style>
    div.figure-2 {
      display: grid;
      grid-template-columns: 3fr 2fr;
    }
    div.figure-2 div.illustration img {
        width:100%;
    }
    div.figure-2 div.caption {
        padding: 0 1rem;
    }
    div.caption {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }
    div.caption.figure-1 {
        margin-bottom: 1rem;
    }
</style>

<img src="/papers/bobra-ebt-1/dda-fig-1.png" alt="Graph showing cash and food theft increasing from July 2021 through March 2024" />
<div class="caption figure-1">
<b>Figure 1.</b> The graph shows the total monthly dollars reimbursed for reported cash theft. There was a total of $236 million lost to theft in the last 2.5 years. Between December 1, 2023, and March 31, 2024, CDSS reimbursed 42,849 households for $47,437,760 in stolen CalWORKs benefits.
</div>

To obtain these data, CDSS worked with the Office of Technology and Solutions Integration, within the California Health and Human Services Agency, to develop a work plan with the vendor to provide automated daily batches of raw EBT transaction data to secure cloud storage managed by the CDSS Information Systems Division (ISD). We then created an automated data pipeline that loads the raw data into the RADD team’s data warehouse, where it undergoes a series of cleaning and transformation steps to turn it into a nicely structured, machine-learning-ready dataset. We run these steps daily alongside a series of automatic tests that validate the process.

We found that the account activity data included a complete address for only 66% of cash withdrawal locations (ATMs and POS terminals). To fix this issue, we used a [service](https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm) from Environmental Systems Research Institute, Inc. (Esri), that matches partially complete addresses to complete ones and provides geographic coordinates for each address. Using this tool, we obtained a complete address, along with geographic coordinates, for 95% of the retailers in the account activity data. We integrated this API directly into the CDSS Enterprise Data Pipeline so it runs automatically.

We also learned that the reimbursement data included lump-sum reimbursements for multiple transactions, i.e., the number and value of reimbursement transactions do not map 1:1 to the number and value of theft transactions. This makes it difficult to pinpoint the individual unauthorized transactions for which the customer was reimbursed. Identifying these transactions is central to both understanding where theft occurs and training a model to predict which transactions are theft. To address this issue, we developed a 3-step methodology to infer these individual unauthorized transactions. First, we identify the reimbursement date and cardholder from the list of reimbursements. Next, we select all the cardholder's transactions, from the transaction data, in the month before the reimbursement. Finally, we assign a label. If there are up to four transactions within a 24-hour period that, together, add up to the reimbursement amount, we label those transactions as unauthorized. Otherwise, we label the transactions as legitimate.

### Model

We constructed 20 characteristics, or features, that describe each transaction. Some features describe location characteristics – such as distance between the customer and the retailer, or ATM, where the transaction took place. Others describe the retailer – such as the number of withdrawals at an ATM prior to the transaction of interest. Others describe temporal characteristics – such as whether the transaction took place in the morning or on the weekend.

To find a relationship between these features and suspicious activity, we used a machine learning algorithm called a random forest from version 1.4.1.post1 (Grisel et al. 2024) of the open-source scientific software package scikit-learn (Pedregosa et al. 2011). Our random forest model consisted of 1,000 decision trees. Each tree consists of a series of if-else decision points that terminate in a final outcome. For example, one decision point could ask the question: Did the transaction happen over the weekend? An answer of yes will lead to another question, while an answer of no will lead to a different question. Eventually, the series of questions and answers will terminate in one of 2 outcomes: that a transaction is allegedly illegal or legitimate. We trained the ensemble of decision trees, or random forest, on 64%, or roughly 2.5 months, of data, and tested it on the rest. The random forest outputs the average prediction of the ensemble members as a probability of theft. To convert this to a binary value, we applied a threshold of 35% – that is, we predict transactions with a probability greater than or equal to 35% are theft and those with a lower probability are legitimate – to minimize the number of false positives.

Our data include two groups of transactions: legitimate, authorized transactions, which comprise 99% of the dataset, and theft, or unauthorized transactions. Only 1% of our dataset describes theft. Machine-learning models trained on severely imbalanced datasets like this tend to ignore the minority group in favor of the majority one (see, for example, Chapter 6 of [Le Borgne et al., 2002](https://fraud-detection-handbook.github.io/fraud-detection-handbook/Foreword.html)). To address this problem, we subsampled the majority group to reduce the imbalance from roughly 1% to 5% while ensuring that the distribution of the subsampled majority-group examples is nearly identical to the full distribution via a Kolmogorov-Smirnov test. The random forest model also penalizes misclassifications of the minority group five times more than misclassifications of the majority one.


<div class="figure-2">
  <div class="illustration">
    <img src="/papers/bobra-ebt-1/dda-fig-2.png" alt="Map of California, showing suspicious transactions clustered around the Bay Area, Sacramento, Los Angeles, and San Diego" />
  </div>
  <div class="caption">
    <b>Figure 2.</b> The map shows the output of the machine learning algorithm. The red dots indicate retail locations with suspicious transactions, while the blue dots indicate retail locations with legitimate transactions. The main panel shows the entire State of California and the smaller panel zooms into the LA Basin.
  </div>
</div>

Calculating the accuracy of the predictions – that is, how often a model was right – on an imbalanced dataset can be deceptively positive. For example, simply predicting that every transaction is legitimate would lead to an accuracy of 99%, but this model would have no skill in predicting theft. Instead, we calculated how often the model correctly identified an unauthorized transaction. In our case, this value, also known as the True Positive Rate, is 82%. For a model trained on an imbalanced dataset like this one, where 1% of the data describe theft, a True Positive Rate of 82% indicates a fairly high predictive capacity. In our recommendations section, we outline future ways to improve the model.

Finally, we implemented a method called counterfactual examples to understand how each individual feature of the model contributes to the overall probability of theft.

Counterfactual examples perturb the input example until the model produces a different outcome (for example, [Mothilal et al. 2020](https://dl.acm.org/doi/10.1145/3351095.3372850)). We quantify the change in probability per change in value for any given feature by looking at the difference in the original and perturbed example. Perturbations of the most predictive feature resulted in the largest change in probability. The most predictive features are omitted in this article for operational security reasons.

## Impact

Here we describe the impact of this collaborative effort.

1. **Built capacity.** CDSS now has increased capability to use large datasets, cloud computing, and machine learning algorithms to fight benefit theft.
2. **Reduced the lag time in measuring EBT theft by 95%, from 2 months to 72 hours.** This means CDSS can deliver more timely information on the scale and trend of EBT theft to all stakeholders.
3. **Reduced the time staff spent collecting and preparing data for analysis by 100%.** This saves 2,160 staff hours annually. Now CDSS staff can conduct more research and run more experiments.
4. **Improved ability to correctly identify specific unauthorized transactions.** The machine learning model correctly identifies 82% of unauthorized transactions. Crucially, CDSS can also explain why a transaction is flagged.
5. **Improved awareness about where EBT theft occurs.** CDSS can now identify geographic theft hotspots because they know the geographic coordinates for each transaction.

## What’s next

This work is far from over. CDSS will build off this project in several ways to better fight EBT theft with well-designed and -timed interventions.

* Use the data pipeline and modeling to identify where and when EBT theft occurs, which cards are compromised, and where skimmers might be located. Use these insights to target interventions to protect benefits. At least 1 theft prevention intervention has been implemented based on this work, and more are in development.

* Monitor the impact of upgrades to EBT card technology. California is the first state in the nation to roll out [chip and tap cards for EBT benefits](https://www.cdss.ca.gov/inforesources/cdss-programs/ebt/ebt-electronic-theft-resources).
* Explore how time-series forecasting may improve our labeling of theft transactions by better capturing temporal dependence and trends. Right now, our model mostly considers each data point as temporally independent.
* Extend this modeling work to also identify which food purchase transactions are theft events. This work was focused on labeling which cash withdrawal transactions were theft, but future efforts will attempt to use this data pipeline to model food theft transactions.
* Continue to improve this data pipeline over time by refining our methodology to obtain complete addresses and carrying out additional data engineering.

## References

Chawla, Nitesh V., et al. "SMOTE: synthetic minority over-sampling technique." Journal of artificial intelligence research 16 (2002): 321-357. https://doi.org/10.1613/jair.953

Fabian, Pedregosa. (2011). Scikit-learn: Machine learning in Python. Journal of machine learning research 12, 2825. https://jmlr.org/papers/volume12/pedregosa11a/pedregosa11a.pdf

Grisel, Oliver et al. (2024). scikit-learn/scikit-learn: Scikit-learn 1.4.1.post1 (1.4.1.post1). Zenodo. https://doi.org/10.5281/zenodo.10666857

Grover, Prince, et al. "Fraud Dataset Benchmark and Applications." arXiv preprint arXiv:2208.14417 (2022). https://arxiv.org/abs/2208.14417

Le Borgne et al. "Reproducible Machine Learning for Credit Card Fraud Detection", 2002. https://fraud-detection-handbook.github.io/fraud-detection-handbook/

Mothilal, R. K., Sharma, A., & Tan, C. (2020, January). Explaining machine learning classifiers through diverse counterfactual explanations. In Proceedings of the 2020 conference on fairness, accountability, and transparency (pp. 607-617). https://doi.org/10.1145/3351095.3372850

Office of Data and Innovation. “Data and Innovation Fund.” innovation.ca.gov, 11 September 2024, https://innovation.ca.gov/data-and-innovation-fund.

## Authors

<div class="author-section">
    <div class="author">
        <p class="author-name">Monica Bobra</p>
        <p class="author-title">Principal Data Scientist</p>
        <p class="author-email">
            <a href="mailto:monica.bobra@innovation.ca.gov">monica.bobra@innovation.ca.gov</a>
        </p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Methodology, formal analysis, investigation, writing – original draft</p>
        </div>
        <p class="author-id">
            <a href="https://orcid.org/0000-0002-5662-9604"><img class="orcid-cite" src="/img/orcid-icon.svg" alt="ORCiD icon" />https://orcid.org/0000-0002-5662-9604</a>
        </p>
    </div>
    <div class="author">
        <p class="author-name">Esa Eslami</p>
        <p class="author-title">Analytics Manager</p>
        <p class="author-email">
            <a href="mailto:esa.eslami@innovation.ca.gov">esa.eslami@innovation.ca.gov</a>
        </p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Project administration</p>
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
        <p class="author-name">Ian Rose</p>
        <p class="author-title">Principal Data Engineer</p>
        <p class="author-email">
            <a href="mailto:ian.rose@innovation.ca.gov">ian.rose@innovation.ca.gov</a>
        </p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Software, data curation, resources</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Jason Lally</p>
        <p class="author-title">Chief Data Officer</p>
        <p class="author-email">
            <a href="mailto:jason.lally@innovation.ca.gov">jason.lally@innovation.ca.gov</a>
        </p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Project administration, resources, funding acquisition</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Peter Amerkhanian</p>
        <p class="author-title">Research Data Specialist I</p>
        <p class="author-org">California Department of Social Services – Research, Data, and Automation Division</p>
        <div class="author-role">
            <p>Roles: Conceptualization, methodology, investigation, validation</p>
        </div>
        <p class="author-id">
            <a href="https://orcid.org/0009-0001-7070-3620"><img class="orcid-cite" src="/img/orcid-icon.svg" alt="ORCiD icon" />https://orcid.org/0009-0001-7070-3620</a>
        </p>
    </div>
    <div class="author">
        <p class="author-name">Kimberly Hicks</p>
        <p class="author-title">Deputy Director, Advanced Analytics & Evaluation</p>
        <p class="author-org">California Office of Data and Innovation, 401 I Street, Ste 200, Sacramento, CA 95814</p>
        <div class="author-role">
            <p>Roles: Project administration, resources, funding acquisition</p>
        </div>
        <p class="author-email">
            <a href="mailto:kimberly.hicks@innovation.ca.gov">kimberly.hicks@innovation.ca.gov</a>
        </p>
    </div>
    <div class="author">
        <p class="author-name">Daniel Rodda</p>
        <p class="author-title">Research Data Supervisor I</p>
        <p class="author-org">California Department of Social Services – Research, Data, and Automation Division</p>
        <div class="author-role">
            <p>Roles: Conceptualization, methodology, investigation, validation, project administration, supervision, writing – review & editing</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Konrad Franco</p>
        <p class="author-title">Research Data Specialist III</p>
        <p class="author-org">California Department of Social Services – Research, Data, and Automation Division</p>
        <div class="author-role">
            <p>Roles: Software, data curation, validation</p>
        </div>
        <p class="author-id">
            <a href="https://orcid.org/0000-0002-5774-1956"><img class="orcid-cite" src="/img/orcid-icon.svg" alt="ORCiD icon" />https://orcid.org/0000-0002-5774-1956</a>
        </p>
    </div>
    <div class="author">
        <p class="author-name">Joaquin Carbonell</p>
        <p class="author-title">Research Data Supervisor II</p>
        <p class="author-org">California Department of Social Services – Research, Data, and Automation Division</p>
        <div class="author-role">
            <p>Roles: Conceptualization, resources, funding acquisition, project administration, supervision, writing – review & editing</p>
        </div>
        <p class="author-id">
            <a href="https://orcid.org/0009-0001-2422-6210"><img class="orcid-cite" src="/img/orcid-icon.svg" alt="ORCiD icon" />https://orcid.org/0009-0001-2422-6210</a>
        </p>
    </div>
    <div class="author">
        <p class="author-name">Batool Hasanzadeh</p>
        <p class="author-title">Research Data Specialist II</p>
        <p class="author-org">California Department of Social Services – Research, Data, and Automation Division</p>
        <div class="author-role">
            <p>Roles: Conceptualization, methodology, investigation, validation</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">J. Steven Raquel</p>
        <p class="author-title">Research Data Specialist I</p>
        <p class="author-org">California Department of Social Services – Research, Data, and Automation Division</p>
        <div class="author-role">
            <p>Roles: Conceptualization, methodology, investigation, validation</p>
        </div>
        <p class="author-id">
            <a href="https://orcid.org/0000-0001-8775-4996"><img class="orcid-cite" src="/img/orcid-icon.svg" alt="ORCiD icon" />https://orcid.org/0000-0001-8775-4996</a>
        </p>
    </div>
    <div class="author">
        <p class="author-name">Neelam Joshi</p>
        <p class="author-title">Information Technology Specialist III</p>
        <p class="author-org">California Department of Social Services – Research, Data, and Automation Division</p>
        <div class="author-role">
            <p>Roles: Software, data curation, validation</p>
        </div>
    </div>
    <div class="author">
        <p class="author-name">Brenda Moran</p>
        <p class="author-title">Research Analyst I</p>
        <p class="author-org">California Department of Social Services – Research, Data, and Automation Division</p>
        <div class="author-role">
            <p>Roles: Validation, writing – review & editing</p>
        </div>
    </div>
</div>

Roles use the [CRediT taxonomy](https://credit.niso.org).
