---
sidebar_position: 2
---

# Profile Migration

There are changes in the profile structure in v12.
Migration work is required for continued use.

## Windows

:::danger

Be sure to back up all Floorp Portable data before starting work.

:::

1. First, run new Floorp Portable.
2. When the setup page (about:setup) appears, quit Floorp Portable.
3. Delete all files in `.\data\Floorp\Profiles\xxxxxxxx.default-release` (xxxxxxxx is random).
4. Copy all files in `.\Profiles` to `.\data\Floorp\Profiles\xxxxxxxx.default-release` (xxxxxxxx is random).
5. Delete `.\data\Cache` folder.
6. Run new Floorp Portable.
7. After confirming that Floorp Portable is working properly, Delete `.\Profiles` folder.

## Linux

:::danger

Be sure to back up all Floorp Portable data before starting work.

:::

1. Create `./data` directory.
2. Copy all files in `./profiles` to `./data/.floorp`.
3. Delete `./cache` directory.
4. Run new Floorp Portable.
5. After confirming that Floorp Portable is working properly, Delete `./profiles` directory.
