/*

----------- DATAactives.js
This is the active officer data for the Active Officers panel in the OFFICERS page.

********* It exports an array of JSON object constants. ************

Each JSON object has the format:

{
    name: 'Officer Name',
    year: 'Class of []',
    major: '[INSERT MAJOR HERE]',
    cohort: '[TERM] [YEAR] Cohort',
    position: 'President',
    linkedin: 'https://linkedin.com/[officer]',
    image: '/officers/[officer-photo].jpg',
}

******* Each json must follow the above format. If any properties are in a different order as listed above or
even missing, the program will likely crash. *************

This entire project imports all photos from the 'public' directory. 
The path prefix '/' is already set to already reference this folder.
So, if the file 'image1.png' is in the 'folder1' directory in the 'public' directory, reference this file with the file path:
    '/folder1/image1.png'. DO NOT USE THE PATH '/public/folder1/image1.png', IT WILL NOT WORK IF YOU DO SO.
Having '/' be the prefix for the path is already recognized as referencing the 'public' directory.

THIS component will pull images from the directory '/officers' in the 'public' directory.
When updating the photos, add your desired photo in this directory, and update the
exported JSONs with the appropriate image paths and descriptions. The path should be '/officers/[logo-file].png'.

**** Executive board and active officer photos will be in the same directory, the '/officers' directory. ****

The order which you list the officers here is there order they will be displayed
on the webpage.

*/

export const marketing = [
  {
    name: "Charlie Edwards",
    year: "Class of 2026",
    major: "Computer Science",
    cohort: "Fall 2023 Cohort",
    position: "Committee Director, Marketing",
    linkedin: "https://www.linkedin.com/in/charles-edwards-7540a12a7/",
    image: "/officers/Chu_Colin.jpeg",
  },
  {
    name: "Seshnag Regoti",
    year: "Class of 2026",
    major: "Food Science And Technology",
    cohort: "Fall 2023 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/seshnag-regoti/",
    image: "/officers/Chu_Colin.jpeg",
  },
  {
    name: "Nicholas Kim",
    year: "Class of 2027",
    major: "Mechanical Engineering",
    cohort: "Spring 2023 Cohort",
    position: "Marketing",
    linkedin: "https://www.linkedin.com/in/nickim04/",
    image: "/officers/Chu_Colin.jpeg",
  },
  {
    name: 'Ariba Arif',
    year: 'Class of 2026',
    major: 'Civil Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/ariba-arif-92315a32a/',
    image: '/officers/Chu_Colin.jpeg',
  },
  {
    name: 'Ben Busche',
    year: 'Class of 2026',
    major: 'Mechanical Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/ben-busche/',
    image: '/officers/Chu_Colin.jpeg',
  },
  {  
    name: 'Kyoungdeok Han',
    year: 'Class of 2027',
    major: 'Computer Science',
    cohort: 'Fall 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/kyoungdeok-han-1937a9280/',
    image: '/officers/Chu_Colin.jpeg',
  },
  {
    name: 'Naomi Petersen',
    year: 'Class of 2027',
    major: 'Biomedical Engineering',
    cohort: 'Fall 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/naomipetersen-/',
    image: '/officers/Chu_Colin.jpeg',
  },
  {
    name: 'Angie Li',
    year: 'Class of 2028',
    major: 'Civil Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/angie-li-65a242361/',
    image: '/officers/Chu_Colin.jpeg',
  },
    {
    name: 'Ethan Thurston',
    year: 'Class of 2027',
    major: 'Electrical Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/ethanthurston/',
    image: '/officers/Chu_Colin.jpeg',
  },
    {
    name: 'Jacob Mashini',
    year: 'Class of 2027',
    major: 'Civil and Environmental Engineering',
    cohort: 'Spring 2024 Cohort',
    position: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/jacob-mashini-0105b0295/',
    image: '/officers/Chu_Colin.jpeg',
  },
];
