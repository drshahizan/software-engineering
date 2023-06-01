<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

Don't forget to hit the :star: if you like this repo.

<!---
Module 8: Software Verification, Validation and Testing

Group F4
1. CHAI YU TONG
2. MUHAMMAD DANIAL BIN AHMAD SYAHIR
3. WONG QIAO YING
4. YEOH CHONG YI

-->

# Module 8: Software Verification, Validation and Testing 
Click [here](https://drive.google.com/drive/folders/1fFqVSa7WdQ2Uet0UdvbQcALUVcqme6gw) to access PDF file for this topic(other topics also can)

### Contents:
- [**Verification vs Validation(V&V)**](#verification-vs-validation-vv)

  - [**Definition**](#definition) 
  
  - [**Goals**](#goals)
   
  - [**Category**](#category)
   
  - [**Techniques**](#techniques)
   
  - [**Description**](#description)
  
  - [**Verification Inspection (Static) and Validation Testing (Dynamic)**](#verification-inspection-(static)-and-validation-testing-(dynamic))
#### Notes


### Others
- [Software Engineering | Introduction to Software Engineering](https://www.geeksforgeeks.org/software-engineering-introduction-to-software-engineering/)


# Verification vs Validation (V & V)

<p><img src="https://www.bplogix.com/hubfs/Verification%20vs.%20validation.png" alt="Verification & Validation"></p>

# Definition

   <b>Verification:</b>A process of determining if the software is designed and developed as per the specified requirements.
   
   <b>Validation:</b>The process of checking if the software (end product) has met the client's true needs and expectations.
   
 # Goals
  <p>The level of confidence needed will depend on the type of use the software is intended for. For example, software that is critical for human safety or security may require a higher degree of confidence than software used for less critical purposes.</p>

<p>Therefore, V&V processes should be tailored to the specific needs and requirements of each software project, taking into account factors such as the intended use, the potential risks and consequences of failure, and the available resources and constraints.</p>

 # Category
  <h1>Factors Affecting Software Confidence</h1>
	<h2>Software Function/Purpose</h2>
	<p>The level of confidence required for a software system depends on how critical it is to an organization. For example, safety-critical systems such as those used in aviation or medical devices require a higher level of confidence than non-critical systems.</p>
  <h2>User Expectations</h2>
<p>User expectations can also affect the level of confidence needed for a software system. Users may have low expectations of certain types of software based on their previous experiences or because they perceive it as unreliable. For example, newly installed software may be viewed as less reliable than software that has been used for a long time.</p>

<h2>Marketing Environment</h2>
<p>In some cases, getting a software product to market quickly may be more important than finding defects in the program. This may be due to competitive pressures or the need to secure a contract from a customer. However, releasing a program before it is fully tested can also lead to negative consequences such as loss of customer trust or even legal liability.</p>

# Techniques
<h2>Verification Techniques</h2>
<ul>
	<li>Prototyping</li>
	<li>Model Analysis (e.g. Model Checking) - can also be used for validation</li>
	<li>Inspection and Review (Static Testing)</li>
</ul>

<h2>Validation Techniques</h2>
<ul>
	<li>Software Testing (Dynamic Testing)</li>
	<li>Code Inspection (Static Analysis)</li>
</ul>

 <b>Independent V&V</b>

# Description
<p>Verification and validation are two key processes in software engineering that help ensure that software is of high quality and meets user requirements. Verification focuses on determining whether the software meets its specifications and requirements, while validation focuses on ensuring that the software meets the user's needs and expectations.</p>

<p>Verification techniques include prototyping, model analysis, and inspection and review. Prototyping involves creating a simplified version of the software to test its functionality and gather feedback from users. Model analysis techniques such as model checking can be used to analyze the behavior of the software and identify potential issues. Inspection and review techniques involve analyzing the software code and documentation for errors and defects.</p>

<p>Validation techniques include software testing and code inspection. Software testing involves running the software through a series of tests to ensure that it meets the user's requirements and works as expected. Code inspection involves analyzing the software code for errors, defects, and adherence to coding standards.</p>

# Verification Inspection (Static) and Validation Testing (Dynamic)
<h2>Inspections vs. Dynamic Testing</h2>
<p>Software inspections and reviews are a type of static testing that involve checking and analyzing the system's representation, such as the software code or documentation, to discover potential problems or defects. This type of testing is called "static" because it does not involve executing the software code. Instead, the focus is on reviewing the system's structure, design, and other static elements.</p>

<p>Inspections and reviews may be supported by tool-based document and code analysis, which is known as "static analysis". This can help automate some of the inspection process and identify potential issues that may be missed by manual inspection.</p>

<p>On the other hand, dynamic testing involves executing the software code with test data and observing its operational behavior to verify that it meets its requirements and works as intended. This type of testing is called "dynamic" because it involves actively exercising the system and observing its behavior in real-time.</p>

<p>Software testing is a key component of dynamic testing, and it involves creating test cases that exercise the system's various functions and features. Test cases are designed to simulate different scenarios and use cases that the system may encounter in the real world, and the results are compared against the expected results to determine whether the system behaves as intended.</p>
<p>Inspections and dynamic testing are both important V&V (verification and validation) techniques that can be used during the software development process to ensure that the software meets its requirements and is fit for purpose.</p>

<p>Inspections involve a structured review process that checks the conformance of the software with its specification or design. This type of testing is especially useful for detecting defects or errors in the software's structure or design, and can be applied to software code, documentation, or other system representations.</p>

<p>However, inspections are limited in their ability to check the conformance of the software with the customer's real requirements. This is because inspections typically focus on the software's structure and design, rather than its actual behavior or performance.</p>

<p>Dynamic testing, on the other hand, involves executing the software code with test data and observing its behavior to ensure that it meets its requirements and works as intended. This type of testing can be used to test both functional and non-functional characteristics of the software, such as performance, usability, and reliability.</p>

<p>Both inspections and dynamic testing should be used as part of the V&V process, as they complement each other and can help identify different types of defects or issues in the software. By using a combination of these techniques, software development teams can increase their confidence in the software's quality and fitness for purpose.</p>

  




## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://komarev.com/ghpvc/?username=drshahizan&label=Views&color=0e75b6&style=flat)
![](https://hit.yhype.me/github/profile?user_id=81284918)


