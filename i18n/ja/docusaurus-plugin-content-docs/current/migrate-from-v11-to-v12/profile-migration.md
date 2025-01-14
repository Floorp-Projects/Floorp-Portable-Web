---
sidebar_position: 2
---

# プロファイルの移行

v12 ではプロファイル構造に変更があります。
継続して使用するには移行作業が必要です。

## Windows

:::danger

作業を開始する前に、Floorp Portable のすべてのデータを必ずバックアップしてください。

:::

1. まず、新しい Floorp Portable を実行します。
2. セットアップページ（about:setup）が表示されたら、Floorp Portable を終了します。
3. `.\data\Floorp\Profiles\xxxxxxxx.default-release` 内のファイルをすべて削除します (xxxxxxxx はランダムです)。
4. `.\Profiles` 内のすべてのファイルを `.\data\Floorp\Profiles\xxxxxxxx.default-release` (xxxxxxxx はランダム) にコピーします。
5. `.\data\Cache` フォルダーを削除します。
6. 新しい Floorp Portable を実行します。
7. Floorp Portable が正常に動作していることを確認したら、`.\Profiles` フォルダーを削除します。

## Linux

:::danger

作業を開始する前に、Floorp Portable のすべてのデータを必ずバックアップしてください。

:::

1. `./data` ディレクトリを作成します。
2. `./profile` 内のすべてのファイルを `./data/.floorp` にコピーします。
3. `./cache` ディレクトリを削除します。
4. 新しい Floorp Portable を実行します。
5. Floorp Portable が正常に動作していることを確認したら、`./profiles` ディレクトリを削除します。
