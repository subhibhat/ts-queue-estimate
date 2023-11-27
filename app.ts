type Result = { months: number; days: number };

const calculateDaysToFinishQueue = (startingDay: string, totalQueue: number, queuesPerDay: number): Result => {
  const weekdaysPerMonth: number = 30; // สมมติให้ 1 เดือนมีเฉลี่ย 30 วัน

  let daysTaken: number = 0;
  let queuesLeft: number = totalQueue;
  let currentDay: string = startingDay;

  const getNextDay = (currentDay: string): string => {
    const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const currentIndex: number = daysOfWeek.indexOf(currentDay);
    const nextIndex: number = (currentIndex + 1) % 7; // เลื่อนไปวันถัดไป
    return daysOfWeek[nextIndex];
  };

  while (queuesLeft > 0) {
    if (currentDay !== 'Saturday' && currentDay !== 'Sunday') {
      queuesLeft -= queuesPerDay;
    }
    daysTaken++;
    currentDay = getNextDay(currentDay);
  }

  const monthsTaken: number = Math.floor(daysTaken / weekdaysPerMonth);
  const remainingDays: number = daysTaken % weekdaysPerMonth;

  return {
    months: monthsTaken,
    days: remainingDays,
  };
};

// Example usage
const startingDay: string = 'Monday'; // เลือกวันที่เริ่มต้น (เช่น 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday')
const totalQueue: number = 623; // จำนวนคิวทั้งหมด
const queuesPerDay: number = 2; // จำนวนคิวที่เรียกต่อวัน

const result: Result = calculateDaysToFinishQueue(startingDay, totalQueue, queuesPerDay);
console.log(`จำนวนเดือนที่ใช้ในการหมดคิว: ${result.months} เดือน ${result.days} วัน`);
