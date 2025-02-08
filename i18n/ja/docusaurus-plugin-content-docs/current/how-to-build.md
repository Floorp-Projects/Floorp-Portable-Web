---
sidebar_position: 4
---

# ビルド方法 (上級者向け)

## 要件

* Windows
  * OS バージョン: 10, 11
  * アーキテクチャ: x86_64
  * メモリ: 8GB+
  * ストレージ: 最低でも4GBの空き容量
  * ソフトウェア: MSYS2
  * パッケージ: make, mingw-w64-x86_64-gcc, mingw-w64-x86_64-go, git, unzip, mingw-w64-x86_64-7zip, mingw-w64-x86_64-jq
* Linux
  * アーキテクチャ: x86_64, aarch64
  * メモリ: 8GB+
  * ストレージ: 最低でも2GBの空き容量
  * パッケージ: glibc, gtk+, libstdc++, xorg, git, unzip, zip, jq, golang 1.23+

## ビルド手順

### 1. 要件のインストール

#### Windows
1. MSYS2 MinGW64 シェルを実行します
2. パッケージをインストールします
   ```shell
   pacman -Syu make mingw-w64-x86_64-gcc mingw-w64-x86_64-go git unzip mingw-w64-x86_64-7zip mingw-w64-x86_64-jq
   ```

#### Linux
1. Bash を実行します
2. パッケージをインストールします
   各ディストリビューションのパッケージマネージャを使用して、[パッケージ](#requirements)をインストールします

### 2. Floorp-Portable のソースコードを取得します
```shell
git clone --recursive https://github.com/Floorp-Projects/Floorp-Portable
cd Floorp-Portable
```

### 3. Floorp のファイルを設置します
`core`という名前のフォルダを作成し、その中にFloorp のファイルを設置します。

#### Windows
```shell
curl -L "https://github.com/Floorp-Projects/Floorp/releases/latest/download/floorp-win64.installer.exe" -o floorp-win64.installer.exe
7z x floorp-win64.installer.exe '-ir!core'
```

#### Linux
```shell
export FLOORP_VERSION="{version}" # Replace "{version}" with latest floorp version, for example: `export FLOORP_VERSION="11.19.1"`
curl -L "https://github.com/Floorp-Projects/Floorp/releases/download/v${FLOORP_VERSION}/floorp-${FLOORP_VERSION}.linux-$(uname -m).tar.bz2" -o floorp-files.tar.bz2
mkdir core
tar -xvf floorp-files.tar.bz2 -C core --strip-components 1
```

### 4. ビルド
```shell
./build.sh
```

### 5. これで完了です
`dist`ディレクトリの中にあるファイルやディレクトリが実行に必要です。
