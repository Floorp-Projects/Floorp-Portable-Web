function getPlatformFromAssetName(name: string) {
  const result = {
    os: null,
    arch: null,
  };

  if (name.includes('windows')) {
    result.os = 'Windows';

    if (name.includes('x86_64')) {
      result.arch = '64-bit';
    }
  }

  if (name.includes('linux')) {
    result.os = 'Linux';

    if (name.includes('x86_64')) {
      result.arch = '64-bit';
    }
    if (name.includes('aarch64')) {
      result.arch = 'ARM64';
    }
  }

  return result;
}

export async function getLatestReleaseAssets() {
  let result;
  try {
    result = await fetch(`/api/portable-latest-release`);
  } catch (e) {
    console.error(e);
    return [];
  }
  if (!result.ok) {
    return [];
  }

  const data = await result.json();

  const assets = data.assets;

  const r_data = [];
  for (const asset of assets) {
    const platform = getPlatformFromAssetName(asset.name);

    const target = r_data.filter(item => item.platform == platform.os)?.[0];
    if (target) {
      target.assets.push({
        name: `${platform.os} ${platform.arch}`,
        href: asset.browser_download_url,
      });
    } else {
      r_data.push({
        platform: platform.os,
        assets: [
          {
            name: `${platform.os} ${platform.arch}`,
            href: asset.browser_download_url,
          }
        ]
      });
    }
  }

  return r_data;
}
