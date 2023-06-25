const formatTime = (timeString: string): string => {
    const timeParts: string[] = timeString.split(':');
    const hours: string = timeParts[0].toString().padStart(2, '0');
    const minutes: string = timeParts[1].toString().padStart(2, '0');
    return `${hours} giờ ${minutes} phút`;
};

export const formatDate = (dateTimeString: string): string => {
    const dateTimeParts: string[] = dateTimeString.split(' ');
    const time: string = dateTimeParts[0];
    const date: string = dateTimeParts[1];

    const formattedTime: string = formatTime(time);

    const dateParts: string[] = date.split('/');
    const day: number = parseInt(dateParts[0]);
    const month: number = parseInt(dateParts[1]);
    const year: number = parseInt(dateParts[2]);

    const formattedDate: string = `${day}/${month}/${year}`;

    return `${formattedTime}, ngày ${formattedDate}`;
};