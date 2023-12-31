import { format, parseISO } from "date-fns";

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "MMMM dd, yyyy")}</time>;
}
