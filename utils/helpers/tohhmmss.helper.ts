export const toHHMMSS =  (dateNum: string) => {
  let sec_num = parseInt(dateNum, 10); // don't forget the second param
  let hours: any  = Math.floor(sec_num / 3600);
  let minutes: any = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds: any = sec_num - (hours * 3600) - (minutes * 60);

  if (minutes < 10) {minutes = minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return minutes+':'+seconds;
}