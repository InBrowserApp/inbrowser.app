function getDescriptionUrl(appId: string) {
  return new URL(`../raw/${appId}/description.md`, import.meta.url).href;
}

export async function getDescription(appId: string): Promise<string> {
  const url = getDescriptionUrl(appId);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return await response.text();
}
