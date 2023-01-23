# How to Update All Python Packages

Updated `09252022-060349`

- [Source](https://www.activestate.com/resources/quick-reads/how-to-update-=
all-python-packages/)
- [WTF](https://davidblue.wtf/drafts/EFF9B7B5-25A6-4B07-8860-EFDB587D87BB.h=
tml)
- [Archive](http://web.archive.org/web/20220925091221/https://www.activesta=
te.com/resources/quick-reads/how-to-update-all-python-packages/)
- [pip Update Shortcut](drafts://open?uuid=3D84F3BCEE-4BA4-43B3-A85E-45EA84=
10FA19)
- [Medium](https://medium.com/handset/how-to-update-all-python-packages-wit=
h-a-single-pip-command-dc0657f0dc7d)
- [Telegraph](https://telegra.ph/How-to-Update-all-Python-Packages-with-a-S=
ingle-pip-Command-09-25)
- [How to Update All Python Packages](https://chaff.writeas.com/how-to-upda=
te-all-python-packages)

---

**Shell Commands**

```shell
pip list --outdated
pip freeze | %{$_.split('=3D=3D')[0]} | %{pip install --upgrade $_}
pip3 list --outdated --format=3Dfreeze | grep -v '^\-e' | cut -d =3D -f 1 |=
 xargs -n1 pip3 install -U
pip3 list -o | cut -f1 -d' ' | tr " " "\n" | awk '{if(NR>=3D3)print)' | cut=
 -d' ' -f1 | xargs -n1 pip3 install -U
pip freeze > requirements.txt
pip install -r requirements.txt --upgrade
pipenv shell
pipenv update
```

**Python Script**

```python
import pkg_resources from subprocess import call for dist in pkg_resources.=
working_set:     call("python -m pip install --upgrade " + dist.<projectnam=
e>, shell=3DTrue)
```

---

![PsalmsPyPi](https://user-images.githubusercontent.com/43663476/192139585-=
4ab7baac-b9c3-4ab4-a334-3eea9e9a85df.png)

# How to Update All Python Packages

With Python, the best practice of pinning all the packages in an environmen=
t at a specific version ensures that the environment can be reproduced mont=
hs or even years later.

- Pinned packages in a requirements.txt file are denoted by `=3D=3D`. For e=
xample, `requests=3D=3D2.21.0`. Pinned packages should never be updated exc=
ept for a very good reason, such as to fix a critical bug or vulnerability.
- Conversely, unpinned packages are typically denoted by `>=3D`, which indi=
cates that the package can be replaced by a later version. Unpinned package=
s are more common in development environments, where the latest version can=
 offer bug fixes, security patches and even new functionality.

As packages age, many of them are likely to have vulnerabilities and bugs l=
ogged against them. In order to maintain the security and performance of yo=
ur application, you=E2=80=99ll need to update these packages to a newer ver=
sion that fixes the issue.

The [pip package manager] can be used to update one or more packages system=
-wide. However, if your deployment is located in a virtual environment, you=
 should use the Pipenv package manager to update all Python packages.=20

~~
**NOTE:** be aware that upgrading packages can break your environment by in=
stalling incompatible dependencies. This is because pip and pipenv do not r=
esolve dependencies.
~~

## Python Package Upgrade Checklist

In general, you can use the following steps to perform a package upgrade:

1. Check that Python is installed

Before packages can be updated, ensure that a Python installation containin=
g the necessary files needed for updating packages is in place by following=
 the steps outlined in "[Using Python on Windows]" in the official document=
ation.

2. Get a list of all the outdated packages

To generate a list of all outdated packages:

```shell
pip list --outdated
```

3. Upgrade outdated packages

Depending on your operating system or virtual environment, refer to the fol=
lowing sections.

The easiest way to update all packages in a Windows environment is to use p=
ip in conjunction with Windows PowerShell:

1. Open a command shell by typing `powershell` in the Search Box of the Tas=
k bar
2. Enter:

```shell
pip freeze | %{$_.split('=3D=3D')[0]} | %{pip install --upgrade $_}

```

This will upgrade all packages system-wide to the latest version available =
in the Python Package Index (PyPI).

## Update all Python Packages on Linux

Linux provides a number of ways to use pip in order to upgrade Python packa=
ges, including grep and awk.

To upgrade all packages using pip with grep on Ubuntu Linux:

```shell
pip3 list --outdated --format=3Dfreeze | grep -v '^\-e' | cut -d =3D -f 1 |=
 xargs -n1 pip3 install -U
```

To upgrade all packages using pip with awk on Ubuntu Linux:

```shell
pip3 list -o | cut -f1 -d' ' | tr " " "\n" | awk '{if(NR>=3D3)print)' | cut=
 -d' ' -f1 | xargs -n1 pip3 install -U
```

## Updating Python Packages on Windows or Linux

Pip can be used to upgrade all packages on either Windows or Linux:

1. Output a list of installed packages into a requirements file (requiremen=
ts.txt):

```shell
pip freeze > requirements.txt
```

1. Edit requirements.txt, and replace all =E2=80=98=3D=3D=E2=80=99 with =E2=
=80=98>=3D=E2=80=99. Use the =E2=80=98Replace All=E2=80=99 command in the e=
ditor.
2. Upgrade all outdated packages:

```shell
pip install -r requirements.txt --upgrade
```

## Updating all Packages in a Virtual Environment

The easiest way to update unpinned packages (i.e., packages that do not req=
uire a specific version) in a virtual environment is to run the following P=
ython script that makes use of pip:

```python
import pkg_resources from subprocess import call for dist in pkg_resources.=
working_set:     call("python -m pip install --upgrade " + dist.<projectnam=
e>, shell=3DTrue)
```

## Updating all Packages in a Pipenv Environment

The simplest way to update all the unpinned packages in a specific virtual =
environment created with pipenv is to do the following steps:

1. Activate the Pipenv shell that contains the packages to be upgraded:

```shell
pipenv shell
pipenv update
```
