export function getDirectImageUrl(googleDriveUrl: string): string {
  const fileId = googleDriveUrl.match(/\/file\/d\/([^\/]+)\//)?.[1];
  return `https://drive.usercontent.google.com/download?id=${fileId}&export=view&authuser=0`;
}
