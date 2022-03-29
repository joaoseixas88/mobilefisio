

const AllDates = [
    'Wed Sep 20 2028 20:44:44 GMT-0300 (Horário Padrão de Brasília)',
    'Fri Apr 23 2021 15:15:15 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Nov 13 2021 18:18:18 GMT-0300 (Horário Padrão de Brasília)',
    'Mon May 05 2025 11:35:35 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Jul 17 2029 15:39:39 GMT-0300 (Horário Padrão de Brasília)',
    'Mon Sep 13 2027 20:44:44 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Feb 28 2026 23:47:47 GMT-0300 (Horário Padrão de Brasília)',
    'Sun Feb 22 2026 10:34:34 GMT-0300 (Horário Padrão de Brasília)',
    'Mon Jul 17 2028 00:48:48 GMT-0300 (Horário Padrão de Brasília)',
    'Wed Jul 19 2028 13:13:13 GMT-0300 (Horário Padrão de Brasília)',
    'Fri May 26 2023 20:44:44 GMT-0300 (Horário Padrão de Brasília)',
    'Sun Apr 16 2023 19:19:19 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Apr 09 2020 07:31:31 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Jun 12 2029 07:07:07 GMT-0300 (Horário Padrão de Brasília)',
    'Wed Oct 13 2021 23:47:47 GMT-0300 (Horário Padrão de Brasília)',
    'Mon Mar 26 2029 07:31:31 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Aug 05 2028 16:16:16 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Jun 05 2029 19:43:43 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Aug 01 2020 02:02:02 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Jun 21 2022 16:16:16 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Jun 13 2024 10:58:58 GMT-0300 (Horário Padrão de Brasília)',
    'Sun Jan 24 2027 12:12:12 GMT-0300 (Horário Padrão de Brasília)',
    'Mon May 25 2026 01:25:25 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Aug 22 2020 05:29:29 GMT-0300 (Horário Padrão de Brasília)',
    'Wed Jul 08 2026 01:49:49 GMT-0300 (Horário Padrão de Brasília)',
    'Wed Sep 13 2023 12:12:12 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Nov 27 2027 10:58:58 GMT-0300 (Horário Padrão de Brasília)',
    'Sun Apr 11 2021 06:06:06 GMT-0300 (Horário Padrão de Brasília)',
    'Mon Oct 03 2022 04:52:52 GMT-0300 (Horário Padrão de Brasília)',
    'Wed May 16 2029 05:53:53 GMT-0300 (Horário Padrão de Brasília)',
    'Mon Jan 03 2022 13:37:37 GMT-0300 (Horário Padrão de Brasília)',
    'Fri Mar 14 2025 08:32:32 GMT-0300 (Horário Padrão de Brasília)',
    'Fri Aug 11 2023 13:13:13 GMT-0300 (Horário Padrão de Brasília)',
    'Sun Jul 29 2029 04:52:52 GMT-0300 (Horário Padrão de Brasília)',
    'Sun Jul 22 2029 10:10:10 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Sep 21 2028 10:10:10 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Jul 24 2025 18:42:42 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Aug 19 2025 03:51:51 GMT-0300 (Horário Padrão de Brasília)',
    'Fri Nov 14 2025 14:14:14 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Sep 14 2023 11:35:35 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Aug 30 2022 01:49:49 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Jan 20 2028 16:40:40 GMT-0300 (Horário Padrão de Brasília)',
    'Fri Aug 14 2026 02:26:26 GMT-0300 (Horário Padrão de Brasília)',
    'Fri Jul 05 2024 19:19:19 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Apr 20 2024 09:33:33 GMT-0300 (Horário Padrão de Brasília)',
    'Fri Aug 02 2024 08:08:08 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Mar 18 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Jun 03 2021 12:36:36 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Aug 10 2023 16:16:16 GMT-0300 (Horário Padrão de Brasília)',
    'Wed Jun 08 2022 20:44:44 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Oct 11 2025 04:52:52 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Jan 02 2025 19:19:19 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Aug 06 2026 07:07:07 GMT-0300 (Horário Padrão de Brasília)',
    'Thu Nov 11 2021 10:10:10 GMT-0300 (Horário Padrão de Brasília)',
    'Sat Aug 26 2023 13:13:13 GMT-0300 (Horário Padrão de Brasília)',
    'Fri Jan 01 2027 10:34:34 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Sep 04 2029 04:28:28 GMT-0300 (Horário Padrão de Brasília)',
    'Wed May 28 2025 02:26:26 GMT-0300 (Horário Padrão de Brasília)',
    'Sat May 11 2024 17:41:41 GMT-0300 (Horário Padrão de Brasília)',
    'Tue Feb 06 2024 05:53:53 GMT-0300 (Horário Padrão de Brasília)'
  ]

  function getDateValues(dates: string[]){    
    
    dates.reduce((acc, date) => {
      
      const newDate = new Date(date)
      if(acc.bigger < newDate.getFullYear()){
        acc.bigger = newDate.getFullYear()
      } 
      if(acc.smaller > newDate.getFullYear() ){
        acc.smaller = newDate.getFullYear()
      }
      return acc

    },{
      bigger: 0,
      smaller: 0,
    })

  }

  getDateValues(AllDates)