export const extractFileName = (filename) => {
  const extensionIndex = filename.indexOf('.');
  const pathWithoutExtension = filename.substring(0, extensionIndex);
  const lastSlashIndex = pathWithoutExtension.lastIndexOf('/');
  const extractFileName = pathWithoutExtension.substring(lastSlashIndex + 1);
  return extractFileName;
};
