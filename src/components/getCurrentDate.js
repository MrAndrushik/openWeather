export const getCurrentDate = (date) => {
    const newDate = new Date(date * 1000);
    // const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const days = newDate.getDate();
    const monthArr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    return `${monthArr[month]} ${days}`;
};
