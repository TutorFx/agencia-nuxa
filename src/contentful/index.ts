import contentful from 'contentful';

const config = () => {
  const config = useRuntimeConfig();
  if (!config.CTF_SPACE_ID) throw new Error('CTF_SPACE_ID not defined');
  if (!config.CTF_CDA_ACCESS_TOKEN) throw new Error('CTF_CDA_ACCESS_TOKEN not defined');
  return {
    space: config.CTF_SPACE_ID ?? '' as string,
    accessToken: config.CTF_CDA_ACCESS_TOKEN ?? '' as string,
  }
};

export const createContent = () => {
  return contentful.createClient(config())
}