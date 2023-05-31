<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

Don't forget to hit the :star: if you like this repo.

# Installation PlantUML
[PlantUML](https://plantuml.com/) is an open-source tool that allows users to create UML (Unified Modeling Language) diagrams quickly and easily. It uses a simple and intuitive syntax to generate diagrams in a variety of formats, including PNG, SVG, and PDF.

One of the key features of PlantUML is its ability to generate diagrams from plain text. This means that users can write their diagrams using a simple syntax, without needing to learn a complex GUI. For example, to create a class diagram, a user can simply write out the class and its attributes and methods using a specific syntax, and PlantUML will generate the diagram automatically.

PlantUML supports a wide variety of diagram types, including class diagrams, use case diagrams, sequence diagrams, activity diagrams, and more. It also allows users to customize their diagrams by specifying colors, fonts, and other visual properties.

Overall, PlantUML is a powerful and flexible tool for creating UML diagrams, and is widely used by developers, designers, and other professionals in a variety of industries.

## Install PlantUML in Microsoft Visual Studio Code

1. Open Visual Studio Code and click on the "Extensions" icon on the left-hand side of the window.
2. Search for "PlantUML" in the search bar at the top of the window.
3. Click on the "Install" button next to the "PlantUML" extension.
4. Once the installation is complete, click on the "Reload" button to activate the extension.
5. You may also need to install Graphviz, which is a prerequisite for PlantUML. To do this, visit the Graphviz website (https://graphviz.org/download/) and download and install the appropriate version for your operating system.
6. After installing Graphviz, you will need to add it to your system's PATH environment variable. To do this on Windows, follow these steps:
   - Open the Start menu and search for "Environment Variables."
   - Click on the "Edit the system environment variables" option.
   - Click on the "Environment Variables" button at the bottom of the window.
   - In the "System Variables" section, scroll down and select the "Path" variable, then click on the "Edit" button.
   - Click on the "New" button and add the path to the Graphviz bin directory (e.g. "C:\Program Files (x86)\Graphviz2.38\bin") to the list of paths.
   - Click "OK" to close all the windows.

You should now be able to use PlantUML within Visual Studio Code to create UML diagrams.

## Graphviz
Graphviz is a graph visualization software that is used by PlantUML to render the UML diagrams that you create. PlantUML generates the source code for the diagrams, but Graphviz is responsible for actually rendering the diagrams as images. Without Graphviz, PlantUML would be unable to display the UML diagrams that you create.

In particular, Graphviz is used by PlantUML to create the layout and positioning of the elements in the diagrams, such as nodes and edges. It uses a set of algorithms to create an optimal layout of the diagram, based on the relationships between the elements. Graphviz supports various layout algorithms, such as hierarchical, radial, and orthogonal, among others.

The size of Graphviz can vary depending on the version and the operating system you are using. Generally, the download size of Graphviz is around 30-40 MB. However, once installed, the size of the Graphviz installation may be larger due to the additional files and libraries that are required to run the software.

For example, the current version of Graphviz (2.49.3) for Windows has a download size of around 43 MB. Once installed, the size of the Graphviz directory on disk is around 200 MB. On Linux systems, the download size of Graphviz may be smaller, typically around 10-20 MB.

Therefore, Graphviz is a necessary component of the PlantUML software and must be installed on your system to use PlantUML effectively.

## Java Runtime Environment (JRE)

PlantUML is a Java-based tool that is used to generate UML diagrams using textual descriptions. The PlantUML engine itself is a Java application, and it requires a Java Runtime Environment (JRE) to be installed on the system in order to run.

When you use the PlantUML extension in Visual Studio Code, the extension uses the PlantUML engine to parse the textual descriptions of UML diagrams and generate images of the diagrams. The JRE is required to execute the PlantUML.jar file, which is the executable file for the PlantUML engine.

Without the JRE installed on your system, the PlantUML engine will not be able to run, and you will not be able to generate UML diagrams using the PlantUML syntax.

The size of the Java Runtime Environment (JRE) varies depending on the version and the platform you are downloading it for.

As of April 2023, the latest version of Java is Java 17. The size of the JRE for Windows is approximately 177 MB for the 64-bit version and 176 MB for the 32-bit version. The size of the JRE for macOS is around 100 MB.

Therefore, the JRE is an essential component of the PlantUML ecosystem, and must be installed on your system in order to use PlantUML effectively in Visual Studio Code or any other environment.

## Install both Graphviz and JRE
Both Graphviz and JRE are required to use PlantUML in Visual Studio Code. 

The PlantUML extension for Visual Studio Code generates UML diagrams using the PlantUML syntax, and then relies on Graphviz to render the diagrams as images. The PlantUML extension also requires JRE to be installed to execute the PlantUML.jar file.

Therefore, to use PlantUML effectively in Visual Studio Code, you will need to install both Graphviz and JRE on your system.

Here are the steps to install both Graphviz and JRE for use with the PlantUML extension in Visual Studio Code:

1. Install JRE on your system by downloading and installing the latest version from the Java download page at [http://www.java.com](https://www.java.com/en/download/manual.jsp).
2. Install Graphviz on your system by downloading and installing the latest version from the Graphviz download page at https://graphviz.org/download/.
3. After both JRE and Graphviz are installed, open Visual Studio Code and install the PlantUML extension.
4. You should now be able to create and render UML diagrams using the PlantUML syntax in Visual Studio Code.

It's important to note that Graphviz and JRE are separate software packages and must be installed separately. Without both of these tools, you will not be able to use PlantUML effectively in Visual Studio Code.


## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://komarev.com/ghpvc/?username=drshahizan&label=Views&color=0e75b6&style=flat)

