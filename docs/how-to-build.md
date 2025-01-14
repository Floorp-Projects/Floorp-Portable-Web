---
sidebar_position: 4
---

# How to build (for advanced users)

## Requirements

* Windows
  * OS Version: 10, 11
  * Architecture: x86_64
  * Memory: 8GB+
  * Disk Space: At least 4GB of free disk space.
  * Softwares: MSYS2
  * Packages: mingw-w64-x86_64-gcc, mingw-w64-x86_64-go, git, unzip
* Linux
  * Architecture: x86_64, aarch64
  * Memory: 8GB+
  * Disk Space: At least 2GB of free disk space.
  * Packages: glibc, gtk+, libstdc++, xorg, git, unzip, zip, jq, golang 1.23+

## Build Steps

### 1. Get Floorp-Portable source code
```
git clone --recursive https://github.com/Floorp-Projects/Floorp-Portable
cd Floorp-Portable
```

### 2. Install Floorp
Create a directory named `core` and place Floorp files in it.

#### Windows
```powershell
curl.exe -L "https://github.com/Floorp-Projects/Floorp/releases/latest/download/floorp-win64.installer.exe" -o floorp-win64.installer.exe
.\src\utils\7za.exe x floorp-win64.installer.exe -ir!core
```

#### Linux
```shell
export FLOORP_VERSION="{version}" # Replace "{version}" with latest floorp version, for example: `export FLOORP_VERSION="11.19.1"`
curl -L "https://github.com/Floorp-Projects/Floorp/releases/download/v${FLOORP_VERSION}/floorp-${FLOORP_VERSION}.linux-$(uname -m).tar.bz2" -o floorp-files.tar.bz2
mkdir core
tar -xvf floorp-files.tar.bz2 -C core --strip-components 1
```

### 3. Build

#### Windows
```
.\build.bat
```

#### Linux
```
./build.sh
```

### 4. Now it is done
The files or directories required to run are those in the `dist` directory.
