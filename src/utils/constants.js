// Mock data for the application

export const MOCK_PROJECTS = [
  { id: 1, name: 'پروژه ساختمان مرکزی', code: 'PRJ-001' },
  { id: 2, name: 'پروژه برج تجاری پارس', code: 'PRJ-002' },
  { id: 3, name: 'پروژه مجتمع مسکونی سعادت‌آباد', code: 'PRJ-003' },
  { id: 4, name: 'پروژه بازسازی پارک ملت', code: 'PRJ-004' },
  { id: 5, name: 'پروژه توسعه فاز دو', code: 'PRJ-005' },
];

export const MOCK_COMPANIES = [
  { id: 1, name: 'شرکت ساختمانی آسمان', type: 'پیمانکار' },
  { id: 2, name: 'شرکت مهندسی پارس', type: 'مشاور' },
  { id: 3, name: 'شرکت سرمایه‌گذاری ایرانیان', type: 'کارفرما' },
  { id: 4, name: 'شرکت تعاونی مسکن مهر', type: 'سرمایه‌گذار' },
];

export const MOCK_TIMESHEETS = [
  { id: 1, employee: 'احمد محمدی', date: '1403/09/05', hours: 8, project: 'پروژه ساختمان مرکزی' },
  { id: 2, employee: 'فاطمه کریمی', date: '1403/09/05', hours: 7.5, project: 'پروژه برج تجاری پارس' },
  { id: 3, employee: 'رضا احمدی', date: '1403/09/04', hours: 9, project: 'پروژه مجتمع مسکونی' },
  { id: 4, employee: 'مریم صادقی', date: '1403/09/04', hours: 8, project: 'پروژه بازسازی پارک' },
];

export const MENU_ITEMS = [
  {
    id: 1,
    title: 'بارگذاری اسناد به پروژه‌ها',
    icon: 'camera',
    route: '/upload-document',
    description: 'اسکن و بارگذاری اسناد'
  },
  {
    id: 2,
    title: 'لیست شرکت‌ها',
    icon: 'building',
    route: '/companies',
    description: 'مشاهده و مدیریت شرکت‌ها'
  },
  {
    id: 3,
    title: 'لیست پروژه‌ها',
    icon: 'folder',
    route: '/projects',
    description: 'مشاهده پروژه‌های فعال'
  },
  {
    id: 4,
    title: 'تایم‌شیت کارکنان',
    icon: 'time',
    route: '/timesheets',
    description: 'ثبت ساعات کاری'
  }
];
