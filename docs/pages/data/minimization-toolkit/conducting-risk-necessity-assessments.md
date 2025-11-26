---
layout: page
title: Conducting risk and necessity assessments
parentid: Data minimization toolkit
parentidlink: /data/minimization-toolkit/
description: Identify data problems before they happen by understanding and evaluating risk and necessity
headerlabel: Guides and playbooks
headericon: book
---

A risk assessment is a step-by-step way to identify problems before they happen. It lets you make proactive choices about how to safely collect, store, and use data. These potential problems might affect:

* The people whose data you’re collecting
* Your department’s operations and reputation
* The fairness or safety of a program or research project

## Understanding risk

### Personal data 

State departments often collect personal details from the people they serve. This is called personally identifiable information (PII).

[California Civil Code section 1798.3](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.3.&lawCode=CIV) defines PII. It is any information that can identify a person. For example:

* Name
* Home address
* Phone number
* Email
* Date of birth
* Social Security number
* Driver’s license or ID number
* Health records
* Financial accounts
* Immigration or citizenship status
* Race and ethnicity
* Gender identity  

### Sensitive data

Some PII should be treated with extra care because of the high level of risk if it’s misused. This is called sensitive data. This type of data gets more security and stricter rules than other PII. For example: 

* Social Security number
* Medical records
* Financial accounts
* Criminal records 

### Indirect identifiers

Indirect identifiers are data that do not directly reveal someone’s identity. But it might identify them if it is combined with other data.

For example, a department might have a dataset with a person's age and city. If this is combined with other public records, it could link back to that person.

Examples of indirect identifiers include: 

* Geographic data (like zip code)
* Transportation or location data
* Online or digital use data (like IP address)
* Anonymous survey responses that may contain identifying information
* Demographic data (like primary language spoken at home)

### Potential data privacy risks

When you collect or store data (especially sensitive information) think about how the data might harm the people it’s about. Even with good intentions, collecting or using data improperly can lead to issues.

If your department doesn’t handle data  with care, it could face:

* **Legal consequences** like fines, lawsuits, or investigations for not following privacy laws
* **Loss of public trust** which can hurt participation in programs or damage your department’s reputation
* **Higher costs and more work** to manage, store, protect, or delete large amounts of personal data
* **Identification risks or privacy data leaks** that cause harm
* **Errors** caused by unclear or inconsistent data practices across programs or teams

Make people feel safe when you collect data from them. A risk assessment helps you check that you’re asking for the right data, at the right time, for the right reasons. Understanding the risks to your department isn’t just about avoiding problems. It lets you plan ahead, make smarter decisions, and align program staff and leadership.

Knowing the risks also helps your team focus on what matters most. You can develop mitigation strategies that:

* Address high-impact areas
* Reduce unnecessary data collection
* Make sure your practices are aligned with laws, policies, and public expectations

## How to evaluate risk

To protect data, you need to know what personal and sensitive information your department collects and where it lives. This is called data mapping.

It helps answer questions like:

* What types of personal information do we collect?
* Where is it stored (on paper, in databases, on staff computers)?
* Who can access it?
* Is it shared with anyone outside the department? If so, who is it shared with?
* Do you have policies or guidelines on how you can use the data?
* Do you still need it or can you delete it?

Mapping your data helps you identify risks and protect the information you collect. The California Department of Technology (CDT)'s [Privacy Threshold Assessment & Impact Assessment](https://cdt.ca.gov/services/wp-content/uploads/sites/2/2023/10/07-Privacy-Threshold-and-Impact-Analysis-SIMM-5310-C-2.docx) guide is the best starting point. CDT developed this guide to help departments comply with privacy requirements.

To start mapping your data, follow these steps: 

1. **Talk to your staff.** Ask the people who collect data what they gather, how they get it, and what they do with it.
2. **Review forms and applications.** Check for fields that ask for sensitive data.
3. **Follow the data trail.** Use a diagram to map how data moves from the public to your department and between departments, contractors, or other departments.
4. **Check your systems.** Work with IT to review databases and files. Look for reports or backups with personal information. Make sure they're protected with passwords, access limits, and encryption.
5. **Create an inventory list.** Include the type of data, where it’s collected and stored, why it’s collected, who can access it, and how long it’s kept.

This can help you fill out CDT’s Privacy Threshold Assessment & Impact Assessment or make your own data inventory. 

## How to evaluate necessity 

After mapping your data you can start a **necessity assessment**. This can help get to the true business need of your data holdings. The guiding principle here should be to collect what you need, not what you might need. When you default to less you reduce your risk by storing less sensitive information.

### The 3 steps of a necessity assessment

#### 1. Define the purpose

For every piece of data on your inventory, define its specific purpose. For example, if you collect someone's date of birth, is it for age verification, or is it just a field in a form?

#### 2. Assess necessity

Ask if the data is **absolutely essential** to achieve its purpose. Can your service or program function effectively without this information? Look for less intrusive alternatives. Don't collect data just because you might find a use for it down the line (like a future project). If you can't state a valid reason, you don’t collect it at all.

For example, instead of collecting a full address, could a zip code be enough? Can you use data you already have? Or can you use aggregated, anonymized, or pseudonymous data to get you the insights you need? That reduces the privacy risks that come with personally identifiable information.

#### 3. Weigh the risks and benefits

Decide if the benefit of collecting the data outweighs the privacy risks to people. 

Consider the **volume, sensitivity, and retention period**. A large volume of highly sensitive data poses a much greater risk than a small amount of less sensitive data, like a name. And the longer you keep the data, the greater the risk. If the potential harm is big and the benefit of having the data is small, don’t collect it.

<div class="leftright-nav-container">
    <div class="left-nav"><a class="internal-link" href="/data/minimization-toolkit/best-practices/">Best practices for data minimization</a></div>
    <div class="right-nav"><a class="internal-link" href="data/minimization-toolkit/external-sharing/">External data sharing</a></div>
</div>
