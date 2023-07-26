import { TruncateProps } from "./interfaces"
import moment from "moment"

 function truncate({ text, startChars, endChars, maxLength }: TruncateProps): string {
    if (text.length > maxLength) {
      let start = text.substring(0, startChars)
      let end = text.substring(text.length - endChars, text.length)
      while (start.length + end.length < maxLength) {
        start = start + '.'
      }
      return start + end
    }
    return text
  }
  
const daysRemaining = (days:any) => {
    const todaysdate = moment()
    days = Number((days + '000').slice(0))
    days = moment(days).format('YYYY-MM-DD')
    days = moment(days)
    days = days.diff(todaysdate, 'days')
    return days == 1 ? '1 day' : days + ' days'
  }

  export {
    truncate,
    daysRemaining

  }